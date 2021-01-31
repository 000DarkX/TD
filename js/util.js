function on_error(msg) {
    if (document.getElementById("error").children.length > 1000) {
        document.getElementById("error").children[0].remove();
    }
    document.getElementById("error").innerHTML += msg +"<br>";
}


async function addScript(path) {
    return new Promise((t, f) => {
        let d = document.getElementById(path);
        if (d)
            t(d.src);

        let script = document.createElement("script");
        script.onload = () => {
            on_error(`Script loaded: ${script.src}`);
            t(script.src);
        };
        script.onerror = () => {
            on_error("script failed to load: " + path);
            f(false);
        }
        script.src = path;
        script.id  = path;
        document.body.appendChild(script);

        let timerb = setTimeout(() => {
            f(false);
        }, 5000);
    });
}

function removeScript(path) {
    let d = document.getElementById(path);

    if (d) {
        console.log("removing " + path);
        d.remove();
    }
}

function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


// FIX ME
class Loader {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.scripts = [];
        this.promises = [];
        this.promiseIndex =0;
        this.scriptIndex = 0;
        this.total   = 0;
        this.current = 0;
        this.ticks   = 0;
    }

    unload() {
        for (let i = 0; i < this.scripts.length; ++i) {
            console.log("trying " + this.scripts[i]);
            removeScript(this.scripts[i]);
        }
    }

    addPromise(p) {
        this.promises.push(p);
        this.total += 1;
    }

    addScript(name) {
        this.scripts.push(name);
        this.total += 1;
    }

    async start() {
        this.ticks = 0;
        this.current = 0;

        return new Promise(async (t, f) => {
                while (true) {
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

                    let fx50 = this.canvas.width * 0.25;
                    let fy50 = this.canvas.height * 0.45;
                    let fw50 = this.canvas.width * 0.75;
                    let fh50 = this.canvas.height * 0.25;
    
                    this.context.fillStyle = "silver";
                    this.context.fillRect(fx50, fy50, fw50, fh50); // BG
                    this.context.fillStyle = "gold";
                    
                    let ratio = (this.current + this.ticks) / (this.total + 10); 
    
                    this.context.fillRect(fx50 + 1, fy50 + 1, fw50 * ratio, fh50 - 1);
    
                    if (this.scriptIndex  < this.scripts.length) {
                        try {
                            //this.scripts[this.scriptIndex] =
                            await addScript(this.scripts[this.scriptIndex]);
                        } catch (e) {
                            console.log(e.stack);
                        }
                        ++this.current;
                        ++this.scriptIndex;
                    } else if (this.promiseIndex  < this.promises.length) {
                        try {
                            await this.promises[this.promiseIndex]();
                        } catch (e) {
                            console.log(e.stack);
                        }
                        ++this.current;
                        ++this.promiseIndex;
                    }
    
                    if (ratio >= 1) {
                        clearInterval(this.timer);
                        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        t(true);
                        break;
                    }
    
                    ++this.ticks;
                }
        });
    }
}

function _xyToCompass(x, y, px, py)
{
    let x2 = x - px;
    let y2 = y - py;

    if (x2 < 0) {
        if (y2 < 0)
            return 'NW';
        else if (y2 > 0)
            return 'SW'
        else
            return 'W';
    } else if (x2 > 0) {
        if (y2 < 0)
            return 'NE';
        else if (y2 > 0)
            return 'SE'
        else
            return 'E';
    } else {
        if (y2 < 0)
            return 'N';
        else if (y2 > 0)
            return 'S'
    }

    return 'C';
}

function _move(x, y, dir, spd)
{
    switch (dir.toLowerCase())
    {
        case "n":
            return [x, y + (-1 * spd)];
        break;
        case "s":
            return [x, y + (1 * spd)];
        break;
        case "e":
            return [x + (1 * spd), y];
        break;
        case "w":
            return [x + (-1 * spd),y];
        break;
        case "c": return [x, y];
    }
}

function _canMove(tile, terrain)
{
    return terrain[tile] && terrain[tile].toLowerCase() == "path";
}

function _canBuildXY(map, tower, x, y)
{
    const width = map.data.width;
    const height = map.data.height;
    var id   = x+y*width;

    if (id < 0 || id >= map.data.layers[0].data.length || x < 0 || x >= width || y < 0 || y >= height)
        return false;

    const tile = map.data.layers[0].data[id] - 1;

    let type = tower.buildType || [ "Build" ];
    for (let i = 0; i < type.length; ++i) {
        type[i] = type[i].toLowerCase();
    }

    if (map.terrains[tile].toLowerCase() == "build" && type.includes("build"))
        return true;
    else if (map.terrains[tile].toLowerCase() == "water" && type.includes("water"))
        return true;

    return false;
}

function calcValue(round, rating, tier)
{
    const a = round * rating;
    const b = a + rating * tier * randInt(25, 50) / 100;

    return Math.min(b, tier * 100);
}

function calcDmgRed(def, atk) {
    //return 10 * (def / (def + 20 + (55 * atk)));
    return 10 * (def / (def + 20 + (25 * atk)));
}

// calc shields
function calc2ndValue(round, rating, tier, type)
{
    let result = 0;
    for (let i = 1; i <= round; ++i) {
        //result += i / (Math.pow(100 - stat, 1/2) + 10);
        //result += a * Math.pow(0.1, b * 0.2);
        switch (tier) {
            case 1:
                if (type == "shield")
                    result += Math.min( rating * ((40 * Math.pow(0.45, i)) / 10) , 100);
                else if (type == "life")
                    result += Math.min( rating * ((40 * Math.pow(0.45, i)) / 10) , 100);
                else if (type == "stat")
                    result += Math.min( rating * ((40 * Math.pow(0.15, i)) / 10) , 100);
            break;
            case 2:
                if (type == "shield")
                    result += Math.min( rating * ((80 * Math.pow(0.45, i)) / 10), 250);
                else if (type == "life")
                    result += Math.min( rating * ((80 * Math.pow(0.45, i)) / 10) , 250);
                else if (type == "stat")
                    result += Math.min( rating * ((80 * Math.pow(0.15, i)) / 10) , 100);
            break;
            case 3:
                if (type == "shield")
                    result += Math.min( rating * ((120 * Math.pow(0.45, i)) / 10), 450);
                else if (type == "life")
                    result += Math.min( rating * ((120 * Math.pow(0.45, i)) / 10) , 450);
                else if (type == "stat")
                    result += Math.min( rating * ((120 * Math.pow(0.15, i)) / 10) , 100);
            break;
            case 4:
                if (type == "shield")
                    result += Math.min(rating * ((160 * Math.pow(0.45, i)) / 10), 1000);
                else if (type == "life")
                    result += Math.min( rating * ((160 * Math.pow(0.45, i)) / 10) , 1000);
                else if (type == "stat")
                    result += Math.min( rating * ((160 * Math.pow(0.15, i)) / 10) , 100);
            break;
            case 5:
                if (type == "shield")
                    result += Math.min(rating * ((200 * Math.pow(0.45, i)) / 10), 2000);
                else if (type == "life")
                    result += Math.min( rating * ((200 * Math.pow(0.45, i)) / 10) , 2000);
                else if (type == "stat")
                    result += Math.min( rating * ((200 * Math.pow(0.15, i)) / 10) , 2000);
            break;
            case 6:
                if (type == "shield")
                    result += Math.min(rating * ((300 * Math.pow(0.75, i)) / 10), 4000);
                else if (type == "life")
                    result += Math.min( rating * ((300 * Math.pow(0.99, i)) / 10) , 4000);
            break;
            case 7:
                if (type == "shield")
                    result += Math.min(rating * ((420 * Math.pow(0.75, i)) / 10), 10000);
                else if (type == "life")
                    result += Math.min( rating * ((420 * Math.pow(0.99, i)) / 10) , 10000);
            break;
            case 8:
                if (type == "shield")
                    result += Math.min(rating * ((546 * Math.pow(0.75, i)) / 10), 24000);
                else if (type == "life")
                    result += Math.min( rating * ((546 * Math.pow(0.99, i)) / 10) , 24000);
            break;
            case 9:
                if (type == "shield")
                    result += Math.min(rating * ((655 * Math.pow(0.75, i)) / 10), 32000);
                else if (type == "life")
                    result += Math.min( rating * ((655 * Math.pow(0.99, i)) / 10) , 32000);
            break;
            case 10:
                if (type == "shield")
                    result += Math.min(rating * ((721 * Math.pow(0.75, i)) / 10), 64000);
                else if (type == "life")
                    result += Math.min( rating * ((721 * Math.pow(0.99, i)) / 10) , 64000);
            break;
        }
    }
    return result;
}

function canHit(tower, unit)
{
    if (unit.moveType == "air" && !tower.targets.includes("air"))
        return false;

    if (unit.moveType == "ground" && !tower.targets.includes("ground"))
        return false;

    if (unit.trait && unit.trait.includes("invis"))
    {
        const gotsight = tower.buff.sight;

        if (gotsight) {
            if (gotsight.length > 0)
                return true;
            else
                return false;
        }
        else
            return false;
    }

    if (unit.trait && unit.trait.includes("invis2"))
    {
        const gotsight = tower.buff.sight;

        if (gotsight) {
            if (gotsight.length > 0 && gotsight.level >= 2)
                return true;
            else
                return false;
        }
        else
            return false;
    }

    return true;
}

/*function _randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function _canMove(tile)
{
    switch (tile - 1) {
        case 0: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 18:
        case 19: case 20: case 33:
            return true;
        break;
    }

    return false;
}

function _canBuild(tile)
{
    return !_canMove(tile) && (tile - 1) != 42;
}

function _getXY(id, w, dir)
{
    let x = id % w;
    let y = Math.trunc(id / w);

    switch (dir.toLowerCase()) {
        case "n":
            return [x,y-1];
        break;
        case "s":
            return [x, y+1];
        break;
        case "e":
            return [x+1, y];
        break;
        case "w":
            return [x-1,y];
        break;
        case "c":
            return [x,y];
        break;
    }

    return [-1, -1];
}

function _getID(x, y, w, dir)
{
    switch (dir.toLowerCase()) {
        case "n":
            return x+(y-1)*w;
        break;
        case "s":
            return x+(y+1)*w;
        break;
        case "e":
            return x+1+(y)*w;
        break;
        case "w":
            return x-1+(y)*w;
        break;
        case "c":
            return x + y * w;
        break;
    }

    return -1;
}

function _canBuildXY(data, x, y)
{
    const width = data.width;
    const height = data.height;
    var id   = x+y*width;
    if (id < 0 || id >= data.data.length || x < 0 || x >= width || y < 0 || y >= height)
        return false;
    const tile = data.data[id];

    return _canBuild(tile);
}

function _check(data, x, y, dir) {
    const width = data.width;
    const height = data.height;

    switch (dir.toLowerCase()) {
        case "n":
            var id   = x+(y-1)*width;
            if (id < 0 || id >= data.data.length || x < 0 || x >= width || y - 1< 0 || y - 1 >= height)
                return false;
            var tile = data.data[id];
            if (_canMove(tile))
                return true;
        break;
        case "s":
            var id   = x+(y+1)*width;
            if (id < 0 || id >= data.data.length || x < 0 || x >= width || y + 1 < 0 || y + 1 >= height)
                return false;
            var tile = data.data[id];
            if (_canMove(tile))
                return true;
        break;
        case "e":
            var id   = x+1+y*width;
            if (id < 0 || id >= data.data.length || x + 1 < 0 || x + 1 >= width || y < 0 || y >= height)
                return false;
            var tile = data.data[id];
            if (_canMove(tile))
                return true;
        break;
        case "w":
            var id   = x-1+y*width;
            if (id < 0 || id >= data.data.length || x - 1 < 0 || x - 1 >= width || y < 0 || y >= height)
                return false;
            var tile = data.data[id];
            if (_canMove(tile))
                return true;
        break;
        case "c":
            var id   = x+y*width;
            if (id < 0 || id >= data.data.length || x < 0 || x > (width - 1) || y < 0 || y >= (height - 1))
                return false;
            var tile = data.data[id];
            if (_canMove(tile))
                return true;
        break;
    }

    return false;
}







function calcDmg(tower, unit) {
    function getValue(from, n)
    {
        if (from[n])
            return from[n];
        else
            return 0;
    }

    let damage = tower.damage;

    const isShield = unit.shield && unit.shield[0] > 0;
    const isDivine = unit.divineLife && unit.divineLife[0] > 0;


    if (tower.damageArray) {

        if (isShield || isDivine && tower.subtypes.includes("white")) {
            return 0;
        }

        if (!tower.owner.damageIndex && tower.owner.damageIndex < 0)
            tower.owner.damageIndex = 0;

        tower.owner.damageIndex += 1;

        if (tower.owner.damageIndex >= tower.damageArray)
            tower.owner.damageIndex = tower.damageArray - 1;
    }

    if (unit.immune) {
        let b = false;
        unit.immune.some(i => {
            if (tower.subtypes.includes(i))
            {
                b = true;
                return true;
            }

            return false;
        });
        if (b)
            return 0;
    }

    if (unit.buff && unit.buff.includes("speedy")) {
        unit.speed[0] += 0.25;
        if (unit.speed[0] >= unit.speed[1] * 3) {
            unit.speed[0] = unit.speed[1] * 3;
        }
    }

    if (unit.buff && unit.buff.includes("hardy")) {
        unit.defense[0] += 0.25;
        if (unit.defense[0] >= unit.defense[1] * 3) {
            unit.defense[0] = unit.defense[1] * 3;
        }
    }

    if (unit.buff && unit.buff.includes("resisty")) {
        unit.resist[0] += 0.25;
        if (unit.resist[0] >= unit.resist[1] * 3) {
            unit.resist[0] = unit.resist[1] * 3;
        }
    }

    let inflict = tower.levels[tower.level-1].inflict;

    if (tower.inflict) {
        if (!inflict)
            inflict = {};

        for (let name in tower.inflict) {
            inflict[name] = tower.inflict[name];
        }
    }
    
    if (inflict) {
        if (!unit.debuff)
            unit.debuff = {};

        for (let name in inflict) {
            const amount =  inflict[name];
            const debuff =  unit.debuff[name];

            if (debuff && debuff.start) {
                debuff.start(unit, ...amount);
            } else {
                let newname = name;
                let state  =  window[`${name}State`];

                if (!state) {
                    state    = new window[`stateState`];
                    newname = amount[2];
                }
                else
                    state    = new state;

                state.owner = tower;
                state.start(unit, ...amount, newname); // fix me (name only can be state atm)
                unit.debuff[name] = state; 
            }
        }
    }

    if (typeof(damage) == "object") {
        damage = _randInt(damage[0], damage[1]);
    }

    if (unit.weakness) {
        let high = 1;
        for (let i = 0; i < tower.subtypes.length; ++i) {
            const weakness = unit.weakness[tower.subtypes[i]];

            if (weakness > high) {
                high = weakness;
            }
        }

        damage *= high;
    }

    if (unit.resistance) {
        let high = 1;
        for (let i = 0; i < tower.subtypes.length; ++i) {
            const resistance = unit.resistance[tower.subtypes[i]];

            if (resistance < high) {
                high = resistance;
            }
        }

        damage *= high;
    }

    let useDivine = damage > unit.life[1] * 0.1;
    useDivine |= unit.life[0] / unit.life[1] < 0.5;

    if (unit.divineLife && unit.divineLife[0] > 0 && useDivine) {
        unit.divineLife[0] -= 1;
        unit.divineTime     = 25;
        return 0;
    }

    return damage + (getValue(tower, "speedDamageRatio") * unit.speed[0]);
}

function calcDef(tower, unit, damage) {
    if (damage == 0)
        return damage;

    const hasDivine = unit.divineLife && unit.divineLife[0] > 0;

    if (hasDivine)
        return 0;

    unit.shieldTime = 3;
    if (tower.damageType != "direct" && !tower.shieldPierce && unit.shield && unit.shield[0] > 0) {    
        unit.shield[0] -= damage;
        if (unit.shield[0] < 0)
        {
            damage += -unit.shield[0];
            unit.shield[0] = 0;
        } else {
            return 0;
        }
    }

    if (unit.buff && unit.buff.includes("bubbleArmor") && (tower.buff && !tower.buff.support)) {
        damage *= 0.05;
    }

    damage *= unit.damageReduction;

    const hasFlack = unit.flack;
    let flackDef = 0;

    if (hasFlack)
        flackDef = unit.flack[0];

    if (unit.flackPierce) {
        flackDef = 0;
    }

    if (tower.damageType == "direct") 
        return damage;
    else if (tower.damageType == "physical") {
        if (tower.armorPierce)
            return damage - flackDef;
        return damage - unit.defense[0] - flackDef;
    }
    else if (tower.damageType == "magical") {
        if (tower.magicPierce)
            return damage;
        return damage - unit.resist[0];
    }

    return 0;
}

function _mark(maze, sid, id, facing) { // N S E W
    switch (facing.toUpperCase()) {
        case 'N':
            if (maze[sid])
                ++maze[sid][0];
            else
                maze[sid] = [1 ,0 ,0, 0];
    
            if (maze[id])
                ++maze[id][1];
            else    
                maze[id] = [0, 1, 0, 0];
        break;
        case 'S':
            if (maze[sid])
                ++maze[sid][1];
            else
                maze[sid] = [0 ,1 ,0, 0];
    
            if (maze[id])
                ++maze[id][0];
            else    
                maze[id] = [1, 0, 0, 0];
        break;
        case 'E':
            if (maze[sid])
                ++maze[sid][2];
            else
                maze[sid] = [0 ,0 , 1, 0];
    
            if (maze[id])
                ++maze[id][3];
            else    
                maze[id] = [0, 0, 0, 1];
        break;
        case 'W':
            if (maze[sid])
                ++maze[sid][3];
            else
                maze[sid] = [0 ,0 ,0, 1];
    
            if (maze[id])
                ++maze[id][2];
            else    
                maze[id] = [0, 0, 1, 0];
        break;
    }
}
*/
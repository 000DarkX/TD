towers = 0;

class Tower extends InGameObject {
    //static towers = 0;

    constructor(base) {
        super();
        this.level  = 1;
        this.trait = [];
        this.trait   = [];
        this.buff    = {};
        this.debuff = {};
        this.techLevel = [];
        this.kills  = 0;
        this.inflict = {};
        this.fireType = "front";
        this.subtypes = [];
        this.damageDealt = 0;
        this.kills       = 0;
        Object.assign(this, base);
        this.uid   = ++towers;
        this.ticks = 0;
        this.charges = 0;
        this.damageIndex = 0;
        this.soulCaptured  = 0;

        const buffs = this.buffs;
        for (let name in buffs) {
            const buff = buffs[name];
            this.applyState(...buff, name);
        }

        if (!this.upgrades)
            return;

        const upgrades = this.upgrades;
        for (let i = 0; i < upgrades.length; ++i) {
            const level = this.techLevel[i];
            if (!level)
            {
                this.techLevel[i] = 1;
            }
        }
    }

    buildCost(team) {
        const growth = (team.buildTypes[this.key] * this.costGrowth) || 0;
        return (this.cost || this.g) + growth;
    }

    sell(team, mapper) {
        delete team.towers[this.mx+this.my*mapper.width];

        team.g += this.sellPrice;
    }

    get damageArray() {
        return this.levels[this.level-1].damageArray || 0;
    }

    get random() {
        return this.levels[this.level-1].random || false;
    }

    get upgradeCost() {
        return this.levels[this.level-1].cost || this.levels[this.level-1].g || this.levels * 200;
    }

    get rateOfFire() {
        return this.levels[this.level-1].rof || 1;
    }

    get range() {
        return this.levels[this.level-1].range || 0;
    }

    get color() {
        return this.levels[this.level-1].color || "black";
    }

    get damageType() {
        return this.levels[this.level-1].damageType || "physical";
    }

    get attacks() {
        return (this.levels[this.level-1].attacks || 1) + (this.baseAttacks || 0);
    }

    get charge() {
        return this.levels[this.level-1].charge || [0, 0];
    }

    get multi() {
        return (this.levels[this.level-1].multi || false) || (this.baseMulti);
    }

    get souls() {
        return this.levels[this.level-1].souls || 0;
    }
    
    get soulDamage() {
        return this.levels[this.level-1].soulDamage || 0;
    }

    get directDamageChance() {
        return this.levels[this.level-1].directDamageChance || 0;
    }

    get bossDamage() {
        return this.levels[this.level-1].bossDamage || 0;
    }


    attackUnit(projectile, unit, mapper, grid, pgrid, towers, cellWidth, cellHeight) {
        const damage = this.actualDamageVsUnit(projectile, unit, mapper, grid, pgrid, towers, cellWidth, cellHeight);

        unit.shieldTime = 3;
        if (damage < unit.life[0]) {
            this.damageDealt += damage;
            unit.life[0] -= damage;
        } else {
            this.damageDealt += unit.life[0];
            this.kills += 1;
            unit.died(this);
        }
    }

    newActualDamageVsUnit(projectile, unit, mapper, grid, pgrid, towers, cellWidth, cellHeight)
    {
        let damage = this.actualDamage(mapper, grid, pgrid, towers, cellWidth, cellHeight);
        let shield  = unit.shield[0];
        let colors  = ["red", "green", "blue", "purple", "yellow", "white", "black", "brown"];
        let color   = this.color;
        let defense = randInt(unit.defense[0], unit.defense[1]);
        let resist  = randInt(unit.resist[0], unit.resist[1]);


        // if random color pick here
        if (this.randomColor) {
            color = randInt(0, colors.length - 1);
        }

        if (unit.immune) {
            let b = false;
            unit.immune.some(i => {
                if (this.subtypes.includes(i))
                {
                    b = true;
                    return true;
                }
    
                return false;
            });
            if (b)
                return 0;
        }

        let useDivine = damage > unit.life[1]   * 0.1;
        useDivine |= unit.life[0] / unit.life[1] < 0.5;

        if (unit.divineLife && unit.divineLife[0] > 0 && useDivine) {
            unit.divineLife[0] -= 1;
            unit.divineTime    = 25;
            return 0;
        }

        if (this.armorPierce) {
            let towerArmorPierce = this.armorPierce || 0;
            defense *= 100 - (towerArmorPierce / 15);
            defense -= towerArmorPierce;

            if (defense <= 0)
                defense = 0;
        }

        // calc shield damage and piercing
        if (this.shieldPierce) {
            let towerShieldPierce = this.shieldPierce || 0;
            shield *= 100 - (towerShieldPierce / 15);
            shield -= towerShieldPierce;
    
            if (shield <= 0)
                shield = 0;
        }

        if (this.damageType != "direct"
                && shield > 0)       
        {

            if (shield >= damage) {
                unit.shield[0] -= damage;
                damage = 0;
            } else {
                const reduced = shield - damage;
                damage += reduced;
                unit.shield[0] = 0;
            }
        }

        if (unit.trait && unit.trait.includes("speedy")) {
            unit.speed[0] += 0.25;
            if (unit.speed[0] >= unit.speed[1] * 3) {
                unit.speed[0] = unit.speed[1] * 3;
            }
        }
    
        if (unit.trait && unit.trait.includes("hardy")) {
            unit.defense[0] += 0.25;
            unit.defense[1] += 0.25;
            if (unit.defense[0] >= unit.defense[1] * 3) {
                unit.defense[0] = unit.defense[1] * 3;
            }
        }
    
        if (unit.trait && unit.trait.includes("resisty")) {
            unit.resist[0] += 0.25;
            unit.resist[1] += 0.25;
            if (unit.resist[0] >= unit.resist[1] * 3) {
                unit.resist[0] = unit.resist[1] * 3;
            }
        }

        if (unit.weakness) {
            let high = 1;
            for (let i = 0; i < this.subtypes.length; ++i) {
                const weakness = unit.weakness[this.subtypes[i]];
    
                if (weakness > high) {
                    high = weakness;
                }
            }
    
            damage *= high;
        }
    
        if (unit.resistance) {
            let high = 1;
            for (let i = 0; i < this.subtypes.length; ++i) {
                const resistance = unit.resistance[this.subtypes[i]];
    
                if (resistance < high) {
                    high = resistance;
                }
            }
    
            damage *= high;
        }

        let inflict = this.levels[this.level-1].inflict;

        if (this.inflict) {
            if (!inflict)
                inflict = {};

            for (let name in this.inflict) {
                inflict[name] = this.inflict[name];
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
                    let state  =  window[`${capitalize(name)}State`];
    
                    if (!state) {
                        state    = new window[`ObjectState`];
                        newname = amount[2];
                    }
                    else
                        state    = new state;
    
                    state.owner = this;
                    state.start(unit, ...amount, newname); // fix me (name only can be state atm)
                    unit.debuff[name] = state; 
                }
            }
        }

        let pAc     = unit.pAc[0];
        let mAc     = unit.mAc[0];

        unit.armorLife -= 1;

        if (this.speedDamageRatio) {
            damage += this.speedDamageRatio * unit.speed[0];
        }

        if (this.directDamageChance && randInt(1, 100) <= this.directDamageChance) {
            return damage;
        }

        if (this.damageType == "direct" || unit.armorLife <= 0) {
            if (unit.armorLife < 0)
                unit.armorLife = 0;
            return damage;
        } else if (this.damageType == "physical") {
            let p = (pAc - this.level) * 3 + 30;
            if (p < 0)
                p = 0;

            let armor   = unit.parmor[0];
            if (randInt(1, 100) <= p) {
                damage *= 1 - armor;
            }

            if (damage > resist) {
                damage -= resist;
                if (damage < 0)
                    damage = 0;
            }
            else
                damage = 0;
        } else if (this.damageType == "magical") {
            let p = (mAc - this.level) * 3 + 30;
            if (p < 0)
                p = 0;

            let armor   = unit.marmor[0];
            if (randInt(1, 100) <= p) {
                damage *= 1 - armor;
            }

            if (damage > defense) {
                damage -= defense;
                if (damage < 0)
                    damage = 0;
            }
            else    
                damage = 0;
        }

        return damage;
    }

    actualDamageVsUnit(projectile, unit, mapper, grid, pgrid, towers, cellWidth, cellHeight)
    {
        if (unit.setup == "new") {
            return this.newActualDamageVsUnit(projectile, unit, mapper, grid, pgrid, towers, cellWidth, cellHeight);
        }


        let damage = this.actualDamage(mapper, grid, pgrid, towers, cellWidth, cellHeight);
        let shield  = unit.shield[0];
        let defense = unit.defense[0];
        let resist  = unit.resist[0];
        let colors  = ["red", "green", "blue", "purple", "yellow", "white", "black", "brown"];
        let color   = this.color;

        if (this.bossDamage && unit.subtypes instanceof Array && unit.subtypes.includes("boss"))
            damage += this.bossDamage;

        if (this.speedDamageRatio) {
            damage += this.speedDamageRatio * unit.speed[0];
        }

        if (this.randomColor) {
            color = randInt(0, colors.length - 1);
        }

        if (this.armorPierce) {
            let towerArmorPierce = this.armorPierce || 0;
            defense *= 100 - (towerArmorPierce / 15);
            defense -= towerArmorPierce;

            if (defense <= 0)
                defense = 0;
        }
                
        if (this.shieldPierce) {
            let towerShieldPierce = this.shieldPierce || 0;
            shield *= 100 - (towerShieldPierce / 15);
            shield -= towerShieldPierce;
    
            if (shield <= 0)
                shield = 0;
        }
        
        if (this.damageType != "direct"
                && shield > 0)       
        {

            if (shield >= damage) {
                unit.shield[0] -= damage;
                damage = 0;
            } else {
                const reduced = shield - damage;
                damage += reduced;
                unit.shield[0] = 0;
            }
        }

        if (this.directDamageChance && randInt(1, 100) <= this.directDamageChance) {
            return damage;
        }

        if (unit.immune) {
            let b = false;
            unit.immune.some(i => {
                if (this.subtypes.includes(i))
                {
                    b = true;
                    return true;
                }
    
                return false;
            });
            if (b)
                return 0;
        }

        let useDivine = damage > unit.life[1]   * 0.1;
        useDivine |= unit.life[0] / unit.life[1] < 0.5;

        if (unit.divineLife && unit.divineLife[0] > 0 && useDivine) {
            unit.divineLife[0] -= 1;
            unit.divineTime    = 25;
            return 0;
        }

        if (unit.trait && unit.trait.includes("speedy")) {
            unit.speed[0] += 0.25;
            if (unit.speed[0] >= unit.speed[1] * 3) {
                unit.speed[0] = unit.speed[1] * 3;
            }
        }
    
        if (unit.trait && unit.trait.includes("hardy")) {
            unit.defense[0] += 0.25;
            if (unit.defense[0] >= unit.defense[1] * 3) {
                unit.defense[0] = unit.defense[1] * 3;
            }
        }
    
        if (unit.trait && unit.trait.includes("resisty")) {
            unit.resist[0] += 0.25;
            if (unit.resist[0] >= unit.resist[1] * 3) {
                unit.resist[0] = unit.resist[1] * 3;
            }
        }

        if (unit.weakness) {
            let high = 1;
            for (let i = 0; i < this.subtypes.length; ++i) {
                const weakness = unit.weakness[this.subtypes[i]];
    
                if (weakness > high) {
                    high = weakness;
                }
            }
    
            damage *= high;
        }
    
        if (unit.resistance) {
            let high = 1;
            for (let i = 0; i < this.subtypes.length; ++i) {
                const resistance = unit.resistance[this.subtypes[i]];
    
                if (resistance < high) {
                    high = resistance;
                }
            }
    
            damage *= 1 - high;
        }

        let inflict = this.levels[this.level-1].inflict;

        if (this.inflict) {
            if (!inflict)
                inflict = {};

            for (let name in this.inflict) {
                inflict[name] = this.inflict[name];
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
                    let state  =  window[`${capitalize(name)}State`];
    
                    if (!state) {
                        state    = new window[`ObjectState`];
                        newname = amount[2];
                    }
                    else
                        state    = new state;
    
                    state.owner = this;
                    state.start(unit, ...amount, newname); // fix me (name only can be state atm)
                    unit.debuff[name] = state; 
                }
            }
        }

        switch (this.damageType.toLowerCase()) {
            case "direct":
                return damage;
            break;
            case "magical":
                var r = 1 - calcDmgRed(resist, damage);
                if (r < 0)
                    r = 0.001;
                const magicalDmg = damage * r;
                if (magicalDmg < 0)
                    return 0;
                else
                    return magicalDmg;
            break;
            case "physical":
                var r = 1 - calcDmgRed(defense, damage);
                if (r < 0)
                    r = 0.001;
                const phyDmg = damage * r;
                if (phyDmg < 0)
                    return 0;
                else
                    return phyDmg;
            break;
        }
    }

    actualDamage(mapper, grid, pgrid, towers, cellWidth, cellHeight)
    {
        const d = this.calcDamage(mapper, grid, pgrid, towers, cellWidth, cellHeight);

        if (this.soulCaptured) {
            this.soulCaptured -= 1;
        }

        if (this.damageArray) {
            this.damageIndex += 1;
        }

        return d;
    }

    calcDamage(mapper, grid, pgrid, towers, cellWidth, cellHeight)
    {
        let level = this.level || 1;
        let damage = this.levels[level-1].damage || 0;

        if (this.charge) {
            const max = Math.min(this.charge[1], this.charges);
            damage += randInt(this.charge[0], max);
        }

        if (this.soulCaptured) {
            damage += this.soulCaptured * this.soulDamage;
        }

        if (this.damageArray) {
            damage += this.damageArray[this.damageIndex%this.damageArray.length];
        }

        if (this.name == "Nature Tower") {
            let wrath = 0;
        
            if (this.techLevel && this.techLevel[1] >= 2) {
                for (let name in towers) {
                    const tower = towers[name];
    
                    const dist = Math.hypot(this.my - tower.my, this.mx - tower.mx);
    
                    if (dist > this.levels[this.level-1].range)
                        continue;
    
                    if (tower.name == "Nature Tower") 
                        wrath += 3;
                }
            }

            damage += wrath;
        }

        if (this.damageBonus)
            damage += this.damageBonus;

        return damage;
    }

    calcMightDamage(mapper, grid, pgrid, towers, cellWidth, cellHeight)
    {
        if (this.random) {
            return this.calcDamage(mapper, grid, pgrid, towers, cellWidth, cellHeight) * (this.attacks / 8);
        } else {
            if (!this.multi)
                return this.calcDamage(mapper, grid, pgrid, towers, cellWidth, cellHeight) * this.attacks;
            else
                return this.calcDamage(mapper, grid, pgrid, towers, cellWidth, cellHeight); 
        }
    }

    calcPotentialDamage(mapper, grid, pgrid, towers, cellWidth, cellHeight)
    {
        const level = this.level || 1;
        const range = this.levels[level-1].range || 0;
        const rof   = this.levels[level-1].rof || 1;
        return this.calcMightDamage(mapper, grid, pgrid, towers, cellWidth, cellHeight) * ((range * 3) / rof);
    }

    cx(cellWidth) {
        return this.x + cellWidth * 0.5;
    }

    cy(cellHeight) {
        return this.y + cellHeight * 0.5;
    }

    build(game, id, team, free) {
        const teamInfo = game.currentTeam(team);

        if (!teamInfo)
            return false;

        if (!teamInfo.buildTypes[this.key])
            teamInfo.buildTypes[this.key] = 0;
        
        if (Object.keys(game.currentTeam(this.team).towers).length  >= game.maxTowers)
            return false;

        if ((game.currentTeam(this.team).buildTypes[this.key] || 0) >=  game.maxOfEach[this.key])
            return false;

        const cost = free ? 0 : this.buildCost(teamInfo);

        if (teamInfo.g < cost)
            return false;

        if (game.occupied(this, id))
            return false;

        teamInfo.g -= cost;

        const mapper = window[`map${game.currentMap}`];

        if (this.name == "Tech Tower") {
            teamInfo.techLevel = 6;
        }

        teamInfo.towers[id] = this;
        this.mx         = id % mapper.width;
        this.my         = Math.trunc(id / mapper.width);
        this.x          = this.mx * game.cellWidth;
        this.y          = this.my * game.cellHeight;
        this.w          = game.cellWidth;
        this.h          = game.cellHeight;
        this.level      = 1;
        this.owner      = teamInfo;
        this.team       = team;
        this.sellPrice  = this.buildCost(teamInfo) * 0.5;

        ++teamInfo.buildTypes[this.key];

        if (this.levels[this.level-1].lifeRegen)
        {
            if (team == "blue")
                game.teamBlue.lifeRegen += this.levels[this.level-1].lifeRegen;
            else
                game.teamRed.lifeRegen += this.levels[this.level-1].lifeRegen;
        }

        game.updateRoundInfo();
        game.clearTowers = 1;
        return this;
    }

    upgradeTech(selectedTech, team)
    {
        const level         = this.techLevel[selectedTech];
        const ups           = this.upgrades[selectedTech];
        if (!ups)
            return false;

        const tech          = ups[level-1];
        if (!tech)
            return false;
        const cost          = tech.cost;

        if (team.techLevel < level + 4)
            return false;

        if (team.g < cost)
            return false;

        this.sellPrice += cost * 0.5;
        team.g -= cost;
        ++this.techLevel[selectedTech];

        if (tech.maxLife) {
            team.maxLifeBonus += tech.maxLife;
            team.life += tech.maxLife;
        }

        const techb          = this.upgrades[selectedTech][level-2];

        if (techb > 0) {
            for (let name in techb.inflict) {
                delete this.inflict[name]; // inflict handled else where
            }

            for (let name in techb.buff) {
                delete team.buff[name];
            }

            for (let name in techb.include) {
                delete this[name];
            }
        }

        for (let name in tech.include) {
            this[name] = true;
        }

        // adds states to tower
        for (let name in tech.inflict) {
            this.inflict[name] = tech.inflict[name];
        }

        if (tech.buffTeam)
            tech.buffTeam.forEach(b => team.buff[b] = true);

        // add buffs
        for (let name in tech.buff) {
            const oldState   = this.buff[name];

            if (oldState)
                oldState.stop(this);

            const info = tech.buff[name]; 
            let newname      = name;
            let state        = window[`${capitalize(name)}State`];

            if (!state) {
                state = new window[`ObjectState`]; 
                newname = info[2];
            }
            else    
                state = new state;

            
            state.start(this, ...info, newname);

            this.buff[name] = state;
        }

        return true;
    }

    upgradeTower(team) {
        const levelInfo = this.levels[this.level-1];
        
        if (!levelInfo)
            return false;

        if (this.upgradeCost != undefined && this.upgradeCost <= team.g && team.techLevel > this.level) {

            if (this.name == "Tech Tower") {
                team.techLevel = 5 + this.level + 1;
            }

            let buffs = this.buff;
            for (let name in buffs) {
                const buff = buffs[name];
                buff.stop(this);
                if (buff.length <= 0)
                    delete buffs[name];
            }

            
            this.sellPrice += this.upgradeCost * 0.5;
            buffs = this.levels[this.level-1].buff;

            for (let name in buffs) {
                const amount =  buffs[name];
                const buff =  this.buff[name];
    
                if (buff && buff.start) {
                    buff.start(this, ...amount);
                } else {
                    let newname = name;
                    let state  =  window[`${capitalize(name)}State`];
    
                    if (!state) {
                        state    = new window[`ObjectState`];
                        newname = amount[2];
                    }
                    else
                        state    = new state;
    
                    state.owner = this;
                    state.start(this, ...amount, newname); // fix me (name only can be state atm)
                    this.buff[name] = state; 
                }
            }

            team.g -= this.upgradeCost;
            ++this.level;
            
            return true;
        }

        return false;
    }

    draw(ctx) {

    }

    action(mapper, grid, pgrid, teamOn, teamOff) {
        if (this.debuff && this.debuff.web) {
            this.debuff.web.update(this);
            if (this.debuff.web.length > 0)
                return true;
        }

        ++this.ticks;

        if (this.class != "support" && this.class != "noncombat") {
            this.damageBonus = 0;

            for (let name in teamOn.towers) {
                const tower = teamOn.towers[name];
                if (tower.key == "support") {
                    const bonus = tower.levels[tower.level-1].damageBonus || 0;
                    const dist  = Math.hypot(tower.my - this.my, tower.mx - this.mx);
                    if (dist > tower.range)
                        continue;
                    this.damageBonus += bonus;
                }
            }
        }
        
        this.applyBuffsToTeamTowers(teamOn);

        if (this.buff) {
            for (let name in this.buff) {
                const buff = this.buff[name];
                buff.update(this);
                if (buff.length <= 0)
                    delete this.buff[name];
            }
        }
    }

    update(mapper, grid, pgrid, teamOn, teamOff) {
        
    }

    static remakeTower(game, towers, name, base, team, teame)
    {
        const tower = Tower.makeTower(towers, name, base);
        tower.image = game.images[tower.imagePath];
        tower.w     = game.cellWidth;
        tower.h     = game.cellHeight;
        tower.owner = team;
        tower.enemy = teame;
        return tower;
    }

    static makeTower(towers, name, base) {
        const ftower = towers[name];

        if (!ftower)
            return false;

        const tower = window[`${capitalize(ftower.type.toLowerCase())}Tower`];

        if (!tower)
            return false;

        const result = new tower(base || ftower);
        result.key = name;

        return result;
    }

    applyBuffsToTeamTowers(teamOn) {
        const range   = this.range;
        const towers  = teamOn.towers;

        this.applyBuffOsInRange(towers);
    }

    spread(projectile, chance, range, grid, pgrid, cellWidth, cellHeight) {
        const d = [ "N", "S", "E", "W", "NE", "NW", "SE", "SW"];

        let x1 = this.y;
        let y1 = this.x;
        let w1 = this.w + this.x;
        let h1 = this.h + this.y;

        const orange = range + range + 0.5;
        const dmgRatio = [0.5, 0.2, 0.1 ];

        for (let i = 0; i < 9; ++i) {
            let c = randInt(1, 100);

            let x = i % orange;
            let y = Math.trunc(i / orange);

            let t = 3;
            let n = 50;

            while (c <= chance && t && n) {
                
                switch (d) {
                    case "N":
                        y -= 1;
                    break;  
                    case "S":
                        y += 1;
                    break;
                    case "W":
                        x -= 1;
                    break;  
                    case "E":
                        x += 1;
                    break;

                    case "NW":
                        y -= 1;
                        x -= 1;
                    break;  
                    case "NE":
                        y -= 1;
                        x += 1;
                    break;
                    case "SW":
                        y += 1;
                        x -= 1;
                    break;  
                    case "SE":
                        y += 1;
                        x += 1;
                    break;
                }

                if (x >= this.x && x <= this.x + range && y >= this.y && y <= this.y + range) {
                    --n;
                    continue;
                }

                let owner        = projectile.owner;
                let target       = projectile.target;
                let unitz        = projectile.units;
                projectile.owner = undefined;
                projectile.target = undefined;
                projectile.units  = undefined;
                let pj = new Projectile(JSON.parse(JSON.stringify(projectile)));
                projectile.owner = owner;
                projectile.target = target;
                projectile.units = unitz;
                pj.type = "floor";
                pj.damage *= dmgRatio[3-t];
                pj.mx = Math.trunc(this.mx + x - range);
                pj.my = Math.trunc(this.my + y - range);
                pj.x  = pj.mx * cellWidth;
                pj.y = pj.my * cellHeight;
                pj.owner = projectile.owner;
                pj.random = false;

                /*const containb = grid.contains((p.mx - 1) * cellWidth, (p.my - 1) * cellHeight,
                        (p.mx + 1) * cellWidth, (p.my + 1) * cellHeight);*/

                const contain = grid.contain(pj.mx - range, pj.my - range, range + range + 1, range + range + 1);

                const units = [];

                contain.forEach(unit => {
                    if (!unit || unit.dead || unit.reachedEnd)
                        return false;
        
                    if (!canHit(this, unit))
                        return false;
        
                    if (unit.team == this.team)
                        return false;
        
                    const dist = Math.hypot(unit.my - this.my, unit.mx - this.mx);
        
                    if (dist > 1.5)
                        return false;
        
                    units.push(unit);
                });

                this.target = units;

                /*if (x < x1) x1 = x;
                if (w1 > x + cellWidth) w1 = x + cellWidth;
                if (y < y1) y1 = y;
                if (h1 > y + cellHeight) h1 = x + cellHeight;*/
                console.log("multi", pj.x, pj.y, projectile.x, projectile.y);
 
                pgrid.add(pj);
                pgrid.track(pj.x, pj.y, pj.w, pj.h);

                c = randInt(1, 100);
                --t;
            }

        }
    }
}
window.Tower = Tower;

class BasicTower extends Tower {
    constructor(base) {
        super(base);
    }
    
    update(mapper, grid, pgrid, teamOn, teamOff) {
        super.action(mapper, grid, pgrid, teamOn, teamOff);

        if (this.debuff && this.debuff.web && this.debuff.web.length > 0) {
            return true;
        }
    }
}
window.BasicTower = BasicTower;

class AoeTower extends Tower {
    constructor(base) {
        super(base);
    }

    update(mapper, grid, pgrid, teamOn, teamOff, cellWidth, cellHeight) {
        super.action(mapper, grid, pgrid, teamOn, teamOff);
        
        if (this.debuff && this.debuff.web && this.debuff.web.length > 0) {
            return true;
        }

        if (this.ticks < this.rateOfFire)
            return false;

        const range = this.range;
        const contain = grid.contain(this.mx - range, this.my - range, range + range + 1, range + range + 1);

        for (let i =0; i < this.attacks; ++i) {
            this.units = [];
            let r      = Math.trunc(range - 0.5);
            //let b      = r * 2 + 1;
            //let rb = randInt(-r, r);
            let rx = randInt(-r, r);
            let ry = randInt(-r, r);
    
            while (rx == 0 && ry == 0) {
                rx = randInt(-r, r);
                ry = randInt(-r, r);
            }
    
            rx += this.mx;
            ry += this.my;
    
            let hit = 0;
    
            contain.forEach(unit => {
                if (!unit || unit.dead || unit.reachedEnd)
                    return false;
    
                if (!canHit(this, unit))
                    return false;
    
                if (unit.team == this.team)
                    return false;
    
                const dist = Math.hypot(unit.my - this.my, unit.mx - this.mx);
    
                if (dist > range)
                    return false;
    
                ++hit;
    
                if (this.random && !(unit.mx == rx && unit.my == ry) )
                    return false;
    
                this.units.push(unit);
            });

            if (this.random && hit <= 0)
                continue;
            else if (!this.units.length)
                continue;
    
            this.charges = this.ticks;
            this.ticks = 0;
    
            let projectile = new Projectile(this);
            projectile.spot = [rx, ry];
            projectile.owner = this;
            projectile.target = this.units;
    
            pgrid.add(projectile);
            pgrid.track(projectile.x, projectile.y, projectile.w, projectile.h);

            if (this.buff.spread) {
                this.spread(projectile, this.buff.spread.level, range, grid, pgrid, cellWidth, cellHeight);
            }
        }
        

        // todo add tech
        

        return true;
    }
}
window.AoeTower = AoeTower;

class DirectTower extends Tower {
    constructor(base) {
        super(base);
    }

    update(mapper, grid, pgrid, teamOn, teamOff) {
        super.action(mapper, grid, pgrid, teamOn, teamOff);

        if (this.debuff && this.debuff.web && this.debuff.web.length > 0) {
            return true;
        }

        if (this.ticks < this.rateOfFire + 1)
            return false;

        const range = this.range;
        const contain = grid.contain(this.mx - range, this.my - range, range + range + 1, range + range + 1);

        function sortme(a, b) {
            const da = Math.hypot(a.my - this.my, a.mx - this.mx);
            const db = Math.hypot(b.my - this.my, b.mx - this.mx);

            if (a === b) 
                return 0;

            return da > db ? -1 : 1;
        }

        function sortme2(a, b) {
            if (a === b) 
                return 0;

            return a.steps > b.steps ? -1 : 1;
        }

        function sortme3(a, b) {
            if (a === b) 
                return 0;

            return a.speed[0] > b.speed[0] ? -1 : 1;
        }

        for (let i = 0; i < this.attacks; ++i) {
            this.units = [];

            contain.forEach(unit => {
                if (unit.reachedEnd)
                    return false;

                if (this.souls && unit.dead && !unit.soulless && this.souls > this.soulCaptured) {
                    unit.soulless = true;
                    this.soulCaptured += 1;
                } else if (this.souls && this.soulCaptured <= 0 && this.damage <= 0) {
                    return false;
                }
    
                if (!unit || unit.dead)
                    return false;
    
                if (!canHit(this, unit))
                    return false;
    
                if (unit.team == this.team)
                    return false;
    
                const dist = Math.hypot(unit.my - this.my, unit.mx - this.mx);
    
                if (dist > range)
                    return false;
    
                this.units.push(unit);
            });
     
            if (!this.units.length)
                return false;
    
            let projectile = new Projectile(this);
            projectile.owner = this;
    
            if (this.fireType == "far") {
                this.units = this.units.sort(sortme);
                if (this.multi) {
                    this.units.splice(this.attacks, this.units.length - this.attacks - 1);
                    projectile.target = this.units;
                } else {
                    projectile.target = [this.units[0]];
                }
            } else if (this.fireType == "close") {
                this.units = this.units.sort(sortme);
                if (this.multi) {
                    this.units.splice(this.attacks, this.units.length - this.attacks - 1);
                    projectile.target = this.units;
                } else {
                    projectile.target = [this.units[this.units.length-1]];
                }
               
            } else if (this.fireType == "front") {
                this.units = this.units.sort(sortme2);
                if (this.multi) {
                    this.units.splice(this.attacks, this.units.length - this.attacks - 1);
                    projectile.target = this.units;
                } else {
                    projectile.target = [this.units[0]];
                }
            } else if (this.fireType == "back") {
                this.units = this.units.sort(sortme2);
                if (this.multi) {
                    this.units.splice(this.attacks, this.units.length - this.attacks - 1);
                    projectile.target = this.units;
                } else {
                    projectile.target = [this.units[this.units.length-1]];
                }
            } else if (this.fireType == "fastest") {
                this.units = this.units.sort(sortme3);
                if (this.multi) {
                    this.units.splice(this.attacks, this.units.length - this.attacks - 1);
                    projectile.target = this.units;
                } else {
                    projectile.target = [this.units[0]];
                }
            } else if (this.fireType == "slowest") {
                this.units = this.units.sort(sortme3);
                if (this.multi) {
                    this.units.splice(this.attacks, this.units.length - this.attacks - 1);
                    projectile.target = this.units;
                } else {
                    projectile.target = [this.units[this.units.length-1]];
                }
            } 

            pgrid.add(projectile);
            pgrid.track(projectile.x, projectile.y, projectile.w, projectile.h);
        }

        this.charges = this.ticks;
        this.ticks = 0;
       

        return true;
    }
}
window.DirectTower = DirectTower;
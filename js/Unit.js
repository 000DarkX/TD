units = 0;

class Unit extends InGameObject {
    //static units = 0;

    constructor(base) {
        super();
        this.invert        = false;
        this.waypointIndex = 0;
        this.facing        = 'C';
        this.steps         = 0;
        this.dead          = false;
        this.shield        = [0, 0];
        this.shieldTime    = 0;
        this.divineTime    = 0;
        this.soulless      = false;
        this.lifeRegen     = [0, 0];
        this.pAc           = [0, 0];
        this.mAc           = [0, 0];
        this.parmor        = [0.1, 0.1];
        this.marmor        = [0.1, 0.1];
        this.armorLife     = 100;
        this.reachedEnd    = false;

        Object.assign(this, base);
        this.uid           = ++units;
        
        if (this.setup != "new") {
            this.g += this.life[1] * 0.25 + this.shield[1] + this.resist[1] * 1.5 + this.defense[1] * 1.5 + 1;
        }
        
        for (let name in this.debuff) {
            const amount =  this.debuff[name];
 
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
            this.debuff[name] = state; 
        }

        for (let name in this.buff) {
            const amount =  this.buff[name];
 
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

    died(tower) {
        tower.owner.totalG += this.g;
        tower.owner.g += this.g;
        this.dead = 1;
        ++tower.kills;

        if (this.transform && tower.owner) {
            tower.owner.transform(this, this.transform);
        }
    }

    rotateDir(dir) {
        switch (dir.toUpperCase()) {
            case 'R':
                if (this.facing == 'N') {
                    this.facing = 'E'; 
                } else if (this.facing == 'E') {
                    this.facing = 'S';
                } else if (this.facing == 'S') {
                    this.facing = 'W';
                } else if (this.facing == 'W') {
                    this.facing = 'N';
                }
            break;
            case 'L':
                if (this.facing == 'N') {
                    this.facing = 'W'; 
                } else if (this.facing == 'E') {
                    this.facing = 'N';
                } else if (this.facing == 'S') {
                    this.facing = 'E';
                } else if (this.facing == 'W') {
                    this.facing = 'S';
                }
            break;
        }
    }

    move(to, cellWidth, cellHeight, unitOfMoveW, unitOfMoveH) {
        let compass = _xyToCompass(to[0], to[1], this.mx, this.my);
        this.facing = compass;

        switch (this.facing) {
            case 'N': 
                this.y -= unitOfMoveH;
                this.my = Math.trunc((this.y + cellHeight) / cellHeight - 0.1);
            break;
            case 'S': 
                this.y += unitOfMoveH;
                this.my = Math.trunc(this.y / cellHeight + 0.1);
            break;
            case 'W': 
                this.x -= unitOfMoveW;    
                this.mx = Math.trunc((this.x + cellWidth) / cellWidth - 0.1);
            break;
            case 'E': 
                this.x += unitOfMoveW;
                this.mx = Math.trunc(this.x / cellWidth + 0.1);
            break;
        }
    
        ++this.steps;
    }

    cx(cellWidth) {
        return this.x + cellWidth * 0.5;
    }

    cy(cellHeight) {
        return this.y + cellHeight * 0.5;
    }

    get currentWaypoint()
    {
        return this.waypoints[this.waypointIndex+1];
    }

    draw(ctx, cellWidth, cellHeight) {
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.x, this.y, cellWidth, cellHeight);

        let showS = (this.shield && this.shield[0] > 1);

        ctx.strokeStyle = "silver";
        ctx.fillStyle = "silver";
        ctx.fillRect(this.x, this.y - 6, cellWidth, 3 + (showS * 2));
        ctx.strokeStyle = this.divineLife && this.divineLife[0] > 0 ? "gold" : "red";
        ctx.fillStyle = this.divineLife && this.divineLife[0] > 0 ? "gold" : "red";
        ctx.fillRect(this.x + 1, this.y - 5, this.life[0] / this.life[1] * (cellWidth-1), 1);
        if (showS) {
            ctx.strokeStyle = "blue";
            ctx.fillStyle = "blue";
            ctx.fillRect(this.x + 1, this.y - 4, this.shield[0] / this.shield[1] * (cellWidth-1), 1);
        }

        
        if (this.team == "blue")
            ctx.fillStyle = "blue";
        else
            ctx.fillStyle = "red";

        ctx.fillText(this.name, this.x, this.y - 12);
        //ctx.fillText(`${this.mx}, ${this.my}`, this.x + 12, this.y + 12);
        ctx.fillStyle = "black";
    }

    action(mapper, grid, pgrid, teamOn, temaOff, cellWidth, cellHeight) {

    }

    update(mapper, grid, pgrid, teamOn, teamOff, cellWidth, cellHeight) {
        if (this.shieldTime) {
            --this.shieldTime;
            if (this.shieldTime <= 0) {
                this.shieldTime = 0;
                this.shield[0] = this.shield[1];
            }
        }

        if (this.divineTime) {
            --this.divineTime;
            if (this.divineTime <= 0) {
                this.divineTime = 0;
                this.divineLife[0] = this.divineLife[1];
            }
        }

        if (this.debuff) {
            for (let name in this.debuff) {
                const debuff = this.debuff[name];
                if (!debuff && !debuff.update) // need fix
                    continue;
                debuff.update(this);
                if (debuff.length <= 0)
                    delete this.debuff[name];
            }
        }

        if (this.buff) {
            for (let name in this.buff) {
                const buff = this.buff[name];
                buff.update(this);
                if (buff.length <= 0)
                    delete this.buff[name];
            }
        }

        if (this.lifeRegen && this.lifeRegen[0]) {
            this.life[0] += this.lifeRegen[0];
            if (this.life[0] > this.life[1])
                this.life[0] = this.life[1];
        }

        if (this.buff.lifey) {
            this.life[0] += 0.25;
            if (this.life[0] > this.life[1] * 3)
                this.life[0] = this.life[1] * 3;
        }

        /*if (this.debuff) {
            for (let name in this.debuff) {
                const debuff = this.debuff[name];
                debuff.update(this);
                if (debuff.length <= 0)
                    delete this.debuff[name];
            }
        }*/

        // update web stuff
        if (this.inflict && this.inflict.web) {
            if (this.webTime)
                --this.webTime;
            else    
                this.webTime = 0;

            if (this.webTime <= 0) {
                const keys = Object.keys(teamOff.towers);
                for (let i = 0; i < 5; ++i) {
                    const tower = teamOff.towers[keys[randInt(0, keys.length-1)]];

                    if (!tower)
                        continue;
    
                    const hypot = Math.hypot(this.my - tower.my, this.mx - tower.mx);
        
                    if (hypot < 3) {
                        this.webTime = this.inflict.web[1];
                        const state = new ObjectState();
                        state.start(this, ...this.inflict.web, "web");
                        tower.debuff.web = state;
                        break;
                    }
                }
            }
        }

        //console.log("can i move now?");
        let result = false;

        let unitOfMoveW = cellWidth / 20;
        let unitOfMoveH = cellHeight / 20; 

        let moves    = 0;
        let movement = this.speed[0];

        let to = this.currentWaypoint;

        while (movement) {
            let spd = Math.min(1, movement);
            if  (spd < 0) {
                unitOfMoveH *= 1 / spd;
                unitOfMoveW *= 1 / spd;
                moves += 1 / spd;
                break;
            }
            ++moves;
            movement -= spd;
        }

        grid.remove(this);

        for (let i =0; i < moves; ++i) {
            if (Math.abs(to[0] - this.mx) <= 0.5 &&
                            Math.abs(to[1] - this.my) <= 0.5)
            {
                if (this.team == "red") {
                    this.waypointIndex += this.invert ? -1 : 1;
                    if (this.waypointIndex >= this.waypoints.length - 1) {
                        return true; 
                    } else if (this.waypointIndex < 0) {
                        this.waypointIndex = 0;
                    }
                } else {
                    this.waypointIndex -= this.invert ? -1 : 1;
                    if (this.waypointIndex < 0) {
                        return true;
                    }else if (this.waypointIndex >= this.waypoints.length - 1) {
                        this.waypointIndex = this.waypoints.length - 1;
                    } 
                }
            }

            if (this.waypointIndex < 0 || this.waypointIndex >= this.waypoints.length - 1)
                break;

            to = this.currentWaypoint;
            
            this.move(to, cellWidth, cellHeight, unitOfMoveW, unitOfMoveH);
        }

        grid.add(this);
        grid.track(this.x, this.y, this.w, this.h);

        return result;
    }
}
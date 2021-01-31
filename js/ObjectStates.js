class ObjectState {
    constructor(base) {
        Object.assign(this, base);
    }
    
    start(unit, length, level, name) {
        this.length = length;
        this.name   = name;
        this.level = level;
    }

    stop(unit) {
        this.length = 0;
    }

    update(unit) {
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.ObjectState = ObjectState;


//

class SlowyState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            if (level == 1) {
                unit.speed[0] *= 0.95;
                unit.speed[0] -= 1;
            } else if (level == 2) {
                unit.speed[0] *= 0.90;
                unit.speed[0] -= 1;
            } else if (level == 3) {
                unit.speed[0] *= 0.85;
                unit.speed[0] -= 1;
            } else if (level == 4) {
                unit.speed[0] *= 0.80;
                unit.speed[0] -= 1;
            } else if (level == 5) {
                unit.speed[0] *= 0.75;
                unit.speed[0] -= 1;
            }
            
            if (unit.speed[0] < 1) {
                unit.speed[0] = 1;
            }
        }
        this.length = length;
    }

    stop(unit) {
        unit.speed[0] = unit.speed[1];
        this.length = 0;
    }

    update(unit) {
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.SlowyState = SlowyState;


class DecayState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
    }

    start(unit, length, level) {
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        this.length = 0;
    }

    update(unit) {
        unit.life[0] -= 1 * this.level;
        if (unit.life[0] < 1) {
            unit.life[0] = 1;
        }
        unit.defense[0] -= 0.01 * this.level;
        unit.resist[0]  -= 0.01 * this.level;
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.DecayState = DecayState;


class CutState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
        this.wasFlying = false;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            if  (unit.moveType == "air") {
                unit.moveType = "ground";
                this.wasFlying = true;
            }
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        if (this.wasFlying) {
            unit.moveType = "air";
        }
        this.length = 0;
    }

    update(unit) {
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.CutState = CutState;

class DepeleteState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            for (let name in unit.buff2) {
                unit.buff2[name].stop(unit);
                delete unit.buff2[name];
            }
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
            this.length = 0;
    }

    update(unit) {
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.DepeleteState = DepeleteState;

class ReducedState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            if (unit.damageReduction)
                unit.damageReduction -= 1 - level / 100;
            else
                unit.damageReduction = 1 - level / 100;

            if (unit.damageReduction < 0)
                unit.damageReduction = 0;
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        if (unit.damageReduction)
            unit.damageReduction += 1 - this.level / 100;

        if (unit.damageReduction >= 1)
            unit.damageReduction = 1;

        this.length = 0;
    }

    update(unit) {
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.ReducedState = ReducedState;


class BurnState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        this.length = 0;
    }

    update(unit) {
        const immuneList = unit.immune;
        let isImmune = false;

        if (immuneList) {
            isImmune = immuneList.includes("red");
            isImmune |= immuneList.includes("burn");
        }

        let isShield = false;

        if (unit.shield) {
            isShield = unit.shield[0] > 0;
        }

        if (!isImmune && !isShield &&  randInt(1, 100) <= 6) {
            unit.life[0] -= this.level;
            if (unit.life[0] <= 0) {
                unit.died(this.owner);
            }
        }
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.BurnState = BurnState;


class FrostBiteState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        this.length = 0;
    }

    update(unit) {
        const immuneList = unit.immune;
        let isImmune = false;

        if (immuneList) {
            isImmune = immuneList.includes("blue");
            isImmune |= immuneList.includes("frost");
        }

        let isShield = false;

        if (unit.shield) {
            isShield = unit.shield[0] > 0;
        }

        if (!isImmune && !isShield && randInt(1, 100) <= 50) {
            unit.life[0] -= this.level;
            if (unit.life[0] <= 0) {
                unit.died(this.owner);
            }
        }
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.FrostbiteState = FrostBiteState;


class PoisonState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        this.length = 0;
    }

    update(unit) {
        const immuneList = unit.immune;
        let isImmune = false;

        if (immuneList) {
            isImmune = immuneList.includes("green");
            isImmune |= immuneList.includes("poison");
        }

        let isShield = false;

        if (unit.shield) {
            isShield = unit.shield[0] > 0;
        }

        if (!isImmune && !isShield) {
            unit.life[0] *= 1 - this.level / 100;

            if (unit.life[0] <= 0) {
                unit.died(this.owner);
            }
        }
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.PoisonState = PoisonState;

class ThiefState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        this.length = 0;
    }

    update(unit) {
        if (unit.g > 0) {
            const amount = unit.g * this.level / 100;
            unit.enemy.money += amount;
            unit.g -= amount;
        }
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.ThiefState = ThiefState;


class DivinePState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        this.length = 0;
    }

    update(unit) {
        if (unit.divineLife) {
            unit.divineLife[0] -= this.level;
            if (unit.divineLife[0] <= 0) {
                unit.divineLife[0] = 0;
            }
        }
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.DivinepState = DivinePState;

class SkyChiefState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        this.length = 0;
    }

    update(unit) {
        const immuneList = unit.immune;
        let isImmune = false;

        if (immuneList) {
            isImmune = immuneList.includes("green");
        }

        let isShield = false;

        if (unit.shield) {
            isShield = unit.shield[0] > 0;
        }

        if (!isImmune && !isShield && unit.moveType == "air") {
            /*unit.life[0] -= this.level;

            if (unit.life[0] <= 0) {
                unit.died(this.owner);
            }*/

            this.bonusDamage += this.level;
        } else {
            this.bonusDamage -= this.level;
        }
        
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.SkychiefState = SkyChiefState;

class BossDmgState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        this.length = 0;
    }

    update(unit) {
        const immuneList = unit.immune;
        let isImmune = false;

        if (immuneList) {
            isImmune = immuneList.includes("gray");
        }

        let isShield = false;

        if (unit.shield) {
            isShield = unit.shield[0] > 0;
        }

        const subtypesList = unit.subtypes;
        let isSubtype = false;

        if (subtypesList) {
            isSubtype = subtypesList.includes("boss");
        }

        if (!isImmune && !isShield && isSubtype) {
            //unit.life[0] -= this.level;
            this.bonusDamage += this.level;

            //if (unit.life[0] <= 0) {
            //    unit.died(this.owner);
            //}
        }   else {
            this.bonusDamage -= this.level;
        }
        
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.BossdmgState = BossDmgState;


class ConfuseState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
        this.isConfused = false;
    }

    doAction(unit, level) {
        if (this.isConfused)
            return true;

        const immuneList = unit.immune;
        let isImmune = false;

        if (immuneList) {
            isImmune = immuneList.includes("purple");
            isImmune |= immuneList.includes("confuse");
        }

        if (!isImmune && randInt(1, 100) <= level) {
            this.isConfused = true;
            unit.invert = true;
            if (unit.team == "red" && unit.waypointIndex > 0)
                unit.waypointIndex -= 1;
            else if (unit.team == "blue" && unit.waypointIndex <
                        unit.waypoints.length)
            {
                unit.waypointIndex += 1;
            }
        } else {
            this.length = 0;
            return false;
        }
    }

    start(unit, length, level) {
        if (this.length == -5) {
           if (!this.doAction(unit, level))
                return false;
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        unit.invert = false;
        if (this.isConfused) {
            if (unit.team == "red" && unit.waypointIndex <
            unit.waypoints.length)
                        unit.waypointIndex += 1;
            else if (unit.team == "blue" && unit.waypointIndex > 0)
            {
                unit.waypointIndex -= 1;
            }
        }
        
        this.length = 0;
    }

    update(unit) {
        this.doAction(unit, this.level)
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.ConfuseState = ConfuseState;


// TeamStates

class PoisonTeamState extends ObjectState {
    constructor() {
        super();
        this.length = -5;
        this.level = 0;
    }

    start(unit, length, level) {
        if (this.length == -5) {
            
        }
        this.level = level;
        this.length = length;
    }

    stop(unit) {
        this.length = 0;
    }

    update(unit) {
        const hasResist = unit.buff && unit.buff.poisonResist;
        let amount      = 0;

        if (hasResist) {
            amount = unit.buff.poisonResist / 100;
        }

        const dmg = this.level / 100;
        
        if (dmg > amount) {
            unit.life -= dmg - amount;
        }
        
        this.length -= 1;
        if (this.length <= 0)
            this.stop(unit);
    }
}
window.PoisonTeamState = PoisonTeamState;
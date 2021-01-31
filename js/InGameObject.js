class InGameObject {
    constructor(base) {
        this.trait  = [];
        this.buff   = {};
        this.debuff = {};
        Object.assign(this, base);
    }
    
    get buffOthers() {
        return this.levels[this.level-1].buffOther || {};
    }

    get buffs() {
        return this.levels[this.level-1].buff || {};
    }

    get traits() {
        return this.levels[this.level-1].trait || [];
    }

    applyBuffOsInRange(units) {
        const buffs = this.buffOthers;
        for (let name in units) {
            const unit= units[name];

            const dist = Math.hypot(unit.my - this.my, unit.mx - this.mx);

            if (dist >= this.range)
                continue;


            for (let name in buffs) {
                const buff = buffs[name]; 
                unit.applyState(...buff, name);
            }
        }
    }

    applyBuffsInRange(units) {
        const buffs = this.buffs;
        for (let i = 0; i < units.length; ++i) {
            const unit= units[i];

            const dist = Math.hypot(unit.my - this.my, unit.mx - this.mx);

            if (dist >= this.range)
                continue;

            for (let name in buffs) {
                const buff = buffs[name];
                unit.applyState(...buff, name);
            }
        }
    }

    applyState(length, level, stateName) {
        const buff = this.buff[stateName];

        if (buff) {
            buff.start(this, buff.length, buff.level, buff.name);
            return true;
        }

        let state   = undefined;
        const cstate = window[`${stateName}State`];

        if (!cstate) {
            state = new ObjectState();
        } else {
            state = new cstate();
        }

        state.start(this, length, level, name);
        this.buff[stateName] = state;
        return true;
    }
}
window.InGameObject = InGameObject;
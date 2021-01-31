class Projectile {
    constructor(base) {
        Object.assign(this, base);
    }

    update(mapper, grid, pgrid, teamOn, teamOff) {

        if (!this.target)
            return true;

        for (let i = 0; i < this.target.length; ++i) {
            const unit = this.target[i];

            this.owner.attackUnit(this, unit, mapper, grid, pgrid, teamOn, teamOff);
        }

        return true;
    }

    draw(ctxBelow, ctxAbove, cellWidth, cellHeight) {
        let range = this.levels[this.level-1].range;

        switch (this.type.toLowerCase()) {
            case "floor":
                ctxBelow.fillStyle = this.owner.color;
                ctxBelow.fillRect(this.mx * cellWidth, this.my * cellHeight, cellWidth, cellHeight);
            break;
            case "aoe":
                range = Math.round(range - 0.5);
                ctxBelow.fillStyle = this.owner.color;
                if (this.owner.random) {
                    ctxBelow.fillRect(this.spot[0] * cellWidth, this.spot[1]  * cellHeight, cellWidth, cellHeight);
                } else {
                    ctxBelow.fillRect((this.mx - range) * cellWidth, (this.my - range) * cellHeight,
                    (range + range + 1) * cellWidth, cellHeight * (range + range + 1));
                }
                
                return true;
            break;
            case "direct":
                if (!this.target)
                    return false;
                
                for (let i = 0; i < this.target.length; ++i) {
                    ctxAbove.strokeStyle = this.owner.color;
                    ctxAbove.beginPath();
                    ctxAbove.moveTo(this.x, this.y);
                    ctxAbove.lineTo(this.target[i].x, this.target[i].y);
                    ctxAbove.stroke();
                }
                return true;
            break;
        }

        return false;
    }
}
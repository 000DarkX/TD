td.unitAI = {};

class AiWallFollower {
    update(mapper, grid, winXY) {

        if (this.moveTo.length > 0)
            return false;

        const layer0 = mapper.layers[0];
        
        let dir = _xyToCompass(this.mx, this.my, this.lastPoint[0], this.lastPoint[1]);
        if (dir == 'C' && this.lastDir) {
            dir = this.lastDir;
        }
        let arr = [0, 0, 0, 0];

        switch (dir.toUpperCase()) {
            case 'N': case 'C': default: 
            arr[2] = 'E'; arr[1] = 'W'; arr[0] = 'N'; arr[3] = 'S';
            this.lastDir   = 'N'; 
            break;
            case 'S': arr[2] = 'W'; arr[1] = 'S'; arr[0] = 'E'; arr[3] = 'N'; this.lastDir   = dir;break;
            case 'E': arr[2] = 'S'; arr[1] = 'E'; arr[0] = 'N'; arr[3] = 'W'; this.lastDir   = dir;break;
            case 'W': arr[2] = 'N'; arr[1] = 'W'; arr[0] = 'S'; arr[3] = 'E'; this.lastDir   = dir;break;
        }

        for (let i = 0; i < arr.length; ++i) {
            const a = arr[i];
            //const oid = _getID(this.mx, this.my, layer0.width, 'c');
            
            const nid = _getID(this.mx, this.my, layer0.width, a);
            const lid = _getID(this.lastPoint[0], this.lastPoint[1], layer0.width, 'c');

            for (let j = 0; j < winXY.length; ++j) {
                const wid = _getID(winXY[j][0], winXY[j][1], layer0.width, 'c');

                if (wid == nid) {
                    this.moveTo = [winXY[j][0], winXY[j][1]];
                    this.updated = true;
                    this.facing   = _xyToCompass(this.moveTo[0], this.moveTo[1], this.mx, this.my);
                    return false;
                } 
            }
        
            if (nid == lid)
                continue;

            const c = _check(layer0, this.mx, this.my, a);

            if (c) {
                this.lastPoint = [this.mx, this.my];
                this.moveTo  = _move(this.mx, this.my, a);
                this.updated = true;
                this.facing   = _xyToCompass(this.moveTo[0], this.moveTo[1], this.mx, this.my);
                return false;
            }
        }

        
        this.lastPoint = [this.mx, this.my];
    }

    reset() {

    }
}

td.unitAI.AI_wall_follower = new AiWallFollower();

class AiTremaux {
    update(mapper, grid, winXY) {

        if (this.moveTo && this.moveTo.length > 0)
            return false;

        const layer0 = mapper.layers[0];

        if (this.waypoint) {
            const id    = _getID(this.waypoint[2][0], this.waypoint[2][1], layer0.width, 'c');

            if (this.markId && this.m != id) {
                this.m = id;
                _mark(this.maze, this.markId[0], this.markId[1], this.facing);
                this.markId = undefined;
                this.waypoint = undefined;
            }
        }

        let topScore = 9999;
        let topBest  = undefined;
        const cid = _getID(this.mx, this.my, layer0.width, 'c');

        let n = _check(layer0, this.mx, this.my, 'n');

        if (n) {
            const xy = _move(this.mx,  this.my, 'n');
            const nid = _getID(xy[0], xy[1], layer0.width, 'c');
            let score  = 0;
            const m    = this.maze[nid];
            if (m)
                score = m[1];
            if (topScore > score && score < 2) {
                topBest = [ 'N', [cid, nid], xy ];
                topScore = score;
            }
        }

        let s = _check(layer0, this.mx, this.my, 's');

        if (s) {
            const xy = _move(this.mx,  this.my, 's');
            const nid = _getID(xy[0], xy[1], layer0.width, 'c');
            let score  = 0;
            const m    = this.maze[nid];
            if (m)
                score = m[0];
            if (topScore > score && score < 2) {
                topBest = [ 'S', [cid, nid], xy];
                topScore = score;
            }
        }

        let e = _check(layer0, this.mx, this.my, 'e');

        if (e) {
            const xy = _move(this.mx,  this.my, 'e');
            const nid = _getID(xy[0], xy[1], layer0.width, 'c');
            let score  = 0;
            const m    = this.maze[nid];
            if (m)
                score = m[3];
            if (topScore > score && score < 2) {
                topBest = [ 'E', [cid, nid], xy];
                topScore = score;
            }
        }

        let w = _check(layer0, this.mx, this.my, 'w');

        if (w) {
            const xy = _move(this.mx,  this.my, 'w');
            const nid = _getID(xy[0], xy[1], layer0.width, 'c');
            
            let score  = 0;
            const m    = this.maze[nid];
            if (m)
                score = m[2];

            if (topScore > score && score < 2) {
                topBest = [ 'W', [cid, nid], xy ];
                topScore = score;
            }
        }

        if (topBest) {
            this.updated = true;
            this.moveTo  = topBest[2];
            this.waypoint = topBest;
            this.facing   = topBest[0];
            this.markId   = topBest[1];
        }
        else {
            this.markId = undefined;
        }
    }

    reset() {

    }
}

td.unitAI.AI_tremaux = new AiTremaux();

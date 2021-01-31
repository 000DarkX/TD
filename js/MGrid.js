class MGrid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data   = [];
        this.tracks = {x: 0, y: 0, w: 0, h: 0};
    }

    reset() {
        this.tracks = {x: 0, y: 0, w: 0, h: 0};
    }

    trackContains() {
        const mx = Math.trunc(this.tracks.x / this.width);
        const my = Math.trunc(this.tracks.y / this.height);
        const mw = Math.trunc(this.tracks.w / this.width);
        const mh = Math.trunc(this.tracks.h / this.height);

        return this.contain(mx, my, mw, mh);
    }

    
    /*resize(w, h) {
        let objs = this.contain(0, 0, this.width, this.height);

        //let oldW          = this.width;
        //let oldH          = this.height;

        //this.width = w;
        //this.height = h;

        this.tracks.x = 0
        this.tracks.y = 0;
        this.tracks.w = this.width;
        this.tracks.h = this.height;

        for (let i =0; i < objs.length; ++i) {
            const obj = objs[i];

            if (!obj)
                continue;

            this.resizeObj(obj, oldW, oldH);
        }
    }
	
	resizeObj(obj, w, h) 
    {
        const wRatio = this.width / w;
        const hRatio = this.height / h;
        
        obj.w *= wRatio;
        obj.h *= hRatio;
        obj.x *= wRatio;
        obj.y *= hRatio;
    }*/
    
    track(x, y, w, h) {
        if (x < this.tracks.x)
            this.tracks.x = Math.trunc(x);

        if (y < this.tracks.y)
            this.tracks.y = Math.trunc(y);

        if (x + w > this.tracks.w)
            this.tracks.w = Math.trunc(x + w);

        if (y + h > this.tracks.h)
            this.tracks.h = Math.trunc(y + h);
    }

    contain(mx, my, mw, mh) {
        let s      = new Set();
        let result = [];

        let x = Math.trunc(mx);
        let y = Math.trunc(my);
        let w = Math.trunc(x + mw);
        let h = Math.trunc(y + mh);

        if (x < 0) x = 0;
        if (y < 0) y = 0;

        if (x > this.width) x = this.width;
        if (y > this.height) y = this.height;

        if (w < 0) w = 1;
        if (h < 0) h = 1;

        if (w > this.width) w = this.width;
        if (h > this.height) h = this.height;

        for (let i = y; i <= h; ++i) {
            for (let j = x; j <= w; ++j) {
                const id = Math.trunc(j + i * this.width);
                const data = this.data[id];

                if (!data)
                    continue;

                if (data.length<=0)
                    continue;

                data.forEach(element => {

                    if (s.has(element.uid))
                        return false;

                    s.add(element.uid);
                    result.push(element);
                });
            }
        }

        return result;
    }

    add(obj) {
        const id = Math.trunc(obj.mx + obj.my * this.width);
        obj.gridId = id;

        if (this.data[id]) {
            this.data[id].push(obj);
            return true;
        } else {
            this.data[id] = [ obj ];
            return true;
        }
        
        return false;
    }

    remove(obj) {
        const arr = this.data[obj.gridId];

        if (!arr)
            return false;

        for (let i = 0; i < arr.length; ++i) {
            const e = arr[i];
            if (e.uid == obj.uid) {
                this.data[obj.gridId].splice(i, 1);
                obj.gridId = -1;
                return true;
            }
        }

        return false;
    }
}
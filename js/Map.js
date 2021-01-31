class Map {
    constructor(base) {
        Object.assign(this. base);
    }
    
    id(mx, my) {
        return mx + my * this.width;
    }

    canBuild(tile, tower) {
        let type = tower.buildType || "build";
        type = type.toLowerCase();

        if ( this.terrains[tile].toLowerCase() == "build" && type == "build")
            return true;
        else if (this.terrains[tile].toLowerCase() == "water" && type == "water")
            return true;
            
        return false;
    }
}
class TowerDefenseV4 {
    constructor() {
        // SETTINGS
        this.gameMode    = "solo";
        this.tutorial    = false;
        this.firstTime  = {};
        this.gameSpeed   = 0;
        this.nopause     = false;

        this.goldAtEnd          = true;
        this.goldAmountAtEnd    = (r) => {
            return 25;
        };
        this.goldOverTime       = true;
        this.goldAmountOverTime = 0.1;
        this.maxTowers          = Number.MAX_VALUE;
        this.maxOfEach          = {};
        this.towerPopup         = false;
        
        // GAME - ROUND-INFO
        this.currentMap  = "";
        this.roundAt     = 0;
        this.pause       = true;
        this.roundBegin  = false;
        this.roundPass       = 0;

        this.teamBlue  =  {
            buildTypes: {}, transform: this.transform.bind(this), totalG: 0,
            life: 0, maxLives: 0, lifeRegen: 0, towers: {}, techLevel: 0, g: 0, debuff: {}, buff: {}, defaultAi: "", start: []
        };
        this.teamRed =  {
            buildTypes: {}, transform: this.transform.bind(this), totalG: 0,
            life: 0, maxLives: 0, lifeRegen: 0, towers: {}, techLevel: 0, g: 0, debuff: {}, buff: {}, defaultAi: "", start: []
        };
        this.teamBlue.team = "blue";
        this.teamRed.team = "red";

        // DATA
        this.towers    = {};
        this.crits     = {};
        this.tiles     = {};
        this.images    = {};
        this.map       = {teamBlueStart: {}, teamRedStart: {}, waypoints: {}, terrains: {}, waypointsBlue: {},
                    waypointsRed: {}
        };

        // TIMERS
        this.mainTimer   = null;
        this.resizeTimer = null;

        // PATHS
        this.dataPath  = "data/";
        this.mapPath   = "maps/";
        this.assetPath = "assets/";

        // OTHER
        this.loader    = null;
        this.loaded    = false;
        this.drawComplete = true;
        this.lastTap   = 0;
        this.mouse     = {};
        this.clearBackground = 1;
        this.clearTowers     = 1;
        this.clearOther      = 1;
        this.clearUnit       = 1;
        this.clearP          = 1;
        this.gameSpeeds      = [666, 333, 222, 111, 11, 0];
        this.removeProjectiles = [];
        this.widthRatio = 1.0;
        this.heightRatio = 1.0;

        // ELEMENTS
        this.backgroundCanvas      = document.getElementById("backgroundCanvas");
        this.projectileBelowCanvas = document.getElementById("projectileBelowCanvas");
        this.unitCanvas            = document.getElementById("unitCanvas");
        this.towerCanvas           = document.getElementById("towerCanvas");
        this.projectileAboveCanvas = document.getElementById("projectileAboveCanvas");
        this.otherCanvas           = document.getElementById("otherCanvas");      

        this.backgroundCtx      = this.backgroundCanvas.getContext("2d");
        this.projectileBelowCtx = this.projectileBelowCanvas.getContext("2d");
        this.unitCtx            = this.unitCanvas.getContext("2d");
        this.towerCtx           = this.towerCanvas.getContext("2d");
        this.projectileAboveCtx = this.projectileAboveCanvas.getContext("2d");
        this.otherCtx           = this.otherCanvas.getContext("2d");

        this.infoElement        = document.getElementById("info");
        this.towerInfoElement   = document.getElementById("towerInfo");
        this.gameMapsElement    = document.getElementById("gameMaps");
        this.techSelect         = document.getElementById("techSelect");
        this.redTeamInfoElement       = document.getElementById("redTeamInfo");
        this.blueTeamInfoElement      = document.getElementById("blueTeamInfo");
        this.gameModeElement = document.getElementById("gameMode");
        this.gameSpeedElement = document.getElementById("gameSpeed");
        this.currentMapElement = document.getElementById("currentMap");
        this.pauseElement      = document.getElementById("pause");

        this.currentWidth = Math.min(window.innerWidth, document.body.clientWidth) * this.widthRatio;
        this.currentHeight = Math.min(window.innerHeight, document.body.clientHeight) * this.heightRatio;
        
        this.resizeCanvas(this.currentWidth, this.currentHeight);

        addEventListener("resize", () => {
            if (this.resizeTimer)
                clearTimeout(this.resizeTimer);

            this.resizeTimer = setTimeout(async () => {
                const w = Math.min(window.innerWidth, document.body.clientWidth) * this.widthRatio;
                const h = Math.min(window.innerHeight, document.body.clientHeight) * this.heightRatio;

                const ratioW = w / this.currentWidth;
                const ratioH = h / this.currentHeight;

                this._resize(w, h);
                for (let name in this.teamBlue.towers) {
                    const tower = this.teamBlue.towers[name];
                    tower.x = tower.mx * this.cellWidth;
                    tower.y = tower.my * this.cellHeight;
                }
                for (let name in this.teamRed.towers) {
                    const tower = this.teamRed.towers[name];
                    tower.x = tower.mx * this.cellWidth;
                    tower.y = tower.my * this.cellHeight;
                }
                
                const mapper   = window[`map${this.currentMap}`];

                let unitOfMoveW = this.cellWidth / 20;
                let unitOfMoveH = this.cellHeight / 20; 

                if (this.unitGrid)
                {
                    const contain = this.unitGrid.contain(0, 0, this.unitGrid.width, this.unitGrid.height);
                    for (let i = 0; i < contain.length; ++i) {
                        const unit = contain[i];
                        unit.x = unit.x * ratioW;
                        unit.y = unit.y * ratioH;
                    }
                }
                
                if (this.projectileGrid) {
                    const contain = this.projectileGrid.contain(0, 0, this.projectileGrid.width, this.projectileGrid.height);
                    for (let i = 0; i < contain.length; ++i) {
                        const unit = contain[i];
                        unit.x *= ratioW;
                        unit.y *= ratioH;
                    }
                }

                this.currentWidth = w;
                this.currentHeight = h;
            }, 333);
        });

        this.otherCanvas.addEventListener("mousemove", (e) => {
            this.mouse = e;
            this.otherCtx.clearRect(0, 0, this.otherCanvas.width, this.otherCanvas.height);
            requestAnimationFrame(this._drawDebug.bind(this, this.otherCtx));
        });

        addEventListener("keydown", async (e) => {
            if (e.key == "Escape") {
                await this.deselectTower();
            }
        });

        this.otherCanvas.addEventListener("mousedown", (e)=> {
            const mapper = window[`map${this.currentMap}`];
            const m = this.xyToMXY(e.x, e.y);
            const mx = m[0];
            const my = m[1];

            this.mouse = e;

            if (!this.selectedTower) {
                const id = mx + my * mapper.width;
                let towers = this.team == "blue" ? this.teamBlue.towers : this.teamRed.towers;
                const tower = towers[id];
                if (tower) {
                    this.selectTower(tower);
                    return true;
                } else if (this.selectedCurrent) {
                    this.deselectTower(tower);
                }
            }
           

            if (new Date().getTime() - this.lastTap <= 1000) {
                this.showInfo();
                this.lastTap = new Date().getTime();
            } else {
                this.lastTap = new Date().getTime();
            }

            this.otherCtx.clearRect(0, 0, this.otherCanvas.width, this.otherCanvas.height);
            requestAnimationFrame(this._drawDebug.bind(this, this.otherCtx));
        }); 

        /*if (document.getElementById("dropContentAi")) {
            document.getElementById("dropContentAi").onclick = (e) => {
                const value = e.target.getAttribute("data-value");
                if (this.selectedCurrent) {
                    this.selectedCurrent.fireType = value;
                }
            }
        }*/

        if (document.getElementById("upgradeButton")) {
            document.getElementById("upgradeButton").onclick = (e) => {
                const m = this.xyToMXY(e.x, e.y);
                const mx = m[0];
                const my = m[1];
    
                if (this.selectedCurrent) {
                    const team = this.currentTeam(this.team);
                    this.selectedCurrent.upgradeTower(team);
    
                    this.updateRoundInfo();
                    this.towerInfo(this.selectedCurrent.key);
                    this.clearTowers = 1;
                    this.otherCtx.clearRect(0, 0, this.otherCanvas.width, this.otherCanvas.height);
                    requestAnimationFrame(this._drawDebug.bind(this, this.otherCtx));
                }
            };
        }

        if (document.getElementById("sellButton")) {
            document.getElementById("sellButton").onclick = (e) => {
                if (!this.selectedCurrent)
                    return false;
                const mapper = window[`map${this.currentMap}`];
                this.selectedCurrent.sell(this.currentTeam(this.team), mapper);
                this.selectedCurrent = undefined;
                this.selectedTower   = undefined;
                this.updateRoundInfo();
    
                this.clearTowers = 1;
                this.clearOther = 1;
    
                if (this.pause) {
                    this.towerCtx.clearRect(0, 0, this.towerCanvas.width, this.towerCanvas.height);
                    this.otherCtx.clearRect(0, 0, this.otherCanvas.width, this.otherCanvas.height);
                    requestAnimationFrame(this._drawTowers.bind(this));
                    requestAnimationFrame(this._drawUnits.bind(this));
                    requestAnimationFrame(this._drawDebug.bind(this, this.otherCtx));
                }
            }
        }

        /*if (document.getElementById("techSelect")) {
            document.getElementById("techSelect").onchange = (e) => {
                const tower = this.selectedCurrent;
    
                if (!tower)
                    return false;
    
                const selectedTech = e.target.selectedIndex - 1;
    
                if (selectedTech < 0)
                    return false;
    
                this.selectedTech = selectedTech;
    
                const level         = tower.techLevel[selectedTech];
                const tech          = tower.upgrades[selectedTech][level-1];
    
                if (!tech)
                    return false;
    
                const cost          = tech.cost;
    
                document.getElementById("techButton").innerHTML = `Upgrade Tech (${cost} G)`;
            }
        }*/

        if (document.getElementById("techButton")) {
            document.getElementById("techButton").onclick = (e) => {
                const tower = this.selectedCurrent;
                if (!tower)
                    return false;
                    
                const selectedTech = this.selectedTech;
    
                if (selectedTech < 0)
                    return false;
    
    
                if (this.team == "blue")
                    tower.upgradeTech(selectedTech, this.teamBlue)
                else
                    tower.upgradeTech(selectedTech, this.teamRed);
    
                this.updateRoundInfo();
                this.towerInfo(tower.key);
    
                this.clearTowers = 1;
                
                if (this.pause) {
                    this.towerCtx.clearRect(0, 0, this.towerCanvas.width, this.towerCanvas.height);
                    requestAnimationFrame(this._drawTowers.bind(this));
                    requestAnimationFrame(this._drawUnits.bind(this));
                    requestAnimationFrame(this._drawDebug.bind(this, this.otherCtx));
                }
            }
        }

        this.infoElement.addEventListener("click", (e) => {
            if (e.target != this.infoElement)
                return false;

            this.hideInfo();
        });

        this.towerInfoElement.addEventListener("click", (e) => {
            if (e.target != this.towerInfoElement)
                return false;

            this.hideTowerInfo();
            this.selectedTower = undefined;
            this.otherCtx.clearRect(0, 0, this.otherCanvas.width, this.otherCanvas.height);
            requestAnimationFrame(this._drawDebug.bind(this, this.otherCtx));
        });
    }

    // HELPER METHODS

    save() {
        if (this.roundBegin)
            return false;

        let towers = {};

        for (let name in this.teamBlue.towers) {
            const tower = this.teamBlue.towers[name];
            towers[name] = this.teamBlue.towers[name];
            this.teamBlue.towers[name].units = undefined;
            this.teamBlue.towers[name].owner = tower.owner.team;
            this.teamBlue.towers[name].enemy = undefined;
        }

        localStorage.setItem(`TD-${this.currentMap}-teamBlue`, JSON.stringify(this.teamBlue));

        for (let name in towers) {
            this.teamBlue.towers[name].units = towers[name].units;
            this.teamBlue.towers[name].owner = towers[name].owner;
            this.teamBlue.towers[name].enemy = towers[name].enemy;
        }
        

        localStorage.setItem(`TD-${this.currentMap}-teamRed`, JSON.stringify(this.teamRed));
        localStorage.setItem(`TD-${this.currentMap}-roundAt`, this.roundAt);
        this.sendMessage("Your progress has been saved");
    }

    load() {
        if (this.roundBegin)
            return false;

        let store = localStorage.getItem(`TD-${this.currentMap}-teamBlue`);

        if (!store)
            return false;

        this.teamBlue = JSON.parse(store);

        for (let name in this.teamBlue.towers) {
            const tower = this.teamBlue.towers[name];
            this.teamBlue.towers[name] = Tower.remakeTower(this, this.towers, tower.key, tower, this.currentTeam(tower.owner), this.enemyTeam(tower.owner));
        }

        this.teamRed  = JSON.parse(localStorage.getItem(`TD-${this.currentMap}-teamRed`));
        this.roundAt  = JSON.parse(localStorage.getItem(`TD-${this.currentMap}-roundAt`));

        this.updateRoundInfo();
        this.updateStateInfo();
    }

    async towerInfo(name, e) {
        let tower = this.selectedCurrent;

        if (!tower) {
            tower  = Tower.makeTower(this.towers, name);
            if (!tower)
                return false;
        }

        if (this.firstTime[name] == undefined && this.loaded && this.tutorial) {
            switch (name) {
                case "nature":
                    if (await this.sendMessage(`Nature Tower<br>
                                     Good damage for starting rounds.<br>
                                     Strength: None thus far<br>
                                     Weakness: Grass, Wooden Dummies`))
                    this.firstTime[name] = true;
                break;
                case "star":
                    if (await  this.sendMessage(`Star Tower<br>
                                     Good against large groups of enemies.<br>
                                     Strength: Wooden, Ice or Shielded enemies<br>
                                     Weakness: Plant enemies, Water enemies`))
                                     this.firstTime[name] = true;
                break;
                case "bk":
                    if (await  this.sendMessage(`Boss Tower<br>
                                 Good against bosses and deals good amount of damage.<br>
                                 Strength: Bosses<br>
                                 Weakness: Be careful undead are strong against this tower`))
                                 this.firstTime[name] = true;
                break;
                case "wind":
                    if (await  this.sendMessage(`Wind Tower<br>
                                 Good against fast enemies and thieves<br>
                                 Strength: Fast, Thieves<br>
                                 Weakness: Grass, Wooden, Dummies`))
                                 this.firstTime[name] = true;
                break;
                case "lightning":
                    if (await  this.sendMessage(`Lightning Tower<br>
                                     Good damage a step above nature<br>
                                     Strength: none thus far<br>
                                     Weakness: Golden enemies`))
                                     this.firstTime[name] = true;
                    break;
                case "Earth":
                    if (await  this.sendMessage(`Earth Tower<br>
                                        Good damage a step above nature<br>
                                        Strength: none thus far<br>
                                        Weakness: Misses a lot`))
                                        this.firstTime[name] = true;
                    break;
            }
        }

            
        this._formatTowerNow(document.getElementById("tower-title"), document.getElementById("tower-now"), tower, 0);
        this._formatTowerNow(document.getElementById("tower-title"), document.getElementById("tower-next"), tower, 1);

        document.getElementById("towerAi").value = tower.fireType;
        document.getElementById("upgradeButton").innerHTML = `Upgrade (${tower.upgradeCost} G)`;
        document.getElementById("sellButton").innerHTML = `Sell (${tower.sellPrice} G)`;

        const techBtn = document.getElementById("dropContentTech");
        techBtn.innerHTML = "";


        if (!tower.upgrades)
            return false;

        //techBtn.innerHTML = "<option value='' selected>None</option>";
        for (let i = 0; i < tower.upgrades.length; ++i) {
            if (!tower.techLevel)
                continue;

            let level = tower.techLevel[i];
            if (!level) {
                level = 1;
            }

            const team = this.currentTeam(this.team);

            let upgrade = tower.upgrades[i];
            let disabled = level + 4 > team.techLevel;

            if (!upgrade[level-1])
            {
               upgrade = tower.upgrades[i][level-2];
               disabled = true;
            } else {
                upgrade = tower.upgrades[i][level-1];
            }

            const div = document.createElement("a");

            div.href = "#";
            div.setAttribute("data-value", upgrade.name);
            if (disabled)
                div.classList.add("gray");

            div.onclick = (e) => {
                const tower = this.selectedCurrent || this.towers[this.selectedTower];
    
                if (!tower)
                    return false;
    
                const selectedTech = i;
    
                if (selectedTech < 0)
                    return false;
    
                this.selectedTech = selectedTech;
    
                const level         = tower.techLevel ? tower.techLevel[selectedTech] : 1;
                const tech          = tower.upgrades[selectedTech][level-1];
    
                if (!tech)
                    return false;
    
                const cost          = tech.cost;
    
                document.getElementById("techButton").innerHTML = `Upgrade Tech (${cost} G)`;
            };

            div.innerHTML = upgrade.name;

            /*const sel = document.createElement("button");
            if (disabled)
                sel.setAttribute("disabled", true);
            sel.setAttribute("data-value", upgrade.name);
            sel.innerHTML = upgrade.name;

            div.appendChild(sel);*/
            techBtn.appendChild(div);
        }

        return false;
    }

    _formatLifeInfo(team) {
        return `(${team.g.toFixed(0)} / ${team.totalG.toFixed(0)}) G <br> ${team.life.toFixed(0)} / ${team.maxLives.toFixed(0)} (${team.lifeRegen.toFixed(1)})`;
    }

    idToMXY(id) {
        const mapper = window[`map${this.currentMap}`];
        const x = id % mapper.width;
        const y = Math.trunc(id / mapper.height);
        return [x, y];
    }

    occupied(tower, id) {
        const mapper = window[`map${this.currentMap}`];
        const mxy = this.idToMXY(id);
        return this.teamBlue.towers[id] || this.teamRed.towers[id] || !_canBuildXY(this.map, tower, mxy[0], mxy[1]);
    }

    buildViaMouse() {
        if (!this.selectedTower)
            return false;

        const x = this.mouse.offsetX;
        const y = this.mouse.offsetY;

        let result = this.build(this.selectedTower, ...this.xyToMXY(x, y), this.team);

        if (result) {
            this.selectedCurrent = result;
            this.selectedTower   = undefined;
            this.hideTowerInfo();
        }

        return result;
    }

    showInfo() {
        this.infoElement.style.display = "grid";
    }

    hideInfo() {
        this.infoElement.style.display = "none";
    }

    showTowerInfo() {
        this.towerInfoElement.style.display = "grid";
        this.towerInfo(this.selectedTower);
    }

    hideTowerInfo() {
        this.towerInfoElement.style.display = "none";
    }

    currentTeam(team) {
        return team == "red" ? this.teamRed : this.teamBlue;
    }

    enemyTeam(team) {
        return team == "red" ? this.teamBlue : this.teamRed;
    }

    xyToMXY(x, y) {
        return [Math.trunc(x / this.cellWidth), (Math.trunc(y / this.cellHeight))];
    }

    xyToCell(x, y) {
        return [Math.trunc(x / this.cellWidth) * this.cellWidth, (Math.trunc(y / this.cellHeight)) * this.cellHeight];
    }

    _formatTowerNow(title, element, tower, n=0) {
        
        const mapper = window[`map${this.currentMap}`];

        let damage = 0;
        let potDamge = 0;
        let levelInfo = {};
        let showInfo = false;

    
        if (tower instanceof window.Tower) {
            
           levelInfo = tower.levels[tower.level-1+n];
           showInfo = true;
           if (n > 0) {
                tower = Tower.makeTower(this.towers, tower.key);
                tower.level = n + tower.level;
           }
        } else {
           
            tower  = Tower.makeTower(this.towers, tower.key);
            if (!tower) {
             
                return false;
            }
            tower.level = n + 1;
            levelInfo = tower.levels[n];

        }


        if (!tower || !levelInfo)
            return false;

        damage = tower.calcDamage(mapper, this.grid, this.projectileGrid, 
            this.currentTeam(this.team).towers, this.cellWidth, this.cellHeight);
        potDamge = tower.calcPotentialDamage(mapper, this.grid, this.projectileGrid, 
            this.currentTeam(this.team).towers, this.cellWidth, this.cellHeight);

        if (n == 0) {
            //title.innerHTML = `${tower.name} Lv.${tower.level||1} [${tower.type}/${tower.subtypes}] (${tower.buildCost(this.currentTeam(this.team))} / ${this.currentTeam(this.team).totalG} G)<br>
            //                    Targets: ${tower.targets} ${showInfo ? `Kills ${tower.kills} Damage Dealt: ${tower.damageDealt}` : ""}`;
            title.innerHTML = `${tower.name} Lv.${tower.level||1} [${tower.type}/${tower.subtypes}] (${tower.buildCost(this.currentTeam(this.team))} G)<br>
                                Targets: ${tower.targets} ${showInfo ? `Kills ${tower.kills} Damage Dealt: ${tower.damageDealt}` : ""}`;
        }

        let inflict = [];

        if (levelInfo.inflict) {
            inflict = inflict.concat(Object.keys(levelInfo.inflict));
        }

        element.innerHTML = `
                                           Rate of Fire: ${levelInfo.rof}<br>
                                           Range: ${levelInfo.range}<br>
                                           Damage: ${levelInfo.damage||levelInfo.damageArray||levelInfo.charge} / ${damage.toFixed(2)} / ${potDamge.toFixed(2)}<br>
                                           Buffs: ${levelInfo.buff != undefined ? Object.keys(levelInfo.buff) : ""} 
                                           Gives: ${levelInfo.buffOther != undefined ? Object.keys(levelInfo.buffOther) : ""} 
                                           Traits: ${levelInfo.trait != undefined ? Object.keys(levelInfo.trait) : ""}<br>
                                           Inflict: ${inflict}<br>
                                           ${levelInfo.description}
                                           `;
    }

    selectBuildTower(name) {
        this.selectedTower = name;
        this.clearOther    = 2;

        this.hideInfo();
        this.showTowerInfo();
        this._formatTowerNow(document.getElementById("tower-title"), document.getElementById("tower-now"), this.towers[name], 0);
        this._formatTowerNow(document.getElementById("tower-title"), document.getElementById("tower-next"), this.towers[name], 1);

        this.otherCtx.clearRect(0, 0, this.otherCanvas.width, this.otherCanvas.height);
        requestAnimationFrame(this._drawDebug.bind(this, this.otherCtx));
    }

    selectAi(type) {
        if (this.selectedCurrent) {
            this.selectedCurrent.fireType = type;
        }
    }

    selectTower(tower) {
        this.selectedCurrent = tower;
        document.getElementById("towerInfo").style.display = "grid";
        //document.getElementById("towerStuff").style.display = "";
        //this.towerInfo(tower.key);

        this.towerInfo(tower.key);
        this._formatTowerNow(document.getElementById("tower-title"), document.getElementById("tower-now"), this.selectedCurrent, 0);
        this._formatTowerNow(document.getElementById("tower-title"), document.getElementById("tower-next"), this.selectedCurrent, 1);

        this.otherCtx.clearRect(0, 0, this.otherCanvas.width, this.otherCanvas.height);
        requestAnimationFrame(this._drawDebug.bind(this, this.otherCtx));
    }

    async deselectTower(tower) {
        this.selectedTower = undefined;
        this.selectedCurrent = undefined;
        document.getElementById("towerInfo").style.display = "";
        //document.getElementById("towerStuff").style.display = "none";

        await this.loadTowerList();

        this.otherCtx.clearRect(0, 0, this.otherCanvas.width, this.otherCanvas.height);
        requestAnimationFrame(this._drawDebug.bind(this, this.otherCtx));
    }

    // SETTINGS METHOD

    /** Version 3 (complete)
     * Sets the game mode of the game
     *  solo - pve
     *  ai   - pvc
     *  multi - pvp
     * @param {*} mode 
     */
    setMode(mode) {
        switch (mode.toLoseCase()) {
            case "solo": default:
                this.gameMode = "solo";
            break;
            case "ai":
                this.gameMode = "ai";
            break;
            case "multi":
                this.gameMode = "multi";
            break;
        }

        if (this.gameModeElement)
            this.gameModeElement.innerHTML = this.gameMode;
    }

    /**
     * Speed at which the game plays
     * @param {*} speed 
     */
    setGameSpeed(speed) {
        this.gameSpeed = speed;        

        if (this.mainTimer)
            clearInterval(this.mainTimer);

        const spd = this.gameSpeeds[this.gameSpeed];

        this.mainTimer = setInterval(this.mainEvent.bind(this), spd);

        // Dont forget to update element each time
        if (this.gameSpeedElement)
            this.gameSpeedElement.innerHTML = `x${this.gameSpeed+1}`;
    }

    togglePause() {
        this.pause = !this.pause;

        if (this.pauseElement)
            this.pauseElement.innerHTML = this.pause ? "Unpause" : "Pause";
    }
    
    shiftSpeedRight() {
        this.gameSpeed  = (this.gameSpeed + 1) % this.gameSpeeds.length;
        this.setGameSpeed(this.gameSpeed);
    }

    shiftSpeedLeft() {
        this.gameSpeed  = (this.gameSpeed - 1);
        if (this.gameSpeed < 0)
            this.gameSpeed = this.gameSpeeds.length - 1;
        this.setGameSpeed(this.gameSpeed);
    }

    // ELEMENT METHODS
    _resize(w, h) {
        this.resizeCanvas(w, h);
        this._setupSizes(this.currentMap);
    }

    resizeCanvas(w, h) {
        this.backgroundCanvas.width = w;
        this.backgroundCanvas.height = h;

        this.projectileBelowCanvas.width = w;
        this.projectileBelowCanvas.height = h;

        this.unitCanvas.width = w;
        this.unitCanvas.height = h;

        this.towerCanvas.width = w;
        this.towerCanvas.height = h;
    
        this.projectileAboveCanvas.width = w;
        this.projectileAboveCanvas.height = h;

        this.otherCanvas.width = w;
        this.otherCanvas.height = h;
     }

     _setupSizes(mapName) {
        const mapper = window[`map${mapName}`];

        if (!mapper)
            return false;

        const width = mapper.width;
        const height = mapper.height;
        const screenW = this.otherCanvas.width;
        const screenH = this.otherCanvas.height;

        const aw = screenW / width;
        const ah = screenH / height;

        this.cellWidth = aw;
        this.cellHeight = ah;
    }

    // MAIN METHODS

    async start() {
        await this._firstTimeSwitchMap();
        await this.loadGameMaps();
        await this.loadTowerList();
        
        if (this.tutorial)
            this.startTutorial();
       
        this.loaded = true;
    }

    goalReached(unit)
    {
        unit.reachedEnd = true;

        let team = this.enemyTeam(unit.team);

        team.life -= unit.damage || 1;
        this.currentUnits += 1;
        if (unit.steal) {
            team.g -= unit.steal;
        }

        for (let name in unit.reachGoal) {
            const amount =  unit.reachGoal[name];
            const debuff =  unit.enemy.debuff[name];

            if (debuff && debuff.start) {
                debuff.start(unit, ...amount);
            } else {
                let state  =  window[`${name}TeamState`];

                if (!state)
                    continue;
                else
                    state = new state;

                state.owner = unit;
                state.start(unit, ...amount, name);
                unit.enemy.debuff[name] = state; 
            }
        }
        // removed else where
        //this.unitGrid.remove(unit);

        this.updateRoundInfo();
    }

    

    updateStateInfo() {
        this.pauseElement.innerHTML = this.pause ? "Unpause" : "Pause";
    }

    updateRoundInfo() {
        const info      = window[`${this.currentMap}-info`];

        if (this.currentMapElement)
            this.currentMapElement.innerHTML = info.title;
        
        if (this.gameMode == "solo") {
            this.team = "blue";
            this.redTeamInfoElement.innerHTML = "";

            this.blueTeamInfoElement.innerHTML = this._formatLifeInfo(this.teamBlue);
        } 
        
        if (this.gameMode != "solo") {
            this.redeTeamInfo.innerHTML = this._formatLifeInfo(this.teamRed);
        }

        document.getElementById("roundAt").innerHTML = this.roundAt;
        if (this.roundPass > 0)
             document.getElementById("wins").innerHTML = `(<b style="color: green;">${this.roundPass}</b>)`;
    }

    // TUTORIAL METHODS -------------------------------------------------------

    // NOT WORKING
    async sendMessage(message, nolap=true, force=false) {
        if (this.nolap && !force)
            return false;

        this.disableBuild = true;
        if (nolap)
            this.nolap = true;

        document.getElementById("nextRound").disabled = true;
        document.getElementById("messageDialog").style.display = "block";
        return new Promise(((t, f) => {
            const dialog = document.getElementById("messageDialog");
            const messagen = document.getElementById("message");
            const btn     = document.getElementById("messageButton");

            dialog.open = true;

            messagen.innerHTML = message;
            btn.onclick = (e) => {
                dialog.style.display = "none";
                this.disableBuild = false;
                document.getElementById("nextRound").disabled = false;
                this.nolap = false;
                t(true);
            }
        }).bind(this));
    }

    // not working
    async startTutorial() {
        this.switchMap(this.defaultMap);

            await this.sendMessage(`Welcome Defender to my kingdom! Since your new lets begin
                            your training.`, true, true);

            this.build("star", 9, 7, "blue", true);
            this.build("wind", 7, 5, "blue", true);
            this.build("nature", 9, 5, "blue", true);
            this.build("wind", 11, 5, "blue", true);

            await this.sendMessage(`I've already built you some towers to try out! Give them a whirl! Just
        click next round to begin!!`, true, true);
    }


    // DRAWING ----------------------------------------------------------------

    _drawRange(ctx, tower, force)
    {
        const selected = this.selectedCurrent ? this.selectedCurrent.uid: -1;

        if (tower.name == "Debug Tower" || tower.name == this.selectedTower || tower.uid == selected|| force) {
            const range = tower.levels[(tower.level-1)||0].range;
            ctx.beginPath();
            
            ctx.ellipse(tower.cx(this.cellWidth), tower.cy(this.cellHeight), 
            range * this.cellWidth, range * this.cellHeight, 0, 2 * Math.PI, false);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'green';
            ctx.stroke();

            /*ctx.strokeStyle   = "red";
            ctx.strokeRect((tower.mx - range) * this.cellWidth, (tower.my - range) * this.cellHeight,
            (range + range + 1) * this.cellWidth, this.cellHeight * (range + range + 1));

            ctx.strokeStyle   = "green";
            ctx.strokeRect(tower.cx(this.cellWidth) - range * this.cellWidth, tower.cy(this.cellHeight) - range * this.cellHeight,
            range * this.cellWidth * 2, range * this.cellHeight * 2);*/
        }
    }

    _drawTowers() {
        const mapper = window[`map${this.currentMap}`];

        function draw(team, tid) {
            for (let name in team) {
                const tower= team[name];
    
                if (!tower)
                    continue;

                this.towerCtx.drawImage(tower.image, 0, 0, tower.image.width, tower.image.height, tower.mx * this.cellWidth, tower.my * this.cellHeight, this.cellWidth, this.cellHeight);
    
                this.towerCtx.font = "12px Arial";
                
                if (tower.team == "blue")
                    this.towerCtx.fillStyle = "blue";
                else
                    this.towerCtx.fillStyle = "red";
                this.towerCtx.fillText(tower.level, tower.mx * this.cellWidth, tower.my * this.cellHeight);

                this._drawRange(this.towerCtx, tower);
                

                this.towerCtx.fillStyle = "black";
            }
        }

        draw.call(this, this.teamBlue.towers, "blue");
        draw.call(this, this.teamRed.towers, "red");
    }

    _drawUnits() {
        const contains = this.unitGrid.contain(0, 0, this.unitGrid.width, this.unitGrid.height);    
        contains.forEach(u => 
            {
                if (!u)
                    return false;

                if (u.dead <= 2) {
                    u.draw(this.unitCtx, this.cellWidth, this.cellHeight);
                }
            });
    }

    _drawDebug(ctx) {
        ctx.font = "10px arial";
        ctx.fillStyle = "red";
        const x = this.mouse.offsetX;
        const y = this.mouse.offsetY;

        const m = this.xyToMXY(x, y);
        const cell = this.xyToCell(x, y);

        ctx.strokeStyle = "silver";
        ctx.fillText(`X: ${this.mouse.x} Y: ${this.mouse.y} cellX: ${m[0]} cellY: ${m[1]}`, 0, 10);
        ctx.strokeRect(cell[0], cell[1], this.cellWidth, this.cellHeight);

        if (this.selectedTower && this.mouse.x != undefined) {
            //const x = this.mouse.x;
            //const y = this.mouse.y;

            const m = this.xyToCell(x, y);
            const mm = this.xyToMXY(x, y);
            const tower = new Tower(JSON.parse(JSON.stringify(this.towers[this.selectedTower])));

            if (tower)
            {
                tower.mx = mm[0]
                tower.my = mm[1];
        
                tower.x = tower.mx * this.cellWidth;
                tower.y = tower.my * this.cellHeight;
    
                const img = this.towers[this.selectedTower].image;
    
                ctx.drawImage(img, 0, 0, img.width, img.height, ...m, this.cellWidth, this.cellHeight);
                this._drawRange(ctx, tower, true);
            }
        }else if (this.selectedCurrent) {
            this._drawRange(ctx, this.selectedCurrent);

            if (!this.selectedCurrent.units)
                return false;

            for (let i = 0; i < this.selectedCurrent.units.length; ++i) {
                const unit = this.selectedCurrent.units[i];

                ctx.strokeStyle = "blue";
                ctx.strokeRect(unit.x, unit.y, unit.w, unit.h);
            }
        }

        
    }

    _drawMap(n) 
    {
        const mapper = window[`map${n}`];

        if (!mapper)
            return false;

        for (let i = 0; i < mapper.layers[0].data.length; ++i) {

            const tile = mapper.layers[0].data[i];

            if (tile == 0)
                continue;

            const img  = this.images[this.tiles[tile-1]];
            const x    = i % mapper.width;
            const y    = Math.trunc(i / mapper.width);

            this.backgroundCtx.drawImage(img, 0, 0, img.width, img.height,
                 x * this.cellWidth, y * this.cellHeight, this.cellWidth, this.cellHeight);
            
            
            this.backgroundCtx.strokeStyle = "gray";
            this.backgroundCtx.setLineDash([1,2]);
            this.backgroundCtx.strokeRect(x * this.cellWidth, y * this.cellHeight, this.cellWidth, this.cellHeight);
        }

        for (let i = 0; i < mapper.layers[1].objects.length; ++i) {

            const obj = mapper.layers[1].objects[i];
            const type = obj.type.split(",");

            if (this.roundBegin && (type[0] != "blue" && type[0] != "red"))
                continue;

            const img  = this.images[this.tiles[obj.gid-1]];
            
            const x    = Math.round(Math.trunc(obj.x) / obj.width);
            const y    = Math.round(Math.trunc(obj.y) / obj.width) - 1;

            this.backgroundCtx.drawImage(img, 0, 0, img.width, img.height, 
                x * this.cellWidth, y * this.cellHeight, this.cellWidth, this.cellHeight);
        }
    }

    _drawGrid(ctx, color) {
        const mapper = window[`map${this.currentMap}`];

        if (!mapper)
            return false;

        for (let i = 0; i <mapper.height; ++i) {
            for (let j = 0; j < mapper.width; ++j) {
                ctx.strokeStyle = color;
                ctx.setLineDash([2,3]);
                ctx.lineSize = "1px";

                ctx.strokeRect(j * this.cellWidth, i * this.cellHeight, this.cellWidth, this.cellHeight);
            }
        }
    }


    draw() {
        //this.otherCtx.clearRect(0, 0, this.otherCanvas.width, this.otherCanvas.height);
        this.unitCtx.clearRect(0, 0, this.unitCanvas.width, this.unitCanvas.height);

        if (this.clearBackground) {
            this.backgroundCtx.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height);
            this._drawMap(this.currentMap);
        }

        // below/above
        const projectiles = this.projectileGrid.trackContains();

        if (projectiles.length || this.clearP) {
            this.projectileBelowCtx.clearRect(0, 0, this.projectileBelowCanvas.width, this.projectileBelowCanvas.height);
            this.projectileAboveCtx.clearRect(0, 0, this.projectileAboveCanvas.width, this.projectileAboveCanvas.height);
            if (this.clearp == 1)
                this.clearp = 0;
        }

        projectiles.forEach(p => {
            if (!p)
                return false;

            if (p.draw(this.projectileBelowCtx, this.projectileAboveCtx,this.cellWidth, this.cellHeight)) {
                this.clearP =1;
            }
        });

        // unit
        this._drawUnits(); // make only active 

        if (this.clearTowers) {
            this.towerCtx.clearRect(0, 0, this.towerCanvas.width, this.towerCanvas.height);
            this._drawTowers();
        }

        if (this.clearBackground)
            this._drawGrid(this.backgroundCtx, "gray");

        //this._drawDebug(this.otherCtx);
        this.drawComplete = true;
    }

    async mainEvent() {
        const mapper = window[`map${this.currentMap}`];

        // draw here
        if (this.drawComplete) {
            this.drawComplete = false;
            requestAnimationFrame(this.draw.bind(this));
        }

        // update here
        if (this.currentUnits >= this.totalUnits) {
            document.getElementById("nextRound").disabled = false;
        }

        if (this.currentUnits >= this.totalUnits &&  this.roundBegin) {
            this.roundEnd();
        }
            
        // update state here
        if (!this.pause && this.currentUnits < this.totalUnits &&  this.roundBegin) {

            const spawns = this.spawnArr[this.ticks||0];
        
            if (this.ticks >= 0)
                ++this.ticks;
    
            if (spawns) {
                const team = this.enemyTeam(this.team);

                for (let i = 0; i < spawns.length; ++i) {
                    const spawn = spawns[i];
        
                    if (!spawn)
                        continue;
        
                    this.spawn(spawn[0], team, false);
                }
            }

            function runTowers(k, towers) {
            
                const tower = towers[k];

                if (!tower)
                    return false;

                let p = tower.update(mapper, this.unitGrid, this.projectileGrid, 
                    this.currentTeam(tower.team), this.enemyTeam(tower.team), 
                    this.cellWidth, this.cellHeight);
    
                if (!p)
                    return false;

                this.projectileGrid.track(p.x, p.y, p.w, p.h);
            }
    
            Object.keys(this.teamBlue.towers).forEach(k => { 
                runTowers.call(this, k, this.teamBlue.towers);
            });
            Object.keys(this.teamRed.towers).forEach(k => {
                runTowers.call(this, k, this.teamRed.towers);
            });

            for (let i = 0; i < this.removeProjectiles.length;++i) {
                this.projectileGrid.remove(this.removeProjectiles[i]);
            }

            this.removeProjectiles = [];

            const projectiles = this.projectileGrid.trackContains();


            projectiles.forEach(p => {
                if (!p)
                    return false;

                let d =  p.update(mapper, this.unitGrid, this.projectileGrid, 
                    this.currentTeam(p.team), this.enemyTeam(p.team), 
                    this.cellWidth, this.cellHeight);

                if (d)  {
                    this.removeProjectiles.push(p);
                } else {
                    this.projectileGrid.track(p.x, p.y, p.w, p.h);
                }
            });

            // do updates
            let contain = this.unitGrid.trackContains();
            //this.unitGrid.reset();

            for (let i = 0; i < contain.length; ++i) {
                const unit = contain[i];

                if (!unit || unit.dead) {
                    if (unit.dead == 1) {
                        this.currentUnits += 1;
                    }
                    ++unit.dead;
                }

                if (!unit || unit.dead || unit.reachedEnd)
                    continue;

                if (unit.update(mapper, this.unitGrid, this.projectileGrid, 
                    this.currentTeam(unit.team), this.enemyTeam(unit.team), this.cellWidth, this.cellHeight))

                {
                    this.goalReached(unit);
                }
                
            }

            if (this.goldOverTime) {
                this.teamBlue.g += this.goldAmountOverTime;
                this.teamRed.g  += this.goldAmountOverTime;

                this.teamBlue.totalG += this.goldAmountOverTime;
                this.teamRed.totalG  += this.goldAmountOverTime;
            }
            
            this.updateRoundInfo();
        }
    }

    // TOWER METHODS ------------------------------------------------------

    // not setup
    async loadTowerList()
    {
        if (!document.getElementById(`${this.dataPath}towerList.js`))
            await addScript(`${this.dataPath}towerList.js`);

        const element = document.getElementById(`dropContent`);

        if (!element)
            return false;

        element.innerHTML = "";


        for (let i = 0; i < window["towerList"].length; ++i) {
            const towerName = window["towerList"][i];
            const tower = this.towers[towerName];

            this.maxOfEach[towerName] = tower.maxBuild || Number.MAX_VALUE;

            /*

            <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
*/

            const option = document.createElement("a");

            const img = document.createElement("img");
            img.src   = `${this.assetPath}${towerName}.png`;
            img.classList.add("tower-img");

            option.setAttribute("href","#");
            option.appendChild(img); 
            option.innerHTML += tower.name;

            option.onclick = (e) => {
                this.selectBuildTower(towerName);
            }

            element.appendChild(option);
        }
    }

    // MAP METHODS --------------------------------------------------------

    _firstTimeSwitchMap()
    {
        this.loader    = new Loader(this.otherCanvas);

        this.loader.addScript(this.dataPath + "unitai.js");
        this.loader.addScript(this.dataPath + "crits.js");
        this.loader.addScript(this.dataPath + "tileset.js");
        this.loader.addScript(this.dataPath + "towers.js");
        this.loader.addScript(this.dataPath + "rounds.js");

        this.loader.addPromise(this._loadCrits.bind(this));
        this.loader.addPromise(this._loadTiles.bind(this));
        this.loader.addPromise(this._loadTowers.bind(this));
    }

    _loadCrits() {
        this.critByTier = {};
        return new Promise((t, f) => {
            console.log('setup crits');
            let w = 0;
            for (let i in this.crits) {
                const crit = this.crits[i];
                const img  = new Image();
                //img.crossOrigin = "anonymous";  // ------------------------------------------------------------------
                img.src    = this.assetPath + crit.imagePath;
                img.onload = () => {
                    ++w;
                };
                img.onerror = (e) => {
                    console.error("failed to load image " + crit.imagePath);
                    f(false);
                };
                crit.image = img;
                crit.key = i;

                if (crit.setup != "new")
                    continue;
                
                if (!this.critByTier[crit.tier||0])
                    this.critByTier[crit.tier||0] = [ crit ];
                else
                    this.critByTier[crit.tier||0].push(crit);
            }

            let timer = setInterval(() => {
                if (w >= Object.keys(this.crits).length) {
                    clearInterval(timer);
                    t(true);
                }
            }, 333);
        });
    }

    _loadTowers() {
        return new Promise((t, f) => {
            console.log("setup towers");
            let w = 0;
            for (let i in this.towers) {
                const tower = this.towers[i];
                const img  = new Image();
        
                if (!tower)
                {
                    ++w;
                    continue;
                }

                console.log(tower.name);

                tower.key = i;

                img.src    = this.assetPath + tower.imagePath;
                img.onload = () => {
                    ++w;
                };
                img.onerror = (e) => {
                    console.error("failed to load image " + tower.imagePath);
                    f(false);
                };
                tower.image = img;

                if (!tower.projectileImage) {
                    ++w;
                    continue;
                }


                const imgb  = new Image();
                imgb.src    = this.assetPath + tower.projectilePath;
                imgb.onload = () => {
                    ++w;
                };
                imgb.onerror = (e) => {
                    console.error("failed to load image " + tower.projectilePath);
                    f(false);
                };
                tower.projectileImage = imgb;
            }

            let timer = setInterval(() => {
                if (w >= Object.keys(this.towers).length * 2) {
                    clearInterval(timer);
                    t(true);
                }
            }, 333);

            let timerb = setTimeout(() => {
                clearTimeout(timerb);
                f(false);
            }, 5000);
        });
    }

    _loadTiles() {
        return new Promise((t,f) => {
            console.log("setup tiles");
            let timer =  setInterval(() => {
                
            const tiler = window[`tileset`];

            if (!tiler)
                return false;

            clearInterval(timer);

            this.tiles = {};

            let w = 0;
            
            for (let i = 0; i < tiler.terrains.length; ++i) {
                const terr = tiler.terrains[i];

                this.map.terrains[terr.tile] = terr.name;
            }

            for (let i =0; i < tiler.tiles.length; ++i) {
                const tile = tiler.tiles[i];

                this.tiles[tile.id] = tile.image;
                let img = new Image();
                img.src = this.assetPath + tile.image;
                img.onload = () => {
                    this.images[tile.image] = img;
                    ++w;
                };
            }

            let timerb = setInterval(() => {
                if (w >= tiler.tiles.length) {
                    clearInterval(timerb);
                    t(true);
                }
            }, 333);
        }, 333) });
    }

    async loadGameMaps() {
        if (!document.getElementById(`${this.dataPath}mapList.js`))
            await addScript(`${this.dataPath}mapList.js`);

        const element = document.getElementById(`dropContentMaps`);

        if (!element) {
            return false;
        }

        element.innerHTML = "";

        element.onclick = async (e) => {
            await this.switchMap(e.target.getAttribute("data-value"));
        };

        for (let name in window["mapList"]) {
            const map = window["mapList"][name];

            if (!map)
                continue;

            /*const option = document.createElement("option");
            option.value = name;
            option.innerHTML = map[0];
            element.appendChild(option);
            */

            const option = document.createElement("a");

            option.setAttribute("href","#");
            option.setAttribute("data-value", name);
            option.innerHTML = name;

            element.appendChild(option);

        
            if (typeof(map[1]) == "string" && map[1].toLowerCase() == "default") {
                option.selected = true;
                const d = localStorage.getItem("TD-currentMap");
                this.defaultMap = name;

                

                if (typeof(d) == "string" && d) {
                    
                    await this.switchMap(d);
                }
                else {
                    
                    await this.switchMap(name);
                }
            } 

            
        }

    }

    _loadTiles() {
        return new Promise((t,f) => {
            console.log("setup tiles");
            let timer =  setInterval(() => {
                
            const tiler = window[`tileset`];

            if (!tiler)
                return false;

            clearInterval(timer);

            this.tiles = {};

            let w = 0;
            
            for (let i = 0; i < tiler.terrains.length; ++i) {
                const terr = tiler.terrains[i];

                this.map.terrains[terr.tile] = terr.name;
            }

            for (let i =0; i < tiler.tiles.length; ++i) {
                const tile = tiler.tiles[i];

                this.tiles[tile.id] = tile.image;
                let img = new Image();
                img.src = this.assetPath + tile.image;
                img.onload = () => {
                    this.images[tile.image] = img;
                    ++w;
                };
            }

            let timerb = setInterval(() => {
                if (w >= tiler.tiles.length) {
                    clearInterval(timerb);
                    t(true);
                }
            }, 333);
        }, 333) });
    }

    _loadMap(mapName) {
        return new Promise((t, f) => {
            console.log("setup map");
            let timerb = setTimeout(() => {
                f(false);
            }, 5000);

            let timer =  setInterval(() => {
                const mapper = window[`map${mapName}`];

                if (!mapper)
                    return false;

                clearInterval(timer);

                this._setupSizes(mapName);

                this.map.data = mapper;
        
                for (let i = 0; i < mapper.layers[1].objects.length; ++i) {
        
                    const obj = mapper.layers[1].objects[i];
                    const type = obj.type.split(",");
                    
                    const x    = Math.round(Math.trunc(obj.x) / mapper.tilewidth);
                    const y    = Math.round(Math.trunc(obj.y) / mapper.tileheight) - 1;
        
                    if (type[0] == "blue") {
                        this.teamBlue.start[type[1]] = [x, y];
                        this.map.teamBlueStart[type[1]] = [x, y];
                    }
                    else if (type[0] == "red") {
                        this.teamRed.start[type[1]] = [x, y];
                        this.map.teamRedStart[type[1]] = [x, y];
                    } else if (type[0] != "") {
                        const wp = this.map.waypoints[type[1]];

                        if (!wp) 
                            this.map.waypoints[type[1]] = [];

                        this.map.waypoints[type[1]][type[0]] = [x, y];
                    }
                }

                if (mapper.layers.length <= 2) {
                    t(true);
                    return true;
                }

                for (let i = 0; i < mapper.layers[2].objects.length; ++i) {
        
                    const obj = mapper.layers[2].objects[i];
                    const type = obj.type.split(",");
                    
                    const x    = Math.round(Math.trunc(obj.x) / mapper.tilewidth);
                    const y    = Math.round(Math.trunc(obj.y) / mapper.tileheight) - 1;
        
                    if (type[0] != "") {
                        const wp = this.map.waypointsRed[type[1]];

                        if (!wp) 
                            this.map.waypointsRed[type[1]] = [];

                        this.map.waypointsRed[type[1]][type[0]] = [x, y];
                    }
                }

                for (let i = 0; i < mapper.layers[3].objects.length; ++i) {
        
                    const obj = mapper.layers[3].objects[i];
                    const type = obj.type.split(",");
                    
                    const x    = Math.round(Math.trunc(obj.x) / mapper.tilewidth);
                    const y    = Math.round(Math.trunc(obj.y) / mapper.tileheight) - 1;
        
                    if (type[0] != "") {
                        const wp = this.map.waypointsBlue[type[1]];

                        if (!wp) 
                            this.map.waypointsBlue[type[1]] = [];

                        this.map.waypointsBlue[type[1]][type[0]] = [x, y];
                    }
                }

                t(true);
            }, 333);
            
        });
    }

    async switchMap(name) {
        name = arguments[0];

        if (name == undefined) {
            localStorage.removeItem("TD-currentMap");
            return false;
        }

        console.log("switching map: " + name);
        
        this.currentMap = name;
        localStorage.setItem("TD-currentMap", this.currentMap);
        document.getElementById("gameMaps").value = this.currentMap;

        // info about current map
        if (!document.getElementById(`${this.mapPath}info-${this.currentMap}.js`))
             this.loader.addScript(`${this.mapPath}info-${this.currentMap}.js`);

        // actual map
        if (!document.getElementById(`${this.mapPath}map-${this.currentMap}.js`))
            this.loader.addScript(`${this.mapPath}map-${this.currentMap}.js`);

        this.loader.addPromise(this._loadMap.bind(this, this.currentMap));

        try {
            await this.loader.start();
        } catch (e) {
            on_error(e);
            console.error(e);
            localStorage.removeItem("TD-currentMap");
            return false;
        }
        
        
        document.getElementById("gameMaps").value = this.currentMap;

        // allows ability to spawn monsters
        const spawnSelectEl = document.getElementById("spawnSelect");
        const spawnImgEl = document.getElementById("spawnImg");

        spawnSelectEl.innerHTML = "<option value='none'>none</option>";

        spawnSelectEl.onchange = (e) => {
            if (e.target.value == "none")
                return;
            const ctx    = spawnImgEl.getContext("2d");
            const img   = this.crits[e.target.value].image;
            spawnImgEl.width = img.width;
            spawnImgEl.height = img.height;
            ctx.drawImage(img, 0, 0, spawnImgEl.width, spawnImgEl.height);
        }

        for (var name in this.crits) {
            const option = document.createElement("option");
            option.value = name;
            option.innerHTML = name;

            spawnSelectEl.appendChild(option);
        }

        const info      = window[`${this.currentMap}-info`];

        if (!info)
            return false;
        
        this.newGame();
        this._drawMap(this.currentMap);
        this.setGameSpeed(this.gameSpeed);
        console.log("switchMap completed");
        this.hideInfo();
        return true;
    }

    newGame() {
        const mapper = window[`map${this.currentMap}`];
        const info      = window[`${this.currentMap}-info`];

        this.roundAt   = 0;
        this.roundPass = 0;
        // default challenge
        this.goldEnd   = true;
        this.maxTowers  = Number.MAX_VALUE;
        this.goldOverTime = true;
        this.maxOfEach    = {};
        for (let name in this.towers) {
            this.maxOfEach[name] = Number.MAX_VALUE;
        }

        this.roundBegin = false;
        this.roundPass = 0;
        this.pause     = true;
        this.teamBlue  =  {
            buildTypes: {}, transform: this.transform.bind(this), totalG: info.gold,
            life: info.lives || 20, maxLives: info.lives || 20, lifeRegen: info.lifeRegen || 0, towers: {}, techLevel: 5, g: info.gold || 400, debuff: {}, buff: {} 
        };
        this.teamRed = {
            buildTypes: {}, transform: this.transform.bind(this), totalG: info.gold,
            life: info.lives || 20, maxLives: info.lives || 20, lifeRegen: info.lifeRegen || 0, towers: {}, techLevel: 5, g: info.gold || 400, debuff: {}, buff: {} 
        };
        this.teamBlue.team = "blue";
        this.teamRed.team = "red";
        this.teamBlue.start = this.map.teamBlueStart;
        this.teamRed.start = this.map.teamRedStart;
        this.unitGrid       = new MGrid(mapper.width, mapper.height);
        this.projectileGrid = new MGrid(mapper.width, mapper.height);

        this.updateRoundInfo();        
    }

    // UNIT METHODS

    transform(unit, transform) {
        this.totalUnits += 1;

        let critterNew = JSON.parse(JSON.stringify(this.crits[transform]));
        let enemy      = unit.enemy;
        let debuff     = unit.debuff;

        unit.enemy     = undefined;
        unit.debuff    = undefined;
        let critter    = new Unit(JSON.parse(JSON.stringify(unit)));
        unit.debuff    = debuff;
        unit.enemy     = enemy;

        Object.assign(critter, critterNew);

        critter.key       = transform;
        critter.transform = critterNew.transform;
        critter.dead      = false;
        critter.spawnTime = unit.spawnTime;
        critter.steps    = unit.steps;
        critter.waypoint = unit.waypoint;
        critter.maze     = unit.maze;
        critter.lastPoint = unit.lastPoint;
        critter.moveTo   = unit.moveTo;
        critter.facing   = unit.facing;
        critter.markId   = unit.markId;
        critter.m        = unit.m;
        critter.damage   = critter.damage || 1;
        critter.x = unit.x;
        critter.y = unit.y;
        critter.w = unit.w;
        critter.h = unit.h;
        critter.mx = unit.mx;
        critter.my = unit.my;
        critter.ai = unit.ai;
        critter.image = this.crits[transform].image;
        critter.team  = unit.team;
        if (critter.team == "blue") {
            critter.owner = this.teamBlue;
            critter.enemy = this.teamRed;
        } else  {
            critter.owner = this.teamRed;
            critter.enemy = this.teamBlue;
        }

        this.unitGrid.add(critter);
        this.unitGrid.track(critter.x, critter.y, critter.w, critter.h);
        this.clearUnit = 1;
    }

    spawn(unitName, team, counts=true) {
        if (counts)
            ++this.totalUnits;

        const keys = Object.keys(team.start);
        const wp = randInt(0, keys.length - 1);
        const value = keys[wp];
        const start = team.start[value];

        let critter = new Unit(JSON.parse(JSON.stringify(this.crits[unitName])));
        critter.key = unitName;
        critter.team = team.team;
        critter.enemy = this.enemyTeam(team.team);
        critter.mx   = start[0];
        critter.my   = start[1];
        critter.x    = critter.mx * this.cellWidth;
        critter.y    = critter.my * this.cellHeight;
        critter.w    = this.cellWidth;
        critter.h    = this.cellHeight;
        critter.image = this.crits[unitName].image; 
        
        if (team.team == "red") {
            if (Object.keys(this.map.waypointsRed).length) {
                critter.waypoints = JSON.parse(JSON.stringify(this.map.waypointsRed[value]));
            } else {
                critter.waypoints = JSON.parse(JSON.stringify(this.map.waypoints[value]));
            }
            critter.waypoints.splice(1, 0, this.map.teamRedStart[value]);
            critter.waypoints.push(this.map.teamBlueStart[value]);
        } else {
            if (Object.keys(this.map.waypointsBlue).length) {
                critter.waypoints = JSON.parse(JSON.stringify(this.map.waypointsBlue[value]));
            } else {
                critter.waypoints = JSON.parse(JSON.stringify(this.map.waypoints[value]));
            }
            critter.waypoints.splice(1, 0, this.map.teamBlueStart[value]);
            critter.waypoints.push(this.map.teamRedStart[value]);
        }
        critter.waypointIndex = team.team == "red" ? 1 : this.map.waypoints[value].length - 3;

        this.unitGrid.add(critter);
        this.unitGrid.track(critter.x, critter.y, critter.w, critter.h);
    }

    build(name, mx, my, team, free) {
        if (this.disableBuild)
            return false;

        if (Object.keys(this.currentTeam(this.team).towers).length  >= this.maxTowers)
            return false;

        if ((this.currentTeam(this.team).buildTypes[name] || 0) >=  this.maxOfEach[name])
            return false;

        const tower = this.towers[name];

        if (!tower)
            return false;

        const mapper = window[`map${this.currentMap}`];
        const aTower = Tower.makeTower(this.towers, name);

        if (!aTower)
            return false;

        let result = aTower.build(this, mx + my * mapper.width, team, free);

        this._formatTowerNow(document.getElementById("tower-title"), document.getElementById("tower-now"), aTower, 0);
        this._formatTowerNow(document.getElementById("tower-title"), document.getElementById("tower-next"), aTower, 1);

        return result;
    }

    async roundEnd() {
        this.roundBegin = false;
        document.getElementById("save").disabled = false;
        if (this.goldEnd) {
            const GGain = 25 + (Math.trunc(this.roundAt / 10)) * 25 * (this.roundPass+1);

            this.teamBlue.g += GGain;
            this.teamRed.g += GGain;

            this.teamBlue.totalG += GGain;
            this.teamRed.totalG +=GGain;
    
            this.updateRoundInfo();
            this.updateStateInfo();
        }

        if (!this.nopause)
            await this.handleRoundMessages("end");

        if (this.nopause)
            this.nextRound();
    }

    async handleRoundMessage(messages, b, offset) {
        if (messages[this.roundAt + offset]) {
            let msgs = messages[this.roundAt+offset][b];
            
            for (let name in msgs) {
                const msg = msgs[name];
                await this.sendMessage(msg, true, true);
            }

            if (b == "end") {
                const action = messages[this.roundAt+offset].action;
                if (action && action[0] == 'newgame') {
                    this.tutorial = false;
                    await this.newGame();
                    this.roundAt = action[1];
                }
                else if (action && action[0] == "nextround") {
                    await this.nextRound();
                    this.updateRoundInfo();
                    this.updateStateInfo();
                } else if (action && action[0] == "unpause") {
                    this.pause = false;
                }
            }
        }
    }

    async handleRoundMessages(b, offset=0) {
        if (this.tutorial) {
            await this.handleRoundMessage(this.tutorialMessages, b, offset);
        } else {
            await this.handleRoundMessage(this.messages, b, offset);
        }
    }

    setLastRound(n) {
        this.lastRound = parseInt(n);
        this.updateRoundInfo();
        this.updateStateInfo();
    }

    setRound(n) 
    {
        this.roundAt = parseInt(n);
        this.updateRoundInfo();
        this.updateStateInfo();
    }

    setGold(g) {
        this.teamBlue.g = parseInt(g);
        this.updateRoundInfo();
        this.updateStateInfo();
    }

    calcInfo(enemies, index) {
        let life = 0;
        let shield = 0;
        let defense = 0;
        let speed   = 0;
        let totalSpeed = 0;
        let resist =0;
        let total = 0;
        let hasFlying = 0;
        let hasStealth = 0;
        let g         = 0;

        for (let i = index; i < enemies.length; ++i) {
            const info  = enemies[i];
            const name = info[0];
            let em = JSON.parse(JSON.stringify(this.crits[name]));
            em = new Unit(em);

            if (!em)
                continue;

            if (!(info[4] <= this.roundPass && (info[5] == this.roundPass || info[5] == undefined)))
                continue;

            life += em.life[1] * info[1];
            if (em.shield && em.shield[1] > shield)
                shield = em.shield[1];
            if (em.defense[1] > defense)
                defense = em.defense[1];
            if (em.speed[1] > speed)
                speed = em.speed[1];
            if (em.resist[1] > resist)
                resist = em.resist[1];

            if (em.moveType == "air")
                hasFlying += info[1];

            if (em.buff && em.buff.invis || em.buff && em.buff.invis2) {
                hasStealth += info[1];
            }

            const sh = em.shield ? em.shield[1] : 0;

            g += (em.life[1] * 0.25 + sh + em.resist[1] * 2 + em.defense[1] * 2 + 1) * info[1];
            total += info[1];
        }

        this.roundInfo = {};
        this.roundInfo.hasStealth = hasStealth;
        this.roundInfo.hasFlying = hasFlying;
        this.roundInfo.defense = defense;
        this.roundInfo.speed   = speed;
        this.roundInfo.resist  = resist;
        this.roundInfo.life    = life;
        //this.info.totalLife    += life;
        //this.info.totalSpeed   += totalSpeed;
        this.roundInfo.shield  = shield;
        this.roundInfo.g       = g;

        this.totalUnits += total;
        /*document.getElementById("roundInfo").innerHTML = `Units: ${this.totalUnits} Life: ${life.toFixed(0)} Def: ${defense.toFixed(2)} Res: ${resist.toFixed(2)} 
                                            Shld: ${shield.toFixed(2)} spd: ${speed.toFixed(2)} <br>
                                                Fly: ${hasFlying} Stealth: ${hasStealth}`;*/
    }

    async nextRound(pause = false) {
        document.getElementById("save").disabled = true;
        this.roundBegin = false;
        document.getElementById("nextRound").disabled = true;

        const mapper = window[`map${this.currentMap}`];

        this.unitGrid       = new MGrid(mapper.width, mapper.height);
        this.projectileGrid = new MGrid(mapper.width, mapper.height);

        this.teamBlue.life += this.teamBlue.lifeRegen;
        this.teamRed.life  += this.teamRed.lifeRegen;

        if (this.teamBlue.life > this.teamBlue.maxLives)
            this.teamBlue.life = this.teamBlue.maxLives;

        if (this.teamRed.life > this.teamRed.maxLives)
            this.teamRed.life = this.teamRed.maxLives;

        for (let name in this.teamBlue.towers) {
            const tower = this.teamBlue.towers[name];
            if (tower)
                tower.damageIndex = 0;
        }

        for (let name in this.teamRed.towers) {
            const tower = this.teamRed.towers[name];
            if (tower)
                tower.damageIndex = 0;
        }

        for (let name in this.teamBlue.debuff) {
            this.teamBlue.debuff[name].stop(this.teamBlue);
        }

        for (let name in this.teamRed.debuff) {
            this.teamRed.debuff[name].stop(this.teamRed);
        }

        ++this.roundAt;
        if (!this.nopause)
            this.pause = pause;
        else
            this.pause = false;
       
        this.currentUnits = 0;
        this.totalUnits   = 0;
        this.spawnArr     = [];
        this.roundInfo    = {};
        this.info         = {};
        this.ticks        = 0;

        const info      = window[`${this.currentMap}-info`];

        let roundData = info.rounds;

        if ((roundData && roundData.length <= 0) || !roundData) {
            roundData = this.rounds;
            if (this.tutorial)
            {
                roundData = this.rounds.tutorialRounds;    
            }
        }

        else if (this.tutorial)
        {
            roundData = info.tutorialRounds;    
        }

        if (!this.challengeMode) {
            this.lastRound = roundData.length;
        }

        if (this.roundAt == -1) {
            this.roundBegin = true;
            this.pause = false;

            this.updateRoundInfo();
            this.updateStateInfo();
            return true;
        }

        if (this.roundAt <= roundData.length && this.roundAt <= this.lastRound) {
            this.currentUnits = 0;
            let time = 0;

            let currentRound = roundData[this.roundAt-1];
            let index = 0;

            if (currentRound.length > 0) {
                while (index < currentRound.length) {
                    const check = typeof(currentRound[index][0]) == "number";
                    if (check) {    
                        const tier = currentRound[index][0];
                        const amt  = currentRound[index][1];
                        const keys = Object.keys(this.critByTier[tier]);
    
                        this.totalUnits += amt;
    
                        let time = 0;
                        for (let i = 0; i < amt; ++i) {
                            const n = randInt(0, keys -1);
                            const crit = this.critByTier[tier][randInt(0, this.critByTier[tier].length-1)];
    
                            time += randInt(1000, 5000);
    
                            const info = [ crit.key, 1, time, 0, 0 ];
    
                            const m = this.spawnArr[Math.trunc(time/1000)];
                            if (m) {
                                m.push(info);
                            } else {
                                this.spawnArr[Math.trunc(time/1000)] = [ info ];
                            }
                        }

                        ++index;
                    } else {
                        break;
                    }
                }
                
            }

            this.calcInfo(currentRound, index);

           await this.handleRoundMessages("begin", 0);

            for (let i = index; i < currentRound.length; ++i) {
                const info =    currentRound[i];
                if (info[4] <= this.roundPass && (info[5] == this.roundPass || info[5] == undefined))
                {
                    let timeb = 0;
                    for (let j  =0; j < info[1]; ++j) {
                        const m = this.spawnArr[Math.trunc(time+timeb)];
                        if (m) {
                            m.push(info);
                        } else {
                            this.spawnArr[Math.trunc(time+timeb)] = [ info ];
                        }
                        
                        timeb += info[3] / 1000;
                    }
                }
                time += info[2] / 1000;
            }
        } else {
            await this.sendMessage(`You've defended the lands from evil good job!`);
            this.roundAt = 0;
            ++this.roundPass;
            this.pause = true;
        }

        this.updateRoundInfo();
        this.updateStateInfo();
        this.roundBegin = true;
    }
}
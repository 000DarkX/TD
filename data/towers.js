td.towers = {};

td.towers.hydro = {
    name: "Hydro Tower",
    type: "direct",
    buildType: ["water"],
    subtypes: ["blue", "water"],
    imagePath: "hydro.png",
    targets: ["ground", "air"],
    cost: 175,
    levels: [
        {
            cost: 200,
            rof: 1,
            range: 4,
            damage: 0.25,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: ``,
        },
        {
            cost: 300,
            rof: 1,
            range: 4,
            damage: 0.5,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: ``,
        },
        {
            cost: 300,
            rof: 1,
            range: 4,
            damage: 0.75,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: ``,
        },
        {
            cost: 800,
            rof: 1,
            range: 4,
            damage: 1,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: ``,
        },
        {
            cost: 1600,
            rof: 1,
            range: 4,
            damage: 1.25,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: ``,
        },
        { // 6
            cost: 3200,
            rof: 1,
            range: 4,
            damage: 1.75,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: ``,
        },
        { // 7
            cost: 6400,
            rof: 1,
            range: 4,
            damage: 2.5,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: ``,
        },
        { // 8 4
            cost: 12800,
            rof: 1,
            range: 4,
            damage: 3.5,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: ``,
        },
        { // 9
            cost: 25600,
            rof: 1,
            range: 4,
            damage: 4.75,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: ``,
        },
        { // 10
            //cost: 51200,
            rof: 1,
            range: 4,
            damage: 6.25,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: ``,
        }
    ], upgrades: [
        [
            {
                name: "Flack Pierce",
                cost: 3500,
                description: "Flack Piercing - 100% By pass flack armor",
                include: ["flackPierce"]
            }
        ],
    ]
}


td.towers.star  = {
    name: "Star Tower",
    type: "aoe",
    buildType: ["build"],
    subtypes: ["red"],
    imagePath: "star.png",
    targets: ["ground"],
    cost: 200,
    levels: [
        {
            cost: 200,
            rof: 8,
            range: 1.5,
            damage: 1,
            color: "red",
            damageType: "direct",
            description: `AOE; Useful for damaing many enemies at once, for little bit of damage`,
        },
        {
            cost: 400,
            rof: 8,
            range: 1.5,
            damage: 2,
            color: "red",
            damageType: "direct",
            description: `AOE; Useful for damaing many enemies at once, for little bit of damage`,
        },
        {
            cost: 400,
            rof: 8,
            range: 1.5,
            damage: 4,
            color: "red",
            damageType: "direct",
            description: `AOE; Useful for damaing many enemies at once, for little bit of damage`,
        },
        {
            cost: 1200,
            rof: 8,
            range: 1.5,
            damage: 6,
            color: "red",
            damageType: "direct",
            description: `AOE; Useful for damaing many enemies at once, for little bit of damage`,
        },
        {
            cost: 2400,
            rof: 8,
            range: 1.5,
            damage: 8,
            color: "red",
            damageType: "direct",
            description: `AOE; Useful for damaing many enemies at once, for bit of damage`,
        },
        {
            cost: 4800,
            rof: 8,
            range: 1.5,
            damage: 12,
            color: "red",
            damageType: "direct",
            description: `AOE; Useful for damaing many enemies at once, for bit of damage`,
        },
        {
            cost: 9600,
            rof: 8,
            range: 1.5,
            damage: 16,
            color: "red",
            damageType: "direct",
            description: `AOE; Useful for damaing many enemies at once, for bit of damage`,
        },
        {
            cost: 19200,
            rof: 8,
            range: 1.5,
            damage: 24,
            color: "red",
            damageType: "direct",
            description: `AOE; Useful for damaing many enemies at once, for some damage`,
        },
        {
            cost: 38400,
            rof: 8,
            range: 1.5,
            damage: 36,
            color: "red",
            damageType: "direct",
            description: `AOE; Useful for damaing many enemies at once, for some damage`,
        },
        {
            //cost: 76800,
            rof: 8,
            range: 1.5,
            damage: 52,
            color: "red",
            damageType: "direct",
            description: `AOE; Useful for damaing many enemies at once, for some damage`,
        }
    ],
    upgrades: [
        [
            {
                name: "Burn I",
                cost: 500,
                description: "Deals 1 (red) DOT for 12 turns with 6% chance",
                inflict: {
                    burn: [12, 1 ]
                }
            },
            {
                name: "Burn II",
                cost: 1500,
                description: "Deals 3 (red) DOT for 12 turns with 6% chance",
                inflict: {
                    burn: [12, 3 ]
                }
            },
            {
                name: "Burn III",
                cost: 2500,
                description: "Deals 6 (red) DOT for 12 turns with 6% chance",
                inflict: {
                    burn: [12, 6 ]
                }
            },
            {
                name: "Burn IV",
                cost: 3500,
                description: "Deals 9 (red) DOT for 12 turns with 6% chance",
                inflict: {
                    burn: [12, 9 ]
                }
            },
            {
                name: "Burn V",
                cost: 45000,
                description: "Deals 12 (red) DOT for 12 turns with 6% chance",
                inflict: {
                    burn: [12, 12 ]
                }
            },
            {
                name: "Burn VI",
                cost: 55000,
                description: "Deals 15 (red) DOT for 12 turns with 6% chance",
                inflict: {
                    burn: [12, 15 ]
                }
            }
        ],
        [
            {
                name: "Spread I",
                cost: 500,
                description: "3% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 3, "spread"]
                }
            },
            {
                name: "Spread II",
                cost: 1500,
                description: "6% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 6, "spread"]
                }
            },
            {
                name: "Spread III",
                cost: 2500,
                description: "9% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 9, "spread"]
                }
            },
            {
                name: "Spread IV",
                cost: 3500,
                description: "12% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 12, "spread"]
                }
            },
            {
                name: "Spread V",
                cost: 4500,
                description: "15% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 15, "spread"]
                }
            },
            {
                name: "Spread VI",
                cost: 5500,
                description: "18% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 18, "spread"]
                }
            }
        ]
    ]
}

td.towers.nature  = {
    name: "Nature Tower",
    type: "direct",
    subtypes: ["green"],
    imagePath: "nature.png",
    targets: ["ground", "air"],
    cost: 200,
    levels: [
        {
            cost: 200,
            rof: 5,
            range: 2,
            damage: 3,
            color: "green",
            damageType: "magical",
            description: `Instant`,
        },
        {
            cost: 400,
            rof: 5,
            range: 2.1,
            damage: 6,
            color: "green",
            damageType: "magical",
            description: `Instant`,
        },
        {
            cost: 400,
            rof: 5,
            range: 2.2,
            damage: 9,
            color: "green",
            damageType: "magical",
            description: `Instant`,
        },
        {
            cost: 1200,
            rof: 5,
            range: 2.3,
            damage: 12,
            color: "green",
            damageType: "magical",
            description: `Instant`,
        },  
        {
            cost: 2400,
            rof: 5,
            range: 2.4,
            damage: 15,
            color: "green",
            damageType: "magical",
            description: `Instant`,
        },  
        { // (6) 2
            cost: 4800,
            rof: 5,
            range: 2.5,
            damage: 21,
            color: "green",
            damageType: "magical",
            description: `Instant`,
        },  
        { // (7) 3
            cost: 9600,
            rof: 5,
            range: 2.6,
            damage: 30,
            color: "green",
            damageType: "magical",
            description: `Instant`,
        },  
        { // (8) 4
            cost: 19200,
            rof: 5,
            range: 2.7,
            damage: 42,
            color: "green",
            damageType: "magical",
            description: `Instant`,
        },  
        { // (9) 5
            cost: 38400,
            rof: 5,
            range: 2.8,
            damage: 57,
            color: "green",
            damageType: "magical",
            description: `Instant`,
        },  
        { // (10) 6 
            //cost: 76800,
            rof: 5,
            range: 2.9,
            damage: 75,
            color: "green",
            damageType: "magical",
            description: `Instant`,
        }
    ],
    upgrades: [
        [
            {
                name: "Poison I",
                cost: 500,
                description: "Deals 1% (green) DOT",
                inflict: {
                    poison: [45, 1 ]
                }
            },
            {
                name: "Poison II",
                cost: 1500,
                description: "Deals 2% (green) DOT",
                inflict: {
                    poison: [45, 2 ]
                }
            },
            {
                name: "Poison III",
                cost: 2500,
                description: "Deals 3% (green) DOT",
                inflict: {
                    poison: [45, 3 ]
                }
            },
            {
                name: "Poison IV",
                cost: 3500,
                description: "Deals 4% (green) DOT",
                inflict: {
                    poison: [45, 4 ]
                }
            },
            {
                name: "Poison V",
                cost: 4500,
                description: "Deals 5% (green) DOT",
                inflict: {
                    poison: [45, 5 ]
                }
            },
            {
                name: "Poison VI",
                cost: 5500,
                description: "Deals 6% (green) DOT",
                inflict: {
                    poison: [45, 6 ]
                }
            }
        ],
        [
            {
                name: "Nature's Wrath",
                cost: 5500,
                description: "+3 damage per nature tower near by",
            },
        ]
    ]
}

td.towers.barbed  = {
    name: "Barbed Tower",
    type: "direct",
    subtypes: ["gray"],
    imagePath: "barbed.png",
    targets: ["air"],
    cost: 200,
    levels: [
        {
            cost: 200,
            rof: 5,
            range: 2,
            speedDamageRatio: 0.25,
            damage: 3,
            color: "gray",
            damageType: "physical",
            buff: {
                "sight": [99999999, 1],
            },
            description: `Direct; Gray/Physical Type; Targets Air; Rate of Fire 5; Range 2; Damage 3; Speed Damage Ratio 0.25; sight, ...`,
        },{
            cost: 400,
            rof: 5,
            range: 2,
            speedDamageRatio: 0.75,
            damage: 6,
            color: "gray",
            damageType: "physical",
            buff: {
                "sight": [99999999, 1],
            },
            description: `Direct; Gray/Physical Type; Targets Air; Rate of Fire 5; Range 2; Damage 6; Speed Damage Ratio 0.75; sight, ...`,
        },{
            cost: 400,
            rof: 5,
            range: 2,
            speedDamageRatio: 1.50,
            damage: 9,
            color: "gray",
            damageType: "physical",
            buff: {
                "sight": [99999999, 1],
            },
            description: `Direct; Gray/Physical Type; Targets Air; Rate of Fire 5; Range 2; Damage 9; Speed Damage Ratio 1.5; sight, ...`,
        },{
            cost: 1200,
            rof: 5,
            range: 2,
            speedDamageRatio: 2,
            damage: 12,
            color: "gray",
            damageType: "physical",
            buff: {
                "sight": [99999999, 1],
            },
            description: `Direct; Gray/Physical Type; Targets Air; Rate of Fire 5; Range 2; Damage 12; Speed Damage Ratio 2; sight, ...`,
        },
        {
            cost: 2400,
            rof: 5,
            range: 2,
            speedDamageRatio: 2.75,
            damage: 15,
            color: "gray",
            damageType: "physical",
            buff: {
                "sight": [99999999, 1],
            },
            description: `Direct; Gray/Physical Type; Targets Air; Rate of Fire 5; Range 2; Damage 15; Speed Damage Ratio 2.75; sight, ...`,
        },
        { /// (6) 2
            cost: 4800,
            rof: 5,
            range: 2,
            speedDamageRatio: 3.5,
            damage: 18,
            color: "gray",
            damageType: "physical",
            buff: {
                "sight": [99999999, 1],
            },
            description: `Direct; Gray/Physical Type; Targets Air; Rate of Fire 5; Range 2; Damage 18; Speed Damage Ratio 3.5; sight, ...`,
        },
        { // (7) 3
            cost: 9600,
            rof: 5,
            range: 2,
            speedDamageRatio: 4.25,
            damage: 21,
            color: "gray",
            damageType: "physical",
            buff: {
                "sight": [99999999, 1],
            },
            description: `Direct; Gray/Physical Type; Targets Air; Rate of Fire 5; Range 2; Damage 21; Speed Damage Ratio 4.25; sight, ...`,
        },
        { // (8) 4
            cost: 19200,
            rof: 5,
            range: 2,
            speedDamageRatio: 5.25,
            damage: 24,
            color: "gray",
            damageType: "physical",
            buff: {
                "sight": [99999999, 1],
            },
            description: `Direct; Gray/Physical Type; Targets Air; Rate of Fire 5; Range 2; Damage 24; Speed Damage Ratio 5.25; sight, ...`,
        },
        { // (9) 5 
            cost: 38400,
            rof: 5,
            range: 2,
            speedDamageRatio: 6.5,
            damage: 27,
            color: "gray",
            damageType: "physical",
            buff: {
                "sight": [99999999, 1],
            },
            description: `Direct; Gray/Physical Type; Targets Air; Rate of Fire 5; Range 2; Damage 27; Speed Damage Ratio 6.5; sight, ...`,
        },
        { // (10) 6
            //cost: 76800,
            rof: 5,
            range: 2,
            speedDamageRatio: 7.25,
            damage: 30,
            color: "gray",
            damageType: "physical",
            buff: {
                "sight": [99999999, 1],
            },
            description: `Direct; Gray/Physical Type; Targets Air; Rate of Fire 5; Range 2; Damage 30; Speed Damage Ratio 7.25; sight, ...`,
        }
    ],
    upgrades: [
        [
            {
                name: "Thief I",
                cost: 500,
                description: "Steal 15%G ahead of time",
                inflict: {
                    thief: [1, 15 ]
                }
            },
            {
                name: "Thief II",
                cost: 1500,
                description: "Steal 30%G ahead of time",
                inflict: {
                    thief: [1, 30 ]
                }
            },
            {
                name: "Thief III",
                cost: 2500,
                description: "Steal 45%G ahead of time",
                inflict: {
                    thief: [1, 45 ]
                }
            },
            {
                name: "Thief IV",
                cost: 3500,
                description: "Steal 60%G ahead of time",
                inflict: {
                    thief: [1, 60 ]
                }
            },
            {
                name: "Thief V",
                cost: 4500,
                description: "Steal 75%G ahead of time",
                inflict: {
                    thief: [1, 75 ]
                }
            },
            {
                name: "Thief VI",
                cost: 5500,
                description: "Steal 90%G ahead of time",
                inflict: {
                    thief: [1, 90 ]
                }
            }
        ],
        [
            {
                name: "Sky Chief I",
                cost: 500,
                description: "+5 Damage against flying",
                inflict: {
                    skychief: [1, 5 ]
                }
            },
            {
                name: "Sky Chief II",
                cost: 1500,
                description: "+10 Damage against flying",
                inflict: {
                    skychief: [1, 10 ]
                }
            },
            {
                name: "Sky Chief III",
                cost: 2500,
                description: "+15 Damage against flying",
                inflict: {
                    skychief: [1, 15 ]
                }
            },
            {
                name: "Sky Chief IV",
                cost: 3500,
                description: "+20 Damage against flying",
                inflict: {
                    skychief: [1, 20 ]
                }
            },
            {
                name: "Sky Chief V",
                cost: 4500,
                description: "+25 Damage against flying",
                inflict: {
                    skychief: [1, 25 ]
                }
            },
            {
                name: "Sky Chief VI",
                cost: 5500,
                description: "+30 Damage against flying",
                inflict: {
                    skychief: [1, 30 ]
                }
            }
        ]
    ]
}


td.towers.lightning  = {
    name: "Lightning Tower",
    type: "direct",
    subtypes: ["yellow"],
    imagePath: "lightning.png",
    targets: ["ground", "air"],
    description: `Direct target magic based tower. Targets ground and air, ROF 15, Range 3, Damage 1 - 20 per level where dmg is based on turns`,
    cost: 400,
    levels: [
        {
            cost: 400,
            rof: 15,
            range: 3,
            color: "yellow",
            damageType: "magical",
            damage: 0,
            charge: [1, 40],
            description: `Direct; yellow/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 1 - 40, +1 per turn`,
        },{
            cost: 600,
            rof: 15,
            range: 3,
            color: "yellow",
            damageType: "magical",
            damage: 0,
            charge: [1, 80],
            description: `Direct; yellow/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 1 - 80, +1 per turn`,
        },{
            cost: 600,
            rof: 15,
            range: 3,
            color: "yellow",
            damageType: "magical",
            damage: 0,
            charge: [1, 120],
            description: `Direct; yellow/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 1 - 120, +1 per turn`,
        },{
            cost: 1400,
            rof: 15,
            range: 3,
            color: "yellow",
            damageType: "magical",
            damage: 0,
            description: `Direct; yellow/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 1 - 160, +1 per turn`,
        },
        {
            cost: 2800,
            rof: 15,
            range: 3,
            color: "yellow",
            damageType: "magical",
            damage: 0,
            charge: [1, 200],
            description: `Direct; yellow/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 1 - 200, +1 per turn`,
        }, // (6) 2
        {
            cost: 8400,
            rof: 15,
            range: 3,
            color: "yellow",
            damageType: "magical",
            damage: 6,
            charge: [1, 220],
            description: `Direct; yellow/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 1 - 220 +6, +1 per turn`,
        }, // (7) 3
        {
            cost: 21000,
            rof: 15,
            range: 3,
            color: "yellow",
            damageType: "magical",
            damage: 12,
            charge: [1, 240],
            description: `Direct; yellow/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 1 - 240 +12, +1 per turn`,
        }, // (8) 4
        {
            cost: 47250,
            rof: 15,
            range: 3,
            color: "yellow",
            damageType: "magical",
            damage: 24,
            description: `Direct; yellow/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 1 - 260 +24, +1 per turn`,
        }, // (9) + 5
        {
            cost: 94500,
            rof: 15,
            range: 3,
            color: "yellow",
            damageType: "magical",
            damage: 42,
            charge: [1, 280],
            description: `Direct; yellow/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 1 - 280 +42, +1 per turn`,
        }, // (10) + 5
        {
            //cost: 189000,
            rof: 15,
            range: 3,
            color: "yellow",
            damageType: "magical",
            damage: 70,
            charge: [1, 300],
            description: `Direct; yellow/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 1 - 300 +70, +1 per turn`,
        }
    ]
}

td.towers.rock  = {
    name: "Earth Tower",
    type: "aoe",
    subtypes: ["brown"],
    imagePath: "rock.png",
    targets: ["ground"],
    cost: 200,
    levels: [
        {
            cost: 200,
            rof: 8,
            range: 1.5,
            damage: 10,
            attacks: 1,
            random: true,
            color: "brown",
            damageType: "physical",
            description: `AOE; Brown/Physical Type; Targets Ground; Rate of Fire 8; Range 1.5; Damage 10`,
        },
        {
            cost: 400,
            rof: 8,
            range: 1.5,
            damage: 20,
            attacks: 2,
            random: true,
            color: "brown",
            damageType: "physical",
            description: `AOE; Brown/Physical Type; Targets Ground; Rate of Fire 8; Range 1.5; Damage 20`,
        },
        {
            cost: 400,
            rof: 8,
            range: 1.5,
            damage: 30,
            attacks: 3,
            random: true,
            color: "brown",
            damageType: "physical",
            description: `AOE; Brown/Physical Type; Targets Ground; Rate of Fire 8; Range 1.5; Damage 30`,
        },
        {
            cost: 1200,
            rof: 8,
            range: 1.5,
            damage: 40,
            attacks: 4,
            random: true,
            color: "brown",
            damageType: "physical",
            description: `AOE; Brown/Physical Type; Targets Ground; Rate of Fire 8; Range 1.5; Damage 40`,
        },
        {
            cost: 2400,
            rof: 8,
            range: 1.5,
            damage: 50,
            attacks: 5,
            random: true,
            color: "brown",
            damageType: "physical",
            description: `AOE; Brown/Physical Type; Targets Ground; Rate of Fire 8; Range 1.5; Damage 50`,
        },
        { // 6
            cost: 4800,
            rof: 8,
            range: 1.5,
            damage: 65,
            attacks: 6,
            random: true,
            color: "brown",
            damageType: "physical",
            description: `AOE; Brown/Physical Type; Targets Ground; Rate of Fire 8; Range 1.5; Damage 65; attacks 6`,
        },
        { // 7
            cost: 9600,
            rof: 8,
            range: 1.5,
            damage: 80,
            attacks: 7,
            random: true,
            color: "brown",
            damageType: "physical",
            description: `AOE; Brown/Physical Type; Targets Ground; Rate of Fire 8; Range 1.5; Damage 80; attacks 7`,
        }, // 8
        {
            cost: 19200,
            rof: 8,
            range: 1.5,
            damage: 95,
            attacks: 8,
            random: true,
            color: "brown",
            damageType: "physical",
            description: `AOE; Brown/Physical Type; Targets Ground; Rate of Fire 8; Range 1.5; Damage 95; attacks 8`,
        }, // 9 
        {
            cost: 38400,
            rof: 8,
            range: 1.5,
            damage: 110,
            attacks: 9,
            random: true,
            color: "brown",
            damageType: "physical",
            description: `AOE; Brown/Physical Type; Targets Ground; Rate of Fire 8; Range 1.5; Damage 110; attacks 9`,
        },
        { // 10
            //cost: 76800,
            rof: 8,
            range: 1.5,
            damage: 125,
            attacks: 10,
            random: true,
            color: "brown",
            damageType: "physical",
            description: `AOE; Brown/Physical Type; Targets Ground; Rate of Fire 8; Range 1.5; Damage 125; attacks 10`,
        }
    ],
    upgrades: [
        [
            {
                name: "Spread I",
                cost: 500,
                description: "3% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 3, "spread"]
                }
            },
            {
                name: "Spread II",
                cost: 1500,
                description: "6% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 6, "spread"]
                }
            },
            {
                name: "Spread III",
                cost: 2500,
                description: "9% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 9, "spread"]
                }
            },
            {
                name: "Spread IV",
                cost: 3500,
                description: "12% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 12, "spread"]
                }
            },
            {
                name: "Spread V",
                cost: 4500,
                description: "15% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 15, "spread"]
                }
            },
            {
                name: "Spread VI",
                cost: 5500,
                description: "18% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 18, "spread"]
                }
            }
        ]
    ]
}

td.towers.undead  = {
    name: "Undead Tower",
    type: "direct",
    subtypes: ["purple"],
    imagePath: "undead.png",
    targets: ["ground", "air"],
    projectilePath: "ghostProjectile.png",
    cost: 200,
    levels: [
        {
            cost: 200,
            rof: 8,
            range: 3,
            attacks: 1,
            color: "purple",
            damageType: "magical",
            soulDamage: 2,
            souls: 2,
            damage: 1,
            description: `Homing; Purple/Magical Type; Targets Ground, Air; Attacks: 1, Rate of Fire 8; Range 3; Damage (Medium/varies); need bodies`,
        },
        {
            cost: 400,
            rof: 8,
            range: 3,
            attacks: 1,
            color: "purple",
            damageType: "magical",
            soulDamage: 4,
            souls: 4,
            damage: 2,
            description: `Homing; Purple/Magical Type; Targets Ground, Air; Attacks: 2, Rate of Fire 8; Range 3; Damage (Medium/varies); need bodies`,
        },
        {
            cost: 400,
            rof: 8,
            range: 3,
            attacks: 1,
            color: "purple",
            damageType: "magical",
            soulDamage: 6,
            souls: 6,
            damage: 3,
            description: `Homing; Purple/Magical Type; Targets Ground, Air; Attacks: 3, Rate of Fire 8; Range 3; Damage (Medium/varies); need bodies`,
        },
        {
            cost: 1200,
            rof: 8,
            range: 3,
            attacks: 1,
            color: "purple",
            damageType: "magical",
            soulDamage: 8,
            souls: 8,
            damage: 4,
            description: `Homing; Purple/Magical Type; Targets Ground, Air; Attacks: 4, Rate of Fire 8; Range 3; Damage (Medium/varies); need bodies`,
        },
        {
            cost: 2400,
            rof: 8,
            range: 3,
            attacks: 1,
            color: "purple",
            damageType: "magical",
            soulDamage: 10,
            souls: 10,
            damage: 5,
            description: `Homing; Purple/Magical Type; Targets Ground, Air; Rate of Fire 8; Range 3; Damage (Medium/varies); need bodies`,
        },
        { // 6 (needs updating)
            cost: 4800,
            rof: 8,
            range: 3,
            color: "purple",
            damageType: "magical",
            soulDamage: 2,
            attacks: 1,
            souls: 12,
            damage: 6,
            description: `Homing; Purple/Magical Type; Targets Ground, Air; Rate of Fire 8; Range 3; Damage (Medium/varies); need bodies`,
        },
        { // 7
            cost: 9600,
            rof: 8,
            range: 3,
            color: "purple",
            damageType: "magical",
            soulDamage: 12,
            attacks: 1,
            souls: 14,
            damage: 7,
            description: `Homing; Purple/Magical Type; Targets Ground, Air; Rate of Fire 8; Range 3; Damage (Medium/varies); need bodies`,
        },
        { // 8
            cost: 19200,
            rof: 8,
            range: 3,
            color: "purple",
            damageType: "magical",
            soulDamage: 14,
            attacks: 1,
            souls: 16,
            damage: 8,
            description: `Homing; Purple/Magical Type; Targets Ground, Air; Rate of Fire 8; Range 3; Damage (Medium/varies); need bodies`,
        },
        { // 9
            cost: 38400,
            rof: 8,
            range: 3,
            color: "purple",
            damageType: "magical",
            soulDamage: 15,
            attacks: 1,
            souls: 18,
            damage: 9,
            description: `Homing; Purple/Magical Type; Targets Ground, Air; Rate of Fire 8; Range 3; Damage (Medium/varies); need bodies`,
        },
        { // 10
            //cost: 76800,
            rof: 8,
            range: 3,
            color: "purple",
            damageType: "magical",
            soulDamage: 17,
            attacks: 1,
            souls: 20,
            damage: 10,
            description: `Homing; Purple/Magical Type; Targets Ground, Air; Rate of Fire 8; Range 3; Damage (Medium/varies); need bodies`,
        }
    ],
    upgrades: [
        [
            {
                name: "Decay I",
                cost: 500,
                description: "Inflicts decay for 3 turns",
                inflict: {
                    decay: [3, 1]
                }
            },
            {
                name: "Decay II",
                cost: 1500,
                description: "Inflicts decay for 6 turns",
                inflict: {
                    decay: [6, 1]
                }
            },
            {
                name: "Decay III",
                cost: 2500,
                description: "Inflicts decay for 12 turns",
                inflict: {
                    decay: [12, 1]
                }
            },
            {
                name: "Decay III",
                cost: 3500,
                description: "Inflicts decay for 18 turns",
                inflict: {
                    decay: [18, 1]
                }
            },
            {
                name: "Decay IV",
                cost: 4500,
                description: "Inflicts decay for 24 turns",
                inflict: {
                    decay: [24, 1]
                }
            },
            {
                name: "Decay V",
                cost: 5500,
                description: "Inflicts decay for 30 turns",
                inflict: {
                    decay: [30, 1]
                }
            },
            {
                name: "Decay VI",
                cost: 6500,
                description: "Inflicts decay for 40 turns",
                inflict: {
                    decay: [40, 1]
                }
            }
        ],
        [
            {
                name: "Confusion I",
                cost: 500,
                description: "4% Chance to confuse the enemy for 5 turns",
                inflict: {
                    confuse: [15, 4]
                }
            },
            {
                name: "Confusion II",
                cost: 1500,
                description: "8% Chance to confuse the enemy for 5 turns",
                inflict: {
                    confuse: [15, 8]
                }
            },
            {
                name: "Confusion III",
                cost: 2500,
                description: "12% Chance to confuse the enemy for 5 turns",
                inflict: {
                    confuse: [15, 12]
                }
            },
            {
                name: "Confusion III",
                cost: 3500,
                description: "15% Chance to confuse the enemy for 5 turns",
                inflict: {
                    confuse: [15, 15]
                }
            },
            {
                name: "Confusion IV",
                cost: 4500,
                description: "19% Chance to confuse the enemy for 5 turns",
                inflict: {
                    confuse: [15, 19]
                }
            },
            {
                name: "Confusion V",
                cost: 5500,
                description: "22% Chance to confuse the enemy for 5 turns",
                inflict: {
                    confuse: [15, 22]
                }
            },
            {
                name: "Confusion VI",
                cost: 6500,
                description: "26% Chance to confuse the enemy for 5 turns",
                inflict: {
                    confuse: [15, 26]
                }
            }
        ]
    ]
}

td.towers.heart  = {
    name: "Heart Tower",
    type: "basic",
    subtypes: ["pink"],
    class: "noncombat",
    imagePath: "heart.png",
    targets: ["ground", "air"],
    maxBuild: 2,
    cost: 250,
    costGrowth: 50,
    levels: [
        {
            cost: 600,
            lifeRegen: 1,
            description: `Recover 1 life`,
        },
        {
            cost: 1200,
            lifeRegen: 1,
            description: `Recover 1 life`,
        },
        {
            cost: 2400,
            lifeRegen: 1,
            description: `Recover 1 life`,
        },
        {
            cost: 4800,
            lifeRegen: 1,
            description: `Recover 1 life`,
        },
        {
            cost: 9600,
            lifeRegen: 1,
            description: `Recover 1 life`,
        },
        {
            cost: 19200,
            lifeRegen: 1,
            description: `Recover 1 life`,
        },
        {
            cost: 38400,
            lifeRegen: 1,
            description: `Recover 1 life`,
        },
        {
            cost: 76800,
            lifeRegen: 1,
            description: `Recover 1 life`,
        },
        {
            cost: 153600,
            lifeRegen: 1,
            description: `Recover 1 life`,
        },
        {
            //cost: 307200,
            lifeRegen: 1,
            description: `Recover 1 life`,
        }
    ],
    upgrades: [
        [
            {
                name: "Max Life I",
                cost: 500,
                description: "+1 Max Life",
                maxLife: 1
            },
            {
                name: "Max Life II",
                cost: 1500,
                description: "+2 Max Life",
                maxLife: 2
            },
            {
                name: "Max Life III",
                cost: 2500,
                description: "+3 Max Life",
                maxLife: 3
            },
            {
                name: "Max Life IV",
                cost: 3500,
                description: "+4 Max Life",
                maxLife: 4
            },
            {
                name: "Max Life V",
                cost: 4500,
                description: "+5 Max Life",
                maxLife: 5
            },
            {
                name: "Max Life VI",
                cost: 5500,
                description: "+6 Max Life",
                maxLife: 6
            }
        ],
        [
            {
                name: "Poison Resist I",
                cost: 500,
                description: "Resist 0.005 Damage from poison (no stack)",
                buff2Team: {
                    poisonResist: [Number.MAX_VALUE, 0.5]
                }
            },
            {
                name: "Poison Resist II",
                cost: 1500,
                description: "Resist 0.01 Damage from poison (no stack)",
                buff2Team: {
                    poisonResist: [Number.MAX_VALUE, 1]
                }
            }
        ]
    ]
}

// debuffs invis
td.towers.support  = {
    name: "Support Tower",
    type: "basic",
    subtypes: ["gray"],
    buildType: ["water", "build"],
    class: "support",
    imagePath: "support.png",
    targets: ["ground", "air"],
    cost: 200,
    levels: [
        {
            cost: 600,
            range: 1.5,
            buffOther: {
                "sight": [45, 1],
                "support": [45, 1],
            },
            damageBonus: 1,
            description: `Direct; Gray Type; Targets Ground, Air; Range 1.5; Damage Bonus: 1; sight`,
        },
        {
            cost: 1200,
            range: 2.5,
            buffOther: {
                "sight": [45, 2],
                 "support": [45, 1],
            },
            damageBonus: 2,
            description: `Direct; Gray Type; Targets Ground, Air; Range 2.5; Damage Bonus: 2; sight`,
        },
        {
            cost: 2400,
            range: 3.5,
            buffOther: {
                "sight": [45, 3],
                 "support": [45, 1],
            },
            damageBonus: 3,
            description: `Direct; Gray Type; Targets Ground, Air; Range 3.5; Damage Bonus: 3; sight`,
        },
        {
            cost: 4800,
            range: 4.5,
            buffOther: {
                "sight": [45, 4],
                "support": [45, 1],
            },
            damageBonus: 4,
            description: `Direct; Gray Type; Targets Ground, Air; Range 4.5; Damage Bonus: 4; sight`,
        },
        {
            cost: 9600,
            range: 5.5,
            buffOther: {
                "sight": [45, 5],
                "support": [45, 1],
            },
            damageBonus: 5,
            description: `Direct; Gray Type; Targets Ground, Air; Range 5.5; Damage Bonus: 5; sight`,
        },
        {
            range: 6,
            buffOther: {
                "sight": [45, 6],
                "support": [45, 1],
            },
            damageBonus: 6,
            description: `Direct; Gray Type; Targets Ground, Air; Range 5.5; Damage Bonus: 6; sight`,
        }
    ]
}

td.towers.bk  = {
    name: "Boss Tower",
    type: "direct",
    subtypes: ["gray", "sniper"],
    imagePath: "bk.png",
    targets: ["ground", "air"],
    cost: 500,
    levels: [
        {
            cost: 700,
            rof: 20,
            range: 10,
            damage: 10,
            bossDamage: 10,
            color: "gray",
            damageType: "physical",
            description: `Made to take down bosses; `,
        },
        {
            cost: 1200,
            rof: 20,
            range: 10,
            damage: 20,
            bossDamage: 20,
            armorPierce: 1,
            color: "gray",
            damageType: "physical",
            description: `Made to take down bosses; Armor Pierce I`,
        },
        {
            cost: 1200,
            rof: 20,
            range: 10,
            damage: 30,
            bossDamage: 30,
            armorPierce: 2,
            shieldPierce: 1,
            color: "gray",
            damageType: "physical",
            description: `Made to take down bosses; Armor Pierce II, Shield Pierce I`,
        },
        {
            cost: 2400,
            rof: 20,
            range: 10,
            damage: 40,
            bossDamage: 40,
            armorPierce: 3,
            shieldPierce: 2,
            color: "gray",
            damageType: "physical",
            description: `Made to take down bosses; Armor Pierce III, Shield Pierce II`,
        },
        {
            cost: 4800,
            rof: 20,
            range: 10,
            damage: 60,
            bossDamage: 60,
            armorPierce: 4,
            shieldPierce: 3,
            color: "gray",
            damageType: "physical",
            description: `Made to take down bosses; Armor Pierce IV, Shield Pierce III`,
        },
        { // 6 
            cost: 14400,
            rof: 20,
            range: 10,
            damage: 80,
            bossDamage: 80,
            armorPierce: 5,
            shieldPierce: 4,
            color: "gray",
            damageType: "physical",
            description: `Made to take down bosses; Armor Pierce V, Shield Pierce IV`,
        },
        { // 7
            cost: 36000,
            rof: 20,
            range: 10,
            damage: 100,
            bossDamage: 100,
            armorPierce: 6,
            shieldPierce: 5,
            color: "gray",
            damageType: "physical",
            description: `Made to take down bosses; Armor Pierce VI, Shield Pierce V`,
        },
        { // 8 
            cost: 81000,
            rof: 20,
            range: 10,
            damage: 120,
            bossDamage: 120,
            armorPierce: 7,
            shieldPierce: 6,
            color: "gray",
            damageType: "physical",
            description: `Made to take down bosses; Armor Pierce VII, Shield Pierce VI`,
        },
        { // 9
            cost: 162000,
            rof: 20,
            range: 10,
            damage: 140,
            bossDamage: 140,
            armorPierce: 8,
            shieldPierce: 7,
            color: "gray",
            damageType: "physical",
            description: `Made to take down bosses; Armor Pierce VIII, Shield Pierce VII`,
        },
        { // 10 
            //cost: 324000,
            rof: 20,
            range: 10,
            damage: 150,
            bossDamage: 150,
            armorPierce: 9,
            shieldPierce: 8,
            color: "gray",
            damageType: "physical",
            description: `Made to take down bosses; Armor Pierce IX, Shield Pierce VIII`,
        }
    ],
    upgrades: [
        [
            {
                name: "Divine Pierce I",
                cost: 2500,
                description: "Deals 1 Divine Damage",
                inflict: {
                    divinep: [1, 1 ]
                }
            },
            {
                name: "Divine Pierce II",
                cost: 4500,
                description: "Deals 2 Divine Damage",
                inflict: {
                    divinep: [1, 2 ]
                }
            },
            {
                name: "Divine Pierce III",
                cost: 6500,
                description: "Deals 3 Divine Damage",
                inflict: {
                    divinep: [1, 3 ]
                }
            },
            {
                name: "Divine Pierce IV",
                cost: 8500,
                description: "Deals 4 Divine Damage",
                inflict: {
                    divinep: [1, 4 ]
                }
            },
            {
                name: "Divine Pierce V",
                cost: 10500,
                description: "Deals 5 Divine Damage",
                inflict: {
                    divinep: [1, 5 ]
                }
            },
            {
                name: "Divine Pierce VI",
                cost: 12500,
                description: "Deals 6 Divine Damage",
                inflict: {
                    divinep: [1, 6 ]
                }
            }
        ],[
            {
                name: "Boss Damage I",
                cost: 2500,
                description: "Deals 5 bonus damage against bosses",
                inflict: {
                    bossdmg: [1, 5 ]
                }
            },
            {
                name: "Boss Damage II",
                cost: 4500,
                description: "Deals 10 bonus damage against bosses",
                inflict: {
                    bossdmg: [1, 10 ]
                }
            },
            {
                name: "Boss Damage III",
                cost: 6500,
                description: "Deals 15 bonus damage against bosses",
                inflict: {
                    bossdmg: [1, 15 ]
                }
            },
            {
                name: "Boss Damage IV",
                cost: 8500,
                description: "Deals 20 bonus damage against bosses",
                inflict: {
                    bossdmg: [1, 20 ]
                }
            },
            {
                name: "Boss Damage V",
                cost: 10500,
                description: "Deals 25 bonus damage against bosses",
                inflict: {
                    bossdmg: [1, 25 ]
                }
            },
            {
                name: "Boss Damage VI",
                cost: 12500,
                description: "Deals 30 bonus damage against bosses",
                inflict: {
                    bossdmg: [1, 30 ]
                }
            }
        ],
    ]
}

td.towers.snow  = {
    name: "Snow Tower",
    type: "aoe",
    subtypes: ["blue"],
    imagePath: "snow.png",
    targets: ["ground", "air"],
    cost: 175,
    levels: [
        {
            cost: 200,
            rof: 5,
            range: 1.5,
            damage: 0,
            color: "blue",
            damageType: "magical",
            inflict: {
                "slowy" : [30, 1]
            },
            description: `AOE; Blue/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 1.5; Damage 0; Slowness`,
        },
        {
            cost: 300,
            rof: 5,
            range: 1.5,
            damage: 0.25,
            color: "blue",
            damageType: "magical",
            inflict: {
                "slowy" : [30, 2]
            },
            description: `AOE; Blue/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 1.5; Damage 0.25; Slowness`,
        },
        {
            cost: 300,
            rof: 5,
            range: 1.5,
            damage: 0.5,
            color: "blue",
            damageType: "magical",
            inflict: {
                "slowy" : [30, 3]
            },
            description: `AOE; Blue/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 1.5; Damage 0.5; Slowness`,
        },
        {
            cost: 800,
            rof: 5,
            range: 1.5,
            damage: 1,
            color: "blue",
            damageType: "magical",
            inflict: {
                "slowy" : [30, 4]
            },
            description: `AOE; Blue/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 1.5; Damage 1; Slowness`,
        },
        {
            cost: 1600,
            rof: 5,
            range: 1.5,
            damage: 1.5,
            color: "blue",
            damageType: "magical",
            inflict: {
                "slowy" : [30, 5]
            },
            description: `AOE; Blue/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 1.5; Damage 1.5; Slowness`,
        },
        { // 6
            cost: 3200,
            rof: 5,
            range: 1.5,
            damage: 2,
            color: "blue",
            damageType: "magical",
            inflict: {
                "slowy" : [30, 6]
            },
            description: `AOE; Blue/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 1.5; Damage 2; Slowness`,
        },
        { // 7
            cost: 6400,
            rof: 5,
            range: 1.5,
            damage: 2.75,
            color: "blue",
            damageType: "magical",
            inflict: {
                "slowy" : [30, 7]
            },
            description: `AOE; Blue/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 1.5; Damage 2.75; Slowness`,
        },
        { // 8 4
            cost: 12800,
            rof: 5,
            range: 1.5,
            damage: 3.75,
            color: "blue",
            damageType: "magical",
            inflict: {
                "slowy" : [30, 8]
            },
            description: `AOE; Blue/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 1.5; Damage 3.75; Slowness`,
        },
        { // 9 
            cost: 25600,
            rof: 5,
            range: 1.5,
            damage: 5,
            color: "blue",
            damageType: "magical",
            inflict: {
                "slowy" : [30, 9]
            },
            description: `AOE; Blue/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 1.5; Damage 5; Slowness`,
        },
        { // 10 
            //cost: 51200,
            rof: 5,
            range: 1.5,
            damage: 6.5,
            color: "blue",
            damageType: "magical",
            inflict: {
                "slowy" : [30, 10]
            },
            description: `AOE; Blue/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 1.5; Damage 6.5; Slowness`,
        }
    ],upgrades: [
        [
            {
                name: "FrostBite I",
                cost: 500,
                description: "Deals 1 (blue) DOT for 3 turns with 50% chance",
                inflict: {
                    frostbite: [3, 1 ]
                }
            },
            {
                name: "FrostBite II",
                cost: 1500,
                description: "Deals 3 (blue) DOT for 3 turns with 50% chance",
                inflict: {
                    frostbite: [3, 3 ]
                }
            },
            {
                name: "FrostBite III",
                cost: 2500,
                description: "Deals 6 (blue) DOT for 3 turns with 50% chance",
                inflict: {
                    frostbite: [3, 6 ]
                }
            },
            {
                name: "FrostBite IV",
                cost: 3500,
                description: "Deals 10 (blue) DOT for 3 turns with 50% chance",
                inflict: {
                    frostbite: [3, 10 ]
                }
            },
            {
                name: "FrostBite V",
                cost: 45000,
                description: "Deals 15 (blue) DOT for 3 turns with 50% chance",
                inflict: {
                    frostbite: [3, 15 ]
                }
            },
            {
                name: "FrostBite VI",
                cost: 55000,
                description: "Deals 25 (blue) DOT for 3 turns with 50% chance",
                inflict: {
                    frostbite: [3, 25 ]
                }
            }
        ],
        [
            {
                name: "Spread I",
                cost: 500,
                description: "3% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 3, "spread"]
                }
            },
            {
                name: "Spread II",
                cost: 1500,
                description: "6% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 6, "spread"]
                }
            },
            {
                name: "Spread III",
                cost: 2500,
                description: "9% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 9, "spread"]
                }
            },
            {
                name: "Spread IV",
                cost: 3500,
                description: "12% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 12, "spread"]
                }
            },
            {
                name: "Spread V",
                cost: 4500,
                description: "15% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 15, "spread"]
                }
            },
            {
                name: "Spread VI",
                cost: 5500,
                description: "18% Chance to spread to adjacent square",
                buff: {
                    spread: [Number.MAX_VALUE, 18, "spread"]
                }
            }
        ]
    ]
}

td.towers.wind = {
    name: "Wind Tower",
    type: "direct",
    subtypes: ["green", "wind"],
    imagePath: "wind.png",
    targets: ["ground"],
    cost: 175,
    levels: [
        {
            cost: 200,
            rof: 1,
            range: 4,
            damage: 0.25,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: `Direct; Transparent/Magical Type; Targets Ground; Rate of Fire 1; Range 4; Damage 0.25; 16% Direct`,
        },
        {
            cost: 300,
            rof: 1,
            range: 4,
            damage: 0.5,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: `Direct; Transparent/Magical Type; Targets Ground; Rate of Fire 1; Range 4; Damage 0.5; 16% Direct`,
        },
        {
            cost: 300,
            rof: 1,
            range: 4,
            damage: 0.75,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: `Direct; Transparent/Magical Type; Targets Ground; Rate of Fire 1; Range 4; Damage 0.75; 16% Direct`,
        },
        {
            cost: 800,
            rof: 1,
            range: 4,
            damage: 1,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: `Direct; Transparent/Magical Type; Targets Ground; Rate of Fire 1; Range 4; Damage 1; 16% Direct`,
        },
        {
            cost: 1600,
            rof: 1,
            range: 4,
            damage: 1.25,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: `Direct; Transparent/Magical Type; Targets Ground; Rate of Fire 1; Range 4; Damage 1.25; 16% Direct`,
        },
        { // 6
            cost: 3200,
            rof: 1,
            range: 4,
            damage: 1.75,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: `Direct; Transparent/Magical Type; Targets Ground; Rate of Fire 1; Range 4; Damage 1.75; 16% Direct`,
        },
        { // 7
            cost: 6400,
            rof: 1,
            range: 4,
            damage: 2.5,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: `Direct; Transparent/Magical Type; Targets Ground; Rate of Fire 1; Range 4; Damage 2.5; 16% Direct`,
        },
        { // 8 4
            cost: 12800,
            rof: 1,
            range: 4,
            damage: 3.5,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: `Direct; Transparent/Magical Type; Targets Ground; Rate of Fire 1; Range 4; Damage 3.5; 16% Direct`,
        },
        { // 9
            cost: 25600,
            rof: 1,
            range: 4,
            damage: 4.75,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: `Direct; Transparent/Magical Type; Targets Ground; Rate of Fire 1; Range 4; Damage 4.75; 16% Direct`,
        },
        { // 10
            //cost: 51200,
            rof: 1,
            range: 4,
            damage: 6.25,
            color: "blue",
            damageType: "magical",
            directDamageChance: 16,
            description: `Direct; Transparent/Magical Type; Targets Ground; Rate of Fire 1; Range 4; Damage 6.25; 16% Direct`,
        }
    ], upgrades: [
        [
            {
                name: "Flack Pierce",
                cost: 3500,
                description: "Flack Piercing - 100% By pass flack armor",
                include: ["flackPierce"]
            }
        ],
    ]
}

td.towers.eye = {
    name: "Eye Tower",
    type: "direct",
    subtypes: ["purple", "eye"],
    imagePath: "eye.png",
    targets: ["ground", "air"],
    cost: 600,
    levels: [
        {
            cost: 1000,
            rof: 5,
            range: 2,
            damage: 2,
            color: "purple",
            damageType: "magical",
            attacks: 2,
            multi: true,
            buff: {
                "sight": [99999999, 1],
            },
            inflict: {
                cut: [30, 1],
            },
            description: `Direct; Purple/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 2; Damage 2; Attacks 2; cut`,
        },
        {
            cost: 1200,
            rof: 5,
            range: 2,
            damage: 4,
            color: "purple",
            damageType: "magical",
            attacks: 4,
            multi: true,
            buff: {
                "sight": [99999999, 1],
            },
            inflict: {
                cut: [30, 1],
                depelete: [1, 30],
            },
            description: `Direct; Purple/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 2; Damage 4; Attacks 4; cut, depelete`,
        },
        {
            cost: 1200,
            rof: 5,
            range: 2,
            damage: 6,
            color: "purple",
            damageType: "magical",
            attacks: 6,
            multi: true,
            buff: {
                "sight": [99999999, 1],
            },
            inflict: {
                cut: [30, 1],
                depelete: [1, 45],
            },
            description: `Direct; Purple/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 2; Damage 6; Attacks 6; cut, depelete`,
        },
        {
            cost: 2800,
            rof: 5,
            range: 2,
            damage: 8,
            color: "purple",
            damageType: "magical",
            attacks: 8,
            multi: true,
            buff: {
                "sight": [99999999, 1],
            },
            inflict: {
                cut: [30, 1],
                depelete: [1, 60],
            },
            description: `Direct; Purple/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 2; Damage 8; Attacks 8; cut, depelete`,
        },
        {
            cost: 5600,
            rof: 5,
            range: 2,
            damage: 10,
            color: "purple",
            damageType: "magical",
            attacks: 10,
            multi: true,
            buff: {
                "sight": [99999999, 1],
            },
            inflict: {
                cut: [30, 1],
                depelete: [1, 75],
            },
            description: `Direct; Purple/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 2; Damage 10; Attacks 10; cut, depelete`,
        },
        { // 6 2
            cost: 14000,
            rof: 5,
            range: 2.1,
            damage: 14,
            color: "purple",
            damageType: "magical",
            attacks: 14,
            multi: true,
            buff: {
                "sight": [99999999, 1],
            },
            inflict: {
                cut: [30, 1],
                depelete: [1, 75],
            },
            description: `Direct; Purple/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 2.1; Damage 14; Attacks 14; cut, depelete`,
        },
        { // 7 3
            cost: 35000,
            rof: 5,
            range: 2.2,
            damage: 20,
            color: "purple",
            damageType: "magical",
            attacks: 18,
            multi: true,
            buff: {
                "sight": [99999999, 1],
            },
            inflict: {
                cut: [30, 1],
                depelete: [1, 75],
            },
            description: `Direct; Purple/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 2.2; Damage 20; Attacks 18; cut, depelete`,
        },
        { // 8 4
            cost: 78750,
            rof: 5,
            range: 2.3,
            damage: 28,
            color: "purple",
            damageType: "magical",
            attacks: 22,
            multi: true,
            buff: {
                "sight": [99999999, 1],
            },
            inflict: {
                cut: [30, 1],
                depelete: [1, 75],
            },
            description: `Direct; Purple/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 2.3; Damage 28; Attacks 22; cut, depelete`,
        },
        { // 9 5
            cost: 157500,
            rof: 5,
            range: 2.4,
            damage: 38,
            color: "purple",
            damageType: "magical",
            attacks: 26,
            multi: true,
            buff: {
                "sight": [99999999, 1],
            },
            inflict: {
                cut: [30, 1],
                depelete: [1, 75],
            },
            description: `Direct; Purple/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 2.4; Damage 38; Attacks 26; cut, depelete`,
        },
        { // 10 6
            //cost: 315000,
            rof: 5,
            range: 2.5,
            damage: 40,
            color: "purple",
            damageType: "magical",
            attacks: 30,
            multi: true,
            buff: {
                "sight": [99999999, 1],
            },
            inflict: {
                cut: [30, 1],
                depelete: [1, 75],
            },
            description: `Direct; Purple/Magical Type; Targets Ground, Air; Rate of Fire 5; Range 2.5; Damage 40; Attacks 30; cut, depelete`,
        }
    ]
}

td.towers.rainbow  = {
    name: "Rainbow Tower",
    type: "direct",
    subtypes: [],
    imagePath: "rainbow.png",
    targets: ["ground", "air"],
    cost: 300,
    levels: [
        {
            cost: 600,
            rof: 5,
            range: 2,
            damage: 2,
            damageType: "magical",
            randomColor: true,
            description: `Direct; Random/Magical Type; Targets Ground, Air; Rate of Fire 6; Range 2; Damage 2;`,
        },
        {
            cost: 900,
            rof: 5,
            range: 2.1,
            damage: 5,
            damageType: "magical",
            randomColor: true,
            description: `Direct; Random/Magical Type; Targets Ground, Air; Rate of Fire 6; Range 2; Damage 5;`,
        },
        {
            cost: 900,
            rof: 5,
            range: 2.2,
            damage: 7,
            damageType: "magical",
            randomColor: true,
            description: `Direct; Random/Magical Type; Targets Ground, Air; Rate of Fire 6; Range 2; Damage 7;`,
        },
        {
            cost: 1400,
            rof: 5,
            range: 2.3,
            damage: 10,
            damageType: "magical",
            randomColor: true,
            description: `Direct; Random/Magical Type; Targets Ground, Air; Rate of Fire 6; Range 2; Damage 10;`,
        },  
        {
            cost: 1800,
            rof: 5,
            range: 2.4,
            damage: 12,
            damageType: "magical",
            randomColor: true,
            description: `Direct; Random/Magical Type; Targets Ground, Air; Rate of Fire 6; Range 2; Damage 12;`,
        },  
        { // 6 
            cost: 3600,
            rof: 5,
            range: 2.5,
            damage: 14,
            damageType: "magical",
            randomColor: true,
            description: `Direct; Random/Magical Type; Targets Ground, Air; Rate of Fire 6; Range 2; Damage 14;`,
        },  
        { // 7
            cost: 7200,
            rof: 5,
            range: 2.6,
            damage: 18,
            damageType: "magical",
            randomColor: true,
            description: `Direct; Random/Magical Type; Targets Ground, Air; Rate of Fire 6; Range 2; Damage 18;`,
        },  
        { // 8
            cost: 14400,
            rof: 5,
            range: 2.7,
            damage: 23,
            damageType: "magical",
            randomColor: true,
            description: `Direct; Random/Magical Type; Targets Ground, Air; Rate of Fire 6; Range 2; Damage 23;`,
        },  
        { // 9
            cost: 28800,
            rof: 5,
            range: 2.8,
            damage: 29,
            damageType: "magical",
            randomColor: true,
            description: `Direct; Random/Magical Type; Targets Ground, Air; Rate of Fire 6; Range 2; Damage 32;`,
        },  
        { // 10
            //cost: 57600,
            rof: 5,
            range: 2.9,
            damage: 36,
            damageType: "magical",
            randomColor: true,
            description: `Direct; Random/Magical Type; Targets Ground, Air; Rate of Fire 6; Range 2; Damage 42;`,
        }
    ],
    upgrades: [
        [
            {
                name: "Double Cannon",
                cost: 1500,
                description: "Attack twice on single target",
                include: {
                    baseAttacks: 2
                }
            },
            {
                name: "Triple Cannon",
                cost: 2500,
                description: "Attack three times",
                include: {
                    baseAttacks: 3
                }
            },
            {
                name: "Quad Cannon",
                cost: 3500,
                description: "Attack four times",
                include: {
                    baseAttacks: 4
                }
            }
        ],
    ]
}

td.towers.tech  = {
    name: "Tech Tower",
    type: "basic",
    subtypes: [],
    class: "noncombat",
    imagePath: "tech.png",
    maxBuild: 1,
    targets: ["ground", "air"],
    cost: 1000,
    levels: [
        {
            cost: 1200,
            description: `Unlocks rank 6 towers, and Tier 2 Tech Upgrades`,
        },
        {
            cost: 2400,
            description: `Unlocks rank 7 towers, and Tier 3 Tech Upgrades`,
        },
        {
            cost: 4800,
            description: `Unlocks rank 8 towers, and Tier 4 Tech Upgrades`,
        },
        {
            cost: 9600,
            description: `Unlocks rank 9 towers, and Tier 5 Tech Upgrades`,
        },  
        {
            //cost: 19200,
            description: `Unlocks rank 10 towers, and Tier 6 Tech Upgrades`,
        }
    ]
}

td.towers.light  = {
    name: "Light Tower",
    type: "direct",
    subtypes: ["white"],
    imagePath: "light.png",
    targets: ["ground", "air"],
    cost: 400,
    levels: [
        {
            cost: 400,
            rof: 15,
            range: 3,
            color: "white",
            damageType: "magical",
            damageArray: [40, 30, 20, 10, 5],
            description: `Direct; white/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 40, 30, 20, 10 (5)`,
        },{
            cost: 600,
            rof: 15,
            range: 3,
            color: "white",
            damageType: "magical",
            damageArray: [60, 50, 40, 20, 10],
            description: `Direct; white/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 60, 50, 40, 20 (10)`,
        },{
            cost: 600,
            rof: 15,
            range: 3,
            color: "white",
            damageType: "magical",
            damageArray: [80, 70, 60, 40, 15],
            description: `Direct; white/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 80, 70, 60, 40 (15)`,
        },{
            cost: 1400,
            rof: 15,
            range: 3,
            color: "white",
            damageType: "magical",
            damageArray: [100, 80, 70, 40, 20],
            description: `Direct; white/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 100, 80, 70, 40 (20)`,
        },
        {
            cost: 2800,
            rof: 15,
            range: 3,
            color: "white",
            damageType: "magical",
            damageArray: [120, 100, 80, 40, 20],
            description: `Direct; white/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 120, 100, 80, 40 (20)`,
        }, // (6) 2
        {
            cost: 8400,
            rof: 15,
            range: 3,
            color: "white",
            damageType: "magical",
            damageArray: [140, 120, 100, 80, 30],
            description: `Direct; white/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 140, 120, 100, 80 (30)`,
        }, // (7) 3
        {
            cost: 21000,
            rof: 15,
            range: 3,
            color: "white",
            damageType: "magical",
            damageArray: [160, 140, 120, 100, 45],
            description: `Direct; white/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 160, 140, 120, 100 (45)`,
        }, // (8) 4
        {
            cost: 47250,
            rof: 15,
            range: 3,
            color: "white",
            damageType: "magical",
            damageArray: [180, 160, 140, 120, 65],
            description: `Direct; white/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 180, 160, 140, 120 (65)`,
        }, // (9) + 5
        {
            cost: 94500,
            rof: 15,
            range: 3,
            color: "white",
            damageType: "magical",
            damageArray: [200, 180, 160, 140, 90],
            description: `Direct; white/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 200, 180, 160, 140 (90)`,
        }, // (10) + 5
        {
            //cost: 189000,
            rof: 15,
            range: 3,
            color: "white",
            damageType: "magical",
            damageArray: [220, 200, 180, 160, 120],
            description: `Direct; white/magic Type; Targets Ground, Air; Rate of Fire 15; Range 3; Damage 220, 200, 180, 160 (120)`,
        }
    ]
}

// DEBUG

td.towers.debug = {
    name: "Debug Tower",
    type: "eye",
    subtypes: [],
    class: "debug",
    imagePath: "tech.png",
    targets: ["ground", "air"],
    cost: 0,
    levels: [
        {
            cost: 0,
            range: 1,
            color: "yellow",
            attacks: 100,
            description: `Debug 1; range 1`,
        },
        {
            cost: 1,
            range: 1.5,
            color: "yellow",
            attacks: 100,
            description: `Debug 2; range 1.5`,
        },
        {
            cost: 1,
            range: 2,
            color: "yellow",
            attacks: 100,
            description: `Debug 3; range 2`,
        },
        {
            cost: 1,
            range: 2.5,
            color: "yellow",
            attacks: 100,
            description: `Debug 4; range 2.5`,
        },  
        {
            cost: 1,
            range: 3,
            color: "yellow",
            attacks: 100,
            description: `Debug 5; range 3`,
        },
        {
            range: 3.5,
            color: "yellow",
            attacks: 100,
            description: "Debug 6; range 3.5"
        }
    ]
}

td.towers.debugaoe = {
    name: "Debug Tower (AOE)",
    type: "star",
    subtypes: [],
    class: "debug",
    imagePath: "tech.png",
    targets: ["ground", "air"],
    cost: 0,
    levels: [
        {
            cost: 0,
            range: 1,
            color: "yellow",
            attacks: 100,
            description: `Debug 1; range 1`,
        },
        {
            cost: 1,
            range: 1.5,
            color: "yellow",
            attacks: 100,
            description: `Debug 2; range 1.5`,
        },
        {
            cost: 1,
            range: 2,
            color: "yellow",
            attacks: 100,
            description: `Debug 3; range 2`,
        },
        {
            cost: 1,
            range: 2.5,
            color: "yellow",
            attacks: 100,
            description: `Debug 4; range 2.5`,
        },  
        {
            cost: 1,
            range: 3,
            color: "yellow",
            attacks: 100,
            description: `Debug 5; range 3`,
        },
        {
            range: 3.5,
            color: "yellow",
            attacks: 100,
            description: "Debug 6; range 3.5"
        }
    ]
}
td.crits = {};

// NEW SETUP

// v2.0
td.crits.ndummy = {
    setup: "new",
    name: "Dummy",
    type: "dummy",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "dummy.png",
    g: 25,
    life: [100, 100],
    lifeRegen: [ 0, 0],
    pAc: [1, 1],
    mAc: [1, 1],
    divineLife: [0, 0],
    shield: [2, 2],
    speed: [1, 1],
    damage: 5,
    parmor: [ 0.1, 0.1 ],
    marmor: [ 0.1, 0.1],
    armorLife: 100,
    // old
    defense: [0,2],
    resist: [0,2],
}

// v2.0
td.crits.ngrass = {
    setup: "new",
    name: "grass",
    type: "grass",
    subtypes: ["minion"],
    moveType: "ground",
    imagePath: "grassenemy.png",
    tier: 1,
    g: 3,
    life: [3, 3],
    lifeRegen: [ 0, 0],
    pAc: [1, 1],
    mAc: [1, 1],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [12, 12],
    damage: 1,
    parmor: [ 0.1, 0.1 ],
    marmor: [ 0.1, 0.1],
    armorLife: 100,
    // old
    defense: [0,0],
    resist: [0,0],
    resistance: {
        "green" : 0.25
    },
    weakness: {
        "red" : 10.0
    }
}

// v2.0
td.crits.nbrownrat = {
    setup: "new",
    name: "Brown Rat",
    type: "rat",
    subtypes: ["minion"],
    moveType: "ground",
    imagePath: "brownrat.png",
    tier: 1,
    g: 5,
    life: [5, 5],
    lifeRegen: [ 0, 0],
    pAc: [1, 1],
    mAc: [1, 1],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.1, 0.1 ],
    marmor: [ 0.1, 0.1],
    armorLife: 100,
    // old
    defense: [0,0],
    resist: [0,0],
}

// v2.0
td.crits.nbrownbeetle = {
    setup: "new",
    name: "Brown Beetle",
    type: "beetle",
    subtypes: ["minion"],
    moveType: "ground",
    imagePath: "brownbeetle.png",
    tier: 1,
    g: 7,
    life: [8, 8],
    lifeRegen: [ 0, 0],
    pAc: [2, 2],
    mAc: [2, 2],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [2, 2],
    damage: 1,
    parmor: [ 0.20, 0.20 ],
    marmor: [ 0.20, 0.20],
    armorLife: 100,
    // old
    defense: [0,2],
    resist: [0,1],
}

// v2.0
td.crits.ngreensnake = {
    name: "Green Snake",
    type: "snake",
    moveType: "ground",
    imagePath: "snake.png",
    tier: 1,
    image: undefined,
    g: 4,
    setup: "new",
    subtypes: ["minion"],
    life: [4, 4],
    lifeRegen: [ 0, 0],
    pAc: [1, 1],
    mAc: [1, 1],
    divineLife: [0, 0],
    shield: [2, 2],
    speed: [6, 6],
    damage: 1,
    parmor: [ 0.10, 0.10 ],
    marmor: [ 0.10, 0.10],
    armorLife: 100,
    // old
    defense: [0,0],
    resist: [0,0],
};

// v2.0
td.crits.nbat = {
    name: "bat",
    type: "bat",
    moveType: "air",
    imagePath: "bat.png",
    tier: 1,
    image: undefined,
    g: 6,
    setup: "new",
    subtypes: ["minion"],
    life: [6, 6],
    lifeRegen: [ 0, 0],
    pAc: [1, 1],
    mAc: [1, 1],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.10, 0.10 ],
    marmor: [ 0.10, 0.10],
    armorLife: 100,
    // old
    defense: [0,0],
    resist: [0,2],
};

td.crits.npig = {
    setup: "new",
    name: "Pig",
    type: "pig",
    subtypes: ["minion"],
    moveType: "ground",
    imagePath: "pig.png",
    tier: 1,
    g: 8,
    life: [10, 10],
    lifeRegen: [ 0, 0],
    pAc: [1, 1],
    mAc: [1, 1],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.10, 0.10 ],
    marmor: [ 0.10, 0.10],
    armorLife: 100,
    // old
    defense: [0,1],
    resist: [0,1],
}

// N Tier 2

// v2.0
td.crits.ngraygrass = {
    setup: "new",
    name: "Gray Grass",
    type: "grass",
    subtypes: ["minion"],
    moveType: "ground",
    imagePath: "graygrass.png",
    tier: 2,
    g: 8,
    life: [6, 6],
    lifeRegen: [ 0, 0],
    pAc: [2, 2],
    mAc: [2, 2],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [12, 12],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25 ],
    armorLife: 100,
    // old
    defense: [0,2],
    resist: [0,1],
    resistance: {
        "green" : 0.25
    },
    weakness: {
        "red" : 10.0
    }
}

// v2.0
td.crits.nfrog = {
    name: "Green Frog",
    type: "frog",
    moveType: "ground",
    imagePath: "frog.png",
    image: undefined,
    tier: 2,
    g: 12,
    setup: "new",
    subtypes: ["minion"],
    life: [35, 35],
    lifeRegen: [ 0, 0],
    pAc: [2, 2],
    mAc: [2, 2],
    divineLife: [0, 0],
    shield: [12, 12],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.35, 0.35 ],
    armorLife: 100,
    // old
    defense: [0,1],
    resist: [0,1],
};

// v2.0
td.crits.ngrayrat = {
    name: "Gray Rat",
    type: "rat",
    moveType: "ground",
    imagePath: "grayrat.png",
    image: undefined,
    tier: 2,
    g: 10,
    setup: "new",
    subtypes: ["minion"],
    life: [20, 20],
    lifeRegen: [ 0, 0],
    pAc: [2, 2],
    mAc: [2, 2],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,2],
    resist: [0,1],
};

// v2.0
td.crits.nmushroom = {
    name: "Mushroom",
    type: "mushroom",
    moveType: "ground",
    imagePath: "mushroom.png",
    image: undefined,
    tier: 2,
    g: 14,
    setup: "new",
    subtypes: ["minion"],
    life: [40, 40],
    lifeRegen: [ 0, 0],
    pAc: [2, 2],
    mAc: [2, 2],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.35, 0.35 ],
    armorLife: 100,
    // old
    defense: [0,0],
    resist: [2,4],
};

// v2.0
td.crits.ngraybeetle = {
    name: "Gray Beetle",
    type: "beetle",
    moveType: "ground",
    imagePath: "graybeetle.png",
    image: undefined,
    tier: 2,
    g: 14,
    life: [45, 45],
    lifeRegen: [ 0, 0],
    pAc: [2, 2],
    mAc: [2, 2],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [1, 1],
    damage: 1,
    parmor: [ 0.50, 0.50 ],
    marmor: [ 0.35, 0.35],
    armorLife: 100,
    // old
    defense: [2, 4],
    resist: [0, 1],
};

// v2.0
td.crits.nbrownbat = {
    name: "Brown Bat",
    type: "bat",
    moveType: "air",
    imagePath: "brownbat.png",
    image: undefined,
    tier: 2,
    g: 18,
    setup: "new",
    subtypes: ["minion"],
    life: [50, 50],
    lifeRegen: [ 0, 0],
    pAc: [2, 2],
    mAc: [2, 2],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [4, 4],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,1],
    resist: [0,1],
};

// v2.0
td.crits.nwoodendummy = {
    name: "Wooden Dummy",
    type: "dummy",
    subtypes: ["boss"],
    weakness: {
        red: 5.0
    },
    resistance: {
        green: 0.25
    },
    moveType: "ground",
    imagePath: "wooddummy.png",
    image: undefined,
    g: 50,
    setup: "new",
    life: [475, 475],
    lifeRegen: [ 0, 0],
    pAc: [2, 2],
    mAc: [2, 2],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [2, 2],
    damage: 5,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25 ],
    armorLife: 100,
    // old
    defense: [1,2],
    resist: [1,4],
};


// T3
// v2.0
td.crits.nbee = {
    name: "Bee",
    type: "bee",
    moveType: "air",
    imagePath: "bee.png",
    image: undefined,
    tier: 3,
    g: 22,
    setup: "new",
    subtypes: ["minion"],
    life: [9, 9],
    lifeRegen: [ 0, 0],
    pAc: [3, 3],
    mAc: [3, 3],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [6, 6],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,0],
    resist: [0,0],
};

// v2.0
td.crits.nscorpion = {
    name: "Scorpion",
    type: "scorpion",
    moveType: "ground",
    imagePath: "scorpion.png",
    image: undefined,
    tier: 3,
    g: 26,
    weakness: {
        blue: 10.0
    },
    setup: "new",
    subtypes: ["minion"],
    life: [12, 12],
    lifeRegen: [ 0, 0],
    pAc: [3, 3],
    mAc: [3, 3],
    divineLife: [0, 0],
    shield: [16, 16],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.35, 0.35 ],
    marmor: [ 0.35, 0.35],
    armorLife: 100,
    // old
    defense: [0,2],
    resist: [0,2],
};

// v2.0
td.crits.ndarkgrayrat = {
    name: "Dark Gray Rat",
    type: "rat",
    moveType: "ground",
    imagePath: "darkgrayrat.png",
    image: undefined,
    tier: 3,
    g: 30,
    setup: "new",
    subtypes: ["minion"],
    life: [45, 45],
    lifeRegen: [ 0, 0],
    pAc: [3, 3],
    mAc: [3, 3],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [1,4],
    resist: [0,2],
};

// v2.0
td.crits.nredmushroom = {
    name: "Red Mushroom",
    type: "mushroom",
    moveType: "ground",
    imagePath: "mushroom2.png",
    image: undefined,
    tier: 3,
    g: 34,
    setup: "new",
    subtypes: ["minion"],
    life: [55, 55],
    lifeRegen: [ 0, 0],
    pAc: [3, 3],
    mAc: [3, 3],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,0],
    resist: [2,6],
};

// v2.0
td.crits.norc = {
    name: "Orc",
    type: "orc",
    moveType: "ground",
    imagePath: "orc.png",
    image: undefined,
    tier: 3,
    g: 38,
    setup: "new",
    subtypes: ["minion"],
    life: [85, 85],
    lifeRegen: [ 0, 0],
    pAc: [3, 3],
    mAc: [3, 3],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.35, 0.35 ],
    marmor: [ 0.35, 0.35],
    armorLife: 100,
    damage: 2,
    immune: ["white"],
    // old
    defense: [2,6],
    resist: [0,2],
};

// v2.0
td.crits.ngreenslime = {
    name: "Green Slime",
    type: "slime",
    moveType: "ground",
    imagePath: "greenslime.png",
    image: undefined,
    tier: 3,
    g: 42,
    setup: "new",
    subtypes: ["minion"],
    life: [110, 110],
    lifeRegen: [ 0, 0],
    pAc: [3, 3],
    mAc: [3, 3],
    divineLife: [0, 0],
    shield: [1, 1],
    speed: [4, 4],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,2],
    resist: [0,2],
};

// v2.0
td.crits.norge = {
    name: "Orge",
    type: "orge",
    subtypes: ["boss"],
    immune: ["white"],
    moveType: "ground",
    imagePath: "orge.png",
    image: undefined,
    g: 200,
    setup: "new",
    life: [675, 675],
    lifeRegen: [ 0, 0],
    pAc: [3.2, 3.2],
    mAc: [3.2, 3.2],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [2, 2],
    damage: 5,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25 ],
    armorLife: 100,
    // old
    defense: [4,6],
    resist: [1,4],
};

//T 4 

// v2.0
td.crits.nredbee = {
    name: "Red Bee",
    type: "bee",
    moveType: "air",
    imagePath: "redbee.png",
    image: undefined,
    tier: 4,
    g: 47,
    setup: "new",
    subtypes: ["minion"],
    life: [22, 22],
    lifeRegen: [ 0, 0],
    pAc: [4, 4],
    mAc: [4, 4],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [6, 6],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,1],
    resist: [0,1],
};

// v2.0
td.crits.nprat = {
    name: "Poison Rat",
    type: "rat",
    moveType: "ground",
    imagePath: "prat.png",
    image: undefined,
    tier: 4,
    g: 52,
    setup: "new",
    subtypes: ["minion"],
    life: [55, 55],
    lifeRegen: [ 0, 0],
    pAc: [4, 4],
    mAc: [4, 4],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,4],
    resist: [0,4],
    reachGoal: {
        poison: [1000, 1]
    },
    ai: undefined
};

// v2.0
td.crits.nmoth = {
    name: "Moth",
    type: "butterfly",
    moveType: "ground",
    imagePath: "moth.png",
    image: undefined,
    tier: 4,
    g: 57,
    setup: "new",
    subtypes: ["minion"],
    life: [65, 65],
    lifeRegen: [ 0, 0],
    pAc: [4, 4],
    mAc: [4, 4],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.35, 0.35],
    armorLife: 100,
    // old
    defense: [0,4],
    resist: [4,8],
    reachGoal: {
        poison: [1000, 1]
    },
    ai: undefined
};

// v2.0
td.crits.ninvisfrog = {
    name: "Green Invis Frog",
    type: "frog",
    moveType: "ground",
    trait: ["invis"],
    imagePath: "invisfrog.png",
    image: undefined,
    tier: 4,
    g: 62,
    setup: "new",
    subtypes: ["minion"],
    life: [75, 75],
    lifeRegen: [ 0, 0],
    pAc: [4, 4],
    mAc: [4, 4],
    divineLife: [0, 0],
    shield: [14, 14],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,4],
    resist: [0,4],
};

// v2.0
td.crits.nelf1 = {
    name: "Elf",
    type: "elf",
    moveType: "ground",
    imagePath: "elf1.png",
    image: undefined,
    tier: 4,
    g: 20,
    setup: "new",
    subtypes: ["minion"],
    life: [125, 125],
    lifeRegen: [ 0, 0],
    pAc: [4, 4],
    mAc: [4, 4],
    divineLife: [2, 2],
    shield: [1, 1],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.35, 0.35 ],
    armorLife: 100,
    immune: [ 'white'],
    // old
    defense: [4,8],
    resist: [0,4],
};

td.crits.nthief = {
    name: "Thief",
    type: "human",
    moveType: "ground",
    imagePath: "thief.png",
    image: undefined,
    tier: 4,
    steal: 400,
    immune: [ 'white'],
    weakness: {
        wind: 2.25
    },
    g: 72,
    life: [250, 250],
    lifeRegen: [ 0, 0],
    pAc: [4, 4],
    mAc: [4, 4],
    divineLife: [0, 0],
    shield: [1, 1],
    speed: [10, 10],
    damage: 0,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25 ],
    armorLife: 100,
    // old
    defense: [0, 4],
    resist: [0, 4],
};

td.crits.nscarecrow = {
    name: "Scarecrow",
    type: "fiend",
    subtypes: ["boss"],
    immune: [ 'white'],
    trait: [
        "speedy",
        "hardy",
        "resisty",
        "lifey",
    ],
    moveType: "ground",
    imagePath: "scarecrow.png",
    image: undefined,
    g: 350,
    life: [375, 375],
    lifeRegen: [ 0, 0],
    pAc: [4, 4],
    mAc: [4, 4],
    divineLife: [0, 0],
    shield: [1, 1],
    speed: [3, 3],
    damage: 5,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25 ],
    armorLife: 100,
    // old
    defense: [0, 4],
    resist: [0, 4],
}

// t5

td.crits.ninvisrat = {
    name: "Invis Rat",
    type: "rat",
    moveType: "ground",
    imagePath: "invisrat.png",
    image: undefined,
    trait: ["invis"],
    tier: 5,
    g: 78,
    setup: "new",
    subtypes: ["minion"],
    life: [65, 65],
    lifeRegen: [ 0, 0],
    pAc: [5, 5],
    mAc: [5, 5],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,4],
    resist: [0,4],
};

td.crits.nshieldedrat = {
    name: "Shielded Rat",
    type: "rat",
    moveType: "ground",
    imagePath: "shieldedrat.png",
    image: undefined,
    tier: 5,
    g: 10,
    setup: "new",
    subtypes: ["minion"],
    life: [75, 75],
    lifeRegen: [ 0, 0],
    pAc: [5, 5],
    mAc: [5, 5],
    divineLife: [0, 0],
    shield: [24, 24],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,4],
    resist: [0,4],
};

td.crits.ngraysnake = {
    name: "Gray Snake",
    type: "snake",
    moveType: "ground",
    imagePath: "t5snake.png",
    image: undefined,
    tier: 5,
    g: 90,
    setup: "new",
    subtypes: ["minion"],
    life: [175, 175],
    lifeRegen: [ 0, 0],
    pAc: [5, 5],
    mAc: [5, 5],
    divineLife: [0, 0],
    shield: [4, 4],
    speed: [6, 6],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,4],
    resist: [0,4],
};

td.crits.nbutterflygreen = {
    name: "Green Butterfly",
    type: "butterfly",
    moveType: "air",
    immune: ["transparent", "gray", "green"],
    imagePath: "butterfly-green.png",
    image: undefined,
    tier: 5,
    g: 96,
    setup: "new",
    subtypes: ["minion"],
    life: [200, 200],
    lifeRegen: [ 0, 0],
    pAc: [5, 5],
    mAc: [5, 5],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [4, 4],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,1],
    resist: [4,10],
};

td.crits.nbutterflyred = {
    name: "Red Butterfly",
    type: "butterfly",
    moveType: "air",
    immune: ["transparent", "gray", "red"],
    imagePath: "butterfly-red.png",
    image: undefined,
    tier: 5,
    g: 96,
    setup: "new",
    subtypes: ["minion"],
    life: [200, 200],
    lifeRegen: [ 0, 0],
    pAc: [5, 5],
    mAc: [5, 5],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [4, 4],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,1],
    resist: [4,10],
};

td.crits.nbutterflyyellow = {
    name: "Yellow Butterfly",
    type: "butterfly",
    moveType: "air",
    immune: ["transparent", "gray", "yellow"],
    imagePath: "butterfly-yellow.png",
    image: undefined,
    tier: 5,
    g: 96,
    setup: "new",
    subtypes: ["minion"],
    life: [200, 200],
    lifeRegen: [ 0, 0],
    pAc: [5, 5],
    mAc: [5, 5],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [4, 4],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0,1],
    resist: [4,10],
};


td.crits.nmetalslime = {
    name: "Metal Slime",
    type: "slime",
    moveType: "ground",
    imagePath: "metalslime.png",
    image: undefined,
    tier: 5,
    g: 102,
    setup: "new",
    life: [225, 225],
    lifeRegen: [ 0, 0],
    pAc: [5, 5],
    mAc: [5, 5],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [4, 4],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [4, 10],
    resist: [0, 4],
};

td.crits.nmerfolk = {
    name: "Merfolk",
    type: "merfolk",
    moveType: "ground",
    trait: ["bubbleArmor"],
    debuff: {
        decay: [99999999, 3],
    },
    immune: ["red", "white"],
    imagePath: "merfolk.png",
    image: undefined,
    tier: 5,
    g: 108,
    setup: "new",
    life: [800, 800],
    lifeRegen: [ 0, 0],
    pAc: [5, 5],
    mAc: [5, 5],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [20, 25],
    resist: [20, 25],
};

td.crits.nmudman  = {
    name: "Large Mud Man",
    type: "mud",
    moveType: "ground",
    imagePath: "mudman.png",
    transform: "nmudmanmid",
    image: undefined,
    immune: ["brown"],
    g: 400,
    setup: "new",
    life: [800, 800],
    lifeRegen: [ 0, 0],
    pAc: [5, 5],
    mAc: [5, 5],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [1, 1],
    damage: 5,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [6, 10],
    resist: [0, 4],
};

td.crits.nmudmanmid  = {
    name: "Medium Mud Man",
    type: "mud",
    moveType: "ground",
    imagePath: "mudman.png",
    transform: "nmudmansm",
    image: undefined,
    immune: ["brown"],
    setup: "new",
    g: 200,
    life: [400, 400],
    lifeRegen: [ 0, 0],
    pAc: [5, 5],
    mAc: [5, 5],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 3,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [4, 8],
    resist: [0, 2],
};

td.crits.nmudmansm  = {
    name: "Small Mud Man",
    type: "mud",
    moveType: "ground",
    imagePath: "mudman.png",
    image: undefined,
    immune: ["brown"],
    setup: "new",
    g: 100,
    life: [200, 200],
    lifeRegen: [ 0, 0],
    pAc: [5, 5],
    mAc: [5, 5],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25 ],
    armorLife: 100,
    // old
    defense: [4, 8],
    resist: [0, 2],
};

// t6

td.crits.ngreenworm = {
    name: "Green Worm",
    type: "worm",
    moveType: "ground",
    imagePath: "greenworm.png",
    image: undefined,
    tier: 6,
    g: 115,
    setup: "new",
    life: [65, 65],
    lifeRegen: [ 0, 0],
    pAc: [6, 6],
    mAc: [6, 6],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [5, 5],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [1, 4],
    resist: [1, 4],
};

td.crits.nangryrat = {
    name: "Angry Rat",
    type: "rat",
    moveType: "ground",
    imagePath: "angryrat.png",
    image: undefined,
    tier: 6,
    g: 122,
    setup: "new",
    life: [175, 175],
    lifeRegen: [ 0, 0],
    pAc: [6, 6],
    mAc: [6, 6],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [1, 4],
    resist: [1, 4],
};

td.crits.nsnowbat = {
    name: "Snow bat",
    type: "bat",
    moveType: "air",
    imagePath: "snowbat.png",
    immune: ["white", "blue"],
    image: undefined,
    tier: 6,
    g: 129,
    setup: "new",
    life: [255, 255],
    lifeRegen: [ 0, 0],
    pAc: [6, 6],
    mAc: [6, 6],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [5, 5],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [1, 4],
    resist: [6, 12],
};

td.crits.ninvisbat = {
    name: "Shielded Invis Bat",
    type: "bat",
    moveType: "air",
    trait: ["invis"],
    imagePath: "invisbat.png",
    image: undefined,
    tier: 6,
    g: 129,
    setup: "new",
    life: [255, 255],
    lifeRegen: [ 0, 0],
    pAc: [6, 6],
    mAc: [6, 6],
    divineLife: [0, 0],
    shield: [24, 24],
    speed: [5, 5],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [1, 4],
    resist: [6, 12],
};

td.crits.ntankbeetle = {
    name: "tank beetle",
    type: "beetle",
    moveType: "ground",
    imagePath: "tankbeetle.png",
    image: undefined,
    tier: 6,
    g: 136,
    setup: "new",
    life: [450, 450],
    lifeRegen: [ 0, 0],
    pAc: [6, 6],
    mAc: [6, 6],
    divineLife: [0, 0],
    shield: [10, 10],
    speed: [1, 1],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [6, 12],
    resist: [3, 8],
};

td.crits.nspider = {
    name: "Spider",
    type: "spider",
    moveType: "ground",
    imagePath: "spider.png",
    image: undefined,
    inflict: {
        web: [15, 15]
    },
    tier: 6,
    g: 143,
    setup: "new",
    life: [500, 500],
    lifeRegen: [ 0, 0],
    pAc: [6, 6],
    mAc: [6, 6],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [1, 4],
    resist: [1, 4],
};

td.crits.nrainbowbat = {
    name: "Rainbow Bat",
    type: "bat",
    moveType: "air",
    imagePath: "rainbowbat.png",
    image: undefined,
    resistance: {
        white: 0.5,
        red: 0.5,
        blue: 0.5,
        green: 0.5,
        brown: 0.5,
        yellow: 0.5,
        purple: 0.5
    },
    g: 1000,
    setup: "new",
    life: [850, 850],
    lifeRegen: [ 0, 0],
    pAc: [6, 6],
    mAc: [6, 6],
    divineLife: [0, 0],
    shield: [4, 4],
    speed: [4, 4],
    damage: 5,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0, 4],
    resist: [6, 10],
};

// t7?

td.crits.ntoxicrat = {
    name: "Toxic Rat",
    type: "rat",
    moveType: "ground",
    imagePath: "toxicrat.png",
    reachGoal: {
        poison: [1000, 0.2]
    },
    image: undefined,
    tier: 7,
    g: 151,
    setup: "new",
    life: [375, 375],
    lifeRegen: [ 0, 0],
    pAc: [7, 7],
    mAc: [7, 7],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [5, 5],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [2, 4],
    resist: [2, 4],
};

td.crits.nbrownsnake = {
    name: "Brown Snake",
    type: "snake",
    moveType: "ground",
    imagePath: "snake3.png",
    immune: ["brown"],
    image: undefined,
    tier: 7,
    g: 159,
    setup: "new",
    subtypes: ["minion"],
    life: [450, 450],
    lifeRegen: [ 0, 0],
    pAc: [7, 7],
    mAc: [7, 7],
    divineLife: [0, 0],
    shield: [4, 4],
    speed: [6, 6],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [3, 6],
    resist: [3, 6],
};

td.crits.nsnowbat = {
    name: "Snow Bat",
    type: "bat",
    moveType: "air",
    imagePath: "snowbat.png",
    image: undefined,
    immune: ["transparent", "blue"],
    tier: 7,
    g: 167,
    setup: "new",
    subtypes: ["minion"],
    life: [575, 575],
    lifeRegen: [ 0, 0],
    pAc: [7, 7],
    mAc: [7, 7],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [4, 4],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [2, 4],
    resist: [8, 14],
};

td.crits.nelf2 = {
    name: "Armored Elf",
    type: "elf",
    moveType: "ground",
    imagePath: "elf2.png",
    image: undefined,
    tier: 7,
    g: 175,
    setup: "new",
    subtypes: ["minion"],
    life: [650, 650],
    lifeRegen: [ 0, 0],
    pAc: [7, 7],
    mAc: [7, 7],
    divineLife: [8, 8],
    shield: [20, 20],
    speed: [4, 4],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.35, 0.35],
    armorLife: 100,
    // old
    defense: [8, 14],
    resist: [2, 6],
};

td.crits.nredslime = {
    name: "Red Slime",
    type: "slime",
    moveType: "ground",
    imagePath: "redslime.png",
    image: undefined,
    tier: 7,
    g: 183,
    setup: "new",
    subtypes: ["minion"],
    life: [750, 750],
    lifeRegen: [ 0, 0],
    pAc: [7, 7],
    mAc: [7, 7],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [4, 4],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [2, 4],
    resist: [2, 4],
};

td.crits.nmagegreen = {
    critId: "magegreen",
    name: "Mage Green",
    type: "mage",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "magegreen.png",
    immune: ["green", "white"],
    transform: "magered",

    g: 400,
    setup: "new",
    subtypes: ["minion"],
    life: [1200, 1200],
    lifeRegen: [ 0, 0],
    pAc: [7, 7],
    mAc: [7, 7],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 5,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.50, 0.50],
    armorLife: 100,
    // old
    defense: [2, 4],
    resist: [2, 4],
};
td.crits.nmagered = {
    critId: "magered",
    name: "Mage Red",
    type: "mage",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "magered.png",
    immune: ["red", "white"],
    transform: "magepurple",

    g: 400,
    setup: "new",
    subtypes: ["minion"],
    life: [1200, 1200],
    lifeRegen: [ 0, 0],
    pAc: [7, 7],
    mAc: [7, 7],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [6, 6],
    damage: 5,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.50, 0.50],
    armorLife: 100,
    // old
    defense: [2, 4],
    resist: [2, 4],
};
td.crits.nmagepurple = {
    critId: "magepurple",
    name: "Mage Purple",
    type: "mage",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "magepurple.png",
    immune: ["purple", "white"],
    transform: "magegold",

    g: 400,
    setup: "new",
    subtypes: ["minion"],
    life: [1200, 1200],
    lifeRegen: [ 0, 0],
    pAc: [7, 7],
    mAc: [7, 7],
    divineLife: [0, 0],
    shield: [40, 40],
    speed: [3, 3],
    damage: 5,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.50, 0.50],
    armorLife: 100,
    // old
    defense: [2, 4],
    resist: [2, 4],
};
td.crits.nmagegold = {
    critId: "magegold",
    name: "Mage Gold",
    type: "mage",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "magegold.png",
    immune: ["yellow", "White"],

    g: 400,
    setup: "new",
    subtypes: ["minion"],
    life: [1600, 1600],
    lifeRegen: [ 0, 0],
    pAc: [7, 7],
    mAc: [7, 7],
    divineLife: [0, 0],
    shield: [40, 40],
    speed: [4, 4],
    damage: 5,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.50, 0.50],
    armorLife: 100,
    // old
    defense: [2, 4],
    resist: [2, 4],
};

// t8 

td.crits.nredworm = {
    name: "Red Worm",
    type: "worm",
    moveType: "ground",
    imagePath: "redworm.png",
    image: undefined,
    tier: 8,
    g: 192,
    setup: "new",
    life: [300, 300],
    lifeRegen: [ 0, 0],
    pAc: [8, 8],
    mAc: [8, 8],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [6, 6],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [2, 4],
    resist: [2, 4],
};

td.crits.nfirerat = {
    setup: "new",
    name: "Fire Rat",
    type: "rat",
    subtypes: ["minion"],
    resistance: {
        red: 0.5,
    },
    weakness: {
        blue: 10.0 
    },
    moveType: "ground",
    imagePath: "firerat.png",
    tier: 8,
    g: 201,
    life: [500, 500],
    lifeRegen: [ 0, 0],
    pAc: [8, 8],
    mAc: [8, 8],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25 ],
    armorLife: 100,
    // old
    defense: [0,4],
    resist: [10,16],
}

td.crits.nyellowsnake = {
    name: "Yellow Snake",
    type: "snake",
    moveType: "ground",
    imagePath: "snake4.png",
    immune: ["yellow"],
    image: undefined,
    tier: 8,
    g: 210,
    setup: "new",
    subtypes: ["minion"],
    life: [700, 700],
    lifeRegen: [ 0, 0],
    pAc: [8,8],
    mAc: [8,8],
    divineLife: [0, 0],
    shield: [40, 40],
    speed: [6, 6],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [4, 8],
    resist: [4, 8],
};

td.crits.nafrog = {
    name: "Armored Frog",
    type: "frog",
    moveType: "ground",
    imagePath: "afrog.png",
    image: undefined,
    tier: 8,
    g: 210,
    setup: "new",
    subtypes: ["minion"],
    life: [700, 700],
    lifeRegen: [ 0, 0],
    pAc: [8,8],
    mAc: [8,8],
    divineLife: [0, 0],
    shield: [12, 12],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [3, 6],
    resist: [3, 6],
};

td.crits.norc2 = {
    name: "Orc",
    type: "orc",
    moveType: "ground",
    imagePath: "orc2.png",
    image: undefined,
    tier: 8,
    g: 228,
    setup: "new",
    subtypes: ["minion"],
    life: [850, 850],
    lifeRegen: [ 0, 0],
    pAc: [8,8],
    mAc: [8,8],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.50, 0.50 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [10, 16],
    resist: [3, 5],
};

td.crits.ncrab = {
    setup: "new",
    name: "Crab Rat",
    type: "crab",
    subtypes: ["minion"],
    resistance: {
        blue: 0.5,
    },
    weakness: {
        red: 10.0 
    },
    moveType: "ground",
    imagePath: "firerat.png",
    tier: 8,
    g: 237,
    life: [900, 900],
    lifeRegen: [ 0, 0],
    pAc: [8, 8],
    mAc: [8, 8],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [2, 2],
    damage: 1,
    parmor: [ 0.55, 0.55 ],
    marmor: [ 0.25, 0.25 ],
    armorLife: 100,
    // old
    defense: [3,5],
    resist: [3,5],
}

td.crits.nfiend = {
    name: "Fiend",
    type: "fiend",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "fiend.png",
    immune: ["white"],
    image: undefined,
    g: 2500,
    life: [2900, 2900],
    lifeRegen: [ 0, 0],
    pAc: [8, 8],
    mAc: [8, 8],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [2, 2],
    damage: 10,
    parmor: [ 0.55, 0.55 ],
    marmor: [ 0.55, 0.55 ],
    armorLife: 100,
    // old
    defense: [6, 12],
    resist: [6, 12],
};


// t9

td.crits.nbigworm = {
    name: "Big Worm",
    type: "worm",
    moveType: "ground",
    imagePath: "bigworm.png",
    image: undefined,
    tier: 9,
    g: 247,
    setup: "new",
    life: [500, 500],
    lifeRegen: [ 0, 0],
    pAc: [9, 9],
    mAc: [9, 9],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [6, 6],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0, 6],
    resist: [0, 6],
};

td.crits.nghost = {
    name: "Ghost",
    type: "ghost",
    moveType: "air",
    trait: ["invis"],
    imagePath: "ghost.png",
    immune: ["gray", "purple", "transparent"],
    weakness: {
        white: 10
    },
    image: undefined,
    tier: 9,
    g: 257,
    setup: "new",
    life: [850, 850],
    lifeRegen: [ 0, 0],
    pAc: [9, 9],
    mAc: [9, 9],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [4, 4],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.35, 0.35],
    armorLife: 100,
    // old
    defense: [0, 6],
    resist: [12, 18],
};

td.crits.nredsnake = {
    name: "Red Snake",
    type: "snake",
    moveType: "ground",
    imagePath: "snake5.png",
    immune: ["red"],
    image: undefined,
    tier: 9,
    g: 267,
    setup: "new",
    subtypes: ["minion"],
    life: [900, 900],
    lifeRegen: [ 0, 0],
    pAc: [9,9],
    mAc: [9,9],
    divineLife: [0, 0],
    shield: [40, 40],
    speed: [6, 6],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [5, 10],
    resist: [5, 10],
};

td.crits.nheavyord = {
    name: "Heavy Orc",
    type: "orc",
    moveType: "ground",
    imagePath: "heavyorc.png",
    image: undefined,
    tier: 9,
    g: 228,
    setup: "new",
    subtypes: ["minion"],
    life: [950, 950],
    lifeRegen: [ 0, 0],
    pAc: [9,9],
    mAc: [9,9],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.50, 0.50 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [12, 18],
    resist: [3, 6],
};

td.crits.ncentaur = {
    name: "Green Centaur",
    type: "centaur",
    moveType: "ground",
    imagePath: "centaur.png",
    image: undefined,
    tier: 9,
    g: 287,
    setup: "new",
    subtypes: ["minion"],
    life: [1200, 1200],
    lifeRegen: [ 0, 0],
    pAc: [9,9],
    mAc: [9,9],
    divineLife: [0, 0],
    shield: [80, 80],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [2, 4],
    resist: [2, 4],
};

td.crits.ngreenspider = {
    name: "Green Spider",
    type: "spider",
    moveType: "ground",
    imagePath: "spider2.png",
    image: undefined,
    inflict: {
        web: [15, 15]
    },
    reachGoal: {
        poison: [1000, 1]
    },
    tier: 9,
    g: 297,
    setup: "new",
    life: [1250, 1250],
    lifeRegen: [ 0, 0],
    pAc: [6, 6],
    mAc: [6, 6],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [2, 4],
    resist: [2, 4],
};

td.crits.nkingfrog = {
    name: "King Frog",
    type: "frog",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "frogking.png",
    trait: ["invis2"],
    image: undefined,
    reachGoal: {
        poison: [1000, 1]
    },
    g: 5000,
    setup: "new",
    subtypes: ["boss"],
    life: [3000, 3000],
    lifeRegen: [ 0, 0],
    pAc: [9,9],
    mAc: [9,9],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 10,
    parmor: [ 0.50, 0.50 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [12, 18],
    resist: [5, 10],
};

td.crits.nafrogb = {
    name: "Spiked Armored Frog",
    type: "frog",
    moveType: "ground",
    imagePath: "afrog2.png",
    image: undefined,
    tier: 9,
    g: 215,
    setup: "new",
    subtypes: ["minion"],
    life: [750, 750],
    lifeRegen: [ 0, 0],
    pAc: [9,9],
    mAc: [9,9],
    divineLife: [0, 0],
    shield: [12, 12],
    speed: [3, 3],
    damage: 3,
    parmor: [ 0.50, 0.50 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [4, 8],
    resist: [4, 8],
};

// t10

td.crits.nbiggreensnake = {
    name: "Big Green Snake",
    type: "snake",
    moveType: "ground",
    imagePath: "snake6.png",
    immune: ["green"],
    image: undefined,
    tier: 10,
    g: 267,
    setup: "new",
    subtypes: ["minion"],
    life: [1250, 1250],
    lifeRegen: [ 0, 0],
    pAc: [10,10],
    mAc: [10,10],
    divineLife: [0, 0],
    shield: [40, 40],
    speed: [6, 6],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [4, 8],
    resist: [4, 8],
};

td.crits.nbigbluesnake = {
    name: "Big Blue Snake",
    type: "snake",
    moveType: "ground",
    imagePath: "snake6.png",
    immune: ["blue"],
    image: undefined,
    tier: 10,
    g: 267,
    setup: "new",
    subtypes: ["minion"],
    life: [1250, 1250],
    lifeRegen: [ 0, 0],
    pAc: [10,10],
    mAc: [10,10],
    divineLife: [0, 0],
    shield: [40, 40],
    speed: [6, 6],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [4, 8],
    resist: [4, 8],
};

td.crits.nelf3 = {
    name: "Full Armored Elf",
    type: "elf",
    moveType: "ground",
    imagePath: "elf3.png",
    image: undefined,
    tier: 10,
    g: 321,
    setup: "new",
    subtypes: ["minion"],
    life: [1350, 1350],
    lifeRegen: [ 0, 0],
    pAc: [10, 10],
    mAc: [10, 10],
    divineLife: [12, 12],
    shield: [160, 160],
    speed: [4, 4],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.35, 0.35],
    armorLife: 100,
    // old
    defense: [10, 16],
    resist: [6, 10],
};

td.crits.orcchief = {
    name: "Orc Chief",
    type: "orc",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "orcChief.png",
    image: undefined,
    tier: 10,
    g: 333,
    setup: "new",
    life: [1450, 1450],
    lifeRegen: [ 0, 0],
    pAc: [10, 10],
    mAc: [10, 10],
    divineLife: [0, 0],
    shield: [20, 20],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.55, 0.55 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [14, 20],
    resist: [4, 8],
};

td.crits.nredcentaur = {
    name: "Red Centaur",
    type: "centaur",
    moveType: "ground",
    imagePath: "centaur2.png",
    image: undefined,
    tier: 10,
    g: 345,
    setup: "new",
    subtypes: ["minion"],
    life: [1550, 1550],
    lifeRegen: [ 0, 0],
    pAc: [10,10],
    mAc: [10,10],
    divineLife: [0, 0],
    shield: [80, 80],
    speed: [3, 3],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.55, 0.55],
    armorLife: 100,
    // old
    defense: [4, 8],
    resist: [14, 20],
};

td.crits.nmammoth = {
    name: "Mammoth",
    type: "mammoth",
    moveType: "ground",
    imagePath: "mammoth.png",
    image: undefined,
    tier: 10,
    g: 345,
    setup: "new",
    subtypes: ["minion"],
    life: [2000, 2000],
    lifeRegen: [ 0, 0],
    pAc: [10,10],
    mAc: [10,10],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [2, 2],
    damage: 2,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [0, 10],
    resist: [0, 10],
};

td.crits.nmummy = {
    name: "Mummy",
    type: "mummy",
    moveType: "ground",
    imagePath: "mummy.png",
    image: undefined,
    immune: ["poison", "gray", "purple"],
    weakness: {
        red: 5.0,
        white: 12.0
    },
    tier: 10,
    g: 400,
    setup: "new",
    subtypes: ["minion"],
    life: [2500, 2500],
    lifeRegen: [ 0, 0],
    pAc: [10,10],
    mAc: [10,10],
    divineLife: [0, 0],
    shield: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 200,
    // old
    defense: [0, 5],
    resist: [0, 5],
};
 
td.crits.nastatue = {
    name: "Archer Statue",
    type: "statue",
    moveType: "ground",
    imagePath: "bstatue.png",
    trait: ["invis2"],
    subtypes: ["minion"],
    immune: [ 'white'],
    image: undefined,
    tier: 10.5,
    g: 500,
    setup: "new",
    life: [3000, 3000],
    shield: [150, 150],
    lifeRegen: [ 0, 0],
    pAc: [10,10],
    mAc: [10,10],
    divineLife: [0, 0],
    speed: [3, 3],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 200,
    // old
    defense: [16, 22],
    resist: [16, 22],
};

td.crits.npstatue = {
    name: "Priest Statue",
    type: "statue",
    moveType: "ground",
    imagePath: "mstatue.png",
    trait: ["lifey"],
    subtypes: ["minion"],
    immune: [ 'white'],
    tier: 10.5,
    g: 500,
    setup: "new",
    life: [4500, 4500],
    shield: [150, 150],
    lifeRegen: [ 0, 0],
    pAc: [10,10],
    mAc: [10,10],
    divineLife: [0, 0],
    speed: [1, 1],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 200,
    // old
    defense: [16, 22],
    resist: [18, 28],
};

td.crits.nbstatue = {
    name: "Mage Statue",
    type: "statue",
    moveType: "ground",
    imagePath: "bstatue.png",
    image: undefined,
    subtypes: ["minion"],
    immune: [ 'white'],
    tier: 10.5,
    g: 500,
    setup: "new",
    life: [1050, 1050],
    shield: [250, 250],
    lifeRegen: [ 0, 0],
    pAc: [10,10],
    mAc: [10,10],
    divineLife: [0, 0],
    speed: [2, 2],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 200,
    // old
    defense: [16, 22],
    resist: [18, 28],
};

td.crits.nsstatue = {
    name: "Warrior Statue",
    type: "statue",
    moveType: "ground",
    imagePath: "sstatue.png",
    trait: ["hardy"],
    subtypes: ["minion"],
    immune: [ 'white'],

    tier: 10.5,
    g: 500,
    setup: "new",
    life: [5500, 5500],
    shield: [100, 100],
    lifeRegen: [ 0, 0],
    pAc: [10,10],
    mAc: [10,10],
    divineLife: [0, 0],
    speed: [1, 1],
    damage: 1,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 200,
    // old
    defense: [18, 28],
    resist: [16, 22],
};

td.crits.ndstatue = {
    name: "Death Statue",
    type: "statue",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "dstatue.png",
    trait: ["hardy"],
    immune: ["gray"],
    image: undefined,
    setup: "new",
    life: [6000, 6000],
    shield: [180, 180],
    lifeRegen: [ 0, 0],
    pAc: [10,10],
    mAc: [10,10],
    divineLife: [0, 0],
    speed: [1, 1],
    damage: 10,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 200,
    // old
    defense: [45, 45],
    resist: [35, 35],
    g: 10000,
};

td.crits.ncyclops = {
    name: "Cyclops",
    type: "giant",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "cyclops.png",
    image: undefined,
    weakness: {
        wind: 4.0,
        sniper: 1.5,
        eye: 6.0
    },
    immune: ["burn", "poison", "frost", "white"],

    setup: "new",
    g: 20000,
    life: [28000, 28000],
    shield: [0, 0],
    lifeRegen: [ 3, 3],
    pAc: [11,11],
    mAc: [11,11],
    divineLife: [65, 65],
    speed: [1, 1],
    damage: 15,
    parmor: [ 0.75, 0.75 ],
    marmor: [ 0.75, 0.75 ],
    armorLife: 500,
    // old
    defense: [15, 15],
    resist: [15, 15],
};

td.crits.nsnakelord = {
    name: "Snake Lord",
    type: "snake",
    moveType: "ground",
    imagePath: "snake8.png",
    immune: ["red", "yellow", "poison"],
    weakness: {
        blue: 4.0
    },
    image: undefined,
    g: 20000,
    setup: "new",
    subtypes: ["boss"],
    life: [16500, 16500],
    lifeRegen: [ 0, 0],
    pAc: [12,12],
    mAc: [12,12],
    divineLife: [0, 0],
    shield: [240, 240],
    speed: [6, 6],
    damage: 20,
    parmor: [ 0.55, 0.55 ],
    marmor: [ 0.55, 0.55],
    armorLife: 100,
    // old
    defense: [15, 15],
    resist: [15, 15],
};

td.crits.nharpy = {
    name: "Harpy",
    type: "bird",
    subtypes: ["boss"],
    moveType: "air",
    imagePath: "harpy.png",
    image: undefined,
    resistance: {
        wind: 0.5,
        sniper: 0.25,
    },
    weakness: {
        red: 6.0
    },
    inflict: {
        web: [15, 35]
    },
    immune: ["transparent"],

    g: 20000,
    setup: "new",
    subtypes: ["boss"],
    life: [15500, 15500],
    lifeRegen: [ 0, 0],
    pAc: [14,14],
    mAc: [14,14],
    divineLife: [0, 0],
    shield: [240, 240],
    speed: [7, 7],
    damage: 22,
    parmor: [ 0.25, 0.25 ],
    marmor: [ 0.25, 0.25],
    armorLife: 100,
    // old
    defense: [18, 18],
    resist: [18, 18],
};

// ---------------------------------------------------------=============================
//----------------------------------------------------------===============================



// N TIER 3
















// N TIER 4





// OLD

// TIER 1

td.crits.brownrat = {
    name: "brown rat",
    type: "rat",
    moveType: "ground",
    imagePath: "brownrat.png",
    image: undefined,
    g: 2,
    tier: 1,
    lifeRating: 1,
    defenseRating: 0.15,
    resistRating: 0.15,
    shieldRating: 0,
    life: [3, 3],
    speed: [3, 3],
    defense: [0, 0],
    resist: [0, 0],
    ai: undefined
};
td.crits.invisrat = {
    name: "Invis Rat",
    type: "rat",
    moveType: "ground",
    imagePath: "invisrat.png",
    image: undefined,
    trait: ["invis"],
    g: 3,
    tier: 1,
    lifeRating: 1.55,
    defenseRating: 1,
    resistRating: 1,
    shieldRating: 0,
    life: [6, 6],
    speed: [3, 3],
    defense: [0, 0],
    resist: [0, 0],
    ai: undefined
};
td.crits.greensnake = {
    name: "green snake",
    type: "snake",
    moveType: "ground",
    imagePath: "snake.png",
    image: undefined,
    g: 3,
    tier: 1,
    lifeRating: 1,
    defenseRating: 1,
    resistRating: 1,
    shieldRating: 0,
    life: [3, 3],
    speed: [8, 8],
    defense: [0, 0],
    resist: [0, 0],
    ai: undefined
};
td.crits.graybeetle = {
    name: "gray beetle",
    type: "beetle",
    moveType: "ground",
    imagePath: "graybeetle.png",
    image: undefined,
    g: 3,
    tier: 1,
    lifeRating: 2,
    defenseRating: 2,
    resistRating: 1.5,
    shieldRating: 0,
    life: [10, 10],
    speed: [1, 1],
    defense: [2, 2],
    resist: [1, 1],
    ai: undefined
};
td.crits.bat = {
    name: "bat",
    type: "bat",
    moveType: "air",
    imagePath: "bat.png",
    image: undefined,
    g: 3,
    tier: 1,
    lifeRating: 1.5,
    defenseRating: 1,
    resistRating: 1,
    shieldRating: 0,
    life: [5, 5],
    speed: [4, 4],
    defense: [0, 0],
    resist: [0, 0],
    immune: ["transparent"],
    flying: true,
    ai: undefined
};

// TIER 2

td.crits.shieldedrat = {
    name: "Shielded Rat",
    type: "rat",
    moveType: "ground",
    imagePath: "shieldedrat.png",
    image: undefined,
    g: 10,
    tier: 2,
    lifeRating: 1.5,
    defenseRating: 1,
    resistRating: 1,
    shieldRating: 1.5,
    life: [6, 6],
    shield: [12, 12],
    speed: [3, 3],
    defense: [1, 1],
    resist: [1, 1],
    ai: undefined
};
td.crits.frog = {
    name: "Green Frog",
    type: "frog",
    moveType: "ground",
    imagePath: "frog.png",
    image: undefined,
    g: 10,
    tier: 2,
    lifeRating: 1.75,
    defenseRating: 1.25,
    resistRating: 1.5,
    shieldRating: 1,
    life: [8, 8],
    shield: [4, 4],
    speed: [4, 4],
    defense: [2, 2],
    resist: [3, 3],
    ai: undefined
};
td.crits.greenslime = {
    name: "Green Slime",
    type: "slime",
    moveType: "ground",
    imagePath: "greenslime.png",
    image: undefined,
    g: 10,
    tier: 2,
    lifeRating: 3.25,
    defenseRating: 1.5,
    resistRating: 1.25,
    shieldRating: 0.2,
    life: [24, 24],
    shield: [1, 1],
    speed: [3, 3],
    defense: [3, 3],
    resist: [2, 2],
    ai: undefined
};

// TIER 3

td.crits.brownbat = {
    name: "Brown Bat",
    type: "bat",
    moveType: "air",
    imagePath: "brownbat.png",
    image: undefined,
    g: 20,
    tier: 3,
    lifeRating: 4,
    defenseRating: 1,
    resistRating: 1,
    shieldRating: 0,
    life: [28, 28],
    shield: [0, 0],
    speed: [4, 4],
    defense: [2, 2],
    resist: [2, 2],
    immune: ["transparent"],
    ai: undefined
};

td.crits.invisbat = {
    name: "Shielded Invis Bat",
    type: "bat",
    moveType: "air",
    trait: ["invis"],
    imagePath: "invisbat.png",
    image: undefined,
    g: 20,
    tier: 3,
    lifeRating: 3.5,
    defenseRating: 1,
    resistRating: 1,
    shieldRating: .5,
    life: [22, 22],
    shield: [4, 4],
    speed: [4, 4],
    defense: [2, 2],
    resist: [2, 2],
    immune: ["transparent"],
    ai: undefined
};

td.crits.scorpion = {
    name: "Scorpion",
    type: "scorpion",
    moveType: "ground",
    imagePath: "scorpion.png",
    image: undefined,
    g: 20,
    tier: 3,
    lifeRating: .5,
    defenseRating: 3,
    resistRating: 0,
    shieldRating: 3,
    life: [6, 6],
    shield: [40, 40],
    speed: [3, 3],
    defense: [6, 6],
    resist: [-1, -1],
    ai: undefined
};
td.crits.orc = {
    name: "Orc",
    type: "orc",
    moveType: "ground",
    imagePath: "orc.png",
    image: undefined,
    g: 20,
    tier: 3,
    lifeRating: 3.25,
    defenseRating: 2,
    resistRating: 1,
    shieldRating: 0,
    life: [25, 25],
    speed: [3, 3],
    defense: [4, 4],
    resist: [2, 2],
    immune: [ 'white'],
    damage: 2,
    ai: undefined
};
td.crits.elf1 = {
    name: "Elf",
    type: "elf",
    moveType: "ground",
    imagePath: "elf1.png",
    image: undefined,
    g: 20,
    tier: 3,
    lifeRating: 2.5,
    defenseRating: 4,
    resistRating: 2,
    shieldRating: 0.25,
    divineLife: [1, 1],
    life: [18, 18],
    shield: [1, 1],
    speed: [4, 4],
    defense: [7, 7],
    resist: [4, 4],
    immune: [ 'white'],
    ai: undefined
};
td.crits.invisfrog = {
    name: "Green Invis Frog",
    type: "frog",
    moveType: "ground",
    trait: ["invis"],
    imagePath: "invisfrog.png",
    image: undefined,
    g: 20,
    tier: 3,
    lifeRating: 2,
    defenseRating: 1,
    resistRating: 3,
    shieldRating: 0.5,
    life: [12, 12],
    shield: [5, 5],
    speed: [4, 4],
    defense: [2, 2],
    resist: [5, 5],
    ai: undefined
};

td.crits.afrog = {
    name: "Armored Frog",
    type: "frog",
    moveType: "ground",
    imagePath: "afrog.png",
    image: undefined,
    g: 20,
    tier: 3,
    lifeRating: 2.25,
    defenseRating: 3.25,
    resistRating: 3,
    shieldRating: 0.75,
    life: [16, 16],
    shield: [8, 8],
    speed: [4, 4],
    defense: [7, 7],
    resist: [5, 5],
    ai: undefined
};

// TIER 4

td.crits.tankbeetle = {
    name: "tank beetle",
    type: "beetle",
    moveType: "ground",
    imagePath: "tankbeetle.png",
    image: undefined,
    g: 35,
    tier: 4,
    lifeRating: 4.5,
    defenseRating: 5,
    resistRating: 3,
    shieldRating: 0,
    life: [40, 40],
    speed: [1, 1],
    defense: [12, 12],
    resist: [5, 5],
    ai: undefined
};

td.crits.metalslime = {
    name: "Metal Slime",
    type: "slime",
    moveType: "ground",
    imagePath: "metalslime.png",
    image: undefined,
    g: 35,
    tier: 4,
    lifeRating: 4.55,
    defenseRating: 2.75,
    resistRating: 2.25,
    shieldRating: 1,
    life: [48, 48],
    shield: [10, 10],
    speed: [3, 3],
    defense: [5, 5],
    resist: [4, 4],
    ai: undefined
};

td.crits.ghost = {
    name: "Ghost",
    type: "ghost",
    moveType: "air",
    trait: ["invis"],
    imagePath: "ghost.png",
    image: undefined,
    g: 35,
    tier: 4,
    lifeRating: 2,
    defenseRating: 0,
    resistRating: 1,
    shieldRating: 1.25,
    life: [22, 22],
    shield: [15, 15],
    speed: [6, 6],
    defense: [-5, -5],
    resist: [3, 3],
    weakness: {
        white: 10,
    },
    immune: ["gray", "purple", "transparent"],
    ai: undefined
};

td.crits.thief = {
    name: "Thief",
    type: "human",
    moveType: "ground",
    imagePath: "thief.png",
    image: undefined,
    g: 35,
    tier: 4,
    lifeRating: 8,
    weakness: {
        wind: 2.25
    },
    defenseRating: .5,
    resistRating: .5,
    shieldRating: .25,
    life: [142, 142],
    shield: [1, 1],
    speed: [12, 12],
    defense: [3, 3],
    resist: [3, 3],
    damage: 0,
    steal: 400,
    immune: [ 'white'],
    ai: undefined
};

// TODO


td.crits.spider = {
    name: "Spider",
    type: "spider",
    moveType: "ground",
    imagePath: "spider.png",
    image: undefined,
    g: 35,
    tier: 4,
    lifeRating: 4.5,
    defenseRating: 0.5,
    resistRating: 0.5,
    shieldRating: 0,
    life: [42, 42],
    shield: [0, 0],
    speed: [3, 3],
    defense: [3, 3],
    resist: [3, 3],
    damage: 2,
    inflict: {
        "web": [15, 15]
    },
    reachGoal: {
        poison: [1000, 1]
    },
    ai: undefined
};

// TIER 5 

td.crits.graysnake = {
    name: "Gray Snake",
    type: "snake",
    moveType: "ground",
    imagePath: "t5snake.png",
    image: undefined,
    g: 55,  
    tier: 5,
    lifeRating: 28,
    defenseRating: 1,
    resistRating: 1,
    shieldRating: 0,
    life: [300, 300],
    speed: [8, 8],
    defense: [3, 3],
    resist: [3, 3],
    ai: undefined
};

td.crits.merfolk = {
    name: "Merfolk",
    type: "merfolk",
    moveType: "ground",
    trait: ["bubbleArmor"],
    debuff: {
        decay: [99999999, 3],
    },
    immune: ["red"],
    imagePath: "merfolk.png",
    image: undefined,
    g: 55,  
    tier: 5,
    lifeRating: 80,
    defenseRating: 8,
    resistRating: 8,
    shieldRating: 0,
    life: [1500, 1500],
    speed: [4, 4],
    defense: [25, 25],
    resist: [25,25],
    immune: [ 'white'],
    ai: undefined
};

td.crits.butterflygreen = {
    name: "Green Butterfly",
    type: "butterfly",
    moveType: "air",
    immune: ["transparent", "gray", "green"],
    imagePath: "butterfly-green.png",
    image: undefined,
    g: 55,
    tier: 5,
    lifeRating: 20,
    defenseRating: 1,
    resistRating: 2,
    shieldRating: 0,
    life: [250, 250],
    speed: [6, 6],
    defense: [3, 3],
    resist: [6, 6],
    ai: undefined
};

td.crits.butterflyred = {
    name: "Red Butterfly",
    type: "butterfly",
    moveType: "air",
    immune: ["transparent", "gray", "red"],
    imagePath: "butterfly-red.png",
    image: undefined,
    g: 55,
    tier: 5,
    lifeRating: 20,
    defenseRating: 1,
    resistRating: 2,
    shieldRating: 0,
    life: [250, 250],
    speed: [6, 6],
    defense: [3, 3],
    resist: [6, 6],
    ai: undefined
};

td.crits.butterflyyellow = {
    name: "Yellow Butterfly",
    type: "butterfly",
    moveType: "air",
    immune: ["transparent", "gray", "yellow"],
    imagePath: "butterfly-yellow.png",
    image: undefined,
    g: 55,
    tier: 5,
    lifeRating: 20,
    defenseRating: 1,
    resistRating: 2,
    shieldRating: 0,
    life: [250, 250],
    speed: [6, 6],
    defense: [3, 3],
    resist: [6, 6],
    ai: undefined
};

td.crits.slug = {
    name: "Slug",
    type: "slug",
    moveType: "ground",
    imagePath: "slug.png",
    image: undefined,
    buff: {
        "reduced": [99999999, 75]
    },
    g: 55,
    life: [450, 450],
    speed: [2, 2],
    defense: [-5, -5],
    resist: [10, 10],
    ai: undefined
};

td.crits.aorc = {
    name: "Armored Orc",
    type: "orc",
    moveType: "ground",
    imagePath: "orc.png",
    image: undefined,
    g: 55,
    life: [125, 125],
    speed: [3, 3],
    defense: [12, 12],
    resist: [5, 5],
    damage: 2,
    immune: [ 'white'],
    ai: undefined
};

// TIER 6

td.crits.afrogb = {
    name: "Spiked Armored Frog",
    type: "frog",
    moveType: "ground",
    imagePath: "afrog2.png",
    image: undefined,
    g: 75,
    life: [400, 400],
    shield: [16, 16],
    speed: [4, 4],
    defense: [20, 20],
    resist: [18, 18],
    damage: 3,
    ai: undefined
};

td.crits.snowbat = {
    name: "Snow Bat",
    type: "bat",
    moveType: "air",
    imagePath: "snowbat.png",
    image: undefined,
    g: 75,
    life: [350, 350],
    shield: [0, 0],
    speed: [4, 4],
    defense: [9, 9],
    resist: [10, 10],
    immune: ["transparent", "blue"],
    ai: undefined
};

// TIER 7

td.crits.elf2 = {
    name: "Armored Elf",
    type: "elf",
    moveType: "ground",
    imagePath: "elf2.png",
    image: undefined,
    g: 100,
    divineLife: [5, 5],
    life: [500, 500],
    shield: [10, 10],
    speed: [4, 4],
    defense: [12, 12],
    resist: [12, 12],
    immune: [ 'white'],
    ai: undefined
};

td.crits.mummy = {
    name: "Mummy",
    type: "mummy",
    moveType: "ground",
    imagePath: "mummy.png",
    image: undefined,
    immune: ["poison", "gray"],
    resistance: {
        purple: 10.0
    },
    weakness: {
        red: 10.0,
        white: 10.0
    },
    g: 100,
    life: [2500, 2500],
    speed: [3, 3],
    defense: [10, 10],
    resist: [10, 10],
    ai: undefined
};

td.crits.aorcb = {
    name: "Armored Orc",
    type: "orc",
    moveType: "ground",
    imagePath: "aorc2.png",
    image: undefined,
    g: 100,
    life: [425, 425],
    speed: [3, 3],
    defense: [16, 16],
    resist: [8, 8],
    damage: 2,
    immune: [ 'white'],
    ai: undefined
};

// TIER 8

td.crits.astatue = {
    name: "Archer Statue",
    type: "statue",
    moveType: "ground",
    imagePath: "bstatue.png",
    trait: ["invis2"],
    image: undefined,
    g: 125,
    life: [500, 500],
    shield: [15, 15],
    speed: [1, 1],
    defense: [30, 30],
    resist: [22, 22],
    damage: 1,
    immune: [ 'white'],
    ai: undefined
};

td.crits.pstatue = {
    name: "Priest Statue",
    type: "statue",
    moveType: "ground",
    imagePath: "mstatue.png",
    trait: ["lifey"],
    image: undefined,
    g: 125,
    life: [650, 650],
    shield: [15, 15],
    speed: [1, 1],
    defense: [30, 30],
    resist: [22, 22],
    damage: 1,
    immune: [ 'white'],
    ai: undefined
};

td.crits.bstatue = {
    name: "Mage Statue",
    type: "statue",
    moveType: "ground",
    imagePath: "bstatue.png",
    image: undefined,
    g: 125,
    life: [250, 250],
    shield: [25, 25],
    speed: [2, 2],
    defense: [20, 20],
    resist: [28, 28],
    damage: 1,
    immune: [ 'white'],
    ai: undefined
};

td.crits.sstatue = {
    name: "Warrior Statue",
    type: "statue",
    moveType: "ground",
    imagePath: "sstatue.png",
    trait: ["hardy"],
    image: undefined,
    g: 125,
    life: [750, 750],
    shield: [10, 10],
    speed: [1, 1],
    defense: [35, 35],
    resist: [22, 22],
    damage: 2,
    immune: [ 'white'],
    ai: undefined
};

// TIER 1 (Bosses)

td.crits.orge = {
    name: "Orge",
    type: "orge",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "orge.png",
    image: undefined,
    g: 25,
    tier: 1,
    lifeRating: 35,
    defenseRating: 5,
    resistRating: 1.25,
    shieldRating: 0,
    life: [100, 100],
    speed: [2, 2],
    defense: [5, 5],
    resist: [2, 2],
    damage: 5,
    immune: [ 'white'],
    ai: undefined
};

td.crits.fiend = {
    name: "Fiend",
    type: "fiend",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "fiend.png",
    image: undefined,
    g: 25,
    tier: 1,
    lifeRating: 50,
    defenseRating: 8,
    resistRating: 5,
    shieldRating: 0,
    life: [150, 150],
    speed: [3, 3],
    defense: [8, 8],
    resist: [4, 4],
    damage: 5,
    immune: [ 'white'],
    ai: undefined
};

// TIER 2 (bosses)

td.crits.scarecrow = {
    name: "Scarecrow",
    type: "fiend",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "scarecrow.png",
    image: undefined,
    g: 55,
    trait: [
        "speedy",
        "hardy",
        "resisty",
        "lifey",
    ],
    life: [200, 200],
    speed: [1, 1],
    defense: [1, 1],
    resist: [1, 1],
    damage: 5,
    immune: [ 'white'],
    ai: undefined
};

td.crits.orge2 = {
    name: "2headed Orge",
    type: "orge",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "twoheadorge.png",
    image: undefined,
    g: 55,
    life: [1000, 1000],
    speed: [2, 2],
    defense: [10, 10],
    resist: [6, 6],
    damage: 5,
    immune: [ 'white'],
    ai: undefined
};

// TIER 3 (bosses)

td.crits.magegreen = {
    critId: "magegreen",
    name: "Mage Green",
    type: "mage",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "magegreen.png",
    image: undefined,
    g: 55,
    life: [100, 100],
    speed: [3, 3],
    defense: [-1, -1],
    resist: [10, 10],
    immune: ["green", "white"],
    transform: "magered",
    ai: undefined
};
td.crits.magered = {
    critId: "magered",
    name: "Mage Red",
    type: "mage",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "magered.png",
    image: undefined,
    g: 55,
    life: [100, 100],
    speed: [4, 4],
    defense: [-1, -1],
    resist: [4, 4],
    immune: ["red", "white"],
    transform: "magepurple",
    ai: undefined
};
td.crits.magepurple = {
    critId: "magepurple",
    name: "Mage Purple",
    type: "mage",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "magepurple.png",
    image: undefined,
    g: 55,
    life: [200, 200],
    shield: [4, 4],
    speed: [2, 2],
    defense: [-1, -1],
    resist: [4, 4],
    immune: ["purple", "white"],
    transform: "magegold",
    ai: undefined
};
td.crits.magegold = {
    critId: "magegold",
    name: "Mage Gold",
    type: "mage",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "magegold.png",
    image: undefined,
    g: 55,
    life: [400, 400],
    shield: [6, 6],
    speed: [3, 3],
    defense: [-8, -8],
    resist: [6, 6],
    immune: ["yellow", "White"],
    damage: 5,
    ai: undefined
};

// TIER 4 (bosses)

td.crits.kingfrog = {
    name: "King Frog",
    type: "frog",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "frogking.png",
    trait: ["invis2"],
    image: undefined,
    reachGoal: {
        poison: [1000, 1]
    },
    g: 300,
    life: [2000, 2000],
    shield: [16, 16],
    speed: [4, 4],
    defense: [25, 25],
    resist: [25, 25],
    damage: 6,
    ai: undefined
};

td.crits.fiendb = {
    name: "Strong Fiend",
    type: "fiend",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "fiend2.png",
    image: undefined,
    g: 300,
    life: [2000, 2000],
    speed: [3, 3],
    defense: [15, 15],
    resist: [8, 8],
    damage: 6,
    immune: [ 'white'],
    ai: undefined
};

// Tier 5

td.crits.youngmino = {
    name: "Young Minotaur",
    type: "beast",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "mino.png",
    image: undefined,
    immune: ["poison", "burn", "frost"],
    g: 500,
    life: [2200, 2200],
    speed: [3, 3],
    defense: [15, 15],
    flack: [8, 8],
    resist: [8, 8],
    damage: 6,
    immune: [ 'white'],
    ai: undefined
};


// Tier 6 (bosses)

td.crits.orcchief = {
    name: "Orc Chief",
    type: "orc",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "orcChief.png",
    image: undefined,
    g: 1250,
    life: [2750, 2750],
    shield: [38, 38],
    speed: [1, 1],
    defense: [25, 25],
    resist: [9, 9],
    damage: 6,
    immune: [ 'white'],
    ai: undefined
};

td.crits.dstatue = {
    name: "Death Statue",
    type: "statue",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "dstatue.png",
    trait: ["hardy"],
    immune: ["gray"],
    image: undefined,
    g: 1250,
    life: [1750, 1750],
    shield: [18, 18],
    speed: [1, 1],
    defense: [45, 45],
    resist: [35, 35],
    damage: 6,
    ai: undefined
};

// TIER 7 (bosses)

td.crits.cyclops = {
    name: "Cyclops",
    type: "giant",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "cyclops.png",
    image: undefined,
    weakness: {
        wind: 4.0,
        sniper: 1.5,
        eye: 4.0
    },
    immune: ["burn", "poison", "frost", "white"],
    g: 5000,
    flack: [50, 50],
    divineLife: [15, 15],
    life: [2050, 2050],
    speed: [1, 1],
    defense: [15, 15],
    resist: [15, 15],
    damage: 15,
    ai: undefined
};

td.crits.toxicrat = {
    name: "Toxic Rat",
    type: "rat",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "prat.png",
    image: undefined,
    g: 100,
    life: [532, 532],
    shield: [10, 10],
    speed: [4, 4],
    defense: [13, 13],
    resist: [13, 13],
    damage: 5,
    reachGoal: {
        poison: [1000, 2]
    },
    ai: undefined
};

// add ability stun
td.crits.harpy = {
    name: "Harpy",
    type: "bird",
    subtypes: ["boss"],
    moveType: "air",
    imagePath: "harpy.png",
    image: undefined,
    resistance: {
        wind: 0.5,
        sniper: 0.25,
    },
    weakness: {
        red: 6.0
    },
    inflict: {
        "web": [15, 35]
    },
    immune: ["transparent"],
    g: 7500,
    life: [7050, 7050],
    speed: [7, 7],
    defense: [18, 18],
    resist: [18, 18],
    damage: 15,
    ai: undefined
};

td.crits.bmino = {
    name: "Brute Minotaur",
    type: "beast",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "bmino.png",
    image: undefined,
    immune: ["poison", "burn", "frost", "white"],
    g: 12000,
    life: [12200, 12200],
    speed: [3, 3],
    defense: [15, 15],
    flack: [18, 18],
    resist: [18, 18],
    damage: 15,
    ai: undefined
};

td.crits.griffion = {
    name: "Griffion",
    type: "bird",
    subtypes: ["boss"],
    moveType: "air",
    imagePath: "griffion.png",
    image: undefined,
    immune: ["blue"],
    g: 15000,
    life: [22200, 22200],
    speed: [8, 8],
    defense: [35, 35],
    flack: [5, 5],
    resist: [58, 58],
    damage: 15,
    ai: undefined
};

// test

td.crits.q = {
    name: "?",
    type: "?",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "q.png",
    image: undefined,
    g: 0,
    divineLife: [0, 0],
    life: [1, 1],
    shield: [0, 0],
    speed: [0, 0],
    defense: [0, 0],
    resist: [0, 0],
    damage: 0,
    q: true,
    ai: undefined
};

td.crits.divinepaladin = {
    name: "Divine Paladin",
    type: "human",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "divinepaladin.png",
    image: undefined,
    g: 55000,
    divineLife: [25, 25],
    life: [19000, 19000],
    shield: [400, 400],
    speed: [4, 4],
    defense: [70, 70],
    resist: [15, 15],
    damage: 18,
    immune: [ 'white'],
    ai: undefined
};

td.crits.reddragon = {
    name: "Red Dragon",
    type: "dragon",
    subtypes: ["boss"],
    moveType: "ground",
    imagePath: "reddragon.png",
    immune: ["red"],
    image: undefined,
    g: 25000,
    life: [53000, 53000],
    shield: [100, 100],
    speed: [3, 3],
    defense: [62, 62],
    resist: [25, 25],
    damage: 18,
    ai: undefined
};
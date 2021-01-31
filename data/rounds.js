td.messages = {
    
    3: {
        end: [
            `Snakes are coming, I'd recommend wind towers!`
        ]
    },
    5: {
        end: [
            `Beetles! I'd recommend higher damging towers!`
        ]
    },
    7: {
        end: [
            `Flying! Get those Nature or Barbed towers out!`
        ]
    },

    99: {
        end: [
            `I noticed a wooden boss dummy heading your way with his army right in front!`
        ]
    },
    99: {
        end: [
            `Orge incoming boss tower recommended!`
        ]
    }
};

td.tutorialMessages = {
    1: {
        begin: [
             `The Star tower, is great at destorying mass groups of enemies.`,
             `While the Wind towers can pick off the weaker enemies or faster ones`,
             `and the Nature defeats the stronger!`,
         ],
         end: [
             `There are many other towers try them out!`
         ]
     },
     2: {
         end: [
             `Good job! Wait what is that!? Its a boss!`
         ],
         action: ["nextround"]
     },
     3: {
         end: [
             `You've done well.. I'll let you go now! Good luck!`
         ],
         action: [ "newgame", 0 ]
     },
};

td.tutorialRounds = [
    [ // tutorial
        ["nbrownrat", 3, 0, 5000, 0 ]
    ],
    [
        ["nbrownrat", 12, 0, 5000, 0 ]
    ],
    [
        ["ndummy", 1, 0, 5000, 0 ]
    ]
];

td.rounds = [
    [  // 1
        ["nbrownrat", 3, 0, 5000, 0 ]
    ], // 2
    [
        ["nbrownrat", 6, 0, 5000, 0 ]
    ], // 3
    [
        ["nbrownrat", 9, 0, 5000, 0 ]
    ],
    [ // 4
        ["nbrownrat", 3, 0, 5000, 0 ],
        ["ngreensnake", 3, 0, 5000, 0],
    ],
    [ // 5
        ["nbrownrat", 6, 0, 5000, 0 ],
        ["ngreensnake", 4, 0, 5000, 0],
    ],
    [ // 6
        ["nbrownrat", 6, 0, 5000, 0 ],
        ["ngreensnake", 3, 0, 5000, 0],
        ["nbrownbeetle", 3, 0, 5000, 0]
    ], // 7
    [ 
        ["nbrownrat", 9, 0, 5000, 0 ],
        ["ngreensnake", 6, 0, 5000, 0],
        ["nbrownbeetle", 3, 0, 5000, 0]
    ],
    [ // 8
        ["nbrownrat", 6, 0, 5000, 0 ],
        ["nbrownbeetle", 6, 0, 5000, 0],
        ["nbat", 3, 0, 5000, 0],
    ], // 9
    [
        ["nbrownrat", 9, 0, 5000, 0 ],
        ["nbrownbeetle", 6, 0, 5000, 0],
        ["nbat", 3, 0, 5000, 0],
    ],
    [ // 10
        ["nbrownrat", 6, 0, 5000, 0 ],
        ["nbrownbeetle", 6, 0, 5000, 0],
        ["npig", 3, 0, 5000, 0],
    ], // 11
    [
        ["nbrownrat", 6, 0, 5000, 0 ],
        ["nbrownbeetle", 9, 0, 5000, 0],
        ["npig", 3, 0, 5000, 0],
    ],
    [ // 12
        ["ngrass", 25, 0, 2000, 0],
        ["npig", 3, 0, 5000, 0],
    ], // 13
    [
        ["ngrass", 25, 0, 2000, 0],
        ["npig", 8, 0, 5000, 0],
    ],
    [  // 14
        ["ndummy", 1, 0, 5000, 0 ]
    ], // 15 TIER 1 COMPLETE
    [
        ["nbrownrat", 9, 0, 5000, 0 ],
        ["nfrog", 3, 0, 5000, 0],
        ["nbat", 3, 0, 5000, 0],
    ], // 16
    [
        ["ngraygrass", 25, 0, 2000, 0 ],
    ], // 17
    [
        [1, 3],
        ["ngrayrat", 3, 0, 5000, 0 ],
    ], // 18
    [
        [1, 3],
        ["ngrayrat", 6, 0, 5000, 0 ],
    ], // 19
    [
        [1, 3],
        ["ngrayrat", 9, 0, 5000, 0 ],
    ], // 20
    [
        [1, 3],
        ["ngrayrat", 3, 0, 5000, 0 ],
        ["ngraygrass", 3, 0, 5000, 0 ],
    ], // 21
    [
        [1, 3],
        ["nbrownbat", 3, 0, 5000, 0 ],
        ["ngrayrat", 3, 0, 5000, 0 ],
    ], // 22
    [
        [1, 3],
        ["nbrownbat", 6, 0, 5000, 0 ],
        ["ngrayrat", 3, 0, 5000, 0 ],
    ], //  23
    [
        [1, 3],
        ["nmushroom", 3, 0, 5000, 0 ],
        ["ngraybeetle", 3, 0, 5000, 0 ],
    ], //  24
    [
        [1, 3],
        ["nmushroom", 6, 0, 5000, 0 ],
        ["ngraybeetle", 6, 0, 5000, 0 ],
    ], //  25
    [
        [1, 3],
        ["nfrog", 3, 0, 5000, 0 ],
        ["ngrayrat", 3, 0, 5000, 0 ],
    ], //  26
    [
        [1, 3],
        ["nfrog", 3, 0, 5000, 0 ],
        ["ngrayrat", 6, 0, 5000, 0 ],
    ], // 27
    [
        ["ngraygrass", 3, 0, 5000, 0 ],
        ["ngrayrat", 3, 0, 5000, 0 ],
        ["nbrownbat", 3, 0, 5000, 0 ],
        ["nmushroom", 3, 0, 5000, 0 ],
        ["ngraybeetle", 3, 0, 5000, 0 ],
        ["nfrog", 3, 0, 5000, 0 ],
    ], // 28 (BOSS) TIER 2 COMPLETE
    [
        ["nwoodendummy", 1, 0, 5000, 0 ],
    ], // 29
    [
        [2, 3],
        ["ndarkgrayrat", 3, 0, 2000, 0 ],
    ], // 30
    [
        [2, 3],
        ["ndarkgrayrat", 9, 0, 2000, 0 ],
    ], //  31
    [
        [2, 3],
        ["nbee", 3, 0, 5000, 0 ],
    ], //  32
    [
        [2, 3],
        ["nbee", 9, 0, 5000, 0 ],
    ], // 33
    [
        [2, 3],
        ["nbee", 3, 0, 5000, 0 ],
        ["ndarkgrayrat", 3, 0, 5000, 0 ],
    ], // 34
    [
        [2, 3],
        ["nbee", 6, 0, 5000, 0 ],
        ["ndarkgrayrat", 6, 0, 5000, 0 ],
    ], // 35
    [
        [2, 3],
        ["ngreenslime", 3, 0, 5000, 0 ],
        ["ndarkgrayrat", 3, 0, 5000, 0 ],
    ], // 36
    [
        [2, 3],
        ["ngreenslime", 6, 0, 5000, 0 ],
        ["ndarkgrayrat", 6, 0, 5000, 0 ],
    ], // 37
    [
        [2, 3],
        ["nredmushroom", 3, 0, 5000, 0 ],
        ["norc", 3, 0, 5000, 0 ],
    ], // 38
    [
        [2, 3],
        ["nredmushroom", 6, 0, 5000, 0 ],
        ["norc", 6, 0, 5000, 0 ],
    ], // 39
    [
        [2, 3],
        ["nscorpion", 3, 0, 5000, 0 ],
        ["ndarkgrayrat", 3, 0, 5000, 0 ],
    ], // 40
    [
        [2, 3],
        ["nscorpion", 6, 0, 5000, 0 ],
        ["ndarkgrayrat", 6, 0, 5000, 0 ],
    ], // 41
    [
        ["nbee", 3, 0, 5000, 0 ],
        ["ndarkgrayrat", 3, 0, 5000, 0 ],
        ["ngreenslime", 3, 0, 5000, 0 ],
        ["nredmushroom", 3, 0, 5000, 0 ],
        ["norc", 3, 0, 5000, 0 ],
        ["nscorpion", 3, 0, 5000, 0 ],
    ], // 42
    [
        ["norge", 1, 0, 5000, 0 ],
    ], // 43 TIER 3 COMPLETE
    [
        [3, 3],
        ["nprat", 3, 0, 2000, 0 ],
    ], // 44
    [
        [3, 3],
        ["nprat", 6, 0, 2000, 0 ],
    ], // 45
    [
        [3, 3],
        ["nredbee", 3, 0, 5000, 0 ],
    ], // 46
    [
        [3, 3],
        ["nredbee", 6, 0, 5000, 0 ],
    ], // 47
    [
        [3, 3],
        ["nredbee", 3, 0, 5000, 0 ],
        ["nprat", 3, 0, 5000, 0 ],
    ], // 48
    [
        [3, 3],
        ["nredbee", 6, 0, 5000, 0 ],
        ["nprat", 6, 0, 5000, 0 ],
    ], // 49
    [
        [3, 3],
        ["nthief", 3, 0, 5000, 0 ],
        ["nprat", 3, 0, 5000, 0 ],
    ], // 50
    [
        [3, 3],
        ["nthief", 6, 0, 5000, 0 ],
        ["nprat", 6, 0, 5000, 0 ],
    ], // 51
    [
        [3, 3],
        ["nelf1", 3, 0, 5000, 0 ],
        ["nmoth", 3, 0, 5000, 0 ],
    ], // 52
    [
        [3, 3],
        ["nelf1", 6, 0, 5000, 0 ],
        ["nmoth", 6, 0, 5000, 0 ],
    ],  // 53
    [
        [3, 3],
        ["ninvisfrog", 3, 0, 5000, 0 ],
        ["nprat", 3, 0, 5000, 0 ],
    ],  // 54
    [
        [3, 3],
        ["ninvisfrog", 6, 0, 5000, 0 ],
        ["nprat", 6, 0, 5000, 0 ],
    ], // 55
    [
        ["nprat", 3, 0, 5000, 0 ],
        ["nredbee", 3, 0, 5000, 0 ],
        ["nthief", 3, 0, 5000, 0 ],
        ["nelf1", 3, 0, 5000, 0 ],
        ["nmoth", 3, 0, 5000, 0 ],
        ["ninvisfrog", 3, 0, 5000, 0 ],
    ], // 56
    [
        ["nscarecrow", 1, 0, 5000, 0 ],
    ], // 57 ---------------------------------------------------------------------------
    [
        [4, 3],
        ["ninvisrat", 3, 0, 2000, 0 ],
    ], // 58
    [
        [4, 3],
        ["ngraysnake", 3, 0, 5000, 0 ],
    ], // 59
    [
        [4, 3],
        ["ngraysnake", 3, 0, 5000, 0 ],
        ["ninvisrat", 3, 0, 5000, 0 ],
    ], // 60
    [
        [4, 3],
        ["nmerfolk", 3, 0, 5000, 0 ],
        ["ninvisrat", 3, 0, 5000, 0 ],
    ], // 61
    [
        [4, 3],
        ["nbutterflygreen", 2, 0, 5000, 0 ],
        ["nbutterflyred", 2, 0, 5000, 0 ],
        ["nbutterflyyellow", 2, 0, 5000, 0 ],
        ["nmetalslime", 3, 0, 5000, 0 ],
    ], //  62
    [
        [4, 3],
        ["nshieldedrat", 3, 0, 5000, 0 ],
        ["ninvisrat", 3, 0, 5000, 0 ],
    ], // 63
    [
        ["ninvisrat", 3, 0, 5000, 0 ],
        ["ngraysnake", 3, 0, 5000, 0 ],
        ["nmerfolk", 3, 0, 5000, 0 ],
        ["nbutterflygreen", 2, 0, 5000, 0 ],
        ["nbutterflyred", 2, 0, 5000, 0 ],
        ["nbutterflyyellow", 2, 0, 5000, 0 ],
        ["nmetalslime", 3, 0, 5000, 0 ],
        ["nshieldedrat", 3, 0, 5000, 0 ],
    ], // 64
    [
        ["nmudman", 1, 0, 5000, 0 ],
    ],
    [ // 65
        [5, 3],
        [6, 3]
    ],
    [ // 66
        [5, 6],
        [6, 6]
    ],
    [ // 67
        [5, 9],
        [6, 9]
    ],
    [ // 68
        [5, 12],
        [6, 9]
    ],
    [ // 69
        ["nrainbowbat", 1, 0, 0, 0]
    ],
    [ // 70
        [6, 3],
        [7, 3]
    ],
    [ // 71
        [6, 6],
        [7, 6]
    ],
    [ // 72
        [6, 9],
        [7, 9]
    ],
    [ // 73
        [6, 12],
        [7, 9]
    ],
    [ // 74
        ["nmagegreen", 1, 0, 0, 0]
    ],
    [ // 75
        [7, 3],
        [8, 3]
    ],
    [ // 76
        [7, 6],
        [8, 6]
    ],
    [ // 77
        [7, 9],
        [8, 9]
    ],
    [ // 78
        [7, 12],
        [8, 9]
    ],
    [ // 79
        ["nfiend", 1, 0, 0, 0]
    ],
    [ // 80
        [8, 3],
        [9, 3]
    ],
    [ // 81
        [8, 6],
        [9, 6]
    ],
    [ // 82
        [8, 9],
        [9, 9]
    ],
    [ // 83
        [8, 12],
        [9, 9]
    ],
    [ // 84
        ["nafrog", 5, 0, 2000, 0],
        ["nafrogb", 5, 0, 2000, 0],
        ["nkingfrog", 1, 0, 0, 0]
    ],
    [ // 85
        [9, 3],
        [10, 3]
    ],
    [ // 86
        [9, 6],
        [10, 6]
    ],
    [ // 87
        [9, 9],
        [10, 9]
    ],
    [ // 88
        [9, 12],
        [10, 9]
    ],
    [ // 89
        ["nmummy", 35, 0, 5000, 0]
    ],
    [ // 90
        ["nastatue", 2, 0, 5000, 0],
        ["npstatue", 2, 0, 5000, 0],
        ['nbstatue', 2, 0, 5000, 0],
        ["nsstatue", 2, 0, 5000, 0],
        ["ndstatue", 1, 1000, 0, 0],
    ],
    [ // 91
        ["ncyclops", 1, 0, 0, 0, 0],
        ["nsnakelord", 1, 0, 0, 1, 1],
        ["nharpy", 1, 0, 0, 2, 2],
    ]
];
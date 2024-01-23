/**Class icons */
import BB from '../../classes/BloodBerzerker.png'
import SB from '../../classes/ShipBreaker.png'
import BC from '../../classes/Bubo.png'
import DK from '../../classes/DivineKnight.png'
import ES from '../../classes/ElementalSorcerer.png'
import BM from '../../classes/BeastMaster.png'
import VW from '../../classes/VoidWalker.png'

/**Activity icons */
import Combat from '../../activity/Combat.png'

/**Cards */
import CardsA6 from '../../cards/CardsA6.png'
import CardsA8 from '../../cards/CardsA8.png'
import CardsA16 from '../../cards/CardsA16.png'
import CardsB4 from '../../cards/CardsB4.png'
import CardsB5 from '../../cards/CardsB5.png'
import CardsB8 from '../../cards/CardsB8.png'
import CardsE0 from '../../cards/CardsE0.png'
import CardsE1 from '../../cards/CardsE1.png'
import CardsE3 from '../../cards/CardsE3.png'
import CardsE5 from '../../cards/CardsE5.png'
import CardsG9 from '../../cards/CardsG9.png'
import CardsG11 from '../../cards/CardsG11.png'
import CardsG13 from '../../cards/CardsG13.png'
import CardsH3 from '../../cards/CardsH3.png'
import CardsH7 from '../../cards/CardsH7.png'
import CardsZ2 from '../../cards/CardsZ2.png'
import CardsZ11 from '../../cards/CardsZ11.png'
import CardsZ16 from '../../cards/CardsZ16.png'

/**Prayer icons */
import Prayer9 from '../../worshipSouls/Prayer9.png'
import Prayer5 from '../../worshipSouls/Prayer5.png'
import Prayer1 from '../../worshipSouls/Prayer1.png'

export default [
    {
        id: 0,
        player: "Divinerid",
        class: BB,
        level: 305,
        currentXp: 260000000000,
        nextLevelXp: 510000000000,
        activityIcon: Combat,
        activityText: "Fighting",
        activityTarget: "Fire Spirit",
        portalCurrent: 1920000,
        portalCap: 3000000,
        signs: [
            {
                number: 0,
                description: "+10% Defence",
            },
            {
                number: 1,
                description: "+10% Accuracy",
            },
        ],
        awayHours: 7,
        awayMinutes: 18,
        awaySeconds: 41,
        strength: 5101,
        agility: 1416,
        wisdom: 1492,
        luck: 1280,
        crystalSpawn: "1 in 350",
        doubleXP: 34.7,
        monsterCash: 1040,
        chargeRate: 86,
        money: {
            starfire: 1,
            lustre: 43,
            void: 14,
            dementia: 53,
            platinum: 71,
            gold: 24,
            silver: 12,
            copper: 91,
        },
        cards: [
            {image: CardsZ2},
            {image: CardsZ16},
            {image: CardsZ11},
            {image: CardsG13},
            {image: CardsG11},
            {image: CardsE1},
            {image: CardsB8},
            {image: CardsA8},
        ],
        cardSet: "24% Skill Efficiency",
        activePrayers: [
            {
                icon: Prayer9
            },
            {
                icon: Prayer5
            },
            {
                icon: Prayer1
            },
        ],
    },
    {
        id: 1,
        player: "Divinerid2",
        class: SB,
        level: 310,
        currentXp: 130000000000,
        nextLevelXp: 550000000000,
        activityIcon: Combat,
        activityText: "Fighting",
        activityTarget: "Fire Spirit",
        portalCurrent: 0,
        portalCap: 3000000,
        signs: [
            {
                number: 0,
                description: "+4% Accuracy | +2% Movement Speed | +1 Cant Trade GME",
            },
            {
                number: 1,
                description: "+6% Defence | +2 Weapon Power",
            },
        ],
        awayHours: 7,
        awayMinutes: 20,
        awaySeconds: 34,
        strength: 1568,
        agility: 4023,
        wisdom: 1388,
        luck: 1307,
        crystalSpawn: "1 in 350",
        doubleXP: 61,
        monsterCash: 793,
        chargeRate: 84,
        money: {
            starfire: 0,
            lustre: 97,
            void: 61,
            dementia: 85,
            platinum: 71,
            gold: 24,
            silver: 12,
            copper: 91,
        },
        cards: [
                {image: CardsG13},
                {image: CardsG9},
                {image: CardsE3},
                {image: CardsZ11},
                {image: CardsB4},
                {image: CardsA6},
                {image: CardsZ2},
                {image: CardsZ16},
        ],
        cardSet: "12% Dmg, Drop, and EXP",
        activePrayers: [
            {
                icon: Prayer9
            },
            {
                icon: Prayer5
            },
            {
                icon: Prayer1
            },
        ],
    },
    {
        id: 2,
        player: "Divinerid3",
        class: BC,
        level: 321,
        currentXp: 930000000000,
        nextLevelXp: 630000000000,
        activityIcon: Combat,
        activityText: "Fighting",
        activityTarget: "Clammie",
        portalCurrent: 21700000,
        portalCap: 190000,
        signs: [
            {
                number: 0,
                description: "+1% All Stat i.e. STR/AGI/WIS/LUK",
            },
            {
                number: 1,
                description: "+20% Total Damage | -12% Movement Speed",
            },
            {
                number: 1,
                description: "+6% Total Damage",
            },
        ],
        awayHours: 3,
        awayMinutes: 29,
        awaySeconds: 16,
        strength: 1756,
        agility: 1704,
        wisdom: 4677,
        luck: 1313,
        crystalSpawn: "1 in 350",
        doubleXP: 39.7,
        monsterCash: 1710,
        chargeRate: 86,
        money: {
            starfire: 9,
            lustre: 33,
            void: 72,
            dementia: 85,
            platinum: 71,
            gold: 24,
            silver: 12,
            copper: 91,
        },
        cards: [
                {image: CardsH7},
                {image: CardsH3},
                {image: CardsE5},
                {image: CardsB5},
                {image: CardsE0},
                {image: CardsA16},
                {image: CardsZ16},
        ],
        cardSet: "12% Dmg, Drop, and EXP",
        activePrayers: [
            {
                icon: Prayer9
            },
            {
                icon: Prayer5
            },
            {
                icon: Prayer1
            },
        ],
    },
    {
        id: 3,
        player: "Divinerid4",
        class: DK,
        level: 382,
        currentXp: 260000000000,
        nextLevelXp: 510000000000,
        activityIcon: Combat,
        activityText: "Fighting",
        activityTarget: "Clammie",
        portalCurrent: 1920000,
        portalCap: 3000000,
        signs: [
            {
                number: 0,
                description: "+10% Defence",
            },
            {
                number: 1,
                description: "+10% Accuracy",
            },
        ],
        awayHours: 7,
        awayMinutes: 18,
        awaySeconds: 41,
        strength: 5101,
        agility: 1416,
        wisdom: 1492,
        luck: 1280,
        crystalSpawn: "1 in 350",
        doubleXP: 34.7,
        monsterCash: 1040,
        chargeRate: 86,
        money: {
            starfire: 1,
            lustre: 43,
            void: 14,
            dementia: 53,
            platinum: 71,
            gold: 24,
            silver: 12,
            copper: 91,
        },
        cards: [
            {image: CardsZ2},
            {image: CardsZ16},
            {image: CardsZ11},
            {image: CardsG13},
            {image: CardsG11},
            {image: CardsE1},
            {image: CardsB8},
            {image: CardsA8},
        ],
        cardSet: "24% Skill Efficiency",
        activePrayers: [
            {
                icon: Prayer9
            },
            {
                icon: Prayer5
            },
            {
                icon: Prayer1
            },
        ],
    },
    {
        id: 4,
        player: "Divinerid5",
        class: ES,
        level: 358,
        currentXp: 130000000000,
        nextLevelXp: 550000000000,
        activityIcon: Combat,
        activityText: "Fighting",
        activityTarget: "Fire Spirit",
        portalCurrent: 0,
        portalCap: 3000000,
        signs: [
            {
                number: 0,
                description: "+4% Accuracy | +2% Movement Speed | +1 Cant Trade GME",
            },
            {
                number: 1,
                description: "+6% Defence | +2 Weapon Power",
            },
        ],
        awayHours: 7,
        awayMinutes: 20,
        awaySeconds: 34,
        strength: 1568,
        agility: 4023,
        wisdom: 1388,
        luck: 1307,
        crystalSpawn: "1 in 350",
        doubleXP: 61,
        monsterCash: 793,
        chargeRate: 84,
        money: {
            starfire: 0,
            lustre: 97,
            void: 61,
            dementia: 85,
            platinum: 71,
            gold: 24,
            silver: 12,
            copper: 91,
        },
        cards: [
                {image: CardsG13},
                {image: CardsG9},
                {image: CardsE3},
                {image: CardsZ11},
                {image: CardsB4},
                {image: CardsA6},
                {image: CardsZ2},
                {image: CardsZ16},
        ],
        cardSet: "12% Dmg, Drop, and EXP",
        activePrayers: [
            {
                icon: Prayer9
            },
            {
                icon: Prayer5
            },
            {
                icon: Prayer1
            },
        ],
    },
    {
        id: 5,
        player: "Divinerid6",
        class: BM,
        level: 331,
        currentXp: 930000000000,
        nextLevelXp: 630000000000,
        activityIcon: Combat,
        activityText: "Fighting",
        activityTarget: "Clammie",
        portalCurrent: 21700000,
        portalCap: 190000,
        signs: [
            {
                number: 0,
                description: "+1% All Stat i.e. STR/AGI/WIS/LUK",
            },
            {
                number: 1,
                description: "+20% Total Damage | -12% Movement Speed",
            },
            {
                number: 1,
                description: "+6% Total Damage",
            },
        ],
        awayHours: 3,
        awayMinutes: 29,
        awaySeconds: 16,
        strength: 1756,
        agility: 1704,
        wisdom: 4677,
        luck: 1313,
        crystalSpawn: "1 in 350",
        doubleXP: 39.7,
        monsterCash: 1710,
        chargeRate: 86,
        money: {
            starfire: 9,
            lustre: 33,
            void: 72,
            dementia: 85,
            platinum: 71,
            gold: 24,
            silver: 12,
            copper: 91,
        },
        cards: [
                {image: CardsH7},
                {image: CardsH3},
                {image: CardsE5},
                {image: CardsB5},
                {image: CardsE0},
                {image: CardsA16},
                {image: CardsZ16},
        ],
        cardSet: "12% Dmg, Drop, and EXP",
        activePrayers: [
            {
                icon: Prayer9
            },
            {
                icon: Prayer5
            },
            {
                icon: Prayer1
            },
        ],
    },
    {
        id: 6,
        player: "Divinerid7",
        class: DK,
        level: 321,
        currentXp: 260000000000,
        nextLevelXp: 510000000000,
        activityIcon: Combat,
        activityText: "Fighting",
        activityTarget: "Fire Spirit",
        portalCurrent: 1920000,
        portalCap: 3000000,
        signs: [
            {
                number: 0,
                description: "+10% Defence",
            },
            {
                number: 1,
                description: "+10% Accuracy",
            },
        ],
        awayHours: 7,
        awayMinutes: 18,
        awaySeconds: 41,
        strength: 5101,
        agility: 1416,
        wisdom: 1492,
        luck: 1280,
        crystalSpawn: "1 in 350",
        doubleXP: 34.7,
        monsterCash: 1040,
        chargeRate: 86,
        money: {
            starfire: 1,
            lustre: 43,
            void: 14,
            dementia: 53,
            platinum: 71,
            gold: 24,
            silver: 12,
            copper: 91,
        },
        cards: [
            {image: CardsZ2},
            {image: CardsZ16},
            {image: CardsZ11},
            {image: CardsG13},
            {image: CardsG11},
            {image: CardsE1},
            {image: CardsB8},
            {image: CardsA8},
        ],
        cardSet: "24% Skill Efficiency",
        activePrayers: [
            {
                icon: Prayer9
            },
            {
                icon: Prayer5
            },
            {
                icon: Prayer1
            },
        ],
    },
    {
        id: 7,
        player: "Divinerid8",
        class: ES,
        level: 325,
        currentXp: 130000000000,
        nextLevelXp: 550000000000,
        activityIcon: Combat,
        activityText: "Fighting",
        activityTarget: "Fire Spirit",
        portalCurrent: 0,
        portalCap: 3000000,
        signs: [
            {
                number: 0,
                description: "+4% Accuracy | +2% Movement Speed | +1 Cant Trade GME",
            },
            {
                number: 1,
                description: "+6% Defence | +2 Weapon Power",
            },
        ],
        awayHours: 7,
        awayMinutes: 20,
        awaySeconds: 34,
        strength: 1568,
        agility: 4023,
        wisdom: 1388,
        luck: 1307,
        crystalSpawn: "1 in 350",
        doubleXP: 61,
        monsterCash: 793,
        chargeRate: 84,
        money: {
            starfire: 0,
            lustre: 97,
            void: 61,
            dementia: 85,
            platinum: 71,
            gold: 24,
            silver: 12,
            copper: 91,
        },
        cards: [
                {image: CardsG13},
                {image: CardsG9},
                {image: CardsE3},
                {image: CardsZ11},
                {image: CardsB4},
                {image: CardsA6},
                {image: CardsZ2},
                {image: CardsZ16},
        ],
        cardSet: "12% Dmg, Drop, and EXP",
        activePrayers: [
            {
                icon: Prayer9
            },
            {
                icon: Prayer5
            },
            {
                icon: Prayer1
            },
        ],
    },
    {
        id: 9,
        player: "Divinerid10",
        class: SB,
        level: 322,
        currentXp: 930000000000,
        nextLevelXp: 630000000000,
        activityIcon: Combat,
        activityText: "Fighting",
        activityTarget: "Clammie",
        portalCurrent: 21700000,
        portalCap: 190000,
        signs: [
            {
                number: 0,
                description: "+1% All Stat i.e. STR/AGI/WIS/LUK",
            },
            {
                number: 1,
                description: "+20% Total Damage | -12% Movement Speed",
            },
            {
                number: 1,
                description: "+6% Total Damage",
            },
        ],
        awayHours: 3,
        awayMinutes: 29,
        awaySeconds: 16,
        strength: 1756,
        agility: 1704,
        wisdom: 4677,
        luck: 1313,
        crystalSpawn: "1 in 350",
        doubleXP: 39.7,
        monsterCash: 1710,
        chargeRate: 86,
        money: {
            starfire: 9,
            lustre: 33,
            void: 72,
            dementia: 85,
            platinum: 71,
            gold: 24,
            silver: 12,
            copper: 91,
        },
        cards: [
                {image: CardsH7},
                {image: CardsH3},
                {image: CardsE5},
                {image: CardsB5},
                {image: CardsE0},
                {image: CardsA16},
                {image: CardsZ16},
        ],
        cardSet: "12% Dmg, Drop, and EXP",
        activePrayers: [
            {
                icon: Prayer9
            },
            {
                icon: Prayer5
            },
            {
                icon: Prayer1
            },
        ],
    },
    {
        id: 8,
        player: "Divinerid9",
        class: VW,
        level: 322,
        currentXp: 930000000000,
        nextLevelXp: 630000000000,
        activityIcon: Combat,
        activityText: "Fighting",
        activityTarget: "Clammie",
        portalCurrent: 21700000,
        portalCap: 190000,
        signs: [
            {
                number: 0,
                description: "+1% All Stat i.e. STR/AGI/WIS/LUK",
            },
            {
                number: 1,
                description: "+20% Total Damage | -12% Movement Speed",
            },
            {
                number: 1,
                description: "+6% Total Damage",
            },
        ],
        awayHours: 3,
        awayMinutes: 29,
        awaySeconds: 16,
        strength: 1756,
        agility: 1704,
        wisdom: 4677,
        luck: 1313,
        crystalSpawn: "1 in 350",
        doubleXP: 39.7,
        monsterCash: 1710,
        chargeRate: 86,
        money: {
            starfire: 9,
            lustre: 33,
            void: 72,
            dementia: 85,
            platinum: 71,
            gold: 24,
            silver: 12,
            copper: 91,
        },
        cards: [
                {image: CardsH7},
                {image: CardsH3},
                {image: CardsE5},
                {image: CardsB5},
                {image: CardsE0},
                {image: CardsA16},
                {image: CardsZ16},
        ],
        cardSet: "12% Dmg, Drop, and EXP",
        activePrayers: [
            {
                icon: Prayer9
            },
            {
                icon: Prayer5
            },
            {
                icon: Prayer1
            },
        ],
    },
]
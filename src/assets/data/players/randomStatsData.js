/**Class icons */
import BB from '../../classes/BloodBerzerker.png'
import SB from '../../classes/ShipBreaker.png'

/**Activity icons */
import Combat from '../../activity/Combat.png'

/**Cards */
import CardsZ2 from '../../cards/CardsZ2.png'
import CardsZ16 from '../../cards/CardsZ16.png'
import CardsZ11 from '../../cards/CardsZ11.png'
import CardsG13 from '../../cards/CardsG13.png'
import CardsG11 from '../../cards/CardsG11.png'
import CardsE1 from '../../cards/CardsE1.png'
import CardsB8 from '../../cards/CardsB8.png'
import CardsA8 from '../../cards/CardsA8.png'

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
                {image: CardsZ2},
                {image: CardsZ16},
                {image: CardsZ11},
                {image: CardsG13},
                {image: CardsG11},
                {image: CardsE1},
                {image: CardsB8},
                {image: CardsA8},
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
//Salt images
import Salt1 from '../salts/Salt1.png'
import Salt2 from '../salts/Salt2.png'
import Salt3 from '../salts/Salt3.png'
import Salt4 from '../salts/Salt4.png'
import Salt5 from '../salts/Salt5.png'
import Salt6 from '../salts/Salt6.png'

//Monster material images
import Grasslands1 from '../monsterMats/Grasslands1.png'
import Forest3 from '../monsterMats/Forest3.png'
import DesertA1 from '../monsterMats/DesertA1.png'
import SnowA1 from '../monsterMats/SnowA1.png'
import SnowB4 from '../monsterMats/SnowB4.png'
import SnowC4 from '../monsterMats/SnowC4.png'

//Ore images
import CopperOre from '../ores/CopperOre.png'
import VoidBar from '../ore-bars/VoidBar.png'

//Log images
import ForestLogs from '../logs/ForestTree.png'
import Tree7 from '../logs/Tree7.png'

//Fish images
import Fish1 from '../fishes/Fish1.png'
import Fish4 from '../fishes/Fish4.png'

//Insect images
import Bug1 from '../catching/Bug1.png'
import Bug3 from '../catching/Bug3.png'
import Bug6 from '../catching/Bug6.png'

//Soul images
import Soul2 from '../worshipSouls/Soul2.png'
import Soul4 from '../worshipSouls/Soul4.png'

//Trapping images
import Critter3 from '../trappingCritters/Critter3.png'
import Critter4 from '../trappingCritters/Critter4.png'

export default [
    {
        id: 1,
        icon: Salt1,
        rank: 19,
        timeToRankUp: [16, 15, 15],
        currentPower: 230940,
        maxPower: 700000,
        autoRefine: 0,
        fuel: [360, 15, 29],
        costPerHourArray: [
            {
                material: Grasslands1,
                amount: 22200
            },
            {
                material: CopperOre,
                amount: 11100
            },
        ],
        costToRankUp: [[8550000, 186000000], [4280000, 931000000]]
    },
    {
        id: 2,
        icon: Salt2,
        rank: 12,
        timeToRankUp: [2, 4, 34],
        currentPower: 45450,
        maxPower: 80000,
        autoRefine: 10,
        fuel: [12, 7, 36],
        costPerHourArray: [
            {
                material: Forest3,
                amount: 11100
            },
            {
                material: ForestLogs,
                amount: 5540
            },
            {
                material: Salt1,
                amount: 1350
            },
        ],
        costToRankUp: [[567000, 8310000], [284000, 2660000], [69100, 387000]]
    },
    {
        id: 3,
        icon: Salt3,
        rank: 8,
        timeToRankUp: [2, 6, 55],
        currentPower: 9772,
        maxPower: 30000,
        autoRefine: 10,
        fuel: [1, 17, 20],
        costPerHourArray: [
            {
                material: DesertA1,
                amount: 29700
            },
            {
                material: Fish1,
                amount: 17900
            },
            {
                material: Bug1,
                amount: 23800
            },
            {
                material: Salt2,
                amount: 756
            },
        ],
        costToRankUp: [[1590000, 7230000], [954000, 20200000], [1280000, 430000000], [40500, 30600]]
    },
    {
        id: 4,
        icon: Salt4,
        rank: 12,
        timeToRankUp: [23, 39, 25],
        currentPower: 76125,
        maxPower: 80000,
        autoRefine: 0,
        fuel: [14, 19, 30],
        costPerHourArray: [
            {
                material: SnowA1,
                amount: 2870
            },
            {
                material: Soul2,
                amount: 574
            },
            {
                material: Critter3,
                amount: 287
            },
            {
                material: Salt3,
                amount: 175
            },
        ],
        costToRankUp: [[63600, 3790000], [12800, 191000], [6360, 373000], [3880, 88100]]
    },
    {
        id: 5,
        icon: Salt5,
        rank: 8,
        timeToRankUp: [2, 6, 55],
        currentPower: 0,
        maxPower: 30000,
        autoRefine: 10,
        fuel: [0, 0, 0],
        costPerHourArray: [
            {
                material: SnowB4,
                amount: 3850
            },
            {
                material: Fish4,
                amount: 770
            },
            {
                material: Bug3,
                amount: 770
            },
            {
                material: Critter4,
                amount: 770
            },
            {
                material: Salt4,
                amount: 196
            },
        ],
        costToRankUp: [[1180000, 59500000], [236000, 1560000], [236000, 13000000], [236000, 61300], [60100, 1]]
    },
    {
        id: 6,
        icon: Salt6,
        rank: 4,
        timeToRankUp: [2, 6, 55],
        currentPower: 264,
        maxPower: 30000,
        autoRefine: 10,
        fuel: [0, 0, 0],
        costPerHourArray: [
            {
                material: SnowC4,
                amount: 2800
            },
            {
                material: VoidBar,
                amount: 280
            },
            {
                material: Tree7,
                amount: 280
            },
            {
                material: Bug6,
                amount: 280
            },
            {
                material: Soul4,
                amount: 280
            },
            {
                material: Salt5,
                amount: 84
            },
        ],
        costToRankUp: [[183000, 10800000], [18300, 30], [18300, 21600000], [18300, 1420000], [18300, 194000], [5480, 36400]]
    },
]
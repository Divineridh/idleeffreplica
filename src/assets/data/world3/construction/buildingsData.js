import Building1 from '../../../buildings/Building1.png';
import Building2 from '../../../buildings/Building2.png';
import Building3 from '../../../buildings/Building3.png';
import Building4 from '../../../buildings/Building4.png';
import Building5 from '../../../buildings/Building5.png';
import Building6 from '../../../buildings/Building6.png';
import Building7 from '../../../buildings/Building7.png';
import Building8 from '../../../buildings/Building8.png';
import Building9 from '../../../buildings/Building9.png';

import Salt1 from '../../../salts/Salt1.png';

export default [
    {
        id: 1,
        name: '3D Printer',
        icon: Building1,
        currentLevel: 10,
        maxLevel: 10,
        currentBuild: 10,
        buildReq: 10,
        nextLevel: [
            {
                material: Salt1,
                cost: 0,
            }
        ],
        costsToMaxLevel: [0],
    },
    {
        id: 2,
        name: 'Talent Book Library',
        icon: Building2,
        currentLevel: 58,
        maxLevel: 101,
        currentBuild: 0,
        buildReq: 2960000,
        nextLevel: [
            {
                material: Salt1,
                cost: 109,
            },
            {
                material: Salt1,
                cost: 28000,
            },
        ],
        costsToMaxLevel: [6380, 8490000],
    },
    {
        id: 3,
        name: 'Death Note',
        icon: Building3,
        currentLevel: 51,
        maxLevel: 51,
        currentBuild: 10,
        buildReq: 10,
        nextLevel: [
            {
                material: Salt1,
                cost: 0,
            },
        ],
        costsToMaxLevel: [0],
    },
    {
        id: 4,
        name: 'Salt Lick',
        icon: Building4,
        currentLevel: 10,
        maxLevel: 10,
        currentBuild: 10,
        buildReq: 10,
        nextLevel: [
            {
                material: Salt1,
                cost: 0,
            },
        ],
        costsToMaxLevel: [0],
    },
    {
        id: 5,
        name: 'Chest Space',
        icon: Building5,
        currentLevel: 25,
        maxLevel: 25,
        currentBuild: 10,
        buildReq: 10,
        nextLevel: [
            {
                material: Salt1,
                cost: 0,
            },
        ],
        costsToMaxLevel: [0],
    },
    {
        id: 6,
        name: 'Cost Cruncher',
        icon: Building6,
        currentLevel: 60,
        maxLevel: 60,
        currentBuild: 10,
        buildReq: 10,
        nextLevel: [
            {
                material: Salt1,
                cost: 0,
            },
        ],
        costsToMaxLevel: [0],
    },
    {
        id: 7,
        name: 'Trapper Drone',
        icon: Building7,
        currentLevel: 10,
        maxLevel: 15,
        currentBuild: 10,
        buildReq: 10,
        nextLevel: [
            {
                material: Salt1,
                cost: 102,
            },
            {
                material: Salt1,
                cost: 63,
            },
        ],
        costsToMaxLevel: [602, 478],
    },
    {
        id: 8,
        name: 'Automation Arm',
        icon: Building8,
        currentLevel: 5,
        maxLevel: 5,
        currentBuild: 10,
        buildReq: 10,
        nextLevel: [
            {
                material: Salt1,
                cost: 0,
            },
        ],
        costsToMaxLevel: [0],
    },
    {
        id: 9,
        name: 'Atom Collider',
        icon: Building9,
        currentLevel: 1,
        maxLevel: 200,
        currentBuild: 0,
        buildReq: 57000000,
        nextLevel: [
            {
                material: Salt1,
                cost: 6,
            },
            {
                material: Salt1,
                cost: 9,
            },
        ],
        costsToMaxLevel: [62300, 3629000000],
    },
]
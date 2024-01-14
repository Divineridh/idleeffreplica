import PetUpgrade0 from '../../../breeding/PetUpgrade0.png'
import PetUpgrade1 from '../../../breeding/PetUpgrade1.png'
import PetUpgrade2 from '../../../breeding/PetUpgrade2.png'
import PetUpgrade3 from '../../../breeding/PetUpgrade3.png'
import PetUpgrade4 from '../../../breeding/PetUpgrade4.png'
import PetUpgrade5 from '../../../breeding/PetUpgrade5.png'
import PetUpgrade6 from '../../../breeding/PetUpgrade6.png'
import PetUpgrade7 from '../../../breeding/PetUpgrade7.png'
import PetUpgrade8 from '../../../breeding/PetUpgrade8.png'
import PetUpgrade9 from '../../../breeding/PetUpgrade9.png'
import PetUpgrade10 from '../../../breeding/PetUpgrade10.png'
import PetDeadCell from '../../../breeding/PetDeadCell.png'
import Meal1 from '../../../cooking/Meal1.png'
import Meal4 from '../../../cooking/Meal4.png'
import Meal7 from '../../../cooking/Meal7.png'
import Meal12 from '../../../cooking/Meal12.png'
import Meal15 from '../../../cooking/Meal15.png'
import Meal21 from '../../../cooking/Meal21.png'
import Meal26 from '../../../cooking/Meal26.png'
import Meal31 from '../../../cooking/Meal31.png'
import Meal36 from '../../../cooking/Meal36.png'
import Meal41 from '../../../cooking/Meal41.png'
import Meal46 from '../../../cooking/Meal46.png'

export default [
    {
        id: 0,
        icon: "",
        name: "No Upgrade Selected",
        bonus: "",
        level: 13,
        maxLevel: 100,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 228,
                currentlyHave: true,
            },
        ]
    },
    {
        id: 1,
        icon: PetUpgrade0,
        name: "Genetic Splicing",
        bonus: "-52% Gene Boost Cost",
        level: 13,
        maxLevel: 20,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 289,
                currentlyHave: true,
            },
            {
                icon: Meal1,
                amount: 6260000,
                currentlyHave: true,
            },
        ]
    },
    {
        id: 2,
        icon: PetUpgrade1,
        name: "Egg Capacity",
        bonus: "+4 Egg Max",
        level: 4,
        maxLevel: 5,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 506,
                currentlyHave: false,
            },
            {
                icon: Meal4,
                amount: 5000000000,
                currentlyHave: true,
            },
        ]
    },
    {
        id: 3,
        icon: PetUpgrade2,
        name: "Breedability Pulse",
        bonus: "+125% Breedability Spd",
        level: 5,
        maxLevel: 10,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 457,
                currentlyHave: false,
            },
            {
                icon: Meal7,
                amount: 1010000,
                currentlyHave: true,
            },
        ]
    },
    {
        id: 4,
        icon: PetUpgrade3,
        name: "Fence Extension",
        bonus: "+7 Fenceyard Slots",
        level: 7,
        maxLevel: 10,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 678,
                currentlyHave: false,
            },
            {
                icon: Meal12,
                amount: 1320000,
                currentlyHave: true,
            },
        ]
    },
    {
        id: 5,
        icon: PetUpgrade4,
        name: "Rarity of the Egg",
        bonus: "2.25x Chance",
        level: 5,
        maxLevel: 10,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 640,
                currentlyHave: false,
            },
            {
                icon: Meal15,
                amount: 3550000,
                currentlyHave: true,
            },
        ]
    },
    {
        id: 6,
        icon: PetUpgrade5,
        name: "Blooming Axe",
        bonus: "18% Fight Contribution",
        level: 3,
        maxLevel: 10,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 312,
                currentlyHave: true,
            },
            {
                icon: Meal21,
                amount: 40000,
                currentlyHave: true,
            },
        ]
    },
    {
        id: 7,
        icon: PetUpgrade6,
        name: "Pastpresent Brood",
        bonus: "1.6x Bigger Multi",
        level: 4,
        maxLevel: 5,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 1480,
                currentlyHave: false,
            },
            {
                icon: Meal26,
                amount: 15000000000,
                currentlyHave: false,
            },
        ]
    },
    {
        id: 8,
        icon: PetUpgrade7,
        name: "Paint Bucket",
        bonus: "+9% Base Shiny Chance",
        level: 4,
        maxLevel: 100,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 303,
                currentlyHave: true,
            },
            {
                icon: Meal31,
                amount: 166,
                currentlyHave: true,
            },
        ]
    },
    {
        id: 9,
        icon: PetUpgrade8,
        name: "Overwhelmed Golden Egg",
        bonus: "1.06x Multiplier every 100 Upg",
        level: 3,
        maxLevel: 20,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 901,
                currentlyHave: false,
            },
            {
                icon: Meal36,
                amount: 5000,
                currentlyHave: true,
            },
        ]
    },
    {
        id: 10,
        icon: PetUpgrade9,
        name: "Failsafe Restitution Cloud",
        bonus: "0 Maximum Times",
        level: 0,
        maxLevel: 25,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 60,
                currentlyHave: true,
            },
            {
                icon: Meal41,
                amount: 10,
                currentlyHave: false,
            },
        ]
    },
    {
        id: 11,
        icon: PetUpgrade10,
        name: "Shattershell Iteration",
        bonus: "0% Chance",
        level: 0,
        maxLevel: 10,
        upgradeCosts: [
            {
                icon: PetDeadCell,
                amount: 65,
                currentlyHave: true,
            },
            {
                icon: Meal46,
                amount: 10,
                currentlyHave: false,
            },
        ]
    },
]
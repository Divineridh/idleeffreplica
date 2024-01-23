import Atom1 from '../../../particles/Atom1.png'
import Atom2 from '../../../particles/Atom2.png'
import Atom3 from '../../../particles/Atom3.png'
import Atom4 from '../../../particles/Atom4.png'
import Atom5 from '../../../particles/Atom5.png'
import Atom6 from '../../../particles/Atom6.png'

export default [
    {
        id: 1,
        icon: Atom1,
        name: 'Hydrogen - Stamp Decreaser',
        bonus: "Every day you log in, the resource cost to upgrade a stamp's max lv decreases by 6% up to a max of 90%. This reduction resets back to 0% when upgrading any stamp max lv.",
        currentLevel: 6,
        maxLevel: 20,
        nextLevelCost: 39,
        costToMax: 17300
    },
    {
        id: 2,
        icon: Atom2,
        name: 'Helium - Talen Power Stacker',
        bonus: "All talents that give more bonus per 'Power of 10 resources you own' will count +2 more powers of 10 than you actually own when giving the bonus.",
        currentLevel: 2,
        maxLevel: 20,
        nextLevelCost: 825,
        costToMax: 920000000
    },
    {
        id: 3,
        icon: Atom3,
        name: 'Lithium - Bubble Insta Expander',
        bonus: "No Bubble Left Behind bonus now has a 15% chance to level up the lowest bubble out of ALL bubbles, not just the first 15 of each colour. Also, +5% chance to give +1 additional Lv.",
        currentLevel: 5,
        maxLevel: 20,
        nextLevelCost: 189,
        costToMax: 49900
    },
    {
        id: 4,
        icon: Atom4,
        name: 'Beryllium - Post Office Penner',
        bonus: "Every day, 1 silver pen will instantly convert into 1 PO Box for all characters. This conversion happens 3 times per day.",
        currentLevel: 3,
        maxLevel: 20,
        nextLevelCost: 222,
        costToMax: 122000
    },
    {
        id: 5,
        icon: Atom5,
        name: 'Boron - Particle Upgrader',
        bonus: "When a bubble has a cost of 100M or more to upgrade, you can instead spend particles. However, you can only do this 2 times a day, after which the cost will return to resources.",
        currentLevel: 1,
        maxLevel: 20,
        nextLevelCost: 277,
        costToMax: 1600000
    },
    {
        id: 6,
        icon: Atom6,
        name: 'Carbon - Wizard Maximizer',
        bonus: "All wizard towers in construction get +2 max levels. Also, all wizards get a +2% damage bonus for each wizard tower level above 50 in construction. Total bonus: 0% wizard dmg.",
        currentLevel: 1,
        maxLevel: 20,
        nextLevelCost: 786,
        costToMax: 1580000
    },
]
import obolsAlert from '../../alerts/obolsAlert.png'
import cardsAlert from '../../alerts/cardsAlert.png'
import craniumAlert from '../../alerts/craniumAlert.png'
import anvilAlert from '../../alerts/anvilAlert.png'
import refineryAlert from '../../alerts/refineryAlert.png'
import worshipAlert from '../../alerts/worshipAlert.png'
import printerAlert from '../../alerts/printerAlert.png'

export default [
    {
        id: 0,
        icon: obolsAlert,
        title: "Empty obol slots",
        description: "14 empty slots",
    },
    {
        id: 1,
        icon: cardsAlert,
        title: "Bad card set",
        description: "Currently equipped card set isn't optimal",
    },
    {
        id: 2,
        icon: craniumAlert,
        title: "Cranium Cooking is ready",
        description: "Skill is ready to be used",
    },
    {
        id: 3,
        icon: anvilAlert,
        title: "Anvil issues",
        description: "Production is at capacity, go collect!",
    },
    {
        id: 4,
        icon: refineryAlert,
        title: "Refinery Throttle is ready",
        description: "Skill is ready to be used",
    },
    {
        id: 5,
        icon: worshipAlert,
        title: "Worship is full",
        description: "Worship charge is being wasted",
    },
    {
        id: 6,
        icon: printerAlert,
        title: "Printer Go Brrr is ready",
        description: "Skill is ready to be used",
    },
]
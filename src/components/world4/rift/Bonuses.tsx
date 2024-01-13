import riftBonusesData from '../../../assets/data/world4/rift/riftBonusesData'
import BonusCard from './BonusCard'

const bonusItems = riftBonusesData.map(bonus => {
    return (
        <BonusCard 
            key={bonus.id}
            {...bonus}
        />
    )
})

function Bonuses() {
    return (
        <div className="grid grid-cols-4 gap-3 mr-20">
            {bonusItems}
        </div>
    )
}

export default Bonuses
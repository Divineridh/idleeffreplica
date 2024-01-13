import skillMasteryData from '../../../assets/data/world4/rift/skillMasteryData'
import SkillMasteryCard from './SkillMasteryCard'

const masteryItems = skillMasteryData.map(item => {
    return (
        <SkillMasteryCard 
            key={item.id}
            {...item}
        />
    )
})

function SkillMastery() {
    return (
        <div className="grid grid-cols-4 gap-3 mr-20">
            {masteryItems}
        </div>
    )
}  

export default SkillMastery
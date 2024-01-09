import alignmentData from '../../../assets/data/alignmentData'
import AlignmentCard from './AlignmentCard'

const alignmentItems = alignmentData.map(item => {
    return (
        <AlignmentCard 
            key={item.id}
            {...item}
        />
    )
})

function Alignment() {
    return (
        <div className="flex flex-row flex-wrap gap-6 h-full">
            {alignmentItems}
        </div>
    )
}

export default Alignment
import overviewData from '../../../assets/data/world5/sailing/overviewData'
import OverviewCard from './OverviewCard'

const overviewItems = overviewData.map(item => {
    return (
        <OverviewCard 
            key={item.id}
            {...item}
        />
    )
})

function Overview() {
    return (
        <div className="flex flex-col">
            <span className="text-xs">* Boat values are shown ignoring captain traits, to allow comparing them without captain influence.</span>
            <div className="flex flex-col gap-2 mt-1">
                {overviewItems}
            </div>
        </div>
    )
}

export default Overview
import boatsData from '../../../assets/data/boatsData'
import BoatCard from './BoatCard'

const boatItems = boatsData.map(boat => {
    return (
        <BoatCard 
            key={boat.id}
            {...boat}
        />
    )
})

function Boats() {
    return (
        <div className="flex flex-col gap-6">
            <div className="text-xs">* Ship speed and loot upgrades hit milestones every 7 and 8 levels respectively. Hover over the boats to see progress and total cost to next milestone.</div>
            <div className="flex flex-row gap-3 flex-wrap">
                {boatItems}
            </div>
        </div>
    )
}

export default Boats
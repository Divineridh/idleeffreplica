import islandsData from '../../../assets/data/world5/sailing/islandsData'
import IslandCard from './IslandCard'

const islandItems = islandsData.map(island => {
    return (
        <IslandCard 
            key={island.id}
            {...island}
        />
    )
})

function Islands() {
    return (
        <div className="flex flex-row gap-3 flex-wrap">
            {islandItems}
        </div>
    )
}

export default Islands
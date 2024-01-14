import territoryData from '../../../assets/data/world4/breeding/territoryData.js'
import TerritoryCard from './TerritoryCard'

const territoryItems = territoryData.map(item => {
    return (
        <TerritoryCard 
            key={item.id}
            {...item}
        />
    )
})

function Territory() {
    return (
        <div className="flex flex-col gap-6">
            {territoryItems}
        </div>
    )
}

export default Territory
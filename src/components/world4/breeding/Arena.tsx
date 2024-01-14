import arenaData from '../../../assets/data/world4/breeding/arenaData'
import ArenaCard from './ArenaCard'

const arenaItems = arenaData.map(item => {
    return (
        <ArenaCard 
            key={item.id}
            {...item}
        />
    )
})

function Arena() {
    return (
        <div className="flex flex-col px-8">
            <div className="text-sm text-gray-300">Max Arena Wave</div>
            <div className="text-lg">151</div>
            <div className="grid grid-cols-4 gap-3 mt-2">
                {arenaItems}
            </div>
        </div>
    )
}

export default Arena
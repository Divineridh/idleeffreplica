import ShrinesData from '../../../../assets/data/shrinesData'
import ShrineCard from './ShrineCard'

const shrineItems = ShrinesData.map(shrine => {
    return (
        <ShrineCard 
            key={shrine.id}
            {...shrine}
        />
    )
})

function Shrines () {
    return (
        <div className="flex flex-col p-6">
            <div className="flex flex-col">
                <span className="text-sm text-gray-400">Total Levels</span>
                <span className="text-lg">126</span>
            </div>
            <div className="flex flex-col gap-3 mt-4">
                {shrineItems}
            </div>
        </div>
    )
}

export default Shrines
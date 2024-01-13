import trappingData from '../../../assets/data/world3/trapping/trappingData'
import TrapCard from './TrapCard'

const trapItems = trappingData.map(trap => {
    return (
        <TrapCard 
            key={trap.id}
            {...trap}
        />
    )
})

function Trapping() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl ml-2">Trapping</h1>
            <div className="flex flex-col">
                {trapItems}
            </div>
        </div>
    )
}

export default Trapping
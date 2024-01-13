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

import { Divider } from '@nextui-org/react'

function Trapping() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl ml-2">Traps</h1>
            <div className="flex flex-col gap-3 bg-zinc-800 p-16 mt-8">
                <div className="flex flex-row gap-3">
                    <div className="text-sm w-24">Player Name</div>
                    <div className="text-sm w-24">Box Set</div>
                    <div className="text-sm">Traps</div>
                </div>
                <Divider className="bg-gray-400" />
                {trapItems}
            </div>
        </div>
    )
}

export default Trapping
import totemsData from '../../../assets/data/world3/worship/totemsData'
import TotemCard from './TotemCard'

const totemItems = totemsData.map(totem => {
    return (
        <TotemCard 
            key={totem.id}
            {...totem}
        />
    )
})

import { Input } from '@nextui-org/react'

function Totems() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-6">
                <div className="flex flex-col gap-1">
                    <div className="text-sm text-gray-300">Worship Efficiency</div>
                    <Input 
                        type="number" 
                        variant="bordered" 
                        size="sm" 
                        placeholder="1"
                        classNames={{
                            input: "placeholder: text-white"
                        }}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-sm text-gray-300">Worship food effect</div>
                    <Input 
                        type="number" 
                        variant="bordered" 
                        size="sm" 
                        placeholder="0"
                        classNames={{
                            input: "placeholder: text-white"
                        }}
                    />
                </div>
            </div>
            <div className="text-xs mt-6">* Base XP is assuming multiplier of 1x.</div>
            <div className="text-xs">* You need a minimum efficiency of 60, 250, 1000, 3000, 8000, and 25000 on the respective totems to get bonus souls.</div>
            <div className="grid grid-cols-2 gap-4">
                {totemItems}
            </div>
        </div>
    )
}

export default Totems
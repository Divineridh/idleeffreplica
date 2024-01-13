import chargeData from '../../../assets/data/world3/worship/chargeData'
import ChargeCard from './ChargeCard'
import ES from '../../../assets/classes/ElementalSorcerer.png'

const chargeItems = chargeData.map(item => {
    return (
        <ChargeCard 
            key={item.id}
            {...item}
        />
    )
})

import { Image, Progress } from '@nextui-org/react'

function Charge() {
    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col w-[792px]">
                <div className="text-xs">* This is ignoring the wizard's charge, since you can just .. use it.</div>
                <div className="flex flex-row p-4 pt-6 bg-zinc-800 justify-around">
                    <div className="flex flex-col">
                        <div className="text-sm text-gray-300">Best Wizard</div>
                        <div className="flex flex-row items-center gap-3">
                            <Image width={30} src={ES} />
                            <div className="text-lg">Divinerid5</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-sm text-gray-300">Charge with Charge Syphon</div>
                        <div className="flex flex-row gap-2 items-center">
                            <Progress 
                                radius="none"
                                size="lg"
                                value={5100}
                                maxValue={5656}
                            />
                            <div className="text-lg">5656</div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-sm text-gray-300">Total Charge Rate</div>
                        <div className="text-lg">816% / day</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-sm text-gray-300">Time till overflow</div>
                        <div className="flex flex-row gap-1">
                            <div className="flex flex-col items-center">
                                <div className="text-lg">09</div>
                                <div className="text-xs text-gray-300">HRS</div>
                            </div>
                            <div className="text-lg">:</div>
                            <div className="flex flex-col items-center">
                                <div className="text-lg">55</div>
                                <div className="text-xs text-gray-300">MIN</div>
                            </div>
                            <div className="text-lg">:</div>
                            <div className="flex flex-col items-center">
                                <div className="text-lg">23</div>
                                <div className="text-xs text-gray-300">SEC</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-2">
                {chargeItems}
            </div>
        </div>
    )
}

export default Charge
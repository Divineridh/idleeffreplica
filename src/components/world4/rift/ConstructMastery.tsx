import { Image } from '@nextui-org/react'

import Shrine3 from '../../../assets/shrines/Shrine3.png'

function ConstructMastery() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-6">
                <div className="bg-zinc-800 flex flex-col p-2 gap-1 shadow-2xl">
                    <div className="text-sm text-gray-300">Next Unlock</div>
                    <div className="text-2xl">750</div>
                </div>
                <div className="bg-zinc-800 flex flex-col p-2 gap-1 shadow-2xl">
                    <div className="text-sm text-gray-300">Total building level</div>
                    <div className="text-2xl">726</div>
                </div>
                <div className="bg-zinc-800 flex flex-col p-2 gap-1 shadow-2xl">
                    <div className="text-sm text-gray-300">Fastest to Level</div>
                    <div className="flex flex-row">
                        <Image width={30} src={Shrine3} />
                        <div className="text-lg">Crystal Shrine</div>
                    </div>
                </div>
                <div className="bg-zinc-800 flex flex-col p-2 gap-1 shadow-2xl">
                    <div className="text-sm text-gray-300">Refinery Speed</div>
                    <div className="text-2xl">0%</div>
                </div>
            </div>
            <div className="p-3 flex flex-col gap-2 text-sm bg-zinc-800 w-72">
                <div>+1% REFINERY SPD PER 10 TOT LV</div>
                <div>+35 MAX LV FOR TRAPPER DRONE</div>
                <div>+2% DMG PER 10 TOT LV OVER 750</div>
                <div>+100 MAX LV FOR TALENT LIBRARY</div>
                <div>+5% BUILD SPD PER TOT LV OVER 1250</div>
                <div>+100 MAX LV FOR ALL SHRINES</div>
                <div>+30 MAX LV FOR ALL WIZARD TOWERS</div>
            </div>
        </div>
    )
}

export default ConstructMastery
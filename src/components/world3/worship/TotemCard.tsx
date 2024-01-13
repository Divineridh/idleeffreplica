interface propTypes {
    icon: string,
    name: string,
    area: string,
    maxWave: number,
    xpPerCharge: number,
    souls: number,
}

import { Image } from '@nextui-org/react'

function TotemCard(props: propTypes) {
    return (
        <div className="flex flex-row justify-around w-[624px] shadow-2xl bg-zinc-800 p-6">
            <div className="flex flex-row gap-1">
                <Image width={40} src={props.icon} />
                <div className="flex flex-col w-24">
                    <div className="text-sm text-gray-300">Name</div>
                    <div className="text-lg">{props.name}</div>
                </div>
            </div>
            <div className="flex flex-col w-24">
                <div className="text-sm text-gray-300">Area</div>
                <div className="text-lg">{props.area}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-sm text-gray-300">Max Wave</div>
                <div className="text-lg">{props.maxWave}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-sm text-gray-300">XP Per Charge</div>
                <div className="text-lg">{props.xpPerCharge}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-sm text-gray-300">Souls</div>
                <div className="text-lg">{props.souls}</div>
            </div>
        </div>
    )
}

export default TotemCard
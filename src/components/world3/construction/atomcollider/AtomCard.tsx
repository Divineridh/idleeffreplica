interface propTypes {
    icon: string,
    name: string,
    bonus: string,
    currentLevel: number,
    maxLevel: number,
    nextLevelCost: number,
    costToMax: number
}

import { Image } from '@nextui-org/react'

function AtomCard(props: propTypes) {
    return (
        <div className="flex flex-row bg-zinc-800 p-6 pr-20 gap-4 justify-around shadow-lg">
            <Image 
                width={50}
                src={props.icon}
            />
            <div className="flex flex-col w-56">
                <span className="text-xs text-gray-400">Name</span>
                <span className="text-sm">{props.name}</span>
            </div>
            <div className="flex flex-col w-[400px]">
                <span className="text-xs text-gray-400">Bonus</span>
                <span className="text-xs">{props.bonus}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-gray-400">Level</span>
                <span className="text-sm">{props.currentLevel + ' / ' + props.maxLevel}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-gray-400">Next level cost</span>
                <span className="text-sm">{props.nextLevelCost}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-gray-400">Cost to max</span>
                <span className="text-sm">{props.costToMax > 999999 ? props.costToMax/1000000 + 'M' : props.costToMax > 999 ? props.costToMax/1000 + 'K' : props.costToMax}</span>
            </div>
        </div>
    )
}

export default AtomCard
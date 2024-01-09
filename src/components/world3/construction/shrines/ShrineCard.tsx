interface propTypes {
    icon: string,
    name: string,
    level: number,
    currentMap: string,
    currentHours: number,
    nextLevelHours: number,
    bonus: string,
}

import { Image } from '@nextui-org/react'

function ShrineCard(props: propTypes) {
    return (
        <div className="flex flex-col gap-2 bg-zinc-800 p-6">
            <div className="flex flex-row gap-2 items-center">
                <Image 
                    width={30} 
                    src={props.icon}
                />
                <span className="text-sm">{props.name}</span>
            </div>
            <div className="flex flex-row justify-between mt-4 pb-5">
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-400">Level</span>
                    <span className="text-sm">{props.level}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-400">Current Map</span>
                    <span className="text-sm">{props.currentMap}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-400">Hours</span>
                    <span className="text-sm">{props.currentHours > 999 ? props.currentHours/1000 + 'K/' + props.nextLevelHours/1000 +'K' : props.currentHours + props.nextLevelHours/1000 + 'K'}</span>
                </div>
                <div className="flex flex-col gap-1 w-60 mr-8">
                    <span className="text-sm text-gray-400">Bonus</span>
                    <span className="text-xs">{props.bonus}</span>
                </div>
            </div>
        </div>
    )
}

export default ShrineCard
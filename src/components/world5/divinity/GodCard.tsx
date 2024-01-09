interface propTypes {
    icon: string,
    name: string, 
    linkBonus: string, 
    minorLinkBonus: string, 
    blessingLevel: number, 
    blessingBonus: string,
}

import {Image} from '@nextui-org/react'

function GodCard(props: propTypes) {
    return (
        <div className="flex flex-row justify-between p-6 bg-zinc-800 shadow-lg">
            <div className="flex flex-row gap-2 items-center w-64">
                <Image 
                    width={60}
                    src={props.icon}
                />
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Name</span>
                    <span className="text-sm">{props.name}</span>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-64">
                <span className="text-sm text-gray-300">Link Bonus</span>
                <span className="text-sm">{props.linkBonus}</span>
            </div>
            <div className="flex flex-col gap-2 w-64 ml-2">
                <span className="text-sm text-gray-300">Minor Link Bonus</span>
                <span className="text-sm">{props.minorLinkBonus}</span>
            </div>
            <div className="flex flex-col gap-2 w-64">
                <span className="text-sm text-gray-300">Blessing Level</span>
                <span className="text-sm">{props.blessingLevel + '/100'}</span>
            </div>
            <div className="flex flex-col gap-2 w-64">
                <span className="text-sm text-gray-300">Blessing Bonus</span>
                <span className="text-sm">{props.blessingBonus}</span>
            </div>
        </div>
    )
}

export default GodCard
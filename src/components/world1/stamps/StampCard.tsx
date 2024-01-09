import { Image, Tooltip } from '@nextui-org/react'

interface propTypes {
    icon: string,
    currentLevel: number,
    name: string,
    currentMax: number,
}

function StampCard(props: propTypes) {
    return (
        <div className="flex flex-row border border-gray-700 h-12 w-24">
            <Tooltip content={
                <div className="flex flex-row bg-neutral-100 gap-1">
                    <span className="text-neutral-800">{props.name}</span>
                    <span className="text-neutral-800">({props.currentLevel}/{props.currentMax})</span>
                </div>
            }>
                <div className="flex flex-row items-center w-24 gap-5">
                    <Image 
                        width={28}
                        src={props.icon}
                        className="ml-3"
                    />
                    <span className="text-sm">{props.currentLevel}</span>
                </div>
            </Tooltip>
        </div>
    )
}

export default StampCard
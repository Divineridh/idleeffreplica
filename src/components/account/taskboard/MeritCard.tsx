import { Image } from '@nextui-org/react'

interface propTypes {
    world: string,
    icon: string,
    description: string,
    currentLevel: number,
    maxLevel: number,
}

function MeritCard(props: propTypes) {
    return (
        <div className="flex flex-col p-4 bg-zinc-800 w-[425px] gap-4">
            <div className="flex flex-row">
                <Image width={60} src={props.icon} />
                <div className="text-sm mx-6">{props.description}</div>
            </div>
            <div className="flex flex-row gap-6">
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Current Level</div>
                    <div className="text-lg">{props.currentLevel}</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Max Level</div>
                    <div className="text-lg">{props.maxLevel}</div>
                </div>
            </div>
        </div>
    )
}

export default MeritCard
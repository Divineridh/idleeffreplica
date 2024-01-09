import { Image } from '@nextui-org/react'

interface propTypes {
    icon: string,
    name: string,
    description: string,
    currentProgress: number,
    maxProgress: number
}

function Sigil(props: propTypes) {
    return (
        <div className="flex flex-col gap-6 bg-neutral-800 p-4">
            <Image radius="none" width={36} src={props.icon} className="" />
            <div className="flex flex-row gap-6">
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Name</span>
                    <span className="text-xs text-gray-300">{props.name}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Description</span>
                    <span className="text-xs text-gray-300">{props.description}</span>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-300">Progress</span>
                <span className="text-xs text-gray-300">{props.currentProgress === props.maxProgress ? 'Maxed' : (props.currentProgress > 999 ? props.currentProgress/1000 + 'K' : props.currentProgress) + '/' + (props.maxProgress > 999 ? props.maxProgress/1000 + 'K' : props.maxProgress)}</span>
            </div>
        </div>
    )
}

export default Sigil
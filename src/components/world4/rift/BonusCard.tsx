interface propTypes {
    icon: string,
    name: string,
    unlockLevel: number,
    bonus: string,
    unlocked: boolean,
}
import { Image } from '@nextui-org/react'

function BonusCard(props: propTypes) {
    return (
        <div className={`flex flex-col p-3 bg-zinc-800 w-80 h-52 shadow-2xl" ${props.unlocked === false ? "brightness-50" : ""}`}>
            <div className="flex flex-row gap-3 items-center">
                <Image width={30} src={props.icon} />
                <div className="text-lg">{props.name}</div>
            </div>
            <div className="text-sm text-gray-300 mt-2">Bonus</div>
            <div className="text-xs mt-1 leading-normal">{props.bonus}</div>
        </div>
    )
}

export default BonusCard
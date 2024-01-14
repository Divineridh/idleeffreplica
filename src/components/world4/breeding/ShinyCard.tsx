interface propTypes {
    pet: string,
    level: number,
    currentDays: number,
    nextDays: number,
    bonus: string,
}

import { Image } from '@nextui-org/react'

function ShinyCard(props: propTypes) {
    return (
        <div className={`bg-zinc-800 flex flex-row items-center h-24 justify-between ${props.level === 0 ? "brightness-50" : ""}`}>
            <div className="flex flex-row w-1/2 ml-2">
                <Image width={65} src={props.pet} />
                <div className="flex flex-col">
                    <div>Lvl: {props.level}</div>
                    <div>{props.currentDays}/{props.nextDays} days</div>
                </div>
            </div>
            <div className="w-1/2">{props.bonus}</div>
        </div>
    )
}

export default ShinyCard
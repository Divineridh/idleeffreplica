interface propTypes {
    level: number,
    icon: string,
    bonus: string,
    currentAmount: number,
    nextAmount: number,
    name: string,
}

import { Image, Tooltip } from '@nextui-org/react'

function MealCard(props: propTypes) {
    return (
        <Tooltip 
            radius="none"
            className=""
            content={
                <div className="flex p-2 justify-center items-center">
                    <span>{props.name}</span>
                </div>
            }
        >
            <div className="flex flex-row gap-2 items-center p-6 w-[440px] h-16 bg-neutral-800 justify-between">
                <div className="flex flex-row gap-1 items-center">
                    <span className="text-sm">{props.level}</span>
                    <Image 
                        width={40}
                        src={props.icon}
                        className="pb-4"
                    />
                    <span className="text-xs">{props.bonus}</span>
                </div>
                <span className={props.currentAmount < props.nextAmount ? "text-xs text-pink-500" : "text-xs"}>{(props.currentAmount > 999999 ? props.currentAmount/1000000 + 'M' : props.currentAmount > 999 ? props.currentAmount/1000 + 'K' : props.currentAmount) + '/' + (props.nextAmount > 999999 ? props.nextAmount/1000000+'M' : props.nextAmount > 999 ? props.nextAmount/1000+'K' : props.nextAmount)}</span>
            </div>
        </Tooltip>
    )
}

export default MealCard
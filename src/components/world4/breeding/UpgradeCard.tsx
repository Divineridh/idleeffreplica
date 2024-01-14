interface propTypes {
    icon: string,
    name: string,
    bonus: string,
    level: number,
    maxLevel: number,
    upgradeCosts: object[],
}

import { Image } from '@nextui-org/react'

function UpgradeCard(props: propTypes) {

    const costItems = props.upgradeCosts.map(item => {
        return (
            <div className="flex flex-col items-center w-12 gap-1">
                <Image width={30} src={item.icon} />
                <div className={`text-sm ${item.currentlyHave ? "text-lime-600" : ""}`}>{item.amount > 9999999999 ? item.amount/1000000000+'B' : item.amount > 999999 ? item.amount/1000000+'M' : item.amount > 999 ? item.amount/100+'K' : item.amount}</div>
            </div>
        )
    })

    return (
        <div className={`bg-zinc-800 p-3 flex flex-row justify-between h-24 shadow-2xl ${props.level === 0 ? "brightness-50" : ""}`}>
            <div className="w-24">
                <Image width={100} src={props.icon} />
            </div>
            <div className="flex flex-col w-40">
                <div className="text-sm text-gray-300 w-1/5">Name</div>
                <div className="text-xs">{props.name}</div>
            </div>
            <div className="flex flex-col w-48">
                <div className="text-sm text-gray-300">Bonus</div>
                <div className="text-xs">{props.bonus}</div>
            </div>
            <div className="flex flex-col w-16">
                <div className="text-sm text-gray-300">Level</div>
                <div className="text-xs">{props.level}/{props.maxLevel}</div>
            </div>
            <div className="flex flex-row gap-3 w-1/5">
                {costItems}
            </div>
        </div>
    )
}

export default UpgradeCard
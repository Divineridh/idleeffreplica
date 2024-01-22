interface propTypes {
    name: "",
    obols: [],
    emptySlots: number,
    bonuses: [],
}

import { Tooltip, Divider, Image } from '@nextui-org/react'

function Character(props: propTypes) {
    
    const obolItems = props.obols.map(item => {
        return (
            <div>
                <Tooltip
                    radius="none"
                    content={
                    <div className="flex flex-col gap-1">
                        <div className="text-lg font-bold">{item.name}</div>
                        <Divider className="mt-2 border-2 bg-gray-800" />
                        <div className="text-lg">{item.bonuses[0].stat}: {item.bonuses[0].amount}</div>
                    </div>
                }
                >
                    <div>
                        <Image width={35} src={item.icon} />
                    </div>
                </Tooltip>
            </div>
        )
    })

    const bonusItems = props.bonuses.map(item => {
        return (
            <div className="flex flex-col">
                <span className="text-sm text-gray-300">{item.stat}</span>
                <div className="flex flex-row gap-1 text-lg">
                    <span>{item.personalValue + item.familyValue}{item.stat === "Drop Chance" ? "%" : item.stat === "Skill Efficiency" ? "%" : item.stat === "Total Damage" ? "%" : ""} (</span>
                    <span className="text-amber-200">+{item.personalValue}{item.stat === "Drop Chance" ? "%" : item.stat === "Skill Efficiency" ? "%" : item.stat === "Total Damage" ? "%" : ""}</span>
                    <span>,</span>
                    <span className="text-cyan-200">+{item.familyValue}{item.stat === "Drop Chance" ? "%" : item.stat === "Skill Efficiency" ? "%" : item.stat === "Total Damage" ? "%" : ""}</span>
                    <span>)</span>
                </div>
            </div>
        )
    })


    return (
        <div className="flex flex-col">
            <span className="text-2xl">{props.name}</span>
            <div className="flex flex-col ml-3 mt-4">
                <div className="flex flex-row">
                    {obolItems}
                </div>
                <span className="text-sm text-gray-300 mt-2">Empty Slots</span>
                <span className="text-lg">{props.emptySlots}</span>
            </div>
            <span className="text-2xl mt-6">Bonuses</span>
            <div className="flex flex-row flex-wrap ml-3 mt-6 gap-10">
                {bonusItems}
            </div>
        </div>
    )
}

export default Character
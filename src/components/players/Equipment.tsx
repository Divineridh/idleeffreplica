interface propTypes {
    player: string,
    equipment: [],
}

import { Image } from '@nextui-org/react'

export default function Equipment(props: propTypes) {
    
    const equipItems = props.equipment.map(item => {
        return (
            <div className="border border-zinc-700 p-2 w-16 h-16">
                <Image width={50} src={item.icon} />
            </div>
        )
    })

    const specialItems = props.specials.map(item => {
        return (
            <div className="border border-zinc-700 p-2 w-16 h-16">
                <Image width={50} src={item.icon} />
            </div>
        )
    })

    const toolsItems = props.tools.map(item => {
        return (
            <div className="border border-zinc-700 p-2 w-16 h-16">
                <Image width={50} src={item.icon} />
            </div>
        )
    })

    const foodItems = props.food.map(item => {
        return (
            <div className="border border-zinc-700 p-2 w-24 h-16 flex flex-row gap-1 items-center">
                <Image width={50} src={item.icon} />
                <span className="text-sm">{item.amount}</span>
            </div>
        )
    })

    return (
        <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-lg">Equipment</h2>
                <div className="grid grid-cols-2">
                    {equipItems}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-lg">Specials</h2>
                <div className="grid grid-cols-2">
                    {specialItems}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-lg">Tools</h2>
                <div className="grid grid-cols-2">
                    {toolsItems}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-lg">Food</h2>
                <div className="grid grid-cols-2">
                    {foodItems}
                </div>
            </div>
        </div>
    )
}

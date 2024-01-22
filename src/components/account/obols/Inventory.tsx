import { Tooltip, Divider, Image } from '@nextui-org/react'

import inventoryData from '../../../assets/data/account/obols/inventoryData'
const circleInventory = inventoryData.filter(item => item.type === "circle")
const squareInventory = inventoryData.filter(item => item.type === "square")
const circleItems = circleInventory.map(item => {
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
const squareItems = squareInventory.map(item => {
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


function Inventory() {
    return (
        <div className="flex flex-col">
            <div className="text-xl">Family</div>
            <div className="flex flex-col ml-3 gap-1">
                <span className="mt-6 text-lg">Circle</span>
                <div className="flex flex-row mt-1">
                    {circleItems}
                </div>
                <div className="flex flex-row gap-4 mt-2">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-300">Empty Slots</span>
                        <span className="text-xl">13</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-300">Total Slots</span>
                        <span className="text-xl">28</span>
                    </div>
                </div>
                <Divider className="mt-3 border border-gray-700 bg-gray-700" />
                <span className="mt-6 text-lg">Square</span>
                <div className="flex flex-row mt-1">
                    {squareItems}
                </div>
                <div className="flex flex-row gap-4 mt-2">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-300">Empty Slots</span>
                        <span className="text-xl">20</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-300">Total Slots</span>
                        <span className="text-xl">24</span>
                    </div>
                </div>
                <Divider className="mt-3 border border-gray-700 bg-gray-700" />
                <span className="mt-6 text-lg">Hexagon</span>
                <div className="flex flex-row mt-1">
                </div>
                <div className="flex flex-row gap-4 mt-2">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-300">Empty Slots</span>
                        <span className="text-xl">20</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-300">Total Slots</span>
                        <span className="text-xl">20</span>
                    </div>
                </div>
                <Divider className="mt-3 border border-gray-700 bg-gray-700" />
                <span className="mt-6 text-lg">Sparkle</span>
                <div className="flex flex-row mt-1">
                </div>
                <div className="flex flex-row gap-4 mt-2">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-300">Empty Slots</span>
                        <span className="text-xl">16</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-300">Total Slots</span>
                        <span className="text-xl">16</span>
                    </div>
                </div>
                <Divider className="mt-3 border border-gray-700 bg-gray-700" />
            </div>
        </div>
    )
}

export default Inventory
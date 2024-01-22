import { Image, Tooltip, Divider } from '@nextui-org/react'

interface propTypes {
    icon: string,
    type: string,
    currentRank: number,
    maxRank: number,
    name: string,
    bonus: string,
    nextLevelCost: number,
}

function ItemCard(props: propTypes) {
    return (
        <Tooltip
            radius="none"
            content={
                <div className="flex flex-col text-lg">
                    <span className="font-bold">{props.name}</span>
                    <Divider className="bg-zinc-800 border-zinc-800" />
                    <span className="mt-2">Bonus: {props.bonus}</span>
                    <span>Next Level Cost: {props.nextLevelCost}</span>
                </div>
            }
        >
            <div className={`w-28 flex flex-col border-2 items-center ${props.type === "common" ? "border-gray-200" : props.type === "uncommon" ? "border-green-300" : props.type === "rare" ? "border-indigo-400" : props.type === "epic" ? "border-purple-400" : "border-orange-400"}`}>
                <Image className={props.currentRank === 0 ? "brightness-50" : ""} width={40} src={props.icon} />
                <span className="text-lg">{props.currentRank !== 0 ? props.currentRank+'/'+props.maxRank : ""}</span>
            </div>
        </Tooltip>
    )
}

export default ItemCard
import { Image } from '@nextui-org/react'

interface propTypes {
    icon: string,
    currentlyOnShop: boolean,
    effect: string,
    currentLevel: number,
    maxLevel: number,
    cost: number,
    maxBonus: number,
    costToMax: number,
}

function ArcadeCard(props: propTypes) {
    return (
            <div className="flex flex-row gap-6 p-6 border-b-1 border-gray-300">
                <Image radius="none" width={62} src={props.icon} className={props.currentlyOnShop ? "" : "brightness-50"} />
                <div className="flex flex-col gap-1 w-40">
                    <div className="text-sm text-gray-300">Effect</div>
                    <div className="text-xs">{props.effect}</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-sm text-gray-300">Level</div>
                    <div className="text-xs">{props.currentLevel + '/' + props.maxLevel}</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-sm text-gray-300">Cost</div>
                    <div className="text-xs">{props.cost}</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-sm text-gray-300">Max Bonus</div>
                    <div className="text-xs">{props.maxBonus}</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-sm text-gray-300">Cost to max</div>
                    <div className="text-xs">{props.costToMax}</div>
                </div>
            </div>
    )
}

export default ArcadeCard
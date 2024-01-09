interface propTypes {
    bonus: string,
    currentLevel: number,
    maxLevel: number,
    material: string,
    nextLevelCost: number,
    costToMax: number,
    inStorage: number
}

import { Image } from '@nextui-org/react'

function SaltLickCard(props: propTypes) {
    return (
        <div className="flex flex-row bg-zinc-800 p-6 gap-2">
            <div className="flex flex-col w-1/3">
                <span className="text-sm text-gray-300">Bonus</span>
                <div className="text-sm">{props.bonus}</div>
            </div>
            <div className="flex flex-col ml-10 w-1/6">
                <span className="text-sm text-gray-300">Level</span>
                <div>{props.currentLevel}/{props.maxLevel}</div>
            </div>
            {props.currentLevel === props.maxLevel ? 
            <div className="text-xl text-green-700">Maxed!</div> :
            <div className="flex flex-row gap-4">
                <Image 
                    width={20}
                    src={props.material}
                />
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Next Level costs</span>
                    <div className="text-lg">{props.nextLevelCost}</div>
                </div>
                <div className="flex flex-col text-gray-300 ml-6">
                    <span className="text-sm text-gray-300">Cost to max</span>
                    <div className="text-lg">{props.costToMax}</div>
                </div>
                <div className="flex flex-col text-gray-300 ml-6">
                    <span className="text-sm text-gray-300">In Storage</span>
                    <div className={props.inStorage > props.nextLevelCost ? "text-green-700" : "text-gray-300"}>{props.inStorage}</div>
                </div>
            </div>
        }
        </div>
    )
}

export default SaltLickCard
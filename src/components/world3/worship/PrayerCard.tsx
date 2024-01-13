interface propTypes {
    totem: string,
    icon: string,
    name: string,
    currentLevel: number,
    maxLevel: number,
    bonus: string,
    curse: string,
    costToNext: number,
    costToMax: number,
    unlocked: boolean,
    waveReq: number,
}

import { Image } from '@nextui-org/react'

function PrayerCard(props: propTypes) {
    return (
        <div className={`flex flex-row p-6 py-8 bg-zinc-800 justify-between ${props.unlocked ? "" : "brightness-50"}`}>
            <Image width={50} src={props.icon} />
            <div className="flex flex-col w-40">
                <div className="text-sm text-gray-300">Name</div>
                <div className="text-sm">{props.name}</div>
            </div>
            <div className="flex flex-col w-40">
                <div className="text-sm text-gray-300">Level</div>
                <div className="text-sm">{props.currentLevel}/{props.maxLevel}</div>
            </div>
            <div className="flex flex-col w-40">
                <div className="text-sm text-gray-300">Bonus</div>
                <div className="text-xs">{props.bonus}</div>
            </div>
            <div className="flex flex-col w-40">
                <div className="text-sm text-gray-300">Curse</div>
                <div className="text-xs">{props.curse}</div>
            </div>
            <div className="w-1/3">
                {props.unlocked === false ? 
                    <div className="flex flex-col">
                        <div className="text-sm text-gray-300">Wave req</div>
                        <div className="text-sm">{props.waveReq}</div>
                    </div> :
                    props.currentLevel === props.maxLevel ? 
                        <div className="text-2xl text-lime-700">Maxed!</div> :
                        <div className="flex flex-row gap-20">
                            <div className="flex flex-col">
                                <div className="text-sm text-gray-300">Cost to next</div>
                                <div className="text-sm">{props.costToNext > 999999 ? props.costToNext/1000000+'M' : props.costToNext > 999 ? props.costToNext/1000+'K' : props.costToNext}</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-sm text-gray-300">Cost to max</div>
                                <div className="text-sm">{props.costToMax > 999999 ? props.costToMax/1000000+'M' : props.costToMax > 999 ? props.costToMax/1000+'K' : props.costToMax}</div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default PrayerCard
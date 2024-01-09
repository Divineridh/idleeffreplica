import { Image, Divider } from '@nextui-org/react'

interface propTypes {
    icon: string,
    rank: number,
    timeToRankUp: number[],
    currentPower: number,
    maxPower: number,
    autoRefine: number,
    fuel: number[],
    costPerHourArray: [],
    costToRankUp: number[]
}



function SaltCard(props: propTypes) {

    const costPerHourItems = props.costPerHourArray.map(item => {
        return (
            <div className="flex flex-row items-center">
                <Image 
                    width={25}
                    src={item.material}
                />
                <div className="text-sm">{item.amount}</div>
            </div>
        )
    })

    return(
        <div className="flex flex-row bg-zinc-800 shadow-large">
            <div className="flex flex-col py-12 px-16 items-center bg-zinc-900">
                <Image radius="none" width={70} src={props.icon} />
                <span className="text-xl">{props.rank}</span>
                <span className="text-sm text-gray-300">Rank</span>
            </div>
            <div className="flex flex-col gap-1 p-6">
                <span className="text-sm text-gray-300 mt-4">Rank up in</span>
                <div className="flex flex-row gap-3">
                    <div className="flex flex-col">
                        <div className="text-3xl">{props.timeToRankUp[0]}</div>
                        <div className="text-sm text-gray-300">DAYS</div>
                    </div>
                    <span className="text-3xl">:</span>
                    <div className="flex flex-col">
                        <div className="text-3xl">{props.timeToRankUp[1]}</div>
                        <div className="text-sm text-gray-300">HRS</div>
                    </div>
                    <span className="text-3xl">:</span>
                    <div className="flex flex-col">
                        <div className="text-3xl">{props.timeToRankUp[2]}</div>
                        <div className="text-sm text-gray-300">MIN</div>
                    </div>
                </div>
            </div>
            <Divider orientation="vertical" className="mx-2 bg-zinc-500" />
            <div className="flex flex-col gap-3 ml-20 mt-4 w-60">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Power</span>
                    <div className="text-lg">{props.currentPower + '/' + props.maxPower}</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Auto refine at</span>
                    <div className="text-lg">{props.autoRefine + '%'}</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Fuel</span>
                    <div className="flex flex-row items-center gap-1">
                        <div className="flex flex-col items-center">
                            <div className="text-lg">{props.fuel[0]}</div>
                            <div className="text-xs text-gray-300">DAYS</div>
                        </div>
                        <span className="text-xl">:</span>
                        <div className="flex flex-col items-center">
                            <div className="text-lg">{props.fuel[1]}</div>
                            <div className="text-xs text-gray-300">HRS</div>
                        </div>
                        <span className="text-xl">:</span>
                        <div className="flex flex-col items-center">
                            <div className="text-lg">{props.fuel[2]}</div>
                            <div className="text-xs text-gray-300">MIN</div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider orientation="vertical" className="ml-4" />
            <div className="flex flex-col gap-2 ml-28 mt-5">
                <span className="text-sm">Cost per hour</span>
                {costPerHourItems}
            </div>
            <Divider orientation="vertical" className="mx-4"/>
            <div className="flex flex-col gap-3 ml-36 mt-5">
                <span className="text-sm">Cost to rank up</span>
                <div className="flex flex-row items-center">
                    <Image 
                        width={25}
                        src={props.costPerHourArray[0].material}
                    />
                    <div className="text-sm">{(props.costToRankUp[0][0] > 999999 ? props.costToRankUp[0][0] / 1000000 + 'M' : props.costToRankUp[0][0])}</div>
                </div>
                <div className="flex flex-row items-center">
                    <Image 
                        width={25}
                        src={props.costPerHourArray[1].material}
                    />
                    <div className="text-sm">{(props.costToRankUp[1][1] > 999999 ? props.costToRankUp[1][1] / 1000000 + 'M' : props.costToRankUp[1][1])}</div>
                </div>
            </div>
        </div>
    )
}

export default SaltCard
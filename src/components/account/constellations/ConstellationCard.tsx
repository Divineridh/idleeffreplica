interface propTypes {
    world: string,
    icon: string,
    unlocked: boolean,
    map: string,
    requirement: string,
    points: number,
    players: [],
}

import { Image, Divider } from '@nextui-org/react'

import MapIcon from '../../../assets/constellations/map.svg'
import UserIcon from '../../../assets/constellations/user.svg'
import PointsIcon from '../../../assets/constellations/points.svg'

function ConstellationCard(props: propTypes) {

    const playerItems = props.players.map(item => {
        return (
            <div className={`flex flex-row justify-center items-center gap-1 w-32 h-[38px] border-2 bg-zinc-900 ${item.unlocked ? "border-lime-600" : "border-zinc-900"}`}>
                <Image width={30} src={item.class} />
                <div className="text-xs text-gray-400">{item.name}</div>
            </div>
        )
    })

    return (
        <div className="flex flex-row h-80 p-6 pt-20">
            <div className="flex flex-row justify-center items-center">
                <div className={`w-28 h-32 flex justify-center items-center ${props.unlocked ? "border-2 border-lime-600" : "border-2 border-zinc-800"}`}><Image src={props.icon} /></div>
                <div className="flex flex-col ml-14 gap-2 w-80">
                    <div className="flex flex-row gap-3">
                        <Image radius="none" className="mt-1" src={MapIcon} />
                        <div className="flex flex-col">
                            <div className="text-lg">{props.map}</div>
                            <div className="text-xs text-gray-400">Map</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Image radius="none" className="mt-1" src={UserIcon} />
                        <div className="flex flex-col">
                            <div className="text-lg">{props.requirement}</div>
                            <div className="text-xs text-gray-400">Requirement</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Image radius="none" className="mt-1" src={PointsIcon} />
                        <div className="flex flex-col">
                            <div className="text-lg">{props.points}</div>
                            <div className="text-xs text-gray-400">Points</div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider orientation="vertical" className="ml-4 bg-gray-700" />
            <div className="flex flex-col gap-2 ml-10">
                <div className="text-lg">Players</div>
                <div className="grid grid-cols-5 gap-3">{playerItems}</div>
            </div>
        </div>
    )
}

export default ConstellationCard
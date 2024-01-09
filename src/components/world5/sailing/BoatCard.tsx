interface propTypes {
    boatNumber: number,
    level: number,
    currentLoot: number,
    nextLevelLoot: number,
    LootMat: string,
    LootMatAmount: number,
    currentSpeed: number,
    nextLevelSpeed: number,
    SpeedMat: string,
    SpeedMatAmount: number,
}

import SailTra0 from '../../../assets/sailing/SailTra0.png'
import SailTra1 from '../../../assets/sailing/SailTra1.png'

import {Image, Tooltip, Divider} from '@nextui-org/react'

function BoatCard(props: propTypes) {
    return (
        <Tooltip
            radius="none"
            content={
            <div className="flex flex-col w-80 p-2">
                <div className="text-lg font-bold">Upgrade Milestones</div>
                <Divider className="mt-4 bg-zinc-900" />
                <div className="mt-2">placeholder text</div>
            </div>}
        >
            <div className={"flex flex-col p-6 bg-zinc-800 w-80 hover:bg-zinc-700"}>
                <div className="text-sm">Boat {props.boatNumber} (LV {props.level})</div>
                <div className="flex flex-row text-xs items-center justify-between mt-2">
                    <div className="flex flex-row gap-1 w-16">
                        <Image width={20} src={SailTra1} />
                        <div>{props.currentLoot > 999 ? props.currentLoot/1000+'K' : props.currentLoot}</div>
                    </div>
                    <div className="text-gray-300">{'>'}</div>
                    <div className="w-11">{props.nextLevelLoot > 999 ? props.nextLevelLoot/1000+'K' : props.nextLevelLoot}</div>
                    <div className="flex flex-row mr-6 w-16">
                        <Image width={20} src={props.LootMat} />
                        <div>{props.LootMatAmount > 999999 ? props.LootMatAmount/1000000+'M' : props.LootMatAmount > 999 ? props.LootMatAmount/1000+'K' : props.LootMatAmount}</div>
                    </div>
                </div>
                <div className="flex flex-row text-xs items-center justify-between">
                    <div className="flex flex-row gap-1 w-16">
                        <Image width={20} src={SailTra0} />
                        <div>{props.currentSpeed > 999 ? props.currentSpeed/1000+'K' : props.currentSpeed}</div>
                    </div>
                    <div className="text-gray-300">{'>'}</div>
                    <div className="w-11">{props.nextLevelSpeed > 999 ? props.nextLevelSpeed/1000+'K' : props.nextLevelSpeed}</div>
                    <div className="flex flex-row mr-6 w-16">
                        <Image width={20} src={props.SpeedMat} />
                        <div>{props.SpeedMatAmount > 999999 ? props.SpeedMatAmount/1000000+'M' : props.SpeedMatAmount > 999 ? props.SpeedMatAmount/1000+'K' : props.SpeedMatAmount}</div>
                    </div>
                </div>
            </div>
        </Tooltip>
    )
}

export default BoatCard
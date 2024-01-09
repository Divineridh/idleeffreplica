interface propTypes {
    captainLetter: string,
    level: number,
    currentExp: number,
    nextLevelExp: number,
    stat1Icon: string,
    stat1Value: number,
    stat2Icon: string,
    stat2Value: number,
}

import {Image, Divider} from '@nextui-org/react'

function CaptainCard(props: propTypes) {
    return (
        <div className="flex flex-col p-6 bg-zinc-800 w-44 h-44 shadow-2xl">
            <div className="text-sm">Captain {props.captainLetter}</div>
            <div className="flex flex-row mt-2 gap-3">
                <div className="flex flex-col gap-1">
                    <div className="text-xs text-gray-300">Level</div>
                    <div className="text-xs">{props.level}</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-xs text-gray-300">Exp</div>
                    <div className="text-xs">{props.currentExp > 999 ? props.currentExp/1000+'K' : props.currentExp}/{props.nextLevelExp > 999 ? props.nextLevelExp/1000+'K' : props.nextLevelExp}</div>
                </div>
            </div>
            <Divider className="bg-gray-400 my-2" />
            <div className="flex flex-row gap-2">
                <Image width={22} src={props.stat1Icon} />
                <div className="text-xs">+{props.stat1Value}% ({props.stat1Value/props.level} p/lv)</div>
            </div>
            {props.stat2Icon === "" ? <></> :
                <div className="flex flex-row gap-2 mt-1">
                    <Image width={22} src={props.stat2Icon} />
                    <div className="text-xs">+{props.stat2Value}% ({props.stat2Value/props.level} p/lv)</div>
                </div>
            }
        </div>
    )
}

export default CaptainCard
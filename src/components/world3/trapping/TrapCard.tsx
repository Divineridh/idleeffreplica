interface propTypes {
    player: string,
    level: number,
    box: string,
    traps: object,
}

import { Image, Tooltip, Divider } from '@nextui-org/react'

function TrapCard(props: propTypes) {

    const traps = props.traps.map(trap => {
        return (
            <div className="w-24 h-20 flex flex-col justify-center items-center bg-zinc-800 p-4 border border-gray-600">
                <Tooltip
                    radius="none"
                    content={
                        <div className="flex flex-col text-lg">
                            <div className="text-xl font-bold">Trap Info</div>
                            <Divider className="bg-gray-800 mb-2" />
                            <div>Trap Type: {trap.type}</div>
                            <div>Original Duration: {trap.originalDuration}</div>
                            <div>{trap.multiplier1}</div>
                            <div>{trap.multiplier2}</div>
                        </div>
                    }
                >
                    <div className="flex flex-col justify-center items-center">
                        <Image width={35} src={trap.critter} />
                        <div className="text-xs">in {trap.remainingTime} hours</div>
                    </div>
                </Tooltip>
            </div>
        )
    })

    return (
        <div className="flex flex-row gap-3">
            <div className="flex flex-col text-sm w-24 justify-center">
                <div>{props.player}</div>
                <div>(Level: {props.level})</div>
            </div>
            <div className="w-24 flex justify-center items-center">
                <Image width={35} src={props.box} />
            </div>
            {traps}
        </div>
    )
}

export default TrapCard
import { Image, Progress } from '@nextui-org/react'

interface propTypes {
    icon: string,
    player: string,
    currentCharge: number,
    maxCharge: number,
    level: number,
    skull: string,
    chargeRate: number,
}

function ChargeCard(props: propTypes) {
    return (
        <div className="flex flex-col p-6 bg-zinc-800 w-72 gap-3">
            <div className="flex flex-row gap-2">
                <Image width={30} src={props.icon} />
                <div className="text-lg">{props.player}</div>
            </div>
            <div className="flex flex-row items-center gap-2">
                <Progress 
                    value={props.currentCharge}
                    maxValue={props.maxCharge}
                    size="lg"
                    radius="none"
                />
                <div className="text-lg">{props.maxCharge}</div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Level</div>
                    <div className="flex flex-row items-center">
                        <div className="text-lg">{props.level}</div>
                        <Image width={20} src={props.skull} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Charge rate</div>
                    <div className="text-lg">{props.chargeRate}% / day</div>
                </div>
            </div>
        </div>
    )
}

export default ChargeCard
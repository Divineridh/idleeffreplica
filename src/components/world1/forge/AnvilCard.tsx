import { Card, CardBody, CardHeader, Image, Progress } from '@nextui-org/react'

interface AnvilCardProps {
    charClass: string,
    name: string,
    currentAmount: number,
    maxAmount: number,
}

function AnvilCard(props: AnvilCardProps) {

    return (
        <Card radius="none" className="border border-gray-700 bg-zinc-800 min-w-[276px] text-white">
            <CardHeader className="flex flex-row">
                <Image 
                    width={20}
                    src={props.charClass}
                />
                <span className="text-gray-300 text-sm ml-2">{props.name}</span>
            </CardHeader>
            <CardBody className="flex flex-col justify-center items-center">
                <div className="mx-auto flex flex-row items-center gap-2 w-5/6">
                    <Progress 
                        size="lg"
                        radius="none"
                        value={props.currentAmount}
                        maxValue={props.maxAmount}
                        label={props.currentAmount + '  (' + ((props.currentAmount/props.maxAmount).toFixed(1))*100 + '%)'}
                        showValueLabel={false}
                        classNames={{
                            base: "h-10",
                            label: "ml-12 absolute text-foreground-100 z-10 mt-2 text-sm",
                            indicator: "z-0"
                        }}
                    />
                    <div className="text-xs text-gray-300">{props.maxAmount/1000 + 'k'}</div>
                </div>
                <div className="mx-auto flex flex-col px-10">
                    <div className="text-sm text-gray-300">Time till cap</div>
                    <div className="flex flex-row gap-1">
                        <div className="flex flex-col">
                            <div className="text-xl">07</div>
                            <div className="text-xs text-gray-300">DAYS</div>
                        </div>
                        <div className="text-xl">:</div>
                        <div className="flex flex-col">
                            <div className="text-xl">01</div>
                            <div className="text-xs text-gray-300">HRS</div>
                        </div>
                        <div className="text-xl">:</div>
                        <div className="flex flex-col">
                            <div className="text-xl">07</div>
                            <div className="text-xs text-gray-300">MIN</div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default AnvilCard
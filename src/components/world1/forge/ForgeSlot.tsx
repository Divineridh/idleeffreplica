import { Card, CardBody, Image, Spacer } from '@nextui-org/react'
import Forge from '../../../assets/Forge.png'
import ForgeOil from '../../../assets/ForgeOil.png'

interface ForgeSlotProps {
    id: number,
    ore: string,
    bar: string
}

function ForgeSlot(props: ForgeSlotProps) {
    return (
        <Card className="bg-zinc-800 text-white mt-6">
                            <CardBody className="flex flex-row p-6 justify-evenly items-center">
                                <Image 
                                    width={40}
                                    alt="Forge icon"
                                    src={Forge}
                                    radius="none"
                                />
                                <Spacer x={4} />
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-300">Ores</span>
                                    <div className="flex flex-row mt-2">
                                        <Image 
                                            width={20}
                                            alt="ore 1"
                                            src={props.ore}
                                        />
                                        <div className="ml-3">18.1K</div>
                                    </div>
                                </div>
                                <Spacer x={4} />
                                <div className="flex flex-col">
                                    <span className="text-sm">Oils</span>
                                    <div className="flex flex-row mt-2">
                                        <Image 
                                            width={40}
                                            alt="forge oil icon"
                                            src={ForgeOil}
                                        />
                                        <div className="ml-3">140</div>
                                    </div>
                                </div>
                                <Spacer x={4} />
                                <div className="flex flex-col">
                                    <span className="text-sm">Bars</span>
                                    <div className="flex flex-row mt-2">
                                        <Image 
                                            width={30}
                                            alt="ore bar 1"
                                            src={props.bar}
                                        />
                                        <div className="ml-3">140</div>
                                    </div>
                                </div>
                                <Spacer x={4} />
                                <div className="flex flex-col">
                                    <span className="text-gray-300">Time Till Empty</span>
                                    <div className="flex flex-row">
                                        <div className="flex flex-col">
                                            <div className="text-2xl">11</div>
                                            <div className="text-xs text-gray-300">HRS</div>
                                        </div>
                                        <div className="ml-2 text-2xl">:</div>
                                        <div className="flex flex-col ml-2">
                                            <div className="text-2xl">41</div>
                                            <div className="text-xs text-gray-300">MIN</div>
                                        </div>
                                        <div className="ml-2 text-2xl">:</div>
                                        <div className="flex flex-col ml-2">
                                            <div className="text-2xl">17</div>
                                            <div className="text-xs text-gray-300">SEC</div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
    )
}

export default ForgeSlot
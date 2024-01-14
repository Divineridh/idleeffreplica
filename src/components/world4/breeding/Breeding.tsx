import PetEgg1 from '../../../assets/breeding/PetEgg1.png'
import PetDeadCell from '../../../assets/breeding/PetDeadCell.png'

import { Image, Tabs, Tab } from '@nextui-org/react'

import Territory from './Territory'
import Upgrades from './Upgrades'
import Arena from './Arena'
import Shiny from './Shiny'

function Breeding() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl ml-2">Breeding</h1>
            <div className="flex flex-col">
                <div className="text-xs mt-8">* This is a work in progress, there could some bugs and minor inaccuracies.</div>
                <div className="flex flex-col p-2 ml-4 gap-4">
                    <div className="text-xs">* New eggs will only show up after the cloud save updates.</div>
                    <div className="flex flex-row gap-6">
                        <div className="flex flex-row">
                            <div className="flex justify-center items-center border-2 border-zinc-700 w-11"><Image width={40} src={PetEgg1} /></div>
                            <div className="flex justify-center items-center border-2 border-zinc-700 w-11"><Image width={40} src={PetEgg1} /></div>
                            <div className="flex justify-center items-center border-2 border-zinc-700 w-11"><Image width={40} src={PetEgg1} /></div>
                            <div className="flex justify-center items-center border-2 border-zinc-700 w-11"><Image width={40} src={PetEgg1} /></div>
                            <div className="flex justify-center items-center border-2 border-zinc-700 w-11"><Image width={40} src={PetEgg1} /></div>
                            <div className="flex justify-center items-center border-2 border-zinc-700 w-11"><Image width={40} src={PetEgg1} /></div>
                            <div className="flex justify-center items-center border-2 border-zinc-700 w-11"><Image width={40} src={PetEgg1} /></div>
                            <div className="flex justify-center items-center border-2 border-zinc-700 w-11"><Image width={40} src={PetEgg1} /></div>
                            <div className="flex justify-center items-center border-2 border-zinc-700 w-11"><Image width={40} src={PetEgg1} /></div>
                            <div className="flex justify-center items-center border-2 border-zinc-700 w-11"><Image width={40} src={PetEgg1} /></div>
                            <div className="flex justify-center items-center border-2 border-zinc-700 w-11"></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-sm text-gray-300">Next Egg In</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-sm text-gray-300">Time per egg</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-sm text-gray-300">Min Stat</div>
                            <div className="text-lg">4.43K</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-sm text-gray-300">Max Stat</div>
                            <div className="text-lg">22K</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-sm text-gray-300">Dead Cells</div>
                            <div className="flex flex-row gap-2 justify-center">
                                <div className="text-lg">338</div>
                                <Image width={25} src={PetDeadCell} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs 
                aria-label="options"
                color="primary"
                variant="underlined"
                className="mt-2"
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab title="Territory">
                    <Territory />
                </Tab>
                <Tab title="Upgrades">
                    <Upgrades />
                </Tab>
                <Tab title="Arena">
                    <Arena />
                </Tab>
                <Tab title="Shiny">
                    <Shiny />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Breeding
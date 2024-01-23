import { Tabs, Tab, Image, Checkbox, Tooltip, Divider } from '@nextui-org/react'

import DivineKnight from '../../assets/classes/DivineKnight.png'
import SkillRefinery from '../../assets/skills/SkillRefinery.png'
import InfoIcon from '../../assets/InfoIcon.png'

import SaltData from '../../assets/data/world3/construction/salts-data.js'
import SaltCard from '../../components/world3/construction/refinery/SaltCard'

import SaltLickData from '../../assets/data/world3/construction/saltlick-data.js'
import SaltLickCard from '../../components/world3/construction/saltlick/SaltLickCard'

const saltItems = SaltData.map(item => {
    return(
        <SaltCard 
            key={item.id}
            {...item}
        />
    )
})

const saltlickItems = SaltLickData.map(item => {
    return(
        <SaltLickCard 
            key={item.id}
            {...item}
        />
    )
})

import Printer from '../../components/world3/construction/printer/Printer'
import Deathnote from '../../components/world3/construction/deathnote/DeathNote'
import Shrines from '../../components/world3/construction/shrines/Shrines'
import Buildings from '../../components/world3/construction/buildings/Buildings'
import AtomCollider from '../../components/world3/construction/atomcollider/AtomCollider'

function World3Construction() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl ml-2">Construction</h1>
            <Tabs 
                aria-label="options"
                color="primary"
                variant="underlined"
                className="mt-2"
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab key="Refinery" title="Refinery">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-4 gap-12 mx-44">
                            <div className="bg-zinc-800 flex flex-col items-center h-44 p-5 gap-1">
                                <span className="text-gray-300 text-lg">Combustion</span>
                                <span className="text-xs">Next cycle in</span>
                                <div className="flex flex-row gap-1">
                                    <div className="flex flex-col items-center">
                                        <div className="text-lg">02</div>
                                        <div className="text-xs text-gray-300">HRS</div>
                                    </div>
                                    <div className="text-lg">:</div>
                                    <div className="flex flex-col items-center">
                                        <div className="text-lg">00</div>
                                        <div className="text-xs text-gray-300">MIN</div>
                                    </div>
                                    <div className="text-lg">:</div>
                                    <div className="flex flex-col items-center">
                                        <div className="text-lg">00</div>
                                        <div className="text-xs text-gray-300">SEC</div>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">* Might be off by a few seconds.</span>
                                <span className="text-xs text-gray-400">Max cycle is: 0hr 2min 20sec</span>
                            </div>
                            <div className="bg-zinc-800 flex flex-col items-center h-44 p-5 gap-1">
                                <span className="text-gray-300 text-lg">Synthesis</span>
                                <span className="text-xs">Next cycle in</span>
                                <div className="flex flex-row gap-1">
                                    <div className="flex flex-col items-center">
                                        <div className="text-lg">02</div>
                                        <div className="text-xs text-gray-300">HRS</div>
                                    </div>
                                    <div className="text-lg">:</div>
                                    <div className="flex flex-col items-center">
                                        <div className="text-lg">00</div>
                                        <div className="text-xs text-gray-300">MIN</div>
                                    </div>
                                    <div className="text-lg">:</div>
                                    <div className="flex flex-col items-center">
                                        <div className="text-lg">00</div>
                                        <div className="text-xs text-gray-300">SEC</div>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">* Might be off by a few seconds.</span>
                                <span className="text-xs text-gray-400">Max cycle is: 0hr 9min 17sec</span>
                            </div>
                            <div className="bg-zinc-800 flex flex-col h-44 p-5 gap-2">
                                <div className="flex flex-row gap-3">
                                    <Image width={30} src={DivineKnight} />
                                    <span className="text-lg">Divinerid4</span>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Image radius="none" width={45} src={SkillRefinery} />
                                    <span className="text-lg">Skill is ready!</span>
                                </div>
                            </div>
                            <div className="bg-zinc-800 flex flex-col h-44 p-5 gap-3">
                                <div className=" flex flex-row gap-3">
                                    <Image width={30} src={DivineKnight} />
                                    <span className="text-lg">Divinerid7</span>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Image radius="none" width={45} src={SkillRefinery} />
                                    <span className="text-lg">Skill is ready!</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <Checkbox radius="sm" className=""></Checkbox>
                            <div>Squire Power</div>
                            <Tooltip content={
                                <div className="flex flex-col bg-neutral-200">
                                    <div className="text-sm text-gray-800">Squire Power!</div>
                                    <Divider />
                                    <div className="text-lg">This will make the following assumptions and calculate their impact on the time to rank-up:</div>
                                    <div className="text-lg">* Assume perfect use of squire skill on CD.</div>
                                    <div className="text-lg">* This is assuming the highest possible level for the squire skill based on your max talent level.</div>
                                </div>
                            }>
                                <Image 
                                    width={12}
                                    src={InfoIcon}
                                    className="ml-1 mt-1"
                                />
                            </Tooltip>
                        </div>
                        <div className="text-lg">This is WIP - fuel times don't account for printer or auto refine salt generation.</div>
                        <div className="flex flex-col gap-6 mt-5">
                            {saltItems}
                        </div>
                    </div>
                </Tab>
                <Tab key="SaltLick" title="Salt Lick">
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <Checkbox radius="sm"></Checkbox>
                            <div>Hide max level upgrades</div>
                        </div>
                        <div className="mt-2">* Green text 'In Storage' means you can afford the next level.</div>
                        <div className="flex flex-col gap-3 mt-1">
                            {saltlickItems}
                        </div>
                    </div>
                </Tab>
                <Tab key="3dPrinter" title="3D Printer">
                    <Printer />
                </Tab>
                <Tab key="DeathNote" title="Death Note">
                    <Deathnote />
                </Tab>
                <Tab key="Shrines" title="Shrines">
                    <Shrines />
                </Tab>
                <Tab key="Buildings" title="Buildings">
                    <Buildings />
                </Tab>
                <Tab key="AtomCollider" title="Atom Collider">
                    <AtomCollider />
                </Tab>
            </Tabs>
        </div>
    )
}

export default World3Construction
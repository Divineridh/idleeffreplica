import { useState } from 'react'
import { Tabs, Tab } from '@nextui-org/react'

import slotsData from "../../assets/data/world1/forge-slot-data"
import ForgeSlot from '../../components/world1/forge/ForgeSlot'

function World1Forge() {

    const slots = slotsData.map(slot => {
        return (
          <ForgeSlot 
            key={slot.id}
            {...slot}
          />
        )
      })

    return (
        <div className="flex flex-col w-4/6 h-full bg-zinc-900 text-white mx-auto container">
            <h1 className="my-6 text-4xl">Forge</h1>
            <div className="w-2/6 bg-neutral-800 flex flex-col items-center">
                <div className="flex flex-col mt-4 p-6">
                    <span className="text-sm text-gray-300">Need to refill in</span>
                    <div>
                        <div className="flex flex-row">
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-semibold">12</span>
                                <span className="text-xs text-gray-300">HRS</span>
                            </div>
                            <div className="ml-2 text-2xl">:</div>                            
                            <div className="flex flex-col ml-2 items-center">
                                <span className="text-2xl font-semibold">01</span>
                                <span className="text-xs text-gray-300">MIN</span>
                            </div>
                            <div className="ml-2 text-2xl">:</div>                            
                            <div className="flex flex-col ml-2 items-center">
                                <span className="text-2xl font-semibold">50</span>
                                <span className="text-xs text-gray-300">SEC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs 
                aria-label="Options"
                color="primary"
                variant="underlined"
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
                }}
            >
                <Tab key="slots" title="Slots">
                    <div className="flex flex-col mb-10">
                        {slots}
                    </div>
                </Tab>
                <Tab key="upgrades" title="Upgrades">
                    <div className="flex flex-col h-full bg-zinc-900">
                        <div className="flex flex-row items-center bg-zinc-800 text-white p-6">
                            <div className="flex flex-col ml-6 w-[55px]">
                                <span className="text-sm text-gray-300">Level</span>
                                <span className="text-lg">16/16</span>
                            </div>
                            <div className="flex flex-col ml-20 w-[330px]">
                                <span className="text-sm text-gray-300">Bonus</span>
                                <span className="text-lg">16 extra slots to smelt ores.</span>
                            </div>
                            <div className="ml-32">
                                MAXED
                            </div>
                        </div>
                        <div className="flex flex-row items-center bg-zinc-800 text-white p-6 mt-6">
                            <div className="flex flex-col ml-6 w-[55px]">
                                <span className="text-sm text-gray-300">Level</span>
                                <span className="text-lg">50/50</span>
                            </div>
                            <div className="flex flex-col ml-20 w-[330px]">
                                <span className="text-sm text-gray-300">Bonus</span>
                                <span className="text-lg">Increases max ores per slot by +2870.</span>
                            </div>
                            <div className="ml-32">
                                MAXED
                            </div>
                        </div>
                        <div className="flex flex-row items-center bg-zinc-800 text-white p-6 mt-6">
                            <div className="flex flex-col ml-6 w-[55px]">
                                <span className="text-sm text-gray-300">Level</span>
                                <span className="text-lg">90/90</span>
                            </div>
                            <div className="flex flex-col ml-20 w-[330px]">
                                <span className="text-sm text-gray-300">Bonus</span>
                                <span className="text-lg">Ores are turned into bars +550% faster.</span>
                            </div>
                            <div className="ml-32">
                                MAXED
                            </div>
                        </div>
                        <div className="flex flex-row items-center bg-zinc-800 text-white p-6 mt-6">
                            <div className="flex flex-col ml-6 w-[55px]">
                                <span className="text-sm text-gray-300">Level</span>
                                <span className="text-lg">85/85</span>
                            </div>
                            <div className="flex flex-col ml-20 w-[330px]">
                                <span className="text-sm text-gray-300">Bonus</span>
                                <span className="text-lg">+85% EXP gain from using the forge.</span>
                            </div>
                            <div className="ml-32">
                                MAXED
                            </div>
                        </div>
                        <div className="flex flex-row items-center bg-zinc-800 text-white p-6 mt-6">
                            <div className="flex flex-col ml-6 w-[55px]">
                                <span className="text-sm text-gray-300">Level</span>
                                <span className="text-lg">75/75</span>
                            </div>
                            <div className="flex flex-col ml-20 w-[330px]">
                                <span className="text-sm text-gray-300">Bonus</span>
                                <span className="text-lg">+75% chance to make an extra bar.</span>
                            </div>
                            <div className="ml-32">
                                MAXED
                            </div>
                        </div>
                        <div className="flex flex-row items-center bg-zinc-800 text-white p-6 mt-6">
                            <div className="flex flex-col ml-6">
                                <span className="text-sm text-gray-300">Level</span>
                                <span className="text-lg">60/60</span>
                            </div>
                            <div className="flex flex-col ml-20 w-[330px]">
                                <span className="text-sm text-gray-300">Bonus</span>
                                <span className="text-lg">+120% for a card drop while afk.</span>
                            </div>
                            <div className="ml-32">
                                MAXED
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default World1Forge
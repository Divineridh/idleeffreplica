import { useState } from 'react'
import { Tabs, Tab, Button, Image } from '@nextui-org/react'

import BB from '../../assets/classes/BloodBerzerker.png'
const BBicon = <Image width={23} src={BB} />
import SB from '../../assets/classes/ShipBreaker.png'
const SBicon = <Image width={23} src={SB} />

import RandomStats from './RandomStats'
import randomStatsData from '../../assets/data/players/randomStatsData'

const p1stats = randomStatsData.filter(item => item.player === "Divinerid")
const p1Item = p1stats.map(item => {
    return (
        <RandomStats 
            key={item.id}
            {...item}
        />
    )
})


function Players() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col px-5 mx-auto h-full">
            <div className="flex flex-row text-white justify-center gap-1">
                <Button radius="none" color="primary" variant="bordered" startContent={BBicon}>Divinerid</Button>
                <Button radius="none" color="primary" variant="bordered" startContent={SBicon}>Divinerid2</Button>
            </div>
            <Tabs 
                radius="none"
                variant="bordered"
                classNames={{
                    tabList: "flex flex-col w-1/4 border-0 bg-zinc-900 p-6 h-screen",
                    tabContent: "text-gray-100",
                    cursor: "bg-zinc-800 text-gray-100",
                    base: " shadow-2xl flex flex-row h-screen mt-4",
                    panel: "mt-12 p-4 pt-8 w-1/2 bg-zinc-800"
            }}>
                <Tab key="randomStats" title="Random Stats">
                    {p1Item}
                </Tab>
                <Tab key="skills" title="Skills"></Tab>
                <Tab key="equipment" title="Equipment"></Tab>
                <Tab key="statues" title="Statues"></Tab>
                <Tab key="anvil" title="Anvil"></Tab>
                <Tab key="carryCapacity" title="Carry Capacity"></Tab>
                <Tab key="talents" title="Talents"></Tab>
                <Tab key="postOffice" title="Post Office"></Tab>
                <Tab key="inventory" title="Inventory"></Tab>
                <Tab key="obols" title="Obols"></Tab>
                <Tab key="chips" title="Chips"></Tab>
                <Tab key="zowChow" title="Zow/Chow"></Tab>
            </Tabs>
        </div>
    )
}

export default Players
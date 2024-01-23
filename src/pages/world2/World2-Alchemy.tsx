import { Tabs, Tab, Checkbox, Select, SelectItem } from '@nextui-org/react'

const discounts = ['No discount', '25%', '43.75%', '57.81%', '68.36%', '76.27%', '82.20%', '86.65%', '90%']

import Bubble from '../../components/world2/alchemy/Bubble'
import OrangeBubblesData from '../../assets/data/world2/alchemy/orange-bubbles-data.js'
import GreenBubblesData from '../../assets/data/world2/alchemy/green-bubbles-data.js'
import PurpleBubblesData from '../../assets/data/world2/alchemy/purple-bubbles-data.js'
import YellowBubblesData from '../../assets/data/world2/alchemy/yellow-bubbles-data.js'
import Vial from '../../components/world2/alchemy/Vial'
import VialsData from '../../assets/data/world2/alchemy/vials-data.js'
import Sigil from '../../components/world2/alchemy/Sigil'
import SigilsData from '../../assets/data/world2/alchemy/alchemy-sigils-data.js'

const orangeItems = OrangeBubblesData.map(item => {
    return (
        <Bubble 
            key={item.id}
            {...item}
        />
    )
})
const greenItems = GreenBubblesData.map(item => {
    return (
        <Bubble 
            key={item.id}
            {...item}
        />
    )
})
const purpleItems = PurpleBubblesData.map(item => {
    return (
        <Bubble 
            key={item.id}
            {...item}
        />
    )
})
const yellowItems = YellowBubblesData.map(item => {
    return (
        <Bubble 
            key={item.id}
            {...item}
        />
    )
})
const vials = VialsData.map(item => {
    return (
        <Vial 
            key={item.id}
            {...item}
        />
    )
})
const sigils = SigilsData.map(item => {
    return (
        <Sigil 
            key={item.id}
            {...item}
        />
    )
})

function World2Alchemy() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl ml-1 mt-4">Alchemy</h1>
            <Tabs
                aria-label="options"
                color="primary"
                variant="underlined"
                className="mt-2"
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab key="Bubbles" title="Bubbles">
                    <div className="p-1 flex flex-col gap-2 bg-zinc-800 mt-2">
                        <div className="flex flex-row items-center p-1 mt-2">
                            <Checkbox radius="sm" className="ml-3"></Checkbox>
                            <div className="text-sm whitespace-nowrap mt-1">Class multiplier bonus?</div>
                            <Select  
                                size="sm"
                                variant="bordered"
                                placeholder = "No discount"
                                className="w-1/5 ml-12 mt-2"
                            >
                                {discounts.map((item) => (
                                    <SelectItem key={item} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </Select>
                            <div className="text-xs ml-20 mt-2">IMAGE Indicates bubbles that will level from "No Bubble Left Behind" lab bonus</div>
                        </div>
                        <div className="flex flex-row justify-evenly gap-4 mb-2 mt-8">
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-lg font-semibold">Power Cauldron</span>
                                {orangeItems}
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-lg font-semibold">Quicc Cauldron</span>
                                {greenItems}
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-lg font-semibold">High-IQ Cauldron</span>
                                {purpleItems}
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-lg font-semibold">Kazam Cauldron</span>
                                {yellowItems}
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab key="Vials" title="Vials">
                    <div className="bg-zinc-800 p-2 flex flex-row flex-wrap">
                        {vials}
                    </div>
                </Tab>
                <Tab key="Sigils" title="Sigils">
                    <div className="grid grid-cols-3 gap-3 mt-6">
                        {sigils}
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default World2Alchemy
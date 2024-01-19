import { Tabs, Tab } from '@nextui-org/react'

import constellationsData from '../../../assets/data/account/constellationsData'
import ConstellationCard from './ConstellationCard'

const w1consts = constellationsData.filter(item => item.world === "world1")
const w1Items = w1consts.map(item => {
    return (
        <ConstellationCard 
            key={item.id}
            {...item}
        />
    )
})
const w2consts = constellationsData.filter(item => item.world === "world2")
const w2Items = w2consts.map(item => {
    return (
        <ConstellationCard 
            key={item.id}
            {...item}
        />
    )
})

function Constellations() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <Tabs 
                aria-label="options"
                color="primary"
                variant="underlined"
                className="mt-2"
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab key="world1" title="World 1">
                    <div className="flex flex-col bg-zinc-800">{w1Items}</div>
                </Tab>
                <Tab key="world2" title="World 2">
                    <div className="flex flex-col bg-zinc-800">{w2Items}</div>
                </Tab>
                <Tab key="world3" title="World 3"></Tab>
                <Tab key="world4" title="World 4"></Tab>
                <Tab key="world5" title="World 5"></Tab>
            </Tabs>
        </div>
    )
}
export default Constellations
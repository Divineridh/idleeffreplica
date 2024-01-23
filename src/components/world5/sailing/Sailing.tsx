import {Tabs, Tab} from '@nextui-org/react'

import lootPileData from '../../../assets/data/world5/sailing/lootPileData'
import LootPileCard from './LootPileCard'

const lootPileItems = lootPileData.map(item => {
    return (
        <LootPileCard 
            key={item.id}
            {...item}
        />
    )
})

import Overview from './Overview'
import Islands from './Islands'
import Artifacts from './Artifacts'
import Captains from './Captains'
import Boats from './Boats'

function Sailing() {
    return (
        <div className="flex flex-col p-2 h-full">
            <h1 className="text-4xl">Sailing</h1>
            <span className="text-xs mt-6">* This is a work in progress, there could be some bugs and minor inaccuracies. THE UI ISN'T FINAL!</span>
            <div className="flex flex-row gap-3 mt-3">
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Boats</span>
                    <span className="text-lg">20</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Captains</span>
                    <span className="text-lg">20</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Loot Pile Max</span>
                    <span className="text-lg">20</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Minimum Travel Time</span>
                    <span className="text-lg">105 min</span>
                </div>
            </div>
            <span className="text-lg mt-2">Loot Pile</span>
            <div className="flex flex-row flex-wrap mt-1">
                {lootPileItems}
            </div>
            <Tabs 
                aria-label="options"
                color="primary"
                variant="underlined"
                className="mt-6"
                classNames={{
                    tabList: "mx-auto gap-3",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab key="overview" title="Overview">
                    <Overview />
                </Tab>
                <Tab key="islands" title="Islands">
                    <Islands />
                </Tab>
                <Tab key="artifacts" title="Artifacts">
                    <Artifacts />
                </Tab>
                <Tab key="captains" title="Captains">
                    <Captains />
                </Tab>
                <Tab key="boats" title="Boats">
                    <Boats />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Sailing
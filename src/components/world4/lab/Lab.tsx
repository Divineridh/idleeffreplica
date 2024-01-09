import { Tabs, Tab } from '@nextui-org/react'

import labBonusesData from '../../../assets/data/labBonusesData'
import LabCard from './LabCard'
import labTubesData from '../../../assets/data/labTubesData'
import PlayerTube from './PlayerTube'
import labJewelsData from '../../../assets/data/labJewelsData'
import JewelCard from './JewelCard'

const labBonusItems = labBonusesData.map(bonus => {
    return (
        <LabCard 
            key={bonus.id}
            {...bonus}
        />
    )
})

const playerTubeItems = labTubesData.map(tube => {
    return (
        <PlayerTube 
            key={tube.id}
            {...tube}
        />
    )
})

const jewelItems = labJewelsData.map(jewel => {
    return (
        <JewelCard 
            key={jewel.id}
            {...jewel}
        />
    )
})

function Lab() {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Lab</h1>
            <span className="text-xs">* This is a work in progress, there could be some bugs and minor inaccuracies.</span>
            <Tabs
                aria-label="options"
                color="primary"
                variant="underlined"
                className="mt-2"
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab key="mainframe" title="Mainframe">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg">Players in tubes</span>
                        <div className="flex flex-row gap-3 flex-wrap">
                            {playerTubeItems}
                        </div>
                        <span className="text-xs mt-6">* Green border means active, low opacity means not obtained yet.</span>
                        <span className="text-lg">Bonuses</span>
                        <div className="flex flex-row gap-6 flex-wrap">
                            {labBonusItems}
                        </div>
                        <span className="text-lg mt-6">Jewels</span>
                        <div className="flex flex-row gap-6 flex-wrap mt-6">
                            {jewelItems}
                        </div>
                    </div>
                </Tab>
                <Tab key="console" title="Console">

                </Tab>
            </Tabs>
            
        </div>
    )
}

export default Lab
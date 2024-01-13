import {Tabs, Tab} from '@nextui-org/react'

import Bonuses from './Bonuses'
import SkillMastery from './SkillMastery'
import ConstructMastery from './ConstructMastery'

function Rift() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl ml-2">Rift</h1>
            <Tabs 
                aria-label="options"
                color="primary"
                variant="underlined"
                className="mt-2"
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab key="bonuses" title="Bonuses">
                    <Bonuses />
                </Tab>
                <Tab key="skillMastery" title="Skill Mastery">
                    <SkillMastery />
                </Tab>
                <Tab key="constructMastery" title="Construct Mastery">
                    <ConstructMastery />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Rift
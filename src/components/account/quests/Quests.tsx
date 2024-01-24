import { useState, useMemo } from 'react'
import QuestsList from './QuestsList';
import { Tabs, Tab } from '@nextui-org/react'

export default function Quests() {

    const [activeTab, setActiveTab] = useState("Divinerid")

    const handleTabChange = (key) => {
        setActiveTab(key)
    }

    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl ml-2">Quests</h1>
            <Tabs 
                selectedKey={activeTab}
                onSelectionChange={handleTabChange} 
                aria-label="options"
                color="primary"
                variant="underlined"
                className=""
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab key="world1" title="World 1">
                    <QuestsList world={activeTab} listFirst="Builder Bird" />
                </Tab>
                <Tab key="world2" title="World 2">
                    <QuestsList world={activeTab} listFirst="Bandit Bob" />
                </Tab>
                <Tab key="world3" title="World 3">
                    <QuestsList world={activeTab} listFirst="Bellows" />
                </Tab>
                <Tab key="world4" title="World 4">
                    <QuestsList world={activeTab} listFirst="Blobbo" />
                </Tab>
                <Tab key="world5" title="World 5">
                    <QuestsList world={activeTab} listFirst="Lava Larry" />
                </Tab>
                <Tab key="events" title="Events">
                    <QuestsList world={activeTab} listFirst="Coastiolyte" />
                </Tab>
            </Tabs>
        </div>
    )
}

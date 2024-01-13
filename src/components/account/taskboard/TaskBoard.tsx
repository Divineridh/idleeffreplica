import { useState } from 'react'

import { Tabs, Tab } from '@nextui-org/react'

import Tasks from './Tasks'
import Merits from './Merits'
import Achievements from './Achievements'

function TaskBoard() {

    const [activeTab, setActiveTab] = useState("world1")
    const [activeSubTab, setActiveSubTab] = useState("tasks")

    const handleTabChange = (key) => {
        setActiveTab(key)
    }

    const handleSubTabChange = (key) => {
        setActiveSubTab(key)
    }

    return(
        <div className="w-[1440px] bg-zinc-900 text-gray-100 flex flex-col px-6 mx-auto h-full">
            <Tabs
                selectedKey={activeTab}
                onSelectionChange={handleTabChange} 
                aria-label="options"
                color="primary"
                variant="underlined"
                className=""
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-sm"
            }}>
                <Tab key="world1" title="Blunder Hills">
                    <Tabs
                        selectedKey={activeSubTab}
                        onSelectionChange={handleSubTabChange}
                        aria-label="options"
                        color="primary"
                        variant="underlined"
                        className=""
                        classNames={{
                            tabList: "mx-auto",
                            tabContent: "text-gray-300 text-sm"
                    }}>
                        <Tab title="Tasks">
                            <Tasks currentTab={activeTab} />
                        </Tab>
                        <Tab title="Merits">
                            <Merits currentTab={activeTab} />
                        </Tab>
                        <Tab title="Achievements">
                            <Achievements currentTab={activeTab} />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab key="world2" title="Yum-Yum Desert">
                    <Tabs
                        selectedKey={activeSubTab}
                        onSelectionChange={handleSubTabChange}
                        aria-label="options"
                        color="primary"
                        variant="underlined"
                        className=""
                        classNames={{
                            tabList: "mx-auto",
                            tabContent: "text-gray-300 text-sm"
                    }}>
                        <Tab title="Tasks">
                            <Tasks currentTab={activeTab} />
                        </Tab>
                        <Tab title="Merits">
                            <Merits currentTab={activeTab} />
                        </Tab>
                        <Tab title="Achievements">
                            <Achievements currentTab={activeTab} />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab key="world3" title="Frostbite Tundra">
                    <Tabs
                        selectedKey={activeSubTab}
                        onSelectionChange={handleSubTabChange}
                        aria-label="options"
                        color="primary"
                        variant="underlined"
                        className=""
                        classNames={{
                            tabList: "mx-auto",
                            tabContent: "text-gray-300 text-sm"
                    }}>
                        <Tab title="Tasks">
                            <Tasks currentTab={activeTab} />
                        </Tab>
                        <Tab title="Merits">
                            <Merits currentTab={activeTab} />
                        </Tab>
                        <Tab title="Achievements">
                            <Achievements currentTab={activeTab} />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab key="world4" title="Hyperion Nebula">
                    <Tabs
                        selectedKey={activeSubTab}
                        onSelectionChange={handleSubTabChange}
                        aria-label="options"
                        color="primary"
                        variant="underlined"
                        className=""
                        classNames={{
                            tabList: "mx-auto",
                            tabContent: "text-gray-300 text-sm"
                    }}>
                        <Tab title="Tasks">
                            <Tasks currentTab={activeTab} />
                        </Tab>
                        <Tab title="Merits">
                            <Merits currentTab={activeTab} />
                        </Tab>
                        <Tab title="Achievements">
                            <Achievements currentTab={activeTab} />
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab key="world5" title="Smolderin' Plateau">
                    <Tabs
                        selectedKey={activeSubTab}
                        onSelectionChange={handleSubTabChange}
                        aria-label="options"
                        color="primary"
                        variant="underlined"
                        className=""
                        classNames={{
                            tabList: "mx-auto",
                            tabContent: "text-gray-300 text-sm"
                    }}>
                        <Tab title="Tasks">
                            <Tasks currentTab={activeTab} />
                        </Tab>
                        <Tab title="Merits">
                            <Merits currentTab={activeTab} />
                        </Tab>
                        <Tab title="Achievements">
                            <Achievements currentTab={activeTab} />
                        </Tab>
                    </Tabs>
                </Tab>
            </Tabs>            
        </div>
    )
}

export default TaskBoard
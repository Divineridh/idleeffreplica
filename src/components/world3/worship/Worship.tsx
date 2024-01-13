import { Tabs, Tab } from '@nextui-org/react'

import Charge from './Charge'
import Totems from './Totems'
import Prayers from './Prayers'

function Worship() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl">Worship</h1>
            <Tabs 
                aria-label="options"
                color="primary"
                variant="underlined"
                className="mt-2"
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab key="charge" title="Charge">
                    <Charge />
                </Tab>
                <Tab key="totems" title="Totems">
                    <Totems />
                </Tab>
                <Tab key="prayers" title="Prayers">
                    <Prayers />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Worship
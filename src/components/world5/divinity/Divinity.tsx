import {Tabs, Tab} from '@nextui-org/react'
import Gods from './Gods'
import Alignment from './Alignment'

function Divinity() {
    return (
        <div className="flex flex-col p-2">
            <h1 className="text-4xl">Divinity</h1>
            <span className="text-xs mt-4">* This is a work in progress, there could be some bugs and minor inaccuracies.</span>
            <Tabs
                aria-label="options"
                color="primary"
                variant="underlined"
                className="mt-2"
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab key="gods" title="Gods">
                    <Gods />
                </Tab>
                <Tab key="alignment" title="Alignment">
                    <Alignment />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Divinity
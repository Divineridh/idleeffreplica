import dungeonsData from '../../../assets/data/account/dungeons/dungeonsData'

import { Image, Tabs, Tab } from '@nextui-org/react'

import Items from './Items'
import Passives from './Passives'
import Traits from './Traits'

function Dungeons() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-8 mx-auto h-full">
            <h1 className="text-4xl ml-2">Dungeons</h1>
            <div className="flex flex-row mt-6 ml-3 gap-8">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Rank</span>
                    <div className="flex flex-row items-center gap-2">
                        <Image width={17} src={dungeonsData.rankIcon} />
                        <span className="text-lg">{dungeonsData.rank} ({dungeonsData.currentExp}/{dungeonsData.nextLevelExp})</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Boosted Runs</span>
                    <span className="text-lg">{dungeonsData.boostedRuns}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Credits</span>
                    <span className="text-lg">{dungeonsData.credits}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Flurbos</span>
                    <span className="text-lg">{dungeonsData.flurbos}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Next Happy Hour</span>
                    <span className="text-sm mt-1">{dungeonsData.nextHappyHour}</span>
                </div>
            </div>
            <Tabs 
                aria-label="options"
                color="primary"
                variant="underlined"
                className="mt-2"
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab title="Items">
                    <Items />
                </Tab>
                <Tab title="Passives">
                    <Passives />
                </Tab>
                <Tab title="Traits">
                    <Traits />
                </Tab>
            </Tabs>
        </div>
    )
}
export default Dungeons
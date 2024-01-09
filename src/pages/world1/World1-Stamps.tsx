import { Checkbox, Tooltip, Image, Divider } from '@nextui-org/react'
import InfoIcon from '../../assets/InfoIcon.png'
import CombatStamp1 from '../../assets/CombatStamp1.png'

import StampsAData from '../../assets/data/stampsA-data.js'
import StampsBData from '../../assets/data/stampsB-data.js'
import StampsCData from '../../assets/data/stampsC-data.js'
import StampCard from '../../components/world1/stamps/StampCard'

const StampsAItems = StampsAData.map(item => {
    return (
        <StampCard 
            key={item.id}
            {...item}
        />
    )
})
const StampsBItems = StampsBData.map(item => {
    return (
        <StampCard 
            key={item.id}
            {...item}
        />
    )
})
const StampsCItems = StampsCData.map(item => {
    return (
        <StampCard 
            key={item.id}
            {...item}
        />
    )
})

function World1Stamps() {
    return (
        <div className="bg-zinc-900 flex flex-col text-white h-screen w-4/6 mx-auto mt-5">
            <h1 className="text-4xl">Stamps</h1>
            <div className="flex flex-row mt-5">
                <div className="grid">
                    <span className="text-sm">Total Levels</span>
                    <span className="text-lg">4025</span>
                </div>
                <div className="grid ml-5">
                    <span className="text-sm">Atom Discount</span>
                    <span className="text-lg">0% (+6%/day)</span>
                </div>
                <div className="flex flex-row ml-5">
                    <Checkbox radius="sm" className="text-white"></Checkbox>
                    <span className="my-auto">Highlight Stamps</span>
                    <Tooltip radius="none" placement="bottom" content={
                        <div>
                            <span className="text-lg font-semibold pt-2">Highlight Stamps</span>
                            <Divider className="my-4" />
                            <span className="text-sm">Enable this check to highlight stamps based on certain conditions:</span>
                            <div className="flex flex-row">
                                <div className="w-4 h-4 rounded-full bg-green-700 mt-1"></div>
                                <span className="text-lg ml-2">Can be upgraded with materials.</span>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-4 h-4 rounded-full bg-blue-800 mt-1"></div>
                                <span className="text-lg ml-2">Can be upgraded with coins.</span>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-4 h-4 rounded-full bg-red-700 mt-1"></div>
                                <span className="text-lg ml-2">Missing materials or money.</span>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-4 h-4 rounded-full bg-red-950 mt-1"></div>
                                <span className="text-lg ml-2">Not enough carry cap.</span>
                            </div>
                        </div>
                    }>
                        <Image 
                            width={15}
                            alt="Information icon"
                            src={InfoIcon}
                            className="mt-4 ml-1"
                        />
                    </Tooltip>
                </div>
            </div>
            <div className="flex flex-row mt-4 bg-neutral-800 p-4">
                <div className="flex flex-col w-1/3">
                    <span className="text-white text-sm">Combat (1290)</span>
                    <div className="flex flex-row flex-wrap mt-3">
                        {StampsAItems}
                    </div>
                </div>
                <div className="flex flex-col w-1/3 ml-5">
                    <span className="text-white text-sm">Skills (2387)</span>
                    <div className="flex flex-row flex-wrap mt-3">
                        {StampsBItems}
                    </div>
                </div>
                <div className="flex flex-col w-1/3 ml-5">
                    <span className="text-white text-sm">Misc (475)</span>
                    <div className="flex flex-row flex-wrap mt-3">
                        {StampsCItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default World1Stamps
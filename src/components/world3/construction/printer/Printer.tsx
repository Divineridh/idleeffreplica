import VoidWalker from '../../../../assets/classes/VoidWalker.png'
import DivineKnight from '../../../../assets/classes/DivineKnight.png'
import VoidSkill from '../../../../assets/skills/UISkillIcon32.png'
import Artifact4 from '../../../../assets/sailing/Arti4.png'

import PrinterSlot from './PrinterSlot'
import printerSamplesData from '../../../../assets/data/world3/construction/printerSamplesData.js'
const char1Samples = printerSamplesData.filter(item => item.char === 1)
const char1SamplesItems = char1Samples.map(item => {
    return (
        <PrinterSlot 
            key={item.id}
            {...item}
        />
    )
})
const char2Samples = printerSamplesData.filter(item => item.char === 2)
const char2SamplesItems = char2Samples.map(item => {
    return (
        <PrinterSlot 
            key={item.id}
            {...item}
        />
    )
})
const char3Samples = printerSamplesData.filter(item => item.char === 3)
const char3SamplesItems = char3Samples.map(item => {
    return (
        <PrinterSlot 
            key={item.id}
            {...item}
        />
    )
})
const char4Samples = printerSamplesData.filter(item => item.char === 4)
const char4SamplesItems = char4Samples.map(item => {
    return (
        <PrinterSlot 
            key={item.id}
            {...item}
        />
    )
})

import { Image, Divider } from '@nextui-org/react'

function Printer() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-center gap-10">
                <div className="flex flex-col p-6 gap-2 bg-zinc-800">
                    <div className="flex flex-row gap-3 items-center">
                        <Image width={40} src={VoidWalker} />
                        <span>Divinerid9</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <Image width={40} src={VoidSkill} />
                        <span>Skill is ready!</span>
                    </div>
                </div>
                <div className="flex flex-col p-6 gap-2 bg-zinc-800">
                    <div className="flex flex-row gap-3 items-center">
                        <Image width={40} src={DivineKnight} />
                        <span>Divinerid7</span>
                    </div>
                    <div className="text-sm text-gray-300">King Of The Remembered</div>
                    <div className="flex flex-row gap-3 items-center">
                        <Image width={40} src={VoidSkill} />
                        <span className="text-sm">0% (7.4K Kills)</span>
                    </div>
                </div>
                <div className="flex flex-col p-6 gap-5 bg-zinc-800">
                    <div className="text-sm text-gray-300">Gold Relic sample boost</div>
                    <div className="flex flex-row gap-3">
                        <Image width={20} src={Artifact4}/>
                        <div className="text-lg">0% (0 Day)</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-12 bg-zinc-800 gap-3">
                <div className="flex flex-row text-sm gap-4 justify-between">
                    <div>Player Name</div>
                    <div className="">Samples</div>
                    <div className="">Printing</div>
                </div>
                <Divider />
                <div className="flex flex-row items-center">
                    <span className="text-sm mr-16 w-20">Divinerid</span>
                    {char1SamplesItems}
                </div>
                <div className="flex flex-row items-center">
                    <span className="text-sm mr-16 w-20">Divinerid2</span>
                    {char2SamplesItems}
                </div>
                <div className="flex flex-row items-center">
                    <span className="text-sm mr-16 w-20">Divinerid3</span>
                    {char3SamplesItems}
                </div>
                <div className="flex flex-row items-center">
                    <span className="text-sm mr-16 w-20">Divinerid3</span>
                    {char4SamplesItems}
                </div>
            </div>
        </div>
    )
}

export default Printer
import { Checkbox } from '@nextui-org/react'
import { useState } from 'react'

import slabData from '../../../assets/data/account/slabData'
import SlabCard from './SlabCard'

const slabItems = slabData.map(item => {
    return (
        <SlabCard 
            key={item.id}
            {...item}
        />
    )
})

const slabItemsMissing = slabData.filter(item => item.looted === false)
const missingItems = slabItemsMissing.map(item => {
    return (
        <SlabCard 
            key={item.id}
            {...item}
        />
    )
})
const slabItemsLooted = slabData.filter(item => item.looted === true)
const lootedItems = slabItemsLooted.map(item => {
    return (
        <SlabCard 
            key={item.id}
            {...item}
        />
    )
})


function Slab() {

    const [missingCheck, setMissingCheck] = useState(false)
    const [lootedCheck, setLootedCheck] = useState(false)
    
    function handleMissingClick() {
        setMissingCheck(prevValue => !prevValue)
        if (lootedCheck === true) { 
            setLootedCheck(false) 
        }
    }
    function handleLootedClick() {
        setLootedCheck(prevValue => !prevValue)
        if (missingCheck === true) { 
            setMissingCheck(false) 
        }
    }


    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl ml-2">Slab</h1>
            <div className="flex flex-row gap-3 mt-10">
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Items Found</div>
                    <div className="text-lg">{slabItemsLooted.length}/{slabData.length}</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Missing</div>
                    <div className="text-lg">371</div>
                </div>
            </div>
            <div className="text-xs mt-6">*This is fairly accurate, but missing might show items that can't be obtained.</div>
            <div className="flex flex-row gap-1 text-sm mt-4">
                <Checkbox isSelected={missingCheck} onChange={handleMissingClick} radius="sm" />
                <div>Show only missing</div>
                <Checkbox isSelected={lootedCheck} onChange={handleLootedClick} className="ml-3" radius="sm" />
                <div>Show only looted</div>
            </div>
            <div className="flex flex-row flex-wrap gap-4 mt-8 px-6">
                {
                    missingCheck ?
                    missingItems :
                    lootedCheck ?
                    lootedItems : 
                    slabItems
                }
            </div>
        </div>
    )
}

export default Slab
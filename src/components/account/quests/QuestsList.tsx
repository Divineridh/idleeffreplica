import { Listbox, ListboxItem, Image } from '@nextui-org/react'
import { useState, useMemo } from 'react'

import questsData from '../../../assets/data/account/questsData'
import QuestsPanel from './QuestsPanel'


interface propTypes {
    world: string,
    listFirst: string,
}

export default function QuestsList(props: propTypes) {
    
    const [selectedKeys, setSelectedKeys] = useState(new Set ([props.listFirst]))

    const currentKey = useMemo(
        () => Array.from(selectedKeys).join(", "),
        [selectedKeys]
    )
    
    const questsFilter = questsData.filter(item => item.world === props.world)
    const questsList = questsFilter.map(item => {
        return (
            <ListboxItem startContent={<Image width={30} src={item.icon} />} endContent=">" key={item.name}>{item.name}</ListboxItem>
        )
    })

    const currentQuests = questsFilter.filter(item => item.name === currentKey)
    const questsPanel = currentQuests.map(item => {
        return (
            <QuestsPanel 
                key={item.id}
                {...item}
            />
        )
    })


    return (
        <div className="flex flex-row shadow-2xl">
            <div className="w-1/4 p-4">
                <Listbox
                    selectionMode="single"
                    hideSelectedIcon={true}
                    disallowEmptySelection={true}
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                    classNames={{
                        list: "text-gray-300",
                    }}
                    itemClasses={{
                        base: "data-[hover=true]:bg-default-100/40",
                    }}
                >
                    {questsList}
                </Listbox>
            </div>
            <div className="w-3/4 bg-zinc-800 flex flex-col gap-1">
                {questsPanel}
            </div>
        </div>
    )
}

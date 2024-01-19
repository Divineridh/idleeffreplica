import { Checkbox, Autocomplete, AutocompleteItem } from '@nextui-org/react'

import storageData from '../../../assets/data/account/storageData'
import StorageCard from './StorageCard'

const storageItems = storageData.map(item => {
    return (
        <StorageCard 
            key={item.id}
            {...item}
        />
    )
})

function Storage() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl">Storage</h1>
            <div className="flex flex-col mt-6">
                <div className="text-lg">Filters</div>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-row items-center">
                        <Checkbox radius="sm" />
                        <div className="text-sm whitespace-nowrap">Group by type</div>
                        <Autocomplete size="sm" variant="bordered" label="Filter by type" className="ml-10">
                            <AutocompleteItem key="materials">Materials</AutocompleteItem>
                            <AutocompleteItem key="equipment">Equipment</AutocompleteItem>
                            <AutocompleteItem key="misc">Misc</AutocompleteItem>
                            <AutocompleteItem key="consumables">Consumables</AutocompleteItem>
                        </Autocomplete>
                    </div>                    
                </div>
                <div className="flex flex-col mt-6 bg-zinc-800">
                    <div className="flex flex-row flex-wrap p-7">
                        {storageItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Storage
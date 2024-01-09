import { Checkbox } from '@nextui-org/react'

import BuildingsData from '../../../../assets/data/buildingsData'
import BuildingCard from './BuildingCard'
const buildingItems = BuildingsData.map(building => {
    return (
        <BuildingCard 
            key={building.id} 
            {...building}
        />
    )
})

function Buildings() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Total Levels</span>
                    <span className="text-lg">621</span>
                </div>
                <Checkbox radius="sm" className="ml-4" />
                <span className="text-sm">Hide max level buildings</span>
            </div>
            <div className="flex flex-col gap-3">
                {buildingItems}
            </div>
        </div>
    )
}

export default Buildings
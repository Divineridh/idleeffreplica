import spicesData from '../../../assets/data/spicesData'
import mealsData from '../../../assets/data/mealsData'

import SpiceCard from './SpiceCard'
import MealCard from './MealCard'

const spiceItems = spicesData.map(spice => {
    return (
        <SpiceCard 
            key={spice.id}
            {...spice}
        />
    )
})

const mealItems =  mealsData.map(meal => {
    return (
        <MealCard 
            key={meal.id}
            {...meal}
        />
    )       
})

import { Select, SelectItem } from '@nextui-org/react'

function Cooking() {
    return (
        <div className="flex flex-col pl-2">
            <h1 className="text-4xl">Cooking</h1>
            <span className="text-lg mt-6">Spices</span>
            <div className="flex flex-row flex-wrap mt-2 pr-3 container">
                {spiceItems}
            </div>
            <div className="flex flex-row mt-8 gap-6">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Total Cooking Speed</span>
                    <span className="text-lg">218B</span>
                </div>                
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Meals Discovered</span>
                    <span className="text-lg">36/57</span>
                </div>                
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Lv 11+ Meals</span>
                    <span className="text-lg">35/57</span>
                </div>                
            </div>
            <span className="text-lg mt-2">Meals</span>
            <Select
                radius="sm"
                size="sm"
                variant="bordered"
                label="Sort by"
                className="w-1/5 mt-1"
                classNames={{
                    popoverContent:"bg-gray-600 text-white",
                    label:"text-white"
                }}
            >
                <SelectItem key="level" value="level">Level</SelectItem>
                <SelectItem key="next" value="next">Least Time to Cook Next</SelectItem>
                <SelectItem key="diamond" value="diamond">Least Time to Diamond</SelectItem>
                <SelectItem key="purple" value="purple">Least Time to Purple</SelectItem>
                <SelectItem key="void" value="void">Least Time to Void</SelectItem>
                <SelectItem key="30" value="30">Least Time to 30</SelectItem>
            </Select>
            <div className="flex flex-row justify-evenly mt-4 mr-10">
                <div className="flex flex-row w-1/3 pl-12 justify-between">
                    <span className="text-xs text-gray-300">Bonus</span>
                    <span className="text-xs text-gray-300 mr-8">Next Level</span>
                </div>
                <div className="flex flex-row w-1/3 pl-12 justify-between">
                    <span className="text-xs text-gray-300">Bonus</span>
                    <span className="text-xs text-gray-300 mr-6">Next Level</span>
                </div>
                <div className="flex flex-row w-1/3 pl-12 justify-between">
                    <span className="text-xs text-gray-300">Bonus</span>
                    <span className="text-xs text-gray-300 mr-3">Next Level</span>
                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-3">
                {mealItems}
            </div>
        </div>
    )
}

export default Cooking
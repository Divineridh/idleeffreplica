import { Image } from '@nextui-org/react'

import AnvilCard from './AnvilCard'
import AnvilCostsCard from './AnvilCostsCard'

interface propTypes {
    monsterMaterial: string,
    materialIcon: string,
    totalCost: number,
    heldAmount: number
}

import AnvilPointsData from '../../../assets/data/world1/anvil-points-data.js'

function AnvilPointsCard(props: propTypes) {

    const filteredItems = AnvilPointsData.filter((item) => item.monsterMaterial === props.monsterMaterial)
    console.log(filteredItems)

    const items = filteredItems.map(item => {
        return (
          <AnvilCostsCard 
            key={item.id}
            {...item}
          />
        )
      })

    return (
        <div className="flex flex-col bg-neutral-800 mb-3">
            <div className="flex flex-row items-start">
                <div className="flex flex-col ml-2 p-2 w-28">
                    <Image 
                        width={30}
                        src={props.materialIcon}
                        className="my-3 ml-8"
                    />
                    <div className="text-gray-300 text-sm">Total costs</div>
                    <div className="text-green-700 text-sm">{props.totalCost > 999 ? (props.totalCost / 1000) + 'K' : props.totalCost} ({props.heldAmount > 999999 ? (props.heldAmount / 1000000) + 'M' : props.heldAmount})</div>
                </div>
                <div className="flex flex-row gap-3 my-auto ml-3">
                    {items}
                </div>
            </div>
        </div>
    )
}

export default AnvilPointsCard
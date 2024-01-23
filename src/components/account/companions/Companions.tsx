import companionsData from '../../../assets/data/account/companionsData'
import CompanionCard from './CompanionCard'

const companionItems = companionsData.map(item => {
    return (
        <CompanionCard 
            key={item.id}
            {...item}
        />
    )
})

export default function Companions() {
  return (
    <div className="flex flex-col">
        <h1 className="text-4xl ml-2">Rift</h1>
        <div className="grid grid-cols-4 gap-6 mt-10">
            {companionItems}
        </div>
    </div>
  )
}

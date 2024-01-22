import itemsData from '../../../assets/data/account/dungeons/itemsData'
import ItemCard from './ItemCard'

const items = itemsData.map(item => {
    return (
        <ItemCard 
            key={item.id}
            {...item}
        />
    )
})

function Items() {
    return (
        <div className="flex flex-row flex-wrap gap-1">
            {items}
        </div>
    )
}

export default Items
import shinyData from '../../../assets/data/world4/breeding/shinyData'
import ShinyCard from './ShinyCard'

const shinyItems = shinyData.map(shiny => {
    return (
        <ShinyCard 
            key={shiny.id}
            {...shiny}
        />
    )
})

function Shiny() {
    return (
        <div className="flex flex-col">
            <div className="text-lg mt-2">Shiny Bonuses</div>
            <div className="grid grid-cols-3 gap-3">
                {shinyItems}
            </div>
        </div>
    )
}

export default Shiny
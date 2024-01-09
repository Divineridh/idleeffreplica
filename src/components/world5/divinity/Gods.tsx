import godsData from '../../../assets/data/godsData'
import GodCard from './GodCard'

const godItems = godsData.map(god => {
    return (
        <GodCard 
            key={god.id}
            {...god}
        />
    )
})

function Gods() {
    return (
        <div className="flex flex-col gap-3">
            {godItems}
        </div>  
    )
}

export default Gods
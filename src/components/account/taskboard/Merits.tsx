import meritsData from '../../../assets/data/account/meritsData'
import MeritCard from './MeritCard'

interface propTypes {
    currentTab: string,
}

function Merits(props: propTypes) {

    const currentWorldMerits = meritsData.filter(merit => merit.world === props.currentTab)
    const meritItems = currentWorldMerits.map(merit => {
        return (
            <MeritCard 
                key={merit.id}
                {...merit}
            />
        )
    })

    return (
        <div className="flex flex-row gap-3 flex-wrap">
            {meritItems}
        </div>
    )
}

export default Merits
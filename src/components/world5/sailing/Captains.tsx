import captainsData from '../../../assets/data/world5/sailing/captainsData'
import CaptainCard from './CaptainCard'

const captainItems = captainsData.map(captain => {
    return (
        <CaptainCard 
            key={captain.id}
            {...captain}
        />
    )
})

function Captains() {
    return (
        <div className="flex flex-row gap-3 flex-wrap">
            {captainItems}
        </div>
    )
}

export default Captains
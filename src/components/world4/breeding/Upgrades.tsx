import upgradesData from '../../../assets/data/world4/breeding/upgradesData'
import UpgradeCard from './UpgradeCard'

const upgradeItems = upgradesData.map(item => {
    return (
        <UpgradeCard 
            key={item.id} 
            {...item}
        />
    )
})

function Upgrades() {
    return (
        <div className="flex flex-col gap-6">
            {upgradeItems}
        </div>
    )
}

export default Upgrades
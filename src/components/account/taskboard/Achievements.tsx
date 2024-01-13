import achievementsData from '../../../assets/data/account/achievementsData'
import AchievementCard from './AchievementCard'

interface propTypes {
    currentTab: string,
}

function Achievements(props: propTypes) {

    const currentWorldAchievements = achievementsData.filter(item => item.world === props.currentTab)
    const achievementItems = currentWorldAchievements.map(item => {
        return (
            <AchievementCard
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="grid grid-cols-11 gap-6 p-10 bg-zinc-800">
            {achievementItems}
        </div>
    )
}

export default Achievements
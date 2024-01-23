interface propTypes {
    activePlayer: string,
    currentKey: string,
}

import RandomStats from "./RandomStats"
import randomStatsData from '../../assets/data/players/randomStatsData'

import Skills from "./Skills"
import skillsData from '../../assets/data/players/skillsData'

import Equipment from "./Equipment"
import equipmentData from '../../assets/data/players/equipmentData'

export default function PlayersPanel(props: propTypes) {
    
    const randomStatsFilter = randomStatsData.filter(item => item.player === props.activePlayer)
    const randomStatsItem = randomStatsFilter.map(item => {
        return (
            <RandomStats 
                key={item.id}
                {...item}
            />
        )
    })

    const skillsFilter = skillsData.filter(item => item.player === props.activePlayer)
    const skillsItem = skillsFilter.map(item => {
        return (
            <Skills 
                key={item.id}
                {...item}
            />
        )
    })

    const equipmentFilter = equipmentData.filter(item => item.player === props.activePlayer)
    const equipmentItem = equipmentFilter.map(item => {
        return (
            <Equipment 
                key={item.id}
                {...item}
            />
        )
    })



  return (
    <div>
        {
            props.currentKey === "randomStats" ? randomStatsItem : 
            props.currentKey === "skills" ? skillsItem :
            props.currentKey === "equipment" ? equipmentItem :
            "testing"
        }
    </div>
  )
}

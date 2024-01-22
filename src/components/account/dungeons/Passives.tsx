import passivesData from '../../../assets/data/account/dungeons/passivesData'
import Passive from './Passive'

const dungeonPassives = passivesData.filter(item => item.type === 'dungeon')
const flurboPassives = passivesData.filter(item => item.type === 'flurbo')

const dungeonItems = dungeonPassives.map(item => {
  return (
    <Passive 
      key={item.id}
      {...item}
    />
  )
})
const flurboItems = flurboPassives.map(item => {
  return (
    <Passive 
      key={item.id}
      {...item}
    />
  )
})

export default function Passives() {
  return (
    <div className="flex flex-row justify-around gap-12 px-20 mt-10">
        <div className="flex flex-col gap-3 w-1/2">
          <span className="text-lg font-bold">Dungeon</span>
          {dungeonItems}
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <span className="text-lg font-bold">Flurbo</span>
          {flurboItems}
        </div>
    </div>
  )
}

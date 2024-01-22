import traitsData from '../../../assets/data/account/dungeons/traitsData'
import TraitCard from './TraitCard'

const Traits5 = traitsData.filter(item => item.rank === 5)
const Traits10 = traitsData.filter(item => item.rank === 10)
const Traits15 = traitsData.filter(item => item.rank === 15)
const Traits20 = traitsData.filter(item => item.rank === 20)
const Traits25 = traitsData.filter(item => item.rank === 25)
const Traits30 = traitsData.filter(item => item.rank === 30)
const Traits35 = traitsData.filter(item => item.rank === 35)
const Traits40 = traitsData.filter(item => item.rank === 40)
const Traits50 = traitsData.filter(item => item.rank === 50)

const items5 = Traits5.map(item => {
  return (
    <TraitCard 
      key={item.id}
      {...item}
    />
  )
})
const items10 = Traits10.map(item => {
  return (
    <TraitCard 
      key={item.id}
      {...item}
    />
  )
})
const items15 = Traits15.map(item => {
  return (
    <TraitCard 
      key={item.id}
      {...item}
    />
  )
})
const items20 = Traits20.map(item => {
  return (
    <TraitCard 
      key={item.id}
      {...item}
    />
  )
})
const items25 = Traits25.map(item => {
  return (
    <TraitCard 
      key={item.id}
      {...item}
    />
  )
})
const items30 = Traits30.map(item => {
  return (
    <TraitCard 
      key={item.id}
      {...item}
    />
  )
})
const items35 = Traits35.map(item => {
  return (
    <TraitCard 
      key={item.id}
      {...item}
    />
  )
})
const items40 = Traits40.map(item => {
  return (
    <TraitCard 
      key={item.id}
      {...item}
    />
  )
})
const items50 = Traits50.map(item => {
  return (
    <TraitCard 
      key={item.id}
      {...item}
    />
  )
})

export default function Traits() {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      <div className="flex flex-col p-3 items-center bg-zinc-800 gap-5 w-[432px] shadow-2xl">
        <span className="text-lg">Beginner Traits (Rank 5+)</span>
        <div className="flex flex-row gap-3 mb-2">{items5}</div>
      </div>
      <div className="flex flex-col p-3 items-center bg-zinc-800 gap-5 w-[432px] shadow-2xl">
        <span className="text-lg">Da Cred Traits (Rank 20+)</span>
        <div className="flex flex-row gap-3 mb-2">{items20}</div>
      </div>
      <div className="flex flex-col p-3 items-center bg-zinc-800 gap-5 w-[432px] shadow-2xl">
        <span className="text-lg">ChOiIiCe Traits (Rank 35+)</span>
        <div className="flex flex-row gap-3 mb-2">{items35}</div>
      </div>
      <div className="flex flex-col p-3 items-center bg-zinc-800 gap-5 w-[432px] shadow-2xl">
        <span className="text-lg">Kinda Cool Traits (Rank 10+)</span>
        <div className="flex flex-row gap-3 mb-2">{items10}</div>
      </div>
      <div className="flex flex-col p-3 items-center bg-zinc-800 gap-5 w-[432px] shadow-2xl">
        <span className="text-lg">Drop Drip Traits (Rank 25+)</span>
        <div className="flex flex-row gap-3 mb-2">{items25}</div>
      </div>
      <div className="flex flex-col p-3 items-center bg-zinc-800 gap-5 w-[432px] shadow-2xl">
        <span className="text-lg">Royale Traits (Rank 40+)</span>
        <div className="flex flex-row gap-3 mb-2">{items40}</div>
      </div>
      <div className="flex flex-col p-3 items-center bg-zinc-800 gap-5 w-[432px] shadow-2xl">
        <span className="text-lg">Strategery Traits (Rank 15+)</span>
        <div className="flex flex-row gap-3 mb-2">{items15}</div>
      </div>
      <div className="flex flex-col p-3 items-center bg-zinc-800 gap-5 w-[432px] shadow-2xl">
        <span className="text-lg">Cash Money Traits (Rank 30+)</span>
        <div className="flex flex-row gap-3 mb-2">{items30}</div>
      </div>
      <div className="flex flex-col p-3 items-center bg-zinc-800 gap-5 w-[432px] shadow-2xl">
        <span className="text-lg">Endothelium Traits (Rank 50+)</span>
        <div className="flex flex-row gap-3 mb-2">{items50}</div>
      </div>
    </div>
  )
}

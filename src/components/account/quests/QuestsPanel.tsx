import React from 'react'
interface propTypes {
  icon: string,
  name: string,
  world: string,
  quests: [],
}

import BB from '../../../assets/classes/BloodBerzerker.png'
import SB from '../../../assets/classes/ShipBreaker.png'
import BC from '../../../assets/classes/Bubo.png'
import DK from '../../../assets/classes/DivineKnight.png'
import ES from '../../../assets/classes/ElementalSorcerer.png'
import BM from '../../../assets/classes/BeastMaster.png'
import VW from '../../../assets/classes/VoidWalker.png'

import { Image, Divider } from '@nextui-org/react'

export default function QuestsPanel(props: propTypes) {

  const quests = props.quests.map(item => {
    return (
      <div className="flex flex-col">
        <span className="text-sm">{item.name}</span>
        <div className="flex flex-row flex-wrap gap-3 mt-4">
          <div className={`flex flex-row p-1 w-32 justify-center items-center gap-2 bg-zinc-900 border ${item.players[0].completion === true ? "border-lime-600" : "border-zinc-900"}`}>
            <Image width={30} src={BB} />
            <span className="text-xs text-gray-400">Divinerid</span>
          </div>
          <div className={`flex flex-row p-1 w-32 justify-center items-center gap-2 bg-zinc-900 border ${item.players[1].completion === true ? "border-lime-600" : "border-zinc-900"}`}>
            <Image width={30} src={SB} />
            <span className="text-xs text-gray-400">Divinerid2</span>
          </div>
          <div className={`flex flex-row p-1 w-32 justify-center items-center gap-2 bg-zinc-900 border ${item.players[2].completion === true ? "border-lime-600" : "border-zinc-900"}`}>
            <Image width={30} src={BC} />
            <span className="text-xs text-gray-400">Divinerid3</span>
          </div>
          <div className={`flex flex-row p-1 w-32 justify-center items-center gap-2 bg-zinc-900 border ${item.players[3].completion === true ? "border-lime-600" : "border-zinc-900"}`}>
            <Image width={30} src={DK} />
            <span className="text-xs text-gray-400">Divinerid4</span>
          </div>
          <div className={`flex flex-row p-1 w-32 justify-center items-center gap-2 bg-zinc-900 border ${item.players[4].completion === true ? "border-lime-600" : "border-zinc-900"}`}>
            <Image width={30} src={ES} />
            <span className="text-xs text-gray-400">Divinerid5</span>
          </div>
          <div className={`flex flex-row p-1 w-32 justify-center items-center gap-2 bg-zinc-900 border ${item.players[5].completion === true ? "border-lime-600" : "border-zinc-900"}`}>
            <Image width={30} src={BM} />
            <span className="text-xs text-gray-400">Divinerid6</span>
          </div>
          <div className={`flex flex-row p-1 w-32 justify-center items-center gap-2 bg-zinc-900 border ${item.players[6].completion === true ? "border-lime-600" : "border-zinc-900"}`}>
            <Image width={30} src={DK} />
            <span className="text-xs text-gray-400">Divinerid7</span>
          </div>
          <div className={`flex flex-row p-1 w-32 justify-center items-center gap-2 bg-zinc-900 border ${item.players[7].completion === true ? "border-lime-600" : "border-zinc-900"}`}>
            <Image width={30} src={ES} />
            <span className="text-xs text-gray-400">Divinerid8</span>
          </div>
          <div className={`flex flex-row p-1 w-32 justify-center items-center gap-2 bg-zinc-900 border ${item.players[8].completion === true ? "border-lime-600" : "border-zinc-900"}`}>
            <Image width={30} src={VW} />
            <span className="text-xs text-gray-400">Divinerid9</span>
          </div>
          <div className={`flex flex-row p-1 w-32 justify-center items-center gap-2 bg-zinc-900 border ${item.players[9].completion === true ? "border-lime-600" : "border-zinc-900"}`}>
            <Image width={30} src={SB} />
            <span className="text-xs text-gray-400">Divinerid10</span>
          </div>
        </div>
        <Divider className="bg-gray-600 mt-6" />
      </div>
    )
  })

  return (
    <div className="flex flex-col p-6">
      <div className="flex flex-row gap-4 items-center">
        <Image width={50} src={props.icon} />
        <span className="text-lg">{props.name}</span>
      </div>
      <div className="flex flex-col ml-10 mt-6 gap-4">
        {quests}
      </div>
    </div>
  )
}

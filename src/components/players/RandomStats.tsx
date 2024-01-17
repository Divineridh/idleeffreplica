interface propTypes {
    class: string,
    level: number,
    currentXp: number,
    nextLevelXp: number,
    activityIcon: string,
    activityText: string,
    activityTarget: string,
    portalCurrent: number,
    portalCap: number,
    signs: [],
    awayHours: number,
    awayMinutes: number,
    awaySeconds: number,
    strength: number,
    agility: number,
    wisdom: number,
    luck: number,
    crystalSpawn: string,
    doubleXP: number,
    monsterCash: number,
    chargeRate: number,
    money: object,
    cards: [],
    cardSet: string,
    activePrayers: [],
}

import { Image, Progress } from '@nextui-org/react'

import Shrine1 from '../../assets/shrines/Shrine1.png'
import Shrine2 from '../../assets/shrines/Shrine2.png'
import Shrine3 from '../../assets/shrines/Shrine3.png'
import Shrine4 from '../../assets/shrines/Shrine4.png'
import Shrine5 from '../../assets/shrines/Shrine5.png'
import Shrine6 from '../../assets/shrines/Shrine6.png'
import Shrine7 from '../../assets/shrines/Shrine7.png'
import Shrine8 from '../../assets/shrines/Shrine8.png'
import Shrine9 from '../../assets/shrines/Shrine9.png'


function RandomStats(props: propTypes) {
    
    const signItems = props.signs.map(sign => {
        return (
            <div>Sign {sign.number}: {sign.description}</div>
        )
    })

    const cardItems = props.cards.map(card => {
        return (
            <Image radius="none" src={card.image} />
        )
    })

    const prayerItems = props.activePrayers.map(prayer => {
        return (
            <Image width={50} radius="none" src={prayer.icon} />
        )
    })

    return (
        <div className="flex flex-col">
            <div className="text-lg">Random Stats</div>
            <div className="grid grid-cols-2 mt-6 ml-4">
                <div className="flex flex-col gap-2 text-sm">
                    <div className="flex flex-row gap-2 items-center">
                        <Image width={40} src={props.class} />
                        <div className="flex flex-col gap-3 w-1/2">
                            <div>{props.level}</div>
                            <Progress size="sm" value={props.currentXp} maxValue={props.nextLevelXp} />
                            <div className="flex flex-row justify-between text-xs">
                                <div>{props.currentXp/10000000000+'B'}</div>
                                <div>{props.nextLevelXp/10000000000+'B'}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-gray-300 mt-2">Activity</div>
                        <div className="flex flex-row items-center gap-1">
                            <Image width={25} src={props.activityIcon} />
                            <div className="">{props.activityText} | {props.activityTarget}</div>
                        </div>
                    </div>
                    <div>Portal Requirement: {props.portalCurrent > 999999 ? props.portalCurrent/1000000+'M' : props.portalCurrent} / [{props.portalCap > 999999 ? props.portalCap/1000000+'M' : props.portalCap}]</div>
                    {signItems}
                    <div>Away Since = {props.awayHours} : {props.awayMinutes} : {props.awaySeconds}</div>
                    <div>STR = {props.strength}</div>
                    <div>AGI = {props.agility}</div>
                    <div>WIS = {props.wisdom}</div>
                    <div>LUK = {props.luck}</div>
                    <div className="flex flex-col">
                        <div className="text-gray-300">Crystal spawn chance</div>
                        <div className="text-lg">{props.crystalSpawn}</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-gray-300">Double XP Chance</div>
                        <div className="text-lg">{props.doubleXP}%</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-gray-300">Monster Cash</div>
                        <div className="text-lg">{props.monsterCash}</div>
                    </div>
                    <div>Charge Rate = {props.chargeRate}</div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-lg">Equipped Cards:</div>
                    <div className="grid grid-cols-4 gap-2 w-2/5">
                        {cardItems}
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="text-sm text-gray-300">Card set</div>
                        <div className="text-lg">{props.cardSet}</div>
                    </div>
                    <div className="text-lg mt-4">Active Shrines:</div>
                    <div className="flex flex-row flex-wrap gap-3">
                        <Image width={50} src={Shrine1} />
                        <Image width={50} src={Shrine2} />
                        <Image width={50} src={Shrine3} />
                        <Image width={50} src={Shrine4} />
                        <Image width={50} src={Shrine5} />
                        <Image width={50} src={Shrine6} />
                        <Image width={50} src={Shrine7} />
                        <Image width={50} src={Shrine8} />
                        <Image width={50} src={Shrine9} />
                    </div>
                    <div className="text-lg">Active Prayers:</div>
                    <div className="flex flex-row flex-wrap gap-3">
                        {prayerItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomStats
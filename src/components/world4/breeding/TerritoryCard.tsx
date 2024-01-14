interface propTypes {
    name: string,
    spiceIcon: string,
    currentSpices: number,
    currentProgress: number,
    nextProgress: number,
    foragingSpeed: number,
    pets: [],
}

import { Image } from '@nextui-org/react'
import PetBackcard1 from '../../../assets/breeding/PetBackcard1.png'

function TerritoryCard(props: propTypes) {

    const petItems = props.pets.map(item => {
        return (
            <div className="flex relative">
                <Image 
                    radius="none"
                    src={PetBackcard1}
                    className="relative"
                />
                <div className="absolute inset-0 flex flex-col gap-1 justify-center items-center">
                    <Image 
                        width={70}
                        src={item.pet}
                        className=""
                    />
                    <div className="text-xs z-10 text-white">{item.power > 999 ? item.power/1000+'K' : item.power}</div>
                </div>
            </div>
        )
    })

    return (
        <div className="bg-zinc-800 flex flex-row p-3 justify-around">
            <div className="flex flex-col w-32">
                <div className="text-sm text-gray-300">Name</div>
                <div className="text-sm">{props.name}</div>
            </div>
            <div className="flex flex-col w-32">
                <div className="text-sm text-gray-300">Current Spices</div>
                <div className="flex flex-row gap-3 items-center">
                    <Image width={35} src={props.spiceIcon} />
                    <div className="text-lg">{props.currentSpices}</div>
                </div>
            </div>
            <div className="flex flex-col w-32">
                <div className="text-sm text-gray-300">Progress</div>
                <div className="text-sm">{props.currentProgress}/{props.nextProgress}</div>
            </div>
            <div className="flex flex-col w-32">
                <div className="text-sm text-gray-300">Foraging Speed</div>
                <div className="text-sm">{props.foragingSpeed > 999999 ? props.foragingSpeed/1000000+'M' : props.foragingSpeed > 999 ? props.foragingSpeed/1000+'K' : props.foragingSpeed }</div>
            </div>
            <div className="flex flex-row">
                {petItems}
            </div>
        </div>
    )
}

export default TerritoryCard
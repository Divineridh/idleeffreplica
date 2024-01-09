interface propTypes {
    class: string,
    player: string,
    level: number,
    style: string,
}

import {Image} from '@nextui-org/react'
import DivinityIcon from '../../../assets/divinity/DivinityIcon.png'

function AlignmentCard(props: propTypes) {
    return (
        <div className="flex flex-col gap-2 p-6 bg-zinc-800 shadow-lg w-40">
            <div className="flex flex-row gap-1">
                <Image 
                    width={30}
                    src={props.class}
                />
                <span className="text-sm">{props.player}</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-300">Level</span>
                <div className="flex flex-row gap-1">
                    <Image 
                        width={20}
                        src={DivinityIcon}
                    />
                    <span className="text-lg">{props.level}</span>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-300">Style</span>
                <span className="text-lg">{props.style}</span>
            </div>
        </div>
    )
}

export default AlignmentCard
interface propTypes {
    icon: string, 
    name: string, 
    level: number, 
    lineWidth: number,
}

import { Image, Divider } from '@nextui-org/react'
import LabIcon from '../../../assets/lab/LabIcon.png'

function PlayerTube(props: propTypes) {
    return (
        <div className="flex flex-row items-center border border-gray-700 text-sm gap-1 py-2 px-3 w-56">
            <Image 
                width={15}
                src={props.icon}
            />
            <span>{props.name}</span>
            <Image 
                width={15}
                src={LabIcon}
                className="ml-2"
            />
            <span className="ml-2">{props.level}</span>
            <Divider orientation="vertical" className="mx-2 bg-gray-700" />
            <span>{props.lineWidth}px</span>
        </div>
    )
}

export default PlayerTube
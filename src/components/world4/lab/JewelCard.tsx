interface propTypes {
    icon: string, 
    name: string,
    bonus: string, 
    active: boolean,
}

import { Image, Tooltip, Divider } from '@nextui-org/react'

function JewelCard(props: propTypes) {
    return (
        <Tooltip
            radius="none"
            className="bg-gray-100"
            content={
                <div className="bg-gray-100 text-gray-900 flex flex-col">
                    <span className="font-semibold">{props.name}</span>
                    <Divider />
                    <div>{props.bonus}</div>
                </div>
            }
        >
            <div className={`p-3 flex justify-center items-center bg-zinc-800 ${props.active ? 'border-2 border-lime-600' : 'border-2 border-zinc-800'}`}>
                <Image 
                        width={70}
                        src={props.icon}
                        className={props.active ? '' : 'brightness-50 saturate-50'}
                />
            </div>
        </Tooltip>
    )
}

export default JewelCard
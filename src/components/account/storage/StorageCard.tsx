interface propTypes {
    icon: string,
    amount: number,
    type: string,
    subtype: string,
}

import { Image } from '@nextui-org/react'

function StorageCard(props: propTypes) {
    return (
        <div className="flex flex-row items-center gap-1 p-2 border border-zinc-700 w-24 h-16">
            <Image width={35} src={props.icon} />
            <div className={`text-sm ${props.amount > 10000000 ? "text-lime-600" : ""}`}>{props.amount > 999999 ? props.amount/1000000+'M' : props.amount > 999 ? props.amount/1000+'K' : props.amount }</div>
        </div>
    )
}

export default StorageCard
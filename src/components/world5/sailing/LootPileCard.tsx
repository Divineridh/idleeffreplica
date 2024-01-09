interface propTypes {
    icon: string,
    amount: number,
}

import {Image} from '@nextui-org/react'

function LootPileCard(props: propTypes) {
    return (
        <div className="flex flex-row justify-center items-center w-24 h-11 border border-gray-700 bg-zinc-800">
            <Image 
                width={20}
                src={props.icon}
            />
            <span className="text-xs">{props.amount > 999999 ? props.amount/1000000 + 'M' : props.amount > 999 ? props.amount/1000 + 'K' : props.amount}</span>
        </div>
    )
}

export default LootPileCard
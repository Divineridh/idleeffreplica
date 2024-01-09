import { Image } from '@nextui-org/react'

interface propTypes {
    charClass: string,
    charNumber: number,
    amount: number
}

function AnvilCostsCard(props: propTypes) {
    return (
        <div className="flex flex-col w-24 border-2 border-gray-700 bg-zinc-900 p-2">
            <div className="flex flex-row justify-center mx-auto">
                <Image 
                    width={20}
                    src={props.charClass}
                />
                <div className="text-xs text-gray-400">{props.charNumber === 1 ? 'Divinerid' : 'Divinerid' + props.charNumber}</div>
            </div>
            <div className="text-sm flex flex-row justify-end">{(props.amount / 1000) + 'K'}</div>
        </div>
    )
}

export default AnvilCostsCard
interface propTypes {
    char: number,
    material: string,
    sample: number,
    printing: boolean,
}

import { Image } from '@nextui-org/react'

function PrinterSlot(props: propTypes) {
    return (
        <>
            {props.material === 'locked' ? 
            <div className="flex flex-col gap-1 justify-center items-center p-4 w-20 h-20 bg-stone-800 border-gray-700 border">
                <span className="text-xs text-gray-500">Locked</span>
            </div> : 
            props.material === 'empty' ? 
            <div className="flex flex-col gap-1 justify-center items-center p-4 w-20 h-20 bg-stone-800 border-gray-700 border">
                <span className="text-xs text-gray-500">Empty</span>
            </div> :
            <div className="flex flex-col gap-1 justify-center items-center p-4 w-20 h-20 bg-stone-800 border-gray-700 border">
                <Image width={30} src={props.material} />
                <div className={props.printing ? "text-sm text-green-700" : "text-sm"}>{props.sample > 999 ? props.sample/1000 + 'K' : props.sample}</div>
            </div>
            }
        </>    
        
    )
}

export default PrinterSlot
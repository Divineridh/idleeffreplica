import { Image, Progress } from '@nextui-org/react'

import StatusSkull4 from '../deathnote/StatusSkull4.png'


interface propTypes {
    world: number,
    skull: string,
    monster: string,
    currentAmount: number,
    nextSkull: number,
}

function DeathNoteCard(props: propTypes) {
    return (
        <div className="bg-zinc-800 flex flex-col gap-2 w-52 h-16">
            <div className="flex flex-row gap-1 items-center">
                <Image 
                    width={20}
                    src={props.skull}
                />
                <span className="text-sm mt-2">{props.monster}</span>
            </div>
            <div className="relative">
                <Progress 
                    color="primary" 
                    size="sm" 
                    value={props.currentAmount}
                    maxValue={props.nextSkull}
                    label={props.currentAmount > 999999 ? props.currentAmount/1000000 + 'M' : props.currentAmount}
                    classNames={{
                        label: "text-xs text-gray-400 absolute left-1 top-5",
                        track: "h-2"
                    }}    
                />
                <span className="absolute text-xs text-gray-400 right-1 top-5">{props.nextSkull > 999999 ? props.nextSkull/1000000 +'M' : props.nextSkull}</span>
            </div>
        </div>
    )
}

export default DeathNoteCard
interface propTypes {
    icon: string,
    name: string,
    bonus: string,
    bonusText: string,
    ancient: boolean,
    ancientBonus: string,
    eldritch: boolean,
    eldritchBonus: string,
}

import {Image, Divider} from '@nextui-org/react'

function ArtifactCard(props: propTypes) {
    return (
        <div className="flex flex-col p-5 bg-zinc-800 w-44 h-96 justify-between">
            <div className="flex flex-col">
                <div className="flex flex-row items-center gap-1">
                    <Image width={20} src={props.icon} />
                    <div className="text-lg">{props.name}</div>
                </div>
                <Divider className="my-2 bg-zinc-600" />
                {props.bonus !== '' ? 
                    <div className="flex flex-col">
                        <div className="text-xs text-gray-300">BONUS</div>
                        <div className="text-sm">{props.bonus}</div>
                    </div> : 
                    <></>
                }
                <div className="flex flex-col mt-2">
                    <div className="text-xs text-gray-300">BONUS TEXT</div>
                    <div className="text-xs">{props.bonusText}</div>
                </div>

            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <div className="text-xs text-gray-300">ANCIENT BONUS</div>
                    <div className={props.ancient ? "text-xs text-lime-600" : "text-xs text-gray-600"}>{props.ancientBonus}</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-xs text-gray-300">ELDRITCH BONUS</div>
                    <div className={props.eldritch ? "text-xs text-lime-600" : "text-xs text-gray-600"}>{props.eldritchBonus}</div>
                </div>
            </div>
        </div>
    )
}

export default ArtifactCard
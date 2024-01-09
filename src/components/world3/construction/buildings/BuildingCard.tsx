interface propTypes {
    name: string,
    icon: string,
    currentLevel: number,
    maxLevel: number,
    currentBuild: number,
    buildReq: number,
    nextLevel: [],
    costsToMaxLevel: number[],
}

import { Image } from '@nextui-org/react'

function BuildingCard(props: propTypes) {
    return(
        <div className="flex flex-row p-6 w-3/5 bg-zinc-800 justify-evenly">
            <div className="flex flex-col">
                <span className="text-sm">{props.name}</span>
                <Image 
                    width={50}
                    src={props.icon}
                />
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-400">Level</span>
                <span className="text-sm">{props.currentLevel + '/' + props.maxLevel}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-400">Build Req</span>
                <span className="text-sm">{(props.currentBuild > 999999 ? props.currentBuild/1000000 + 'M' : props.currentBuild > 999 ? props.currentBuild/1000 + 'K' : props.currentBuild) + '/' + (props.buildReq > 999999 ? props.buildReq/1000000 + 'M' : props.buildReq > 999 ? props.buildReq/1000 + 'K' : props.buildReq)}</span>
            </div>
            {/* <div className="flex flex-col">
                <span className="text-sm text-gray-400">Next level costs</span>
                <div className="flex flex-row">
                    <Image 
                        width={15}
                        src={props.nextLevel[0].material}
                    />
                    <span>{props.nextLevel[0].cost}</span>
                </div>
                <div className="flex flex-row">
                    <Image 
                        width={15}
                        src={props.nextLevel[1].material}
                    />
                    <span>{props.nextLevel[1].cost}</span>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-400">Cost to max level</span>
                <div className="flex flex-row">
                    <Image 
                        width={15}
                        src={props.nextLevel[0].material}
                    />
                    <span>{props.costsToMaxLevel[0]}</span>
                </div>
                <div className="flex flex-row">
                    <Image 
                        width={15}
                        src={props.nextLevel[1].material}
                    />
                    <span>{props.costsToMaxLevel[1]}</span>
                </div>
            </div> */}
        </div>
    )
}

export default BuildingCard
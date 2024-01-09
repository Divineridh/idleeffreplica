import {Image, Tooltip, Divider} from '@nextui-org/react'

interface propTypes {
    icon: string,
    name: string,
    distance: number,
    unlocked: boolean,
    currentDiscover: number,
    discoverReq: number,
    artifactsArray: object[],
}



function IslandCard(props: propTypes) {

    const artifactItems = props.artifactsArray.map(item => {
        return (
            <Tooltip 
            radius="none"
            className="flex justify-center items-center"
            content={
                <div className="flex flex-col p-2">
                    <div className="text-lg font-bold">{item.status === 1 ? item.name + ' (Ancient)' : item.name}</div>
                    <Divider className="bg-zinc-900" />
                    <div className="text-lg mt-2">{item.bonus}</div>
                </div>
            }
            >
                <Image 
                    radius="none"
                    width={25}
                    src={item.icon}
                    className={item.status === 0 ? "brightness-50" : item.status === 1 ? "border border-lime-600" : "border border-zinc-800"}
                />
            </Tooltip>
        )
    })

    return (
        <div className={"flex flex-col gap-2 p-3 bg-zinc-800 w-48 h-44 shadow-2xl " + (props.unlocked === false ? "brightness-50" : "")}>
            <div className="flex flex-row gap-1 items-center">
                <Image width={25} src={props.icon} />
                <div className="text-lg">{props.name}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-xs text-gray-300">Distance</div>
                <div className="text-xs">{props.distance > 999999 ? props.distance/1000000+'M' : props.distance > 999 ? props.distance/1000+'K' : props.distance}</div>
            </div>
            {props.unlocked === false ? 
            <div className="flex flex-col">
                <div className="text-xs text-gray-300">Discover Req</div>
                <div className="text-xs">{props.currentDiscover + '/' + props.discoverReq/1000000+'M'}</div>
            </div> : <></>}
            <div className="flex flex-row gap-1 mt-2 ">
                {artifactItems}
            </div>
        </div>
    )
}

export default IslandCard
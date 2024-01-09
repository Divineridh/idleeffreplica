interface propTypes {
    currentLocation: string,
    boatNumber: number,
    boatLoot: number,
    boatSpeed: number,
    captainLetter: string,
    captainStat1Icon: string,
    captainStat1Value: string,
    captainStat2Icon: string,
    captainStat2Value: string,
    twoHourDistance: number,
    islandDistance: number,
}

import SailTra0 from '../../../assets/sailing/SailTra0.png';
import SailTra1 from '../../../assets/sailing/SailTra1.png';
import InfoIcon from '../../../assets/InfoIcon.png'

import {Image, Divider, Tooltip} from '@nextui-org/react'

function OverviewCard(props: propTypes) {
    return (
        <div className="flex flex-row justify-evenly p-4 bg-zinc-800">
            <Image 
                width={20}
                src={props.currentLocation}
            />
            <Divider orientation="vertical" className="mx-4 bg-gray-700 z-10" />
            <div className="flex flex-row gap-2 items-center">
                <span className="text-lg">{props.boatNumber}</span>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <Image width={20} src={SailTra0} />
                        <span className="text-xs">{props.boatLoot > 999 ? props.boatLoot/1000+'K' : props.boatLoot}</span>
                    </div>
                    <div className="flex flex-row">
                        <Image width={20} src={SailTra1} />
                        <span className="text-xs">{props.boatSpeed > 999 ? props.boatSpeed/1000+'K' : props.boatSpeed}</span>
                    </div>
                </div>
            </div>
            <Divider orientation="vertical" className="mx-4 bg-gray-400" />
            <div className="flex flex-row gap-2 items-center">
                <span className="text-lg">{props.captainLetter}</span>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <Image width={20} src={props.captainStat1Icon} />
                        <span className="text-xs">{props.captainStat1Value}</span>
                    </div>
                    <div className="flex flex-row">
                        <Image width={20} src={props.captainStat2Icon} />
                        <span className="text-xs">{props.captainStat2Value}</span>
                    </div>
                </div>
            </div>    
            <Divider orientation="vertical" className="mx-4 bg-gray-700" />
            <span className="mx-10">Some Summary</span>
            <div className="flex flex-row gap-3">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-300 flex flex-row gap-1 items-center">2hrs dist 
                        <Tooltip 
                        radius="none"
                        className="w-64"
                        content={
                            <div className="flex flex-col p-1">
                                <span className="text-lg font-bold">2hrs dist</span>
                                <Divider className="bg-gray-800 mt-4" />
                                <span className="text-lg mt-2">This is how far the ship travels in 2h, you want to target islands that have less distance than this.</span>
                            </div>
                        }>
                            <Image width={12} src={InfoIcon} />
                        </Tooltip>
                    </span>
                    <span>{props.twoHourDistance > 999999 ? props.twoHourDistance/1000000 + 'M' : props.twoHourDistance > 999 ? props.twoHourDistance/1000 + 'K' : props.twoHourDistance}</span>
                </div>
                <div className="flex flex-col">
                    <span>Island Distance</span>
                    <span>{props.islandDistance}</span>
                </div>
            </div>
        </div>
    )
}

export default OverviewCard
import { Tooltip, Image, Divider } from '@nextui-org/react'

import familyData from '../../../assets/data/account/obols/familyData'

const familyObols = familyData.map(item => {
    return (
        <div>
            <Tooltip
                radius="none"
                content={
                <div className="flex flex-col gap-1">
                    <div className="text-lg font-bold">{item.name}</div>
                    <Divider className="mt-2 border-2 bg-gray-800" />
                    <div className="text-lg">{item.bonuses[0].stat}: {item.bonuses[0].amount}</div>
                </div>
            }
            >
                <div>
                    <Image width={35} src={item.icon} />
                </div>
            </Tooltip>
        </div>
    )
})

function Family() {
    return (
        <div className="flex flex-col">
            <div className="text-xl">Family</div>
            <div className="flex flex-col ml-3">
                <div className="flex flex-row mt-6">
                    {familyObols}
                </div>
                <div className="text-sm text-gray-300 mt-2">Empty Slots</div>
                <div className="">4</div>
                <div className="text-sm text-gray-300 mt-2">Next Unlock</div>
                <div className="">Sparkle slot at level 5000 (1657 more levels)</div>
            </div>
            <div className="text-xl mt-6">Bonuses</div>
            <div className="flex flex-row flex-wrap gap-12 ml-3 mt-6">
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">STR</div>
                    <div className="text-lg">5 (+0, +5)</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">AGI</div>
                    <div className="text-lg">6 (+0, +6)</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">WIS</div>
                    <div className="text-lg">4 (+0, +4)</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">LUK</div>
                    <div className="text-lg">76 (+0, +76)</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Defence</div>
                    <div className="text-lg">8 (+0, +8)</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Drop Chance</div>
                    <div className="text-lg">40% (+0%, +40%)</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Skill Efficiency</div>
                    <div className="text-lg">3% (+0%, +3%)</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Total Damage</div>
                    <div className="text-lg">4% (+0%, +4%)</div>
                </div>
            </div>
        </div>
    )
}

export default Family
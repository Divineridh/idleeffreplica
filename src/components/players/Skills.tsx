interface propTypes {
    player: string,
    skills: [],
}

import { Image, Progress } from '@nextui-org/react'

export default function Skills(props: propTypes) {

    const skillItems = props.skills.map(item => {
        return (
            <div className="flex flex-row gap-2 p-3 border border-zinc-700 items-center w-[221px]">
                <div className="w-1/6"><Image width={30} src={item.icon} /></div>
                <div className="w-5/6 flex flex-col gap-3">
                    <div className="flex flex-row items-center gap-4">
                        <span className="text-sm">{item.level}</span>
                        <span className="text-xs whitespace-nowrap">(Ranked {item.rank})</span>
                    </div>
                    <Progress size="sm" radius="sm" value={item.currentExp} maxValue={item.nextLevelExp} />
                    <div className="flex flex-row justify-between text-xs">
                        <span>{item.currentExp > 999999 ? item.currentExp/1000000+'M' : item.currentExp > 999 ? item.currentExp/1000+'K' : item.currentExp }</span>
                        <span>{item.nextLevelExp > 999999 ? item.nextLevelExp/1000000+'M' : item.nextLevelExp > 999 ? item.nextLevelExp/1000+'K' : item.nextLevelExp }</span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-col p-4">
            <h2 className="text-lg">Skills</h2>
            <div className="grid grid-cols-3 gap-4 mt-4 pr-40">
                {skillItems}
            </div>
        </div>
    )
}

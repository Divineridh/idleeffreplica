interface propTypes {
    icon: string,
    name: string,
    requirement: string,
    reward: string,
    unlocked: boolean,
}

import { Image, Tooltip, Divider } from '@nextui-org/react'

function AchievementCard(props: propTypes) {
    return (
        <div>
            <Tooltip
                radius="none"
                content={
                    <div className="flex flex-col p-2 gap-2 w-96">
                        <div className="text-xl font-bold">{props.name}</div>
                        <Divider className="my-1 bg-zinc-800" />
                        <div className="text-lg">Requirement: {props.requirement}</div>
                        <div className="text-lg">Reward: {props.reward}</div>
                    </div>
                }
            >
                <Image radius="none" width={45} src={props.icon} className={`${props.unlocked ? "" : "brightness-50"}`} />
            </Tooltip>
        </div>
    )
}

export default AchievementCard
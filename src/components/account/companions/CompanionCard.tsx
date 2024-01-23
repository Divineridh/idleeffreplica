interface propTypes {
    unlocked: boolean,
    icon: string,
    bonus: string,
}

import { Checkbox, Image } from '@nextui-org/react'

export default function CompanionCard(props: propTypes) {
  return (
    <div className="flex flex-col bg-zinc-800 p-6 gap-2 justify-between">
        <div className="flex flex-row">
            <Checkbox radius="sm" color="warning" isReadOnly={true} isSelected={props.unlocked} />
            <Image width={40} src={props.icon} />
        </div>
        <span className="text-lg">{props.bonus}</span>
    </div>
  )
}

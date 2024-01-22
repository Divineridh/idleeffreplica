interface propTypes {
  icon: string,
  rank: number,
  type: string,
  bonus: string,
}

import { Image, Tooltip, Divider } from '@nextui-org/react'

export default function TraitCard(props: propTypes) {
  return (
    <Tooltip
      radius="none"
      content={
        <div className="flex flex-col p-2 text-lg">
          <span className="font-bold">{props.type}</span>
          <Divider className="bg-zinc-800 my-2" />
          <span>{props.bonus}</span>
        </div>
      }
    >
      <Image src={props.icon} />
    </Tooltip>
  )
}

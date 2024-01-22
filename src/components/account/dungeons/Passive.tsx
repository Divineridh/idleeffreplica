interface propTypes {
  type: string,
  level: number,
  maxLevel: number,
  bonus: string,
  costToMax: number,
}

export default function Passive(props: propTypes) {
  return (
    <div className="flex flex-row p-3 bg-zinc-800 text-sm justify-between shadow-2xl">
      <div className="flex flex-col">
        <span className="text-gray-300">Level</span>
        <span>{props.level}/{props.maxLevel}</span>
      </div>
      <div className="flex flex-col w-2/6">
        <span className="text-gray-300">Bonus</span>
        <span>{props.bonus}</span>
      </div>
      <div className="flex flex-col mr-20">
        <span className="text-gray-300">Cost to max</span>
        <span>{props.costToMax}</span>
      </div>
    </div>
  )
}

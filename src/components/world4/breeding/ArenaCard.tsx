interface propTypes {
    wave: number,
    bonus: string,
    unlocked: boolean,
}

function ArenaCard(props: propTypes) {
    return (
        <div className={`bg-zinc-800 w-80 p-2 flex flex-col items-center gap-1 ${props.unlocked ? "" : "brightness-50"}`}>
            <div className="text-xl text-gray-300">Wave {props.wave}</div>
            <div className="text-xs">{props.bonus}</div>
        </div>
    )
}

export default ArenaCard
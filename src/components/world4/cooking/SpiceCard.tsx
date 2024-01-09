import { Image, Tooltip } from '@nextui-org/react'

interface propTypes {
    icon: string,
    amount: number,
    name: string
}

function SpiceCard(props: propTypes) {
    return (
        <Tooltip
            radius="none"
            placement="bottom" 
            content={
                <div className="flex flex-col">
                    <span className="font-bold text-xl">{props.name}</span>
                </div>
            }
        >
            <div className="flex flex-row gap-1 justify-center items-center border border-gray-700 p-3 px-6 w-[100px] bg-neutral-800">
                <Image 
                    width={20}
                    src={props.icon}
                />
                <span className="text-xs">{props.amount > 999 ? props.amount/1000 + 'K' : props.amount}</span>
            </div>
        </Tooltip> 
    )
}

export default SpiceCard
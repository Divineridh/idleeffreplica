import { Tooltip, Image, Card, Divider } from '@nextui-org/react'

interface propTypes {
    icon: string,
    level: number,
    name: string,
    description: string
}

function Bubble(props: propTypes) {
    return (
        <Tooltip 
        placement="right"
        radius="none"
        classNames={{
            base: [
                "text-neutral-800"
            ]
        }}
        content={
            <div className="flex flex-col text-neutral-800 w-96">
                <div className="text-xl font-bold mt-2">{props.name} ({props.level})</div>
                <Divider className="p-[1px] my-4 bg-neutral-600" />
                <div className="text-sm">{props.description}</div>
                <div className="text-sm mt-3">Material cost</div>
                <div className="flex flex-row gap-2 ml-1">
                    <Image 
                        width={20}
                        src={props.icon}
                    />
                    <div>7.22M</div>
                    <Image 
                        width={20}
                        src={props.icon}
                    />
                    <div>7</div>
                </div>
            </div>
        }>
            <div className="flex flex-row items-center">
                <Image 
                    width={40}
                    src={props.icon}
                    className={props.level === 0 ? "brightness-50" : ""}
                />
                <div className="text-sm">{props.level}</div>
            </div>
        </Tooltip>
    )
}

export default Bubble
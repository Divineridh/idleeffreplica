interface propTypes {
    icon: string,
    looted: boolean,
}

import { Image } from '@nextui-org/react'

function SlabCard(props: propTypes) {
    return (
        <div className={`w-9 ${!props.looted ? "brightness-50" : ""}`}>
            <Image width={38} src={props.icon} />
        </div>
    )
}

export default SlabCard
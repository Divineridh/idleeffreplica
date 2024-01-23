import { Button } from '@nextui-org/react'
import rawJson from '../assets/data/account/rawJson'

const rawText = JSON.stringify(rawJson, null, 4)

function RawData() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <Button radius="sm" color="primary" className="self-center">Copy Raw JSON</Button>
            <div className="mt-6 text-gray-100">{rawText}</div>
        </div>
    )
}

export default RawData
import { Image, Divider, Tooltip } from '@nextui-org/react'

interface propTypes {
    icon: string,
    name: string,
}

import possibleAlertsData from '../../assets/data/account/possibleAlertsData'


export default function AlertCard(props: propTypes) {
    
    const alertsAmount = Math.floor(Math.random() * 3)
    function generateAlerts() {
        let result = []
        for (let i = 0; i <= alertsAmount; i++) {
            result.push(possibleAlertsData[Math.floor(Math.random() * 6)])
        }
        return result
    }
    const currentAlerts = generateAlerts()
    const alertItems = currentAlerts.map(alert => {
        return (
            <Tooltip
            radius="none"
                content={
                    <div className="flex flex-col">
                        <span className="text-lg font-bold">{alert.title}</span>
                        <Divider className="mb-1" />
                        <span>{alert.description}</span>
                    </div>
                }
            >
                <Image radius="none" width={25} src={alert.icon} />
            </Tooltip>
        )
    })

  return (
    <div className="w-72 bg-zinc-900 flex flex-row p-4 text-gray-100">
        <Image width={38} src={props.icon} />
        <div className="flex flex-col ml-2 w-full">
            <span className="text-sm font-bold">{props.name}</span>
            <Divider className="my-2 bg-gray-700" />
            <div className="flex flex-row gap-2">
                {alertItems}
            </div>
        </div>
    </div>
  )
}

import TaskRank2 from '../../../assets/taskranks/TaskRank2.png'
import TaskRank4 from '../../../assets/taskranks/TaskRank4.png'
import TaskRank5 from '../../../assets/taskranks/TaskRank5.png'
import TaskRank6 from '../../../assets/taskranks/TaskRank6.png'
import TaskRank7 from '../../../assets/taskranks/TaskRank7.png'
import TaskRank8 from '../../../assets/taskranks/TaskRank8.png'
import TaskRank9 from '../../../assets/taskranks/TaskRank9.png'
import TaskRank10 from '../../../assets/taskranks/TaskRank10.png'

interface propTypes {
    world: string,
    name: string,
    currentLevel: number,
    description: string,
    currentValue: number,
}

import { Image } from '@nextui-org/react'

function TaskCard(props: propTypes) {

    let taskRank = TaskRank2
    switch(props.currentLevel) {
        case 2: taskRank = TaskRank2; break;
        case 4: taskRank = TaskRank4; break;
        case 5: taskRank = TaskRank5; break;
        case 6: taskRank = TaskRank6; break;
        case 7: taskRank = TaskRank7; break;
        case 8: taskRank = TaskRank8; break;
        case 9: taskRank = TaskRank9; break;
        case 10: taskRank = TaskRank10; break;
    }

    return (
        <div className="bg-zinc-800 p-5 flex flex-col gap-1">
            <div className="flex flex-row items-center">
                <Image width={60} src={taskRank} />
                <div className="text-sm">{props.name} ({props.currentLevel} / 10)</div>
            </div>
            <div className="text-sm text-gray-300 mt-2">Description</div>
            <div className="text-xs">{props.description}</div>
            <div className="text-sm text-gray-300 mt-3">Current Value</div>
            <div className="text-xl">{props.currentValue > 9999999999 ? props.currentValue/1000000000+'B' : props.currentValue > 999999 ? props.currentValue/1000000+'M' : props.currentValue > 999 ? props.currentValue/1000+'K' : props.currentValue}</div>
        </div>
    )
}

export default TaskCard
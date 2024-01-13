import tasksData from '../../../assets/data/account/tasksData'
import TaskCard from './TaskCard'


interface propTypes {
    currentTab: string,
}

function Tasks(props: propTypes) {
    const currentWorldTasks = tasksData.filter(task => task.world === props.currentTab)
    const taskItems = currentWorldTasks.map(item => {
        return (
            <TaskCard
                key={item.key}
                {...item}
            />
        )
    })
    return (
        <div className="grid grid-cols-3 gap-3">
            {taskItems}
        </div>
    )
}

export default Tasks
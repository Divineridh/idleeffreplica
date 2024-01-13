import TaskBoard from '../../components/account/taskboard/TaskBoard'

function AccountTaskBoard() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-gray-100 flex flex-col px-6 mx-auto h-full">
            <TaskBoard />
        </div>
    )
}

export default AccountTaskBoard
import DeathNoteCard from './DeathNoteCard';
import DeathnoteData from '../../../../assets/data/deathnoteData'

const deathnoteW1 = DeathnoteData.filter(item => item.world === 1)
const deathnoteW1Items = deathnoteW1.map(item => {
    return (
        <DeathNoteCard 
            key={item.id}
            {...item}
        />
    )
})
const deathnoteW2 = DeathnoteData.filter(item => item.world === 2)
const deathnoteW2Items = deathnoteW2.map(item => {
    return (
        <DeathNoteCard 
            key={item.id}
            {...item}
        />
    )
})
const deathnoteW3 = DeathnoteData.filter(item => item.world === 3)
const deathnoteW3Items = deathnoteW3.map(item => {
    return (
        <DeathNoteCard 
            key={item.id}
            {...item}
        />
    )
})
const deathnoteW4 = DeathnoteData.filter(item => item.world === 4)
const deathnoteW4Items = deathnoteW4.map(item => {
    return (
        <DeathNoteCard 
            key={item.id}
            {...item}
        />
    )
})
const deathnoteW5 = DeathnoteData.filter(item => item.world === 5)
const deathnoteW5Items = deathnoteW5.map(item => {
    return (
        <DeathNoteCard 
            key={item.id}
            {...item}
        />
    )
})


function DeathNote() {
    return (
        <div className="flex flex-row gap-3 justify-center">
            <div className="flex flex-col gap-2 p-4 bg-zinc-800">
                <span className="text-sm mt-1">Blunder Hills (105%)</span>
                <div className="flex flex-col gap-8">
                    {deathnoteW1Items}
                </div>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-800">
                <span className="text-sm mt-1">Yum-Yum Desert (77%)</span>
                <div className="flex flex-col gap-8">
                    {deathnoteW2Items}
                </div>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-800">
                <span className="text-sm mt-1">Frostbite Tundra (82%)</span>
                <div className="flex flex-col gap-8">
                    {deathnoteW3Items}
                </div>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-800">
                <span className="text-sm mt-1">Hyperion Nebula (69%)</span>
                <div className="flex flex-col gap-8">
                    {deathnoteW4Items}
                </div>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-800">
                <span className="text-sm mt-1">Smolderin' Plateau (73%)</span>
                <div className="flex flex-col gap-8">
                    {deathnoteW5Items}
                </div>
            </div>
        </div>
    )
}

export default DeathNote
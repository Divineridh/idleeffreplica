import prayersData from '../../../assets/data/world3/worship/prayersData'
import PrayerCard from './PrayerCard'

const prayers1 = prayersData.filter(prayer => prayer.totem === "Goblin Gorefest")
const prayers2 = prayersData.filter(prayer => prayer.totem === "Wakawaka War")
const prayers3 = prayersData.filter(prayer => prayer.totem === "Acorn Assault")
const prayers4 = prayersData.filter(prayer => prayer.totem === "Frosty Firefight")
const prayers5 = prayersData.filter(prayer => prayer.totem === "Clash of Cans")

const prayers1Items = prayers1.map(prayer => {
    return (
        <PrayerCard 
            key={prayer.id}
            {...prayer}
        />
    )
})
const prayers2Items = prayers2.map(prayer => {
    return (
        <PrayerCard 
            key={prayer.id}
            {...prayer}
        />
    )
})
const prayers3Items = prayers3.map(prayer => {
    return (
        <PrayerCard 
            key={prayer.id}
            {...prayer}
        />
    )
})
const prayers4Items = prayers4.map(prayer => {
    return (
        <PrayerCard 
            key={prayer.id}
            {...prayer}
        />
    )
})
const prayers5Items = prayers5.map(prayer => {
    return (
        <PrayerCard 
            key={prayer.id}
            {...prayer}
        />
    )
})

function Prayers() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="text-lg">Goblin Gorefest</div>
                <div className="flex flex-col gap-6">
                    {prayers1Items}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-lg">Wakawaka War</div>
                <div className="flex flex-col gap-6">
                    {prayers2Items}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-lg">Acorn Assault</div>
                <div className="flex flex-col gap-6">
                    {prayers3Items}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-lg">Frosty Firefight</div>
                <div className="flex flex-col gap-6">
                    {prayers4Items}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-lg">Clash of Cans</div>
                <div className="flex flex-col gap-6">
                    {prayers5Items}
                </div>
            </div>

        </div>
    )
}

export default Prayers
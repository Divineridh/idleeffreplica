import ArcadeCard from '../../components/world2/arcade/ArcadeCard'
import arcadeData from '../../assets/data/arcade-data.js'

const arcadeItems = arcadeData.map(item => {
    return (
        <ArcadeCard 
            key={item.id} 
            {...item}
        />
    )
})

function World2Arcade() {
    return (
        <div className="w-[1440px] bg-zinc-900 flex flex-col text-white mx-auto h-full p-5">
            <h1 className="text-4xl ml-1 mt-6">Arcade</h1>
            <div className="flex flex-row gap-6 mt-6">
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Silver balls</span>
                    <span className="text-lg">783</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Gold balls</span>
                    <span className="text-lg">244</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Time per ball</span>
                    <div className="flex flex-row gap-1">
                        <div className="flex flex-col items-center">
                            <div className="text-lg">00</div>
                            <div className="text-xs text-gray-300">HRS</div>
                        </div>
                        <div className="text-lg">:</div>
                        <div className="flex flex-col items-center">
                            <div className="text-lg">41</div>
                            <div className="text-xs text-gray-300">MIN</div>
                        </div>
                        <div className="text-lg">:</div>
                        <div className="flex flex-col items-center">
                            <div className="text-lg">09</div>
                            <div className="text-xs text-gray-300">SEC</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Max Claim time</span>
                    <div className="flex flex-row gap-1">
                        <div className="flex flex-col items-center">
                            <div className="text-lg">02</div>
                            <div className="text-xs text-gray-300">HRS</div>
                        </div>
                        <div className="text-lg">:</div>
                        <div className="flex flex-col items-center">
                            <div className="text-lg">00</div>
                            <div className="text-xs text-gray-300">MIN</div>
                        </div>
                        <div className="text-lg">:</div>
                        <div className="flex flex-col items-center">
                            <div className="text-lg">00</div>
                            <div className="text-xs text-gray-300">SEC</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-300">Balls to claim</span>
                    <span className="text-lg">5/69</span>
                </div>
            </div>
            <span className="text-lg mt-6 mb-2">Gold Balls Shop</span>
            <div className="flex flex-col bg-zinc-800">
                {arcadeItems}
            </div>
        </div>
    )
}

export default World2Arcade
import { useState, useEffect } from 'react'

function Gaming() {

    const [time, setTime] = useState({
        hours: Math.floor(Math.random() * 24),
        minutes: Math.floor(Math.random() * 60),
        seconds: Math.floor(Math.random() * 60),
    })

    useEffect(() => {
        const timer = setInterval(() => {
            let updatedSeconds = time.seconds - 1
            let updatedMinutes = time.minutes
            let updatedHours = time.hours

            if (updatedSeconds < 0) {
                updatedMinutes -= 1
                updatedSeconds = 59
            }

            if (updatedMinutes < 0) {
                updatedHours -= 1
                updatedMinutes = 59
            }

            if (updatedHours === 0 && updatedMinutes === 0 && updatedSeconds === 0) {
                clearInterval(timer)
            }

            setTime({
                hours: updatedHours,
                minutes: updatedMinutes,
                seconds: updatedSeconds,
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [time])

    return (
        <div className="flex flex-col p-2 h-full">
            <h1 className="text-4xl">Gaming</h1>
            <span className="text-xs mt-6">* This is a work in progress, there could be some bugs and minor inaccuracies. THE UI ISN'T FINAL!</span>
            <div className="flex flex-row mt-4 gap-12">
                <div className="flex flex-col items-center w-96 bg-zinc-800 p-6 gap-1 shadow-2xl">
                    <div className="text-sm text-gray-300">Next Water In</div>
                    <div className="flex flex-row gap-1">
                        <div className="flex flex-col items-center">
                            <div>{time.hours}</div>
                            <div className="text-xs text-gray-300">HRS</div>
                        </div>
                        <div>:</div>
                        <div className="flex flex-col items-center">
                            <div>{time.minutes}</div>
                            <div className="text-xs text-gray-300">MIN</div>
                        </div>
                        <div>:</div>
                        <div className="flex flex-col items-center">
                            <div>{time.seconds}</div>
                            <div className="text-xs text-gray-300">SEC</div>
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-3">* Might be off by a few seconds.</div>
                    <div className="text-xs text-gray-500">Current water: 2</div>
                </div>
                <div className="flex flex-col items-center w-96 bg-zinc-800 p-6 gap-1 shadow-2xl">
                    <div className="text-sm text-gray-300">Next Dig In</div>
                    <div className="flex flex-row gap-1">
                        <div className="flex flex-col items-center">
                            <div>{time.hours}</div>
                            <div className="text-xs text-gray-300">HRS</div>
                        </div>
                        <div>:</div>
                        <div className="flex flex-col items-center">
                            <div>{time.minutes}</div>
                            <div className="text-xs text-gray-300">MIN</div>
                        </div>
                        <div>:</div>
                        <div className="flex flex-col items-center">
                            <div>{time.seconds}</div>
                            <div className="text-xs text-gray-300">SEC</div>
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-3">* Might be off by a few seconds.</div>
                    <div className="text-xs text-gray-500">Current digs: 1</div>                    
                    <div className="text-xs text-gray-500">Nugget range: 139-222K</div>                    
                </div>
            </div>
        </div>
    )
}

export default Gaming
import { Card, CardHeader, CardBody, Image, Tooltip, Divider } from '@nextui-org/react'
import World1Keys from '../assets/w1keys.png'
import World2Keys from '../assets/w2keys.png'
import World3Keys from '../assets/w3keys.png'
import World4Keys from '../assets/w4keys.png'
import ArenaTickets from '../assets/arenatickets.png'
import ArcadeBalls from '../assets/arcadeballs.png'
import Character1 from '../assets/characterAlerts/Character1.png'
import Character2 from '../assets/characterAlerts/Character2.png'
import Character3 from '../assets/characterAlerts/Character3.png'
import Character4 from '../assets/characterAlerts/Character4.png'
import Character5 from '../assets/characterAlerts/Character5.png'
import Character6 from '../assets/characterAlerts/Character6.png'
import Character7 from '../assets/characterAlerts/Character7.png'
import Character8 from '../assets/characterAlerts/Character8.png'
import Character9 from '../assets/characterAlerts/Character9.png'
import Character10 from '../assets/characterAlerts/Character10.png'
import VoidCoin from '../assets/coins/voidCoin.png'
import DementiaCoin from '../assets/coins/dementiaCoin.png'
import LustreCoin from '../assets/coins/lustreCoin.png'
import StarfireCoin from '../assets/coins/starfireCoin.png'
import CombatIcon from '../assets/activity/Combat.png'
import NothingIcon from '../assets/activity/Nothing.png'
import SnowMiniboss from '../assets/snowMiniboss.png'
import SpaceMiniboss from '../assets/spaceMiniboss.png'
import LibraryIcon from '../assets/libraryIcon.png'

import { useState, useEffect } from 'react'
import useCounterStore from '../zustand/store'

function Dashboard() {

    const { count, increment, decrement } = useCounterStore()

    const [time, setTime] = useState({
        days: Math.floor(Math.random() * 10),
        hours: Math.floor(Math.random() * 24),
        minutes: Math.floor(Math.random() * 60),
    })

    useEffect(() => {
        const timer = setInterval(() => {
            let updatedMinutes = time.minutes - 1
            let updatedHours = time.hours
            let updatedDays = time.days

            if (updatedMinutes < 0) {
                updatedHours -= 1
                updatedMinutes = 59
            }

            if (updatedHours < 0) {
                updatedDays -= 1
                updatedHours = 23
            }

            if (updatedDays === 0 && updatedHours === 0 && updatedMinutes === 0) {
                clearInterval(timer)
            }

            setTime({
                days: updatedDays,
                hours: updatedHours,
                minutes: updatedMinutes,
            })
        }, 60000)

        return () => clearInterval(timer)
    }, [time])

    return (
        <div className="bg-zinc-900 flex flex-row justify-around container mx-auto w-5/6">
            <div className="bg-zinc-900 mb-0 mt-6 mx-0 w-3/5">
                <div className="flex flex-row">
                    <h1 className="text-white text-4xl">Dashboard</h1>
                </div>
                <button className="bg-zinc-800 w-32 p-2" onClick={increment}>Increment</button>
                <button className="bg-zinc-800 w-32 p-2 mt-2" onClick={decrement}>Decrement</button>
                <div className="text-white">Zustand counter: {count}</div>
                <div className="mt-6">
                    <div className="bg-neutral-800 p-6">
                        <span className="text-white text-lg">Account wide items</span>
                        <div className="flex flex-row">
                            <Tooltip 
                            content={
                                <div>
                                    <span className="font-bold text-lg">Forest Villa Key (10 available to pickup)</span>
                                    <Divider 
                                        className="my-4"
                                    />
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <span>Characters awarding keys per day</span>
                                            <span className="text-lg">10</span>
                                        </div>
                                        <div className="flex flex-col ml-2">
                                            <span>Days since last Pickup</span>
                                            <span className="text-lg">1</span>
                                        </div>
                                    </div>
                                </div>
                            }
                            placement="bottom"
                            >
                                <Card 
                                radius="none"
                                className="bg-zinc-800 border border-gray-700"
                                >
                                    <CardBody className="flex flex-row">
                                        <Image 
                                            width={35}
                                            alt="World 1 boss keys"
                                            src={World1Keys}
                                        />
                                        <div className="flex flex-col ml-2">
                                            <span className="text-white">690</span>
                                            <span className="text-white">10</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tooltip>
                            <Tooltip
                                content={
                                    <div>
                                        <span className="font-bold text-lg">Efaunt's Tomb Key (10 available to pickup)</span>
                                        <Divider 
                                            className="my-4"
                                        />
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <span>Characters awarding keys per day</span>
                                                <span className="text-lg">10</span>
                                            </div>
                                            <div className="flex flex-col ml-2">
                                                <span>Days since last Pickup</span>
                                                <span className="text-lg">1</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                                placement="bottom"
                            >
                                <Card 
                                    radius="none"
                                    className="bg-zinc-800 border border-gray-700 ml-2"
                                    >
                                    <CardBody className="flex flex-row ">
                                        <Image 
                                            width={35}
                                            alt="World 2 boss keys"
                                            src={World2Keys}
                                            />
                                        <div className="flex flex-col ml-2">
                                            <span className="text-white">690</span>
                                            <span className="text-white">10</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tooltip>
                            <Tooltip
                                content={
                                    <div>
                                        <span className="font-bold text-lg">Chizoar's Cavern Key (10 available to pickup)</span>
                                        <Divider 
                                            className="my-4"
                                        />
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <span>Characters awarding keys per day</span>
                                                <span className="text-lg">10</span>
                                            </div>
                                            <div className="flex flex-col ml-2">
                                                <span>Days since last Pickup</span>
                                                <span className="text-lg">1</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                                placement="bottom"
                            >
                                <Card 
                                    radius="none"
                                    className="bg-zinc-800 border border-gray-700 ml-2"
                                    >
                                    <CardBody className="flex flex-row ">
                                        <Image 
                                            width={35}
                                            alt="World 3 boss keys"
                                            src={World3Keys}
                                            />
                                        <div className="flex flex-col ml-2">
                                            <span className="text-white">690</span>
                                            <span className="text-white">10</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tooltip>
                            <Card 
                                radius="none"
                                className="bg-zinc-800 border border-gray-700 ml-2"
                            >
                                <CardBody className="flex flex-row ">
                                    <Image 
                                        width={35}
                                        alt="World 4 boss keys"
                                        src={World4Keys}
                                    />
                                    <div className="flex flex-col ml-2">
                                        <span className="text-white">690</span>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card 
                                radius="none"
                                className="bg-zinc-800 border border-gray-700 ml-2"
                            >
                                <CardBody className="flex flex-row ">
                                    <Image 
                                        width={35}
                                        alt="Arena tickets"
                                        src={ArenaTickets}
                                    />
                                    <div className="flex flex-col ml-2">
                                        <span className="text-white">690</span>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card 
                                radius="none"
                                className="bg-zinc-800 border border-gray-700 ml-2"
                            >
                                <CardBody className="flex flex-row ">
                                    <Image 
                                        width={35}
                                        alt="Arcade balls"
                                        src={ArcadeBalls}
                                    />
                                    <div className="flex flex-col ml-2">
                                        <span className="text-white">690</span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly mt-10 ">
                        <Card 
                            radius="none"
                            className="bg-neutral-800 text-white w-1/2 mr-2 p-2 pl-4 pb-6"
                        >
                            <CardHeader className="text-lg">Money</CardHeader>
                            <CardBody className="flex flex-row ml-4">
                                <div className="flex flex-row justify-center">
                                    <Image 
                                        width={20}
                                        src={StarfireCoin}
                                    />
                                    <span className="ml-1">2</span> 
                                </div>
                                <div className="flex flex-row justify-center ml-3">
                                    <Image 
                                        width={20}
                                        src={LustreCoin}
                                    />
                                    <span className="ml-1">92</span>  
                                </div>
                                <div className="flex flex-row justify-center ml-3">
                                    <Image 
                                        width={20}
                                        src={VoidCoin}
                                    />
                                    <span className="ml-1">75</span>  
                                </div>
                                <div className="flex flex-row justify-center ml-3">
                                    <Image 
                                        width={20}
                                        src={DementiaCoin}
                                    />
                                    <span className="ml-1">81</span>  
                                </div>
                            </CardBody>
                        </Card>
                        <Card 
                            radius="none"
                            className="bg-neutral-800 text-white w-1/2 ml-6 p-2 pl-6"
                        >
                            <CardHeader className="text-lg">Activity</CardHeader>
                            <CardBody className="flex flex-row justify-start items-center">
                                <div className="flex flex-col items-center">
                                    <Image 
                                        width={40}
                                        alt="Combat activity icon"
                                        src={CombatIcon}
                                    />
                                    <div className="text-sm">9</div>
                                </div>
                                <div className="flex flex-col items-center ml-3">
                                    <Image 
                                        width={28}
                                        alt="Nothing activity icon"
                                        src={NothingIcon}
                                    />
                                    <div className="text-sm">1</div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="bg-neutral-800 mt-10 p-4 pb-8 pl-6">
                        <span className="text-white text-lg">Minibosses</span>
                        <div className="flex flex-row">
                            <Card radius="none" className="bg-zinc-800 text-white border border-gray-700">
                                <CardBody className="flex flex-row items-center">
                                    <Image 
                                        width={60}
                                        alt="Snow miniboss"
                                        src={SnowMiniboss}
                                        className="mr-0"
                                    />
                                    <div className="flex flex-col ml-3">
                                        <span className="text-gray-300 text-sm">Current Count</span>
                                        <span className="text-lg">0</span>
                                    </div>
                                    <div className="flex flex-col ml-3">
                                        <span className="text-gray-300 text-sm">Days till +1</span>
                                        <span className="text-lg">1</span>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card radius="none" className="bg-zinc-800 text-white border border-gray-700 ml-3">
                                <CardBody className="flex flex-row items-center">
                                    <Image 
                                        width={60}
                                        alt="Mushroom miniboss"
                                        src={SpaceMiniboss}
                                    />
                                    <div className="flex flex-col ml-3">
                                        <span className="text-gray-300 text-sm">Current Count</span>
                                        <span className="text-lg">0</span>
                                    </div>
                                    <div className="flex flex-col ml-3">
                                        <span className="text-gray-300 text-sm">Days till +1</span>
                                        <span className="text-lg">1</span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-8">
                        <Card radius="none" className="bg-neutral-800 text-white flex flex-col p-3">
                            <CardHeader className="text-lg">Library</CardHeader>
                            <div className="ml-5 mb-4 flex flex-row items-center">
                                <Image 
                                    width={50}
                                    alt="Library icon"
                                    src={LibraryIcon}
                                />
                                <div className="grid ml-10">
                                    <span className="text-gray-300 text-sm">Book count</span>
                                    <span className="text-lg">31</span>
                                </div>
                                <div className="ml-10">
                                    <span className="text-gray-300 text-sm">Time till next</span>
                                    <div className="flex flex-row justify-evenly gap-1">
                                        <div className="flex flex-col items-center">
                                            <span className="text-lg">{time.days}</span>
                                            <span className="text-gray-300 text-xs">DAYS</span>
                                        </div>
                                        <span>:</span>
                                        <div className="flex flex-col items-center">
                                            <span className="text-lg">{time.hours}</span>
                                            <span className="text-gray-300 text-xs">HRS</span>
                                        </div>
                                        <span>:</span>
                                        <div className="flex flex-col items-center">
                                            <span className="text-lg">{time.minutes}</span>
                                            <span className="text-gray-300 text-xs">MIN</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card radius="none" className="bg-neutral-800 text-white p-3">
                            <CardHeader className="text-lg">Global Alerts</CardHeader>
                        </Card>
                    </div>
                </div>
                
            </div>
            <div className="w-1/4 ml-6 bg-neutral-800 flex flex-col mb-10">
              <h1 className="text-white text-2xl mt-6 ml-4">Alerts</h1>
              <div className="grid grid-cols-1 gap-3 mx-auto mt-6 mb-2">
                <Image 
                    radius="none"
                    width={290}
                    alt="Character 1 alerts"
                    src={Character1}
                />
                <Image  
                    radius="none"
                    width={290}
                    alt="Character 1 alerts"
                    src={Character2}
                />
                <Image  
                    radius="none"
                    width={290}
                    alt="Character 1 alerts"
                    src={Character3}
                />
                <Image  
                    radius="none"
                    width={290}
                    alt="Character 1 alerts"
                    src={Character4}
                />
                <Image  
                    radius="none"
                    width={290}
                    alt="Character 1 alerts"
                    src={Character5}
                />
                <Image  
                    radius="none"
                    width={290}
                    alt="Character 1 alerts"
                    src={Character6}
                />
                <Image  
                    radius="none"
                    width={290}
                    alt="Character 1 alerts"
                    src={Character7}
                />
                <Image  
                    radius="none"
                    width={290}
                    alt="Character 1 alerts"
                    src={Character8}
                />
                <Image  
                    radius="none"
                    width={290}
                    alt="Character 1 alerts"
                    src={Character9}
                />
                <Image  
                    radius="none"
                    width={290}
                    alt="Character 1 alerts"
                    src={Character10}
                />
              </div>
            </div>
        </div>
    )
}

export default Dashboard
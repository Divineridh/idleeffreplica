import { useEffect, useState } from 'react'
import axios from 'axios'
import leon from '../assets/leonGlasses.png'

import { Image, Card, CardHeader, CardBody, CardFooter, Divider, Link, Accordion, AccordionItem, Button } from '@nextui-org/react'
import useCounterStore from '../zustand/store'


function Backend() {

    const { count, increment, decrement } = useCounterStore()

    const [mangaList, setMangaList] = useState([])

    useEffect(() => {
        const fetchManga = () => {
            axios.get('https://api.mangadex.org/manga', {
                params: {
                    includes: ["cover_art"]
                }
            })
                .then((response) => {
                    const mangaData = response.data.data
                    setMangaList(mangaData)
                })
                .catch((error) => {
                    console.error('Error fetching manga data: ', error)
                })
        }

        fetchManga()
    }, [])

    const [money, setMoney] = useState(0)
    const [moneyPerSecond, setMoneyPerSecond] = useState(0)
    const [clickerStrength, setClickerStrength] = useState(1)
    const [building1Amount, setBuilding1Amount] = useState(0)

    const [time, setTime] = useState(Date.now())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000)
        console.log("hello" + building1Amount + money)
        return () => clearInterval(timer)
    }, [time])

    useEffect(() => {
        setMoney(prevMoney => prevMoney + (1 * moneyPerSecond) )
    }, [time, moneyPerSecond])

    function handleClicker() {
        setMoney(prevMoney => prevMoney + 1 * clickerStrength)
    }

    function handleStrengthPress() {
        if (money >= 10 ) {
            setMoney(prevMoney => prevMoney - 10)
            setClickerStrength(prevAmount => prevAmount + 1)
        } else console.log("not enough money")
    }
    function handleb1Press() {
        if (money >= 10 ) {
            setMoney(prevMoney => prevMoney - 10)
            setMoneyPerSecond(prevAmount => prevAmount + 1)
            setBuilding1Amount(prevAmount => prevAmount + 1)
        } else console.log("not enough money")
    }
    

    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl ml-2">Backend Testing</h1>
            <Accordion variant="shadow">
                <AccordionItem key="1" aria-label='Idle' title="Idle testing" classNames={{
                    title:""
                }}>
                    <div className="grid grid-cols-3 gap-3">
                        <Card className="p-3 bg-zinc-800 flex flex-col text-white">
                            <div className="flex flex-row justify-evenly">
                                <div className="flex flex-col">
                                    <div>Current Money</div>
                                    <div>{money}</div>
                                </div>
                                <Button color="primary" variant="bordered" onPress={handleClicker}>Click me</Button>
                            </div>
                        </Card>
                        <Card className="p-3 bg-zinc-800 flex flex-col text-white">
                            <div className="flex flex-row justify-evenly">
                                <div className="flex flex-col">
                                    <div>Clicker Strength</div>
                                    <div>{clickerStrength}</div>
                                </div>
                                <Button color="primary" variant="bordered" onPress={handleStrengthPress}>Upgrade clicker +1: 10 money</Button>
                            </div>
                        </Card>
                        <Card className="p-3 bg-zinc-800 flex flex-col text-white">
                            <div className="flex flex-row justify-evenly">
                                <div className="flex flex-col">
                                    <div>Building 1 Amount</div>
                                    <div>{building1Amount}</div>
                                </div>
                                <Button color="primary" variant="bordered" onPress={handleb1Press}>Buy building: 10 money</Button>
                            </div>
                        </Card>
                    </div>
                </AccordionItem>
            </Accordion>
            <button className="bg-zinc-800 w-32 p-2 mt-4" onClick={increment}>Increment</button>
            <button className="bg-zinc-800 w-32 p-2 mt-2" onClick={decrement}>Decrement</button>
            <div>Zustand counter: {count}</div>
            <div className="flex flex-row gap-1 flex-wrap mt-10">
                {mangaList.map((manga) => (
                    <Card className="w-[400px] bg-zinc-800 text-white">
                        <CardHeader className="flex flex-row gap-2">
                            {/* <Image radius="sm" width={100} src={`https://mangadex.org/covers/${manga.id}/${manga.relationships[2].attributes.fileName}`} /> */}
                            <Link href={`https://mangadex.org/title/${manga.id}`}>{manga.attributes.title.en}</Link>
                        </CardHeader>
                        <Divider className="bg-zinc-500" />
                        <CardBody>
                            <p className="text-sm">{manga.attributes.description.en}</p>
                        </CardBody>
                        <Divider className="bg-zinc-500" />
                        <CardFooter>
                            {manga.attributes.status}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Backend
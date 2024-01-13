import { useEffect, useState } from 'react'
import axios from 'axios'
import leon from '../assets/leonGlasses.png'

import { Image, Card, CardHeader, CardBody, CardFooter, Divider, Link } from '@nextui-org/react'
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
                    console.log(mangaData)
                })
                .catch((error) => {
                    console.error('Error fetching manga data: ', error)
                })
        }

        fetchManga()
    }, [])

    

    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl ml-2">Backend Testing</h1>
            <button className="bg-zinc-800 w-32 p-2" onClick={increment}>Increment</button>
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
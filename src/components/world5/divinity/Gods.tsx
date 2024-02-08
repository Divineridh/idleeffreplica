import { useEffect, useState } from 'react'
import godsData from '../../../assets/data/world5/divinity/godsData.js'
import GodCard from './GodCard'
function Gods() {

    const [godItems, setGodItems] = useState([])

    useEffect(() => {
      setGodItems(
        godsData.map((god: any) => {
            return (
                <GodCard 
                    key={god.id}
                    {...god}
                />
            )
        })
      )
    }, [])
    

    return (
        <div className="flex flex-col gap-3">
            {godItems}
        </div>  
    )
}

export default Gods
import { Listbox, ListboxItem, Image, select } from '@nextui-org/react'
import { useState, useMemo } from 'react'
import BB from '../../../assets/classes/BloodBerzerker.png'
import SB from '../../../assets/classes/ShipBreaker.png'
import BC from '../../../assets/classes/Bubo.png'
import DK from '../../../assets/classes/DivineKnight.png'
import ES from '../../../assets/classes/ElementalSorcerer.png'
import BM from '../../../assets/classes/BeastMaster.png'
import VW from '../../../assets/classes/VoidWalker.png'

import Family from './Family'
import Inventory from './Inventory'
import Character from './Character'
import charactersData from '../../../assets/data/account/obols/charactersData'

function Obols() {

    const [selectedKeys, setSelectedKeys] = useState(new Set (["family"]))

    const currentKey = useMemo(
        () => Array.from(selectedKeys).join(", "),
        [selectedKeys]
    )

    const currentCharData = charactersData.filter(item => item.name === currentKey)
    const currentCharItem = currentCharData.map(item => {
        return (
            <Character 
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-8 mx-auto h-full">
            <h1 className="text-4xl ml-2">Obols</h1>
            <div className="flex flex-row shadow-2xl mt-6">
                <div className="w-1/4 p-6">
                    <Listbox
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                        classNames={{
                            list: "text-gray-300",
                        }}
                        itemClasses={{
                            base: "data-[hover=true]:bg-default-100/40",
                        }}
                    >
                        <ListboxItem hideSelectedIcon={true} endContent=">" key="family">Family</ListboxItem>
                        <ListboxItem hideSelectedIcon={true} endContent=">" key="inventory">Inventory</ListboxItem>
                        <ListboxItem hideSelectedIcon={true} startContent={<Image width={25} src={BB} />} endContent=">" key="Divinerid">Divinerid</ListboxItem>
                        <ListboxItem hideSelectedIcon={true} startContent={<Image width={25} src={SB} />} endContent=">" key="Divinerid2">Divinerid2</ListboxItem>
                        <ListboxItem hideSelectedIcon={true} startContent={<Image width={25} src={BC} />} endContent=">" key="Divinerid3">Divinerid3</ListboxItem>
                        <ListboxItem hideSelectedIcon={true} startContent={<Image width={25} src={DK} />} endContent=">" key="Divinerid4">Divinerid4</ListboxItem>
                        <ListboxItem hideSelectedIcon={true} startContent={<Image width={25} src={ES} />} endContent=">" key="Divinerid5">Divinerid5</ListboxItem>
                        <ListboxItem hideSelectedIcon={true} startContent={<Image width={25} src={BM} />} endContent=">" key="Divinerid6">Divinerid6</ListboxItem>
                        <ListboxItem hideSelectedIcon={true} startContent={<Image width={25} src={DK} />} endContent=">" key="Divinerid7">Divinerid7</ListboxItem>
                        <ListboxItem hideSelectedIcon={true} startContent={<Image width={25} src={ES} />} endContent=">" key="Divinerid8">Divinerid8</ListboxItem>
                        <ListboxItem hideSelectedIcon={true} startContent={<Image width={25} src={VW} />} endContent=">" key="Divinerid9">Divinerid9</ListboxItem>
                        <ListboxItem hideSelectedIcon={true} startContent={<Image width={25} src={SB} />} endContent=">" key="Divinerid10">Divinerid10</ListboxItem>
                    </Listbox>

                </div>
                <div className="w-3/4 bg-zinc-800 p-6">
                    {
                        currentKey === "family" ? <Family /> :
                        currentKey === "inventory" ? <Inventory /> :
                        <div>{currentCharItem}</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Obols
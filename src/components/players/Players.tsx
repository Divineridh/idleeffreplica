import { useState, useMemo } from 'react'
import { Tabs, Tab, Image, Listbox, ListboxItem } from '@nextui-org/react'

import BB from '../../assets/classes/BloodBerzerker.png'
import SB from '../../assets/classes/ShipBreaker.png'
import BC from '../../assets/classes/Bubo.png'
import DK from '../../assets/classes/DivineKnight.png'
import ES from '../../assets/classes/ElementalSorcerer.png'
import BM from '../../assets/classes/BeastMaster.png'
import VW from '../../assets/classes/VoidWalker.png'

import PlayersPanel from './PlayersPanel'

function Players() {

    const [activeTab, setActiveTab] = useState("Divinerid")

    const handleTabChange = (key) => {
        setActiveTab(key)
    }

    const [selectedKeys, setSelectedKeys] = useState(new Set (["randomStats"]))

    const currentKey = useMemo(
        () => Array.from(selectedKeys).join(", "),
        [selectedKeys]
    )

    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col px-5 mx-auto h-full">
            <Tabs 
                selectedKey={activeTab}
                onSelectionChange={handleTabChange} 
                aria-label="options"
                color="primary"
                variant="underlined"
                className=""
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab key="Divinerid" title={<div className="flex flex-row items-center gap-1"><Image width={25} src={BB} /><span className="text-xs">Divinerid</span></div>}>
                    <h1 className="text-4xl ml-2 mt-2">Players</h1>
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
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="randomStats">Random Stats</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="skills">Skills</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="equipment">Equipment</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="statues">Statues</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="anvil">Anvil</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="carryCapacity">Carry Capacity</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="talents">Talents</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="postOffice">Post Office</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="inventory">Inventory</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="obols">Obols</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="chips">Chips</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="zowChow">Zow/Chow</ListboxItem>
                            </Listbox>
                        </div>
                        <div className="w-3/4 bg-zinc-800 p-6">
                            <PlayersPanel activePlayer={activeTab} currentKey={currentKey} />
                        </div>
                    </div>
                </Tab>
                <Tab key="Divinerid2" title={<div className="flex flex-row items-center gap-1"><Image width={25} src={SB} /><span className="text-xs">Divinerid2</span></div>}>
                    <h1 className="text-4xl ml-2 mt-2">Players</h1>
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
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="randomStats">Random Stats</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="skills">Skills</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="equipment">Equipment</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="statues">Statues</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="anvil">Anvil</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="carryCapacity">Carry Capacity</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="talents">Talents</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="postOffice">Post Office</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="inventory">Inventory</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="obols">Obols</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="chips">Chips</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="zowChow">Zow/Chow</ListboxItem>
                            </Listbox>
                        </div>
                        <div className="w-3/4 bg-zinc-800 p-6">
                            <PlayersPanel activePlayer={activeTab} currentKey={currentKey} />
                        </div>
                    </div>
                </Tab>
                <Tab key="Divinerid3" title={<div className="flex flex-row items-center gap-1"><Image width={25} src={BC} /><span className="text-xs">Divinerid3</span></div>}>
                    <h1 className="text-4xl ml-2 mt-2">Players</h1>
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
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="randomStats">Random Stats</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="skills">Skills</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="equipment">Equipment</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="statues">Statues</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="anvil">Anvil</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="carryCapacity">Carry Capacity</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="talents">Talents</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="postOffice">Post Office</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="inventory">Inventory</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="obols">Obols</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="chips">Chips</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="zowChow">Zow/Chow</ListboxItem>
                            </Listbox>
                        </div>
                        <div className="w-3/4 bg-zinc-800 p-6">
                            <PlayersPanel activePlayer={activeTab} currentKey={currentKey} />
                        </div>
                    </div>
                </Tab>
                <Tab key="Divinerid4" title={<div className="flex flex-row items-center gap-1"><Image width={25} src={DK} /><span className="text-xs">Divinerid4</span></div>}>
                    <h1 className="text-4xl ml-2 mt-2">Players</h1>
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
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="randomStats">Random Stats</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="skills">Skills</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="equipment">Equipment</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="statues">Statues</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="anvil">Anvil</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="carryCapacity">Carry Capacity</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="talents">Talents</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="postOffice">Post Office</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="inventory">Inventory</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="obols">Obols</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="chips">Chips</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="zowChow">Zow/Chow</ListboxItem>
                            </Listbox>
                        </div>
                        <div className="w-3/4 bg-zinc-800 p-6">
                            <PlayersPanel activePlayer={activeTab} currentKey={currentKey} />
                        </div>
                    </div>
                </Tab>
                <Tab key="Divinerid5" title={<div className="flex flex-row items-center gap-1"><Image width={25} src={ES} /><span className="text-xs">Divinerid5</span></div>}>
                    <h1 className="text-4xl ml-2 mt-2">Players</h1>
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
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="randomStats">Random Stats</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="skills">Skills</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="equipment">Equipment</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="statues">Statues</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="anvil">Anvil</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="carryCapacity">Carry Capacity</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="talents">Talents</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="postOffice">Post Office</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="inventory">Inventory</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="obols">Obols</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="chips">Chips</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="zowChow">Zow/Chow</ListboxItem>
                            </Listbox>
                        </div>
                        <div className="w-3/4 bg-zinc-800 p-6">
                            <PlayersPanel activePlayer={activeTab} currentKey={currentKey} />
                        </div>
                    </div>
                </Tab>
                <Tab key="Divinerid6" title={<div className="flex flex-row items-center gap-1"><Image width={25} src={BM} /><span className="text-xs">Divinerid6</span></div>}>
                    <h1 className="text-4xl ml-2 mt-2">Players</h1>
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
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="randomStats">Random Stats</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="skills">Skills</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="equipment">Equipment</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="statues">Statues</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="anvil">Anvil</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="carryCapacity">Carry Capacity</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="talents">Talents</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="postOffice">Post Office</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="inventory">Inventory</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="obols">Obols</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="chips">Chips</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="zowChow">Zow/Chow</ListboxItem>
                            </Listbox>
                        </div>
                        <div className="w-3/4 bg-zinc-800 p-6">
                            <PlayersPanel activePlayer={activeTab} currentKey={currentKey} />
                        </div>
                    </div>
                </Tab>
                <Tab key="Divinerid7" title={<div className="flex flex-row items-center gap-1"><Image width={25} src={DK} /><span className="text-xs">Divinerid7</span></div>}>
                    <h1 className="text-4xl ml-2 mt-2">Players</h1>
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
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="randomStats">Random Stats</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="skills">Skills</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="equipment">Equipment</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="statues">Statues</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="anvil">Anvil</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="carryCapacity">Carry Capacity</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="talents">Talents</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="postOffice">Post Office</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="inventory">Inventory</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="obols">Obols</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="chips">Chips</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="zowChow">Zow/Chow</ListboxItem>
                            </Listbox>
                        </div>
                        <div className="w-3/4 bg-zinc-800 p-6">
                            <PlayersPanel activePlayer={activeTab} currentKey={currentKey} />
                        </div>
                    </div>
                </Tab>
                <Tab key="Divinerid8" title={<div className="flex flex-row items-center gap-1"><Image width={25} src={ES} /><span className="text-xs">Divinerid8</span></div>}>
                    <h1 className="text-4xl ml-2 mt-2">Players</h1>
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
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="randomStats">Random Stats</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="skills">Skills</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="equipment">Equipment</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="statues">Statues</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="anvil">Anvil</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="carryCapacity">Carry Capacity</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="talents">Talents</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="postOffice">Post Office</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="inventory">Inventory</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="obols">Obols</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="chips">Chips</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="zowChow">Zow/Chow</ListboxItem>
                            </Listbox>
                        </div>
                        <div className="w-3/4 bg-zinc-800 p-6">
                            <PlayersPanel activePlayer={activeTab} currentKey={currentKey} />
                        </div>
                    </div>
                </Tab>
                <Tab key="Divinerid9" title={<div className="flex flex-row items-center gap-1"><Image width={25} src={VW} /><span className="text-xs">Divinerid9</span></div>}>
                    <h1 className="text-4xl ml-2 mt-2">Players</h1>
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
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="randomStats">Random Stats</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="skills">Skills</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="equipment">Equipment</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="statues">Statues</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="anvil">Anvil</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="carryCapacity">Carry Capacity</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="talents">Talents</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="postOffice">Post Office</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="inventory">Inventory</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="obols">Obols</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="chips">Chips</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="zowChow">Zow/Chow</ListboxItem>
                            </Listbox>
                        </div>
                        <div className="w-3/4 bg-zinc-800 p-6">
                            <PlayersPanel activePlayer={activeTab} currentKey={currentKey} />
                        </div>
                    </div>
                </Tab>
                <Tab key="Divinerid10" title={<div className="flex flex-row items-center gap-1"><Image width={25} src={SB} /><span className="text-xs">Divinerid10</span></div>}>
                    <h1 className="text-4xl ml-2 mt-2">Players</h1>
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
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="randomStats">Random Stats</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="skills">Skills</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="equipment">Equipment</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="statues">Statues</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="anvil">Anvil</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="carryCapacity">Carry Capacity</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="talents">Talents</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="postOffice">Post Office</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="inventory">Inventory</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="obols">Obols</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="chips">Chips</ListboxItem>
                                <ListboxItem hideSelectedIcon={true} endContent=">" key="zowChow">Zow/Chow</ListboxItem>
                            </Listbox>
                        </div>
                        <div className="w-3/4 bg-zinc-800 p-6">
                            <PlayersPanel activePlayer={activeTab} currentKey={currentKey} />
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Players
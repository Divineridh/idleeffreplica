import { useState } from 'react'

//Next UI elements
import { Tabs, Tab, Image, Spacer } from '@nextui-org/react'

//General icons
import InfoIcon from '../../assets/InfoIcon.png'

//Anvil images
import Nails from '../../assets/anvilItems/Nails.png'
import Gears from '../../assets/anvilItems/Gears.png'
import Pinions from '../../assets/anvilItems/Pinions.png'
import Screws from '../../assets/anvilItems/Screws.png'
import Thingies from '../../assets/anvilItems/Thingies.png'

//Character class icons
import BeastMaster from '../../assets/classes/BeastMaster.png'
import BloodBerzerker from '../../assets/classes/BloodBerzerker.png'
import Bubo from '../../assets/classes/Bubo.png'
import DivineKnight from '../../assets/classes/DivineKnight.png'
import ElementalSorcerer from '../../assets/classes/ElementalSorcerer.png'
import ShipBreaker from '../../assets/classes/ShipBreaker.png'
import VoidMaster from '../../assets/classes/VoidWalker.png'

//Coin images
import VoidCoin from '../../assets/coins/VoidCoin.png'
import DementiaCoin from '../../assets/coins/DementiaCoin.png'
import PlatinumCoin from '../../assets/coins/PlatinumCoin.png'
import GoldCoin from '../../assets/coins/GoldCoin.png'
import SilverCoin from '../../assets/coins/SilverCoin.png'

//Monster material images
//World 1
import Grasslands1 from '../../assets/monsterMats/Grasslands1.png'
import Grasslands2 from '../../assets/monsterMats/Grasslands2.png'
import Grasslands3 from '../../assets/monsterMats/Grasslands3.png'
import Jungle1 from '../../assets/monsterMats/Jungle1.png'
import Jungle3 from '../../assets/monsterMats/Jungle3.png'
import Forest1 from '../../assets/monsterMats/Forest1.png'
import Forest3 from '../../assets/monsterMats/Forest3.png'
//World 2
import DesertA1 from '../../assets/monsterMats/DesertA1.png'
import DesertA3 from '../../assets/monsterMats/DesertA3.png'
import DesertB1 from '../../assets/monsterMats/DesertB1.png'
import DesertB3 from '../../assets/monsterMats/DesertB3.png'
import DesertC1 from '../../assets/monsterMats/DesertC1.png'
import DesertC2 from '../../assets/monsterMats/DesertC2.png'
import DesertC4 from '../../assets/monsterMats/DesertC4.png'
//World 3
import SnowA2 from '../../assets/monsterMats/SnowA2.png'
import SnowA4 from '../../assets/monsterMats/SnowA4.png'
import SnowB1 from '../../assets/monsterMats/SnowB1.png'
import SnowB3 from '../../assets/monsterMats/SnowB3.png'
import SnowC1 from '../../assets/monsterMats/SnowC1.png'
//World 4
import GalaxyA1 from '../../assets/monsterMats/GalaxyA1.png'
import GalaxyA3 from '../../assets/monsterMats/GalaxyA3.png'
import GalaxyA4 from '../../assets/monsterMats/GalaxyA4.png'
import GalaxyB1 from '../../assets/monsterMats/GalaxyB1.png'
import GalaxyB3 from '../../assets/monsterMats/GalaxyB3.png'
import GalaxyC1 from '../../assets/monsterMats/GalaxyC1.png'
import GalaxyC4 from '../../assets/monsterMats/GalaxyC4.png'


//Components
import AnvilCard from '../../components/world1/forge/AnvilCard'
import AnvilCostsCard from '../../components/world1/forge/AnvilCostsCard'
import AnvilPointsCard from '../../components/world1/forge/AnvilPointsCard'

function World1Anvil() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-5 mx-auto h-full">
            <h1 className="text-4xl ml-1 mt-4">Anvil</h1>
            <Tabs
                aria-label="Options"
                color="primary"
                variant="underlined"
                className="mt-2"
                classNames={{
                    tabList: "mx-auto",
                    tabContent: "text-gray-300 text-lg"
            }}>
                <Tab key="Production" title="Production">
                    <div className="flex flex-col gap-6">
                        <div className="bg-zinc-800 p-6 flex flex-col w-52">
                            <span className="text-gray-300 text-sm">Total anvil speed</span>
                            <span className="text-lg text-white">3.02M</span>
                        </div>
                        <span className="text-xs mt-4">* Timers on this page don't tick down on purpose, they will update on every cloud save update.</span>
                        <div className="bg-zinc-800 p-3 flex flex-row">
                            <div className="flex flex-col gap-2">
                                <Image 
                                    width={40}
                                    alt="Anvil production icon"
                                    src={Nails}
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-300 whitespace-nowrap">Production Per</span>
                                    <span className="text-sm text-gray-300">Hour</span>
                                </div>
                                <span className="text-lg">6933</span>
                            </div>
                            <div className="flex flex-row flex-wrap gap-6 ml-4 mr-0">
                                <AnvilCard 
                                    charClass={BloodBerzerker}
                                    name="Divinerid"
                                    currentAmount={20935}
                                    maxAmount={20935}
                                />
                                <AnvilCard 
                                    charClass={ElementalSorcerer}
                                    name="Divinerid5"
                                    currentAmount={108171}
                                    maxAmount={147000}
                                />
                            </div>
                        </div>
                        <div className="bg-zinc-800 p-3 flex flex-row">
                            <div className="flex flex-col gap-2">
                                <Image 
                                    width={40}
                                    alt="Anvil production icon"
                                    src={Gears}
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-300 whitespace-nowrap">Production Per</span>
                                    <span className="text-sm text-gray-300">Hour</span>
                                </div>
                                <span className="text-lg">750</span>
                            </div>
                            <div className="flex flex-row flex-wrap gap-6 ml-4">
                                <AnvilCard 
                                    charClass={BeastMaster}
                                    name="Divinerid6"
                                    currentAmount={9139}
                                    maxAmount={58500}
                                />
                                <AnvilCard 
                                    charClass={DivineKnight}
                                    name="Divinerid4"
                                    currentAmount={4977}
                                    maxAmount={21200}
                                />
                                <AnvilCard 
                                    charClass={ElementalSorcerer}
                                    name="Divinerid5"
                                    currentAmount={3659}
                                    maxAmount={10600}
                                />
                                <AnvilCard 
                                    charClass={VoidMaster}
                                    name="Divinerid9"
                                    currentAmount={4137}
                                    maxAmount={27000}
                                />
                                <AnvilCard 
                                    charClass={ShipBreaker}
                                    name="Divinerid10"
                                    currentAmount={1333}
                                    maxAmount={9210}
                                />
                            </div>
                        </div>
                        <div className="bg-zinc-800 p-3 flex flex-row">
                            <div className="flex flex-col gap-2">
                                <Image 
                                    width={40}
                                    alt="Anvil production icon"
                                    src={Gears}
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-300  whitespace-nowrap">Production Per</span>
                                    <span className="text-sm text-gray-300">Hour</span>
                                </div>
                                <span className="text-lg">750</span>
                            </div>
                            <div className="flex flex-row flex-wrap gap-6 ml-4">
                                <AnvilCard 
                                    charClass={BeastMaster}
                                    name="Divinerid6"
                                    currentAmount={9139}
                                    maxAmount={58500}
                                />
                                <AnvilCard 
                                    charClass={DivineKnight}
                                    name="Divinerid4"
                                    currentAmount={4977}
                                    maxAmount={21200}
                                />
                                <AnvilCard 
                                    charClass={ElementalSorcerer}
                                    name="Divinerid5"
                                    currentAmount={3659}
                                    maxAmount={10600}
                                />
                                <AnvilCard 
                                    charClass={VoidMaster}
                                    name="Divinerid9"
                                    currentAmount={4137}
                                    maxAmount={27000}
                                />
                                <AnvilCard 
                                    charClass={ShipBreaker}
                                    name="Divinerid10"
                                    currentAmount={1333}
                                    maxAmount={9210}
                                />
                            </div>
                        </div>
                        <div className="bg-zinc-800 p-3 flex flex-row">
                            <div className="flex flex-col gap-2">
                                <Image 
                                    width={40}
                                    alt="Anvil production icon"
                                    src={Pinions}
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-300  whitespace-nowrap">Production Per</span>
                                    <span className="text-sm text-gray-300">Hour</span>
                                </div>
                                <span className="text-lg">438</span>
                            </div>
                            <div className="flex flex-row flex-wrap gap-6 ml-4">
                                <AnvilCard 
                                    charClass={Bubo}
                                    name="Divinerid3"
                                    currentAmount={2797}
                                    maxAmount={155000}
                                />
                                <AnvilCard 
                                    charClass={DivineKnight}
                                    name="Divinerid4"
                                    currentAmount={2606}
                                    maxAmount={58100}
                                />
                                <AnvilCard 
                                    charClass={DivineKnight}
                                    name="Divinerid7"
                                    currentAmount={3013}
                                    maxAmount={21200}
                                />
                                <AnvilCard 
                                    charClass={ElementalSorcerer}
                                    name="Divinerid8"
                                    currentAmount={2943}
                                    maxAmount={104000}
                                />
                                <AnvilCard 
                                    charClass={ShipBreaker}
                                    name="Divinerid10"
                                    currentAmount={788}
                                    maxAmount={9210}
                                />
                            </div>
                        </div>
                        <div className="bg-zinc-800 p-3 flex flex-row">
                            <div className="flex flex-col gap-2">
                                <Image 
                                    width={40}
                                    alt="Anvil production icon"
                                    src={Screws}
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-300  whitespace-nowrap">Production Per</span>
                                    <span className="text-sm text-gray-300">Hour</span>
                                </div>
                                <span className="text-lg">438</span>
                            </div>
                            <div className="flex flex-row flex-wrap gap-6 ml-4">
                                <AnvilCard 
                                    charClass={ShipBreaker}
                                    name="Divinerid2"
                                    currentAmount={9945}
                                    maxAmount={39300}
                                />
                                <AnvilCard 
                                    charClass={Bubo}
                                    name="Divinerid3"
                                    currentAmount={2099}
                                    maxAmount={155000}
                                />
                                <AnvilCard 
                                    charClass={DivineKnight}
                                    name="Divinerid4"
                                    currentAmount={1955}
                                    maxAmount={58100}
                                />
                                <AnvilCard 
                                    charClass={BeastMaster}
                                    name="Divinerid6"
                                    currentAmount={4199}
                                    maxAmount={58500}
                                />
                                <AnvilCard 
                                    charClass={DivineKnight}
                                    name="Divinerid7"
                                    currentAmount={2260}
                                    maxAmount={21200}
                                />
                                <AnvilCard 
                                    charClass={ElementalSorcerer}
                                    name="Divinerid8"
                                    currentAmount={2207}
                                    maxAmount={104000}
                                />
                                <AnvilCard 
                                    charClass={VoidMaster}
                                    name="Divinerid9"
                                    currentAmount={1839}
                                    maxAmount={27500}
                                />
                                <AnvilCard 
                                    charClass={ShipBreaker}
                                    name="Divinerid10"
                                    currentAmount={591}
                                    maxAmount={9210}
                                />
                            </div>
                        </div>
                        <div className="bg-zinc-800 p-3 flex flex-row">
                            <div className="flex flex-col gap-2">
                                <Image 
                                    width={40}
                                    alt="Anvil production icon"
                                    src={Thingies}
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-300  whitespace-nowrap">Production Per</span>
                                    <span className="text-sm text-gray-300">Hour</span>
                                </div>
                                <span className="text-lg">438</span>
                            </div>
                            <div className="flex flex-row flex-wrap gap-6 ml-4">
                                <AnvilCard 
                                    charClass={Bubo}
                                    name="Divinerid3"
                                    currentAmount={1399}
                                    maxAmount={155000}
                                />
                                <AnvilCard 
                                    charClass={DivineKnight}
                                    name="Divinerid4"
                                    currentAmount={1303}
                                    maxAmount={58100}
                                />
                                <AnvilCard 
                                    charClass={BeastMaster}
                                    name="Divinerid6"
                                    currentAmount={2800}
                                    maxAmount={58500}
                                />
                                <AnvilCard 
                                    charClass={VoidMaster}
                                    name="Divinerid9"
                                    currentAmount={1226}
                                    maxAmount={27500}
                                />
                            </div>
                        </div>
                    </div>    
                </Tab>
                <Tab key="Points" title="Points">
                    <div className="flex flex-col gap-1 text-white">
                        <div className="flex flex-row gap-1 mt-5">
                            <Image 
                                width={20}
                                alt="Information icon"
                                src={InfoIcon}
                            />
                            <div className="text-sm">Each character can purchase a maximum of 600 anvil points with Coins or 700 points with Monster Drops.</div>
                        </div>
                        <div className="text-sm text-gray-300 mt-10">Cost to max anvil points from money</div>
                        <div className="flex flex-row gap-1 text-lg items-center">
                            <Image 
                                width={20}
                                src={VoidCoin}
                            />
                            <div>38</div>
                            <Spacer x={1} />
                            <Image 
                                width={20}
                                src={DementiaCoin}
                            />
                            <div>22</div>
                            <Spacer x={1} />
                            <Image 
                                width={20}
                                src={PlatinumCoin}
                            />
                            <div>10</div>
                            <Spacer x={1} />
                            <Image 
                                width={20}
                                src={GoldCoin}
                            />
                            <div>31</div>
                            <Spacer x={1} />
                            <Image 
                                width={20}
                                src={SilverCoin}
                            />
                            <div>72</div>
                        </div>
                        <div className="text-sm text-gray-300 mt-4">Costs to max out points from monster mats</div>
                        <AnvilPointsCard 
                            monsterMaterial = 'jungle1'
                            materialIcon = {Jungle1}
                            totalCost = {13700}
                            heldAmount = {44600000}
                        />                        
                        <AnvilPointsCard 
                            monsterMaterial = 'jungle3'
                            materialIcon = {Jungle3}
                            totalCost = {31100}
                            heldAmount = {2700000}
                        />
                        <AnvilPointsCard 
                            monsterMaterial = 'forest1'
                            materialIcon = {Forest1}
                            totalCost = {46000}
                            heldAmount = {118000000}
                        />
                        <AnvilPointsCard 
                            monsterMaterial = 'forest3'
                            materialIcon = {Forest3}
                            totalCost = {62700}
                            heldAmount = {9880000}
                        />
                        <AnvilPointsCard 
                            monsterMaterial = 'deserta1'
                            materialIcon = {DesertA1}
                            totalCost = {90600}
                            heldAmount = {8300000}
                        />
                        <AnvilPointsCard 
                            monsterMaterial = 'deserta3'
                            materialIcon = {DesertA3}
                            totalCost = {113000}
                            heldAmount = {15000000}
                        />
                        <AnvilPointsCard 
                            monsterMaterial = 'desertb1'
                            materialIcon = {DesertB1}
                            totalCost = {137000}
                            heldAmount = {121000000}
                        />
                        <AnvilPointsCard 
                            monsterMaterial = 'desertb3'
                            materialIcon = {DesertB3}
                            totalCost = {229000}
                            heldAmount = {6810000}
                        />
                        <AnvilPointsCard 
                            monsterMaterial = 'desertc1'
                            materialIcon = {DesertC1}
                            totalCost = {389000}
                            heldAmount = {9210}
                        />
                        <AnvilPointsCard 
                            monsterMaterial = 'desertc2'
                            materialIcon = {DesertC2}
                            totalCost = {480000}
                            heldAmount = {7910000}
                        />
                        <AnvilPointsCard 
                            monsterMaterial = 'desertc4'
                            materialIcon = {DesertC4}
                            totalCost = {645000}
                            heldAmount = {6010000}
                        />
                        <AnvilPointsCard 
                            monsterMaterial = 'snowa2'
                            materialIcon = {SnowA2}
                            totalCost = {759000}
                            heldAmount = {2010000}
                        />
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default World1Anvil
import './App.css'

import Dashboard from './pages/dashboard'
import World1Stamps from './pages/world1/World1-Stamps'
import World1Forge from './pages/world1/World1-Forge'
import World1Anvil from './pages/world1/World1-Anvil'
import World2Alchemy from './pages/world2/World2-Alchemy'
import World2Arcade from './pages/world2/World2-Arcade'
import World3Construction from './pages/world3/World3-Construction'
import World3Trapping from './pages/world3/World3-Trapping'
import World3Worship from './pages/world3/World3-Worship'
import World4Breeding from './pages/world4/World4-Breeding'
import World4Cooking from './pages/world4/World4-Cooking'
import World4Lab from './pages/world4/World4-Lab'
import World4Rift from './pages/world4/World4-Rift'
import World5Divinity from './pages/world5/World5-Divinity'
import World5Gaming from './pages/world5/World5-Gaming'
import World5Sailing from './pages/world5/World5-Sailing'
import PlayersPage from './pages/PlayersPage'
import AccountCompanions from './pages/account/Account-Companions'
import AccountConstellations from './pages/account/Account-Constellations'
import AccountDungeons from './pages/account/Account-Dungeons'
import AccountObols from './pages/account/Account-Obols'
import AccountQuests from './pages/account/Account-Quests'
import AccountSlab from './pages/account/Account-Slab'
import AccountStorage from './pages/account/Account-Storage'
import AccountTaskBoard from './pages/account/Account-TaskBoard'
import RawData from './pages/Raw-Data'
import Layout from './components/Layout'
import Footer from './components/Footer'

import Backend from './pages/Backend'

import { Routes, Route, useNavigate } from "react-router-dom"
import { NextUIProvider } from "@nextui-org/react"

function App() {
  const navigate = useNavigate()

  return (
      <NextUIProvider navigate={navigate}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="world-1/stamps" element={<World1Stamps />} />
            <Route path="world-1/forge" element={<World1Forge />} />
            <Route path="world-1/anvil" element={<World1Anvil />} />
            <Route path="world-2/alchemy" element={<World2Alchemy />} />
            <Route path="world-2/arcade" element={<World2Arcade />} />
            <Route path="world-3/construction" element={<World3Construction />} />
            <Route path="world-3/worship" element={<World3Worship />} />
            <Route path="world-3/trapping" element={<World3Trapping />} />
            <Route path="world-4/cooking" element={<World4Cooking />} />
            <Route path="world-4/lab" element={<World4Lab />} />
            <Route path="world-4/breeding" element={<World4Breeding />} />
            <Route path="world-4/rift" element={<World4Rift />} />
            <Route path="world-5/divinity" element={<World5Divinity />} />
            <Route path="world-5/sailing" element={<World5Sailing />} />
            <Route path="world-5/gaming" element={<World5Gaming />} />
            <Route path="players" element={<PlayersPage />} />
            <Route path="account/task-board" element={<AccountTaskBoard />} />
            <Route path="account/constellations" element={<AccountConstellations />} />
            <Route path="account/quests" element={<AccountQuests />} />
            <Route path="account/slab" element={<AccountSlab />} />
            <Route path="account/storage" element={<AccountStorage />} />
            <Route path="account/obols" element={<AccountObols />} />
            <Route path="account/dungeons" element={<AccountDungeons />} />
            <Route path="account/companions" element={<AccountCompanions />} />
            <Route path="raw-data" element={<RawData />} />
            <Route path="backend" element={<Backend />} />
          </Route>
        </Routes>
    </NextUIProvider>
  )
}

export default App

import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button, Navbar, NavbarContent, NavbarItem, Image, Divider } from "@nextui-org/react"
import { Link } from 'react-router-dom'
import ArrowDown from '../assets/menu-down.png'
import Logo from '../assets/logo.svg'

function Header() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row bg-neutral-800 border-b-1 border-gray-700 justify-around items-center p-2">
          <Image radius="none" src={Logo} />
          <Button color="primary" variant="flat">Sign Up</Button>
        </div>
        <Navbar className="h-14 bg-neutral-800 text-gray-300 font-semibold border-b-1 border-gray-700">
            <NavbarContent className="flex flex-row gap-6">
              <NavbarItem>
                <Link to="/" className="hover:text-sky-600">Dashboard</Link>
              </NavbarItem>
              <NavbarItem>
                <Dropdown>
                  <DropdownTrigger className="flex flex-row w-20 items-center">
                    <span className="cursor-pointer hover:text-sky-600">World 1
                    <Image 
                      width={30}
                      alt="Dropdown down arrow"
                      src={ArrowDown}
                      className=""
                    />
                    </span>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem key="stamps" as={Link} to="/world-1/stamps">Stamps</DropdownItem>
                    <DropdownItem key="forge" as={Link} to="/world-1/forge">Forge</DropdownItem>
                    <DropdownItem key="anvil" as={Link} to="/world-1/anvil">Anvil</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
              <NavbarItem>
                <Dropdown>
                <DropdownTrigger className="flex flex-row w-20 items-center">
                    <span className="cursor-pointer hover:text-sky-600">World 2
                    <Image 
                      width={30}
                      alt="Dropdown down arrow"
                      src={ArrowDown}
                      className=""
                    />
                    </span>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem key="alchemy" as={Link} to="/world-2/alchemy">Alchemy</DropdownItem>
                    <DropdownItem key="arcade" as={Link} to="/world-2/arcade">Arcade</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
              <NavbarItem>
                <Dropdown>
                  <DropdownTrigger className="flex flex-row w-20 items-center">
                    <span className="cursor-pointer hover:text-sky-600">World 3
                    <Image 
                      width={30}
                      alt="Dropdown down arrow"
                      src={ArrowDown}
                      className=""
                    />
                    </span>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem key="construction" as={Link} to="/world-3/construction">Construction</DropdownItem>
                    <DropdownItem key="worship" as={Link} to="/world-3/worship">Worship</DropdownItem>
                    <DropdownItem key="trapping" as={Link} to="/world-3/trapping">Trapping</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
              <NavbarItem>
                <Dropdown>
                <DropdownTrigger className="flex flex-row w-20 items-center">
                    <span className="cursor-pointer hover:text-sky-600">World 4
                    <Image 
                      width={30}
                      alt="Dropdown down arrow"
                      src={ArrowDown}
                      className=""
                    />
                    </span>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem key="cooking" as={Link} to="/world-4/cooking">Cooking</DropdownItem>
                    <DropdownItem key="lab" as={Link} to="/world-4/lab">Lab</DropdownItem>
                    <DropdownItem key="breeding" as={Link} to="/world-4/breeding">Breeding</DropdownItem>
                    <DropdownItem key="rift" as={Link} to="/world-4/rift">Rift</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
              <NavbarItem>
                <Dropdown>
                <DropdownTrigger className="flex flex-row w-20 items-center">
                    <span className="cursor-pointer hover:text-sky-600">World 5
                    <Image 
                      width={30}
                      alt="Dropdown down arrow"
                      src={ArrowDown}
                      className=""
                    />
                    </span>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem key="divinity" as={Link} to="/world-5/divinity">Divinity</DropdownItem>
                    <DropdownItem key="sailing" as={Link} to="/world-5/sailing">Sailing</DropdownItem>
                    <DropdownItem key="gaming" as={Link} to="/world-5/gaming">Gaming</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
              <NavbarItem>
                <Link to="/players" className="hover:text-sky-600">Players</Link>
              </NavbarItem>
              <NavbarItem>
                <Dropdown>
                <DropdownTrigger className="flex flex-row w-32 items-center">
                    <span className="cursor-pointer hover:text-sky-600">Account Wide
                    <Image 
                      width={30}
                      alt="Dropdown down arrow"
                      src={ArrowDown}
                      className=""
                    />
                    </span>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem key="task-board" as={Link} to="/account/task-board">Task Board</DropdownItem>
                    <DropdownItem key="constellations" as={Link} to="/account/constellations">Constellations</DropdownItem>
                    <DropdownItem key="quests" as={Link} to="/account/quests">Quests</DropdownItem>
                    <DropdownItem key="slab" as={Link} to="/account/slab">Slab</DropdownItem>
                    <DropdownItem key="storage" as={Link} to="/account/storage">Storage</DropdownItem>
                    <DropdownItem key="obols" as={Link} to="/account/obols">Obols</DropdownItem>
                    <DropdownItem key="dungeons" as={Link} to="/account/dungeons">Dungeons</DropdownItem>
                    <DropdownItem key="companions" as={Link} to="/account/companions">Companions</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
              <NavbarItem>
                <Link to="/raw-data" className="hover:text-sky-600">Raw Data</Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="/backend" className="hover:text-sky-600">Backend</Link>
              </NavbarItem>
            </NavbarContent>
            <Divider orientation="vertical" />
            <NavbarContent justify="end">
              <NavbarItem>
                
              </NavbarItem>
            </NavbarContent>
        </Navbar>
      </div>
    )
}

export default Header
import { Listbox, ListboxItem } from '@nextui-org/react'

function Obols() {
    return (
        <div className="w-[1440px] bg-zinc-900 text-white flex flex-col p-8 mx-auto h-full">
            <h1 className="text-4xl ml-2">Obols</h1>
            <div className="flex flex-row shadow-2xl mt-6">
                <div className="w-1/4 p-6">
                    <Listbox
                        classNames={{
                            list: "font-semibold text-gray-300"
                        }}
                    >
                        <ListboxItem endContent=">" key="family">Family</ListboxItem>
                        <ListboxItem key="inventory">Inventory</ListboxItem>
                    </Listbox>

                </div>
                <div className="w-3/4 bg-zinc-800"></div>
            </div>
        </div>
    )
}

export default Obols
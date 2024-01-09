import { Image, Checkbox } from '@nextui-org/react'

import Particle from '../../../../assets/particles/Particle.png'
import AtomCard from './AtomCard'
import AtomData from '../../../../assets/data/atomColliderData'

const atomItems = AtomData.map(atom => {
    return (
        <AtomCard 
            key={atom.id}
            {...atom}
        />
    )
})

function AtomCollider() {
    return(
        <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-6">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Particles</span>
                    <div className="flex flex-row gap-3">
                        <Image 
                            width={25}
                            src={Particle}
                        />
                        <span className="text-lg">951</span>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <Checkbox radius="sm" size="lg" />
                    <span className="ml-1">Hide max level</span>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                {atomItems}
            </div>
        </div>
    )
}

export default AtomCollider
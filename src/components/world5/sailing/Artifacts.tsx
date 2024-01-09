import {Checkbox} from '@nextui-org/react'

import artifactsData from '../../../assets/data/artifactsData.js'
import ArtifactCard from './ArtifactCard'

const artifactItems = artifactsData.map(artifact => {
    return (
        <ArtifactCard 
            key={artifact.id}
            {...artifact}
        />
    )
})

function Artifacts() {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-2 items-center">
                <Checkbox radius="sm" />
                <div>Hide unobtained</div>
            </div>
            <div className="flex flex-row gap-3 flex-wrap">
                {artifactItems}
            </div>
        </div>
    )
}

export default Artifacts
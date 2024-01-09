//Vial backgrounds
import Vials0 from '../../../assets/vials/Vials0.png';
import Vials1 from '../../../assets/vials/Vials1.png';
import Vials2 from '../../../assets/vials/Vials2.png';
import Vials3 from '../../../assets/vials/Vials3.png';
import Vials5 from '../../../assets/vials/Vials5.png';
import Vials6 from '../../../assets/vials/Vials6.png';
import Vials7 from '../../../assets/vials/Vials7.png';
import Vials8 from '../../../assets/vials/Vials8.png';
import Vials9 from '../../../assets/vials/Vials9.png';
import Vials10 from '../../../assets/vials/Vials10.png';
import Vials11 from '../../../assets/vials/Vials11.png';
import Vials12 from '../../../assets/vials/Vials12.png';
import Vials13 from '../../../assets/vials/Vials13.png';

//NextUI elements
import { Image, Tooltip, Divider } from '@nextui-org/react'

interface propTypes {
    material: string,
    name: string,
    level: number,
    description: string,
    materialCost: number,
    waterCost: number
}

function Vial(props: propTypes) {

    let vialLevel = Vials0
    switch(props.level) {
        case 0: vialLevel = Vials0; break;
        case 1: vialLevel = Vials1; break;
        case 2: vialLevel = Vials2; break;
        case 3: vialLevel = Vials3; break;
        case 5: vialLevel = Vials5; break;
        case 6: vialLevel = Vials6; break;
        case 7: vialLevel = Vials7; break;
        case 8: vialLevel = Vials8; break;
        case 9: vialLevel = Vials9; break;
        case 10: vialLevel = Vials10; break;
        case 11: vialLevel = Vials11; break;
        case 12: vialLevel = Vials12; break;        
        case 13: vialLevel = Vials13; break;        
    }

    return (
            <Tooltip content={
                <div className="flex flex-col text-neutral-800 w-96">
                    <div className="text-xl font-bold mt-2">{props.name} ({props.level})</div>
                    <Divider className="p-[1px] my-4 bg-neutral-600" />
                    <div className="text-sm">{props.description}</div>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="text-sm mt-3">Material cost:</div>
                        <div>{(props.materialCost > 999999 ? (props.materialCost / 1000000) + 'M' : props.materialCost)}</div>
                        <Image 
                            width={20}
                            src={props.material}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="text-sm mt-3">Material cost:</div>
                        <div>{props.waterCost}</div>
                        <Image 
                            width={10}
                            src={props.material}
                        />
                    </div>
                </div>
            }>
                <div className="flex relative">
                    <Image 
                        src={vialLevel}
                        className="relative"
                    />
                    <div className="absolute inset-0 flex items-center ml-5">
                        <Image 
                            width={50}
                            src={props.material}
                            className=""
                        />
                    </div>
                </div>
            </Tooltip>
    )
}

export default Vial
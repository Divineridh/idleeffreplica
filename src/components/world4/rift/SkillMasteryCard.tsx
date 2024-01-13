type bonusObject = {
    text: string,
    unlocked: boolean,
}

interface propTypes {
    icon: string, 
    level: number, 
    nextBonus: number, 
    bonus1: bonusObject,
    bonus2: bonusObject,
    bonus3: bonusObject,
    bonus4: bonusObject,
    bonus5: bonusObject,
    bonus6: bonusObject,
    bonus7: bonusObject,
    characterLevels: {divinerid: number, divinerid2: number, divinerid3: number, divinerid4: number, divinerid5: number, divinerid6: number, divinerid7: number, divinerid8: number, divinerid9: number, divinerid10: number, },
}

import  { Image, Tooltip, Divider } from '@nextui-org/react'

function SkillMasteryCard(props: propTypes) {
    return (
        <div className="flex flex-col p-3 bg-zinc-800">
            <Tooltip 
                radius="none"
                content={
                    <div className="p-2 flex flex-col w-72">
                        <div className="text-lg text-bold">Levels</div>
                        <Divider className="mt-2 bg-gray-800" />
                        <div className="flex flex-col gap-1 mt-1 text-gray-700 text-sm">
                            <div>Divinerid: Lv {props.characterLevels.divinerid}</div>
                            <div>Divinerid2: Lv {props.characterLevels.divinerid2}</div>
                            <div>Divinerid3: Lv {props.characterLevels.divinerid3}</div>
                            <div>Divinerid4: Lv {props.characterLevels.divinerid4}</div>
                            <div>Divinerid5: Lv {props.characterLevels.divinerid5}</div>
                            <div>Divinerid6: Lv {props.characterLevels.divinerid6}</div>
                            <div>Divinerid7: Lv {props.characterLevels.divinerid7}</div>
                            <div>Divinerid8: Lv {props.characterLevels.divinerid8}</div>
                            <div>Divinerid9: Lv {props.characterLevels.divinerid9}</div>
                            <div>Divinerid10: Lv {props.characterLevels.divinerid10}</div>
                        </div>
                    </div>
                }
            >
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center">
                        <Image width={25} src={props.icon} />
                        <div className="text-sm ml-4">Lv {props.level}</div>
                    </div>
                    {props.nextBonus !== 0 ? 
                        <div className="text-xs">Next bonus at: {props.nextBonus}</div> :
                        <></>
                    }
                </div>
            </Tooltip>
            <div className="flex flex-col gap-2 mt-2 text-sm text-gray-100">
                <div className={props.bonus1.unlocked ? "" : "brightness-50"}>{props.bonus1.text}</div>
                <div className={props.bonus2.unlocked ? "" : "brightness-50"}>{props.bonus2.text}</div>
                <div className={props.bonus3.unlocked ? "" : "brightness-50"}>{props.bonus3.text}</div>
                <div className={props.bonus4.unlocked ? "" : "brightness-50"}>{props.bonus4.text}</div>
                <div className={props.bonus5.unlocked ? "" : "brightness-50"}>{props.bonus5.text}</div>
                <div className={props.bonus6.unlocked ? "" : "brightness-50"}>{props.bonus6.text}</div>
                <div className={props.bonus7.unlocked ? "" : "brightness-50"}>{props.bonus7.text}</div>
            </div>
        </div>
    )
}

export default SkillMasteryCard
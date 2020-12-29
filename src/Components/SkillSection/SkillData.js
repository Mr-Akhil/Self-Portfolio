import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import {
    SkillContent,
    SkillName,
    SkillRate,
    SkillUnrate
} from '../SkillSection/SkillElements'

const SkillData = (props) => {
    return (
        <SkillContent>
            <SkillName>
            <span className='badge bg-dark'>{props.Skill.sname}</span>
            </SkillName>
            <SkillRate>
                {   
                    Array(props.Skill.star).fill().map((_,i) => ( <AiFillStar /> ))
                }
            </SkillRate>
            <SkillUnrate>
                {   
                        Array(5 - props.Skill.star).fill().map((_,i) => ( <AiFillStar /> ))
                }
            </SkillUnrate>
        </SkillContent>
    )
}

export default SkillData

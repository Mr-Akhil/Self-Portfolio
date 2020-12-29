import React from 'react'
import SkillData from './SkillData'
import {
    SkillContainer,
    SkillH2
} from '../SkillSection/SkillElements'


const SkillSection = () => {
    const Skills = [
        {
            id: 1,
            sname: 'C/CPP',
            star: 3
        },
        {
            id: 2,
            sname: 'Core Java',
            star: 4
        },
        {
            id: 3,
            sname: 'HTML/CSS',
            star: 4
        },
        {
            id: 4,
            sname: 'JavaScript',
            star: 3,
        },
        {
            id: 5,
            sname: 'ReactJs',
            star: 3
        },
        {
            id: 6,
            sname: 'MySql',
            star: 4
        }
    ]

    return (
        <>
            <SkillContainer id="skill">
                <SkillH2>Skills</SkillH2>
                    { 
                    Skills.map((Skill, index) => (
                        <SkillData key={index} Skill={Skill} />
                    ))                
                    }
            </SkillContainer>
        </>
    )
}

export default SkillSection

import React from 'react'
import {
  ProjectColumn,
  ProjectCard,
  CardImg,
  CardData,
  ProjectDesc
 } from '../ProjectSection/ProjectElements'

const ProjectData = (props) => {
  return (
    <ProjectColumn id={props.Project.id} >
      <ProjectCard>
        <CardImg src={props.Project.img} alt="Not Found" />
        <CardData>
        <p className='badge bg-dark text-center'>{ props.Project.pname }</p>
          <ProjectDesc>
            { props.Project.description }
          </ProjectDesc>
        </CardData>
      </ProjectCard>
    </ProjectColumn>
  ) 
}

export default ProjectData

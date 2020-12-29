import React from 'react'
import portf from '../../Img/portfolio.svg'
import room from '../../Img/room.svg'
import car from '../../Img/car.svg'
import {
  ProjectContainer,
  ProjectH2
 } from '../ProjectSection/ProjectElements'
import ProjectData from './ProjectData'

const ProjectSection = () => {
  const projectData = [
    {
        id: 'portfolio',
        pname: 'Self Portfolio',
        img: portf,
        description: 'Developed a self portfolio with ReactJs',
        buttonLabel: 'Visit'
    },
    {
        id: 'gullyGullyRoom',
        pname: 'Gully Gully Room',
        img: room,
        description: 'This project was developed for students who need accommodation or PG facility. This help student to find the accommodation fast and easily. They can check rating or compare the price as well.',
        buttonLabel: ''
    },
    {
        id: 'nexaCopy',
        pname: 'Nexa Copy',
        img: car,
        description: 'This project was done for the learning purpose, I just try to clone a website named Nexa (Automobile). Which provide the facility of online car booking and test drive booking.',
        buttonLabel: ''
    },
  ]



  return (
      <ProjectContainer id="projects">
        <ProjectH2>My Projects</ProjectH2>
        { 
        projectData.map((Project, index) => (
            <ProjectData key={index} Project={Project} />
        ))                
      }
      </ProjectContainer> 
  )
}

export default ProjectSection

import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import SkillSection from '../Components/SkillSection'
import ProjectSection from '../Components/ProjectSection'
import Footer from '../Components/Footer'
import Splash from '../Components/Splash'

const Home = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)

    }
    const [load, setLoad] = useState(true)

    const loadToggle = () => {
        setLoad(!load)
    }

    window.onload = function() {
        setTimeout(loadToggle,5000);
    };
    if(load)
    {
        return(
            <Splash />
        )
    }
    else
    {
        return (
            <>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ProjectSection />
                <Footer />
            </>
        )
    }
}

export default Home
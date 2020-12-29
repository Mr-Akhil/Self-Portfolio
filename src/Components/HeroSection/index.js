import React from 'react'
import Video from '../../Video/video.mp4'
import { FiChevronsDown } from 'react-icons/fi'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroDown
} from "./HeroElements" 

const HeroSection = () => {
    return (
        <HeroContainer id="home"> 
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello World!</HeroH1>
            </HeroContent>
            <HeroDown to='about' 
            smooth={true} 
            duration={500} 
            spy={true} 
            exect='true' 
            offset={-80}>
                <FiChevronsDown />
            </HeroDown>
        </HeroContainer>
    )
}

export default HeroSection

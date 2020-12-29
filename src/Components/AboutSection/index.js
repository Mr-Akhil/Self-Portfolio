import React from 'react'
import Portrait from '../../Img/self.JPG'
import {
    AboutContainer,
    AboutContent,
    AboutImg,
    AboutData,
    AboutH3
} from './AboutElements'

const AboutSection = () => {
    return (
        <>
            <AboutContainer id='about'>
                <AboutContent>
                    <AboutData>
                    <AboutImg src={Portrait}/>
                    </AboutData>
                </AboutContent>
                <AboutContent>
                    <AboutH3>Hi, I'm Akhil. Nice To meet You.</AboutH3>
                    <AboutData>
                        I like code things from scratch, 
                        and enjoy bringing ideas to life in the browser.
                        I'm quietly confident, naturally curious, 
                        and perpetually working on improving my chops one problem at a time.
                    </AboutData>
                </AboutContent>
            </AboutContainer>
        </>
    )
}

export default AboutSection;
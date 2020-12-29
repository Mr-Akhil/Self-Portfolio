import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as Scroll } from 'react-scroll';
import {
     Nav, 
     NavbarContainer, 
     NavLogo,
     MoboIcon,
     NavMenu,
     NavItem,
     NavLinks
    } from './NavbarElements'

const Navbar = ({toggle}) => {
    
    const [scrollNav, setScrollNav] = useState(false); 

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }
        else
            setScrollNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        Scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Akhil Mundra</NavLogo>
                    <MoboIcon onClick={toggle}>
                        <FaBars />
                    </MoboIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exect='true' 
                            offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exect='true' 
                            offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exect='true' 
                            >Contact Me</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>  
        </>
    )
}

export default Navbar
import React from 'react'
import { 
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaTwitter,
    FaLinkedin,
    FaHeart,
    FaGithub
 } from 'react-icons/fa'
import {
    FooterContainer,
    FooterH2,
    FooterContent,
    FooterItem,
    FooterBottom,
    FooterH4,
    FooterHeart
 } from './FooterElements' 

const Footer = () => {
    return (
        <>
            <FooterContainer id='contact'>
                <FooterH2>Contact Me</FooterH2>
                <FooterContent>
                    <FooterItem to='/' onClick={ () => { window.open('https://github.com/Mr-Akhil', '_blank') } }> <FaGithub /> </FooterItem>
                    <FooterItem to='/' onClick={ () => { window.open('https://www.linkedin.com/in/akhil-mundra-a37470148/', '_blank') } }> <FaLinkedin /> </FooterItem>
                    <FooterItem to='/' onClick={ () => { window.open('https://wa.me/+918005744088', '_blank') } }> <FaWhatsapp /> </FooterItem>
                    <FooterItem to='/' onClick={ () => { window.open('https://instagram.com/__mr_maverick__', '_blank') } }> <FaInstagram /> </FooterItem>
                    <FooterItem to='/' onClick={ () => { window.open('https://twitter.com/mundra1997', '_blank') } }> <FaTwitter /> </FooterItem>
                    <FooterItem to='/' onClick={ () => { window.open('https://www.facebook.com/sunny.mundra.71/', '_blank') } }> <FaFacebookF /> </FooterItem>
                </FooterContent>
                <FooterBottom>
                    <FooterH4>Crafted with</FooterH4>
                    <FooterHeart> <FaHeart /> </FooterHeart>
                </FooterBottom>
            </FooterContainer>  
        </>
    )
}

export default Footer;
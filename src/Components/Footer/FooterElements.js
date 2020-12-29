import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom' 

export const FooterContainer = styled.div`
 /* border: 2px solid green; */
 display: grid;
 justify-content: center;
 align-items: center;
 position: relative;
 background: #000;
 transition: 0.2s all ease-in-out;
 z-index: 1;
`
export const FooterH2 = styled.h2`
 color: #fff;
 text-align: center;
 padding: 1rem;
`

export const FooterContent = styled.div`
 color: #fff;
 display: flex;
 align-items: center;
 justify-content: center;
`
export const FooterItem = styled(LinkR)`
 cursor: pointer;
 color: #fff;
 margin: .3rem 1.5rem 1rem 1.5rem;
 font-size: 1.5rem;
 transition: 0.2s all ease;
 
 @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    margin: .3rem 1rem 1rem 1rem;
 }
 
 @media screen and (max-width: 320px) {
    font-size: 1.2rem;
    margin: .3rem .5rem 1rem .5rem;
 }
 &:hover {
    overflow: hidden;
    animation: tilt 2s ease-in infinite;
    color: #fff;

    @keyframes tilt {
        -webkit-flow-from,
        0% { transform: rotateY(-180deg); }
        50% { transform: rotateY(180deg); }
        100% { transform: rotateY(-180deg); }
    }  
 }
`

export const FooterBottom = styled.div`
 color: #fff;
 padding: .5rem;    
 justify-content: center;
 text-align: center;
 display: flex;
`
export const FooterH4 = styled.h4`
 font-size: 1.2rem;
 margin-left: 0.5rem;
`

export const FooterHeart = styled.h4`
 font-size: 1.2rem;
 color: red;
 margin-left: 0.5rem;
`
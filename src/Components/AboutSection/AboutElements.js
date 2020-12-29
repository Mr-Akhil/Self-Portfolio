import styled from 'styled-components'

export const AboutContainer = styled.div`
 /* border: 2px solid red; */
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 z-index: 1;
 padding: 1rem;

 @media screen and (max-width: 768px) {
    background: #000;
    display: grid;
 }
`

export const AboutContent = styled.div`
 /* border: 2px solid black; */
 padding: 1rem;
 align-items: center;
 justify-content: center;
 justify-self: center;
 text-align: center;
 width: 50%;
 height: 300px;
 float: left; 

 @media screen and (max-width: 768px) {
    background: #fff;
    width: 100%;
    border-radius: 15px;
    margin: 1px;
 }

 @media screen and (max-width: 480px) {
    height: 250px;
 }
`

export const AboutImg = styled.img`
 justify-content: center;
 align-items: center;
 height: 200px;
 width: 200px;
 border-radius: 50%;
 transition: 0.2s ease-in;

 &:hover {
    box-shadow: 5px 5px 10px black;
 }

 @media screen and (max-width: 480px) {
    height: 180px;
    width: 180px;
 }
`

export const AboutData = styled.p`
 padding: .5rem;
 justify-content: center;
 align-items: center;
 text-align: center;
 
 @media screen and (max-width: 480px) {
    padding: 1rem;
    font-size: .9rem;
 }

 @media screen and (max-width: 350px) {
    padding: 1.2rem;
    font-size: .7rem;
 }
 @media screen and (max-width: 330px) {
    font-size: .6rem;
 }
`
export const AboutH3 = styled.h3`
 padding-top: 2rem;
`
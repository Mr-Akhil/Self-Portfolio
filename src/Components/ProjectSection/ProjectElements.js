import styled from 'styled-components'

export const ProjectContainer = styled.div`
 /* border: 5px solid red; */
 display: table;
 width: 100%;
 justify-content: center;
 align-items: center;
 position: relative;
 /* height: 100vh; */
 z-index: 1;
`
export const ProjectH2 = styled.h2`
 color: #000;
 text-align: center;
 padding: 1rem;
`

export const ProjectColumn = styled.div`
 /* border: 2px solid green; */
 padding: .8rem;
 /* justify-content: space-between; */
 /* align-items: center; */
 width: 20%;
 float: left;

 @media screen and (max-width: 1080px) {
   padding: .5rem;
   width: 25%;
 }

 @media screen and (max-width: 768px) {
   padding: .5rem;
   width: 33.33%;
 }

 @media screen and (max-width: 600px) {
   padding: 1rem;
   width: 50%;
 }
 
 @media screen and (max-width: 400px) {
   padding: 1.2rem;
   width: 100%;
 }
`

export const ProjectCard = styled.div`
 transition: .3s all ease;
 border: 1px solid #D3D3D3;
 height: 450px;
 border-radius: 15px;
 &:hover {
   box-shadow: 2px 2px 7px black;
 }

 @media screen and (max-width: 1080px) {
   
 }

 @media screen and (max-width: 768px) {
   height: 400px
 }

 @media screen and (max-width: 600px) {
   
 }
 
 @media screen and (max-width: 400px) {
  height: 450px; 
 }
 
`
export const ImgHolder = styled.div`
 /* border: 2px solid yellow; */
`

export const CardImg = styled.img`
 border-bottom: 2px solid #D3D3D3;
 /* border: 1px solid #888888; */
 /* border: 2px solid cyan; */
 border-radius: 15px;
 width: 100%;
 height: 150px;
`

export const CardData = styled.div`
 padding: 1rem;
`

export const ProjectDesc = styled.p`
 color: black;
 font-size: 1rem;

 @media screen and (max-width: 980px) {
   font-size: .9rem;
}

@media screen and (max-width: 768px) {
   font-size: .8rem;
}

@media screen and (max-width: 600px) {
  
}

@media screen and (max-width: 400px) {

}
`
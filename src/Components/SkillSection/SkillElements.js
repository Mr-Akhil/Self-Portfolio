import styled from 'styled-components'

export const SkillContainer = styled.div`
 width: 100%;
 /* border: 2px solid red; */
 display: table;
 justify-content: center;
 align-items: center;
 position: relative;
 z-index: 1;
 padding: 1rem;


 @media screen and (max-width: 768px) {
    background: #000;
    padding: 1rem;
 }
`

export const SkillContent = styled.div`
 border-radius: 15px;
 padding: 1rem;
 align-items: center;
 justify-content: center;
 justify-self: center;
 text-align: center;
 width: 50%;
 float: left;
 /* z-index: 3; */

 @media screen and (max-width: 768px) {
    background: #fff;
    width: 100%;
    margin: 1px;
 }
 @media screen and (max-width: 480px) {
    background: #fff;
    width: 100%;
 }
`

export const SkillData = styled.div`
 color: #000;


 @media screen and (max-width: 768px){
    color: #fff;
 }
`
export const SkillItem = styled.div`
`

export const SkillH2 = styled.h2`
 color: #000;
 text-align: center;
 padding: 1rem;

 @media screen and (max-width: 768px) {
    color: #fff;
 }
`
export const SkillName = styled.h5`
 margin: 0.2rem;
 font-weight: bold;
`

export const SkillRate = styled.span`
 font-size: 1rem;
 animation:
   color-shade .8s ease infinite;

 @keyframes color-shade {
   0% { color: #d8a71f; }
   12% { color: #e1aa11; }
   24% { color: #f0b40d; }
   36% { color: #ffbe0c; }
   48% { color: #fcba03; }
   60% { color: #ffbe0c; }
   72% { color: #f0b40d; }
   84% { color: #e1aa11; }
   100% { color: #d8a71f; }
 }
`

export const SkillUnrate = styled.span`
 color: #8c8b88;
 font-size: 1rem;
`
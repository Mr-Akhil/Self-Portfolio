import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const HeroContainer = styled.div`
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items: center;
 /* padding: 0 30px; */
 height: 100vh;
 min-height: 50vh;
 position: relative;
 z-index: 1;

 :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%,transparent 100%);
    z-index: 2;
 }
`
export const HeroBg = styled.div`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100vh;
 overflow: hidden;
`
export const VideoBg = styled.video`
 width: 100%;
 height: 100vh;
 -o-object-fit: cover;
 object-fit: cover;
 color: #232a34;
`
export const HeroContent = styled.div`
 z-index: 3;
 max-width: 1200px;
 position: absolute;
 padding: 8px 24px;
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const HeroH1 = styled.h1`
 color: #fff;
 font-size: 60px;
 text-align: center;
 transition: 0.2s all ease;
 overflow: hidden; /* Ensures the content is not revealed until the animation */
 border-right: .15em solid white; /*The typwriter cursor*/
 white-space: nowrap; /* Keeps the content on a single line */
 margin: 0 auto; /* Gives that scrolling effect as the typing happens */
 letter-spacing: .15em; /* Adjust as needed */
 animation: 
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;


/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white }
}


 @media screen and (max-width: 768px) {
     font-size: 40px;
     letter-spacing: .10em;
     transition: 0.2s all ease;
 }

 @media screen and (max-width: 480px) {
     font-size: 28px;
     letter-spacing: 0.1em;
     transition: 0.2s all ease;
 }

 @media screen and (max-width: 420px) {
     font-size: 22px;
     letter-spacing: 0.1em;
     transition: 0.2s all ease;
 }
`

export const HeroDown = styled(LinkS)`
 color: #fff;
 z-index: 3;
 position: absolute;
 align-items: center;
 bottom: 25px;
 font-size: 30px;
 pointer-events: auto;
 animation:
  blink .7s infinite;

  @keyframes blink {
  0%   {bottom: 25px;}
  25%  {bottom: 20px;}
  50%  {bottom: 15px;}
  75%  {bottom: 20px;}
  100% {bottom: 25px;}
}

  &:hover {
    color: #fff;
}
`
import styled from 'styled-components'

export const SplashContainer = styled.div`
 width: 100%;
 height: 100vh;
 background: #000;
 justify-content: center;
 z-index: 999;
 transition: 0.5s ease-out;
 position: relative;
`

export const SplashSvg = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 position: absolute;

 &.first {
  animation:
    firstR 3s ease infinite;

  @keyframes firstR {
    0%{ transform: translate(-50%, -50%) rotateZ(0deg) }
    100%{ transform: translate(-50%, -50%) rotateZ(360deg) }
  }
 }

 &.second {
  animation:
    SecondR 5s ease infinite;

  @keyframes SecondR {
    0%{ transform: translate(-50%, -50%) rotateZ(360deg) }
    100%{ transform: translate(-50%, -50%) rotateZ(0deg) }
  }
 }

 &.third {
  animation:
    thirdR 2s ease infinite;

  @keyframes thirdR {
    0%{ transform: translate(-50%, -50%) rotateZ(0deg) }
    100%{ transform: translate(-50%, -50%) rotateZ(360deg) }
  }
 }
`

export const Svg = styled.img`
 height: 50vh;
 width: 50vh;

 @media screen and (max-width: 400px) {
  height: 40vh;
 width: 40vh;
 }
 @media screen and (max-width: 300px) {
  height: 30vh;
  width: 30vh;
 }
 @media screen and (max-width: 250px) {
  height: 20vh;
  width: 20vh;
 }
`
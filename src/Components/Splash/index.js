import React from 'react'
import First from '../../Img/First.png'
import Second from '../../Img/Second.png'
import Third from '../../Img/Third.png'
import Name from '../../Img/Name.png'
import {
  SplashContainer,
  SplashSvg,
  Svg
} from './SplashElements'

const Splash = () => {
  return (
    <>
      <SplashContainer className='splash'>
        <SplashSvg className='first'>
          <Svg src={First} alt='Not Found' />
        </SplashSvg>
        <SplashSvg className='second'>
          <Svg src={Second} alt='Not Found' />
        </SplashSvg>
        <SplashSvg className='third'>
          <Svg src={Third} alt='Not Found' />
        </SplashSvg>
        <SplashSvg>
          <Svg src={Name} alt='Not Found' />
        </SplashSvg>
      </SplashContainer>
    </>
  )
}

export default Splash
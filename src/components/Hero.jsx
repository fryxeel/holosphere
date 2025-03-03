import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeroWithBG = styled.section`
  background: radial-gradient(
    225.05% 145.35% at 7.01% 11.83%,
    #fcdaaf 0%,
    #8c64c5 29%,
    #252d5a 61%,
    #010206 100%
  );

  width: 100%;
  height: 100vh;
`
function Hero({ children }) {
  return (
    <>
      <HeroWithBG>{children}</HeroWithBG>
    </>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Hero

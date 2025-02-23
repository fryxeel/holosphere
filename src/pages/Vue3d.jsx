import React from 'react'
import styled from 'styled-components'
import SnowGlobe from '../components/SnowGlobe'

const MyDiv = styled.div`
  width: 100vw;
  height: 100vh;
`

export default function Vue3d() {
  return (
    <MyDiv>
      <SnowGlobe />
    </MyDiv>
  )
}

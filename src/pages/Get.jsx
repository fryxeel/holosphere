import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import styled from 'styled-components'

const MyH1 = styled.h1`
  font-family: 'Soria', serif;
  font-weight: 400;
  font-size: 80px;
  margin-bottom: 24px;
`

export default function Get() {
  return (
    <Hero>
      <Header />
      <div>
        <MyH1>I want to get the Holosphère</MyH1>
      </div>
    </Hero>
  )
}

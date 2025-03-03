import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Bouton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`

const MyH1 = styled.h1`
  font-family: 'Soria', serif;
  font-weight: 400;
  font-size: 80px;
  margin-bottom: 24px;
`

export default function Home() {
  return (
    <>
      <Hero>
        <Header />
        <div>
          <MyH1>Accueil</MyH1>
          <Bouton to="/vue3d">Page vue 3d</Bouton>
          <Bouton to="/test">Page test POC</Bouton>
        </div>
      </Hero>
    </>
  )
}

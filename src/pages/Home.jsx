import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Bouton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`

export default function Home() {
  return (
    <div>
      <h1>Accueil</h1>
      <Bouton to="/about">Page about</Bouton>
      <Bouton to="/vue3d">Page vue 3d</Bouton>
    </div>
  )
}

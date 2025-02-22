import React from 'react'
import styled from 'styled-components'

const Bouton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`

export default function Home() {
  return (
    <div>
      <h1>Accueil</h1>
      <Bouton>Hey</Bouton>
      <Bouton>3emmeeee</Bouton>
    </div>
  )
}

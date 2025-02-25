import React from 'react'
import styled from 'styled-components'
import '../index.css'
import CtaButton from './CtaButton'
import logoComplet from '../assets/logos/complet.svg'

const CompoHeader = styled.header`
  margin: 8px 44px;
  height: 100px;
`

const MyUl = styled.ul`
  list-style: none;
  width: 100%;
`

const MyLi = styled.li`
  font-family: 'Manrope', sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
`

const MyLiButton = styled.li``

const MyButton = styled.button``

const Header = () => {
  return (
    <CompoHeader className="flex space-between">
      <MyUl className="flex flex-direction-rows align-center space-between">
        <MyLi>
          <img src={logoComplet} alt="Logo d'Holosphère" />
        </MyLi>
        <div
          className="flex flex-direction-rows align-center space-between"
          style={{ gap: '56px' }}
        >
          <MyLi>Holosphère One en détail</MyLi>
          <MyLi>Notre histoire</MyLi>
        </div>
        <MyLiButton>
          <CtaButton href="https://axelfb.fr">Obtenir la vôtre</CtaButton>
        </MyLiButton>
      </MyUl>
    </CompoHeader>
  )
}

export default Header

import React from 'react'
import styled from 'styled-components'
import '../index.css'
import CtaButton from './CtaButton'
import logoComplet from '../assets/logos/complet.svg'
import { Link } from 'react-router-dom'

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

const MyLink = styled(Link)`
  font-family: 'Manrope', sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
`

const Header = () => {
  return (
    <CompoHeader className="flex space-between">
      <MyUl className="flex flex-direction-rows align-center space-between">
        <li>
          <MyLink to="/">
            <img src={logoComplet} alt="Logo d'Holosphère" />
          </MyLink>
        </li>
        <div
          className="flex flex-direction-rows align-center space-between"
          style={{ gap: '56px' }}
        >
          <li>
            <MyLink to="/details">Holosphère One en détail</MyLink>
          </li>
          <li>
            <MyLink to="/story">Notre histoire</MyLink>
          </li>
        </div>
        <li>
          <CtaButton href="/get">Obtenir la vôtre</CtaButton>
        </li>
      </MyUl>
    </CompoHeader>
  )
}

export default Header

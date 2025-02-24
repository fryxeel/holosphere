import React from 'react'
import styled from 'styled-components'
import '../index.css'
import Button from './AButton'
const CompoHeader = styled.header`
margin: 8px 44px;
height: 100px;

`

const MyUl = styled.ul`
list-style: none;
width:100%
`

const MyLi = styled.li`
font-family: "Manrope", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: white;
`

const MyLiButton = styled.li`

`

const MyButton = styled.button`

`

const Header = () => {
  return (
    <CompoHeader className="flex space-between">
        <MyUl className="flex flex-direction-rows align-center space-between">
            <MyLi>
                <img src="/logo-holosphere-test.svg" alt="logo de holosphere" />
            </MyLi>
            <div className="flex flex-direction-rows align-center space-between" style={{gap:"56px"}}>
                <MyLi>
                    Holosphère One en détail
                </MyLi>
                <MyLi>
                    Notre histoire
                </MyLi>
            </div>
            <MyLiButton>
                <Button content="Obtenir la vôtre"/>
            </MyLiButton>           
            
        </MyUl>
    </CompoHeader>
  )
}

export default Header
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MyButton = styled.a`
  display: inline-block;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  background: white;
  position: relative;
  cursor: pointer;
  transition: all 300ms ease-out;
  font-family: 'Manrope', serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid white;
    transition: opacity 300ms ease-out;
  }

  &:hover::before {
    opacity: 0;
  }
`

const Button = ({ content }) => {
  return <MyButton>{content}</MyButton>
}

// Ajout de PropTypes pour la validation des props
Button.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Button

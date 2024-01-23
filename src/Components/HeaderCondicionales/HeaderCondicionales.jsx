// HeaderWithRouting.js
import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header' // Asume que Header es tu componente existente

const HeaderCondicionales = ({ usuarios }) => {
  const location = useLocation()

  if (location.pathname !== '/') {
    const color = '#000'
    return <Header color={color} />
  }

  return <Header /> // Renderiza Header en otras rutas
}

export default HeaderCondicionales

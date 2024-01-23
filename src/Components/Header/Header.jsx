import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LogoImg from '../../Assets/minilogo.png'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 2px;
  align-items: center;
  height: 60px;
`

const P = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
`

const Logo = styled.div`
  background-image: url(${LogoImg});
  background-size: cover;
  background-position: center;
  width: 140px;
  height: 60px;
`

const Header = ({ color }) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)

    return function cleanup() {
      clearInterval(timerID)
    }
  }, [])

  function tick() {
    setTime(new Date())
  }

  return (
    <Container>
      <div
        style={{
          maxWidth: '120px',
          minWidth: '85px',

          padding: '.25rem 1rem',
          borderRadius: '5px',
          textAlign: 'center'
        }}
      >
        <P style={{ color: color }}>MENU</P>
      </div>
      <div>
        <Logo />
      </div>
      <div
        style={{
          maxWidth: '120px',
          minWidth: '85px',
          padding: '.25rem 1rem',
          borderRadius: '5px',
          textAlign: 'center'
        }}
      >
        <P style={{ color: color }}>{time.toLocaleTimeString()}</P>
      </div>
    </Container>
  )
}

export default Header

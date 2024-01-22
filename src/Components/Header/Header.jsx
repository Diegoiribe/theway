import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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

const H1 = styled.h1`
  font-size: 3.5rem;
  font-family: 'Harlow Solid Italic', sans-serif;
  padding: 0rem 0.5rem;
  font-weight: 200;
`

const Header = () => {
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
      <div>
        <P>MENU</P>
      </div>
      <div>
        <H1>w</H1>
      </div>
      <div
        style={{
          border: '1px solid #000',
          padding: '.25rem 1rem',
          borderRadius: '5px'
        }}
      >
        <P>{time.toLocaleTimeString()}</P>
      </div>
    </Container>
  )
}

export default Header

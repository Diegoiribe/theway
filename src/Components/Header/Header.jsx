import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = () => {
  return (
    <Container>
      <div>
        <p>MENU</p>
      </div>
      <div>img</div>
      <div>Tiempo</div>
    </Container>
  )
}

export default Header

import React from 'react'
import styled from 'styled-components'
import Launchpad from '../Components/Launchpad/Launchpad'

const Container = styled.div`
  width: 60%;
  height: 75vh;
  margin: 12.25vh 20%;
  padding: 1rem;
  @media (max-width: 980px) {
    width: 95%;
    margin: 2.5vh 2.5%;
    height: auto;
  }
`

const PageLaunchpad = ({ state, ActualizarItems }) => {
  return (
    <Container>
      <Launchpad state={state} ActualizarItems={ActualizarItems} />
    </Container>
  )
}

export default PageLaunchpad

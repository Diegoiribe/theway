import React from 'react'
import styled from 'styled-components'
import Launchpad from '../Components/Launchpad/Launchpad'

const Container = styled.div`
  width: 60%;
  height: 75vh;
  margin: 12.25vh 20%;
  padding: 1rem;
`

const PageLaunchpad = ({ state, ActualizarItems }) => {
  return (
    <Container>
      <Launchpad state={state} ActualizarItems={ActualizarItems} />
    </Container>
  )
}

export default PageLaunchpad

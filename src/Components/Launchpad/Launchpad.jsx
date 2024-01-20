import React from 'react'
import styled from 'styled-components'
import Body from './Body/Body'
import Main from './Main/Main'

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 11px 0px;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
`

const DivBody = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
const DivMain = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const Launchpad = ({ state, ActualizarItems }) => {
  return (
    <Container>
      <DivBody>
        <Body state={state} ActualizarItems={ActualizarItems} />
      </DivBody>

      <DivMain>
        <Main />
      </DivMain>
    </Container>
  )
}

export default Launchpad

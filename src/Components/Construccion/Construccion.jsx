import React from 'react'
import Body from './Body/Body'
import styled from 'styled-components'

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15rem;
`

const Construccion = () => {
  return (
    <Div>
      <Body />
    </Div>
  )
}

export default Construccion

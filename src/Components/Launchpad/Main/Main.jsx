import React, { useState } from 'react'
import styled from 'styled-components'
import lado from '../../../Assets/lado.jpeg'
import frente from '../../../Assets/frente.jpeg'
import gorra from '../../../Assets/gorra.jpeg'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  @media (max-width: 980px) {
    height: auto;
    width: 100%;
    padding: 1rem;
  }
`
const Img = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 11px 0px;
  border-radius: 10px;
  @media (max-width: 980px) {
    height: 40vh;
    width: 100%;
  }
`

const Main = () => {
  const [img, setImg] = React.useState(0)

  const handleImg = () => {
    setImg((prevImg) => (prevImg + 1) % 3)
  }

  const getBackgroundImage = () => {
    switch (img) {
      case 0:
        return frente
      case 1:
        return lado
      case 2:
        return gorra
      default:
        return frente
    }
  }
  return (
    <Container>
      <Img
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center ',
          backgroundRepeat: 'no-repeat'
        }}
        onClick={() => handleImg()}
      ></Img>
    </Container>
  )
}

export default Main

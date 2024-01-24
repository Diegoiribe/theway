import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 1400px) {
    gap: 1rem;
  }
  @media (max-width: 980px) {
    gap: 1rem;
    height: auto;
    width: 100%;
    flex-direction: column-reverse;
  }
`

const Barra = styled.div`
  width: 100%;
  height: 0.75rem;
  background: #8e6fcd;
  border-radius: 5px;
  border: 1px solid #8e6fcd;
`
const BarraColor = styled.div`
  height: 100%;
  background: #bcbdbb;
  border-radius: 5px;
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  p {
    font-size: 0.75rem;
  }
`
const Descripcion = styled.p`
  font-size: 0.85rem;
`
const Iconos = styled.div`
  display: flex;
  gap: 0.5rem;
  a {
    text-decoration: none;
    height: 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
`

const Seleccion = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #8e6fcd;
  border-radius: 5px;
  padding: 0.5rem;
  align-items: center;
`

const Stitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SBtn = styled.div`
  padding: 0.5rem;
  background: #8e6fcd;
  border-radius: 5px;
`

const Informacion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.75rem;
    font-weight: bold;
  }
`
const Btn = styled.div`
  width: 100%;
  height: 3.5rem;
  background: #8e6fcd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 1.15rem;
    color: #fff;
    font-weight: 300;
  }
`
const Label = styled.div`
  background: #8e6fcd;
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  align-items: center;

  label {
    font-size: 0.75rem;
    color: #fff;
  }
`

const Div = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  @media (max-width: 980px) {
    margin-top: 2rem;
    gap: 1rem;
  }
`

const H1 = styled.h1`
  color: #bcbdbb;
  @media (max-width: 980px) {
    font-size: 1.5rem;
  }
`

const Body = ({ state, ActualizarItems }) => {
  return (
    <>
      {state.map((item, index) => (
        <Container key={index}>
          <Div>
            <H1>The way</H1>

            <div>
              <Title>
                <p style={{ color: '#bcbdbb' }}>TOTAL MINTED</p>
                <p style={{ fontWeight: 'bold', color: '#bcbdbb' }}>
                  {item.vendidos}/100
                </p>
              </Title>

              <Barra>
                <BarraColor style={{ width: `${item.vendidos}%` }}></BarraColor>
              </Barra>
            </div>

            <Descripcion style={{ color: '#bcbdbb' }}>
              Sei pepes is here to create memable experience for you on sei
              blockchain, mint y have fun
            </Descripcion>
            <Iconos>
              <a
                href="https://www.facebook.com/onmyfeetmx"
                style={{ color: '#0866ff' }}
              >
                <FacebookIcon fontSize="medium" />
              </a>
              <a
                href="https://www.instagram.com/theway.universe/"
                style={{
                  background:
                    'linear-gradient(to bottom , #cf09d9, #fd044d, #fdcb00)',
                  color: 'white'
                }}
              >
                <InstagramIcon fontSize="small" />
              </a>
              <a href="#" style={{ color: '#000' }}>
                <XIcon fontSize="small" />
              </a>
            </Iconos>

            <Seleccion>
              <Stitle>
                <p style={{ fontWeight: 'bold', color: '#bcbdbb' }}>
                  whitelist
                </p>
                <p style={{ fontSize: '.85rem', color: '#bcbdbb' }}>
                  1 per wallet
                </p>
              </Stitle>
              <SBtn>
                <p
                  style={{
                    fontSize: '.75rem',
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  Ended
                </p>
              </SBtn>
            </Seleccion>
          </Div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <Informacion>
              <p style={{ color: '#bcbdbb' }}>Precio: $35 USD</p>
              <Label>
                <input style={{ marginRight: '5px' }} type="checkbox" />
                <label>Participar por chase</label>
              </Label>
            </Informacion>
            <Btn onClick={() => ActualizarItems(item.id)}>
              <p>Ordenar</p>
            </Btn>
          </div>
        </Container>
      ))}
    </>
  )
}

export default Body

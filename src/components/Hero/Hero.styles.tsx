import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  max-height: 450px;
  min-height: 250px;
  object-position: right;
`

const Box = styled.div`
  display: block;
  position: relative;
`

const BoxContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 2rem 6rem;
  text-shadow: 1px 1px 2px #00000048;
  color: #fff;
  font-size: 2.4rem;
  @media (max-width: 500px) {
    font-size: 1.5rem;
    text-align: center;
    padding: 1rem 0;
  }
  h2 {
    width: 100%;
    margin: 0;
  }
`

export { Image, Box, BoxContent }

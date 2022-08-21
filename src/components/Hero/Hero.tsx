import styled from 'styled-components'

export const Hero = () => {
  return (
    <Box>
      <Image src='header.png' alt='random' />
      <BoxContent>
        <h2>Electronics</h2>
      </BoxContent>
    </Box>
  )
}

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
  padding: 1rem 2rem;
  text-shadow: 1px 1px 2px #00000048;
  color: #fff;
  font-size: 2rem;
  @media (max-width: 500px) {
    font-size: 1.5rem;
    text-align: center;
  }
  h2 {
    width: 100%;
    margin: 0;
  }
`

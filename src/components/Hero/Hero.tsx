import { Box, BoxContent, Image } from './Hero.styles'

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

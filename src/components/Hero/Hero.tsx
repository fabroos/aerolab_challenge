import React from 'react'
import { Box, BoxContent, Image } from './Hero.styles'

type Props = {
  children: React.ReactNode
  image: string
  alt: string
}

export const Hero: React.FC<Props> = ({ children, image, alt }) => {
  return (
    <Box>
      <Image src={image} alt={alt} />
      <BoxContent>
        <h2>{children}</h2>
      </BoxContent>
    </Box>
  )
}

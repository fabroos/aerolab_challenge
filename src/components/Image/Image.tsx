import { FC } from 'react'
import styled from 'styled-components'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallbackSrc?: string
}

export const Image: FC<Props> = ({ src, alt, fallbackSrc }) => {
  function onError (e: React.SyntheticEvent<HTMLImageElement>) {
    e.currentTarget.src = fallbackSrc || ''
  }
  function onLoad (e: React.SyntheticEvent<HTMLImageElement>) {
    e.currentTarget.style.opacity = '1'
  }
  return <Img src={src} alt={alt} onLoad={onLoad} onError={onError} />
}

const Img = styled.img`
  opacity: 0;
  transition: opacity 0.11s ease-in-out;
`

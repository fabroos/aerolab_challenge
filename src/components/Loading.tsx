import styled from 'styled-components'

type Props = {
  size?: number
  color?: string
  secondaryColor?: string
}

export const Loading = styled.div<Props>`
  width: ${props => props.size || '50px'};
  height: ${props => props.size || '50px'};
  border: 4px solid ${props => props.color || 'rgba(0, 0, 0, 0.1)'};
  border-top: 4px solid ${props => props.secondaryColor || 'transparent'};
  border-radius: 9999999px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

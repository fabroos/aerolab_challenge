import styled from 'styled-components'
type Props = {
  colorBg?: string
  size?: number
  hoverBg?: string
}
export const Button = styled.button<Props>`
  background-color: ${({ theme }) => theme.colors['light-gray']};
  border: none;
  color: ${({ theme }) => theme.colors['dark-gray']};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.14s ease-in-out;
  &:hover {
    color: ${({ theme, colorBg }) => colorBg || theme.colors['light-gray']};
    background-color: ${({ theme, hoverBg }) =>
      theme.colors[hoverBg || 'light-blue']};
  }
`

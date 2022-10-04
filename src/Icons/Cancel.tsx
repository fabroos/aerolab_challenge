import { SVGProps } from 'react'

const Cancel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fill='#FFAAAA'
      d='M25 2C12.31 2 2 12.31 2 25s10.31 23 23 23 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm7.99 11.986a1 1 0 0 0-.697.307L25 23.586l-7.293-7.293a1 1 0 0 0-.717-.303 1 1 0 0 0-.697 1.717L23.586 25l-7.293 7.293a1 1 0 1 0 1.414 1.414L25 26.414l7.293 7.293a1 1 0 1 0 1.414-1.414L26.414 25l7.293-7.293a1 1 0 0 0-.717-1.72z'
    />
  </svg>
)

export default Cancel

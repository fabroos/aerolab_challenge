import { FC, PropsWithChildren, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface Props extends PropsWithChildren<any> {
  isOpen: boolean
  onClose: () => void
  icon?: JSX.Element | null
}

export const Modal: FC<Props> = ({
  children,
  onClose,
  isOpen,
  icon,
  error
}) => {
  function handleClose (e: any) {
    e.stopPropagation()
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return isOpen
    ? createPortal(
        <ModalCont onClick={e => handleClose(e)} error={error}>
          <div>
            {icon}
            {children}
          </div>
        </ModalCont>,
        document.querySelector('#modal')!
      )
    : null
}

const ModalCont = styled.div<{ error?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
    color: ${({ error }) => (error ? '#fe7c6e' : '#5ac319')};
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
    max-width: 30rem;
  }
`

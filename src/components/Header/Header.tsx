import { useUserContext } from '@/context/userContext'
import { Coin, Logo } from '@/Icons'
import { Container } from '@/styles/Layout'
import React, { useState } from 'react'
import styled from 'styled-components'
import { AddCoins } from '../AddCoins/AddCoins'
import { Modal } from '../Modal/Modal'
import { HeaderWrapper, UserArticle, UserCoins } from './Header.styles'

export const Header: React.FC = () => {
  const {
    user: { response: user }
  } = useUserContext()
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(isOpen => !isOpen)
  const close = () => setOpen(false)
  console.log(user?.redeemHistory)
  return (
    <Container>
      <HeaderWrapper>
        <Logo onClick={toggle} />
        {user && (
          <UserArticle>
            <p>{user?.name}</p>
            <UserCoins>
              <span>{user?.points}</span>
              <Coin />
            </UserCoins>
            <AddCoins />
          </UserArticle>
        )}
      </HeaderWrapper>
      <Modal icon={<Coin />} isOpen={isOpen} onClose={close}>
        <h2>History</h2>
        <History>
          {user?.redeemHistory
            .slice(
              0,
              user.redeemHistory.length > 10 ? 10 : user.redeemHistory.length
            )
            .map((item, index) => (
              <ItemHistory key={index}>
                <p>{item.name}</p>
                <span>
                  {item.cost}
                  <Coin />
                </span>
              </ItemHistory>
            ))}
        </History>
      </Modal>
    </Container>
  )
}

const ItemHistory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #aaa;
    svg {
      width: 1.5rem;
      margin: 0;
    }
  }
`

const History = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 50vh;
  overflow-y: auto;
`

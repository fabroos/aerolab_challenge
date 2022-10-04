import { useUserContext } from '@/context/userContext'
import { Coin, Logo } from '@/Icons'
import { Container } from '@/styles/Layout'
import React from 'react'
import { AddCoins } from '../AddCoins/AddCoins'
import { HeaderWrapper, UserArticle, UserCoins } from './Header.styles'

export const Header: React.FC = () => {
  const {
    user: { response: user },
    chargePoints
  } = useUserContext()

  return (
    <Container>
      <HeaderWrapper>
        <Logo />
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
    </Container>
  )
}

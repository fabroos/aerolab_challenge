import { useUserContext } from '@/context/userContext'
import { Coin, Logo } from '@/Icons'
import { Container } from '@/styles/Layout'
import React from 'react'
import { HeaderWrapper, UserArticle, UserCoins } from './Header.styles'

export const Header: React.FC = () => {
  const {
    user: { response: user }
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
          </UserArticle>
        )}
      </HeaderWrapper>
    </Container>
  )
}

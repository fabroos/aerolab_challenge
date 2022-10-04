import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`

const UserArticle = styled.article`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors['dark-gray']};
  gap: 1rem;
  p {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors['dark-gray']};
    cursor: pointer;
    &:hover {
      text-decoration-color: ${({ theme }) => theme.colors['light-blue']};
      color: ${({ theme }) => theme.colors['light-blue']};
    }
  }
`

const UserCoins = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors['light-gray']};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
`

export { HeaderWrapper, UserArticle, UserCoins }

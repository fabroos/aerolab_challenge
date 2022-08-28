import { useClientWidth } from '@/hooks/useClientWidth'
import { memo } from 'react'
import styled from 'styled-components'

const Sort = () => {
  const clientWidth = useClientWidth()

  if (clientWidth < 768)
    return (
      <Select>
        <option>Most Recent</option>
        <option>Highest price</option>
        <option>Lowest price</option>
      </Select>
    )
  return (
    <HStack>
      <p>sort by</p>
      <SortList>
        <li>
          <button>Most Recent</button>
        </li>
        <li>
          <button>Highest price</button>
        </li>
        <li>
          <button>Lowest price</button>
        </li>
      </SortList>
    </HStack>
  )
}

const SortList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  li {
    button {
      background-color: ${({ theme }) => theme.colors['light-gray']};
      border: none;
      color: ${({ theme }) => theme.colors['dark-gray']};
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      cursor: pointer;
      transition: all 0.14s ease-in-out;
      &:hover {
        color: #fff;
        background-color: ${({ theme }) => theme.colors['light-blue']};
      }
    }
  }
`

const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Select = styled.select`
  background-color: ${({ theme }) => theme.colors['light-gray']};
  border: none;
  color: ${({ theme }) => theme.colors['dark-gray']};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.14s ease-in-out;
  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors['light-blue']};
  }
`

export const SortBy = memo(Sort)

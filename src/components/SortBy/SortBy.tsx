import { useClientWidth } from '@/hooks/useClientWidth'
import { SortOptions } from '@/models/SortOptions'
import { memo } from 'react'
import styled from 'styled-components'

type Props = {
  setSort: (sort: SortOptions) => void
  selected: SortOptions
}

const Sort = ({ setSort, selected }: Props) => {
  const clientWidth = useClientWidth()
  if (clientWidth < 768)
    return (
      <Select onChange={e => setSort(e.target.value as SortOptions)}>
        <option value={SortOptions.NEWEST}>Most Recent</option>
        <option value={SortOptions.HIGH_PRICE}>Highest price</option>
        <option value={SortOptions.LOW_PRICE}>Lowest price</option>
      </Select>
    )
  return (
    <HStack>
      <p>sort by</p>
      <SortList>
        <li>
          <Button
            selected={selected === SortOptions.NEWEST}
            onClick={() => setSort(SortOptions.NEWEST)}
          >
            Most Recent
          </Button>
        </li>
        <li>
          <Button
            selected={selected === SortOptions.HIGH_PRICE}
            onClick={() => setSort(SortOptions.HIGH_PRICE)}
          >
            Highest price
          </Button>
        </li>
        <li>
          <Button
            selected={selected === SortOptions.LOW_PRICE}
            onClick={() => setSort(SortOptions.LOW_PRICE)}
          >
            Lowest price
          </Button>
        </li>
      </SortList>
    </HStack>
  )
}

const SortList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`

const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    color: ${({ theme }) => theme.colors['dark-gray']};
    padding: 1rem 1rem 1rem 0rem;
    border-right: 1px solid ${({ theme }) => theme.colors['light-gray']};
  }
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

const Button = styled.button<{ selected: boolean }>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors['light-blue'] : theme.colors['light-gray']};
  border: none;
  color: ${({ theme, selected }) => (selected ? '#fff' : theme.colors['dark'])};
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

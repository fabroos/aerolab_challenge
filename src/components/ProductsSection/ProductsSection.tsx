import { usePagination } from '@/hooks/usePagination'
import { useProducts } from '@/hooks/useProducts'
import { Product } from '@/models'
import { Container } from '@/styles/Layout'
import styled from 'styled-components'
import { ProductList } from '../ProductList/ProductList'
import { SortBy } from '../SortBy/SortBy'

export const ProductsSection = () => {
  const { products, setSort, sort } = useProducts()
  const {
    itemsToShow,
    nextPage,
    total,
    canNext,
    maxPage,
    page,
    prevPage
  } = usePagination<Product>(products)
  console.log(itemsToShow, total, canNext, maxPage)
  return (
    <Container>
      <Flex>
        <p>16 of 32 Products</p>
        <SortBy setSort={setSort} selected={sort} />
        <ActionBtns>
          <Button active={page > 1} onClick={prevPage}>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.9481 14.8285L10.5339 16.2427L6.29122 12L10.5339 7.7574L11.9481 9.17161L10.1196 11H17.6568V13H10.1196L11.9481 14.8285Z'
                fill='currentColor'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M4.22183 19.7782C-0.0739419 15.4824 -0.0739419 8.51759 4.22183 4.22183C8.51759 -0.0739419 15.4824 -0.0739419 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782ZM5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364Z'
                fill='currentColor'
              />
            </svg>
          </Button>
          <Button active={canNext} onClick={nextPage}>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z'
                fill='currentColor'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z'
                fill='currentColor'
              />
            </svg>
          </Button>
        </ActionBtns>
      </Flex>
      <div>
        <ProductList products={itemsToShow} />
      </div>
    </Container>
  )
}

const Button = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  margin: 0;
  padding: 0;
  width: 42px;
  height: 42px;
  color: ${({ theme, active }) =>
    active ? theme.colors['dark-gray'] : '#ccc'};
  svg {
    width: 100%;
    height: 100%;
  }
`

const Flex = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const ActionBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 568px) {
    margin-top: 1rem;
    margin-left: auto;
  }
`

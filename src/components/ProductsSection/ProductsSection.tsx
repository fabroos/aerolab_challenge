import { usePagination } from '@/hooks/usePagination'
import { useProducts } from '@/hooks/useProducts'
import { Product } from '@/models'
import { Container } from '@/styles/Layout'
import { SortBy } from '../SortBy/SortBy'

export const ProductsSection = () => {
  const { products } = useProducts()
  const { itemsToShow, nextPage, total, canNext, maxPage } = usePagination<
    Product
  >(products)
  console.log(itemsToShow, total, canNext, maxPage)
  return (
    <Container>
      <div>
        <p>16 of 32 Products</p>
        <SortBy />
        <button onClick={nextPage}>next</button>
      </div>
      <div>
        {itemsToShow.map(product => (
          <div key={product._id}>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

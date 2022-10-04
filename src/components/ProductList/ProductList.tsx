import { Product } from '@/models'
import { FC } from 'react'
import styled from 'styled-components'
import { ProductCard } from '../ProductCard/ProductCard'

type Props = {
  products: Product[]
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <List>
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </List>
  )
}

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  padding: 2rem 0.5rem;
`

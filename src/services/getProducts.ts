import { Product } from '@/models'
import headers from './headers'

export const getProducts = (): Promise<Product[]> => {
  return fetch('https://coding-challenge-api.aerolab.co/products', {
    headers
  })
    .then(res => res.json())
    .then(data => data)
}

export default getProducts

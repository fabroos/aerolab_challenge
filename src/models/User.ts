import { Product } from './Product'

export type User = {
  id: string
  name: string
  points: number
  reedemHistory: Array<Product>
  createdDate: string
}

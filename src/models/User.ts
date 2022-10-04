import { Product } from './Product'

export type User = {
  id: string
  name: string
  points: number
  redeemHistory: Array<Product>
  createdDate: string
}

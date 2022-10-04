import { Product } from '../models'
import headers from './headers'

export const postReedem = (id: Product['_id']) => {
  return fetch('https://coding-challenge-api.aerolab.co/redeem', {
    method: 'POST',
    headers,
    body: JSON.stringify({ productId: id })
  })
    .then(res => res.json())
    .catch(err => {
      throw 'error redeeming product'
    })
}

export default postReedem

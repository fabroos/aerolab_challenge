import headers from './headers'

export const getProducts = () => {
  return fetch('https://coding-challenge-api.aerolab.co/products', {
    headers
  })
    .then(res => res.json())
    .then(data => data)
}

export default getProducts

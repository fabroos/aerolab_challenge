import headers from './headers'

export const getProducts = () => {
  return fetch(import.meta.env.VITE_API_URL + '/products', {
    headers
  })
    .then(res => res.json())
    .then(data => data)
}

export default getProducts

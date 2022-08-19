import headers from './headers'

export const getProducts = () => {
  return fetch(import.meta.env.VITE_API_URL + '/products', {
    method: 'GET',
    headers
  })
    .then(res => res.json())
    .then(data => data)
}

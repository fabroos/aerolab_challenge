import headers from './headers'

export const getUser = () => {
  return fetch('https://coding-challenge-api.aerolab.co/user/me', {
    headers
  }).then(res => res.json())
}

export default getUser

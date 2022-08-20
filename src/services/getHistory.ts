import headers from './headers'

export const getHistory = () => {
  return fetch('https://coding-challenge-api.aerolab.co/user/history', {
    headers
  }).then(res => res.json())
}

export default getHistory

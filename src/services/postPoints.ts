import headers from './headers'

export const postPoints = (amount: number) => {
  return fetch('https://coding-challenge-api.aerolab.co/user/points', {
    method: 'POST',
    headers,
    body: JSON.stringify({ amount })
  }).then(res => res.json())
}

export default postPoints

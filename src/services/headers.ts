const auth = import.meta.env.VITE_API_KEY

export default {
  // Options
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: 'Bearer ' + auth
}

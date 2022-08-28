import { ThemeProvider } from 'styled-components'
import { Header, Hero } from './components'
import { ProductsSection } from './components/ProductsSection/ProductsSection'
import { useUserContext } from './context/userContext'
import Global from './styles/Global'
import { theme } from './theme'

function App () {
  const {
    user: { loading, error }
  } = useUserContext()
  // if theres an error, show the error ⚠️
  if (error) return <p>Something went wrong</p>
  // Loading 🔋
  if (loading) return <p>Loading...</p>
  // if theres no error and the user is loaded, show the app 🚀
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
      <Hero image='header.png' alt='light blue headphones'>
        Electronics
      </Hero>
      <ProductsSection />
    </ThemeProvider>
  )
}

export default App

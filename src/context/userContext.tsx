import { Product, User } from '@/models'
import { getUser, postPoints, postReedem } from '@/services'
import { createContext, useContext, useEffect, useState } from 'react'

type USerContextType = {
  user: {
    response: User | null
    loading: boolean
    error: Error | null
  }
  reedemProduct: (product: Product) => Promise<void>
  chargePoints: (points: number) => Promise<void>
}

const userContext = createContext({} as USerContextType)

const useUserContext = () => useContext(userContext)

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<USerContextType['user']>({
    response: null,
    loading: true,
    error: null
  })

  useEffect(() => {
    getUser()
      .then(user => {
        // if the response is successful, set the user ✅
        setUser({
          loading: false,
          error: null,
          response: user
        })
      })
      .catch(error => {
        // if the response is unsuccessful, set the error ❌
        setUser({
          loading: false,
          error,
          response: null
        })
      })
  }, [])

  function reedemProduct (product: Product) {
    return postReedem(product._id).then(res => {
      // if the response is successful, set the user ✅
      setUser(prev => ({
        loading: false,
        error: null,
        response: {
          ...prev.response!,
          points: prev.response!.points - product.cost,
          redeemHistory: [...prev.response!.redeemHistory, product]
        }
      }))
    })
  }

  function chargePoints (points: number) {
    return postPoints(points).then(res => {
      // if the response is successful, set the user ✅
      setUser(prev => ({
        loading: false,
        error: null,
        response: {
          ...prev.response!,
          points: prev.response!.points + points
        }
      }))
    })
  }

  return (
    <userContext.Provider value={{ user, reedemProduct, chargePoints }}>
      {children}
    </userContext.Provider>
  )
}

export { userContext, UserProvider, useUserContext }

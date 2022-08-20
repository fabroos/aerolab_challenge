import { User } from '@/models'
import { getUser } from '@/services'
import { createContext, useContext, useEffect, useState } from 'react'

type USerContextType = {
  user: {
    response: User | null
    loading: boolean
    error: Error | null
  }
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

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  )
}

export { userContext, UserProvider, useUserContext }

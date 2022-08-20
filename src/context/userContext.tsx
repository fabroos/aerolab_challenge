import { User } from '@/models'
import { getUser } from '@/services'
import { createContext, useContext, useEffect, useState } from 'react'

type USerContextType = {
  user: User | null
}

const userContext = createContext({} as USerContextType)

const useUserContext = () => useContext(userContext)

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    getUser().then(user => {
      setUser(user)
    })
  }, [])

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  )
}

export { userContext, UserProvider, useUserContext }

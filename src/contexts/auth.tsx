import { getLocal, getLocalUser } from "@/services/local-storage"
import { User } from "@/types/user"
import { createContext, useContext, useEffect, useState } from "react"

interface AuthContextProps {
  user: User | undefined
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)


interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    async function getUser() {
      const u = await getLocalUser().then(u => u)
      if (u) {
        setUser(u)
      }
    }
    getUser()
  }, [user])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be inside a AuthProvider')
  }
  return ctx
}
'use client'

import Loader from '@/components/toolkit/Config/Loader'
import type { UserContextProps, UserProps } from '@/types'
import { checkIsPublicRoute } from '@/utils/auth/check-route'
import { generateHashPassword } from '@/utils/auth/generateHashPassword'
import { generateRandomName } from '@/utils/functions/getRrandomName'
import { usePathname, useRouter } from 'next/navigation'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { CookiesDataProps } from './types'

const UserContext = createContext<UserContextProps | any>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname()
  const isPublic = checkIsPublicRoute(path)
  const router = useRouter()

  const [cookiesData, setCookiesData] = useState<any>([])
  const [userData, setUserData] = useState<UserProps | any>()

 const getSessionInfo = useCallback(async () => {
   try {
     const response = await fetch('/api/getCookies')
     const data = await response.json()
     setCookiesData(data)
   } catch (error) {
     console.error(
       'Não foi possível obter os dados da sessão do usuário:',
       error
     )
   }
 }, [])

  const createUser = useCallback(
    async (cookiesData: CookiesDataProps) => {
      try {
        const response = await fetch(
          'https://backend-repository.onrender.com/users/',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              uuid: cookiesData.id,
              firstname: cookiesData.firstName,
              lastname: cookiesData.lastName,
              picture: cookiesData.imageUrl,
              email: cookiesData.emailAddresses[0].emailAddress,
              password: await generateHashPassword('passwordGenerico'),
              username: await generateRandomName({
                firstName: cookiesData.firstName,
                lastName: cookiesData.lastName
              }),
              followers: 0,
              following: 0
            })
          }
        )
        if (response.ok) {
          const data = await response.json()
          setUserData(data)
          router.push('/home')
        } else {
          throw new Error('Houve um erro durante a criação do usuário')
        }
      } catch (error) {
        console.error('Erro ao criar usuário:', error)
      }
    },
    [router]
  )

     const getUserInfo = useCallback(async () => {
       if (!cookiesData) return

       try {
         const response = await fetch(
           `https://backend-repository.onrender.com/users/${cookiesData.id}`,
           { method: 'GET' }
         )
         const data = await response.json()
         if (data) {
           setUserData(data)
           if (data.newUser) {
             router.push('/finish-profile')
           }
         } else {
           await createUser(cookiesData)
         }
       } catch (error) {
         await createUser(cookiesData)
       }
     }, [cookiesData, createUser, router])

  const checkIsNewUser = async () => {
    if (userData) {
      if (userData.newUser) {
        router.push('/finish-profile')
      } else {
        return
      }
    } else {
      return
    }
  }

  const getSession = async () => {
    await getSessionInfo()
  }

  const getInfo = async () => {
    await getUserInfo()
  }

  useEffect(() => {
    getSession()
  }, [])

  useEffect(() => {
    getInfo()
  }, [cookiesData])

  return isPublic || cookiesData ? (
    <UserContext.Provider
      value={{ cookiesData, getSessionInfo, userData, getUserInfo }}
    >
      {userData ? children : <Loader />}
    </UserContext.Provider>
  ) : (
    <Loader />
  )
}

export const getUser = () => useContext(UserContext)

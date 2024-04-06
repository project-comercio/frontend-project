"use client"

import Loader from "@/components/Config/Loader";
import type { UserProps } from "@/types";
import { checkIsPublicRoute } from "@/utils/auth/check-route";
import { generateRandomName } from "@/utils/functions/getRrandomName";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const UserContext = createContext<any>(undefined);

export const UserProvider = ({children} : {children: React.ReactNode}) => {

  const path = usePathname();
  const isPublic = checkIsPublicRoute(path);

  const router = useRouter();

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [cookiesData, setCookiesData] = useState<any>([]);
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [userData, setUserData] = useState<UserProps | any>();

  const getSessionInfo = async () => {
    try { 
      const requisition = await fetch("/api/getCookies")
      const response = await requisition.json()
      setCookiesData(response)
      console.log(response)
    } catch (error) {
      throw new Error("Não foi possível obter os dados da sessão do usuário!")
    }
  }

  const getUserInfo = async () => {
    try {
      await fetch("http://localhost:8080/users/", {
        method: "GET"
      }).then(async (requisition) => {
        const response = await requisition.json()
        console.log(response)
        if (response) {
          setUserData(response)
        } else {
          await createUser()
        }
      }).catch(async (error) => {
        await createUser()
      })
    } catch (error) {
      throw new Error("Não foi possível encontrar o usuário")
    }
  }

  const createUser = async () => {
    try {
      console.log(cookiesData)
      const response = await fetch("http://localhost:8080/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uuid: cookiesData.id,
          firstname: cookiesData.firstName,
          lastname: cookiesData.lastName,
          image: cookiesData.imageUrl,
          email: cookiesData.emailAddresses[0].emailAddress,
          username: await generateRandomName({
            firstName: cookiesData.firstName,
            lastName: cookiesData.lastName
          }),
          followers: 0,
          following: 0
        })
      })
      if (response.ok) {
        setUserData(response)
        router.push("/home")
      } else {
        throw new Error("Houve um erro durante a criação do usuário")
      }
    } catch (error) {
      throw new Error("Não foi possível criar um novo usuário")
    }
  }

  const redirectUser = async () => {
    if (userData.id !== undefined) {
      if (path === "/") {
        router.push("/home")
      } else {
        return
      }
    } else {
      router.push("/")
    }
  }

  const getSession = async () => {
    await getSessionInfo()
  }

  const getInfo = async () => {
    await getUserInfo()
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getSession()
  }, [])

  // useEffect(() => {
  //   getInfo()
  // }, [cookiesData])

  // useEffect(() => {
  //   redirectUser()
  // }, [userData])

  return isPublic || cookiesData.id ? (
    <UserContext.Provider value={{cookiesData, getSessionInfo}}>
      {children}
    </UserContext.Provider>
  ) : <Loader />
}

export const getUser = () => useContext(UserContext)
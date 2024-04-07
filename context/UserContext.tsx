"use client"

import Loader from "@/components/Config/Loader";
import type { UserContextProps, UserProps } from "@/types";
import { checkIsPublicRoute } from "@/utils/auth/check-route";
import { generateHashPassword } from "@/utils/auth/generateHashPassword";
import { generateRandomName } from "@/utils/functions/getRrandomName";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<UserContextProps | any>(undefined);

export const UserProvider = ({children} : {children: React.ReactNode}) => {

  const path = usePathname();
  const isPublic = checkIsPublicRoute(path);

  const router = useRouter();

  const [cookiesData, setCookiesData] = useState<any>([]);
  const [userData, setUserData] = useState<UserProps | any>();

  const getSessionInfo = async () => {
    try { 
      const requisition = await fetch("/api/getCookies")
      const response = await requisition.json()
      setCookiesData(response)
    } catch (error) {
      throw new Error("Não foi possível obter os dados da sessão do usuário!")
    }
  }

  const getUserInfo = async () => {
    try {
      const requisiton = await fetch(`http://localhost:8080/users/${cookiesData.id}`, {
        method: "GET"
      })
      const response = await requisiton.json()
      if (response) {
        setUserData(response)
      } else {
        await createUser()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const createUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uuid: cookiesData.id,
          firstname: cookiesData.firstName,
          lastname: cookiesData.lastName,
          picture: cookiesData.imageUrl,
          email: cookiesData.emailAddresses[0].emailAddress,
          password: await generateHashPassword("passwordGenerico"),
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
    if (userData[0]) {
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

  useEffect(() => {
    getSession()
  }, [])

  useEffect(() => {
    getInfo()
  }, [cookiesData])

  // useEffect(() => {
  //   redirectUser()
  // }, [userData])

  return isPublic || cookiesData.id ? (
    <UserContext.Provider value={{cookiesData, getSessionInfo, userData, getUserInfo}}>
      {children}
    </UserContext.Provider>
  ) : <Loader />
}

export const getUser = () => useContext(UserContext)
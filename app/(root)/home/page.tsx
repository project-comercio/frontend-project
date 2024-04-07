import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Feed from './sections/Feed'
import { getUser } from '@/context/UserContext'
import { getMetaData } from '@/utils/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: "Feed de Postagens",
    description: "Descrição do feed de postagens",
    image: ""
  })
}

const page = () => {
  return (
    <>
      <Navbar variant='primary' />
      <main className="lg:px-8 pb-8 px-4 min-h-[62vh] pt-28 bg-[#fafafa] flex flex-col items-center">
        <Feed />
      </main>
    </>
  )
}

export default page
import Navbar from '@/components/Navbar/Navbar'
import { getMetaData } from '@/utils/getMetaData'
import React from 'react'
import Header from './sections/Header'

export async function generateMetadata() {
  return getMetaData({
    title: "Contatos",
    description: "Descrição",
    image: ""
  })
}

const page = () => {
  return (
    <>
      <Navbar variant="secondary" />
      <main className="min-h-[62vh] pt-16">
        <Header />
      </main>
    </>
  )
}

export default page

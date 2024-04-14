import Navbar from '@/components/Navbar/Navbar'
import { getMetaData } from '@/utils/getMetaData'
import React from 'react'
import Header from './components/Header'
import { Collaborators } from './components/Collaborators'

export async function generateMetadata() {
  return getMetaData({
    title: "About us",
    description: "Conheça a equipe de desenvolvimento da nossa plataforma",
    image: ""
  })
}

export default function Page() {
  return (
    <>
      <Navbar variant="secondary" />
      <main className="min-h-[62vh] bg-[#fafafa] pt-16">
        <Header />
        <Collaborators />
      </main>
    </>
  )
}

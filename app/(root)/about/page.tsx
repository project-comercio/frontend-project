import Navbar from '@/components/Navbar/Navbar'
import { getMetaData } from '@/utils/getMetaData'
import React from 'react'
import Header from './sections/Header'
import Collaborators from "./sections/Collaborators";

export async function generateMetadata() {
  return getMetaData({
    title: "About",
    description: "Descrição",
    image: ""
  })
}

export default function Page() {
  return (
    <>
      <Navbar variant="secondary" />
      <main className="min-h-[62vh] pt-16">
        <Header />
        <Collaborators />
      </main>
    </>
  )
}

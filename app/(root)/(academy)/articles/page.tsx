import React from 'react'
import Marketing from './components/Marketing'
import Header from './components/Header'
import { getMetaData } from '@/utils/getMetaData'
import Navbar from '@/components/toolkit/Navbar/Navbar'

export async function generateMetadata() {
  return getMetaData({
    title: 'Artigos e Guias',
    description:
      'Descubra artigos, materiais e guias de como crescer a sua empresa!',
    image: ''
  })
}

export default function Page() {
  return (
    <>
      <Navbar variant="secondary" />
      <main className="min-h-[62vh] pt-16">
        <Header />
        <Marketing />
        <Marketing />
        <Marketing />
      </main>
    </>
  )
}

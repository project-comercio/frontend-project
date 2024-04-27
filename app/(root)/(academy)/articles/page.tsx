import React from 'react'
import Marketing from './components/Marketing'
import Header from './components/Header'
import Navbar from '@/components/Navbar/Navbar'
import { getMetaData } from '@/utils/getMetaData'

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

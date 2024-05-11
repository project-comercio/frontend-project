
import { getMetaData } from '@/utils/getMetaData'
import React from 'react'
import Header from './components/Header'
import { Collaborators } from './components/Collaborators'
import { Location } from './components/Location'
import { Socials } from './components/Socials'
import { NextPage } from 'next'
import Navbar from '@/components/toolkit/Navbar/Navbar'

export async function generateMetadata() {
  return getMetaData({
    title: 'Sobre nós',
    description: 'Conheça a equipe de desenvolvimento da nossa plataforma',
    image: ''
  })
}

const Page: NextPage = () => {
  return (
    <>
      <Navbar variant="secondary" />
      <main className="min-h-[62vh] bg-[#fafafa] py-16">
        <Header />
        <Collaborators />
        <Location />
        <Socials />
      </main>
    </>
  )
}

export default Page

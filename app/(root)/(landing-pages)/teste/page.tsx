import { getMetaData } from '@/utils/getMetaData'
import React from 'react'
import { NextPage } from 'next'
import Navbar from '@/components/toolkit/Navbar/Navbar'
import { DevelopmentDisclaimer } from '@/components/common/DevelopmentDisclaimer'

export async function generateMetadata() {
  return getMetaData({
    title: "Contatos",
    description: "Entre em contato com nossa equipe para apresentar ideias que voc6e gostaria de ver em nosso projeto",
    image: ""
  })
}

const Page: NextPage = () => {
  return (
    <>
      <Navbar variant="secondary" />
      <main className="min-h-[62vh] pt-16">
        <DevelopmentDisclaimer />
      </main>
    </>
  )
}

export default Page

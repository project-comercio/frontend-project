import React from 'react'

import { getMetaData } from '@/utils/getMetaData'
import Feed from './components/Feed'
import { NextPage } from 'next'
import Navbar from '@/components/toolkit/Navbar/Navbar'

export async function generateMetadata() {
  return getMetaData({
    title: 'Feed Inicial - Postagens',
    description:
      'Descubra outras empresas referencias do seu nicho e veja o que está em alta por ai',
    image: ''
  })
}

const Page: NextPage = () => {
  return (
    <>
      <Navbar variant="default" />
      <main className="flex min-h-[62vh] flex-col items-center bg-[#fafafa] px-4 pb-8 pt-28 lg:px-8">
        <Feed />
      </main>
    </>
  )
}

export default Page

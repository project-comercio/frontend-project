import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

import { getMetaData } from '@/utils/getMetaData'
import Feed from './components/Feed'

export async function generateMetadata() {
  return getMetaData({
    title: 'Feed Inicial - Postagens',
    description:
      'Descubra outras empresas referencias do seu nicho e veja o que está em alta por ai',
    image: ''
  })
}

export default function Page() {
  return (
    <>
      <Navbar variant="primary" />
      <main className="flex min-h-[62vh] flex-col items-center bg-[#fafafa] px-4 pb-8 pt-28 lg:px-8">
        <Feed />
      </main>
    </>
  )
}

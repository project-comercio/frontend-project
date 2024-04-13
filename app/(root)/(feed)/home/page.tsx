import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Feed from './sections/Feed'
import { getMetaData } from '@/utils/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: "Feed",
    description: "Descubra outras empresas referencias do seu nicho e veja o que está em alta por ai",
    image: ""
  })
}

export default function Page() {
  return (
    <>
      <Navbar variant='primary' />
      <main className="lg:px-8 pb-8 px-4 min-h-[62vh] pt-28 bg-[#fafafa] flex flex-col items-center">
        <Feed />
      </main>
    </>
  )
}
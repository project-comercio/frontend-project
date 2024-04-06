import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Feed from './sections/Feed'
import { getUser } from '@/context/UserContext'
import HeadComponent from '@/components/HeadComponent/HeadComponent'

const page = () => {
  return (
    <>
      <HeadComponent
        title='Página Inicial'
        description='Veja com detalhes tudo que a nossa empresa pode fornecer para você! Garanto que seus resultados e sua visilidade irão crescer exponencialmente!'
        opengraph=''
      />
      <Navbar variant='primary' />
      <main className="lg:px-8 pb-8 px-4 min-h-[62vh] pt-28 bg-[#fafafa] flex flex-col items-center">
        <Feed />
      </main>
    </>
  )
}

export default page
import Navbar from '@/components/Navbar/Navbar'
import { getMetaData } from '@/utils/getMetaData'
import React from 'react'
import Description from '../components/Description'
import Posts from '../components/Posts'
import Header from '../components/Header'
import Activity from '../components/Activity'
import Sidebar from '../../../(feed)/home/components/Sidebar'

export async function generateMetadata() {
  return getMetaData({
    title: "Perfil do usuário",
    description: "Descrição",
    image: ""
  })
}

export default function Page() {
  return (
    <>
      <Navbar variant='primary' />
      <main className='lg:px-8 pb-8 px-4 min-h-[62vh] pt-28 bg-[#fafafa] flex flex-col items-center'>
        <div className='w-full flex justify-between gap-8 max-w-6xl'>
          <div className='w-full flex flex-col gap-4'>
            <Header />
            <Description />
            <Posts />
            <Activity />
          </div>
          <Sidebar />
        </div>
      </main>
    </>
  )
}

import Navbar from '@/components/Navbar/Navbar'
import { getMetaData } from '@/utils/getMetaData'
import React from 'react'
import Description from './components/Description'

import Activity from './components/Activity'
import Sidebar from '../../../(feed)/home/components/Sidebar'
import UserPosts from './components/UserPosts'
import Header from './components/Header'
import Report from './components/Report'

export async function generateMetadata() {
  return getMetaData({
    title: 'Perfil principal do usuário',
    description: 'Adicione informacões relevantes sobre você e o seu comércio',
    image: ''
  })
}

export default function Page() {
  return (
    <>
      <Navbar variant="primary" />
      <main className="flex min-h-[62vh] flex-col items-center bg-[#fafafa] px-4 pb-8 pt-28 lg:px-8">
        <div className="flex w-full max-w-6xl justify-between gap-8">
          <div className="flex w-full flex-col gap-4">
            <Header />
            <Report />
            <Description />
            <UserPosts />
            <Activity />
          </div>
          <Sidebar />
        </div>
      </main>
    </>
  )
}

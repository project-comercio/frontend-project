import { getMetaData } from '@/utils/getMetaData'
import React from 'react'

import Navbar from '@/components/toolkit/Navbar/Navbar'
import Sidebar from '@/app/(root)/(feed)/home/components/Sidebar'

export async function generateMetadata() {
  return getMetaData({
    title: 'Perfil de usuário',
    description:
      'Visualize o perfil desse usuário e veja o que ele tem a oferecer!',
    image: ''
  })
}

export default function Page() {
  return (
    <>
      <Navbar variant="default" />
      <main className="flex min-h-[62vh] flex-col items-center bg-[#fafafa] px-4 pb-8 pt-28 lg:px-8">
        <div className="flex w-full max-w-6xl justify-between gap-8">
          <div className="flex w-full flex-col gap-4">futuras informações</div>
          <Sidebar />
        </div>
      </main>
    </>
  )
}

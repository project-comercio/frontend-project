import { getMetaData } from "@/utils/getMetaData";
import React from "react";

import Sidebar from "../../../(feed)/home/components/Sidebar";
import Navbar from "@/components/toolkit/Navbar/Navbar";
import Navbar from '@/components/Navbar/Navbar'
import { getMetaData } from '@/utils/getMetaData'
        
import React from 'react'
import Sidebar from '../../../(feed)/home/components/Sidebar'

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
      <Navbar variant="primary" />
      <main className="flex min-h-[62vh] flex-col items-center bg-[#fafafa] px-4 pb-8 pt-28 lg:px-8">
        <div className="flex w-full max-w-6xl justify-between gap-8">
          <div className="flex w-full flex-col gap-4">futuras informações</div>
          <Sidebar />
        </div>
      </main>
    </>
  )
}

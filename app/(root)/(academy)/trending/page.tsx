import React from "react";
import Topics from "./components/Topics";
import { getMetaData } from "@/utils/getMetaData";
import Navbar from "@/components/toolkit/Navbar/Navbar";
import React from 'react'
import Topics from './components/Topics'
import { getMetaData } from '@/utils/getMetaData'
import Navbar from '@/components/toolkit/Navbar/Navbar'

export async function generateMetadata() {
  return getMetaData({
    title: 'Trending Topics',
    description: 'Veja o que está em alta dentro do seu nicho empresarial!',
    image: ''
  })
}

export default function Page() {
  return (
    <>
      <Navbar variant="primary" />
      <main className="min-h-[62vh] px-4 pt-20 lg:px-12">
        <Topics />
      </main>
    </>
  )
}

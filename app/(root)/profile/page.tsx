import Navbar from '@/components/Navbar/Navbar'
import { getMetaData } from '@/utils/getMetaData'
import React from 'react'
import Header from './sections/Header/Header'
import Description from './sections/Description/Description'
import Posts from './sections/Posts/Posts'
import Activity from './sections/Activity/Activity'
import Sidebar from '../home/sections/Sidebar/Sidebar'
import UserTab from '../home/sections/Usertab/UserTab'

export async function generateMetadata() {
  return getMetaData({
    title: "Titulo",
    description: "Descrição",
    image: ""
  })
}

const page = () => {
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

export default page
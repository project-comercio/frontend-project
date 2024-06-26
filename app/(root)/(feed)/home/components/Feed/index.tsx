"use client"

import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import UserTab from '../Usertab'
import Networking from '../Networking'
import MainFeed from '../MainFeed'

export default function Feed() {
  const [currentTab, setCurrentTab] = useState<string>("feed")

  return (
    <section className='w-full flex justify-between gap-8 max-w-7xl'>
      <UserTab setCurrentTab={setCurrentTab} currentTab={currentTab} />
      {currentTab === "feed" ? <MainFeed /> : null}
      {currentTab === "networking" ? <Networking/> : null}
      <Sidebar />
    </section>
  )
}

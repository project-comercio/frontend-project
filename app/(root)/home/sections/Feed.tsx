"use client"

import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import MainFeed from './MainFeed/MainFeed'
import UserTab from './Usertab/UserTab'
import Networking from './Networking/Networking'

const Feed = () => {
  const [currentTab, setCurrentTab] = useState<string>("feed")

  return (
    <div className='w-full flex justify-between gap-8 max-w-7xl'>
      <UserTab setCurrentTab={setCurrentTab} currentTab={currentTab} />
      {currentTab === "feed" ? <MainFeed /> : null}
      {currentTab === "networking" ? <Networking/> : null}
      <Sidebar />
    </div>
  )
}

export default Feed

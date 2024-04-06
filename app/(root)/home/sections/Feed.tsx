import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import MainFeed from './MainFeed/MainFeed'
import UserTab from './Usertab/UserTab'

const Feed = () => {
  return (
    <div className='w-full flex justify-between gap-8 max-w-7xl'>
      <UserTab />
      <MainFeed />
      <Sidebar />
    </div>
  )
}

export default Feed
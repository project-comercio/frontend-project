"use client"

import React, { cache, useState } from 'react'

export const getUserPosts = cache(async () => {
  console.log("executou")
  const requisiton = await fetch("https://backend-repository.onrender.com/users/getUserPosts", {
    method: "GET",
    next: {
      tags: ['get-user-posts']
    }
  })
  const response = await requisiton.json()
  
  if (response.length) return response
})

const Posts = () => {
  return (
    <section className='w-full bg-white rounded-lg border border-slate-200 p-4 lg:p-8'>
      Posts
    </section>
  )
}

export default Posts
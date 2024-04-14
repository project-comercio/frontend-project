"use client"

import React, { cache, useState } from 'react'

export const getUserPosts = cache(async () => {
  const requisiton = await fetch("https://backend-repository.onrender.com/users/getUserPosts", {
    method: "GET",
    next: {
      revalidate: 2 * 60,
      tags: ['get-user-posts']
    }
  })
  const response = await requisiton.json()
  
  if (response.length) return response
})

export default function Posts() {
  return (
    <section className='w-full bg-white rounded-lg border border-slate-200 p-4 lg:p-8'>
      Posts
    </section>
  )
}

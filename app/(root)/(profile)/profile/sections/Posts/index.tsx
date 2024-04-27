"use client"

import React, { cache } from 'react'

export const getUserPosts = cache(async () => {
  try {
    const requisiton = await fetch("https://backend-repository.onrender.com/users/getUserPosts", {
      method: "GET",
      next: {
        revalidate: 2 * 60,
        tags: ['get-user-posts']
      }
    })
    const response = await requisiton.json()

    if (response.length) return response
  } catch (error) {
    throw new Error("Não foi possível objter os posts do usuário")
  }
})

export default function Posts() {
  const posts = getUserPosts()

  return (
    <section className='w-full bg-white rounded-lg border border-slate-200 p-4 lg:p-8'>
      {JSON.stringify(posts)}
    </section>
  )
}

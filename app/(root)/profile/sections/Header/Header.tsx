"use client"

import { getUser } from '@/context/UserContext'
import React from 'react'

const Header = () => {
  const {userData} = getUser()

  return (
    <section className="w-full bg-white rounded-lg border border-slate-200">
      <div className='rounded-t-lg w-full h-[220px] bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url("https://e0.pxfuel.com/wallpapers/881/773/desktop-wallpaper-hex-abstract-material-design-abstract-background-and-material-ui.jpg")`}} />
      <div className='p-4 lg:p-8 w-full'>
        <figure className='max-h-28 max-w-28'>
          <img src={userData?.picture} alt={`${userData?.username}-profile-picture`} className='-mt-20 w-full h-full rounded-full' />
        </figure>
        <article className='mt-4'>
          <h2 className='text-sm lg:text-base font-semibold items-center flex gap-1'>{userData?.firstname} {userData?.lastname} - <span className='text-xs lg:text-xs text-principal font-medium'>10 seguidores</span></h2>
          <p className='text-slate-500 text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum fuga, adipisci iusto dignissimos asperiores, ipsum voluptate commodi recusandae, reprehenderit illum est! Cum suscipit nostrum nemo voluptate, ullam quia reiciendis?</p>
          <p className='text-xs text-slate-400 mt-4'>Santa Bárbara d'Oeste, SP - Brasil</p>
          <p className='text-xs text-slate-400'><span className='text-slate-500 text-xs'>Contact:</span> {userData.email}</p>
        </article>
        <div className='flex gap-4 items-center mt-4'>
          <div className='px-4 py-1 bg-principal rounded-full text-xs text-center text-white cursor-pointer transition-all duration-300 hover:brightness-105'>
            Enviar convite
          </div>
          <div className='px-4 py-1 text-principal rounded-full text-xs text-center border border-principal cursor-pointer transition-all duration-300 hover:brightness-105'>
            Compartilhar perfil
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
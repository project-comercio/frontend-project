"use client"

import type React from 'react'

export default function Form() {
  return (
    <div className='w-full'>
      <form className='flex flex-col gap-6 w-full' onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault()
      }}>
        <input type="text" name="name" spellCheck={false} autoComplete='off' minLength={2} maxLength={55} id="name" className='outline-none px-4 py-2 rounded-md text-sm text-slate-600' placeholder='Insira o seu nome completo' required/>
        <input type="email" name="email" spellCheck={false} autoComplete='off' minLength={2} maxLength={55} id="email" className='outline-none px-4 py-2 rounded-md text-sm text-slate-600' placeholder='Insira o seu email aqui' required/>
        <textarea rows={10} cols={10} className='outline-none px-4 py-2 rounded-md text-sm text-slate-600 resize-none' placeholder='Digite a sua mensagem para a nossa equipe aqui' required>

        </textarea>
          <button type='submit' className='px-6 py-2 rounded-lg text-center cursor-pointer bg-principal text-white w-full'>
          Enviar mensagem
          </button>
      </form>
    </div>
  )
}

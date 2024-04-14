"use client"

import TextEditor from '@/components/Config/TextEditor'
import TextEditorPopup from '@/components/Config/TextEditorPopup'
import { getUser } from '@/context/UserContext'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function Description() {
  const {userData, getUserInfo} = getUser()

  const [textContent, setTextContent] = useState<string>("")
  const [showTextEditor, setShowTextEditor] = useState<boolean>(false)

  const handleUpdateUserDescription = async () => {
    try {
      const response = await fetch("http://localhost:8080/users/updateDescription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userData.id,
          description: textContent
        })
      })

      if (response.ok) {
        await getUserInfo()
        toast.success("A sua descrição foi atualizada com sucesso!")
      }
    } catch (error) {
      throw new Error("Não foi possível atualizar / adicionar uma descrição ao usuário")
    }
  }

  return (
    <section className='w-full bg-white rounded-lg border border-slate-200 p-4 lg:p-8'>
      <h2 className='font-semibold text-sm lg:text-base'>Description</h2>
      <p className='text-xs text-slate-500'>A sua descrição deve ser algo objetivo e chamativo para demonstrar algo para seu futuro cliente! (só você pode ver essa mensagem)</p>
      <article className='my-12 w-full flex justify-center items-center'>
        {userData?.description ? (
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          <p dangerouslySetInnerHTML={{__html: userData.description}} />
        ) : (
          <p className='max-w-[400px] w-full text-slate-500 text-sm text-center'>Ops... parace que você ainda não possui uma descrição. Porém você pode adicionar clicando no botão abaixo:</p>
        )}
      </article>
      <div className='w-full mt-8 flex justify-center items-center'>
        <button type='button' className='px-4 py-2 text-xs text-white bg-principal rounded-full text-center cursor-pointer transition-all duration-300 hover:brightness-105' onClick={() => setShowTextEditor(!showTextEditor)}>
          {userData?.description ? "Alterar descrição do perfil" : "Adicione uma descrição ao perfil"}
        </button>
      </div>

      {showTextEditor ? <TextEditorPopup setShowEditor={setShowTextEditor} showEditor={showTextEditor} setValue={setTextContent} value={textContent} title='Descrição do perfil' handleFunction={handleUpdateUserDescription} /> : null}
    </section>
  )
}

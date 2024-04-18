'use client'

import Popup from "@/components/Popups/BasePopup";
import type { UpdateUserProfileProps } from "./types";
import { useState } from "react";
import { getUser } from "@/context/UserContext";
import Image from "next/image";
import UploadPhoto from "@/components/Config/UploadPhoto";

export default function UpdateUserProfile({ showState, setShowState }: UpdateUserProfileProps) {
  const { userData } = getUser()

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: userData?.email,
    resume: "",
    picture: userData?.picture,
    background: userData?.backgroundImage
  })

  const [newPicture, setNewPicture] = useState<string>(userData?.picture)

  return showState ? (
    <Popup title="Editar Perfil" description="Deixe o seu perfil do seu jeito, aproveite nossa diversidade de recursos de personalização ao seu favor" setShowState={setShowState} showState={showState} >
      <form className="mt-12 flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium text-sm">Seu nome: </label>
          <input type="text" name="name" id="name" className="mt-1 outline-none border-b border-slate-200 py-1 text-xs lg:text-sm text-slate-500 transition-all duration-300 focus:border-b-principal" spellCheck={false} defaultValue={`${userData?.firstname} ${userData?.lastname}`} autoComplete="off" placeholder="Seu nome completo" />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="name" className="font-medium text-sm">Resumo: </label>
          <input type="text" name="name" id="name" className="mt-1 outline-none border-b border-slate-200 py-1 text-xs lg:text-sm text-slate-500 transition-all duration-300 focus:border-b-principal" autoComplete="off" placeholder="Digite um resumo rápido do seu perfil" maxLength={60} minLength={2} />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="name" className="font-medium text-sm">Seu email: </label>
          <input type="email" name="name" id="name" className="mt-1 outline-none border-b border-slate-200 py-1 text-xs lg:text-sm text-slate-500 transition-all duration-300 focus:border-b-principal" spellCheck={false} defaultValue={userInfo.email} autoComplete="off" placeholder="Seu email de contato" />
        </div>
        <div className="w-full flex justify-between gap-4">
          <figure className="w-full">
            <Image width={100} height={100} alt="new-user-profile-photo" src={newPicture} />
          </figure>
          <div>
            <UploadPhoto file={newPicture} setFile={setNewPicture}>
              Insira aqui a sua nova foto
            </UploadPhoto>
          </div>
        </div>
      </form>
    </Popup>
  ) : null
}

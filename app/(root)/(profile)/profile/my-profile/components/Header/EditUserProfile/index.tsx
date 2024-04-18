"use client";

import Popup from "@/components/Popups/BasePopup";
import type { UpdateUserProfileProps } from "./types";
import { useEffect, useState } from "react";
import { getUser } from "@/context/UserContext";
import Image from "next/image";
import UploadPhoto from "@/components/Config/UploadPhoto";

export default function UpdateUserProfile({
	showState,
	setShowState,
}: UpdateUserProfileProps) {
	const { userData } = getUser();

	const [userInfo, setUserInfo] = useState({
		name: "",
		email: userData?.email,
		resume: "",
		picture: userData?.picture,
		background: userData?.backgroundImage,
	});

	const [newPicture, setNewPicture] = useState<string>(userData?.picture);
  const [newBackground, setNewBackground] = useState<string>(userData?.backgroundImage)

  useEffect(() => {
    if (showState) document.body.style.overflow = 'hidden'
    if (!showState) document.body.style.overflow = 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showState])

	return showState ? (
		<Popup
			title="Editar Perfil"
			description="Deixe o seu perfil do seu jeito, aproveite nossa diversidade de recursos de personalização ao seu favor"
			setShowState={setShowState}
			showState={showState}
		>
			<form className="mt-12 flex flex-col gap-4">
				<div className="flex flex-col">
					<label htmlFor="name" className="font-medium text-sm">
						Seu nome:
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="mt-1 outline-none border-b border-slate-200 py-1 text-xs lg:text-sm text-slate-500 transition-all duration-300 focus:border-b-principal"
						spellCheck={false}
						defaultValue={`${userData?.firstname} ${userData?.lastname}`}
						autoComplete="off"
						placeholder="Seu nome completo"
					/>
				</div>
				<div className="flex flex-col mt-2">
					<label htmlFor="name" className="font-medium text-sm">
						Resumo:
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="mt-1 outline-none border-b border-slate-200 py-1 text-xs lg:text-sm text-slate-500 transition-all duration-300 focus:border-b-principal"
						autoComplete="off"
						placeholder="Digite um resumo rápido do seu perfil"
						maxLength={60}
						minLength={2}
					/>
				</div>
				<div className="flex flex-col mt-2">
					<label htmlFor="name" className="font-medium text-sm">
						Seu email:
					</label>
					<input
						type="email"
						name="name"
						id="name"
						className="mt-1 outline-none border-b border-slate-200 py-1 text-xs lg:text-sm text-slate-500 transition-all duration-300 focus:border-b-principal"
						spellCheck={false}
						defaultValue={userInfo.email}
						autoComplete="off"
						placeholder="Seu email de contato"
					/>
				</div>
				<div className="flex gap-4 mt-4 items-center">
					<figure className="max-h-[65px] max-w-[65px]">
						<Image
							width={65}
							height={65}
							alt="new-profile-background"
							className="rounded-xl h-[65px] w-[65px] cursor-pointer"
							src={newPicture}
						/>
					</figure>
					<div className="w-full flex-1">
						<h3 className="text-sm font-semibold">Alterar foto de perfil</h3>
						<UploadPhoto file={newPicture} setFile={setNewPicture}>
							<div className="bg-principal mt-2 text-white px-6 py-[6px] rounded-full text-center transition-all duration-300 hover:brightness-110 text-xs w-[250px]">
								Insira aqui a sua nova foto
							</div>
						</UploadPhoto>
					</div>
				</div>
        <div className="flex gap-4 mt-4 items-center">
					<figure className="h-[65px] w-[65px] cursor-pointer">
						<Image
							width={65}
							height={65}
							alt="new-user-profile-photo"
							className="rounded-xl h-[65px] w-[65px]"
							src={newBackground}
						/>
					</figure>
					<div className="w-full flex-1">
						<h3 className="text-sm font-semibold">Alterar plano de fundo</h3>
						<UploadPhoto file={newBackground} setFile={setNewBackground}>
							<div className="bg-principal mt-2 text-white px-6 py-[6px] rounded-full text-center transition-all duration-300 hover:brightness-110 text-xs w-[250px]">
								Insira aqui seu novo background
							</div>
						</UploadPhoto>
					</div>
				</div>
			</form>
		</Popup>
	) : null;
}

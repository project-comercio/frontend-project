"use client";

<<<<<<< HEAD
import TextEditorPopup from "@/components/toolkit/Config/TextEditorPopup";
=======

import TextEditorPopup from "@/components/common/Config/TextEditorPopup";
>>>>>>> 1965937343b9f9cade3c56f9f5b114c8194f82a9
import { getUser } from "@/context/UserContext";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Description() {
	const { userData, getUserInfo } = getUser();

	const [textContent, setTextContent] = useState<string>("");
	const [showTextEditor, setShowTextEditor] = useState<boolean>(false);

	const handleUpdateUserDescription = async () => {
		try {
			const response = await fetch(
				"https://backend-repository.onrender.com/users/updateUserDescription",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						userId: userData.id,
						description: textContent,
					}),
				},
			);

			if (response.ok) {
				await getUserInfo();
				toast.success("A sua descrição foi atualizada com sucesso!");
			}
		} catch (error) {
			console.log(error);
			throw new Error("Não foi possível atualizar a descrição do usuário");
		}
	};

	return (
		<section className="w-full bg-white rounded-lg border border-slate-200 p-4 lg:p-8">
			<h2 className="font-semibold text-sm lg:text-base">Descrição</h2>
			<p className="text-xs text-slate-500">
				A sua descrição deve ser algo objetivo e chamativo para demonstrar algo
				para seu futuro cliente! (só você pode ver essa mensagem)
			</p>
			<article className="my-8 w-full flex justify-center items-center">
				{userData?.description ? (
					<p
						className="w-full description"
						dangerouslySetInnerHTML={{ __html: userData?.description }}
					/>
				) : (
					<p className="max-w-[400px] w-full text-slate-500 text-sm text-center">
						Ops... parace que você ainda não possui uma descrição. Porém você
						pode adicionar clicando no botão abaixo:
					</p>
				)}
			</article>
			<div className="w-full mt-8 flex justify-center items-center">
				<button
					type="button"
					className="px-8 py-2 text-xs text-white bg-principal rounded-full text-center cursor-pointer transition-all duration-300 hover:brightness-105"
					onClick={() => setShowTextEditor(!showTextEditor)}
				>
					{userData?.description
						? "Alterar descrição do perfil"
						: "Adicione uma descrição ao perfil"}
				</button>
			</div>

			{showTextEditor ? (
				<TextEditorPopup
					setShowEditor={setShowTextEditor}
					showEditor={showTextEditor}
					setValue={setTextContent}
					value={textContent}
					title="Descrição do perfil"
					handleFunction={handleUpdateUserDescription}
				/>
			) : null}
		</section>
	);
}

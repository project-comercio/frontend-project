import TextEditorPopup from "@/components/Config/TextEditorPopup";
import { getUser } from "@/context/UserContext";
import { useState } from "react";

export default function Description() {
  const {userData} = getUser()

  const handleUploadCompanyDescription = async () => {
    try {
      console.log("atualizar")
    } catch (error) {
      throw new Error(String(error))
    }
  }

  const [showTextEditor, setShowTextEditor] = useState<boolean>(false)
  const [textContent, setTextContent] = useState<string>("")

  return (
		<section className="w-full bg-white rounded-lg border border-slate-200 p-4 lg:p-8">
			<h2 className="font-semibold text-sm lg:text-base">Atividade</h2>
      <article className="my-8 w-full flex justify-center items-center">
				{userData?.description ? (
					<p
						className="w-full description"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
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
					handleFunction={handleUploadCompanyDescription}
				/>
			) : null}
		</section>
  )
}

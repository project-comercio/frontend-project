import { useState } from "react"

export default function Header() {

  const [company, setCompany] = useState([])

  return (
  <section className="w-full bg-white rounded-lg border border-slate-200">
			<div
				className="rounded-t-lg w-full h-[220px] bg-cover bg-no-repeat bg-center"
				style={{
					backgroundImage: `url("https://i0.wp.com/www.moyens.net/wp-content/uploads/2023/06/1686386888_785_Telechargez-les-fonds-decran-officiels-macOS-Sonoma-4K.jpeg?resize=1170%2C1170&ssl=1")`,
				}}
			/>
			<div className="p-4 lg:p-8 w-full">
				<figure className="max-h-28 cursor-pointer max-w-28 relative items-center flex justify-center">
					<img
						src={"https://cdn-icons-png.flaticon.com/512/6033/6033716.png"}
						alt={`company-profile-picture`}
						className="profile-picture-border -mt-20 w-full h-full rounded-full selection:bg-transparent cursor-pointer"
					/>
				</figure>
				<article className="mt-4">
					<p className="text-slate-500 text-xs lg:text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						earum fuga, adipisci iusto dignissimos asperiores, ipsum voluptate
						commodi recusandae, reprehenderit illum est! Cum suscipit nostrum
						nemo voluptate, ullam quia reiciendis?
					</p>
					<p className="text-xs lg:text-xs mt-4 text-principal font-medium">
						120 seguidores
					</p>
					<p className="text-xs text-slate-400 ">
						Santa Bárbara d'Oeste, SP - Brasil{" "}
						<span className="text-xs cursor-pointer text-principal font-medium">
							- Contato
						</span>
					</p>
				</article>
			</div>
		</section>
  )
}

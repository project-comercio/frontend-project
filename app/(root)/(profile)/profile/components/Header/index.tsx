"use client";

import { getUser } from "@/context/UserContext";
import React, { useState } from "react";
import { IoMdImage } from "react-icons/io";
import UpdateUserProfile from "./EditUserProfile";

export default function Header() {
	const { userData } = getUser();

	const [showEditProfile, setShowEditProfile] = useState<boolean>(false);

	return (
		<section className="w-full bg-white rounded-lg border border-slate-200">
			<div
				className="rounded-t-lg w-full h-[220px] bg-cover bg-no-repeat bg-center"
				style={{
					backgroundImage: `url("https://media.idownloadblog.com/wp-content/uploads/2021/05/macOS-Big-Sur-wallpaper-inspiration-javierocasio-idownloadblog-Waves-Dark-Alt-4K.jpg")`,
				}}
			/>
			<div className="p-4 lg:p-8 w-full">
				<figure className="max-h-28 cursor-pointer max-w-28 relative items-center flex justify-center">
					<img
						src={userData?.picture}
						alt={`${userData?.username}-profile-picture`}
						className="-mt-20 w-full h-full rounded-full transition-all selection:bg-transparent z-10 hover:z-0 cursor-pointer hover:brightness-50 duration-200"
					/>
					<IoMdImage size={28} className="ease absolute white-icon -mt-16" />
				</figure>
				<article className="mt-4">
					<h2 className="text-base lg:text-lg font-semibold items-center flex gap-1">
						{userData?.firstname} {userData?.lastname}
					</h2>
					<p className="text-slate-500 text-xs lg:text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						earum fuga, adipisci iusto dignissimos asperiores, ipsum voluptate
						commodi recusandae, reprehenderit illum est! Cum suscipit nostrum
						nemo voluptate, ullam quia reiciendis?
					</p>
					<p className="text-xs lg:text-xs mt-4 text-principal font-medium">
						{userData?.followers} seguidores
					</p>
					<p className="text-xs text-slate-400 ">
						Santa Bárbara d'Oeste, SP - Brasil
					</p>
					<p className="text-xs text-slate-400">
						<span className="text-slate-500 text-xs">Contact:</span>{" "}
						{userData?.email}
					</p>
				</article>
				<div className="flex gap-4 items-center w-full justify-end mt-4">
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
						className="px-6 py-1 bg-principal rounded-full text-xs text-center text-white cursor-pointer transition-all duration-300 hover:brightness-125"
						onClick={() => {
							setShowEditProfile(!showEditProfile);
						}}
					>
						Editar meu perfil
					</div>
				</div>
			</div>

      <UpdateUserProfile setShowState={setShowEditProfile} showState={showEditProfile} />
		</section>
	);
}

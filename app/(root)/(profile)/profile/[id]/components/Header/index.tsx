"use client";

import { getUser } from "@/context/UserContext";
import React from "react";

export default function Header() {
	const { userData } = getUser();

	return (
		<section className="w-full bg-white rounded-lg border border-slate-200">
			<div
				className="rounded-t-lg w-full h-[220px] bg-cover bg-no-repeat bg-center"
				style={{
					backgroundImage: `url("https://cdn.mobilesyrup.com/wp-content/uploads/2020/11/mac0s-wallpaper-11-scaled.jpg")`,
				}}
			/>
			<div className="p-4 lg:p-8 w-full">
				<figure className="max-h-28 max-w-28">
					<img
						src={userData?.picture}
						alt={`${userData?.username}-profile-picture`}
						className="-mt-20 w-full h-full rounded-full selection:bg-transparent"
					/>
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
						10 seguidores
					</p>
					<p className="text-xs text-slate-400 ">
						Santa Bárbara d'Oeste, SP - Brasil
					</p>
					<p className="text-xs text-slate-400">
						<span className="text-slate-500 text-xs">Contact:</span>{" "}
						{userData?.email}
					</p>
				</article>
				<div className="flex gap-4 items-center mt-4">
					<div className="px-4 py-1 bg-principal rounded-full text-xs text-center text-white cursor-pointer transition-all duration-300 hover:brightness-105">
						Enviar convite
					</div>
					<div className="px-4 py-1 text-principal rounded-full text-xs text-center border border-principal cursor-pointer transition-all duration-300 hover:brightness-105">
						Compartilhar perfil
					</div>
				</div>
			</div>
		</section>
	);
}

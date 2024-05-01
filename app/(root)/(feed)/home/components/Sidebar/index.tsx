"use client";


import SidebarArticle from "@/components/common/Article/SidebarArticle/SidebarArticle";
import CtaButton from "@/components/common/Button/CtaButton/CtaButton";
import { COMPANIES_DATA } from "@/constants/companies-data";
import type { CompanyDataProps, UserProps } from "@/types";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";

export default function Sidebar() {
	const path = usePathname();

	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const [allUsers, setAllUsers] = useState<UserProps[]>([]);

	const handleGetAllUsers = async () => {
		try {
			const requisiton = await fetch(
				"https://backend-repository.onrender.com/users/",
				{
					method: "GET",
				},
			);
			const response = await requisiton.json();
			if (response) setAllUsers(response);
		} catch (error) {
			throw new Error("Não foi possível encontrar nenhum usuário");
		}
	};

	useEffect(() => {
		handleGetAllUsers();
	}, []);

	return (
		<div className="w-full relative max-w-[275px] lg:block hidden drop-shadow-sm">
			<div
				className={`w-full flex flex-col gap-4 sticky inset-0 ${isScrolled ? "top-24" : "inset-0"}`}
			>
				{path !== "/home" ? (
					<div className="border border-slate-200 bg-white rounded-lg py-4 px-4">
						<h2 className="py-2 border-slate-200 border-b text-sm font-medium">
							Torne sua conta empresarial
						</h2>
						<p className="text-slate-500 mt-4 text-xs">
							Transformar a sua conta pessoal em empresarial pode ser uma
							excelente oportunidade para você que deseja expandir e aumentar a
							visibilidade do seu negócio
						</p>
						<button
							type="button"
							className="w-full mt-4 text-white rounded-full px-4 py-1 text-xs bg-principal text-center transition-all duration-300 hover:brightness-105"
						>
							Quero saber mais
						</button>
					</div>
				) : null}
				<div className="border border-slate-200 bg-white rounded-lg py-4 px-4">
					<h2 className="py-2 border-slate-200 border-b text-sm font-medium">
						Conheça outras empresas
					</h2>
					<ul className="w-full flex flex-col gap-6 mt-4">
						{COMPANIES_DATA.slice(0, 4).map(
							(company: CompanyDataProps, index: number) => (
								<li
									className="flex w-full gap-3 justify-between items-center"
									key={`${company.companyName}-${index}`}
								>
									<figure className="w-6 h-6">
										<img
											src={company.logo}
											alt="page-logo"
											className="rounded-full"
										/>
									</figure>
									<div className="flex flex-col justify-center w-full flex-1">
										<p className="text-sm">{company.companyName}</p>
										<p className="text-xs text-slate-500">
											+{company.posts} postagens
										</p>
									</div>
									<IoAddOutline
										size={20}
										className="colored-icon cursor-pointer"
									/>
								</li>
							),
						)}
					</ul>
					<div className="mt-8">
						<CtaButton href="#" label="Ver mais" />
					</div>
				</div>

				<div className="border border-slate-200 bg-white rounded-lg py-4 px-4">
					<h2 className="py-2 border-slate-200 border-b text-sm font-medium">
						Artigos
					</h2>
					<ul className="mt-4 flex flex-col gap-2">
						<SidebarArticle />
						<SidebarArticle />
						<SidebarArticle />
					</ul>
					<div className="mt-8">
						<CtaButton href="#" label="Ver mais" />
					</div>
				</div>

				<div className="border border-slate-200 bg-white rounded-lg py-4 px-4">
					<h2 className="py-2 border-slate-200 border-b text-sm font-medium">
						Conecte-se com seus clientes
					</h2>
					<ul className="mt-4 flex flex-col gap-6">
						{allUsers?.slice(0, 3).map((user: UserProps, index: number) => (
							<div
								className="flex gap-3 items-center w-full"
								key={`${user.username}-${index}`}
							>
								<img
									src={user.picture}
									alt={`${user.username}-profile-picture`}
									className="w-8 h-8 rounded-full"
								/>
								<article className="w-full flex-1">
									<span className="line-clamp-1 text-[12px] font-medium">
										{user.firstname} {user.lastname}
									</span>
									<p className="-mt-1 text-[10px] text-slate-500">
										{user.followers} seguidores
									</p>
								</article>
							</div>
						))}
					</ul>
					<div className="mt-8">
						<CtaButton href="#" label="Ver mais" />
					</div>
				</div>
			</div>
		</div>
	);
};

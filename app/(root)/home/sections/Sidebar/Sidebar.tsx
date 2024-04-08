"use client";

import SidebarArticle from "@/components/Article/SidebarArticle/SidebarArticle";
import CtaButton from "@/components/Button/CtaButton/CtaButton";
import { UserProps } from "@/types";
import { randomize } from "@/utils/functions/randomItem";
import React, { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";

const Sidebar = () => {
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

  const [allUsers, setAllUsers] = useState<UserProps[]>([])

  const handleGetAllUsers = async () => {
    try {
      const requisiton = await fetch(`https://backend-repository.onrender.com/users/`, {
        method: "GET"
      })
      const response = await requisiton.json()
      if (response) setAllUsers(response)
    } catch (error) {
      throw new Error("Não foi possível encontrar nenhum usuário")
    }
  }

  useEffect(() => {
    handleGetAllUsers()
  }, [])

  return (
    <div className="w-full relative max-w-[275px] lg:block hidden drop-shadow-sm">
      <div
        className={`w-full sticky inset-0 ${isScrolled ? "top-24" : "inset-0"}`}
      >
        <div className="border border-slate-200 bg-white rounded-lg py-4 px-4">
          <h2 className="py-2 border-slate-200 border-b text-sm font-medium">
            Conheça outras empresas
          </h2>
          <ul className="w-full flex flex-col gap-6 mt-4">
            <li className="flex w-full gap-3 justify-between items-center ">
              <figure className="w-6 h-6">
                <img
                  src="https://logopng.com.br/logos/amazon-2.png"
                  alt="page-logo"
                  className="rounded-full"
                />
              </figure>
              <div className="flex flex-col justify-center w-full flex-1">
                <p className="text-sm">Amazon Brasil</p>
                <p className="text-xs text-slate-500">+360 postagens</p>
              </div>
              <IoAddOutline size={20} className="colored-icon cursor-pointer" />
            </li>
            <li className="flex w-full gap-3 justify-between items-center ">
              <figure className="w-6 h-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6033/6033716.png"
                  alt="page-logo"
                  className="rounded-full"
                />
              </figure>
              <div className="flex flex-col justify-center w-full flex-1">
                <p className="text-sm">Meta</p>
                <p className="text-xs text-slate-500">+260 postagens</p>
              </div>
              <IoAddOutline size={20} className="colored-icon cursor-pointer" />
            </li>
            <li className="flex w-full gap-3 justify-between items-center ">
              <figure className="w-6 h-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png"
                  alt="page-logo"
                  className="rounded-full"
                />
              </figure>
              <div className="flex flex-col justify-center w-full flex-1">
                <p className="text-sm">Apple</p>
                <p className="text-xs text-slate-500">+320 postagens</p>
              </div>
              <IoAddOutline size={20} className="colored-icon cursor-pointer" />
            </li>
            <li className="flex w-full gap-3 justify-between items-center ">
              <figure className="w-6 h-6">
                <img
                  src="https://logopng.com.br/logos/google-37.png"
                  alt="page-logo"
                  className="rounded-full"
                />
              </figure>
              <div className="flex flex-col justify-center w-full flex-1">
                <p className="text-sm">Google</p>
                <p className="text-xs text-slate-500">+160 postagens</p>
              </div>
              <IoAddOutline size={20} className="colored-icon cursor-pointer" />
            </li>
          </ul>
          <div className="mt-8">
            <CtaButton href="#" label="Ver mais" />
          </div>
        </div>

        <div className="mt-8 border border-slate-200 bg-white rounded-lg py-4 px-4">
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

        <div className="mt-8 border border-slate-200 bg-white rounded-lg py-4 px-4">
          <h2 className="py-2 border-slate-200 border-b text-sm font-medium">
            Conecte-se com seus clientes
          </h2>
          <ul className="mt-4 flex flex-col gap-6">
          {allUsers?.slice(0, 3).map((user: UserProps, index: number) => (
            <div className="flex gap-3 items-center w-full" key={`${user.username}-${index}`}>
              <img src={user.picture} alt={`${user.username}-profile-picture`} className="w-8 h-8 rounded-full" />
              <article className="w-full flex-1">
                <span className="line-clamp-1 text-[12px] font-medium">{user.firstname} {user.lastname}</span>
                <p className="-mt-1 text-[10px] text-slate-500">{user.followers} seguidores</p>           
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

export default Sidebar;

"use client"

import { navbarLinks } from "@/constants/navbar";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import MiniNavbar from "./MiniNavbar";

interface NavbarLinkProps {
  label: string;
  href: string;
}

interface NavbarProps {
  transparent?: boolean;
  variant?: 'primary' | 'secondary'
}

const Navbar = ({ transparent, variant }: NavbarProps) => {
  const [showMiniNavbar, setShowMiniNavbar] = useState<boolean>(false)

  return (
    <nav
      className={`${transparent ? "bg-transparent" : null} ${
        variant === 'secondary' ? "bg-gradient-to-r from-slate-900 to-slate-800" : null
      } ${variant === 'primary' ? "bg-white" : null} fixed z-50 lg:px-12 px-4 py-5 w-full flex justify-center`}
    >
      <div className="max-w-7xl w-full flex justify-between gap-4 items-center">
        <Link className="pr-10" href={"/"}>
          <span className={`font-bold lg:text-3xl text-2xl ${variant === 'secondary' ? "text-white" : "text-slate-700"}`}>
            Projeto
            <span className="font-bold lg:text-3xl text-2xl text-[#5d74ff]">
              IFSP
            </span>
          </span>
        </Link>
        <div className="w-full lg:flex hidden">
          <ul className="flex w-full justify-around gap-6">
            {navbarLinks.map((link: NavbarLinkProps, index: number) => (
              <li key={`${link.label}-${index}`}>
                <Link href={link.href} className={`text-sm ${variant === 'secondary' ? "text-white" : "text-slate-700 navbar__link relative"}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-lg items-center flex justify-end">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <IoMenuOutline size={32} className={`ml-4 cursor-pointer ${variant === 'secondary' ? "white-icon" : "dark-icon"}`} onClick={() => setShowMiniNavbar(!showMiniNavbar)} />
          </SignedIn>
          <SignedOut>
            <div className="flex w-full gap-8 items-center justify-end">
              <Link href={"/sign-in"} className="">
                <button
                  type="button"
                  className="text-principal transition duration-300 hover:text-indigo-500"
                >
                  Login
                </button>
              </Link>
              <Link href={"/sign-up"}>
                <button
                  type="button"
                  className="ease-in-out bg-principal transition-all duration-300 hover:brightness-110 text-white rounded-3xl px-8 py-1"
                >
                  Cadastrar
                </button>
              </Link>
            </div>
          </SignedOut>
        </div>
      </div>

      {showMiniNavbar ? <MiniNavbar setShowMenu={setShowMiniNavbar} showMenu={showMiniNavbar} /> : null}
    </nav>
  );
};

export default Navbar;

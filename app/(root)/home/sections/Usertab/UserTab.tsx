"use client";

import { userTabLinks } from "@/constants/user-tab";
import React, { useEffect, useState } from "react";
import { CiGrid31 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { CiShop } from "react-icons/ci";

interface UserTabLink {
  icon: string;
  label: string;
  href: string;
}

const UserTab = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState<UserTabLink>({
    icon: "grid",
    label: "",
    href: "",
  });

  const icons: any = {
    grid: (
      <CiGrid31
        size={24}
        className={`${
          selectedTab?.icon === "grid" ? "colored-icon" : "gray-icon"
        }`}
      />
    ),
    people: (
      <CiUser
        size={24}
        className={`${
          selectedTab?.icon === "people" ? "colored-icon" : "gray-icon"
        }`}
      />
    ),
    video: (
      <CiVideoOn
        size={24}
        className={`${
          selectedTab?.icon === "video" ? "colored-icon" : "gray-icon"
        }`}
      />
    ),
    photo: (
      <CiImageOn
        size={24}
        className={`${
          selectedTab?.icon === "photo" ? "colored-icon" : "gray-icon"
        }`}
      />
    ),
    shop: (
      <CiShop
        size={24}
        className={`${
          selectedTab?.icon === "shop" ? "colored-icon" : "gray-icon"
        }`}
      />
    ),
  };

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full relative max-w-[275px] lg:block hidden drop-shadow-sm">
      <div className={`w-full sticky bg-white border border-slate-200 rounded-lg py-4 px-2 ${isScrolled ? 'top-24' : 'inset-0'}`}>
        <ul className="w-full flex flex-col">
          {userTabLinks.map((tab: UserTabLink, index: number) => (
            <li
              className="flex py-2 items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-zinc-100 hover:rounded-lg"
              key={`${tab.label}-${index}`}
              onClick={() => {
                setSelectedTab(tab);
                setSelectedIndex(index);
              }}
            >
              <figure
                className={`px-2 border-l-2 transition-all ease-in-out duration-100 ${
                  selectedIndex === index
                    ? "border-principal"
                    : "border-transparent"
                }`}
              >
                {icons[tab.icon]}
              </figure>
              <p
                className={`text-sm w-full transition-all ease-in-out duration-100 ${
                  selectedIndex === index
                    ? "text-principal font-medium"
                    : "text-slate-500"
                }`}
              >
                {tab.label}
              </p>
            </li>
          ))}
        </ul>
        <h2 className="mt-8 text-sm px-2 font-medium pb-2">
          Páginas que você curtiu
        </h2>
        <ul className="mt-2">
          <li className="flex gap-3 items-center transition-all duration-300 cursor-pointer rounded-lg hover:bg-slate-100 p-2">
            <span className="text-white bg-red-400 rounded-lg w-8 h-8 flex items-center justify-center">
              Br
            </span>
            <p className="text-sm text-slate-500">Brazilian Food</p>
          </li>
          <li className="flex gap-3 items-center transition-all duration-300 cursor-pointer rounded-lg hover:bg-slate-100 p-2">
            <span className="text-white bg-pink-400 rounded-lg w-8 h-8 flex items-center justify-center">
              Mk
            </span>
            <p className="text-sm text-slate-500">Marketing</p>
          </li>
          <li className="flex gap-3 items-center transition-all duration-300 cursor-pointer rounded-lg hover:bg-slate-100 p-2">
            <span className="text-white bg-lime-400 rounded-lg w-8 h-8 flex items-center justify-center">
              Vn
            </span>
            <p className="text-sm text-slate-500">Vendedores Br</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserTab;

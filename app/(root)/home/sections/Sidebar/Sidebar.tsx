"use client";

import CtaButton from "@/components/Button/CtaButton/CtaButton";
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

  return (
    <div className="w-full relative max-w-[275px]">
      <div
        className={`w-full sticky inset-0 ${isScrolled ? "top-24" : "inset-0"}`}
      >
        <div className="border border-slate-200 bg-white rounded-lg py-4 px-6">
          <h2 className="py-2 border-slate-200 border-b text-sm font-medium">
            Conheça outras empresas
          </h2>
          <ul className="w-full flex flex-col gap-6 mt-4">
            <li className="flex w-full gap-3 justify-between items-center ">
              <figure className="w-6 h-6">
                <img
                  src="https://logopng.com.br/logos/amazon-2.png"
                  alt="page-logo"
                  className="rounded-full w-full h-full"
                />
              </figure>
              <div className="flex flex-col justify-center w-full flex-1">
                <p className="text-sm">Amazon Brasil</p>
                <p className="text-xs text-slate-500">360 postagens</p>
              </div>
              <IoAddOutline size={20} className="colored-icon cursor-pointer" />
            </li>
            <li className="flex w-full gap-3 justify-between items-center ">
              <figure className="w-6 h-6">
                <img
                  src="https://logopng.com.br/logos/amazon-2.png"
                  alt="page-logo"
                  className="rounded-full w-full h-full"
                />
              </figure>
              <div className="flex flex-col justify-center w-full flex-1">
                <p className="text-sm">Amazon Brasil</p>
                <p className="text-xs text-slate-500">360 postagens</p>
              </div>
              <IoAddOutline size={20} className="colored-icon cursor-pointer" />
            </li>
            <li className="flex w-full gap-3 justify-between items-center ">
              <figure className="w-6 h-6">
                <img
                  src="https://logopng.com.br/logos/amazon-2.png"
                  alt="page-logo"
                  className="rounded-full w-full h-full"
                />
              </figure>
              <div className="flex flex-col justify-center w-full flex-1">
                <p className="text-sm">Amazon Brasil</p>
                <p className="text-xs text-slate-500">360 postagens</p>
              </div>
              <IoAddOutline size={20} className="colored-icon cursor-pointer" />
            </li>
            <li className="flex w-full gap-3 justify-between items-center ">
              <figure className="w-6 h-6">
                <img
                  src="https://logopng.com.br/logos/amazon-2.png"
                  alt="page-logo"
                  className="rounded-full w-full h-full"
                />
              </figure>
              <div className="flex flex-col justify-center w-full flex-1">
                <p className="text-sm">Amazon Brasil</p>
                <p className="text-xs text-slate-500">360 postagens</p>
              </div>
              <IoAddOutline size={20} className="colored-icon cursor-pointer" />
            </li>
          </ul>
          <div className="mt-8">
            <CtaButton href="#" label="Ver mais" />
          </div>
        </div>
        <div className="mt-8 border border-slate-200 bg-white rounded-lg py-4 px-6">
          <h2 className="py-2 border-slate-200 border-b text-sm font-medium">
            Artigos
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

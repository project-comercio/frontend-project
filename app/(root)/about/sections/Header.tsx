import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <section className="relative w-full flex justify-between lg:min-h-[720px]">
      <div className="lg:w-[50%] z-20 relative bg-gradient-to-r from-slate-950 to-slate-900 opacity-95 flex justify-end">
        <article className="w-full px-4 py-16 sm:p-12 lg:p-20 max-w-2xl">
          <p className="text-white text-center lg:text-left uppercase text-sm font-light tracking-widest">
            Artigos
          </p>
          <h2 className="mt-2 font-semibold text-center lg:text-left text-2xl lg:text-4xl text-white">
            Expanda a visibilidade da sua marca
          </h2>
          <p className="text-white mt-4 lg:text-base text-sm text-center lg:text-left">
            Veja nossos artigos, cursos e matérias de como valorizar a sua marca e se
            destacar cada vez mais o seu comércio no seu ramo.
          </p>
          <ul className="flex flex-col lg:items-start items-center gap-3 w-full mt-8">
            <li className="flex items-center gap-3">
              <FaRegStar size={20} className="white-icon" />
              <span className="text-sm lg:text-base text-white">  
                Visibilidade aumentada
              </span>
            </li>
            <li className="flex items-center gap-3">
              <IoBulbOutline size={20} className="white-icon" />
              <span className="text-sm lg:text-base text-white">
                Ideias e Novidades em Alta
              </span>
            </li>
            <li className="flex items-center gap-3">
              <IoPeopleOutline size={20} className="white-icon" />
              <span className="text-sm lg:text-base text-white">
                Oportunidades de Networking
              </span>
            </li>
          </ul>
          <div className="mt-8 lg:mt-12 flex justify-center lg:justify-start">
            <Link
              href={"#"}
              className="bg-principal text-white rounded-lg px-6 py-2 text-center text-xs lg:text-sm transition-all duration-300 hover:brightness-110 ease-out"
            >
              Quero saber mais
            </Link>
          </div>
        </article>
      </div>
      <div
        className=" absolute w-full bg-no-repeat bg-center bg-cover bg-fixed object-cover h-full"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      />
    </section>
  );
};

export default Header;

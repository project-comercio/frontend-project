import React from "react";
import Form from "./Form";
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <section className="relative w-full flex justify-center lg:min-h-[720px]">
      <div className="lg:w-full z-20 relative bg-gradient-to-r from-slate-950 to-slate-900 opacity-95 flex justify-center" />
      <div className="absolute z-30 w-full max-w-2xl lg:max-w-6xl flex lg:flex-row flex-col gap-8 lg:gap-16 px-4 py-16 sm:p-12 lg:p-20">
        <article className="w-full bg-opacity-100">
          <p className="text-white text-center lg:text-left uppercase text-sm font-light tracking-widest">
            Contato
          </p>
          <h2 className="mt-2 font-semibold text-center lg:text-left text-2xl lg:text-4xl text-white">
            Envie uma mensagem para nossa equipe!
          </h2>
          <p className="text-white mt-4 lg:text-base text-sm text-center lg:text-left">
            Tire dúvidas com nossos profissionais enviando um email através do formulário ao lado, além disso, você também pode contribuir com ideias!
          </p>
          <div className="text-center lg:text-left mt-10">
          <a href="https://api.whatsapp.com/send?phone=19982880116" target="_blank" rel="noopener noreferrer" className="relative px-10 py-5 bg-gray-900 rounded-2xl transition-colors duration-300 ease-in-out hover:bg-principal flex  items-center ">
          <FaWhatsapp className="text-3xl md:text-3xl mr-3 md:mr-3" />
              <span className="text-white text-xl md:text-1xl font-semibold ">FALE CONOSCO</span>
            </a>
          </div>
        </article>
        <Form />
      </div>
      <div
        className="absolute w-full bg-no-repeat bg-bottom bg-cover bg-fixed object-cover h-full"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      />
    </section>
  );
};

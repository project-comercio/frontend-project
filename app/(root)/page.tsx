"use client"

import Image from "next/image";
import Link from "next/link";
import { IoBulbOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { PiStrategyLight } from "react-icons/pi";
import { IoIosGitNetwork } from "react-icons/io";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/animations/motion";
import Navbar from "@/components/toolkit/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar variant="primary" />
      <main className="lg:px-12 px-4 min-h-[62vh] pt-20">
        <motion.section initial="hidden" animate="visible" variants={slideInFromLeft(0.75)} className="w-full py-12 lg:py-20 flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <div className="flex justify-between lg:flex-row flex-col lg:gap-0 gap-16">
              <div className="w-full items-center flex flex-col">
                <article className="w-full max-w-md">
                  <h1 className="font-semibold text-center lg:text-left text-2xl lg:text-4xl">
                    Conectando Pequenos Negócios Locais
                  </h1>
                  <p className="mt-2 text-base text-center lg:text-left">
                    Fortalecendo as Comunidades através de Recursos, Mentoria e
                    Networking"
                  </p>
                  <ul className="flex flex-col items-center lg:items-start gap-3 w-full mt-8">
                    <li className="flex items-center gap-3">
                      <FaRegStar size={20} className="colored-icon" />
                      <span className="text-sm lg:text-base">
                        Visibilidade aumentada
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <IoBulbOutline size={20} className="colored-icon" />
                      <span className="text-sm lg:text-base">
                        Ideias e Novidades em Alta
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <IoPeopleOutline size={20} className="colored-icon" />
                      <span className="text-sm lg:text-base">
                        Oportunidades de Networking
                      </span>
                    </li>
                  </ul>
                  <div className="mt-8 flex gap-4 lg:gap-8 items-center lg:flex-row flex-col">
                    <Link
                      href={"#"}
                      className="bg-principal text-white rounded-lg px-6 py-2 text-center text-sm transition-all duration-300 hover:brightness-110 ease-out"
                    >
                      Quero saber mais
                    </Link>
                    <Link
                      href={"#"}
                      className="text-principal transition-all duration-30 text-sm hover:text-indigo-600"
                    >
                      Ver dicas
                    </Link>
                  </div>
                </article>
              </div>
              <figure className="flex justify-center w-full">
                <Image
                  src="/home.svg"
                  alt="home-image"
                  width={400}
                  height={400}
                />
              </figure>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" animate="visible" variants={slideInFromTop}  className="w-full py-12 lg:py-20 flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <article className="w-full flex items-center flex-col">
              <span className="uppercase text-slate-500 text-base lg:text-lg">
                Nossas Features
              </span>
              <h2 className="text-2xl lg:text-4xl font-semibold mt-2">
                Expanda o seu négocio
              </h2>
            </article>
            <div className="flex lg:flex-row items-center lg:items-start flex-col mt-12 gap-8 justify-center w-full">
              <div className="max-w-xl lg:max-w-[290px] w-full bg-slate-100 rounded-lg lg:p-6 p-4 cursor-pointer transition-all duration-500 hover:scale-105">
                <IoIosGitNetwork size={32} className="colored-icon" />
                <p className="text-sm mt-4">
                  Amplie sua rede de contatos ao interagir com outras pessoas,
                  líderes comunitários e potenciais parceiros de negócios.
                </p>
                <FaArrowRightLong className="gray-icon mt-4" size={20} />
              </div>
              <div className="max-w-xl lg:max-w-[290px] w-full bg-slate-100 rounded-lg lg:p-6 p-4 cursor-pointer transition-all duration-500 hover:scale-105">
                <PiStrategyLight size={32} className="colored-icon" />
                <p className="text-sm mt-4">
                  Descubra estratégias eficazes de marketing digital e dicas
                  práticas para aumentar a visibilidade da sua marca.
                </p>
                <FaArrowRightLong className="gray-icon mt-4" size={20} />
              </div>
              <div className="max-w-xl lg:max-w-[290px] w-full bg-slate-100 rounded-lg lg:p-6 p-4 cursor-pointer transition-all duration-500 hover:scale-105">
                <FaFire size={32} className="colored-icon" />
                <p className="text-sm mt-4">
                  Fique por dentro das mais novas tendências do mercado
                  referente ao seu nicho, nós trazemos isso para você.
                </p>
                <FaArrowRightLong className="gray-icon mt-4" size={20} />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" animate="visible" variants={slideInFromRight(1)}  className="w-full py-12 lg:py-20 flex flex-col items-center">
          <div className="w-full max-w-4xl flex lg:flex-row flex-col items-center lg:items-start justify-between gap-12">
            <figure className="w-full flex-1">
              <Image
                src="https://media.istockphoto.com/id/1453843862/photo/business-meeting.jpg?s=612x612&w=0&k=20&c=4k9H7agmpn92B7bkUywvkK5Ckwm9Y8f8QrGs4DRDWpE="
                alt="increase-your-commerce"
                height={400}
                width={400}
                className="rounded-lg"
              />
            </figure>
            <article className="flex-1 w-full">
              <span className="text-principal text-xs lg:text-sm uppercase font-semibold">
                Crescimento
              </span>
              <h3 className="text-xl lg:text-2xl font-semibold">
                Expanda sua Empresa Local
              </h3>
              <p className="text-slate-500 mt-6">
                Explore nosso guia abrangente de recursos especialmente
                selecionados para impulsionar o sucesso de pequenos negócios em
                sua comunidade. De modelos de plano de negócios a ferramentas de
                marketing digital, estamos aqui para ajudá-lo a prosperar.
              </p>
            </article>
          </div>
          <div className="w-full max-w-4xl flex lg:flex-row flex-col-reverse items-center lg:items-start justify-between gap-12 lg:mt-20 mt-12">
            <article className="flex-1 w-full">
              <span className="text-principal text-xs lg:text-sm uppercase font-semibold">
                Marketing
              </span>
              <h3 className="text-xl lg:text-2xl font-semibold">
                Clientes ao seu Alcance
              </h3>
              <p className="text-slate-500 mt-6">
                Explore soluções inovadoras projetadas para aproximar a sua
                empresa de seus clientes e aumentar a eficiência do seu negócio.
                Adote tecnologia como uma ferramenta para otimizar sua operação
                e a sua visibilidade.
              </p>
            </article>
            <figure className="w-full flex-1">
              <Image
                src="https://t3.ftcdn.net/jpg/04/23/94/82/240_F_423948206_GUXFvsZauUj8yViPqtPIgvwn2rkGRpuX.jpg"
                alt="increase-your-commerce"
                height={400}
                width={400}
                className="rounded-lg"
              />
            </figure>
          </div>
        </motion.section>

        <motion.section initial="hidden" animate="visible" variants={slideInFromTop}  className="w-full flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <h2 className="lg:mt-24 lg:mb-20 mt-8 mb-8 w-full text-center font-[500] text-2xl lg:text-4xl cursor-default">
              Veja mais de{" "}
              <span className="font-[500] text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF]">
                100 artigos
              </span>{" "}
              sobre o que está <br />
              <span className="font-[500] text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF]">
                {" "}
                em alta
              </span>{" "}
              no mercado
            </h2>
          </div>
        </motion.section>
      </main>

      {/* <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Section 1 content...
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Section 2 content...
        </AccordionPanel>
      </AccordionItem>
    </Accordion> */}
    </>
  );
}

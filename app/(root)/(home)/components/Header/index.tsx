import { IoBulbOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <section className="w-full py-12 lg:py-20 flex flex-col items-center">
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
    </section>
  )
}

import { FaArrowRightLong } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { PiStrategyLight } from "react-icons/pi";
import { IoIosGitNetwork } from "react-icons/io";

export const Features: React.FC = () => {
  return (
    <section className="w-full py-12 lg:py-20 flex flex-col items-center">
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
    </section>
  )
}

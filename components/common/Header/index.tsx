import { HeaderProps } from './types'
import Image from 'next/image'

export const Header: React.FC<HeaderProps> = ({
  backgroundColor = 'bg-slate-100',
  backgroundImage,
  buttonText,
  title
}) => {
  return (
    <section
      className={`flex max-h-[620px] flex-col items-center overflow-hidden bg-slate-100 md:flex-row ${backgroundColor}`}
    >
      <div className="flex h-[400px] w-full flex-1 flex-col items-center justify-center px-8 py-12 2xl:ml-auto 2xl:max-w-[596px] 2xl:justify-start 2xl:px-0">
        <article className="flex max-w-[536px] flex-col items-center gap-4 text-center md:items-start lg:text-left">
          <h1 className="max-w-[480px] text-center text-3xl font-semibold md:text-left lg:max-w-full lg:text-5xl">
            {title}
          </h1>
          <button className="max-w-full md:max-w-fit ease-in-out text-sm bg-gradient-to-tr from-blue-700 to-blue-500 transition-all duration-300 hover:brightness-110 text-white rounded-md px-12 py-2">
            {buttonText}
          </button>
        </article>
      </div>
      <figure className="relative md:w-2/5 lg:h-auto 2xl:w-1/2">
        <Image
          alt={backgroundImage.alt}
          className="h-full object-cover lg:h-auto"
          height={684}
          src={backgroundImage.src}
          width={1272}
        />
      </figure>
    </section>
  )
}

import { Container } from "@/components/toolkit/Container"
import Image from "next/image"

export const Header: React.FC = () => {
  return (
    <section className="bg-slate-100">
      <Container data-cid="header-academy" className="w-full py-12 lg:py-20">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex items-center gap-12">
            <h1 className="max-w-[420px] text-2xl lg:text-4xl font-semibold">
              <span className="text-2xl lg:text-4xl text-blue-600 font-semibold">Impulsione o seu comércio</span> com nossa plataforma rica
              em conteúdo
            </h1>
            <figure className="flex justify-center w-full">
              <Image
                src="/academy.svg"
                alt="home-image"
                width={400}
                height={400}
              />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  )
}
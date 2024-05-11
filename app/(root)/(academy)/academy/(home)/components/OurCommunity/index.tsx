import { Container } from '@/components/toolkit/Container'
import Image from 'next/image'

export const OurCommunity: React.FC = () => {
  return (
    <section className="bg-slate-100">
      <Container data-cid="community-academy" className="w-full py-12 lg:py-20">
        <div className="w-full flex flex-col items-center">
          <div className="py-20 w-full flex justify-between gap-12">
            <figure className="w-full flex justify-center">
              <Image
                src={
                  ' https://developers.google.com/static/community/images/accelerators.jpg'
                }
                alt="community-image"
                className="object-cover rounded-md"
                width={550}
                height={500}
              />
            </figure>
            <article className="w-full">
              <h2 className="text-2xl lg:text-4xl font-semibold">
                Conheça a nossa comunidade
              </h2>
              <p className="mt-8 text-sm lg:text-base max-w-[420px]">
                Somos um hub de conteúdo desenvolvido especialmente para
                promover a troca de experiências entre profissionais e
                microempreendedores e o acesso a materiais técnicos e da mais
                alta qualidade.
                <span className="text-sm lg:text-base font-semibold">
                  Com as nossas iniciativas, você aprende e impulsiona o seu
                  comércio de várias maneiras
                </span>
                .
              </p>
              <button className="mt-8 text-sm bg-gradient-to-tr from-blue-600 to-blue-500 transition-all duration-300 hover:brightness-110 text-white rounded-md px-12 py-2">
                Quero saber mais
              </button>
            </article>
          </div>
        </div>
      </Container>
    </section>
  )
}

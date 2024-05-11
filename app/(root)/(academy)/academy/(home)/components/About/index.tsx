import { Container } from '@/components/toolkit/Container'

export const About: React.FC = () => {
  return (
    <section className="bg-white">
      <Container data-cid="about-academy" className="w-full py-12 lg:py-20">
        <div className="w-full flex flex-col items-center">
          <h2 className="font-semibold text-2xl lg:text-4xl">
            Sobre nossa plataforma
          </h2>
        </div>
      </Container>
    </section>
  )
}

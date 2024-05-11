import Image from "next/image"

export const ClientsCards: React.FC = () => {
  return (
    <section className="w-full py-12 lg:py-20 flex flex-col items-center">
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
    </section>
  )
}

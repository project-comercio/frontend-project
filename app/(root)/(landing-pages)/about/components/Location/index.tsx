import { CardItem } from "./Card";

export function Location() {
  return (
    <div className="w-full flex flex-col items-center">
      <article className="my-4">
        <p className="text-base text-slate-500 tracking-wide uppercase text-center">
          Nosso projeto
        </p>
        <h2 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-slate-700 sm:text-4xl">
          Conheça um pouco mais sobre a nossa iniciativa
        </h2>
      </article>

      <section className="mt-12 w-full flex justify-between gap-4 max-w-7xl bg-white border-slate-200 border rounded-md drop-shadow-md p-4">
        <figure className="w-full flex-1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2197.7504010287653!2d-47.4740612794637!3d-22.976717152348854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1713222813424!5m2!1spt-BR!2sbr" width="600" height="450" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </figure>
        <article className="flex flex-1 flex-col gap-4 w-full mt-2">
          <CardItem index={0} title="Impulsione o seu negócio" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe officia repudiandae aliquid corporis illo, maxime itaque possimus, non odit delectus vero eum quidem explicabo. Ea quam est excepturi beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iure qui, fugiat vitae, illum consequuntur assumenda aperiam nemo recusandae." />

          <CardItem index={0} title="Inovação e Tecnologia" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe officia repudiandae aliquid corporis illo, maxime itaque possimus, non odit delectus vero eum quidem explicabo. Ea quam est excepturi beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iure qui, fugiat vitae, illum consequuntur assumenda aperiam nemo recusandae." />

          <CardItem index={0} title="Tenha um marketing acertivo" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe officia repudiandae aliquid corporis illo, maxime itaque possimus, non odit delectus vero eum quidem explicabo. Ea quam est excepturi beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iure qui, fugiat vitae, illum consequuntur assumenda aperiam nemo recusandae." />
        </article>
      </section>
    </div>
  )
}

export const SeeMore: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center">
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
    </section>
  )
}

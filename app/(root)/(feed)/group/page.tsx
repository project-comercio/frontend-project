import Navbar from "@/components/Navbar/Navbar";
import { getMetaData } from "@/utils/getMetaData";

export async function generateMetadata() {
  return getMetaData({
    title: "Descobrir novos grupos",
    description: "Descubra grupos com publicações, artigos e conteúdos extremamente relevantes e tendências para o seu comércio.",
    image: ""
  })
}

export default function Page() {
  return (
    <>
      <Navbar variant='primary' />
      <main className='lg:px-8 pb-8 px-4 min-h-[62vh] pt-28 bg-[#fafafa] flex flex-col items-center'>
        teste
      </main>
    </>
  )
}

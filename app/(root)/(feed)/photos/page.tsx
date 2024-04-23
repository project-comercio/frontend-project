import Navbar from "@/components/Navbar/Navbar"
import { getMetaData } from "@/utils/getMetaData"
import Feed from "../home/components/Feed"

export async function generateMetadata() {
  return getMetaData({
    title: "Feed de Fotos - Descubra fotos publicadas pelas suas empresas favoritas",
    description: "Veja postagens de outras empresas referencias do seu nicho e veja o que está em alta por ai",
    image: ""
  })
}

export default function Photos() {
  return (
    <>
      <Navbar variant='primary' />
      <main className="lg:px-8 pb-8 px-4 min-h-[62vh] pt-28 bg-[#fafafa] flex flex-col items-center">
        <Feed />
      </main>
    </>
  )
}

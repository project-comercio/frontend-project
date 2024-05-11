import { DevelopmentDisclaimer } from "@/components/common/DevelopmentDisclaimer";
import { getMetaData } from "@/utils/getMetaData";
import { NextPage } from "next";
import { Header } from "./components/Header";
import { DiscoverAcademy } from "./components/DiscoverAcademy";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { OurCommunity } from "./components/OurCommunity";

export async function generateMetadata() {
  return getMetaData({
    title: 'Academy - Página inicial',
    description: 'Faça parte da nossa plataforma de treinamentos e cursos para valorizar e impulsionar o seu comércio',
    image: ''
  })
}

const Page: NextPage = () => {
  return (
    <main className="pt-20">
      <Header />
      <DiscoverAcademy />
      <About />
      <OurCommunity />
      <Features />
    </main>
  )
}

export default Page
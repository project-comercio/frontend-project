import { getMetaData } from "@/utils/getMetaData";
import { NextPage } from "next";
import { Header } from "./components/Header";
import { DiscoverAcademy } from "./components/DiscoverAcademy";
import { About } from "./components/About";
import { OurCommunity } from "./components/OurCommunity";
import { Achievements } from "./components/Achievements";
import { Features } from "./components/Features";

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
      <Achievements />
    </main>
  )
}

export default Page

import { Header } from "./components/Header";
import { ClientsCards } from "./components/ClientsCards";
import { Features } from "./components/Features";
import { SeeMore } from "./components/SeeMore";
import { getMetaData } from "@/utils/getMetaData";
import { NextPage } from "next";
import Navbar from "@/components/toolkit/Navbar/Navbar";

export async function generateMetadata() {
  return getMetaData({
    title: 'ProjetoIFSP - Página inicial',
    description:
      'Expanda a visibilidade da sua marca',
    image: ''
  })
}

const Page: NextPage = () => {
  return (
    <>
      <Navbar variant="primary" />
      <main className="lg:px-12 px-4 min-h-[62vh] pt-20">
        <Header />
        <Features />
        <ClientsCards />
        <SeeMore />
      </main>
    </>
  );
}

export default Page

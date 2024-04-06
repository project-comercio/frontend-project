import React from "react";
import Marketing from "./sections/Marketing";
import Header from "./sections/Header";
import Navbar from "@/components/Navbar/Navbar";
import HeadComponent from "@/components/HeadComponent/HeadComponent";

const page = () => {
  return (
    <>
      <HeadComponent
        title='Página Inicial'
        description='Veja com detalhes tudo que a nossa empresa pode fornecer para você! Garanto que seus resultados e sua visilidade irão crescer exponencialmente!'
        opengraph=''
      />
      <Navbar variant="secondary" />
      <main className="min-h-[62vh] pt-16">
        <Header />
        <Marketing />
        <Marketing />
        <Marketing />
      </main>
    </>
  );
};

export default page;

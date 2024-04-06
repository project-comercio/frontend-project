import React from "react";
import Topics from "./sections/Topics";
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
      <Navbar />
      <main className="lg:px-12 px-4 min-h-[62vh] pt-20">
        <Topics />
      </main>
    </>
  );
};

export default page;

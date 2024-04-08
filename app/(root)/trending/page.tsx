import React from "react";
import Topics from "./sections/Topics";
import Navbar from "@/components/Navbar/Navbar";
import { getMetaData } from "@/utils/getMetaData";

export async function generateMetadata() {
  return getMetaData({
    title: "Titulo",
    description: "Descrição",
    image: ""
  })
}

const page = () => {
  return (
    <>
      <Navbar variant='primary' />
      <main className="lg:px-12 px-4 min-h-[62vh] pt-20">
        <Topics />
      </main>
    </>
  );
};

export default page;

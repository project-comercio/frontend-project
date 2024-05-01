import React from "react";
import Topics from "./components/Topics";
import { getMetaData } from "@/utils/getMetaData";
import Navbar from "@/components/toolkit/Navbar/Navbar";

export async function generateMetadata() {
  return getMetaData({
    title: "Em alta",
    description: "Descrição",
    image: ""
  })
}

export default function Page() {
  return (
    <>
      <Navbar variant='primary' />
      <main className="lg:px-12 px-4 min-h-[62vh] pt-20">
        <Topics />
      </main>
    </>
  );
};

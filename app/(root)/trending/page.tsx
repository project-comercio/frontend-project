import React from "react";
import Topics from "./sections/Topics";
import Navbar from "@/components/Navbar/Navbar";
import { getMetaData } from "@/utils/getMetaData";

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

import React from "react";
import Marketing from "./sections/Marketing";
import Header from "./sections/Header";
import Navbar from "@/components/Navbar/Navbar";
import { getMetaData } from "@/utils/getMetaData";

export async function generateMetadata() {
  return getMetaData({
    title: "Artigos",
    description: "Descrição",
    image: ""
  })
}

export default function Page() {
  return (
    <>
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

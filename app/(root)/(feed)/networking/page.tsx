
import Navbar from "@/components/toolkit/Navbar/Navbar";
import { getMetaData } from "@/utils/getMetaData";

export async function generateMetadata() {
  return getMetaData({
    title: "Networking",
    description: "Descubra outras empresas referencias do seu nicho e veja o que está em alta por ai",
    image: ""
  })
}

export default function Page() {
  return (
    <>
      <Navbar />
    </>
  )
}
import { getMetaData } from "@/utils/getMetaData";

export async function generateMetadata() {
  return getMetaData({
    title: "Perfil Empresarial",
    description: "Descrição",
    image: ""
  })
}
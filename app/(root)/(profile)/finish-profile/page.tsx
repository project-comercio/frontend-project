import { getMetaData } from "@/utils/getMetaData"
import Steps from "./Steps"

export async function generateMetadata() {
  return getMetaData({
    title: "Finalizar Perfil",
    description: "Adicione outras informações relevantes para terminar o seu cadastro",
    image: ""
  })
}

export default function FinishProfile() {
  return (
    <main className="py-12 lg:py-20 px-4 lg:px-12 flex justify-center">
      <Steps />
    </main>
  )
}
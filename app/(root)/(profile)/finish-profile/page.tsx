import { getMetaData } from "@/utils/getMetaData";
import Steps from "./Steps";
import Navbar from "@/components/Navbar/Navbar";

export async function generateMetadata() {
	return getMetaData({
		title: "Finalizar Perfil",
		description:
			"Adicione outras informações relevantes para terminar o seu cadastro",
		image: "",
	});
}

export default function FinishProfile() {
	return (
		<>
			<Navbar />
			<main className="py-12 lg:py-36 px-4 lg:px-12 flex justify-center">
				<Steps />
			</main>
		</>
	);
}

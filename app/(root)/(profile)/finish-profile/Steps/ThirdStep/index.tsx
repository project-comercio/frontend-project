import Image from "next/image";
import type { StepWrapperProps } from "../types";
import { useRouter } from "next/navigation";

export default function ThirdStep({
	setCurrentStep,
	handleChange,
	data,
}: StepWrapperProps) {
	const router = useRouter();

	return (
		<div className="w-full flex flex-col items-center">
			<div className="mt-8 lg:mt-16 w-full max-w-xl flex flex-col items-center">
				<Image
					alt="finish-initial-config-form"
					src="/finish.svg"
					width={350}
					height={350}
				/>
				<h2 className="text-2xl font-semibold mt-12">Cadastro Concluído!</h2>
				<p className="mt-1 text-slate-500 text-center texte-sm">
					Bem-vindo! Agora você realmente faz parte e está inserido
					completamente na nossa plataforma, faça muitas conexões e impulsione
					seu comércio
				</p>
        {JSON.stringify(data)}
				<div
					className="w-full bg-principal text-white px-6 py-3 text-sm rounded-xl text-center mt-4 lg:mt-8 transition-all duration-500 hover:brightness-110 cursor-pointer"
					onClick={() => router.push("/home")}
				>
					Prosseguir
				</div>
			</div>
		</div>
	);
}

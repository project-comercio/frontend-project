import { useState } from "react";
import type { ItemProps, StepWrapperProps } from "../types";
import { isValidCPF } from "@/utils/functions/cpfValidator";
import { cpfMask } from "@/utils/functions/cpfMask";
import { toast } from "react-toastify";
import { CNPJMask } from "@/utils/functions/cnpjMask";
import { cellphoneMask } from "@/utils/functions/cellphoneMask";
import { NICHOS_MERCADO } from "@/constants/nichos";

export default function SecondStep({
	setCurrentStep,
	handleChange,
	data,
}: StepWrapperProps) {
	const [type, setType] = useState<string>("undefined");
	const [formatedCPF, setFormatedCpf] = useState<string>("");
	const [cellphone, setCellphone] = useState<string>("");

	const finishProfileConfig = async () => {
		try {
			console.log("finalizado");
		} catch (error) {
			throw new Error(
				"Não foi possível finalizar a edição do perfil do usuário",
			);
		}
	};

	const verifyCPF = async (cpf: string) => {
		const valid: boolean = await isValidCPF(cpf);

		const formatedCPF: string = await cpfMask(cpf);
		setFormatedCpf(formatedCPF);

		if (valid) {
			handleChange("cpf", formatedCPF);
		} else {
			if (!valid) {
				toast.error("CPF Inválido");
			}
		}
	};

	const verifyCellphone = async (value: string) => {
		const formatedCellphone: string = await cellphoneMask(value);
		setCellphone(formatedCellphone);
		handleChange("cellphone", formatedCellphone);
	};

	const verifyCNPJ = async (value: string) => {
		const formatedCPNJ: string = await CNPJMask(value);
		handleChange("cnpj", formatedCPNJ);
	};

	return (
		<div className="w-full flex flex-col items-center">
			<div className="mt-8 lg:mt-16 w-full max-w-xl">
				<div className="w-full mb-4 lg:mb-8">
					<label>
						Tipo da conta <span className="text-principal">*</span>
					</label>
					<p className="text-slate-500 text-xs mb-2 lg:mb-4">
						É possível alterar o tipo da sua conta futuramente:
					</p>
					<select
						className="w-full text-sm outline-none bg-slate-100 rounded-md px-4 py-3 text-slate-500 mt-1"
						name="accountType"
						id="accountType"
						onChange={(e) => {
							handleChange("type", e.target.value);
							setType(e.target.value);
						}}
						required
					>
						<option value="">Selecione o tipo da sua conta</option>
						<option value="pessoal">Pessoal</option>
						<option value="empresarial">Empresarial</option>
					</select>
				</div>
				{type === "pessoal" ? (
					<>
						<div className="w-full mb-4 lg:mb-8">
							<label htmlFor="telefone" className="text-lg">
								Número do Celular
							</label>
							<p className="text-slate-500 text-xs mb-2 lg:mb-4">
								Insira seu número de celular com o DDD abaixo:
							</p>
							<input
								type="text"
								name="telefone"
								id="telefone"
								maxLength={15}
								minLength={11}
								className="w-full text-sm outline-none bg-slate-100 rounded-md px-4 py-3 text-slate-500 mt-1"
								value={cellphone}
								spellCheck={false}
								autoComplete="off"
								placeholder="Qual é o seu número de celular"
								onChange={(e) => verifyCellphone(e.target.value)}
							/>
						</div>
						<div className="w-full mb-4 lg:mb-8">
							<label htmlFor="telefone" className="text-lg">
								Sua Área
							</label>
							<p className="text-slate-500 text-xs mb-2 lg:mb-4">
								Qual é a sua atual / futura área de atuação:
							</p>
							<select
								className="w-full text-sm outline-none bg-slate-100 rounded-md px-4 py-3 text-slate-500 mt-1"
								name="jobTitle"
								id="jobTitle"
								onChange={(e) => handleChange("jobTitle", e.target.value)}
								required
							>
								<option value="">Selecione o tipo da sua conta</option>
								{NICHOS_MERCADO.map((item: ItemProps, index: number) => (
									<option value={item.value} key={`${item.label}-${index}`}>
										{item.label}
									</option>
								))}
							</select>
						</div>
						<div className="w-full mb-4 lg:mb-8">
							<label htmlFor="telefone" className="text-lg">
								Preferência de conteúdo
							</label>
							<p className="text-slate-500 text-xs mb-2 lg:mb-4">
								O que você deseja consumir na nossa plataforma?:
							</p>
							<input
								type="text"
								name="motivation"
								id="motivation"
								maxLength={15}
								minLength={11}
								className="w-full text-sm outline-none bg-slate-100 rounded-md px-4 py-3 text-slate-500 mt-1"
								spellCheck={false}
								autoComplete="off"
								placeholder="O que você deseja consumir na nossa plataforma?"
								onChange={(e) => handleChange("motivation", e.target.value)}
							/>
						</div>
					</>
				) : type === "empresarial" ? (
					<>
						<div className="w-full mb-4 lg:mb-8">
							<label htmlFor="telefone" className="text-lg">
								Nicho de mercado
							</label>
							<p className="text-slate-500 text-xs mb-2 lg:mb-4">
								Qual é a especialidade do seu comércio?
							</p>
							<select
								className="w-full text-sm outline-none bg-slate-100 rounded-md px-4 py-3 text-slate-500 mt-1"
								name="marketType"
								id="marketType"
								onChange={(e) => handleChange("marketType", e.target.value)}
								required
							>
								<option value="">Selecione o nicho do seu mercado</option>
								{NICHOS_MERCADO.map((item: ItemProps, index: number) => (
									<option value={item.value} key={`${item.label}-${index}`}>
										{item.label}
									</option>
								))}
							</select>
						</div>
						<div className="w-full">
							<label htmlFor="cpf" className="text-lg">
								CPF
							</label>
							<p className="text-slate-500 text-xs mb-2 lg:mb-4">
								Lembre-se que você deve inserir um CPF válido
							</p>
							<input
								type="text"
								name="cpf"
								id="cpf"
								minLength={11}
								maxLength={14}
								className="w-full outline-none text-sm bg-slate-100 px-4 py-3 text-slate-500 rounded-md mt-1 mb-8"
								autoComplete="off"
								spellCheck={false}
								value={formatedCPF}
								placeholder="Qual é o CPF do dono do comércio?"
								onChange={(e) => verifyCPF(e.target.value)}
							/>
						</div>
						<div className="w-full">
							<label htmlFor="rg" className="text-lg">
								CNPJ
							</label>
							<p className="text-slate-500 text-xs mb-2 lg:mb-4">
								Lembre-se que você deve inserir um CNPJ válido
							</p>
							<input
								type="text"
								name="cnpj"
								id="cnpj"
								minLength={8}
								maxLength={11}
								className="w-full outline-none text-sm bg-slate-100 px-4 py-3 text-slate-500 rounded-md mt-1 mb-8"
								autoComplete="off"
								spellCheck={false}
								value={data?.cnpj}
								placeholder="Qual é o RG do dono do comércio?"
								onChange={(e) => verifyCNPJ(e.target.value)}
							/>
						</div>
						<div className="w-full mb-4 lg:mb-8">
							<label htmlFor="telefone" className="text-lg">
								Número do Celular
							</label>
							<p className="text-slate-500 text-xs mb-2 lg:mb-4">
								Insira seu número de celular com o DDD abaixo:
							</p>
							<input
								type="text"
								name="telefone"
								id="telefone"
								maxLength={15}
								minLength={11}
								className="w-full outline-none text-sm bg-slate-100 px-4 py-3 text-slate-500 rounded-md mt-1 mb-2"
								value={cellphone}
								spellCheck={false}
								autoComplete="off"
								placeholder="Qual é o celular do comércio"
								onChange={(e) => verifyCellphone(e.target.value)}
							/>
						</div>
					</>
				) : null}
				<div className="w-full flex items-center justify-center">
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						className="w-full bg-principal text-white px-6 py-3 text-sm rounded-xl text-center mt-4 lg:mt-8 transition-all duration-500 hover:brightness-110 cursor-pointer"
						onClick={() => setCurrentStep(3)}
					>
						Próxima Etapa
					</div>
				</div>
			</div>
		</div>
	);
}

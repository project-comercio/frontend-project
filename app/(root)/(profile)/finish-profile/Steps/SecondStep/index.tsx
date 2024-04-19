import { useState } from "react";
import type { StepWrapperProps } from "../types";
import { isValidCPF } from "@/utils/functions/cpfValidator";
import { cpfMask } from "@/utils/functions/cpfMask";
import { toast } from "react-toastify";
import { CNPJMask } from "@/utils/functions/cnpjMask";
import { cellphoneMask } from "@/utils/functions/cellphoneMask";

export default function SecondStep({
	setCurrentStep,
	handleChange,
	data
}: StepWrapperProps) {
	const [type, setType] = useState<string>("undefined");
	const [formatedCPF, setFormatedCpf] = useState<string>("")
	
	const verifyCPF = async (cpf: string) => {
    const valid: boolean = await isValidCPF(cpf);

    const formatedCPF: string = await cpfMask(cpf);
    setFormatedCpf(formatedCPF);

    if (valid) {
      handleChange('cpf', formatedCPF);
    } else {
      if (!valid) {
        toast.error("CPF Inválido");
      }
    }
  };

	const verifyCellphone = async (value: string) => {
    const formatedCellphone: string = await cellphoneMask(value);
    handleChange('cellphone', formatedCellphone);
  };

  const verifyCNPJ = async (value: string) => {
    const formatedCPNJ: string = await CNPJMask(value);
    handleChange('cnpj', formatedCPNJ);
  };

	return (
		<div className="w-full flex flex-col items-center">
			<div className="mt-8 lg:mt-16 w-full max-w-xl">
				<div className="w-full mb-4 lg:mb-8">
					<h3>
						Tipo da conta <span className="text-principal">*</span>
					</h3>
					<select
						className="w-full outline-none bg-slate-100 rounded-md px-4 py-1 text-slate-500 mt-1"
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
					<div className="w-full mb-4 lg:mb-8">
						teste
					</div>
				) : type === 'empresarial' ? (
					<div className="w-full mb-4 lg:mb-8">
						<label htmlFor="cpf" className="text-lg">
							CPF
						</label>
						<input
							type="text"
							name="cpf"
							id="cpf"
							minLength={11}
							maxLength={14}
							className="w-full text-sm outline-none bg-slate-100 px-4 py-1 text-slate-500 rounded-md mt-1 mb-8"
							autoComplete="off"
							spellCheck={false}
							value={formatedCPF}
							placeholder="Qual é o CPF do dono do restaurante?"
							onChange={(e) => verifyCPF(e.target.value)}
							required
						/>
						<label htmlFor="rg" className="text-lg">
							CNPJ
						</label>
						<input
							type="text"
							name="cnpj"
							id="cnpj"
							minLength={8}
							maxLength={11}
							className="w-full outline-none text-sm bg-slate-100 px-4 py-1 text-slate-500 rounded-md mt-1 mb-8"
							autoComplete="off"
							spellCheck={false}
							value={data?.cnpj}
							placeholder="Qual é o RG do dono do restaurante?"
							onChange={(e) => verifyCNPJ(e.target.value)}
							required
						/>
					</div>
				) : null}
			</div>
		</div>
	);
}

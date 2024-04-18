"use client";

import React, { useState } from "react";
import type { StepWrapperProps } from "../types";
import { CIDADES_BRASIL } from "@/constants/json-cidades";

export default function FirstStep({
	setCurrentStep,
	handleChange,
}: StepWrapperProps) {
	const [cidadesList, setCidadesList] = useState<string[]>([]);

	const buscaCidadesPorEstado = (estado: string) => {
		const estadoSelecionado = CIDADES_BRASIL.estados.find(
			(sigla) => sigla.sigla === estado,
		);
		const cidades = estadoSelecionado.cidades;
		return cidades;
	};

	const handleChangeEstado = (e) => {
		const estado = e.target.value;
		handleChange("state", estado); // Vai retonar SP por exemplo
		const cidadesDoEstado = buscaCidadesPorEstado(estado); // Vai buscar as cidades que pertencem aquela sigla
		setCidadesList(cidadesDoEstado);
	};

	return (
		<div className="w-full flex flex-col items-center">
			<h2 className="text-2xl font-medium text-center">
				Estamos quase lá, só faltam algumas informações!
			</h2>
			<p className="text-sm text-slate-500 mt-1 text-center">
				Informe mais informações referentes a você para gerar um ambiente
				exclusivo para você.
			</p>
			<div className="mt-8 lg:mt-16 w-full max-w-xl">
				<div className="w-full mb-4 lg:mb-8">
					<h3>
						País <span className="text-principal">*</span>
					</h3>
					<select
						className="w-full bg-slate-100 rounded-md px-4 py-1 text-slate-500 mt-1"
						name="pais"
						id="pais"
						onChange={(e) => handleChange("country", e.target.value)}
						required
					>
						<option value="">Selecione um país</option>
						<option value="Brasil">Brasil</option>
					</select>
				</div>
				<div className="w-full mb-4 lg:mb-8">
					<h3>
						Estado / Distrito <span className="text-principal">*</span>
					</h3>
					<select
						className="w-full bg-slate-100 rounded-md px-4 py-1 text-slate-500 mt-1"
						onChange={handleChangeEstado}
						name="estado"
						id="estado"
						required
					>
						<option value="">Selecione um estado</option>
						{CIDADES_BRASIL.estados.map((estado) => (
							<option key={estado.sigla} value={estado.sigla}>
								{estado.nome}
							</option>
						))}
					</select>
				</div>
				<div className="w-full mb-4 lg:mb-8">
					<h3>
						Cidade <span className="text-principal">*</span>
					</h3>
					<select
						className="w-full bg-slate-100 rounded-md px-4 py-1 text-slate-500 mt-1"
						name="cidade"
						id="cidade"
						onChange={(e) => handleChange("city", e.target.value)}
						required
					>
						<option value="">Selecione uma cidade</option>
						{cidadesList.map((cidade) => (
							<option key={cidade} value={cidade}>
								{cidade}
							</option>
						))}
					</select>
				</div>
				<div className="w-full bg-principal text-white px-6 py-2 text-sm rounded-xl text-center mt-4 lg:mt-8 transition-all duration-500 hover:brightness-125 cursor-pointer">
					Próxima Etapa
				</div>
			</div>
		</div>
	);
}

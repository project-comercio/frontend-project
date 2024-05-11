"use client";

import DoughnutChart from "@/components/toolkit/Charts/DoughnutChart/DoughnutChart";

export default function Report() {
	return (
		<section className="w-full bg-white rounded-lg border border-slate-200 p-4 lg:p-8">
			<h2 className="font-semibold text-sm lg:text-base">Relatório Semanal</h2>
			<p className="text-xs text-slate-500">
				Tenha um feedback em forma de gráficos com relação à sua atividade
				durante essa semana na nossa plataforma!
			</p>
			<div className="w-full flex justify-center items-center mt-8">
				<div className="w-[300px] h-[300px]">
					<DoughnutChart
						chartData={{
							labels: [
								"Alimentício",
								"Tecnologia",
								"Moda",
								"Mobiliário",
								"Livraria",
							],
							datasets: [
								{
									label: "Nichos na qual você se interessou",
									data: [6, 10, 1, 3, 7],
									backgroundColor: [
										"#1d4ed8",
										"#2563eb",
										"#3b82f6",
										"#60a5fa",
										"#93c5fd",
									],
									hoverOffset: 4,
								},
							],
						}}
					/>
				</div>
			</div>
		</section>
	);
}

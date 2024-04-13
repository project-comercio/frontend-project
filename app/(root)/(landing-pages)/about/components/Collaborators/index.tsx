import { COLLABORATORS } from "@/constants/colaborators";
import type { CollaboratorProps } from "./Collaborator/types";
import { Collaborator } from "./Collaborator";

export const Collaborators: React.FC = () => {
	return (
		<section className="bg-gray-200 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
						Nossos Colaboradores
					</h2>
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						Conheça quem faz parte da nossa equipe
					</p>
				</div>
				<div className="mt-10">
					<div className="flex flex-wrap justify-between">
						{COLLABORATORS.map((collaborator: CollaboratorProps, index: number) => (
							<Collaborator key={`${collaborator.name}-${index}`} {...collaborator} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

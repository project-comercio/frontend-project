import { COLLABORATORS } from "@/constants/colaborators";
import type { CollaboratorProps } from "./Collaborator/types";
import { Collaborator } from "./Collaborator";

export const Collaborators: React.FC = () => {
	return (
		<section className="px-4 py-12">
			<div className="max-w-7xl mx-auto px-4 lg:px-0">
				<article className="w-full">
					<p className="text-base text-center text-slate-500 tracking-wide uppercase">
						Nossos Colaboradores
					</p>
					<h2 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-slate-700 sm:text-4xl text-center">
						Conheça quem faz parte da nossa equipe
					</h2>
				</article>
				<div className="mt-10 w-full">
					<div className="grid gap-8 lg:gap-4 flex-wrap place-items-center lg:place-content-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full">
						{COLLABORATORS.map(
							(collaborator: CollaboratorProps, index: number) => (
								<Collaborator
									key={`${collaborator.name}-${index}`}
									colaborator={collaborator}
								/>
							),
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

import type { CollaboratorCardProps } from "./types";

export const Collaborator: React.FC<CollaboratorCardProps> = ({
	colaborator,
}) => {
	return (
		<div className="bg-white py-8 px-4 w-full border flex flex-col items-center border-slate-200 drop-shadow-md rounded-md">
			<div
				className="max-w-20 max-h-20 w-full h-full bg-cover bg-center rounded-full mx-auto"
				style={{
					backgroundImage: `url(${colaborator.imageUrl})`,
					width: "150px",
					height: "150px",
				}}
			/>
			<h3 className="text-slate-700 text-lg font-semibold mt-4">
				{colaborator.name}
			</h3>
			<p className="text-blue-600 lg:text-sm text-xs">{colaborator.email}</p>
			<p className="text-gray-500 lg:text-sm text-xs mt-3 w-full h-full">
				{colaborator.description}
			</p>
			<div className="flex flex-wrap gap-2 mt-4 w-full">
				{colaborator.skills?.map((skill: string, index: number) => (
					<span
						className="bg-blue-100 text-blue-600 rounded-full px-4 py-1 text-center text-[10px]"
						key={`${skill}-${
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							index
						}`}
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
};

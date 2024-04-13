import type { CollaboratorProps } from "./types";

export const Collaborator: React.FC<CollaboratorProps> = ({
	imageUrl,
	name,
	description,
}) => {
	return (
		<div className="w-full md:w-1/2 lg:w-1/4 p-4">
			<div className="flex justify-between">
				<div className="bg-white p-7 border border-slate-200 drop-shadow-md rounded-md">
					<div
						className="w-24 h-24 bg-cover bg-center rounded-full mx-auto"
						style={{
							backgroundImage: `url(${imageUrl})`,
							width: "150px",
							height: "150px",
						}}
					/>
					<h3 className="text-gray-800 text-xl font-semibold mt-4">{name}</h3>
					<p className="text-gray-600 mt-2">{description}</p>
				</div>
			</div>
		</div>
	);
};
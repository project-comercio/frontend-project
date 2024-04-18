import Link from "next/link";
import type { CollaboratorCardProps } from "./types";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export const Collaborator: React.FC<CollaboratorCardProps> = ({
	colaborator,
}) => {
	return (
		<div className="bg-white h-full py-8 px-4 w-full border flex flex-col items-center border-slate-200 drop-shadow-md rounded-md">
			<figure className="w-20 h-20 flex items-center justify-center rounded-full">
				<img
					className="w-full h-full rounded-full object-cover"
					alt="user-profile-image"
					src={colaborator.imageUrl}
				/>
			</figure>
			<h3 className="text-slate-700 text-lg font-semibold mt-4">
				{colaborator.name}
			</h3>
			<p className="text-blue-600 lg:text-sm text-xs">{colaborator.email}</p>
			<p className="text-gray-500 lg:text-sm text-xs mt-3 w-full flex-1">
				{colaborator.description}
			</p>
			<div className="flex flex-wrap gap-2 mt-4 w-full">
				{colaborator.skills?.slice(0, 6).map((skill: string, index: number) => (
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
			<div className="mt-6 flex w-full flex-wrap gap-3">
				{colaborator.github ? (
					<Link href={colaborator.github} target="_blankF">
						<FaGithub
							size={24}
							className="cursor-pointer transition-300 transition-all hover:scale-[101%] gray-icon"
						/>
					</Link>
				) : null}
				{colaborator.linkedin ? (
					<Link href={colaborator.linkedin} target="_blank">
						<FaLinkedin
							size={24}
							className="cursor-pointer transition-300 transition-all hover:scale-[101%] gray-icon"
						/>
					</Link>
				) : null}
				{colaborator.instagram ? (
					<FaInstagram
						size={24}
						className="cursor-pointer transition-300 transition-all hover:scale-105 gray-icon"
					/>
				) : null}
				{colaborator.facebook ? (
					<FaFacebook
						size={24}
						className="cursor-pointer transition-300 transition-all hover:scale-[101%] gray-icon"
					/>
				) : null}
			</div>
		</div>
	);
};

import type { CardProps } from "../types";
import { MdLightbulbOutline } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FiTarget } from "react-icons/fi";

export function CardItem({ index, title, description }: CardProps) {
	const icons = [
		<HiOutlineRocketLaunch key={"rocket-icon"} size={24} />,
		<MdLightbulbOutline key={"bulb-icon"} size={24} />,
		<FiTarget key={"target-icon"} size={24} />,
	];

	return (
		<div className="flex flex-col">
			<div className="flex gap-3 items-center w-full">
				<figure>{icons[index]}</figure>
				<span className=" font-medium">Tenha um marketing acertivo</span>
			</div>
			<p className="text-xs lg:text-sm text-slate-500 mt-2 w-full text-justify">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe
				officia repudiandae aliquid corporis illo, maxime itaque possimus, non
				odit delectus vero eum quidem explicabo. Ea quam est excepturi beatae.
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
				iure qui, fugiat vitae
			</p>
		</div>
	);
}

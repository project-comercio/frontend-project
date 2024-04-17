import { CardProps } from "../types";
import { MdLightbulbOutline } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FiTarget } from "react-icons/fi";

export function CardItem({index, title, description}: CardProps) {

  const icons = [
    <HiOutlineRocketLaunch size={24} className="colored-icon" />,
    <MdLightbulbOutline size={24} className="colored-icon" />,
    <FiTarget size={24} className="colored-icon" />
  ]

  return (
    <div className="flex flex-col">
    <div className="flex gap-3 items-center w-full">
      <figure>
        {icons[index]}
      </figure>
      <span className="text-principal font-medium">Tenha um marketing acertivo</span>
    </div>
    <p className="text-xs lg:text-sm text-slate-500 mt-2 w-full text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe officia repudiandae aliquid corporis illo, maxime itaque possimus, non odit delectus vero eum quidem explicabo. Ea quam est excepturi beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iure qui, fugiat vitae, illum consequuntur assumenda aperiam nemo recusandae.</p>
  </div>
  )
}

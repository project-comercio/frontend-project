import React from 'react'
import { FcDocument } from "react-icons/fc";

const SidebarArticle = () => {
  return (
    <div className='w-full py-2 flex gap-2 items-center transition-all duration-300 hover:bg-slate-100 cursor-pointer rounded-lg'>
      <FcDocument size={24} />
      <p className='flex-1 line-clamp-2 text-xs text-slate-500'>Veja como a loja do samuel aumentou suas vendas em 238% em apenas 2 meses</p>
    </div>
  )
}

export default SidebarArticle
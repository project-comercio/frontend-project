import Link from 'next/link'
import React from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import { BrazilFlagIcon } from '@/assets/Flags/BrazilFlagIcon'
import { LevelOne } from '@/assets/levels/LevelOne'

export const AcademyNavbar: React.FC = () => {
  return (
    <nav className="bg-slate-900 fixed z-50 lg:px-12 px-4 py-5 w-full flex justify-center">
      <div className="px-[10%] w-full flex justify-between gap-4 items-center">
        <div className="w-full flex gap-8 items-center">
          <IoMenuOutline size={32} className="ml-4 cursor-pointer white-icon" />
          <Link className="pr-10" href={'/'}>
            <span className="font-bold lg:text-3xl text-2xl text-white">
              Our
              <span className="font-bold lg:text-3xl text-2xl text-[#5d74ff]">
                Academy
              </span>
            </span>
          </Link>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="flex w-full items-center justify-end gap-8 lg:gap-12">
            <div className="px-3 flex items-center gap-2 cursor-pointer py-1 rounded-md bg-slate-800">
              <BrazilFlagIcon className="w-6" />
              <span className="text-white text-sm">BR</span>
            </div>
            <Link href={'/sign-in'}>
              <button type="button" className="text-white text-sm">
                Já sou membro
              </button>
            </Link>
            <Link href={'/sign-up'}>
              <button
                type="button"
                className="ease-in-out text-sm bg-gradient-to-tr from-blue-700 to-blue-500 transition-all duration-300 hover:brightness-110 text-white rounded-md px-12 py-2"
              >
                Cadastrar
              </button>
            </Link>
						<div className='bg-white border-blue-600 cursor-pointer border flex justify-center items-center rounded-full w-12 h-12'>
							<span className='text-xl text-blue-600'>0</span>
						</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

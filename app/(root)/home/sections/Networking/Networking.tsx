import { COMPANIES_DATA } from '@/constants/companies-data'
import { CompanyDataProps } from '@/types'
import React from 'react'

const Networking = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <div className="border border-slate-200 bg-white rounded-lg py-4 px-4">
        <div className='flex w-full flex-wrap gap-4 justify-between'>
          {COMPANIES_DATA.map((company: CompanyDataProps, index: number) => (
            <div className='w-full flex flex-col place-items-center max-w-[200px] p-4 border border-slate-100 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer'>
              <figure className='h-8 w-8'>
                <img className='rounded-full w-auto h-auto' src={company.logo} />
              </figure>
              <h2 className='mt-4 text-sm font-semibold'>{company.companyName}</h2>
              <p className='mt-1 text-xs text-slate line-clamp-3'>{company.companyDescription}</p>
              <button className="w-full mt-4 text-white rounded-full px-4 py-1 text-xs bg-principal text-center transition-all duration-300 hover:brightness-105">
                Enviar convite
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Networking

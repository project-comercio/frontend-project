import { COMPANIES_DATA } from '@/constants/companies-data'
import { CompanyDataProps } from '@/types'
import React from 'react'

const Networking = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <div className="border border-slate-200 bg-white rounded-lg py-4 px-4">
        <div className='grid xl:grid-cols-3 grid-cols-2 lg:grid-cols-1 w-full gap-4'>
          {COMPANIES_DATA.map((company: CompanyDataProps, index: number) => (
            <div className='w-full flex xl:flex-col lg:gap-4 xl:gap-0 gap-0 lg:flex-row flex-col place-items-center p-4 border border-slate-100 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer'>
              <figure className='h-8 w-8'>
                <img className='rounded-full w-auto h-auto' alt='company-logo' src={company.logo} />
              </figure>
              <article className='flex-1'> 
                <h2 className='mt-4 text-sm font-semibold'>{company.companyName}</h2>
                <p className='mt-1 text-xs text-slate line-clamp-3'>{company.companyDescription}</p>
              </article>
              <button type='button' className="lg:hidden flex xl:flex w-full mt-4 text-white rounded-full px-4 py-1 text-xs bg-principal text-center transition-all duration-300 hover:brightness-105">
                Seguir
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Networking

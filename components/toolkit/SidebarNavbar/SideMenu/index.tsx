'use client'
import { signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

import { HamburgerButton } from './HamburgerButton'
import { SideMenuProps } from './types'

export const SideMenu: React.FC<SideMenuProps> = ({ navigationList, copy }) => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const handleToggleSideMenu = () => {
    setIsOpen(isOpen => !isOpen)
  }

  const handleSignOut = () => {
    signOut({
      callbackUrl: '/'
    })
  }

  return (
    <div>
      <HamburgerButton isOpen={isOpen} onClick={handleToggleSideMenu} />
        {navigationList.map((navigation, index) => (
          <div className="pt-6" key={`${navigation?.title}-${index}`}>
            <section className="flex flex-col gap-2 py-6">
              {navigation.title && (
                <h5 className="px-4 text-sm font-normal uppercase text-slate-400">
                  {navigation.title}
                </h5>
              )}
              <ul className="flex w-full flex-col">
                {navigation.items.map(({ title, href }, index) => (
                  <li className="w-full" key={`${title}-${index}`}>
                    <a
                      className="flex px-4 py-3 duration-default hover:bg-slate-100"
                      href={href}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            <div className="px-4">
              <div className="flex w-full border-b border-slate-100"></div>
            </div>
          </div>
        ))}
    </div>
  )
}

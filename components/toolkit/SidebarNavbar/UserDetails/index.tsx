'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

import { ChevronDown } from '@/assets/Icons/Toolkit/ChevronDown'
import { Logout } from '@/assets/Icons/Toolkit/Logout'
import { Menu, Transition } from '@headlessui/react'

import { UserProfileThumb } from '../../UserProfileThumb'
import { UserDetailsProps } from './types'

export const UserDetails: React.FC<UserDetailsProps> = ({ user, copy }) => {
  const pathname = usePathname()

  const handleSignOut = () => {
    signOut({
      callbackUrl: '/'
    })
  }

  const commonItemClassName =
    'w-full rounded-sm p-2 py-1.5 text-left text-base duration-default hover:bg-slate-100'

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center gap-2 duration-default hover:opacity-85">
          {({ open }) => (
            <>
              <UserProfileThumb size="small" user={user} />
              <ChevronDown
                className={`w-4 text-slate-50 duration-default ${open ? '-rotate-180' : ''}`}
              />
            </>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-xl shadow-slate-700/15 focus:outline-none">
          <div className="flex flex-col gap-0.5 p-1">
            {copy.items.map(({ label, href }, index) => (
              <Menu.Item key={`${label}-${index}`}>
                <Link
                  className={`${commonItemClassName} ${pathname === href ? 'pointer-events-none font-semibold' : ''}`}
                  href={href}
                >
                  {label}
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item>
              <button
                className={`flex items-center justify-center gap-2 text-sm text-blue-600  ${commonItemClassName}`}
                onClick={handleSignOut}
              >
                <Logout className="w-4" />
                {copy.buttonLogout.label}
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

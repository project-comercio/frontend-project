'use client'


import { checkIsPublicRoute } from '@/utils/auth/check-route';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react'
import { UserProvider } from './UserContext';
import ToastMessage from '@/components/toolkit/Config/ToastMessage';
import Footer from '@/components/toolkit/Footer/Footer';

const PrivateRouteContext = createContext<any>(undefined)

export const PrivateRouteProvider = ({ children }: { children: React.ReactNode }) => {

  const path = usePathname();
  const isPublic = checkIsPublicRoute(path);

  return (
    <>
      {isPublic ? (
        <>
          <SignedIn>
            {children}
            <Footer />
          </SignedIn>
          <SignedOut>
            {children}
            <Footer />
          </SignedOut>
        </>
      ) : (
        <SignedIn>
          <UserProvider>
            <ToastMessage />
            {children}
            <Footer />
          </UserProvider>
        </SignedIn>
      )}
    </>
  )
}

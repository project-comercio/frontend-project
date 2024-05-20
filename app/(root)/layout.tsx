import { ClerkProvider } from '@clerk/nextjs'
// import { ChakraProvider } from "@chakra-ui/react";

import { PrivateRouteProvider } from '@/context/PrivateRouteContext/PrivateRouteContext'
import { ApolloContext } from '@/context/ApolloContext/ApolloContext'

import { getMetaData } from '@/utils/getMetaData'
import ToastMessage from '@/components/toolkit/Config/ToastMessage'
import { RootLayoutProps } from './types'

import '../../styles/globals.scss'
import 'animate.css'

export async function generateMetadata() {
  return getMetaData({
    title: 'ProjetoIFSP - Página inicial',
    description: 'Expanda a visibilidade da sua marca',
    image: ''
  })
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { locale }
}) => {
  return (
    <ClerkProvider>
      <html lang={locale}>
        <body className="overflow-x-hidden text-slate-700 selection:bg-[#899edb] selection:text-white">
          <ApolloContext>
            {/* <ChakraProvider> */}
            <ToastMessage />
            <PrivateRouteProvider>{children}</PrivateRouteProvider>
            {/* </ChakraProvider> */}
          </ApolloContext>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout

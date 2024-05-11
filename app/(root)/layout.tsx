
import { getMetaData } from "@/utils/getMetaData";

import { PrivateRouteProvider } from "@/context/PrivateRouteContext";
import { ApolloContext } from "@/context/ApolloContext";

import { ClerkProvider } from "@clerk/nextjs";
import { ChakraProvider } from "@chakra-ui/react";
import ToastMessage from "@/components/toolkit/Config/ToastMessage";

import "../../styles/globals.scss";

export async function generateMetadata() {
  return getMetaData({
    title: 'ProjetoIFSP - Página inicial',
    description:
      'Expanda a visibilidade da sua marca',
    image: ''
  })
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt">
        <body className="overflow-x-hidden text-slate-700 selection:bg-[#899edb] selection:text-white">
          <ApolloContext>
            <ChakraProvider>
              <ToastMessage />
              <PrivateRouteProvider>
                {children}
              </PrivateRouteProvider>
            </ChakraProvider>
          </ApolloContext>
        </body>
      </html>
    </ClerkProvider>
  );
}

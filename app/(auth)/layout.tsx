import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import "../../styles/globals.scss"

export const metadata: Metadata = {
  title: "Project",
  description: "Expanda a visibilidade da sua marca"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='pt'>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
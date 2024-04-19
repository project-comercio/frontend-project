"use client";

import type { Metadata } from "next";

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { checkIsPublicRoute } from "@/utils/auth/check-route";
import { ChakraProvider } from "@chakra-ui/react";

import "../../styles/globals.scss";
import Footer from "@/components/Footer/Footer";
import { UserProvider } from "@/context/UserContext";
import { ApolloContext } from "@/context/ApolloContext";
import ToastMessage from "@/components/Config/ToastMessage";

export default function RootLayout({
	children,
}: Readonly<{
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	children: React.ReactNode | any;
}>) {
	const metadata: Metadata = {
		title: "ProjetoIFSP - Página inicial",
		description: "Expanda a visibilidade da sua marca",
	};

	const path = usePathname();
	const isPublic = checkIsPublicRoute(path);

	return (
		<ClerkProvider>
			<html lang="pt">
				<body className="selection:bg-[#899edb] selection:text-white">
					<ApolloContext>
						<ChakraProvider>
							<ToastMessage />
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
						</ChakraProvider>
					</ApolloContext>
				</body>
			</html>
		</ClerkProvider>
	);
}

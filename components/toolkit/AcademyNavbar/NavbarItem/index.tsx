import type { NavbarItemProps } from "../types";
import Link from "next/link";
import React from "react";

export const NavbarItem: React.FC<NavbarItemProps> = ({ link }: NavbarItemProps) => {
	return (
		<li
		>
			<Link
				href={link.href}
				className="text-sm text-white"
			>
				{link.label}
			</Link>
		</li>
	);
}

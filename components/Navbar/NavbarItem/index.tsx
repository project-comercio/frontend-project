import { revalidateTag } from "next/cache";
import type { NavbarItemProps } from "../types";
import Link from "next/link";

export default function NavbarItem({ link, variant }: NavbarItemProps) {
	return (
		<li
		>
			<Link
				href={link.href}
				className={`text-sm ${
					variant === "secondary"
						? "text-white"
						: "text-slate-700 navbar__link relative"
				}`}
			>
				{link.label}
			</Link>
		</li>
	);
}

import { FaInstagram } from "react-icons/fa";
import { BsBrowserSafari } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

export function Socials() {
	return (
		<section className="w-full flex flex-col items-center mt-12 px-4">
			<article className="my-4">
				<p className="text-base text-slate-500 tracking-wide uppercase text-center">
					Redes Sociais
				</p>
				<h2 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-slate-700 sm:text-4xl">
					Apoie a nossa instituição
				</h2>
			</article>
			<article className="flex gap-6 sm:flex-nowrap flex-wrap w-full max-w-7xl justify-between mt-8">
				<div className="flex gap-3 items-center w-full bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3.5px] px-4 py-2 transition-all duration-300 hover:brightness-125 cursor-pointer">
					<FaInstagram size={20} className="white-icon" />
					<span className="text-white">Instagram</span>
				</div>
				<div className="flex gap-3 items-center w-full bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3.5px] px-4 py-2 transition-all duration-300 hover:brightness-125 cursor-pointer">
					<FaFacebookSquare size={20} className="white-icon" />
					<span className="text-white">Facebook</span>
				</div>
				<div className="flex gap-3 items-center w-full bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3.5px] px-4 py-2 transition-all duration-300 hover:brightness-125 cursor-pointer">
					<BsYoutube size={20} className="white-icon" />
					<span className="text-white">Youtube</span>
				</div>
				<div className="flex gap-3 items-center w-full bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3.5px] px-4 py-2 transition-all duration-300 hover:brightness-125 cursor-pointer">
					<BsBrowserSafari size={20} className="white-icon" />
					<span className="text-white">Website</span>
				</div>
			</article>
		</section>
	);
}

import { footerLinks } from "@/constants/footer";
import Link from "next/link";
import React from "react";

interface FooterLinkProps {
  title: string;
  links: LinkProps[];
}

interface LinkProps {
  label: string;
  href: string;
}

const Footer = () => {
  return (
    <footer className="absolute w-full">
      <div className="border-zinc-100 bg-white border-t-2 min-h-[360px] flex w-full pt-16 flex-col sm:flex-row">
        <div className="w-full xs:mb-12 flex flex-col items-center xs:justify-center">
        <span className="font-bold lg:text-3xl text-xl">
          Commu
          <span className="font-bold lg:text-3xl text-xl text-principal">
            Co
          </span>
        </span>
          <p className="mt-2">Impulsionando sua empresa</p>
          <p className="text-sm text-slate-500">Se torne referência no seu nicho</p>
        </div>
        <div className="w-full flex gap-6 flex-wrap sm:flex-nowrap mt-16 sm:mt-0">
          {footerLinks.map((link: FooterLinkProps, index: number) => (
            <div
              key={`${link.title}-${index}`}
              className="w-full flex flex-col gap-6 text-base min-w-[170px] justify-center items-center sm:justify-normal sm:items-start"
            >
              <span className="font-semibold text-xl">
                {link.title}
              </span>
              {link.links.map((link: LinkProps, index: number) => (
                <Link
                  key={`${link.label}-${index}`}
                  href={link.href}
                  className="text-slate-500 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

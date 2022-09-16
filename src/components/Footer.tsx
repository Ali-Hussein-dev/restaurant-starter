import * as React from "react";
import useTranslation from "next-translate/useTranslation";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { useRestCtx } from "../hooks";

const _links = {
  legal: [
    {
      href: "https://www.google.com",
      label: "Imprint",
    },
    {
      href: "https://www.google.com",
      label: "Privacy Policy",
    },
    {
      href: "https://www.google.com",
      label: "Terms of Use",
    },
    {
      href: "https://www.google.com",
      label: "Cookie Policy",
    },
  ],
  company: [
    {
      href: "https://www.google.com",
      label: "About us",
    },
    {
      href: "https://www.google.com",
      label: "Contact",
    },
    {
      href: "https://www.google.com",
      label: "Jobs",
    },
    {
      href: "https://www.google.com",
      label: "Press kit",
    },
  ],
};

const icons = {
  instagram: BsInstagram,
  facebook: BsFacebook,
  youtube: BsYoutube,
  tripadvisor: FaTripadvisor,
};
const Icon = ({ name }: { name: keyof typeof icons }) => {
  const ReactIcon = icons[name];
  return <ReactIcon size="20" />;
};
//======================================
export const Footer = () => {
  const { t } = useTranslation("common");
  const {
    footer: { links, name },
  } = useRestCtx();
  //======================================return
  return (
    <div className="relative ">
      <div className="container mx-auto text-base-content">
        {/* <footer className="grid px-2 py-5 grid-cols-2 text-xl md:grid-cols-4 footer">
          <div>
            <span className="footer-title">Company</span>
            {links.company.map((link) => (
              <Link
                key={link.label}
                href={dummyPage || link.href}
                className="link link-hover"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <span className="footer-title">Legal</span>
            {links.legal.map((link) => (
              <Link
                key={link.label}
                href={dummyPage || link.href}
                className="link link-hover"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </footer> */}
        <footer className="px-1 pt-4 pb-8 border-t border-gray-500 md:flex-row md:justify-between gap-y-3 footer col-center ">
          <div className="items-center grid-flow-col">
            <p className="text-lg font-bold">
              @<time>{new Date().getFullYear()}</time> {name}
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              {links.social.map((item) => {
                return (
                  <a
                    href={item.href}
                    key={item.name}
                    className="link link-hover text-slate-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon name={item.name as keyof typeof icons} />
                  </a>
                );
              })}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

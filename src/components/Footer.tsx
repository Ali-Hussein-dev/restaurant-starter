import * as React from "react";
import useTranslation from "next-translate/useTranslation";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
// import Link from "next/link";

const links = {
  social: [
    {
      name: "tripadvisor",
      icon: FaTripadvisor,
      href: "https://tripadvisor.com",
    },
    {
      name: "instagram",
      icon: BsInstagram,
      href: "https://www.instagram.com",
    },
    {
      name: "facebook",
      icon: BsFacebook,
      href: "https://www.facebook.com",
    },
    {
      name: "youtube",
      icon: BsYoutube,
      href: "https://www.youtube.com",
    },
  ],
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

//======================================
export const Footer = () => {
  const dummyPage = "/dummy";
  const { t } = useTranslation("common");
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
        <footer className="container px-2 pt-5 pb-10 border-t md:px-4 border-base-100 footer row-between">
          <div className="items-center grid-flow-col">
            <p className="text-lg font-bold">
              @<time>{new Date().getFullYear()}</time> Your Restaurant
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              {links.social.map((item) => (
                <a
                  href={item.href}
                  key={item.name}
                  className="link link-hover text-slate-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon size="25" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

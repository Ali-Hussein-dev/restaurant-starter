import type { NextPage } from "next";
import * as React from "react";
import Link from "next/link";
const gridItems = [
  { href: "/black", label: "black" },
  { href: "/luxury", label: "luxury" },
  { href: "/lemonade", label: "lemonade" },
  { href: "/night", label: "night" },
];
//----------------------------------------------------------------------
const Home: NextPage = () => {
  return (
    <div className="min-h-screen col-center">
      <section className="w-full max-w-md px-1 py-10 bg-base-300">
        <ul className="mx-auto space-y-3 col-center w-52">
          {gridItems.map((item) => (
            <li key={item.href} className="btn w-full rounded">
              <Link
                href={{
                  pathname: "/[theme]",
                  query: { theme: item.href.slice(1) },
                }}
                passHref
              >
                <a className="capitalize card-title">{item.label} Theme</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

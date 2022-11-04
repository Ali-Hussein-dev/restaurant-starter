import type { NextPage } from "next";
import * as React from "react";
import Link from "next/link";
const gridItems = [
  { href: "/template", label: "template" },
  {
    href: "/template-2",
    label: "template 2",
  },
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
                  pathname: "/[id]",
                  query: { id: item.href.slice(1) },
                }}
                passHref
              >
                <span className="capitalize card-title">
                  {item.label} Theme
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

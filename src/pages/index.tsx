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
      <section className="bg-base-300 py-10 px-1 w-full max-w-md">
        <ul className="space-y-3 col-center w-52 mx-auto">
          {gridItems.map((item) => (
            <li key={item.href} className="btn rounded w-full">
              <Link href={item.href}>
                <a className="card-title capitalize">{item.label} Theme</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

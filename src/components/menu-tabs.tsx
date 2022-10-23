import { Card, GridLayout, Tabs } from ".";
import * as React from "react";
import { ProductT } from "../types/restaurant";
import { useRestCtx } from "../hooks";
import { CgChevronRightO } from "react-icons/cg";

const Panel = ({ products }: { products: ProductT[] }) => {
  return (
    <GridLayout
      items={products.map((product, i) => (
        <Card
          key={product.name}
          index={i + 1}
          variant={product.name ? "with-text" : "no-text"}
          {...product}
        />
      ))}
    />
  );
};

//======================================
export const MenuTabs = () => {
  const {
    menuTabs: { list, title, href },
  } = useRestCtx();
  //======================================return
  return (
    <section id="#menu" className="container pb-3 mx-auto col-center">
      <h2 className="mb-2 h2">{title}</h2>
      <div className="w-11/12 lg:w-8/12 ">
        <Tabs
          panels={list.map((obj) => (
            <Panel products={obj.products} key={obj.label} />
          ))}
          tabButtons={list.map((tab) => ({ label: tab.label }))}
        />
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          type="button"
          className="btn my-2 text-xl normal-case duration-500 gap-x-2 bg-base-300 row-center hover:scale-105"
          rel="noreferrer"
        >
          Check Menu <CgChevronRightO className="mt-1 " />
        </a>
      )}
    </section>
  );
};

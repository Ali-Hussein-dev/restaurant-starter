import { GridLayout, Tabs } from ".";
import * as React from "react";
import Image from "next/image";
import { ImagesListT } from "../types/restaurant";
import { useRestCtx } from "../hooks";
// import { CgChevronRightO } from "react-icons/cg";
const Panel = ({ images }: { images: ImagesListT }) => {
  return (
    <GridLayout
      items={images.map((image, ii) => (
        <div key={ii} className="relative aspect-video md:aspect-square">
          <Image
            layout="fill"
            src={image.src}
            alt="image"
            className="object-cover rounded-2xl"
          />
        </div>
      ))}
    />
  );
};

//======================================
export const MenuTabs = () => {
  const {
    menuTabs: { list, title },
  } = useRestCtx();
  //======================================return
  return (
    <section id="#menu" className="container pb-3 mx-auto col-center">
      <h2 className="mb-2 h2">{title}</h2>
      <div className="w-11/12 lg:w-8/12 ">
        <Tabs
          panels={list.map((obj) => (
            <Panel images={obj.images} key={obj.label} />
          ))}
          tabButtons={list.map((tab) => ({ label: tab.label }))}
        />
      </div>
      {/* <button
        type="button"
        className="btn my-2 text-xl normal-case gap-x-2 bg-base-300 row-center"
      >
        Complete Menu <CgChevronRightO className="mt-1 " />
      </button> */}
    </section>
  );
};

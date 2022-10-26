import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { Disclosure } from "@headlessui/react";
import { useScroll } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import * as React from "react";
import useTranslation from "next-translate/useTranslation";
import { useRestCtx } from "../hooks";
//----------------------------------------------------------------------LinksList
const LinksList = () => {
  const {
    header: { links },
  } = useRestCtx();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-10 lg:gap-x-20">
      {links.map((link, i) => (
        <ScrollLink
          to={link.href}
          activeClass="active"
          smooth
          key={i}
          className="btn text-lg font-bold uppercase bg-transparent border-none btn-sm"
        >
          {t(`navbar.${link.label}`)}
        </ScrollLink>
      ))}
    </div>
  );
};
//----------------------------------------------------------------------Navbar
export const Navbar = () => {
  const ref = React.useRef<HTMLHeadingElement>();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useScroll();
  React.useEffect(() => scrollY.onChange(() => setY(scrollY.get())), [scrollY]);
  return (
    <>
      <Disclosure
        as="nav"
        ref={() => ref}
        className={`sticky top-0 z-10 ${
          y > height ? "bg-slate-900/20 backdrop-blur-lg" : ""
        }`}
      >
        {({ open: isOpen }) => (
          <>
            <div className="container mx-auto">
              <div className="h-16 md:row-center row-between">
                <div className="flex items-center">
                  {/* <div className="flex-shrink-0">
                    <Link href="/">
                      <Image
                        className="block w-auto h-12"
                        src="/logo.png"
                        loading="eager"
                        alt="logo"
                        width={50}
                        height={50}
                      />
                    </Link>
                  </div> */}
                  <div className="xs:hidden">
                    {/* //----------------------------------------------------------------------desktop */}
                    <LinksList />
                  </div>
                </div>
                {/* //----------------------------------------------------------------------mobile */}
                <div
                  className={`flex sm:hidden ${
                    y > height ? "backdrop-blur-lg" : ""
                  }`}
                >
                  {/* Mobile menu button */}
                  <Disclosure.Button className="btn inline-flex items-center justify-center border-none bg-inherit btn-circle">
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                      <AiOutlineClose
                        className="block w-6 h-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <AiOutlineMenuFold
                        className="block w-6 h-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="py-2 sm:hidden bg-base-100/90">
              <div className="px-2 pt-2 pb-3 space-y-1 ">
                <LinksList />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

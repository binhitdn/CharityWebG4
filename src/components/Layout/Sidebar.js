import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Sidebar({ show, setter }) {
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const className = `bg-green-600 w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40${
    isDesktop ? " hidden" : ""
  }`;
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  const MenuItem = ({ icon, name, route }) => {
    const colorClass =
      router.pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <NextLink href={route}>
        <a
          onClick={() => {
            setter((oldVal) => !oldVal);
          }}
          className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
        >
          <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
          <div>{name}</div>
        </a>
      </NextLink>
    );
  };

  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="p-2 flex">
          <NextLink href="/">
            <div>
              {/*eslint-disable-next-line*/}
              {/* <img src={logo.src} alt="Company Logo" width={300} height={300} /> */}
            </div>
          </NextLink>
        </div>
        <div className="flex flex-col">
          <MenuItem name="Home" route="/" />
          <MenuItem name="Achievements" route="/achievements" />
          <MenuItem name="Contributors" route="/contributors" />
          <MenuItem name="Contact" route="/contact" />
          <MenuItem name="Blog" route="/blog" />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}

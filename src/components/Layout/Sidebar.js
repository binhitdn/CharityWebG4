// src/components/Layout/Sidebar.js

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Dropdowns from "../Dropdown";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaMobileAlt, FaRegClock } from "react-icons/fa";

export default function Sidebar({ show, setter }) {
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    {
      name: t("navbar.home"),
      link: "/",
    },
    {
      name: t("navbar.achievements"),
      link: "/achievements",
    },
    {
      name: t("navbar.contributors"),
      link: "/contributors",
    },
    {
      name: t("navbar.blog"),
      link: "/blog",
    },
    {
      name: t("navbar.contact"),
      link: "/contact",
    },
  ];

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

  const className = `bg-green-600 w-1/2 transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40${
    isDesktop ? " hidden" : ""
  }`;
  const appendClass = show ? " ml-0" : " ml-[-50%]" + " md:ml-0";

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
          className={`no-underline font-semibold
          flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
          style={{ textAlign: "left" }}
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
      <div className={`${className}${appendClass}` + " p-4 flex flex-col"}>
        <Dropdowns i18n={i18n} />
        <div className="p-2 flex">
          <NextLink href="/">
            <div>
              {/*eslint-disable-next-line*/}
              {/* <img src={logo.src} alt="Company Logo" width={300} height={300} /> */}
            </div>
          </NextLink>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            {navItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={item.icon}
                name={item.name}
                route={item.link}
              />
            ))}
          </div>
          <div>
            <div className="flex flex-row space-x-2">
              <FaMapMarkerAlt className="w-5 h-5 text-white" />
              <p className="text-sm">{t("navbar.address")}</p>
            </div>
            <div className="flex flex-row space-x-2">
              <FaMobileAlt className="w-5 h-5 text-white" />
              <p className="text-sm"> (0481) 123 987 2411</p>
            </div>
            <div className="flex flex-row space-x-2">
              <FaRegClock className="w-5 h-5 text-white" />
              <p className="text-sm">Mon-Sat: 07:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}

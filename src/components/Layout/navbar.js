import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import "../../../node_modules/flag-icons/css/flag-icons.min.css";

const Navbar = ({ toggleSidebar }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
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

  return (
    <div>
      <div style={{ backgroundColor: "#01470c" }} className="mobile-hidden">
        <div className="container mx-auto lg:flex lg:flex-row  lg:justify-between justify-center items-center space-y-2  text-white py-3 w-full">
          <div>
            <div
              className="lg:flex lg:flex-row flex flex-col justify-center items-center space-x-12 lg:space-y-0 space-y-2"
              style={{ backgroundColor: "#01470c" }}
            >
              <div className="flex flex-row space-x-2">
                <FaMapMarkerAlt className="w-5 h-5 text-white" />
                <p>{t("navbar.address")}</p>
              </div>
              <div className="flex flex-row space-x-2">
                <FaMobileAlt className="w-5 h-5 text-white" />
                <p> (0481) 123 987 2411</p>
              </div>
              <div className="flex flex-row space-x-2">
                <FaRegClock className="w-5 h-5 text-white" />
                <p>Mon-Sat: 07:00 - 17:00</p>
              </div>
            </div>
          </div>
          <div className="ml-4">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-green-500 text-white text-xl font-bold rounded-lg p-2 shadow-lg"
            >
              <option value="en">English</option>
              <option value="vi">Vietnamese</option>
              <option value="fr">French</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
          <div className="flex flex-row space-x-4  justify-center items-center ">
            <FaFacebook className="w-6 h-6 text-white" />
            <FaInstagram className="w-6 h-6 text-white" />
            <FaWhatsapp className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <nav className="px-2 sm:px-4 py-2" style={{ backgroundColor: "#037415" }}>
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a href="#" className="flex">
              <div className="flex flex-row space-x-2 justify-center items-center">
                <Image src="/logo.png" width={70} height={70} />
                <p className="text-white text-2xl font-bold">Charity</p>
              </div>
            </a>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white hover:text-white hover:bg-yellow-600 border-2 border-yellow-500   rounded-3xl  px-5 py-2.5 text-center mr-3 md:mr-0 "
            >
              {t("navbar.donate")}
            </button>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>
                    <a
                      href="#"
                      className={`block py-2 pr-4 pl-3 text-white  md:hover:text-yellow-500 md:p-0 ${
                        router.pathname === item.link ? "text-yellow-600" : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

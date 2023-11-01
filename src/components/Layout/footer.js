import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneSquareAlt,
  FaVoicemail,
  FaCalendarWeek,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import COLORS from "../../constant/color";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation("translationFooter");
  return (
    <div style={{ backgroundColor: COLORS.secondary }}>
      <div
        className=" py-16 px-16"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <div className="container mx-auto flex flex-col space-y-24 ">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-white">{t("footer.address-title")}</p>
                <p className="text-white font-medium">{t("footer.address")}</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-white">{t("footer.phone")}</p>
                <p className="text-white font-medium">+84 123 123 124</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-white">{t("footer.working_title")}</p>
                <p className="text-white font-medium">{t("footer.working")}</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="col-span-1 space-y-8">
              <Image src="/logo.png" width={100} height={100} />

              <p className="text-white">{t("footer.mokuteki")}</p>
            </div>
            <div className="col-span-1 space-y-8"></div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-white font-medium">{t("footer.mokuteki")}</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-white  font-light" />
                  <p className="text-white">{t("footer.address")}</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-white " />
                  <p className="text-white">(0481) 123 987 2411</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhoneSquareAlt className="w-6 h-6 text-white " />
                  <p className="text-white">(0481) 123 987 2412</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-white " />
                  <p className="text-white"> contact@autoride.com</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaCalendarWeek className="w-6 h-6 text-white " />
                  <p className="text-white"> {t("footer.working")}</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-white font-medium">SUBSCRIBE</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="binh@gmail.com"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-blue-300 font-medium   w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-8 container mx-auto flex flex-row justify-between"
        style={{
          backgroundColor: COLORS.secondary,
          borderTop: "1px solid #ccc",
        }}
      >
        <p className="text-white  font-weight">
          © 2023 Charity. All rights reserved. Designed by 21JIT{" "}
        </p>
        <div className="flex flex-row space-x-3">
          <FaFacebook className="w-5 h-5 text-white" />
          <FaInstagram className="w-5 h-5 text-white" />
          <FaWhatsapp className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};
export default Footer;

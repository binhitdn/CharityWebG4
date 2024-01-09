import React from "react";
import { FaPhoneAlt, FaMapMarkedAlt, FaRegClock, FaMapMarkerAlt, FaPhone, FaVoicemail, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import COLORS from "../../constant/color";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("translationFooter");

  return (
    <div style={{ backgroundColor: COLORS.secondary }}>
      <div className="py-16 px-16" style={{ backgroundColor: COLORS.secondary }}>
        <div className="container mx-auto flex flex-col space-y-24">
          <div className="grid lg:grid-cols-3 gap-1">
            <div className="col-span-1 lg:col-span-1 space-y-8 lg:space-y-8">
              <div className="col-span-1 lg:col-span-1 flex flex-row items-center space-x-3 lg:mt-30">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image src="/logo.png" width={100} height={100} />
                </div>
                <p className="text-white">SMILE EYE CHARITY</p>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-white font-light" />
                  <p className="text-white">{t("footer.address")}</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-white" />
                  <p className="text-white">0962 414 125</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-white" />
                  <p className="text-white">dinhdongphuong@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <div className="col-span-1 space-y-8">
                <div className="col-span-1 flex flex-row items-center space-x-3">
                  <p className="text-white" style={{ marginTop: "30px" }}>{t("footer.company")}</p>
                </div>

                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row items-center space-x-4">
                    <p className="text-white" style={{ marginTop: "10px" }}>{t("footer.companyinfo")}</p>
                  </div>
                  <div className="flex flex-row items-center space-x-4">
                    <p className="text-white">{t("footer.tax")}: 4001273487</p>
                  </div>
                  <div className="flex flex-row items-center space-x-4">
                    <p className="text-white">{t("footer.bank")}: MB bank, 020166669999, Smile Eye Charity</p>
                  </div>
                  <div className="flex flex-row items-center space-x-4">
                    <p className="text-white">Techcombank, 22296699, Smile Eye Charity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3" style={{ marginTop: "35px" }}>
              <div className="space-y-2">
                <p className="text-white">{t("footer.working_title")}</p>
                <p className="text-white font-medium" style={{ marginTop: "50px" }}>{t("footer.working")}</p>
                <p className="text-white font-medium" style={{ marginTop: "30px" }}>{t("footer.support")}: 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 container mx-auto flex flex-row justify-between" style={{ backgroundColor: COLORS.secondary, borderTop: "1px solid #ccc" }}>
        <p className="text-white font-weight">
          © 2023 Charity. All rights reserved. Designed by 21JIT
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
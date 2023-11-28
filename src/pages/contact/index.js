import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {

  const { t } = useTranslation("translationContact");
  const { i18n } = useTranslation();
  const LANG_CODE = i18n.language;
  return (
    <div>
      <section className="dark:bg-green-400 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium track text-center uppercase">
            {t("howItWorks")}
          </p>
          <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
            {t("faq")}
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              {t("paymentGatewayQuestion")}
              </summary>
              <div className="px-4 pb-4">
                <p>
                {t("paymentGatewayAnswer")}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              {t("instapayQuestion")}
              </summary>
              <div className="px-4 pb-4">
                <p>
                {t("instapayAnswer")}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              {t("platformsQuestion")}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                {t("platformsAnswer")}
                </p>
                <p>
                {t("platformsAnswer")}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              {t("internationalPaymentsQuestion")}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                {t("internationalPaymentsAnswer")}
                </p>
                <p>
                {t("internationalPaymentsAnswer")}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              {t("setupFeeQuestion")}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                {t("setupFeeAnswer")}
                </p>
                <p>
                {t("setupFeeAnswer")}
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
          {t("contactUs")}
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
          {t("needHelpMessage")}
          </p>
          <form className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
              {t("yourEmail")}
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-white  border-green-600 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 focus:shadow-outline-green border-2 border-solid"
                placeholder="binh@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                  {t("subject")}
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm bg-white  border-green-600 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 focus:shadow-outline-green border-2 border-solid"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                  {t("yourMessage")}
              </label>
              <textarea
                id="message"
                rows="6"
                className="shadow-sm bg-white  border-green-600 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 focus:shadow-outline-green border-2 border-solid"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-green-800 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 text-white transition duration-200"
            >
               {t("sendMessage")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;

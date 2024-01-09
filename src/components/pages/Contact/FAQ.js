import React from "react";
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation("translationContact");
  const { i18n } = useTranslation();
  const LANG_CODE = i18n.language;
  return (
    <div>
      {" "}
      <section className="dark:bg-green-400 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium text-center uppercase">
            {t("howItWorks")}
          </p>
          <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
            {t("faq")}
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {t("ifWecan")}
              </summary>
              <div className="lg:px-4 px-2 pb-4">
                <p className="text-base">
                  {t("thankYou")}

                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {t("ifIparticipate")}
              </summary>
              <div className="px-4 pb-4">
                <p className="text-base">
                {t("dependsOn")}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {t("iWouldLike")}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p className="text-base">
                  {t("thankYouFor")}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {t("iWant")}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p className="text-base">
                  {t("thankYouForYour")}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
               {t("doesThe")}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p className="text-base">
                  {t("eachProject")}

                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;

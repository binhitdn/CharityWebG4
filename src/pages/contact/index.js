import { t } from "i18next";
import React from "react";
import FormContact from "../../components/pages/Contact/FormContact";
import FAQ from "../../components/pages/Contact/FAQ";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation("translationContact");
  const { i18n } = useTranslation();
  const LANG_CODE = i18n.language;
  const contactRef = React.useRef();

  return (
    <div>
      <FAQ />
      <div id="contact">
        <FormContact ref={contactRef} />
      </div>
    </div>
  );
}

export default Contact;

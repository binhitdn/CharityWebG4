import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./SwitchLanguage.module.css";

function SwitchLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState("vi");

  const languages = [
    { code: "vi", label: "Tiếng Việt" },
    { code: "en", label: "English" },
    { code: "ja", label: "日本語" },
  ];

  const selectedLanguageData = languages.find(
    (lang) => lang.code === selectedLanguage
  );
  const selectedLanguageLabel = selectedLanguageData
    ? selectedLanguageData.label
    : "";

  const changeLanguage = (languageCode) => {
    setSelectedLanguage(languageCode);
    localStorage.setItem("language", languageCode);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    } else {
      // Set default language if not found in local storage
      localStorage.setItem("language", selectedLanguage);
    }
  }, [selectedLanguage]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <span className="ms-2 lang-text">{selectedLanguageLabel}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {languages.map((lang, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => changeLanguage(lang.code)}
            active={selectedLanguage === lang.code}
          >
            <span className="ms-2 lang-text">{lang.label}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SwitchLanguage;

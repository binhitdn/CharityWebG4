import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Dropdowns = ({ i18n, onChange }) => {
  const options = [
    { value: "en", label: "English" },
    { value: "vi", label: "Vietnamese" },
    { value: "fr", label: "French" },
    { value: "ja", label: "Japanese" },
  ];

  const [selectedOption, setSelectedOption] = useState({
    value: i18n.language,
    label: options.filter((option) => option.value === i18n.language)[0].label,
  });

  const onSelect = (option) => {
    setSelectedOption(option);
    i18n.changeLanguage(option.value);
  };

  return (
    <Dropdown
      options={options}
      onChange={(e) => {
        onSelect(e);
      }}
      value={selectedOption}
      placeholder="Select an option"
    />
  );
};

export default Dropdowns;

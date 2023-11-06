import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dropdowns = ({ i18n }) => {
  const options = [
    {
      value: "en",
      label: "English",
      icon: "https://icons.iconarchive.com/icons/wikipedia/flags/512/GB-United-Kingdom-Flag-icon.png",
    },
    {
      value: "vi",
      label: "Vietnamese",
      icon: "https://icons.iconarchive.com/icons/wikipedia/flags/512/VN-Vietnam-Flag-icon.png",
    },
    {
      value: "fr",
      label: "French",
      icon: "https://icons.iconarchive.com/icons/wikipedia/flags/512/FR-France-Flag-icon.png",
    },
    {
      value: "ja",
      label: "Japanese",
      icon: "https://icons.iconarchive.com/icons/wikipedia/flags/512/JP-Japan-Flag-icon.png",
    },
  ];

  const defaultLanguage = options.find(
    (option) => option.value === i18n.language
  );
  const [selectedOption, setSelectedOption] = useState(
    defaultLanguage || options[0]
  );

  const onSelect = (eventKey) => {
    const option = options.find((option) => option.value === eventKey);
    setSelectedOption(option);
    i18n.changeLanguage(option.value);
  };

  return (
    <Dropdown onSelect={onSelect}>
      <Dropdown.Toggle
        variant="success"
        className="dropdown-toggle d-flex justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center">
          <img
            src={selectedOption.icon}
            alt={selectedOption.label}
            className="flag-icon"
            style={{ width: "20px", height: "20px" }}
          />
          <span className="ml-2">{selectedOption.label}</span>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item
            key={option.value}
            eventKey={option.value}
            active={selectedOption.value === option.value}
          >
            <img
              src={option.icon}
              alt={option.label}
              className="flag-icon"
              style={{ width: "20px", height: "20px" }}
            />
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Dropdowns;

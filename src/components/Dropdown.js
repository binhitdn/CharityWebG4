import React from "react";
import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css"; // Không cần import này nếu thư viện tự xử lý CSS


const Dropdowns = (languageImages,changeLanguage) => {
  const options = ["one", "two", "three"];
  const [selectedOption,setSelectedOption] = useState();
  



    return (
      <Dropdown
        options={options}
        onChange={this._onSelect}
        value={selectedOption}
        placeholder="Select an option"
      />
    );
  
}
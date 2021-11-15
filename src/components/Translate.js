import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Africaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  },
];

const labelText = "Select a Language";
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <Dropdown
        labelText={labelText}
        selectedOption={language}
        onSelectedChange={setLanguage}
        options={options}
      />

      <hr />
      <div className="ui header">
        Output
        <Convert text={text} language={language} />
      </div>
    </div>
  );
};

export default Translate;

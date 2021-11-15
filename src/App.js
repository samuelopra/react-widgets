import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

const accordionItems = [
  {
    title: "What project is this?",
    content: "This is an Accordion implementation",
  },
  {
    title: "Why are you building this?",
    content: "This is just a fun app for react practice",
  },
  {
    title: "How does it work?",
    content:
      "It works by starting the project and opening/closing this accordion",
  },
];

const colorOptions = [
  { label: "The color Red", value: "red" },
  { label: "The color Blue", value: "blue" },
  { label: "A shade of Green", value: "green" },
];
const App = () => {
  const [selectedOption, setSelectedOption] = useState(colorOptions[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        {" "}
        Toggle Dropdown{" "}
      </button>
      {showDropdown ? (
        <Dropdown
          selectedOption={selectedOption}
          onSelectedChange={setSelectedOption}
          options={colorOptions}
        />
      ) : null}
    </div>
  );
};

export default App;

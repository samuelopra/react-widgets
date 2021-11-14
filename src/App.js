import React from "react";
import Accordion from "./components/Accordion";

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
const App = () => {
  return <Accordion items={accordionItems} />;
};

export default App;

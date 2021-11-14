import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = activeIndex === index ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`${active} title`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${active} content`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      <br />
      {renderedItems}
    </div>
  );
};

export default Accordion;

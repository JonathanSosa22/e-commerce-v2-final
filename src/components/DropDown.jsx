import { useState } from "react";

const DropDown = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`filter-drop-down ${!isOpen ? "closed" : ""}`}>
      <div className="header" onClick={() => setIsOpen(!isOpen)}>
        <span>{header}</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className={`content ${isOpen ? "" : "hidden"}`}>{children}</div>
    </div>
  );
};

export default DropDown;

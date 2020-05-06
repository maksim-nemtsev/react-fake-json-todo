import React, { useState } from "react";
import List from "../List";
import Badge from "../Badge/index";

import closeSvg from "../../assets/img/close.svg";

import "./AddListButton.scss";

const AddListButton = ({ colors }) => {
  //default visiblePopup = false
  const [visiblePopup, setVisiblePopup] = useState(true);
  const [selectedColor, selectColor] = useState(colors[0].id);

  return (
    <div className="add-list">
      <List
        //open task menu
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Add task",
          },
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img
            onClick={() => setVisiblePopup(false)}
            src={closeSvg}
            alt="close button"
            className="add-list__popup-close-btn"
          />
          <input className="field" type="text" placeholder="Enter your task" />
          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Badge
                className={selectedColor === color.id && "active"}
                onClick={() => selectColor(color.id)}
                key={color.id}
                color={color.name}
              />
            ))}
          </div>
          <button className="button">Add my task</button>
        </div>
      )}
    </div>
  );
};

export default AddListButton;

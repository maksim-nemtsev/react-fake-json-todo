import React, { useState } from "react";
import List from "../List";
import Badge from "../Badge/index";

import closeSvg from "../../assets/img/close.svg";

import "./AddListButton.scss";

// передаю colors из DB и onAddList из App <AddListButton />
const AddListButton = ({ colors, onAddList }) => {
  //default visiblePopup = false
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, selectColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState("");

  const onClose = () => {
    //addList hide
    setVisiblePopup(false);
    // clear input
    setInputValue("");
    //return the first color
    selectColor(colors[0].id);
  };

  const addList = () => {
    //checking for empty input line
    if (!inputValue) {
      alert("Введите название списка");
      // stop code
      return;
    }
    const color = colors.filter((c) => c.id === selectedColor)[0].name;
    //chain of App
    onAddList({
      id: Math.random(),
      name: inputValue,
      color: color,
    });
    onClose();
  };

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
            onClick={onClose}
            src={closeSvg}
            alt="close button"
            className="add-list__popup-close-btn"
          />
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="field"
            type="text"
            placeholder="Enter your task"
          />
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
          <button onClick={addList} className="button">
            Add list
          </button>
        </div>
      )}
    </div>
  );
};

export default AddListButton;

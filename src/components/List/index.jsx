import React from "react";
import classNames from "classnames";

import removeSvg from "../../assets/img/remove.svg";

import Badge from "../Badge/index";

import "./List.scss";

const List = ({ items, isRemovable, onClick, onRemove }) => {
  const removeList = (item) => {
    if (window.confirm("Delete list ?")) {
      onRemove(item);
    }
  };
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        //classNames() decides whether the class is active or not
        <li
          key={index}
          className={classNames(item.className, { active: item.active })}
        >
          <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
          <span>{item.name}</span>
          {isRemovable && (
            <img
              onClick={() => removeList(item)}
              className="list__remove-icon"
              src={removeSvg}
              alt="remove list"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;

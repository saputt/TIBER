import React from "react";
import Card from "../../atoms/Card";
import SelectionButton from "../../atoms/SelectionButton";

const SelectionCard = ({ title, list, isSelect, onClick }) => {
  return (
    <div className="flex flex-col">
      <h3>{title}</h3>
      <hr />
      {list.map((list) => (
        <SelectionButton
          key={list}
          isBoarding={true}
          isSelect={isSelect}
          selectionName={list}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default SelectionCard;

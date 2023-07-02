import React, { useState } from "react";

const SubCategory = ({ subCategory }) => {
  const [selectedRadio, setSelectedRadio] = useState("");
  return (
    <div>
      <ul>
        <h1>{subCategory.name}</h1>
        <div className="lineBottom"></div>
        <ul>
          {subCategory.secondCategory.map((subCategory, index) => (
            <li key={index}>
              <input
                className="active"
                type="radio"
                name="subCategory"
                id={subCategory}
                checked={subCategory === selectedRadio}
                onChange={(e) => {
                  setSelectedRadio(e.target.id);
                }}
              />
              <label
                className={`btn btn-navbar ${
                  subCategory === selectedRadio ? "selected" : ""
                }`}
                htmlFor={subCategory}
              >
                {subCategory.text}{" "}
              </label>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default SubCategory;

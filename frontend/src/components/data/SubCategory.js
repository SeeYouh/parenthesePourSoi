import React from "react";

const SubCategory = ({ subCategory }) => {
  return (
    <div>
      <ul>
        <h1>{subCategory.name}</h1>
        <ul>
          {subCategory.secondCategory.map((subCategory, index) => (
            <li key={index}> {subCategory.text} </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default SubCategory;

import { useState } from "react";

const useFilter = (setIsActive) => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [selectedSubRadio, setSelectedSubRadio] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedRadio(e.target.id);
    setSelectedSubRadio("");
    setIsActive(true);
  };

  const handleSubCategoryChange = (e) => {
    setSelectedSubRadio(e.target.id);
  };

  return {
    selectedRadio,
    selectedSubRadio,
    handleCategoryChange,
    handleSubCategoryChange,
  };
};

export default useFilter;

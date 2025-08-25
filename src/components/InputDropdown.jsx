

import React, { useState, useRef, useEffect } from "react";

const InputDropdown = ({
  quantity,
  setQuantity,
  onChange,
 
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customNumber, setCustomNumber] = useState("");
  const [error, setError] = useState("");

  const selectRef = useRef(null);
  console.log(quantity, "__quantity___");

  const dropdownnumber = {};
  for (let i = 1; i <= 10; i++) {
    dropdownnumber[i] = i;
  }
  console.log(selectedOption, "||", customNumber, "___customNumber___");

 

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    console.log(newValue ,customNumber, 'asdfasdfasdfasdfasdfasdf')
    
    setSelectedOption(newValue);
    // if(selectedOption!=="custom"){
    //   setQuantity(newValue)
    // }
   
    setError("");

    if (newValue !== "custom") {
      setCustomNumber("");
      setQuantity(selectedOption)
      if (onChange) {
        onChange(newValue);
      }
    }
   if(newValue === "custom"){
      setQuantity("custom")
    }
  };

  const handleCustomNumberChange = (e) => {
    const newValue = e.target.value;
    const numValue = parseInt(newValue);

    setError("");

    if (numValue > 50000) {
      setError("Number cannot be greater than 50000");
      setCustomNumber("50000");
      setQuantity("50000");
      if (onChange) {
        onChange("50000");
      }
      return;
    }

    if (numValue < 1 && newValue !== "") {
      setError("Number must be at least 1");
      return;
    }

    setCustomNumber(newValue);
    setQuantity(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleArrowClick = () => {
    setSelectedOption("");
    setCustomNumber("");
    setError("");
    if (onChange) {
      onChange("");
    }
    setTimeout(() => {
      selectRef.current?.focus();
    }, 0);
  };

  return (
    <div className="px-2 grid-cols-2 gap-1">
      <label className="text-white p-2">Quantity</label>
      {selectedOption === "custom" ? (
        <div className="relative  w-[100%]">
          <input
            type="number"
            min="1"
            max="50000"
            placeholder="Enter number upto 50000"
            className={`block w-full px-3 py-2 pr-8 border rounded-md shadow-sm appearance-none ${
              error ? "border-red-500" : "border-black"
            }`}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <div
            onClick={handleArrowClick}
            className="absolute inset-y-0 right-2 flex items-center text-gray-700 text-sm cursor-pointer"
          >
            ▼
          </div>
          {error && <p className="text-red-500 text-sm mt-1 pl-2">{error}</p>}
        </div>
      ) : (
        <select
          ref={selectRef}
          id="number-select"
          className="block w-[96%] px-3 py-2 border border-black rounded-md shadow-sm"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          {Object.entries(dropdownnumber).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
          <option value="custom">Select your Own Number</option>
        </select>
      )}
    </div>
  );
};

export default InputDropdown;

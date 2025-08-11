import React, { useState, useRef, useEffect } from "react";

const InputDropdown = ({ quantity, setQuantity,onChange, value, ...props }) => {
  const [selectedOption, setSelectedOption] = useState(value || "");
  const [customNumber, setCustomNumber] = useState("");
  
  const selectRef = useRef(null);
 console.log(quantity,"__quantity___")

  const dropdownnumber = {};
  for (let i = 1; i <= 10; i++) {
    dropdownnumber[i] = i;
  }
console.log(selectedOption,"||",customNumber,"___customNumber___")
  useEffect(() => {
    if (value !== undefined) {
      if (value && !Object.values(dropdownnumber).includes(parseInt(value))) {
        setSelectedOption("custom");
        setCustomNumber(value);
      } else {
        setSelectedOption(value);
      }
    }
  }, [value]);

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue);
    setQuantity(newValue)
    
    if (newValue !== "custom") {
      setCustomNumber("");
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  const handleCustomNumberChange = (e) => {
    const newValue = e.target.value;
    setCustomNumber(newValue);
    setQuantity(newValue)
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleArrowClick = () => {
    setSelectedOption("");
    setCustomNumber("");
    if (onChange) {
      onChange("");
    }
    setTimeout(() => {
      selectRef.current?.focus();
    }, 0);
  };

  return (

    <div className="px-2 ">
      <label className="text-white pl-2 ">Quantity</label>
      {selectedOption === "custom" ? (
        <div className="relative w-[100%] ">
          
          <input
            type="number"
            placeholder="Enter your number"
            className="block w-[504px] px-3 py-2 pr-8 border border-black rounded-md shadow-sm appearance-none"
            value={customNumber}
            onChange={handleCustomNumberChange}
          />
          <div
            onClick={handleArrowClick}
            className="absolute inset-y-0 right-2 flex items-center text-gray-700 text-sm cursor-pointer"
          >
            ▼
          </div>
        </div>
      ) : (
        
        <select
          ref={selectRef}
          id="number-select"
          className="block w-[96%] px-3 py-2 border border-black rounded-md shadow-sm"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          {/* <option value="" disabled>
            Select a number
          </option> */}
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
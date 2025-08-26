

import React, { useState, useRef, useEffect } from "react";

const CustomInputDropdown = ({
  quantityValue,
  setQuantityValue,
  Quantitykey,
  label,
   itm,
  errors,
  handleSubmit,
  setValue,
  getValues,
  register,
  border,
  borderColor,
  bgColor,
  widthFull="w-full",
 
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customNumber, setCustomNumber] = useState("");
  const [error, setError] = useState("");

  const selectRef = useRef(null);
  // console.log(quantityValue, label,"__quantity___");

  const dropdownnumber = {};
  for (let i = 1; i <= 10; i++) {
    dropdownnumber[i] = i;
  }
  // console.log(selectedOption, "||", customNumber, "___customNumber___");

 





  return (
    <div className="px-2 ">
      <label className="text-white ">{label}</label>
      {selectedOption === "custom" ? (
        <div className={`flex flex-col h-full w-full ${itm?.visible==false? 'hidden':''}`}>
          <input
            type="number"
            min="1"
            name={itm?.name}
            max="50000"
            placeholder="Enter Quantity"
              className="p-2 block w-full border-b-2 py-1.5 text-white-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30"
            value={quantityValue[itm?.name]}
            onChange={(e) => {
            
              setQuantityValue(prev => ({
                                  ...prev,
                                  [itm?.name]:  Number(e?.target?.value)
                                }));            }}
          />
          <div
        
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
            className={`${itm?.bg ?? "bg-white"
            } font-semibold block h-10 ${widthFull} ${border} ${borderColor} rounded-md text-white-900 shadow-lg focus:shadow-indigo-500/30 ring-1 ring-inset ring-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          value={quantityValue[itm?.name]}
          name={itm?.name}
          onChange={(e) => {
           
            setSelectedOption(e?.target?.value);
              setQuantityValue(prev => ({
                                  ...prev,
                                  [itm?.name]: e?.target?.value!== "custom"? Number(e?.target?.value):e?.target?.value
                                }));            }}
        >
            <option key={"select"} value={"select"}>
              Select Quantity
            </option>
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

export default CustomInputDropdown;

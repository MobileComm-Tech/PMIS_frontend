import React, { useState } from "react";
import DatePicker from "react-datepicker";

const NewDateRangePicker = ({
  label,
  value = [null, null], // [startDate, endDate]
  required = false,
  cb = () => {},
  placeholder = "Select date range",
  ...props
}) => {
  const [dateRange, setDateRange] = useState(value);
  const [startDate, endDate] = dateRange;

  const handleChange = (update) => {
    setDateRange(update);
    cb(update); // parent ko [startDate, endDate] milega
  };

  return (
    <div
      className={`max-w-[200px] min-w-[140px] relative ${
        props?.height || ""
      } ${props?.className || ""} w-full`}
    >
      {/* Optional label */}
      {/* 
      <label className="text-white ml-2">
        {required && <span className="text-red-600 mr-1">*</span>}
        {label}
      </label> 
      */}

      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}
        placeholderText={placeholder}
        dateFormat="dd/MM/yyyy"
        isClearable
        className="
          w-full mt-[5px]
          outline-none font-semibold
          rounded-md
          bg-[#3e454d]
          text-white
          border-[1.3px]
          border-[#64676d]
          px-3 py-2
          text-[12px]
        "
        calendarClassName="bg-[#f0f0f0] text-black"
        {...props}
      />
    </div>
  );
};

export default NewDateRangePicker;
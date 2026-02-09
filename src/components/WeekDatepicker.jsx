import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { startOfWeek, endOfWeek, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const WeekPicker = ({
  value = { startDate: null, endDate: null },
  onChange = () => {},
  placeholder = "Select Week",
  weekStartsOn = 1, // 1 = Monday
  className = "",
}) => {
  const [selectedDate, setSelectedDate] = useState(value.startDate);

  const handleChange = (date) => {
    if (!date) {
      setSelectedDate(null);
      onChange({ startDate: null, endDate: null });
      return;
    }

    const startDate = startOfWeek(date, { weekStartsOn });
    const endDate = endOfWeek(date, { weekStartsOn });

    setSelectedDate(startDate);
    onChange({ startDate, endDate });
  };

  return (
    <div className={`max-w-[200px] min-w-[140px] w-full ${className}`}>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        placeholderText={placeholder}
        showWeekNumbers
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
      />

      {/* {value.startDate && value.endDate && (
        <div className="text-[11px] text-gray-300 mt-1">
          {format(value.startDate, "dd MMM")} –{" "}
          {format(value.endDate, "dd MMM yyyy")}
        </div>
      )} */}
    </div>
  );
};

export default WeekPicker;
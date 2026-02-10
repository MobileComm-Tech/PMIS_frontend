import React, { useEffect, useState } from "react";
import PopupMenu from "./PopupMenu";
import { UilFilter } from "@iconscout/react-unicons";
import DatePicker from "react-datepicker";
import Button from "./Button";
import Multiselection from "./FormElements/Multiselection";
import DateRangePicking from "./FormElements/DateRangePicking";
import ComponentActions from "../store/actions/component-actions";
import { useDispatch } from "react-redux";

const FilterView = ({
  tablefilter = [],
  handleSubmit = () => { },
  onSubmit,
  errors = {},
  onReset,
  register,
  setValue,
  getValues,
}) => {

  const dispatch = useDispatch();

  const [close,setClose] = useState(false)

  useEffect(() => {
    const handleEnterKey = (e) => {
      if (e.key === "Enter") {
        handleSubmit(onSubmit)();
      }
    };

    document.addEventListener("keypress", handleEnterKey);
    return () => {
      document.removeEventListener("keypress", handleEnterKey);
    };
  }, [handleSubmit, onSubmit]);

  useEffect(() => {
    tablefilter.forEach((itm) => {
      setValue(itm.name, getValues(itm.name) || '');
    });
  }, [tablefilter, setValue, getValues]);

  //   const handleClickOutside = (event) => {
  //   if (
  //         !Array.from(event.target.classList)?.includes("not")
  //   ) {
  //     dispatch(ComponentActions.popmenu(location.pathname + "_" + name, false));
  //   }
  // };

  //   useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [close]);

  return (
    <>
      {tablefilter.length > 0 && (
        <PopupMenu
          name={"Filter"}
          icon={<UilFilter size="32" />}
          child={
            <>
              <div className="grid grid-cols-2">
                {tablefilter.map((itm) => (

                  <div key={itm.name} className="flex flex-col">
                    <label className="block text-sm p-2 font-medium text-white dark:text-black">
                      {itm.label}
                    </label>

                    {itm.type === "select" && (

                      <>
                        <select
                          {...register(itm.name, {
                            required: itm.required
                              ? "This field is required"
                              : false,
                            ...itm.props,
                          })}
                          onChange={(e) => {
                            setValue(itm.name, e.target.value)
                            itm.props?.onChange && itm.props.onChange(e)
                          }}
                          className="bg-white border-black border block h-8 w-44 m-1 rounded-md py-1.5 p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value="">Select</option>
                          {itm.option?.map((selitm) => (
                            <option key={selitm.value} value={selitm.value}>
                              {selitm.label}
                            </option>
                          ))}
                        </select>
                        <p className="text-xs text-red-700">
                          {errors[itm.name]?.message || ''}
                        </p>
                      </>
                    )}

                    {itm.type === "autoSuggestion" && (
                      <>
                        <input
                          list={"optiondata" + itm.label}
                          {...register(itm.name, {
                            required: itm.required
                              ? "This field is required"
                              : false,
                            ...itm.props,
                          })}
                          onChange={(e) => setValue(itm.name, e.target.value)}
                          className="bg-white border-black border block h-8 w-44 m-1 rounded-md py-1.5 p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <datalist id={"optiondata" + itm.label}>
                          {itm.option.map((selitm) => (
                            <option key={selitm.label} value={selitm.label}>
                              {selitm.label}
                            </option>
                          ))}
                        </datalist>
                      </>
                    )}

                    {itm.type === "text" && (
                      <>
                        <input
                          type={itm.type}
                          {...register(itm.name, {
                            required: itm.required
                              ? "This field is required"
                              : false,
                            ...itm.props,
                          })}
                          onChange={(e) => setValue(itm.name, e.target.value)}
                          className="bg-white border-black border block h-8 w-44 m-1 rounded-md py-1.5 p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <p className="text-xs text-red-700">
                          {errors[itm.name]?.message || ''}
                        </p>
                      </>
                    )}

                    {itm.type === "datetime" && (
                      <>
                        <DatePicker
                          selected={
                            getValues(itm.name)
                              ? new Date(getValues(itm.name))
                              : null
                          }
                          onChange={(date) => setValue(itm.name, date)}
                          dateFormat={itm?.format || 'MM/dd/yyyy'}
                          className="bg-white border-black border block h-8 w-44 rounded-md p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <p className="text-xs text-red-700">
                          {errors[itm.name]?.message || ''}
                        </p>
                      </>
                    )}

                    {itm.type === "datetimeRange" && (
                      <>
                        <div 
                          onClick={(e) => e.stopPropagation()}
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          <DatePicker
                            selected={
                              getValues(itm.name)
                                ? new Date(getValues(itm.name))
                                : null
                            }
                            onChange={(date) => {
                              setValue(itm.name, date);
                             
                              if (itm.onChange) {
                                itm.onChange(date);
                              }
                              if (itm.props?.onChange) {
                                itm.props.onChange(date);
                              }
                            }}
                            shouldCloseOnSelect={true}
                            showMonthYearPicker
                            dateFormat="MM/yyyy"
                            className={`${itm.bg || "bg-white border-black border"} block h-8 w-44 rounded-md p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            placeholderText="Select month/year"
                            isClearable
                            popperClassName="z-50"
                            withPortal={false}
                            onCalendarOpen={(e) => e?.stopPropagation?.()}
                            onCalendarClose={(e) => e?.stopPropagation?.()}
                            onClickOutside={(e) => e?.stopPropagation?.()}
                          />
                        </div>
                        <p className="text-xs text-red-700">
                          {errors[itm.name]?.message || ''}
                        </p>
                      </>
                    )}
                    {itm.type === "datetimeRangeNew" && (
                    <DateRangePicking {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}
                  </div>
                ))}
              </div>
              <div className="w-18 py-3 flex justify-center grid-cols-1">
                <Button
                  name={"Filter"}
                  onClick={
                    handleSubmit(onSubmit)
                    // ()=>{console.log}
                  }
                  classes="w-18 p-10 mx-2"
                />
                <Button
                  name={"Reset"}
                  onClick={() => {
                    tablefilter.forEach((itm) => setValue(itm.name, ''));
                    // onSubmit({})
                    onReset();
                  }}
                  classes="w-18 p-10 mx-2 bg-rose-400"
                />
                {/* <Button
                  name={"Close"}
                  onClick={() => {
                    tablefilter.forEach((itm) => setValue(itm.name, ''));
                    // onSubmit({})
                    // onReset();
                    setClose(true)
                  }}
                  classes="w-18 p-10 mx-2 bg-rose-400"
                /> */}
              </div>
            </>
          }
        />
      )}
    </>
  );
};

export default FilterView;



//==================================================OLD CODE
// import React, { useEffect } from "react";
// import PopupMenu from "./PopupMenu";
// import { UilFilter } from "@iconscout/react-unicons";
// import DatePicker from "react-datepicker";
// import Button from "./Button";
// import Multiselection from "./FormElements/Multiselection";

// const FilterView = ({
//   tablefilter = [],
//   handleSubmit = () => { },
//   onSubmit,
//   errors = {},
//   onReset,
//   register,
//   setValue,
//   getValues,
// }) => {
//   useEffect(() => {
//     const handleEnterKey = (e) => {
//       if (e.key === "Enter") {
//         handleSubmit(onSubmit)();
//       }
//     };

//     document.addEventListener("keypress", handleEnterKey);
//     return () => {
//       document.removeEventListener("keypress", handleEnterKey);
//     };
//   }, [handleSubmit, onSubmit]);

//   useEffect(() => {
//     tablefilter.forEach((itm) => {
//       setValue(itm.name, getValues(itm.name) || '');
//     });
//   }, [tablefilter, setValue, getValues]);

//   return (
//     <>
//       {tablefilter.length > 0 && (
//         <PopupMenu
//           name={"Filter"}
//           icon={<UilFilter size="32" />}
//           child={
//             <>
//               <div className="grid grid-cols-2">
//                 {tablefilter.map((itm) => (

//                   <div key={itm.name} className="flex flex-col">
//                     <label className="block text-sm p-2 font-medium text-white dark:text-black">
//                       {itm.label}
//                     </label>

//                     {itm.type === "select" && (

//                       <>
//                         <select
//                           {...register(itm.name, {
//                             required: itm.required
//                               ? "This field is required"
//                               : false,
//                             ...itm.props,
//                           })}
//                           onChange={(e) => {
//                             setValue(itm.name, e.target.value)
//                             itm.props?.onChange && itm.props.onChange(e)
//                           }}
//                           className="bg-white border-black border block h-8 w-44 m-1 rounded-md py-1.5 p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         >
//                           <option value="">Select</option>
//                           {itm.option.map((selitm) => (
//                             <option key={selitm.value} value={selitm.value}>
//                               {selitm.label}
//                             </option>
//                           ))}
//                         </select>
//                         <p className="text-xs text-red-700">
//                           {errors[itm.name]?.message || ''}
//                         </p>
//                       </>
//                     )}

//                     {itm.type === "autoSuggestion" && (
//                       <>
//                         <input
//                           list={"optiondata" + itm.label}
//                           {...register(itm.name, {
//                             required: itm.required
//                               ? "This field is required"
//                               : false,
//                             ...itm.props,
//                           })}
//                           onChange={(e) => setValue(itm.name, e.target.value)}
//                           className="bg-white border-black border block h-8 w-44 m-1 rounded-md py-1.5 p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                         <datalist id={"optiondata" + itm.label}>
//                           {itm.option.map((selitm) => (
//                             <option key={selitm.label} value={selitm.label}>
//                               {selitm.label}
//                             </option>
//                           ))}
//                         </datalist>
//                       </>
//                     )}

//                     {itm.type === "text" && (
//                       <>
//                         <input
//                           type={itm.type}
//                           {...register(itm.name, {
//                             required: itm.required
//                               ? "This field is required"
//                               : false,
//                             ...itm.props,
//                           })}
//                           onChange={(e) => setValue(itm.name, e.target.value)}
//                           className="bg-white border-black border block h-8 w-44 m-1 rounded-md py-1.5 p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                         <p className="text-xs text-red-700">
//                           {errors[itm.name]?.message || ''}
//                         </p>
//                       </>
//                     )}

//                     {itm.type === "datetime" && (
//                       <>
//                         <DatePicker
//                           selected={
//                             getValues(itm.name)
//                               ? new Date(getValues(itm.name))
//                               : null
//                           }
//                           onChange={(date) => setValue(itm.name, date)}
//                           dateFormat={itm?.format || 'MM/dd/yyyy'}
//                           className="bg-white border-black border block h-8 w-44 rounded-md p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                         <p className="text-xs text-red-700">
//                           {errors[itm.name]?.message || ''}
//                         </p>
//                       </>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div className="w-18 py-3 flex justify-center grid-cols-1">
//                 <Button
//                   name={"Filter"}
//                   onClick={handleSubmit(onSubmit)}
//                   classes="w-18 p-10 mx-2"
//                 />
//                 <Button
//                   name={"Reset"}
//                   onClick={() => {
//                     tablefilter.forEach((itm) => setValue(itm.name, ''));
//                     // onSubmit({})
//                     onReset();
//                   }}
//                   classes="w-18 p-10 mx-2 bg-rose-400"
//                 />
//               </div>
//             </>
//           }
//         />
//       )}
//     </>
//   );
// };

// export default FilterView;

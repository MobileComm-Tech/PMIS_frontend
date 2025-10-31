
// import Multiselect from "multiselect-react-dropdown";
// import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datetime-picker/dist/DateTimePicker.css";
// import "react-calendar/dist/Calendar.css";
// import "react-clock/dist/Clock.css";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";
// import TextBox from "./FormElements/TextBox";
// import FilePicker from "./FormElements/FilePicker";
// import SelectDropDown from "./FormElements/SelectDropDown";
// import TextArea from "./FormElements/TextArea";
// import Multiselection from "./FormElements/Multiselection";
// import DatePicking from "./FormElements/DatePicking";
// import AutoSuggestion from "./FormElements/AutoSuggestion";
// import Radio from "./FormElements/Radio";
// import Disabled from "./FormElements/Disabled";
// import CheckBox from "./FormElements/CheckBox";
// import { types, uiList } from "../utils/queryBuilder";
// import BigMultiselection from "./FormElements/BigMultiselection";
// import NewMultiSelectsForm from "./FormElements/NewMultiSelectForm";
// import NewMultiSelects, { NewMultiSelects2 } from "./NewMultiSelect";
// import NewMultiselection from "./FormElements/NewMultiselection";
// import Email from "./FormElements/Email";
// import NewMultiselection3 from "./NewMultiselection3";
// import NewSingleSelectForm45 from "./FormElements/NewSingleSelect45";
// import NewSingleSelectCommon from "./FormElements/NewSingleSelectCommon";
// import DatePicking2 from "./FormElements/DatePicking2";
// import NewMuitiSelect007 from "./NewMuitiSelect007";
// import DateRangePicking from "./FormElements/DateRangePicking";
// import NewSingleSelectForm50 from "./FormElements/NewSingleSelectForm50";
// import DateTime from "./FormElements/DateTime";
// import CustomSelectDropDown from "./CustomSelectDropDown";

// const CommonForm = ({
//   classes,
//   encType = false,
//   Form,
//   errors,
//   handleSubmit,
//   changeTo,
//   setValue,
//   getValues,
//   register,
//   reset = true,
//   setQuantityValue,
//   quantityValue={}
  
// }) => {
//   const [value, onChange] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(true);
//   const clearAllFields = () => {
//   const allKeys = Object.keys(getValues()); // get all field names
 
// };
//   useEffect(() => {
//     clearAllFields()
//   } , [])


 

//   return (
//     <>
//       <form
//         className={`overflow-scroll grid ${classes} ${
//           Form?.length > 12 ? " h-[70vh] " : " h-auto "
//         }`}
//         encType="multipart/form-data"
//       >
//         {Form?.map((itm) => {
          
//           return (
//             <>
//               {itm.type == "heading" ? (
//                 <>
//                   <div
//                     className={`${itm.classes ? itm.classes : "col-span-1"}`}
//                   >
//                     <h1 className="pl-8 break-words	">{itm.label}</h1>
//                   </div>
//                 </>
//               ) : (
//                 <></>
//               )}
//               {itm.type != "hidden" && itm.type != "heading" ? (
//                 <div
//                   className={`mx-0 my-1 p-1 ${
//                     itm.classes ? itm.classes : "col-span-1"
//                   }`}
//                 >
//                   {itm?.showlabel == false ? (
//                     <></>
//                   ) : (
//                     <div className={`items-center justify-between ${itm?.visible==false? 'hidden':''}`}>
//                       {
                        
//                         <label  className={`block text-sm font-medium text-white ml-3 dark:text-darkBg break-words `}>
//                           {itm.label}
//                           {itm?.required && (
//                             <span className="text-rose-500 ml-1 ">*</span>
//                           )}
//                         </label>
//                       }
//                     </div>
//                   )}
//                   <div className={uiList[itm.type]?.height + " mt-2  px-2 "}>
//                     {itm?.amp &&
//                       itm?.amp?.map((its) => {
//                         return (
//                           <div
//                             className={`flex flex-row border-b-2 text-white-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30 ${
//                               its?.styling
//                             } ${
//                               its?.styling?.includes("w-full") ? "" : " w-24 "
//                             }`}
//                           >
//                             {its?.type == "select" && (
//                               <SelectDropDown
//                                 itm={its}
//                                 errors={errors}
//                                 handleSubmit={handleSubmit}
//                                 setValue={setValue}
//                                 getValues={getValues}
//                                 register={register}
//                               />
//                             )}

//                             {types.indexOf(its.type) != -1 && (
//                               <TextBox
//                                 itm={its}
//                                 errors={errors}
//                                 handleSubmit={handleSubmit}
//                                 setValue={setValue}
//                                 getValues={getValues}
//                                 register={register}
                               
//                               />
//                             )}
//                           </div>
//                         );
//                       })}
//                     {types.indexOf(itm.type) != -1 ? (
//                       <>
//                         <TextBox
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}

//                     {itm.type == "sdisabled" || itm.type == "hdisabled" ? (
//                       <>
//                         <Disabled
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}

//                     {itm.type == "jsxcmpt" ? <>{itm.component}</> : <></>}

//                     {itm.type == "radio" ? (
//                       <>
//                         <Radio
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "email" ? (
//                       <>
//                         <Email
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "checkbox" ? (
//                       <>
//                         <CheckBox
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "file" ? (
//                       <>
//                         <FilePicker
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : itm?.name == "img" ? (
//                       <div>
//                         <img src={itm.value} alt="" />
//                       </div>
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "select" ? (
//                       <>
//                         <SelectDropDown
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}

//                      {itm.type == "customSelect" ? (
//                       <>
//                         <CustomSelectDropDown
//                           itm={itm}
//                           errors={errors}
//                           changeTo={changeTo}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                           quantityValue={quantityValue}
//                           setQuantityValue={setQuantityValue}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "autoSuggestion" ? (
//                       <>
//                         <AutoSuggestion
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "textarea" ? (
//                       <>
//                         <TextArea
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "datetime" ? (
//                       <>
//                         <DatePicking
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "datetime2" ? (
//                       <>
//                         <DatePicking2
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                      {itm.type == "datetimeRange" ? (
//                       <>
//                         <DateRangePicking
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                      {itm.type == "datetime-local" ? (
//                       <>
//                         <DateTime
//                           itm={itm}
//                           errors={errors}
//                           handleSubmit={handleSubmit}
//                           setValue={setValue}
//                           getValues={getValues}
//                           register={register}
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "muitiSelect" ? (
//                       <Multiselection
//                         itm={itm}
//                         errors={errors}
//                         handleSubmit={handleSubmit}
//                         setValue={setValue}
//                         getValues={getValues}
//                         register={register}
//                       />
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "newmuitiSelect2" ? (
//                       <NewMultiselection
//                         itm={itm}
//                         errors={errors}
//                         handleSubmit={handleSubmit}
//                         setValue={setValue}
//                         getValues={getValues}
//                         register={register}
//                         minWidth={itm?.minWidth || "min-w-[150px]"}
//                       />
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "newmuitiSelect3" ? (
//                       <NewMultiselection3
//                         itm={itm}
//                         errors={errors}
//                         handleSubmit={handleSubmit}
//                         setValue={setValue}
//                         getValues={getValues}
//                         register={register}
//                       />
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "newmultiselect" ? (
//                       <NewMultiSelectsForm
//                         itm={itm}
//                         errors={errors}
//                         handleSubmit={handleSubmit}
//                         setValue={setValue}
//                         getValues={getValues}
//                         register={register}
//                       />
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "newSingleSelect45" ? (
//                       <NewSingleSelectForm45
//                         itm={itm}
//                         errors={errors}
//                         handleSubmit={handleSubmit}
//                         setValue={setValue}
//                         getValues={getValues}
//                         register={register}
//                       />
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "newSingleSelect50" ? (
//                       <NewSingleSelectForm50
//                         itm={itm}
//                         errors={errors}
//                         handleSubmit={handleSubmit}
//                         setValue={setValue}
//                         getValues={getValues}
//                         register={register}
//                       />
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "newSingleSelectCommon" ? (
//                       <NewSingleSelectCommon
//                         itm={itm}
//                         errors={errors}
//                         handleSubmit={handleSubmit}
//                         setValue={setValue}
//                         getValues={getValues}
//                         register={register}
//                       />
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "BigmuitiSelect" ? (
//                       <BigMultiselection
//                         itm={itm}
//                         errors={errors}
//                         handleSubmit={handleSubmit}
//                         setValue={setValue}
//                         getValues={getValues}
//                         register={register}
//                       />
//                     ) : (
//                       <></>
//                     )}
//                     {itm.type == "newMuitiSelect007" ? (
//                       <NewMuitiSelect007
//                         itm={itm}
//                         errors={errors}
//                         handleSubmit={handleSubmit}
//                         setValue={setValue}
//                         getValues={getValues}
//                         register={register}
//                       />
//                     ) : (
//                       <></>
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 ""
//               )}
//             </>
//           );
//         })}
//       </form>
//     </>
//   );
// };

// export default CommonForm;

import React, { useEffect, useState } from "react";
import Select from "react-select"; // ✅ Imported react-select
import Multiselect from "multiselect-react-dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

// Import your custom components
import TextBox from "./FormElements/TextBox";
import FilePicker from "./FormElements/FilePicker";
import SelectDropDown from "./FormElements/SelectDropDown";
import TextArea from "./FormElements/TextArea";
import Multiselection from "./FormElements/Multiselection";
import DatePicking from "./FormElements/DatePicking";
import AutoSuggestion from "./FormElements/AutoSuggestion";
import Radio from "./FormElements/Radio";
import Disabled from "./FormElements/Disabled";
import CheckBox from "./FormElements/CheckBox";
import BigMultiselection from "./FormElements/BigMultiselection";
import NewMultiSelectsForm from "./FormElements/NewMultiSelectForm";
import NewMultiselection from "./FormElements/NewMultiselection";
import Email from "./FormElements/Email";
import NewMultiselection3 from "./NewMultiselection3";
import NewSingleSelectForm45 from "./FormElements/NewSingleSelect45";
import NewSingleSelectCommon from "./FormElements/NewSingleSelectCommon";
import DatePicking2 from "./FormElements/DatePicking2";
import NewMuitiSelect007 from "./NewMuitiSelect007";
import DateRangePicking from "./FormElements/DateRangePicking";
import NewSingleSelectForm50 from "./FormElements/NewSingleSelectForm50";
import DateTime from "./FormElements/DateTime";
import CustomSelectDropDown from "./CustomSelectDropDown";
import { types, uiList } from "../utils/queryBuilder";

const CommonForm = ({
  classes,
  encType = false,
  Form,
  errors,
  handleSubmit,
  changeTo,
  setValue,
  getValues,
  register,
  reset = true,
  setQuantityValue,
  quantityValue = {},
}) => {
  const [value, onChange] = useState(new Date());

  const clearAllFields = () => {
    const allKeys = Object.keys(getValues());
  };

  useEffect(() => {
    clearAllFields();
  }, []);

 
  const customSelectStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "white",
      borderColor: "#d1d5db", 
      color: "black",
      minHeight: 36,
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "white",
      color: "black",
      zIndex: 9999,
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected
        ? "#e5e7eb" 
        : isFocused
        ? "#f3f4f6" 
        : "white",
      color: "black",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "black",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#6b7280", 
    }),
  };

  return (
    <form
      className={`overflow-scroll grid ${classes} ${
        Form?.length > 12 ? " h-[70vh] " : " h-auto "
      }`}
      encType="multipart/form-data"
    >
      {Form?.map((itm, idx) => {
        return (
          <React.Fragment key={idx}>
            {itm.type === "heading" ? (
              <div className={`${itm.classes ? itm.classes : "col-span-1"}`}>
                <h1 className="pl-8 break-words">{itm.label}</h1>
              </div>
            ) : null}

            {itm.type !== "hidden" && itm.type !== "heading" ? (
              <div
                className={`mx-0 my-1 p-1 ${
                  itm.classes ? itm.classes : "col-span-1"
                }`}
              >
                {itm?.showlabel !== false && (
                  <div
                    className={`items-center justify-between ${
                      itm?.visible === false ? "hidden" : ""
                    }`}
                  >
                    <label className="block text-sm font-medium text-white ml-3 break-words">
                      {itm.label}
                      {itm?.required && (
                        <span className="text-rose-500 ml-1">*</span>
                      )}
                    </label>
                  </div>
                )}

                <div className={uiList[itm.type]?.height + " mt-2 px-2 "}>
                 
                  {itm.type === "searchableSelect" ? (
                    <Select
                      options={itm.option || []}
                      isSearchable
                      isDisabled={itm.disabled}
                      placeholder={itm.placeholder || "Select..."}
                      onChange={(selectedOption) => {
                        const eventLike = {
                          target: {
                            name: itm.name,
                            value: selectedOption?.value,
                          },
                        };

                        if (itm.props?.onChange) {
                          itm.props.onChange(eventLike);
                        }
                        setValue(itm.name, selectedOption?.value);
                      }}
                      value={itm.option?.find(
                        (option) => option.value === getValues(itm.name)
                      )}
                      styles={customSelectStyles}
                      classNamePrefix="react-select"
                    />
                  ) : null}

                 
                  {types.indexOf(itm.type) !== -1 && (
                    <TextBox
                      itm={itm}
                      errors={errors}
                      handleSubmit={handleSubmit}
                      setValue={setValue}
                      getValues={getValues}
                      register={register}
                    />
                  )}

                  {itm.type === "sdisabled" || itm.type === "hdisabled" ? (
                    <Disabled
                      {...{ itm, errors, handleSubmit, setValue, getValues, register }}
                    />
                  ) : null}

                   {itm.type == "jsxcmpt" ? <>{itm.component}</> : <></>}

                  {itm.type === "radio" && (
                    <Radio {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "email" && (
                    <Email {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "checkbox" && (
                    <CheckBox {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "file" && (
                    <FilePicker {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "select" && (
                    <SelectDropDown
                      {...{ itm, errors, handleSubmit, setValue, getValues, register }}
                    />
                  )}

                  {itm.type === "customSelect" && (
                    <CustomSelectDropDown
                      {...{
                        itm,
                        errors,
                        changeTo,
                        handleSubmit,
                        setValue,
                        getValues,
                        register,
                        quantityValue,
                        setQuantityValue,
                      }}
                    />
                  )}

                  {itm.type === "autoSuggestion" && (
                    <AutoSuggestion {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "textarea" && (
                    <TextArea {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "datetime" && (
                    <DatePicking {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "datetime2" && (
                    <DatePicking2 {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "datetimeRange" && (
                    <DateRangePicking {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "datetime-local" && (
                    <DateTime {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "muitiSelect" && (
                    <Multiselection {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "newmuitiSelect2" && (
                    <NewMultiselection {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "newmuitiSelect3" && (
                    <NewMultiselection3 {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "newmultiselect" && (
                    <NewMultiSelectsForm {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "newSingleSelect45" && (
                    <NewSingleSelectForm45 {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "newSingleSelect50" && (
                    <NewSingleSelectForm50 {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "newSingleSelectCommon" && (
                    <NewSingleSelectCommon {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "BigmuitiSelect" && (
                    <BigMultiselection {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}

                  {itm.type === "newMuitiSelect007" && (
                    <NewMuitiSelect007 {...{ itm, errors, handleSubmit, setValue, getValues, register }} />
                  )}
                </div>
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </form>
  );
};

export default CommonForm;

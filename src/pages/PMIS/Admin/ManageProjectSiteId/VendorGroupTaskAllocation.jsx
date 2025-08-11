
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import Modal from "../../../../components/Modal";
// import CommonForm from "../../../../components/CommonForm";
// import Button from "../../../../components/Button";
// import projectListActions from "../../../../store/actions/projectList-actions";
// import { Urls } from "../../../../utils/url";
// import InputDropdown from "../../../../components/InputDropdown";

// const VendorGroupTaskAllocation = ({
//   from,
//   itemData,
//   listsite,
//   projectuniqueId,
//   isOpen,
//   setIsOpen,
//   resetting,
//   formValue = {},
//   projectGroupId,
//   subProject,
//   customerId,
//   filtervalue,
//   checkbox,
//   parentcheckbox,
//   onClose = () => {},
//   formName,
// }) => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset: reset,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm();

//   let dispatch = useDispatch();
//   const [modalOpen, setmodalOpen] = useState(false);
//   const [modalFullOpen, setmodalFullOpen] = useState(false);
//   const [activeTab, setactiveTab] = useState(3);
//   const [modalFullBody, setmodalFullBody] = useState(<></>);
//   const [old, setOld] = useState({});
//   const [vendorListOptions, setVendorListOptions] = useState([]);
//   const [selectedVendor, setSelectedVendor] = useState(null);
//   const [isLoadingVendorList, setIsLoadingVendorList] = useState(false);
//   const [quantity, setQuantity] = useState("")

//   console.log( quantity,"__projectuniqueId__");
//   const watchedVendorId = watch("vendorId");

//   const dataGetterOld = useSelector((state) => {
//     let oldata = state.projectList.getuserallocatedproject[0];
//     if (oldata) {
//       if (old["empDeatils"]) {
//         if (oldata != old) {
//           setValue("mileName", formValue["Name"]);
//           setValue("ptypeId", oldata["PId"]);
//           setOld(oldata);
//         }
//       } else {
//         setValue("mileName", formValue["Name"]);
//         setValue("ptypeId", oldata["PId"]);
//         setOld(oldata);
//       }
//     }
//     return oldata;
//   });

//   const workDescriptionOption = useSelector((state) => {
//     return state?.adminData?.getPartnerActivity.map((itm) => {
//       return {
//         label: itm.workDescriptionName,
//         value: itm.workDescription + ":;" + itm.milestone,
//       };
//     });
//   });

 
//   const fetchVendorList = async (vendorId) => {
//     if (!vendorId) {
//       console.log("No vendor ID provided");
//       return;
//     }

//     setIsLoadingVendorList(true);
//     try {
//       const data = {
//         vendorId: vendorId,
//         projectId: itemData?.projectuniqueId,
//         projectGroup: itemData?.projectGropupId,
//         customerId: itemData?.customerId,
//         subProject: itemData?.SubProjectId,
//       };

//       console.log("Fetching vendor list with data:", data);

//       dispatch(
//         projectListActions.VendorList(
//           data,
//           (response) => {
//             console.log("____response____", response);

           
//             if (
//               response &&
//               response.data &&
//               Array.isArray(response.data) &&
//               response.data.length > 0
//             ) {
//               const vendorOptions = response.data.map((item) => ({
               
//                 label: `${item.itemCodeDescription} (${item.itemCode})`,
//                 value: item._id, 
//                 itemCode: item.itemCode, 
//                 itemCodeDescription: item.itemCodeDescription, 
//               }));

//               console.log("Processed vendor options:", vendorOptions);
//               setVendorListOptions(vendorOptions);
//             } else if (
//               response &&
//               Array.isArray(response) &&
//               response.length > 0
//             ) {
//               // Fallback for old response format
//               const vendorOptions = response.map((item) => ({
//                 label: item.name || item.vendorName || `Vendor ${item.id}`,
//                 value: item.id || item.vendorId,
//               }));

//               console.log(
//                 "Processed vendor options (fallback):",
//                 vendorOptions
//               );
//               setVendorListOptions(vendorOptions);
//             } else {
//               console.log("No vendor data received or empty response");
//               setVendorListOptions([]);
//             }
//             setIsLoadingVendorList(false);
//           },
//           (error) => {
//             // Error callback
//             console.error("Error fetching vendor list:", error);
//             setVendorListOptions([]);
//             setIsLoadingVendorList(false);
//           }
//         )
//       );
//     } catch (error) {
//       console.error("Exception in fetchVendorList:", error);
//       setVendorListOptions([]);
//       setIsLoadingVendorList(false);
//     }
//   };


//   useEffect(() => {
//     console.log("Vendor ID changed:", watchedVendorId);

//     if (watchedVendorId && watchedVendorId !== selectedVendor) {
//       console.log("Fetching vendor list for vendor:", watchedVendorId);
//       setSelectedVendor(watchedVendorId);
//       setValue("vendorListId", ""); 
//       fetchVendorList(watchedVendorId);
//     } else if (!watchedVendorId) {
      
//       setSelectedVendor(null);
//       setVendorListOptions([]);
//       setValue("vendorListId", "");
//     }
//   }, [watchedVendorId, selectedVendor]);

//   let Form = [
//     {
//       label: "Work Description",
//       name: "workDescription",
//       value: "",
//       required: true,
//       type: "select",
//       option: workDescriptionOption,
//       props: {
//         onChange: (e) => {
//           const selectedValue = e.target.value.split(":;")[1];
//           setValue("groupMilestone", selectedValue);
//         },
//       },
//       classes: "col-span-1",
//     },
//     {
//       label: "Milestone Name",
//       name: "groupMilestone",
//       value: "",
//       required: true,
//       type: "sdisabled",
//       classes: "col-span-1",
//     },
//   ];

//   if (formName !== "Deallocate Task") {
//     Form.push({
//       label: "Assign Vendor",
//       name: "vendorId",
//       type: "newSingleSelect50",
//       value: "",
//       singleSelect: true,
//       option: dataGetterOld
//         ? dataGetterOld["vendorDetails"]
//           ? dataGetterOld["vendorDetails"].map((vendor) => ({
//               value: vendor.id,
//               label: vendor.name,
//             }))
//           : []
//         : [],
//       id: dataGetterOld
//         ? dataGetterOld["vendorDetails"]
//           ? dataGetterOld["vendorDetails"].map((vendor) => ({
//               value: vendor.id,
//               label: vendor.name,
//             }))
//           : []
//         : [],
//       onSelecting: (selectedOption) => {
//         console.log("onSelecting vendor", selectedOption);
//         setValue("userId", "");
//         setValue("vendorListId", "");
//         setVendorListOptions([]);
       
//       },
//       onRemoving: (removedOption) => {
//         console.log("onRemoving vendor", removedOption);
//         setValue("userId", "");
//         setValue("vendorListId", "");
//         setVendorListOptions([]);
//         setSelectedVendor(null);
//       },
//       required: true,
//       classes: "col-span-1",
//       width: "400px",
//     });

    
//     if (selectedVendor) {
//       Form.push({
//         label: isLoadingVendorList
//           ? "Loading Vendor List..."
//           : "Select from Vendor List",
//         name: "vendorListId",
//         type: "newSingleSelect50",
//         value: "",
//         singleSelect: true,
//         option: vendorListOptions,
//         id: vendorListOptions,
//         disabled: isLoadingVendorList || vendorListOptions.length === 0,
//         placeholder: isLoadingVendorList
//           ? "Loading..."
//           : vendorListOptions.length === 0
//           ? "No vendors available"
//           : "Select a vendor",
//         onSelecting: (selectedOption) => {
//           console.log("onSelecting from vendor list", selectedOption);
//           console.log("Selected item details:", {
//             id: selectedOption.value,
//             itemCode: selectedOption.itemCode,
//             description: selectedOption.itemCodeDescription,
//           });
//         },
//         onRemoving: (removedOption) => {
//           console.log("onRemoving from vendor list", removedOption);
//         },
//         required: true,
//         classes: "col-span-1",
//         width: "400px",
//       });
//     }
//   }

//   const onTableViewSubmit = (data) => {
//     console.log("Form submission data:", data);

//     let allData = {};
//     allData["workDescription"] = data["workDescription"].split(":;")[0];
//     allData["groupMilestone"] = data["groupMilestone"];
//     allData["vendorId"] = data["vendorId"];
//     allData["siteId"] = listsite;
//     allData["quantity"]=quantity;
  

//     if (data["vendorListId"]) {
//       allData["vendorListId"] = data["vendorListId"];

//       const selectedVendorItem = vendorListOptions.find(
//         (option) => option.value === data["vendorListId"]
//       );
//       if (selectedVendorItem) {
//         console.log(selectedVendorItem,'___selectedVendorItem__')
//         allData["vendorMileStoneCostId"] = selectedVendorItem?.value;
//         allData["itemCodeDescription"] = selectedVendorItem?.itemCodeDescription;
//         console.log("Selected vendor item details:", selectedVendorItem);
//       }
//     }

//     console.log("Submitting data:", allData);

//     if (formName !== "Deallocate Task") {
//       dispatch(
//         projectListActions.partnerGroupMilestonePatch(
//           Urls.projectList_partner_group_milestone,
//           allData,
//           () => {
//             dispatch(
//               projectListActions.getProjectTypeAll(projectuniqueId, filtervalue)
//             );
//             setIsOpen(false);
//             checkbox([]);
//             parentcheckbox([]);
//           }
//         )
//       );
//     } else {
//       dispatch(
//         projectListActions.partnerGroupMilestonePost(
//           Urls.projectList_partner_group_milestone,
//           allData,
//           () => {
//             dispatch(
//               projectListActions.getProjectTypeAll(projectuniqueId, filtervalue)
//             );
//             setIsOpen(false);
//             checkbox([]);
//             parentcheckbox([]);
//           }
//         )
//       );
//     }
//   };

//   useEffect(() => {
//     reset();
//     setVendorListOptions([]);
//     setSelectedVendor(null);
//     setIsLoadingVendorList(false);
//   }, [reset]);

//   return (
//     <>
//       <Modal
//         size={"xl"}
//         children={modalFullBody}
//         isOpen={modalFullOpen}
//         setIsOpen={setmodalFullOpen}
//       />

//       <div className="">
//         <InputDropdown setQuantity={setQuantity}/>
//         <CommonForm
//           classes={""}
//           Form={Form}
//           errors={errors}
//           register={register}
//           setValue={setValue}
//           getValues={getValues}
//         />

//         <Button
//           classes={"mt-2 w-sm text-center flex mx-auto"}
//           onClick={handleSubmit(onTableViewSubmit)}
//           name="Submit"
//         />
//       </div>
//     </>
//   );
// };
// export default VendorGroupTaskAllocation;

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../../components/Modal";
import CommonForm from "../../../../components/CommonForm";
import Button from "../../../../components/Button";
import projectListActions from "../../../../store/actions/projectList-actions";
import { Urls } from "../../../../utils/url";
import InputDropdown from "../../../../components/InputDropdown";

const VendorGroupTaskAllocation = ({
  from,
  itemData,
  listsite,
  projectuniqueId,
  isOpen,
  setIsOpen,
  resetting,
  formValue = {},
  projectGroupId,
  subProject,
  customerId,
  filtervalue,
  checkbox,
  parentcheckbox,
  onClose = () => {},
  formName,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset: reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  let dispatch = useDispatch();
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalFullOpen, setmodalFullOpen] = useState(false);
  const [activeTab, setactiveTab] = useState(3);
  const [modalFullBody, setmodalFullBody] = useState(<></>);
  const [old, setOld] = useState({});
  const [vendorListOptions, setVendorListOptions] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [isLoadingVendorList, setIsLoadingVendorList] = useState(false);
  const [quantity, setQuantity] = useState("")
  // NEW STATE: Track if vendor list has data
  const [hasVendorListData, setHasVendorListData] = useState(false);

  console.log( quantity,"__projectuniqueId__");
  const watchedVendorId = watch("vendorId");

  const dataGetterOld = useSelector((state) => {
    let oldata = state.projectList.getuserallocatedproject[0];
    if (oldata) {
      if (old["empDeatils"]) {
        if (oldata != old) {
          setValue("mileName", formValue["Name"]);
          setValue("ptypeId", oldata["PId"]);
          setOld(oldata);
        }
      } else {
        setValue("mileName", formValue["Name"]);
        setValue("ptypeId", oldata["PId"]);
        setOld(oldata);
      }
    }
    return oldata;
  });

  const workDescriptionOption = useSelector((state) => {
    return state?.adminData?.getPartnerActivity.map((itm) => {
      return {
        label: itm.workDescriptionName,
        value: itm.workDescription + ":;" + itm.milestone,
      };
    });
  });

 
  const fetchVendorList = async (vendorId) => {
    if (!vendorId) {
      console.log("No vendor ID provided");
      return;
    }

    setIsLoadingVendorList(true);
    setHasVendorListData(false); // Reset the data flag
    
    try {
      const data = {
        vendorId: vendorId,
        projectId: itemData?.projectuniqueId,
        projectGroup: itemData?.projectGropupId,
        customerId: itemData?.customerId,
        subProject: itemData?.SubProjectId,
      };

      console.log("Fetching vendor list with data:", data);

      dispatch(
        projectListActions.VendorList(
          data,
          (response) => {
            console.log("____response____", response);

            // Check if response has data
            if (
              response &&
              response.data &&
              Array.isArray(response.data) &&
              response.data.length > 0
            ) {
              const vendorOptions = response.data.map((item) => ({
                label: `${item.itemCodeDescription} (${item.itemCode})`,
                value: item._id, 
                itemCode: item.itemCode, 
                itemCodeDescription: item.itemCodeDescription, 
              }));

              console.log("Processed vendor options:", vendorOptions);
              setVendorListOptions(vendorOptions);
              setHasVendorListData(true); // Set to true when data is available
            } else if (
              response &&
              Array.isArray(response) &&
              response.length > 0
            ) {
              // Fallback for old response format
              const vendorOptions = response.map((item) => ({
                label: item.name || item.vendorName || `Vendor ${item.id}`,
                value: item.id || item.vendorId,
              }));

              console.log("Processed vendor options (fallback):", vendorOptions);
              setVendorListOptions(vendorOptions);
              setHasVendorListData(true); // Set to true when data is available
            } else {
              console.log("No vendor data received or empty response");
              setVendorListOptions([]);
              setHasVendorListData(false); // Set to false when no data
            }
            setIsLoadingVendorList(false);
          },
          (error) => {
            // Error callback
            console.error("Error fetching vendor list:", error);
            setVendorListOptions([]);
            setHasVendorListData(false); // Set to false on error
            setIsLoadingVendorList(false);
          }
        )
      );
    } catch (error) {
      console.error("Exception in fetchVendorList:", error);
      setVendorListOptions([]);
      setHasVendorListData(false); // Set to false on exception
      setIsLoadingVendorList(false);
    }
  };

  useEffect(() => {
    console.log("Vendor ID changed:", watchedVendorId);

    if (watchedVendorId && watchedVendorId !== selectedVendor) {
      console.log("Fetching vendor list for vendor:", watchedVendorId);
      setSelectedVendor(watchedVendorId);
      setValue("vendorListId", ""); 
      fetchVendorList(watchedVendorId);
    } else if (!watchedVendorId) {
      setSelectedVendor(null);
      setVendorListOptions([]);
      setHasVendorListData(false); // Reset when no vendor selected
      setValue("vendorListId", "");
    }
  }, [watchedVendorId, selectedVendor]);

  let Form = [
    {
      label: "Work Description",
      name: "workDescription",
      value: "",
      required: true,
      type: "select",
      option: workDescriptionOption,
      props: {
        onChange: (e) => {
          const selectedValue = e.target.value.split(":;")[1];
          setValue("groupMilestone", selectedValue);
        },
      },
      classes: "col-span-1",
    },
    {
      label: "Milestone Name",
      name: "groupMilestone",
      value: "",
      required: true,
      type: "sdisabled",
      classes: "col-span-1",
    },
  ];

  if (formName !== "Deallocate Task") {
    Form.push({
      label: "Assign Vendor",
      name: "vendorId",
      type: "newSingleSelect50",
      value: "",
      singleSelect: true,
      option: dataGetterOld
        ? dataGetterOld["vendorDetails"]
          ? dataGetterOld["vendorDetails"].map((vendor) => ({
              value: vendor.id,
              label: vendor.name,
            }))
          : []
        : [],
      id: dataGetterOld
        ? dataGetterOld["vendorDetails"]
          ? dataGetterOld["vendorDetails"].map((vendor) => ({
              value: vendor.id,
              label: vendor.name,
            }))
          : []
        : [],
      onSelecting: (selectedOption) => {
        console.log("onSelecting vendor", selectedOption);
        setValue("userId", "");
        setValue("vendorListId", "");
        setVendorListOptions([]);
        setHasVendorListData(false); // Reset when vendor changes
      },
      onRemoving: (removedOption) => {
        console.log("onRemoving vendor", removedOption);
        setValue("userId", "");
        setValue("vendorListId", "");
        setVendorListOptions([]);
        setSelectedVendor(null);
        setHasVendorListData(false); // Reset when vendor removed
      },
      required: true,
      classes: "col-span-1",
      width: "400px",
    });

    // MODIFIED CONDITION: Only show dropdown when vendor is selected AND has data
    if (selectedVendor && hasVendorListData) {
      Form.push({
        label: "Select from Vendor List",
        name: "vendorListId",
        type: "newSingleSelect50",
        value: "",
        singleSelect: true,
        option: vendorListOptions,
        id: vendorListOptions,
        disabled: false,
        placeholder: "Select a vendor",
        onSelecting: (selectedOption) => {
          console.log("onSelecting from vendor list", selectedOption);
          console.log("Selected item details:", {
            id: selectedOption.value,
            itemCode: selectedOption.itemCode,
            description: selectedOption.itemCodeDescription,
          });
        },
        onRemoving: (removedOption) => {
          console.log("onRemoving from vendor list", removedOption);
        },
        required: true,
        classes: "col-span-1",
        width: "400px",
      });
    }
  }

  const resetAllStates = () => {
    // Reset form
    reset();
    // Reset all vendor-related states
    setVendorListOptions([]);
    setSelectedVendor(null);
    setIsLoadingVendorList(false);
    setHasVendorListData(false);
    setQuantity("");
    // Clear form values
    setValue("vendorId", "");
    setValue("vendorListId", "");
    setValue("workDescription", "");
    setValue("groupMilestone", "");
  };

  const onTableViewSubmit = (data) => {
    console.log("Form submission data:", data);

    let allData = {};
    allData["workDescription"] = data["workDescription"].split(":;")[0];
    allData["groupMilestone"] = data["groupMilestone"];
    allData["vendorId"] = data["vendorId"];
    allData["siteId"] = listsite;
    allData["quantity"]=quantity;
  
    if (data["vendorListId"]) {
      allData["vendorListId"] = data["vendorListId"];

      const selectedVendorItem = vendorListOptions.find(
        (option) => option.value === data["vendorListId"]
      );
      if (selectedVendorItem) {
        console.log(selectedVendorItem,'___selectedVendorItem__')
        allData["vendorMileStoneCostId"] = selectedVendorItem?.value;
        allData["itemCodeDescription"] = selectedVendorItem?.itemCodeDescription;
        console.log("Selected vendor item details:", selectedVendorItem);
      }
    }

    console.log("Submitting data:", allData);

    if (formName !== "Deallocate Task") {
      dispatch(
        projectListActions.partnerGroupMilestonePatch(
          Urls.projectList_partner_group_milestone,
          allData,
          () => {
            // Reset and refresh states after successful submission
            resetAllStates();
            
            dispatch(
              projectListActions.getProjectTypeAll(projectuniqueId, filtervalue)
            );
            setIsOpen(false);
            checkbox([]);
            parentcheckbox([]);
          }
        )
      );
    } else {
      dispatch(
        projectListActions.partnerGroupMilestonePost(
          Urls.projectList_partner_group_milestone,
          allData,
          () => {
            // Reset and refresh states after successful submission
            resetAllStates();
            
            dispatch(
              projectListActions.getProjectTypeAll(projectuniqueId, filtervalue)
            );
            setIsOpen(false);
            checkbox([]);
            parentcheckbox([]);
          }
        )
      );
    }
  };

  useEffect(() => {
    resetAllStates(); // Use the centralized reset function
  }, [reset]);

  return (
    <>
      <Modal
        size={"xl"}
        children={modalFullBody}
        isOpen={modalFullOpen}
        setIsOpen={setmodalFullOpen}
      />

      <div className="">
        <InputDropdown setQuantity={setQuantity}/>
        <CommonForm
          classes={""}
          Form={Form}
          errors={errors}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />

        <Button
          classes={"mt-2 w-sm text-center flex mx-auto"}
          onClick={handleSubmit(onTableViewSubmit)}
          name="Submit"
        />
      </div>
    </>
  );
};
export default VendorGroupTaskAllocation;
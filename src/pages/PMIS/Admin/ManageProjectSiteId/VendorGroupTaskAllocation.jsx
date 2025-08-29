  

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
  const [quantityValue, setQuantityValue] = useState({})
   const [selectedOption,setSelectedOption] = useState("")
  const [selectedWorkDescription, setSelectedWorkDescription] = useState("");

  const [hasVendorListData, setHasVendorListData] = useState(false);

  // console.log(itemData, "dddddddddd");

  // console.log(quantity, "__projectuniqueId__");
  const watchedVendorId = watch("vendorId");
  const watchedWorkDescription = watch("workDescription");

  // console.log(watchedWorkDescription, "watchedWorkDescription");
  // console.log(selectedWorkDescription, "selectedWorkDescription");

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
    return (
      state?.adminData?.getPartnerActivity?.map((itm) => {
        return {
          label: itm.workDescriptionName,
          value: itm.workDescription + ":;" + itm.milestone,
        };
      }) || []
    );
  });

  // console.log(
  //   workDescriptionOption,
  //   "workDescriptionOptionworkDescriptionOption"
  // );

  

  const fetchVendorList = async (vendorId, workDescription = null) => {
    if (!vendorId) {
      // console.log("No vendor ID provided");
      return;
    }

    // console.log("fetchVendorList called with:", { vendorId, workDescription });

    setIsLoadingVendorList(true);
    setHasVendorListData(false);

    try {
      let workDescriptionValue = workDescription || selectedWorkDescription;
      let workDescriptionName = "";
      let milestoneValue = "";

      if (!workDescriptionValue) {
        const currentWorkDescription = getValues("workDescription");
        if (currentWorkDescription) {
          workDescriptionValue = currentWorkDescription.split(":;")[0];
          milestoneValue = currentWorkDescription.split(":;")[1];

          const selectedOption = workDescriptionOption.find(
            (option) => option.value === currentWorkDescription
          );
          workDescriptionName = selectedOption ? selectedOption.label : "";
        } else {
          workDescriptionValue = "";
        }
      } else {
        const selectedOption = workDescriptionOption.find(
          (option) => option.value.split(":;")[0] === workDescriptionValue
        );
        workDescriptionName = selectedOption ? selectedOption.label : "";
        milestoneValue = selectedOption
          ? selectedOption.value.split(":;")[1]
          : "";
      }

      // console.log("Final workDescriptionValue:", workDescriptionValue);
      // console.log("Final workDescriptionName:", workDescriptionName);
      // console.log("Final milestoneValue:", milestoneValue);

      const data = {
        vendorId: vendorId,
        projectId: itemData?.projectuniqueId,
        projectGroup: itemData?.projectGropupId || itemData?.projectGroupId ,
        customerId: itemData?.customerId,
        subProject: itemData?.SubProjectId,
        // workDescription:
        //   workDescriptionValue || itemData?.workDescriptionName || "",
        // workDescriptionName:
        //   workDescriptionName || itemData?.workDescriptionName || "",
        milestone: milestoneValue || itemData?.milestone,
      };

      // console.log("API data being sent:", data);

      dispatch(
        projectListActions.VendorList(
          data,
          (response) => {
            // console.log("VendorList API response:", response);

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

              // console.log("Processed vendor options:", vendorOptions);
              setVendorListOptions(vendorOptions);
              setHasVendorListData(true);
            } else if (
              response &&
              Array.isArray(response) &&
              response.length > 0
            ) {
              const vendorOptions = response.map((item) => ({
                label: item.name || item.vendorName || `Vendor ${item.id}`,
                value: item.id || item.vendorId,
              }));

              // console.log(
              //   "Processed vendor options (fallback):",
              //   vendorOptions
              // );
              setVendorListOptions(vendorOptions);
              setHasVendorListData(true);
            } else {
              // console.log("No vendor data received or empty response");
              setVendorListOptions([]);
              setHasVendorListData(false);
            }
            setIsLoadingVendorList(false);
          },
          (error) => {
            console.error("Error fetching vendor list:", error);
            setVendorListOptions([]);
            setHasVendorListData(false);
            setIsLoadingVendorList(false);
          }
        )
      );
    } catch (error) {
      console.error("Exception in fetchVendorList:", error);
      setVendorListOptions([]);
      setHasVendorListData(false);
      setIsLoadingVendorList(false);
    }
  };

  useEffect(() => {
    // console.log("Vendor ID changed:", watchedVendorId);

    if (watchedVendorId && watchedVendorId !== selectedVendor) {
      // console.log("Fetching vendor list for vendor:", watchedVendorId);
      setSelectedVendor(watchedVendorId);
      setValue("vendorListId", "");

      setTimeout(() => {
        fetchVendorList(watchedVendorId);
      }, 100);
    } else if (!watchedVendorId) {
      setSelectedVendor(null);
      setVendorListOptions([]);
      setHasVendorListData(false);
      setValue("vendorListId", "");
    }
  }, [watchedVendorId]);

  useEffect(() => {
    if (
      watchedWorkDescription &&
      watchedWorkDescription !== selectedWorkDescription
    ) {
      const workDescriptionValue = watchedWorkDescription.split(":;")[0];
      setSelectedWorkDescription(workDescriptionValue);

      if (watchedVendorId) {
        // console.log("Work description changed, refetching vendor list");
        setValue("vendorListId", "");
        setVendorListOptions([]);
        setHasVendorListData(false);

        setTimeout(() => {
          fetchVendorList(watchedVendorId, workDescriptionValue);
        }, 100);
      }
    }
  }, [watchedWorkDescription, watchedVendorId]);


  // const handleMilestone =(mileStone)=>{
  //   console.log(mileStone,"__Milestone")
  //   setValue("groupMilestone", mileStone);
  // }

  const watchGroupMilestone = watch("workDescription");


  useEffect(()=>{

    // console.log(watchGroupMilestone,"Runningg_Again")
      // console.log()
      if(watchGroupMilestone?.includes(":;")){

          const workDescriptionValue = watchGroupMilestone.split(":;")[0];
          const mileStoneValue = watchGroupMilestone.split(":;")[1];
          setValue("groupMilestone",mileStoneValue);
          setSelectedWorkDescription(workDescriptionValue);

          const currentVendorId = getValues("vendorId");
          if (currentVendorId) {
            // console.log(
            //   "Work description changed in onChange, refetching vendor list"
            // );
            setValue("vendorListId", "");
            setVendorListOptions([]);
            setHasVendorListData(false);

            setTimeout(() => {
              fetchVendorList(currentVendorId, workDescriptionValue);
            }, 100);
          }
      }
  },[watchGroupMilestone])


  // console.log(watchGroupMilestone,"___watchGroupMilestone__")
 let quantityOptions = []
  let temp={}
  for (let i = 1; i <= 11; i++) {
    if(i<11){
       temp = {
      label: i,
      value: i
    }
    }else{
      temp = {
      label: "Custom Value",
      value: "custom"
    }
    }
    quantityOptions.push(temp);

  }

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
          // const selectedValue = e.target.value;
          // console.log(selectedValue,"___selectedValue")
          // const milestoneValue = selectedValue.split(":;")[1];
          // console.log(milestoneValue,"___selectedValue");
          // const workDescriptionValue = selectedValue.split(":;")[0];

          // console.log("Work description onChange:", {
          //   selectedValue,
          //   milestoneValue,
          //   workDescriptionValue,
          // });
          
          // handleMilestone(milestoneValue)
          // setValue("groupMilestone", milestoneValue);
          // setSelectedWorkDescription(workDescriptionValue);

          // const currentVendorId = getValues("vendorId");
          // if (currentVendorId) {
          //   // console.log(
          //   //   "Work description changed in onChange, refetching vendor list"
          //   // );
          //   setValue("vendorListId", "");
          //   setVendorListOptions([]);
          //   setHasVendorListData(false);

          //   setTimeout(() => {
          //     fetchVendorList(currentVendorId, workDescriptionValue);
          //   }, 100);
          // }
        },
      },
      classes: "col-span-1",
    },
    {
      label: "Milestone Name",
      name: "groupMilestone",
      value: watchGroupMilestone?.length>0?watchGroupMilestone?.split(":;")[1]:"",
      required: true,
      type: "sdisabled",
      classes: "col-span-1",
    },
    {
          label: `Quantity  `,
          name: `quantity`,
          required: false,
          type: "customSelect",
          selectedOption:selectedOption,
          option: quantityOptions,
          // changeTo:"text",
          props: {
            onChange: (e) => {
              const  key  = `quantity0${i}`
              setSelectedOption(prev=>prev=e?.target?.value)
              setQuantityValue(prev => ({
                                  ...prev,
                                  [key]: Number(e?.target?.value)
                                }));
            },
          },

          classes: "col-span-1",
        }
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
        // console.log("onSelecting vendor", selectedOption);
        setValue("userId", "");
        setValue("vendorListId", "");
        setVendorListOptions([]);
        setHasVendorListData(false);
      },
      onRemoving: (removedOption) => {
        // console.log("onRemoving vendor", removedOption);
        setValue("userId", "");
        setValue("vendorListId", "");
        setVendorListOptions([]);
        setSelectedVendor(null);
        setHasVendorListData(false);
      },
      required: true,
      classes: "col-span-1",
      width: "400px",
    });

    if (selectedVendor && hasVendorListData && vendorListOptions.length > 0) {
      Form.push({
        label: "Select Vendor Item Code Desc.",
        name: "vendorListId",
        type: "newSingleSelect50",
        value: "",
        singleSelect: true,
        option: vendorListOptions,
        id: vendorListOptions,
        disabled: isLoadingVendorList,
        placeholder: isLoadingVendorList ? "Loading..." : "Select a vendor",
        onSelecting: (selectedOption) => {
          // console.log("onSelecting from vendor list", selectedOption);
          // console.log("Selected item details:", {
          //   id: selectedOption.value,
          //   itemCode: selectedOption.itemCode,
          //   description: selectedOption.itemCodeDescription,
          // });
        },
        onRemoving: (removedOption) => {
          // console.log("onRemoving from vendor list", removedOption);
        },
        required: true,
        classes: "col-span-1",
        width: "400px",
      });
    } else if (selectedVendor && isLoadingVendorList) {
      Form.push({
        label: "Select Vendor Item Code Desc.",
        name: "vendorListId",
        type: "text",
        value: "Loading vendor list...",
        disabled: true,
        classes: "col-span-1",
      });
    } else if (selectedVendor && !hasVendorListData && !isLoadingVendorList) {
      Form.push({
        label: "Select Vendor Item Code Desc.",
        name: "vendorListId",
        type: "text",
        value: "No vendor list data available",
        disabled: true,
        classes: "col-span-1",
      });
    }
  }

  const resetAllStates = () => {
    reset();
    setVendorListOptions([]);
    setSelectedVendor(null);
    setIsLoadingVendorList(false);
    setHasVendorListData(false);
    setQuantityValue("");
    setSelectedWorkDescription("");

    setValue("vendorId", "");
    setValue("vendorListId", "");
    setValue("workDescription", "");
    setValue("groupMilestone", "");
    setValue("quantity","")
  };
  console.log(quantityValue?.quantity,"___quantity__quantitu")
  const onTableViewSubmit = (data) => {
    // console.log("Form submission data:", data);
    // console.log(quantityValue, "___quantity");

    if (quantityValue?.quantity === "custom") {
      alert("Please fill quantity");
      return;
    }

    if (!data.workDescription) {
      alert("Please select work description");
      return;
    }

    if (!data.vendorId) {
      alert("Please select vendor");
      return;
    }

    let allData = {};
    allData["workDescription"] = data["workDescription"].split(":;")[0];
    allData["groupMilestone"] = data["groupMilestone"];
    allData["vendorId"] = data["vendorId"];
    allData["siteId"] = listsite;
    allData["quantity"] =+quantityValue?.quantity;

    const milestoneFromWorkDescription = data["workDescription"].split(":;")[1];
    allData["milestone"] =
      milestoneFromWorkDescription ||
      data["groupMilestone"] ||
      itemData?.milestone;

    if (data["vendorListId"]) {
      allData["vendorListId"] = data["vendorListId"];

      const selectedVendorItem = vendorListOptions.find(
        (option) => option.value === data["vendorListId"]
      );
      if (selectedVendorItem) {
        // console.log(selectedVendorItem, "___selectedVendorItem__");
        allData["vendorMileStoneCostId"] = selectedVendorItem?.value;
        allData["itemCodeDescription"] =
          selectedVendorItem?.itemCodeDescription;
        // console.log("Selected vendor item details:", selectedVendorItem);
      }
    }

    console.log("___alllData", allData);

    if (formName !== "Deallocate Task") {
      dispatch(
        projectListActions.partnerGroupMilestonePatch(
          Urls.projectList_partner_group_milestone,
          allData,
          () => {
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
    resetAllStates();
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
        <CommonForm
          classes={""}
          Form={Form}
          errors={errors}
          register={register}
          setValue={setValue}
          getValues={getValues}
          setQuantityValue={setQuantityValue}
          quantityValue={quantityValue}
        />

          {/* <CommonForm
          classes={"grid-cols-2 gap-1"}
          Form={mileStoneCompletion}
          errors={errors}
          register={register}
          setValue={setValue}
          getValues={getValues}
          setQuantityValue={setQuantityValue}
          quantityValue={quantityValue}
        /> */}

        {/* <InputDropdown quantity={quantity} setQuantity={setQuantity} /> */}

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


// =====================================================Current Working Component
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
//   const [quantity, setQuantity] = useState("");
//   const [selectedWorkDescription, setSelectedWorkDescription] = useState("");

//   const [hasVendorListData, setHasVendorListData] = useState(false);

//   // console.log(itemData, "dddddddddd");

//   // console.log(quantity, "__projectuniqueId__");
//   const watchedVendorId = watch("vendorId");
//   const watchedWorkDescription = watch("workDescription");

//   // console.log(watchedWorkDescription, "watchedWorkDescription");
//   // console.log(selectedWorkDescription, "selectedWorkDescription");

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
//     return (
//       state?.adminData?.getPartnerActivity?.map((itm) => {
//         return {
//           label: itm.workDescriptionName,
//           value: itm.workDescription + ":;" + itm.milestone,
//         };
//       }) || []
//     );
//   });

//   // console.log(
//   //   workDescriptionOption,
//   //   "workDescriptionOptionworkDescriptionOption"
//   // );

  

//   const fetchVendorList = async (vendorId, workDescription = null) => {
//     if (!vendorId) {
//       // console.log("No vendor ID provided");
//       return;
//     }

//     // console.log("fetchVendorList called with:", { vendorId, workDescription });

//     setIsLoadingVendorList(true);
//     setHasVendorListData(false);

//     try {
//       let workDescriptionValue = workDescription || selectedWorkDescription;
//       let workDescriptionName = "";
//       let milestoneValue = "";

//       if (!workDescriptionValue) {
//         const currentWorkDescription = getValues("workDescription");
//         if (currentWorkDescription) {
//           workDescriptionValue = currentWorkDescription.split(":;")[0];
//           milestoneValue = currentWorkDescription.split(":;")[1];

//           const selectedOption = workDescriptionOption.find(
//             (option) => option.value === currentWorkDescription
//           );
//           workDescriptionName = selectedOption ? selectedOption.label : "";
//         } else {
//           workDescriptionValue = "";
//         }
//       } else {
//         const selectedOption = workDescriptionOption.find(
//           (option) => option.value.split(":;")[0] === workDescriptionValue
//         );
//         workDescriptionName = selectedOption ? selectedOption.label : "";
//         milestoneValue = selectedOption
//           ? selectedOption.value.split(":;")[1]
//           : "";
//       }

//       // console.log("Final workDescriptionValue:", workDescriptionValue);
//       // console.log("Final workDescriptionName:", workDescriptionName);
//       // console.log("Final milestoneValue:", milestoneValue);

//       const data = {
//         vendorId: vendorId,
//         projectId: itemData?.projectuniqueId,
//         projectGroup: itemData?.projectGropupId || itemData?.projectGroupId ,
//         customerId: itemData?.customerId,
//         subProject: itemData?.SubProjectId,
//         // workDescription:
//         //   workDescriptionValue || itemData?.workDescriptionName || "",
//         // workDescriptionName:
//         //   workDescriptionName || itemData?.workDescriptionName || "",
//         milestone: milestoneValue || itemData?.milestone,
//       };

//       // console.log("API data being sent:", data);

//       dispatch(
//         projectListActions.VendorList(
//           data,
//           (response) => {
//             // console.log("VendorList API response:", response);

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

//               // console.log("Processed vendor options:", vendorOptions);
//               setVendorListOptions(vendorOptions);
//               setHasVendorListData(true);
//             } else if (
//               response &&
//               Array.isArray(response) &&
//               response.length > 0
//             ) {
//               const vendorOptions = response.map((item) => ({
//                 label: item.name || item.vendorName || `Vendor ${item.id}`,
//                 value: item.id || item.vendorId,
//               }));

//               // console.log(
//               //   "Processed vendor options (fallback):",
//               //   vendorOptions
//               // );
//               setVendorListOptions(vendorOptions);
//               setHasVendorListData(true);
//             } else {
//               // console.log("No vendor data received or empty response");
//               setVendorListOptions([]);
//               setHasVendorListData(false);
//             }
//             setIsLoadingVendorList(false);
//           },
//           (error) => {
//             console.error("Error fetching vendor list:", error);
//             setVendorListOptions([]);
//             setHasVendorListData(false);
//             setIsLoadingVendorList(false);
//           }
//         )
//       );
//     } catch (error) {
//       console.error("Exception in fetchVendorList:", error);
//       setVendorListOptions([]);
//       setHasVendorListData(false);
//       setIsLoadingVendorList(false);
//     }
//   };

//   useEffect(() => {
//     // console.log("Vendor ID changed:", watchedVendorId);

//     if (watchedVendorId && watchedVendorId !== selectedVendor) {
//       // console.log("Fetching vendor list for vendor:", watchedVendorId);
//       setSelectedVendor(watchedVendorId);
//       setValue("vendorListId", "");

//       setTimeout(() => {
//         fetchVendorList(watchedVendorId);
//       }, 100);
//     } else if (!watchedVendorId) {
//       setSelectedVendor(null);
//       setVendorListOptions([]);
//       setHasVendorListData(false);
//       setValue("vendorListId", "");
//     }
//   }, [watchedVendorId]);

//   useEffect(() => {
//     if (
//       watchedWorkDescription &&
//       watchedWorkDescription !== selectedWorkDescription
//     ) {
//       const workDescriptionValue = watchedWorkDescription.split(":;")[0];
//       setSelectedWorkDescription(workDescriptionValue);

//       if (watchedVendorId) {
//         // console.log("Work description changed, refetching vendor list");
//         setValue("vendorListId", "");
//         setVendorListOptions([]);
//         setHasVendorListData(false);

//         setTimeout(() => {
//           fetchVendorList(watchedVendorId, workDescriptionValue);
//         }, 100);
//       }
//     }
//   }, [watchedWorkDescription, watchedVendorId]);


//   // const handleMilestone =(mileStone)=>{
//   //   console.log(mileStone,"__Milestone")
//   //   setValue("groupMilestone", mileStone);
//   // }

//   const watchGroupMilestone = watch("workDescription");


//   useEffect(()=>{

//     // console.log(watchGroupMilestone,"Runningg_Again")
//       // console.log()
//       if(watchGroupMilestone?.includes(":;")){

//           const workDescriptionValue = watchGroupMilestone.split(":;")[0];
//           const mileStoneValue = watchGroupMilestone.split(":;")[1];
//           setValue("groupMilestone",mileStoneValue);
//           setSelectedWorkDescription(workDescriptionValue);

//           const currentVendorId = getValues("vendorId");
//           if (currentVendorId) {
//             // console.log(
//             //   "Work description changed in onChange, refetching vendor list"
//             // );
//             setValue("vendorListId", "");
//             setVendorListOptions([]);
//             setHasVendorListData(false);

//             setTimeout(() => {
//               fetchVendorList(currentVendorId, workDescriptionValue);
//             }, 100);
//           }
//       }
//   },[watchGroupMilestone])


//   // console.log(watchGroupMilestone,"___watchGroupMilestone__")

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
//           // const selectedValue = e.target.value;
//           // console.log(selectedValue,"___selectedValue")
//           // const milestoneValue = selectedValue.split(":;")[1];
//           // console.log(milestoneValue,"___selectedValue");
//           // const workDescriptionValue = selectedValue.split(":;")[0];

//           // console.log("Work description onChange:", {
//           //   selectedValue,
//           //   milestoneValue,
//           //   workDescriptionValue,
//           // });
          
//           // handleMilestone(milestoneValue)
//           // setValue("groupMilestone", milestoneValue);
//           // setSelectedWorkDescription(workDescriptionValue);

//           // const currentVendorId = getValues("vendorId");
//           // if (currentVendorId) {
//           //   // console.log(
//           //   //   "Work description changed in onChange, refetching vendor list"
//           //   // );
//           //   setValue("vendorListId", "");
//           //   setVendorListOptions([]);
//           //   setHasVendorListData(false);

//           //   setTimeout(() => {
//           //     fetchVendorList(currentVendorId, workDescriptionValue);
//           //   }, 100);
//           // }
//         },
//       },
//       classes: "col-span-1",
//     },
//     {
//       label: "Milestone Name",
//       name: "groupMilestone",
//       value: watchGroupMilestone?.length>0?watchGroupMilestone?.split(":;")[1]:"",
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
//         // console.log("onSelecting vendor", selectedOption);
//         setValue("userId", "");
//         setValue("vendorListId", "");
//         setVendorListOptions([]);
//         setHasVendorListData(false);
//       },
//       onRemoving: (removedOption) => {
//         // console.log("onRemoving vendor", removedOption);
//         setValue("userId", "");
//         setValue("vendorListId", "");
//         setVendorListOptions([]);
//         setSelectedVendor(null);
//         setHasVendorListData(false);
//       },
//       required: true,
//       classes: "col-span-1",
//       width: "400px",
//     });

//     if (selectedVendor && hasVendorListData && vendorListOptions.length > 0) {
//       Form.push({
//         label: "Select Vendor Item Code Desc.",
//         name: "vendorListId",
//         type: "newSingleSelect50",
//         value: "",
//         singleSelect: true,
//         option: vendorListOptions,
//         id: vendorListOptions,
//         disabled: isLoadingVendorList,
//         placeholder: isLoadingVendorList ? "Loading..." : "Select a vendor",
//         onSelecting: (selectedOption) => {
//           // console.log("onSelecting from vendor list", selectedOption);
//           // console.log("Selected item details:", {
//           //   id: selectedOption.value,
//           //   itemCode: selectedOption.itemCode,
//           //   description: selectedOption.itemCodeDescription,
//           // });
//         },
//         onRemoving: (removedOption) => {
//           // console.log("onRemoving from vendor list", removedOption);
//         },
//         required: true,
//         classes: "col-span-1",
//         width: "400px",
//       });
//     } else if (selectedVendor && isLoadingVendorList) {
//       Form.push({
//         label: "Select Vendor Item Code Desc.",
//         name: "vendorListId",
//         type: "text",
//         value: "Loading vendor list...",
//         disabled: true,
//         classes: "col-span-1",
//       });
//     } else if (selectedVendor && !hasVendorListData && !isLoadingVendorList) {
//       Form.push({
//         label: "Select Vendor Item Code Desc.",
//         name: "vendorListId",
//         type: "text",
//         value: "No vendor list data available",
//         disabled: true,
//         classes: "col-span-1",
//       });
//     }
//   }

//   const resetAllStates = () => {
//     reset();
//     setVendorListOptions([]);
//     setSelectedVendor(null);
//     setIsLoadingVendorList(false);
//     setHasVendorListData(false);
//     setQuantity("");
//     setSelectedWorkDescription("");

//     setValue("vendorId", "");
//     setValue("vendorListId", "");
//     setValue("workDescription", "");
//     setValue("groupMilestone", "");
//   };

//   const onTableViewSubmit = (data) => {
//     // console.log("Form submission data:", data);
//     console.log(quantity, "___quantity");

//     if (quantity === "custom") {
//       alert("Please fill quantity");
//       return;
//     }

//     if (!data.workDescription) {
//       alert("Please select work description");
//       return;
//     }

//     if (!data.vendorId) {
//       alert("Please select vendor");
//       return;
//     }

//     let allData = {};
//     allData["workDescription"] = data["workDescription"].split(":;")[0];
//     allData["groupMilestone"] = data["groupMilestone"];
//     allData["vendorId"] = data["vendorId"];
//     allData["siteId"] = listsite;
//     allData["quantity"] = quantity === "" ? 1 : +quantity;

//     const milestoneFromWorkDescription = data["workDescription"].split(":;")[1];
//     allData["milestone"] =
//       milestoneFromWorkDescription ||
//       data["groupMilestone"] ||
//       itemData?.milestone;

//     if (data["vendorListId"]) {
//       allData["vendorListId"] = data["vendorListId"];

//       const selectedVendorItem = vendorListOptions.find(
//         (option) => option.value === data["vendorListId"]
//       );
//       if (selectedVendorItem) {
//         // console.log(selectedVendorItem, "___selectedVendorItem__");
//         allData["vendorMileStoneCostId"] = selectedVendorItem?.value;
//         allData["itemCodeDescription"] =
//           selectedVendorItem?.itemCodeDescription;
//         // console.log("Selected vendor item details:", selectedVendorItem);
//       }
//     }

//     console.log("___alllData", allData);

//     // if (formName !== "Deallocate Task") {
//     //   dispatch(
//     //     projectListActions.partnerGroupMilestonePatch(
//     //       Urls.projectList_partner_group_milestone,
//     //       allData,
//     //       () => {
//     //         resetAllStates();
//     //         dispatch(
//     //           projectListActions.getProjectTypeAll(projectuniqueId, filtervalue)
//     //         );
//     //         setIsOpen(false);
//     //         checkbox([]);
//     //         parentcheckbox([]);
//     //       }
//     //     )
//     //   );
//     // } else {
//     //   dispatch(
//     //     projectListActions.partnerGroupMilestonePost(
//     //       Urls.projectList_partner_group_milestone,
//     //       allData,
//     //       () => {
//     //         resetAllStates();
//     //         dispatch(
//     //           projectListActions.getProjectTypeAll(projectuniqueId, filtervalue)
//     //         );
//     //         setIsOpen(false);
//     //         checkbox([]);
//     //         parentcheckbox([]);
//     //       }
//     //     )
//     //   );
//     // }
//   };

//   useEffect(() => {
//     resetAllStates();
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
//         <CommonForm
//           classes={""}
//           Form={Form}
//           errors={errors}
//           register={register}
//           setValue={setValue}
//           getValues={getValues}
//         />
//         <InputDropdown quantity={quantity} setQuantity={setQuantity} />

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



// =====================================================OLD CODE
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
//   const [quantity, setQuantity] = useState("");
//   const [selectedWorkDescription, setSelectedWorkDescription] = useState("");

//   const [hasVendorListData, setHasVendorListData] = useState(false);

//   // console.log(itemData, "dddddddddd");

//   // console.log(quantity, "__projectuniqueId__");
//   const watchedVendorId = watch("vendorId");
//   const watchedWorkDescription = watch("workDescription");

//   // console.log(watchedWorkDescription, "watchedWorkDescription");
//   // console.log(selectedWorkDescription, "selectedWorkDescription");

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
//     return (
//       state?.adminData?.getPartnerActivity?.map((itm) => {
//         return {
//           label: itm.workDescriptionName,
//           value: itm.workDescription + ":;" + itm.milestone,
//         };
//       }) || []
//     );
//   });

//   // console.log(
//   //   workDescriptionOption,
//   //   "workDescriptionOptionworkDescriptionOption"
//   // );

  

//   const fetchVendorList = async (vendorId, workDescription = null) => {
//     if (!vendorId) {
//       // console.log("No vendor ID provided");
//       return;
//     }

//     // console.log("fetchVendorList called with:", { vendorId, workDescription });

//     setIsLoadingVendorList(true);
//     setHasVendorListData(false);

//     try {
//       let workDescriptionValue = workDescription || selectedWorkDescription;
//       let workDescriptionName = "";
//       let milestoneValue = "";

//       if (!workDescriptionValue) {
//         const currentWorkDescription = getValues("workDescription");
//         if (currentWorkDescription) {
//           workDescriptionValue = currentWorkDescription.split(":;")[0];
//           milestoneValue = currentWorkDescription.split(":;")[1];

//           const selectedOption = workDescriptionOption.find(
//             (option) => option.value === currentWorkDescription
//           );
//           workDescriptionName = selectedOption ? selectedOption.label : "";
//         } else {
//           workDescriptionValue = "";
//         }
//       } else {
//         const selectedOption = workDescriptionOption.find(
//           (option) => option.value.split(":;")[0] === workDescriptionValue
//         );
//         workDescriptionName = selectedOption ? selectedOption.label : "";
//         milestoneValue = selectedOption
//           ? selectedOption.value.split(":;")[1]
//           : "";
//       }

//       // console.log("Final workDescriptionValue:", workDescriptionValue);
//       // console.log("Final workDescriptionName:", workDescriptionName);
//       // console.log("Final milestoneValue:", milestoneValue);

//       const data = {
//         vendorId: vendorId,
//         projectId: itemData?.projectuniqueId,
//         projectGroup: itemData?.projectGropupId,
//         customerId: itemData?.customerId,
//         subProject: itemData?.SubProjectId,
//         // workDescription:
//         //   workDescriptionValue || itemData?.workDescriptionName || "",
//         // workDescriptionName:
//         //   workDescriptionName || itemData?.workDescriptionName || "",
//         milestone: milestoneValue || itemData?.milestone,
//       };

//       // console.log("API data being sent:", data);

//       dispatch(
//         projectListActions.VendorList(
//           data,
//           (response) => {
//             // console.log("VendorList API response:", response);

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

//               // console.log("Processed vendor options:", vendorOptions);
//               setVendorListOptions(vendorOptions);
//               setHasVendorListData(true);
//             } else if (
//               response &&
//               Array.isArray(response) &&
//               response.length > 0
//             ) {
//               const vendorOptions = response.map((item) => ({
//                 label: item.name || item.vendorName || `Vendor ${item.id}`,
//                 value: item.id || item.vendorId,
//               }));

//               // console.log(
//               //   "Processed vendor options (fallback):",
//               //   vendorOptions
//               // );
//               setVendorListOptions(vendorOptions);
//               setHasVendorListData(true);
//             } else {
//               // console.log("No vendor data received or empty response");
//               setVendorListOptions([]);
//               setHasVendorListData(false);
//             }
//             setIsLoadingVendorList(false);
//           },
//           (error) => {
//             console.error("Error fetching vendor list:", error);
//             setVendorListOptions([]);
//             setHasVendorListData(false);
//             setIsLoadingVendorList(false);
//           }
//         )
//       );
//     } catch (error) {
//       console.error("Exception in fetchVendorList:", error);
//       setVendorListOptions([]);
//       setHasVendorListData(false);
//       setIsLoadingVendorList(false);
//     }
//   };

//   useEffect(() => {
//     // console.log("Vendor ID changed:", watchedVendorId);

//     if (watchedVendorId && watchedVendorId !== selectedVendor) {
//       // console.log("Fetching vendor list for vendor:", watchedVendorId);
//       setSelectedVendor(watchedVendorId);
//       setValue("vendorListId", "");

//       setTimeout(() => {
//         fetchVendorList(watchedVendorId);
//       }, 100);
//     } else if (!watchedVendorId) {
//       setSelectedVendor(null);
//       setVendorListOptions([]);
//       setHasVendorListData(false);
//       setValue("vendorListId", "");
//     }
//   }, [watchedVendorId]);

//   useEffect(() => {
//     if (
//       watchedWorkDescription &&
//       watchedWorkDescription !== selectedWorkDescription
//     ) {
//       const workDescriptionValue = watchedWorkDescription.split(":;")[0];
//       setSelectedWorkDescription(workDescriptionValue);

//       if (watchedVendorId) {
//         // console.log("Work description changed, refetching vendor list");
//         setValue("vendorListId", "");
//         setVendorListOptions([]);
//         setHasVendorListData(false);

//         setTimeout(() => {
//           fetchVendorList(watchedVendorId, workDescriptionValue);
//         }, 100);
//       }
//     }
//   }, [watchedWorkDescription, watchedVendorId]);


//   // const handleMilestone =(mileStone)=>{
//   //   console.log(mileStone,"__Milestone")
//   //   setValue("groupMilestone", mileStone);
//   // }

//   const watchGroupMilestone = watch("workDescription");


//   useEffect(()=>{

//     // console.log(watchGroupMilestone,"Runningg_Again")
//       // console.log()
//       if(watchGroupMilestone?.includes(":;")){

//           const workDescriptionValue = watchGroupMilestone.split(":;")[0];
//           const mileStoneValue = watchGroupMilestone.split(":;")[1];
//           setValue("groupMilestone",mileStoneValue);
//           setSelectedWorkDescription(workDescriptionValue);

//           const currentVendorId = getValues("vendorId");
//           if (currentVendorId) {
//             // console.log(
//             //   "Work description changed in onChange, refetching vendor list"
//             // );
//             setValue("vendorListId", "");
//             setVendorListOptions([]);
//             setHasVendorListData(false);

//             setTimeout(() => {
//               fetchVendorList(currentVendorId, workDescriptionValue);
//             }, 100);
//           }
//       }
//   },[watchGroupMilestone])


//   // console.log(watchGroupMilestone,"___watchGroupMilestone__")

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
//           // const selectedValue = e.target.value;
//           // console.log(selectedValue,"___selectedValue")
//           // const milestoneValue = selectedValue.split(":;")[1];
//           // console.log(milestoneValue,"___selectedValue");
//           // const workDescriptionValue = selectedValue.split(":;")[0];

//           // console.log("Work description onChange:", {
//           //   selectedValue,
//           //   milestoneValue,
//           //   workDescriptionValue,
//           // });
          
//           // handleMilestone(milestoneValue)
//           // setValue("groupMilestone", milestoneValue);
//           // setSelectedWorkDescription(workDescriptionValue);

//           // const currentVendorId = getValues("vendorId");
//           // if (currentVendorId) {
//           //   // console.log(
//           //   //   "Work description changed in onChange, refetching vendor list"
//           //   // );
//           //   setValue("vendorListId", "");
//           //   setVendorListOptions([]);
//           //   setHasVendorListData(false);

//           //   setTimeout(() => {
//           //     fetchVendorList(currentVendorId, workDescriptionValue);
//           //   }, 100);
//           // }
//         },
//       },
//       classes: "col-span-1",
//     },
//     {
//       label: "Milestone Name",
//       name: "groupMilestone",
//       value: watchGroupMilestone?.length>0?watchGroupMilestone?.split(":;")[1]:"",
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
//         // console.log("onSelecting vendor", selectedOption);
//         setValue("userId", "");
//         setValue("vendorListId", "");
//         setVendorListOptions([]);
//         setHasVendorListData(false);
//       },
//       onRemoving: (removedOption) => {
//         // console.log("onRemoving vendor", removedOption);
//         setValue("userId", "");
//         setValue("vendorListId", "");
//         setVendorListOptions([]);
//         setSelectedVendor(null);
//         setHasVendorListData(false);
//       },
//       required: true,
//       classes: "col-span-1",
//       width: "400px",
//     });

//     if (selectedVendor && hasVendorListData && vendorListOptions.length > 0) {
//       Form.push({
//         label: "Select Vendor Item Code Desc.",
//         name: "vendorListId",
//         type: "newSingleSelect50",
//         value: "",
//         singleSelect: true,
//         option: vendorListOptions,
//         id: vendorListOptions,
//         disabled: isLoadingVendorList,
//         placeholder: isLoadingVendorList ? "Loading..." : "Select a vendor",
//         onSelecting: (selectedOption) => {
//           // console.log("onSelecting from vendor list", selectedOption);
//           // console.log("Selected item details:", {
//           //   id: selectedOption.value,
//           //   itemCode: selectedOption.itemCode,
//           //   description: selectedOption.itemCodeDescription,
//           // });
//         },
//         onRemoving: (removedOption) => {
//           // console.log("onRemoving from vendor list", removedOption);
//         },
//         required: true,
//         classes: "col-span-1",
//         width: "400px",
//       });
//     } else if (selectedVendor && isLoadingVendorList) {
//       Form.push({
//         label: "Select from Vendor List",
//         name: "vendorListId",
//         type: "text",
//         value: "Loading vendor list...",
//         disabled: true,
//         classes: "col-span-1",
//       });
//     } else if (selectedVendor && !hasVendorListData && !isLoadingVendorList) {
//       Form.push({
//         label: "Select from Vendor List",
//         name: "vendorListId",
//         type: "text",
//         value: "No vendor list data available",
//         disabled: true,
//         classes: "col-span-1",
//       });
//     }
//   }

//   const resetAllStates = () => {
//     reset();
//     setVendorListOptions([]);
//     setSelectedVendor(null);
//     setIsLoadingVendorList(false);
//     setHasVendorListData(false);
//     setQuantity("");
//     setSelectedWorkDescription("");

//     setValue("vendorId", "");
//     setValue("vendorListId", "");
//     setValue("workDescription", "");
//     setValue("groupMilestone", "");
//   };

//   const onTableViewSubmit = (data) => {
//     // console.log("Form submission data:", data);
//     // console.log(quantity, "___quantity");

//     if (quantity === "custom") {
//       alert("Please fill quantity");
//       return;
//     }

//     if (!data.workDescription) {
//       alert("Please select work description");
//       return;
//     }

//     if (!data.vendorId) {
//       alert("Please select vendor");
//       return;
//     }

//     let allData = {};
//     allData["workDescription"] = data["workDescription"].split(":;")[0];
//     allData["groupMilestone"] = data["groupMilestone"];
//     allData["vendorId"] = data["vendorId"];
//     allData["siteId"] = listsite;
//     allData["quantity"] = quantity === "" ? 1 : +quantity;

//     const milestoneFromWorkDescription = data["workDescription"].split(":;")[1];
//     allData["milestone"] =
//       milestoneFromWorkDescription ||
//       data["groupMilestone"] ||
//       itemData?.milestone;

//     if (data["vendorListId"]) {
//       allData["vendorListId"] = data["vendorListId"];

//       const selectedVendorItem = vendorListOptions.find(
//         (option) => option.value === data["vendorListId"]
//       );
//       if (selectedVendorItem) {
//         // console.log(selectedVendorItem, "___selectedVendorItem__");
//         allData["vendorMileStoneCostId"] = selectedVendorItem?.value;
//         allData["itemCodeDescription"] =
//           selectedVendorItem?.itemCodeDescription;
//         // console.log("Selected vendor item details:", selectedVendorItem);
//       }
//     }

//     // console.log("Submitting data with milestone:", allData);

//     if (formName !== "Deallocate Task") {
//       dispatch(
//         projectListActions.partnerGroupMilestonePatch(
//           Urls.projectList_partner_group_milestone,
//           allData,
//           () => {
//             resetAllStates();
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
//             resetAllStates();
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
//     resetAllStates();
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
//         <CommonForm
//           classes={""}
//           Form={Form}
//           errors={errors}
//           register={register}
//           setValue={setValue}
//           getValues={getValues}
//         />
//         <InputDropdown quantity={quantity} setQuantity={setQuantity} />

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



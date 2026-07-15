// // import { useEffect, useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { useDispatch, useSelector } from "react-redux";
// // import CommonForm from "../../../../components/CommonForm";
// // import Button from "../../../../components/Button";
// // import Modal from "../../../../components/Modal";
// // import VendorActions from "../../../../store/actions/vendor-actions";
// // import gpTrackingActions from "../../../../store/actions/gpTrackingActions";
// // import { objectToQueryString } from "../../../../utils/commonFunnction";

// // const VendorCostForm = ({
// //   isOpen,
// //   setIsOpen,
// //   resetting,
// //   formValue = {},
// //   filtervalue,
// //   id=null
// // }) => {


// // const [selectedCustomer, setSelectedCustomer] = useState(null);
// // const [selectedprojectType, setSelectedprojectType] = useState(null);
// // const [selectedSubproject, setSelectedSubproject] = useState(null);

// // let projectTypeList = useSelector((state) => {
// //     return state?.vendorData?.getVendorCostProjectTypeList.map((itm) => {
// //       return {
// //         label: itm.projectType,
// //         value: itm.projectType,
// //       };
// //     });
// //   });

// // let projectGroupList = useSelector((state) => {
// //     return state?.vendorData?.getVendorCostProjetGroupList.map((itm) => {
// //       return {
// //         label: itm.projectGroupName,
// //         value: itm.projectGroup,
// //       };
// //     });
// //   });

// // let customerList = useSelector((state)=>{
// //         return state?.gpTrackingReducer?.getCustomer.map((itm) => {
// //             return {
// //                 label: itm?.customer,
// //                 value: itm?.uniqueId,
// //             };
// //           });
// //     })



    
// // let subProjectTypeList = useSelector((state) => {
// //     return state?.vendorData?.getVendorCostSubProjectTypeList.map((itm) => {
// //       return {
// //         label: itm.subProject,
// //         value: itm.subProjectId,
// //       };
// //     });
// //   });

// //   let vendorsList = useSelector((state) => {
// //     return state?.vendorData?.getVendorCostVendorsList.map((itm) => {
// //       return {
// //         label: itm.vendorName,
// //         value: itm.vendorId,
// //       };
// //     });
// //   });

// //   let vendorsCodeList = useSelector((state) => {
// //     return state?.vendorData?.getVendorCostVendorsList.map((itm) => {
// //       return {
// //         label: itm?.vendorCode,
// //         value: itm?.vendorId,
// //       };
// //     });
// //   });

// // let milestneList = useSelector((state) => {
// //     return state?.vendorData?.getVendorCostMilestoneList?.map((itm) => {
// //       return {
// //         id: itm?.MileStone,
// //         name: itm?.MileStone,
// //       };
// //     });
// //   }) || [];

  

// //   const HandleProjectTypeChange  = async (projectType) => {
// //         let filterData={
// //             'customerId':selectedCustomer,
// //             'projectType':projectType,
// //         }
// //         setSelectedprojectType(projectType)
// //         let strVal = objectToQueryString(filterData);
// //         // dispatch(VendorActions.getVendorCostSubprojectTypeList(true,`customerId=${e?.target?.value}?projectType=${projectType}`))
// //         await dispatch(VendorActions.getVendorCostSubprojectTypeList(true,strVal))
    
// //   };

  


// //   const [modalOpen, setmodalOpen] = useState(false);

// //   let dispatch = useDispatch();

// //   let Form = [
// //     {
// //         label: "Customer",
// //         value: "",
// //         name:Object.entries(formValue).length > 0? "customer": "customerId",
// //         type: Object.entries(formValue).length > 0 ? "sdisabled" : "newSingleSelect45",
// //         option: customerList,
// //         props: {
// //           onChange: (e) => {
// //             if (e.target.value){
// //               setSelectedCustomer(e?.target?.value)
// //               dispatch(VendorActions.getVendorCostprojectGroupList(true,`customerId=${e?.target?.value}`));
// //               dispatch(VendorActions.getVendorCostprojectTypeList(true,`customerId=${e?.target?.value}`));
// //               dispatch(VendorActions.getvendorCostVendorsList())
// //             }
// //             else {

// //             }
            

// //           },
// //         },
// //         required: true,
// //       },
    
// //       {
// //         label: "Project Group",
// //         value: "",
// //         name:
// //           Object.entries(formValue).length > 0
// //             ? "projectGroupName"
// //             : "projectGroup",
// //         type: Object.entries(formValue).length > 0 ? "sdisabled" : "newSingleSelect45",
// //         option: projectGroupList,
// //         props: {
// //         //   onChange: (e) => {
// //         //     handleCustomerChange(e.target.value);
// //         //   },
// //         },
// //         required: true,
// //       },
// //       {
// //         label: "Project Type",
// //         value: "",
// //         name:
// //           Object.entries(formValue).length > 0
// //             ? "projectType"
// //             : "projectTypeId",
// //         type: Object.entries(formValue).length > 0 ? "sdisabled" : "newSingleSelect45",
// //         option: projectTypeList,
// //         props:{
// //               onChange: (e) => {
// //                 HandleProjectTypeChange(e?.target?.value);
// //           },
// //         },
        
// //         required: true,
// //       },
// //       {
// //         label: "Sub Project",
// //         value: "",
// //         name:
// //           Object.entries(formValue).length > 0
// //             ? "subProject"
// //             : "subProjectId",
// //         type: Object.entries(formValue).length > 0 ? "sdisabled" : "newSingleSelect45",
// //         option: subProjectTypeList,
// //         props: {
// //           onChange: (e) => {
// //             let filterData={
// //                 'customerId':selectedCustomer,
// //                 'SubProjectId':e?.target?.value,
// //             }
// //             setSelectedSubproject(e?.target?.value)
// //             let strVal = objectToQueryString(filterData);
// //             dispatch(VendorActions.getVendorCostMilestoneList(true,strVal))
// //           },
// //         },
// //         required: true,
// //       },
    
// //     {
// //       label: "Activity Name",
// //       value: "",
// //       name: "activityName",
// //       type: "text",
// //       // required: true,
// //       filter: true,
// //       props: {
// //         onChange: (e) => {
// //           // console.log(e.target.value, "e geeter")
// //           // setValue("queries",e.target.name)
// //         },
// //       },
// //       classes: "col-span-1",
// //     },
// //     {
// //       label: "Customer Item Code",
// //       value: "",
// //       name: "customerItemCode",
// //       type: "text",
// //       // required: true,
// //       filter: true,
// //       props: {
// //         onChange: (e) => {
// //           // console.log(e.target.value, "e geeter")
// //           // setValue("queries",e.target.name)
// //         },
// //       },
// //       classes: "col-span-1",
// //     },
// //     {
// //       label: "Vendor Item Code",
// //       value: "",
// //       name: "itemCode",
// //       type: "text",
// //     //   required: true,
// //       filter: true,
// //       props: {
// //         onChange: (e) => {
// //           // console.log(e.target.value, "e geeter")
// //           // setValue("queries",e.target.name)
// //         },
// //       },
// //       classes: "col-span-1",
// //     },
// //     {
// //       label: "Item Code Description",
// //       value: "",
// //       name: "itemCodeDescription",
// //       type: "text",
// //       // required: true,
// //       filter: true,
// //       props: {
// //         onChange: (e) => {
// //           // console.log(e.target.value, "e geeter")
// //           // setValue("queries",e.target.name)
// //         },
// //       },
// //       classes: "col-span-1",
// //     },
// //     {
// //       label: "GBPA",
// //       value: "",
// //       name: "GBPA",
// //       type: "text",
// //       // required: true,
// //       filter: true,
// //       props: {
// //         onChange: (e) => {
// //           // console.log(e.target.value, "e geeter")
// //           // setValue("queries",e.target.name)
// //         },
// //       },
// //       classes: "col-span-1",
// //     },
    
// //     // {
// //     //     label: "Milestone",
// //     //     value: "",
// //     //     name:
// //     //       Object.entries(formValue).length > 0
// //     //         ? "MileStone"
// //     //         : "MileStone",
// //     //     type: Object.entries(formValue).length > 0 ? "select" : "select",
// //     //     option: milestneList,
// //     //     props: {
// //     //     //   onChange: (e) => {
// //     //     //     handleCustomerChange(e.target.value);
// //     //     //   },
// //     //     },
// //     //     required: true,
// //     //   },
// //     {
// //         label: "Vendor Name",
// //         value: "",
// //         name:
// //           Object.entries(formValue).length > 0
// //             ? "vendorName"
// //             : "vendorId",
// //         type: Object.entries(formValue).length > 0 ? "sdisabled" : "newSingleSelect45",
// //         option: vendorsList,
// //         props: {
// //           onChange: (e) => {
            
// //           },
// //         },
// //         required: true,
// //       },
// //     //   {
// //     //     label: "Vendor Code",
// //     //     value: "",
// //     //     name:
// //     //       Object.entries(formValue).length > 0
// //     //         ? "vendorCode"
// //     //         : "vendorId",
// //     //     type: Object.entries(formValue).length > 0 ? "sdisabled" : "select",
// //     //     option: vendorsCodeList,
// //     //     props: {
          
// //     //     },
// //     //     required: true,
// //     //   },
// //     {
// //       label: "Rate",
// //       value: "",
// //       name: "rate",
// //       type: "number",
// //       // required: true,
// //       filter: true,
// //       props: {
// //         onChange: (e) => {
// //           // console.log(e.target.value, "e geeter")
// //           // setValue("queries",e.target.name)
// //         },
// //       },
// //       classes: "col-span-1",
// //     },
// //     {
// //         label: "Milestone",
// //         name: "milestone",
// //         type:Object.entries(formValue).length > 0 ? "sdisabled" : "BigmuitiSelect",
// //         // type: "BigmuitiSelect",
// //         value: "",
// //         props: {
// //           onChange: (e) => {},
// //         },
// //         required: true,
// //         classes: "col-span-1",
// //         option:milestneList
// //       },
// //   ];
// //   const {
// //     register,
// //     handleSubmit,
// //     watch,
// //     reset,
// //     setValue,
// //     getValues,
// //     formState: { errors },
// //   } = useForm();

// //   const onTableViewSubmit = (data) => {
    
// //     if (formValue.uniqueId) {
// //       dispatch(
// //         VendorActions.postVendorCostMilestone(true,
// //           data,
// //           () => {
// //             setIsOpen(false);
// //             dispatch(
// //             //   VendorActions.getVendorCostMilestone(true, filtervalue)
// //             VendorActions.getVendorCostMilestone()
// //             );
// //           },
// //           formValue.uniqueId
// //         )
// //       );
// //     } else {
        
// //       dispatch(
// //         VendorActions.postVendorCostMilestone(true,data, () => {
// //           setIsOpen(false);
// //           dispatch(VendorActions.getVendorCostMilestonet());
// //         })
// //       );
// //     }
// //   };
// //   useEffect(() => {

// //     dispatch(gpTrackingActions.getGPCustomer())
// //     // `projectType=${e.target.value}`
// //     // dispatch(VendorActions.getVendorSubProject(true,`type=${"All"}`));
// //     if (!isOpen) {
// //       reset({});
// //       Form.forEach((key) => setValue(key.name, formValue[key.name] || ""));
// //     } else {
// //       reset({});
// //     }
// //   }, [isOpen, formValue, resetting]);
// //   return (
// //     <>
// //       <Modal
// //         size={"xl"}
// //         children={
// //           <>
// //             <CommonForm
// //               classes={"grid-cols-1 gap-1"}
// //               Form={Form}
// //               errors={errors}
// //               register={register}
// //               setValue={setValue}
// //               getValues={getValues}
// //             />
// //           </>
// //         }
// //         isOpen={modalOpen}
// //         setIsOpen={setmodalOpen}
// //       />
// //       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">
// //         <CommonForm
// //           classes={"grid-cols-2 gap-1"}
// //           Form={Form}
// //           errors={errors}
// //           register={register}
// //           setValue={setValue}
// //           getValues={getValues}
// //         />
// //         <Button
// //           classes={"mt-2 w-sm text-center flex mx-auto"}
// //           onClick={handleSubmit(onTableViewSubmit)}
// //           name="Submit"
// //         />
// //       </div>
// //     </>
// //   );
// // };

// // export default VendorCostForm;

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import CommonForm from "../../../../components/CommonForm";
// import Button from "../../../../components/Button";
// import Modal from "../../../../components/Modal";
// import VendorActions from "../../../../store/actions/vendor-actions";
// import gpTrackingActions from "../../../../store/actions/gpTrackingActions";
// import { objectToQueryString } from "../../../../utils/commonFunnction";

// const VendorCostForm = ({
//   isOpen,
//   setIsOpen,
//   resetting,
//   formValue = {},
//   filtervalue,
//   id = null,
// }) => {
//   const [selectedCustomer, setSelectedCustomer] = useState(null);

//   const [selectedprojectTypeId, setSelectedprojectTypeId] = useState(null);
//   const [selectedprojectType, setSelectedprojectType] = useState(null);
//   // const [selectedproject]

//   const [selectedSubproject, setSelectedSubproject] = useState(null);

//   console.log(selectedSubproject, "gggggggggggg");

//   // let projectTypeList = useSelector((state) => {
//   //   return state?.vendorData?.getVendorCostProjectTypeList.map((itm) => {
//   //     return {
//   //       label: itm.projectType,
//   //       value: itm.projectTypeId,
//   //     };
//   //   });
//   // });

//   let projectTypeList = useSelector((state) => {
//   return state?.vendorData?.getVendorCostProjectTypeList.map((itm) => {
//     return {
//       label: itm.projectType,    
//       value: itm.projectType,    
//       id: itm.projectTypeId,     
//     };
//   });
// });


//   let projectGroupList = useSelector((state) => {
//     return state?.vendorData?.getVendorCostProjetGroupList.map((itm) => {
//       return {
//         label: itm.projectGroupName,
//         value: itm.projectGroup,
//       };
//     });
//   });
//   let projectIdListData = useSelector((state) => {
//     return state?.vendorData?.getVendorCostProjectIdList.map((itm) => {
//       return {
//         label: itm.projectId,
//         value: itm.projectId,
//       };
//     });
//   });

//   let customerList = useSelector((state) => {
//     return state?.gpTrackingReducer?.getCustomer.map((itm) => {
//       return {
//         label: itm?.customer,
//         value: itm?.uniqueId,
//       };
//     });
//   });

//   // let subProjectTypeList = useSelector((state) => {
    
//   //   return state?.vendorData?.getVendorCostSubProjectTypeList.map((itm) => {
//   //     return {
//   //       label: itm.subProject,
//   //       value: itm.subProjectId,
//   //     };
//   //   });
//   // });
//   let subProjectTypeList = useSelector((state) => {
//     console.log(state,"Statevfff")
//   return state?.vendorData?.getVendorCostProjectTypeList?.map((itm) => ({
//     label: itm.subProject,
//     value: itm.subProjectId,
//   }));
// });

//   console.log(subProjectTypeList,"fdgdgdfdfgdfg")

//   let vendorsList = useSelector((state) => {
//     return state?.vendorData?.getVendorCostVendorsList.map((itm) => {
//       return {
//         label: itm.vendorName,
//         value: itm.vendorId,
//       };
//     });
//   });

//   let vendorsCodeList = useSelector((state) => {
//     return state?.vendorData?.getVendorCostVendorsList.map((itm) => {
//       return {
//         label: itm?.vendorCode,
//         value: itm?.vendorId,
//       };
//     });
//   });

//   let milestneList =
//     useSelector((state) => {
//       return state?.vendorData?.getVendorCostMilestoneList?.map((itm) => {
//         return {
//           id: itm?.MileStone,
//           name: itm?.MileStone,
//         };
//       });
//     }) || [];

//   const HandleProjectTypeChange = async (projectType) => {
//     let filterData = {
//       customerId: selectedCustomer,
//       projectType: projectType,
//     };
//     setSelectedprojectType(projectType);
//     let strVal = objectToQueryString(filterData);
//     // dispatch(VendorActions.getVendorCostSubprojectTypeList(true,`customerId=${e?.target?.value}?projectType=${projectType}`))
//     await dispatch(VendorActions.getVendorCostSubprojectTypeList(true, strVal));
//   };

//   const [modalOpen, setmodalOpen] = useState(false);

//   let dispatch = useDispatch();

//   let Form = [
//     {
//       label: "Customer",
//       value: "",
//       name: Object.entries(formValue).length > 0 ? "customer" : "customerId",
//       type:
//         Object.entries(formValue).length > 0
//           ? "sdisabled"
//           : "newSingleSelect45",
//       option: customerList,
//       props: {
//         onChange: (e) => {
//           if (e.target.value) {
//             setSelectedCustomer(e?.target?.value);
//             dispatch(
//               VendorActions.getVendorCostprojectGroupList(
//                 true,
//                 `customerId=${e?.target?.value}`
//               )
//             );
//             dispatch(
//               VendorActions.getVendorCostprojectTypeList(
//                 true,
//                 `customerId=${e?.target?.value}`
//               )
//             );
//             dispatch(VendorActions.getvendorCostVendorsList());
//           } else {
//           }
//         },
//       },
//       required: true,
//     },

//     {
//       label: "Project Group",
//       value: "",
//       name:
//         Object.entries(formValue).length > 0
//           ? "projectGroupName"
//           : "projectGroup",
//       type:
//         Object.entries(formValue).length > 0
//           ? "sdisabled"
//           : "newSingleSelect45",
//       option: projectGroupList,
//       props: {
//         //   onChange: (e) => {
//         //     handleCustomerChange(e.target.value);
//         //   },
//       },
//       required: true,
//     },
//     // {
//     //   label: "Project Type",
//     //   value: "",
//     //   name:
//     //     Object.entries(formValue).length > 0 ? "projectType" : "projectTypeId",
//     //   type:
//     //     Object.entries(formValue).length > 0
//     //       ? "sdisabled"
//     //       : "newSingleSelect45",
//     //   option: projectTypeList,
//     //   props: {
//     //     onChange: (e) => {
//     //       HandleProjectTypeChange(e?.target?.value);
//     //     },
//     //   },

//     //   required: true,
//     // },
//     {
//       label: "Project Type",
//       value: "",
//       name:
//         Object.entries(formValue).length > 0 ? "projectType" : "projectTypeId",
//       type:
//         Object.entries(formValue).length > 0
//           ? "sdisabled"
//           : "newSingleSelect45",
//       option: projectTypeList,
//       // props: {
//       //   onChange: (e) => {
//       //     HandleProjectTypeChange(e?.target?.value);
//       //     const projectTypeId = e?.target?.value;

//       //     if (projectTypeId) {
//       //       setSelectedprojectTypeId(projectTypeId);

//       //       if (selectedCustomer && getValues("projectGroup")) {
//       //         const projectGroup = getValues("projectGroup");
//       //         const queryString = `customerId=${selectedCustomer}&projectTypeId=${projectTypeId}&projectGroupId=${projectGroup}`;
//       //         dispatch(
//       //           VendorActions.getVendorCostProjectIdList(true, queryString)
//       //         );

//       //         dispatch(
//       //           VendorActions.getVendorCostprojectTypeList(
//       //             true,
//       //             `customerId=${e?.target?.value}&projectType=${selectedprojectType}`
//       //           )
//       //         );
//       //       } else {
//       //         console.warn("Please select Customer and Project Group first");
//       //       }
//       //     }
//       //   },
//       // },
//    props: {
//  onChange: (e) => {
//   const projectType = e?.target?.value;  
//   const selected = projectTypeList.find(itm => itm.value === projectType);

//   if (selected) {
//     const projectTypeId = selected.id; 
//     setSelectedprojectType(projectType);
//     setSelectedprojectTypeId(projectTypeId);

//     if (selectedCustomer && getValues("projectGroup")) {
//       const projectGroup = getValues("projectGroup");

     
//       const queryString = `customerId=${selectedCustomer}&projectTypeId=${projectTypeId}&projectGroupId=${projectGroup}`;
//       dispatch(
//         VendorActions.getVendorCostProjectIdList(true, queryString)
//       );

      
//       dispatch(
//         VendorActions.getVendorCostprojectTypeList(
//           true,
//           `customerId=${selectedCustomer}&projectType=${projectType}`
//         )
//       );
//     } else {
//       console.warn("Please select Customer and Project Group first");
//     }
//   }
// },

// },


     
//       required: true,
//     },
//     {
//       label: "Project ID",
//       value: "",
//       name: Object.entries(formValue).length > 0 ? "Project Id" : "Project Id",
//       type:
//         Object.entries(formValue).length > 0
//           ? "sdisabled"
//           : "newSingleSelect45",
//       option: projectIdListData,
//       props: {
//         //   onChange: (e) => {
//         //     handleCustomerChange(e.target.value);
//         //   },
//       },
//       required: true,
//     },
//     ,
//     {
//       label: "Sub Project",
//       value: "",
//       name:
//         Object.entries(formValue).length > 0 ? "subProject" : "subProjectId",
//       type:
//         Object.entries(formValue).length > 0
//           ? "sdisabled"
//           : "newSingleSelect45",
//       option: subProjectTypeList,
//       props: {
//         onChange: (e) => {
//           let filterData = {
//             customerId: selectedCustomer,
//             SubProjectId: e?.target?.value,
//           };
//           setSelectedSubproject(e?.target?.value);
//           let strVal = objectToQueryString(filterData);
//           dispatch(VendorActions.getVendorCostMilestoneList(true, strVal));
//         },
//       },
//       required: true,
//     },

//     {
//       label: "Activity Name",
//       value: "",
//       name: "activityName",
//       type: "text",
//       // required: true,
//       filter: true,
//       props: {
//         onChange: (e) => {
//           // console.log(e.target.value, "e geeter")
//           // setValue("queries",e.target.name)
//         },
//       },
//       classes: "col-span-1",
//     },
//     {
//       label: "Customer Item Code",
//       value: "",
//       name: "customerItemCode",
//       type: "text",
//       // required: true,
//       filter: true,
//       props: {
//         onChange: (e) => {
//           // console.log(e.target.value, "e geeter")
//           // setValue("queries",e.target.name)
//         },
//       },
//       classes: "col-span-1",
//     },
//     {
//       label: "Vendor Item Code",
//       value: "",
//       name: "itemCode",
//       type: "text",
//       //   required: true,
//       filter: true,
//       props: {
//         onChange: (e) => {
//           // console.log(e.target.value, "e geeter")
//           // setValue("queries",e.target.name)
//         },
//       },
//       classes: "col-span-1",
//     },
//     {
//       label: "Item Code Description",
//       value: "",
//       name: "itemCodeDescription",
//       type: "text",
//       // required: true,
//       filter: true,
//       props: {
//         onChange: (e) => {
//           // console.log(e.target.value, "e geeter")
//           // setValue("queries",e.target.name)
//         },
//       },
//       classes: "col-span-1",
//     },
//     {
//       label: "GBPA",
//       value: "",
//       name: "GBPA",
//       type: "text",
//       // required: true,
//       filter: true,
//       props: {
//         onChange: (e) => {
//           // console.log(e.target.value, "e geeter")
//           // setValue("queries",e.target.name)
//         },
//       },
//       classes: "col-span-1",
//     },

//     // {
//     //     label: "Milestone",
//     //     value: "",
//     //     name:
//     //       Object.entries(formValue).length > 0
//     //         ? "MileStone"
//     //         : "MileStone",
//     //     type: Object.entries(formValue).length > 0 ? "select" : "select",
//     //     option: milestneList,
//     //     props: {
//     //     //   onChange: (e) => {
//     //     //     handleCustomerChange(e.target.value);
//     //     //   },
//     //     },
//     //     required: true,
//     //   },
//     {
//       label: "Vendor Name",
//       value: "",
//       name: Object.entries(formValue).length > 0 ? "vendorName" : "vendorId",
//       type:
//         Object.entries(formValue).length > 0
//           ? "sdisabled"
//           : "newSingleSelect45",
//       option: vendorsList,
//       props: {
//         onChange: (e) => {},
//       },
//       required: true,
//     },
//     //   {
//     //     label: "Vendor Code",
//     //     value: "",
//     //     name:
//     //       Object.entries(formValue).length > 0
//     //         ? "vendorCode"
//     //         : "vendorId",
//     //     type: Object.entries(formValue).length > 0 ? "sdisabled" : "select",
//     //     option: vendorsCodeList,
//     //     props: {

//     //     },
//     //     required: true,
//     //   },
//     {
//       label: "Rate",
//       value: "",
//       name: "rate",
//       type: "number",
//       // required: true,
//       filter: true,
//       props: {
//         onChange: (e) => {
//           // console.log(e.target.value, "e geeter")
//           // setValue("queries",e.target.name)
//         },
//       },
//       classes: "col-span-1",
//     },
//     {
//       label: "Milestone",
//       name: "milestone",
//       type:
//         Object.entries(formValue).length > 0 ? "sdisabled" : "BigmuitiSelect",
//       // type: "BigmuitiSelect",
//       value: "",
//       props: {
//         onChange: (e) => {},
//       },
//       required: true,
//       classes: "col-span-1",
//       option: milestneList,
//     },
//   ];
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm();

//   const onTableViewSubmit = (data) => {
//     if (formValue.uniqueId) {
//       dispatch(
//         VendorActions.postVendorCostMilestone(
//           true,
//           data,
//           () => {
//             setIsOpen(false);
//             dispatch(
//               //   VendorActions.getVendorCostMilestone(true, filtervalue)
//               VendorActions.getVendorCostMilestone()
//             );
//           },
//           formValue.uniqueId
//         )
//       );
//     } else {
//       dispatch(
//         VendorActions.postVendorCostMilestone(true, data, () => {
//           setIsOpen(false);
//           dispatch(VendorActions.getVendorCostMilestonet());
//         })
//       );
//     }
//   };
//   useEffect(() => {
//     dispatch(gpTrackingActions.getGPCustomer());
//     // `projectType=${e.target.value}`
//     // dispatch(VendorActions.getVendorSubProject(true,`type=${"All"}`));
//     if (!isOpen) {
//       reset({});
//       Form.forEach((key) => setValue(key.name, formValue[key.name] || ""));
//     } else {
//       reset({});
//     }
//   }, [isOpen, formValue, resetting]);
//   return (
//     <>
//       <Modal
//         size={"xl"}
//         children={
//           <>
//             <CommonForm
//               classes={"grid-cols-1 gap-1"}
//               Form={Form}
//               errors={errors}
//               register={register}
//               setValue={setValue}
//               getValues={getValues}
//             />
//           </>
//         }
//         isOpen={modalOpen}
//         setIsOpen={setmodalOpen}
//       />
//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">
//         <CommonForm
//           classes={"grid-cols-2 gap-1"}
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

// export default VendorCostForm;


import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CommonForm from "../../../../components/CommonForm";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import VendorActions from "../../../../store/actions/vendor-actions";
import gpTrackingActions from "../../../../store/actions/gpTrackingActions";
import { objectToQueryString } from "../../../../utils/commonFunnction";

const VendorCostForm = ({
  isOpen,
  setIsOpen,
  resetting,
  formValue = {},
  filtervalue,
  id = null,
}) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [selectedprojectTypeId, setSelectedprojectTypeId] = useState(null);
  const [selectedProjectGroupId, setselectedProjectGroupId] = useState(null);
  const [projectGroupId, setProjectGroupId] = useState("");

  const [selectedprojectType, setSelectedprojectType] = useState(null);
  // const [selectedproject]

  const [selectedSubproject, setSelectedSubproject] = useState(null);

  console.log(selectedSubproject, "gggggggggggg");

  // let projectTypeList = useSelector((state) => {
  //   return state?.vendorData?.getVendorCostProjectTypeList.map((itm) => {
  //     return {
  //       label: itm.projectType,
  //       value: itm.projectTypeId,
  //     };
  //   });
  // });

  let projectTypeList = useSelector((state) => {
    return state?.vendorData?.getVendorCostProjectTypeList.map((itm) => {
      return {
        label: itm.projectType,
        value: itm.projectType,
        id: itm.projectTypeId,
      };
    });
  });

  let projectGroupList = useSelector((state) => {
    return state?.vendorData?.getVendorCostProjetGroupList.map((itm) => {
      return {
        label: itm.projectGroupName,
        value: itm.projectGroup,
      };
    });
  });
  let projectIdListData = useSelector((state) => {
    return state?.vendorData?.getVendorCostProjectIdList.map((itm) => {
      return {
        label: itm.projectId,
        value: itm.projectId,
      };
    });
  });

  let customerList = useSelector((state) => {
    return state?.gpTrackingReducer?.getCustomer.map((itm) => {
      return {
        label: itm?.customer,
        value: itm?.uniqueId,
      };
    });
  });

  // let subProjectTypeList = useSelector((state) => {

  //   return state?.vendorData?.getVendorCostSubProjectTypeList.map((itm) => {
  //     return {
  //       label: itm.subProject,
  //       value: itm.subProjectId,
  //     };
  //   });
  // });
  // let subProjectTypeList = useSelector((state) => {
  //   console.log(state, "Statevfff");
  //   return state?.vendorData?.getVendorCostProjectTypeList?.map((itm) => ({
  //     label: itm.subProject,
  //     value: itm.subProjectId,
  //   }));
  // });
  let subProjectTypeList = useSelector((state) => {
    return state?.vendorData?.getVendorCostSubProjectTypeList?.map((itm) => ({
      label: itm.subProject,
      value: itm.subProjectId,
    }));
  });

  console.log(subProjectTypeList, "fdgdgdfdfgdfg");

  let vendorsList = useSelector((state) => {
    return state?.vendorData?.getVendorCostVendorsList.map((itm) => {
      return {
        label: itm.vendorName,
        value: itm.vendorId,
      };
    });
  });

  let vendorsCodeList = useSelector((state) => {
    return state?.vendorData?.getVendorCostVendorsList.map((itm) => {
      return {
        label: itm?.vendorCode,
        value: itm?.vendorId,
      };
    });
  });

  let milestneList =
    useSelector((state) => {
      return state?.vendorData?.getVendorCostMilestoneList?.map((itm) => {
        return {
          id: itm?.MileStone,
          name: itm?.MileStone,
        };
      });
    }) || [];

  const HandleProjectTypeChange = async (projectType) => {
    let filterData = {
      customerId: selectedCustomer,
      projectType: projectType,
    };
    setSelectedprojectType(projectType);
    let strVal = objectToQueryString(filterData);
    // dispatch(VendorActions.getVendorCostSubprojectTypeList(true,`customerId=${e?.target?.value}?projectType=${projectType}`))
    await dispatch(VendorActions.getVendorCostSubprojectTypeList(true, strVal));
  };

  const [modalOpen, setmodalOpen] = useState(false);

  let dispatch = useDispatch();

  let Form = [
    {
      label: "Customer",
      value: "",
      name: Object.entries(formValue).length > 0 ? "customer" : "customerId",
      type:
        Object.entries(formValue).length > 0
          ? "sdisabled"
          : "newSingleSelect45",
      option: customerList,
      // props: {
      //   onChange: (e) => {
      //     if (e.target.value) {
      //       setSelectedCustomer(e?.target?.value);
      //       dispatch(
      //         VendorActions.getVendorCostprojectGroupList(
      //           true,
      //           `customerId=${e?.target?.value}`
      //         )
      //       );
      //       dispatch(
      //         VendorActions.getVendorCostprojectTypeList(
      //           true,
      //           `customerId=${e?.target?.value}`
      //         )
      //       );
      //       dispatch(VendorActions.getvendorCostVendorsList());
      //     } else {
      //     }
      //   },
      // },

      props: {
        onChange: (e) => {
          const customerId = e?.target?.value;

          if (customerId) {
            // Keep customer selected first
            setSelectedCustomer(customerId);

            // Fetch new lists based on selected customer
            dispatch(
              VendorActions.getVendorCostprojectGroupList(
                true,
                `customerId=${customerId}`
              )
            );
            dispatch(
              VendorActions.getVendorCostprojectTypeList(
                true,
                `customerId=${customerId}`
              )
            );
            dispatch(VendorActions.getvendorCostVendorsList());

            // Reset dependent fields after API call
            setSelectedprojectType(null);
            setSelectedprojectTypeId(null);
            setSelectedProjectGroupId(null);
            setProjectGroupId("");
            setSelectedSubproject(null);

            setValue("projectGroup", "");
            setValue("projectTypeId", "");
            setValue("Project Id", "");
            setValue("subProjectId", "");
          }
        },
      },

      required: true,
    },

    {
      label: "Project Group",
      value: "",
      name:
        Object.entries(formValue).length > 0
          ? "projectGroupName"
          : "projectGroup",
      type:
        Object.entries(formValue).length > 0
          ? "sdisabled"
          : "newSingleSelect45",
      option: projectGroupList,
      props: {
        //   onChange: (e) => {
        //     handleCustomerChange(e.target.value);
        //   },
      },
      required: true,
    },
    // {
    //   label: "Project Type",
    //   value: "",
    //   name:
    //     Object.entries(formValue).length > 0 ? "projectType" : "projectTypeId",
    //   type:
    //     Object.entries(formValue).length > 0
    //       ? "sdisabled"
    //       : "newSingleSelect45",
    //   option: projectTypeList,
    //   props: {
    //     onChange: (e) => {
    //       HandleProjectTypeChange(e?.target?.value);
    //     },
    //   },

    //   required: true,
    // },
    {
      label: "Project Type",
      value: "",
      name:
        Object.entries(formValue).length > 0 ? "projectType" : "projectTypeId",
      type:
        Object.entries(formValue).length > 0
          ? "sdisabled"
          : "newSingleSelect45",
      option: projectTypeList,
      // props: {
      //   onChange: (e) => {
      //     const projectType = e?.target?.value;
      //     const selected = projectTypeList.find(
      //       (itm) => itm.value === projectType
      //     );

      //     if (selected) {
      //       const projectTypeId = selected.id;
      //       setSelectedprojectType(projectType);
      //       setSelectedprojectTypeId(projectTypeId);

      //       if (selectedCustomer && getValues("projectGroup")) {
      //         const projectGroup = getValues("projectGroup");

      //         const queryString = `customerId=${selectedCustomer}&projectTypeId=${projectTypeId}&projectGroupId=${projectGroup}`;
      //         dispatch(
      //           VendorActions.getVendorCostProjectIdList(true, queryString)
      //         );

      //         dispatch(
      //           VendorActions.getVendorCostprojectTypeList(
      //             true,
      //             `customerId=${selectedCustomer}&projectType=${projectType}`
      //           )
      //         );
      //       } else {
      //         console.warn("Please select Customer and Project Group first");
      //       }
      //     }
      //   },
      // },

      // props: {
      //   onChange: (e) => {
      //     const projectType = e?.target?.value;
      //     const selected = projectTypeList.find(
      //       (itm) => itm.value === projectType
      //     );

      //     if (selected) {
      //       const projectTypeId = selected.id;
      //       setSelectedprojectType(projectType);
      //       setSelectedprojectTypeId(projectTypeId);

      //       if (selectedCustomer && getValues("projectGroup")) {
      //         const projectGroupId = getValues("projectGroup");
      //         console.log(projectGroupId,"projectGroupIdprojectGroupId")

      //         setSelectedProjectId("");
      //         setSelectedSubproject("");

      //         const queryString = `customerId=${selectedCustomer}&projectTypeId=${projectTypeId}&projectGroupId=${projectGroupId}`;
      //         dispatch(
      //           VendorActions.getVendorCostProjectIdList(true, queryString)
      //         );

      //         dispatch(
      //           VendorActions.getVendorCostprojectTypeList(
      //             true,
      //             `customerId=${selectedCustomer}&projectTypeId=${projectTypeId}`
      //           )
      //         );
      //       } else {
      //         console.warn("Please select Customer and Project Group first");
      //       }
      //     }
      //   },
      // },

      props: {
        onChange: (e) => {
          const projectType = e?.target?.value;
          const selected = projectTypeList.find(
            (itm) => itm.value === projectType
          );

          if (selected) {
            const projectTypeId = selected.id;
            setSelectedprojectType(projectType);
            setSelectedprojectTypeId(projectTypeId);

            if (selectedCustomer && getValues("projectGroup")) {
              const projectGroupId = getValues("projectGroup");
              setProjectGroupId(projectGroupId);

              setSelectedProjectId("");
              setSelectedSubproject("");

              const queryString = `customerId=${selectedCustomer}&projectTypeId=${projectTypeId}&projectGroupId=${projectGroupId}`;
              dispatch(
                VendorActions.getVendorCostProjectIdList(true, queryString)
              );
              dispatch(
                VendorActions.getVendorCostprojectTypeList(
                  true,
                  `customerId=${selectedCustomer}&projectTypeId=${projectTypeId}`
                )
              );

              dispatch(
                VendorActions.getVendorCostSubprojectTypeList(
                  true,
                  `customerId=${selectedCustomer}&projectTypeId=${projectTypeId}&projectGroupId=${projectGroupId}`
                )
              );
            } else {
              console.warn("Please select Customer and Project Group first");
            }
          }
        },
      },

      required: true,
    },
    {
      label: "Project ID",
      value: "",
      name: Object.entries(formValue).length > 0 ? "Project Id" : "Project Id",
      type:
        Object.entries(formValue).length > 0
          ? "sdisabled"
          : "newSingleSelect45",
      option: projectIdListData,
      props: {
        //   onChange: (e) => {
        //     handleCustomerChange(e.target.value);
        //   },
      },
      required: true,
    },
    ,
    {
      label: "Sub Project",
      value: "",
      name:
        Object.entries(formValue).length > 0 ? "subProject" : "subProjectId",
      type:
        Object.entries(formValue).length > 0
          ? "sdisabled"
          : "newSingleSelect45",
      option: subProjectTypeList,
      props: {
        onChange: (e) => {
          let filterData = {
            customerId: selectedCustomer,
            SubProjectId: e?.target?.value,
          };
          setSelectedSubproject(e?.target?.value);
          let strVal = objectToQueryString(filterData);
          dispatch(VendorActions.getVendorCostMilestoneList(true, strVal));
        },
      },
      required: true,
    },

    {
      label: "Activity Name",
      value: "",
      name: "activityName",
      type: "text",
      // required: true,
      filter: true,
      props: {
        onChange: (e) => {
          // console.log(e.target.value, "e geeter")
          // setValue("queries",e.target.name)
        },
      },
      classes: "col-span-1",
    },
    {
      label: "Customer Item Code",
      value: "",
      name: "customerItemCode",
      type: "text",
      // required: true,
      filter: true,
      props: {
        onChange: (e) => {
          // console.log(e.target.value, "e geeter")
          // setValue("queries",e.target.name)
        },
      },
      classes: "col-span-1",
    },
    {
      label: "Vendor Item Code",
      value: "",
      name: "itemCode",
      type: "text",
      //   required: true,
      filter: true,
      props: {
        onChange: (e) => {
          // console.log(e.target.value, "e geeter")
          // setValue("queries",e.target.name)
        },
      },
      classes: "col-span-1",
    },
    {
      label: "Item Code Description",
      value: "",
      name: "itemCodeDescription",
      type: "text",
      // required: true,
      filter: true,
      props: {
        onChange: (e) => {
          // console.log(e.target.value, "e geeter")
          // setValue("queries",e.target.name)
        },
      },
      classes: "col-span-1",
    },
    {
      label: "GBPA",
      value: "",
      name: "GBPA",
      type: "text",
      // required: true,
      filter: true,
      props: {
        onChange: (e) => {
          // console.log(e.target.value, "e geeter")
          // setValue("queries",e.target.name)
        },
      },
      classes: "col-span-1",
    },

    // {
    //     label: "Milestone",
    //     value: "",
    //     name:
    //       Object.entries(formValue).length > 0
    //         ? "MileStone"
    //         : "MileStone",
    //     type: Object.entries(formValue).length > 0 ? "select" : "select",
    //     option: milestneList,
    //     props: {
    //     //   onChange: (e) => {
    //     //     handleCustomerChange(e.target.value);
    //     //   },
    //     },
    //     required: true,
    //   },
    {
      label: "Vendor Name",
      value: "",
      name: Object.entries(formValue).length > 0 ? "vendorName" : "vendorId",
      type:
        Object.entries(formValue).length > 0
          ? "sdisabled"
          : "newSingleSelect45",
      option: vendorsList,
      props: {
        onChange: (e) => {},
      },
      required: true,
    },
    //   {
    //     label: "Vendor Code",
    //     value: "",
    //     name:
    //       Object.entries(formValue).length > 0
    //         ? "vendorCode"
    //         : "vendorId",
    //     type: Object.entries(formValue).length > 0 ? "sdisabled" : "select",
    //     option: vendorsCodeList,
    //     props: {

    //     },
    //     required: true,
    //   },
       {
      label: "Min Rate",
      value: "",
      name: "minRate",
      type: "number",
      filter: true,
      classes: "col-span-1",
    },
    {
      label: "Max Rate",
      value: "",
      name: "maxRate",
      type: "number",
      filter: true,
      classes: "col-span-1",
    },

    {
      label: "Rate",
      value: "",
      name: "rate",
      type: "number",
      // required: true,
      filter: true,
      props: {
        onChange: (e) => {
          // console.log(e.target.value, "e geeter")
          // setValue("queries",e.target.name)
        },
      },
      classes: "col-span-1",
    },
    {
      label: "Milestone",
      name: "milestone",
      type:
        Object.entries(formValue).length > 0 ? "sdisabled" : "BigmuitiSelect",
      // type: "BigmuitiSelect",
      value: "",
      props: {
        onChange: (e) => {},
      },
      required: true,
      classes: "col-span-1",
      option: milestneList,
    },
  ];
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const onTableViewSubmit = (data) => {
    if (formValue.uniqueId) {
      dispatch(
        VendorActions.postVendorCostMilestoneSecond(
          true,
          data,
          () => {
            setIsOpen(false);
            dispatch(
              //   VendorActions.getVendorCostMilestone(true, filtervalue)
              VendorActions.getVendorCostMilestoneSecond()
            );
          },
          formValue.uniqueId
        )
      );
    } else {
      dispatch(
        VendorActions.postVendorCostMilestoneSecond(true, data, () => {
          setIsOpen(false);
          dispatch(VendorActions.getVendorCostMilestoneSecond());
        })
      );
    }
  };

  useEffect(() => {
    if (selectedCustomer && selectedprojectTypeId && projectGroupId) {
      const queryString = `customerId=${selectedCustomer}&projectTypeId=${selectedprojectTypeId}&projectGroupId=${projectGroupId}`;

      dispatch(VendorActions.getVendorCostProjectIdList(true, queryString));

      dispatch(
        VendorActions.getVendorCostSubprojectTypeList(
          true,
          `customerId=${selectedCustomer}&projectType=${selectedprojectType}`
        )
      );
    }
  }, [selectedCustomer, selectedprojectTypeId, projectGroupId, dispatch]);

  useEffect(() => {
    dispatch(gpTrackingActions.getGPCustomer());
    // `projectType=${e.target.value}`
    // dispatch(VendorActions.getVendorSubProject(true,`type=${"All"}`));
    if (!isOpen) {
      reset({});
      Form.forEach((key) => setValue(key.name, formValue[key.name] || ""));
    } else {
      reset({});
    }
  }, [isOpen, formValue, resetting]);
  return (
    <>
      <Modal
        size={"xl"}
        children={
          <>
            <CommonForm
              classes={"grid-cols-1 gap-1"}
              Form={Form}
              errors={errors}
              register={register}
              setValue={setValue}
              getValues={getValues}
            />
          </>
        }
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
      />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">
        <CommonForm
          classes={"grid-cols-2 gap-1"}
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

export default VendorCostForm;

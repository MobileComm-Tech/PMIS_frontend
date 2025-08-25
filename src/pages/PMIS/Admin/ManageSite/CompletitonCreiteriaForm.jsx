// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import CommonForm from "../../../../components/CommonForm";
// import Button from "../../../../components/Button";
// import projectListActions from "../../../../store/actions/projectList-actions";
// import { useDispatch, useSelector } from "react-redux";
// import { Urls } from "../../../../utils/url";
// import MyHomeActions from "../../../../store/actions/myHome-actions";
// import NewLookBadge from "../../../../components/Badge";
// import ManageSite from "./ManageSite";
// import ManageComplianceTemplateForm from "../ManageCompliance/ManageComplianceTemplateForm";
// import Modal from "../../../../components/Modal";
// import AdminActions from "../../../../store/actions/admin-actions";
// import { GET_COMPLIANCE_DEGROW_TEMPLATE_DATA, GET_ONE_COMPLIANCE_DY_FORM, GET_ONE_COMPLIANCE_L1_LIST } from "../../../../store/reducers/admin-reducer";
// import { GET_GLOBAL_COMPLAINCE_TYPE_DATA } from "../../../../store/reducers/projectList-reducer";
// import ManageComplianceTemplateApproverForm from "../ManageCompliance/ManageComplinaceTemplateApproverForm";
// import ManageComplianceDegrowTemplateForm from "../ManageCompliance/ManageComplianceDegrowTemplateForm";
// import ManageComplianceDegrowSRQ_Raise_And_DismantleTemplateForm from "../ManageCompliance/ManageComplianceDegrowSRQ_Raise_And_DismantleTemplateForm";
// import Api from "../../../../utils/api";
// import { Watch } from "react-loader-spinner";
// import { calculateCompletionCriteriaPaylaod, range } from "../../../../components/CommonObjectsAndVariables";
// import InputDropdown from "../../../../components/InputDropdown";
// import CustomInputDropdown from "../../../../components/CustomSelectDropDown";

// const CompletitonCreiteriaForm = ({
//   siteCompleteData,
//   projectTypeUniqueId,
//   mileStone,
//   projectuniqueId,
//   setmodalFullOpen,
//   setmodalOpen,
//   modalOpen,
//   customeruniqueId,
//   myTaskPage,
//   filterView
// }) => {


 
//   const dispatch = useDispatch();
//   const dateString = siteCompleteData["siteStartDate"];
//   const [day, month, year] = dateString?.split("-")?.map(Number);
//   const datestr = new Date(year, month - 1, day);
//   // const [modalFullOpen, setmodalFullOpen] = useState(false);
//   const [modalFullBody, setmodalFullBody] = useState(<></>);
//   const [modalFullOpen1, setmodalFullOpen1] = useState(false);
//   const [itemCodeAllInputs, setItemCodeAllInputs] = useState([])
//   const [itemQuantityInputs, setItemQuantityInputs] = useState([])
//   const projectTypeName = siteCompleteData['projectType']
//   const subProjectName = siteCompleteData['subProject']
//   // const [totalAmount,setAmount] = useState([])
//   const [quantityValue, setQuantityValue] = useState({})


//   const checkmilestone = mileStone["Completion Criteria"]?.split(",")
//   const checkmilestoneStatus = mileStone['mileStoneStatus']
//   const milestoneName = mileStone['Name']

//    const {
//     register: register,
//     handleSubmit: handleSubmit,
//     setValue: setValue,
//     getValues: getValues,
//     watch,
//     formState: { errors: errors },
//   } = useForm();


//   let quantity = []
//   let temp={}
//   for (let i = 1; i <= 11; i++) {
//     if(i<11){
//        temp = {
//       label: i,
//       value: i
//     }
//     }else{
//       temp = {
//       label: "Custom Value",
//       value: "custom"
//     }
//     }
//     quantity.push(temp);

//   }



//   const getdataAll = async () => {
//     const res = await Api.get({
//       url: `/get/vendorCode/${customeruniqueId}/${siteCompleteData?.projectuniqueId}/${siteCompleteData?.projectuniqueId}/${siteCompleteData?.SubProjectId}?ACTIVITY=${siteCompleteData?.ACTIVITY}`,
//     });

//     // console.log(res?.data?.data[0], "__reshjhads");


    

//     const itemCodeData = res?.data?.data[0];
//     const itemCodeInputs = []
//     const tempQuantity = []
//     for (let i = range.start; i <= range.end; i++) {
      
//       const Quantitykey=`quantity0${i}`
//       const key = `itemCode0${i}`
//       if (itemCodeData[key]?.length > 0) {
//         const filteredData = itemCodeData[key]?.filter((item) => {
//             if(item?.rate&& item?.itemCodeDescription) return item
//           })
//         const tempData = {
//           label: `Item Code- 0${i}`,
//           name: `itemCode0${i}`,
//           required: i === 1 ? true : false,
//           type: "select",
//           option: filteredData?.map((itm,index) => {
//             if(itm?.rate !== undefined || itm?.rate !== ''){
              
              
//               return {
//               label: itm?.value+"-("+itm?.itemCodeDescription+")",
//               value: itm?.value+","+itm?.rate+","+itm?.itemCodeDescription,
//               rate:itm?.rate
//             }
//             }
//           }) ,
          
//           props: {
//             onChange: (e) => {
//                  const  key  = `itemCodeRate0${i}`
//                 //  console.log(e?.target?.value,"__sdfghjk")
//                 //  if(e?.target?.value?.split(" ")[-1]!=="" || e?.target?.value?.split(" ")[1]!==undefined){
//                 const n  = e?.target?.value?.split(" ")?.length
//                 console.log(e?.target?.value?.split(","),"__qwertyuiop")
//                    setQuantityValue(prev => ({
//                                   ...prev,
//                                   [key]: Number(e?.target?.value?.split(",")[1])
//                                 }));
//             // }
//                  }
             
//           },

//           classes: "col-span-1",
//         }
       
//         const quantityObj =<CustomInputDropdown label={Quantitykey} Quantitykey={Quantitykey} quantityValue={quantityValue[Quantitykey]} setQuantityValue={setQuantityValue} />
//         // const quantityObj = {
//         //   label: `Quantity-0${i}`,
//         //   name: `quantity0${i}`,
//         //   required: i === 1 ? true : false,
//         //   type: "number",
//         //   // option: quantity,
//         //   props: {
//         //     onChange: (e) => {
//         //       const  key  = `quantity0${i}`
//         //       setQuantityValue(prev => ({
//         //                           ...prev,
//         //                           [key]: Number(e?.target?.value)
//         //                         }));
//         //     },
//         //   },

//         //   classes: "col-span-1",
//         // }
//          if (["MS1"]?.includes(mileStone?.Name)&& i===1){
//              const totalAmountField = {
//             label: "Total Amount",
//             name: "amount",
//             type: "number",
//             required: false,
//             props: {
//               onChange: (e) => {
              
//             },
//               readOnly: true,
//               style: { backgroundColor: '#f0f8ff', fontWeight: 'bold' }
//             },
//             classes: "col-span-1",
//           };
//           itemCodeInputs.push(totalAmountField)
//           }
//         if(filteredData?.length){
//       itemCodeInputs.push(tempData);
//       tempQuantity.push(quantityObj)
//         // itemCodeInputs.push(quantityObj)
//         }
        
        
//       }
//     }
      


//     setItemCodeAllInputs([...itemCodeInputs]);
//     setItemQuantityInputs([...tempQuantity])

//   }


//   useEffect(()=>{
//     let total=0;
//     for (let i = range.start; i <= range?.end; i++) { 
//   const rateKey = `itemCodeRate0${i}`;
//   const qtyKey = `quantity0${i}`;

//   if (quantityValue[rateKey] !== undefined || NaN && quantityValue[qtyKey] !== undefined || NaN ) {
//     // console.log(quantityValue[rateKey],quantityValue[qtyKey],"___fghjk")
//     total += quantityValue[rateKey] * quantityValue[qtyKey];
//   }
// }

// setValue("amount",total)

//   },[quantityValue])

//   console.log(quantityValue, "quantityValue")





 
//   let mileStoneprops = {
//     "Completion Date": {
//       maxSelectableDate: new Date(),
//       minSelectableDate: datestr,
//     },
//   };

//   let dataecoder = {
//     Date: "datetime",
//     Number: "number",
//     File: "file",
//     Text: "text",
//     Dropdown: "select"
//   };

//   let mileStoneCompletion = useSelector((state) => {

//     let mtoneCompletion = state?.adminData?.getManageCompletionCriteria || [];
//     // console.log(mileStone["Completion Criteria"],"___sdfghjk")
//     return mileStone["Completion Criteria"]?.split(",").map((dta) => {
//       let geeter = mtoneCompletion.filter((itm) => itm.completion == dta);
//       if (dta == "Forms & Checklist") {
//         return {
//           label: dta,
//           name: "Checklist",
//           type: "jsxcmpt",
//           value: "",
//           component:
//             <p className="cursor-pointer"
//               onClick={() => {
//                 dispatch(GET_GLOBAL_COMPLAINCE_TYPE_DATA({ dataAll: [], reset: true }))
//                 if (projectTypeName !== "DEGROW") {
//                   dispatch(GET_ONE_COMPLIANCE_L1_LIST({ dataAll: [], reset: true }))
//                   dispatch(GET_ONE_COMPLIANCE_DY_FORM({ dataAll: [], reset: true }))
//                   dispatch(AdminActions.getOneComplianceDyform(siteCompleteData.uniqueId, mileStone.Name, true, ""));
//                   dispatch(AdminActions.getOneComplianceL1List(siteCompleteData.uniqueId, mileStone.Name, true, ""));
//                 }
//                 dispatch(projectListActions.globalComplianceTypeDataGet(siteCompleteData.uniqueId, mileStone.uniqueId, "", true));
//                 setmodalFullOpen1(true)
//                 setmodalFullBody(
//                   projectTypeName === "DEGROW" && milestoneName === "Survey" ?
//                     <ManageComplianceDegrowTemplateForm
//                       siteCompleteData={siteCompleteData}
//                       uid={siteCompleteData.uniqueId}
//                       customeruniqueId={customeruniqueId}
//                       projectuniqueId={projectuniqueId}
//                       setmodalFullOpen={setmodalFullOpen}
//                       setmodalOpen={setmodalOpen}
//                       mileStone={mileStone}
//                       myTaskPage={myTaskPage}
//                       filterView={filterView}
//                     />
//                     : projectTypeName === "DEGROW" && (milestoneName === "SRQ Raise" || milestoneName === "Dismantle") ?
//                       <ManageComplianceDegrowSRQ_Raise_And_DismantleTemplateForm
//                         siteCompleteData={siteCompleteData}
//                         uid={siteCompleteData.uniqueId}
//                         customeruniqueId={customeruniqueId}
//                         projectuniqueId={projectuniqueId}
//                         setmodalFullOpen={setmodalFullOpen}
//                         setmodalOpen={setmodalOpen}
//                         mileStone={mileStone}
//                         myTaskPage={myTaskPage}
//                         filterView={filterView}
//                       />
//                       : <ManageComplianceTemplateForm
//                         siteCompleteData={siteCompleteData}
//                         uid={siteCompleteData.uniqueId}
//                         customeruniqueId={customeruniqueId}
//                         projectuniqueId={projectuniqueId}
//                         setmodalFullOpen={setmodalFullOpen}
//                         setmodalOpen={setmodalOpen}
//                         mileStone={mileStone}
//                         myTaskPage={myTaskPage}
//                         filterView={filterView}
//                       />
//                 )
//               }}>
//               <NewLookBadge text={"Form"} notifyType={"info"} />
//             </p>,
//           props: {
//             onChange: (e) => { },
//           },
//           required: false,
//           classes: "col-span-1",
//         };

//       }
//       else {
//         return {
//           label: dta,
//           value: "",
//           name: "CC_" + dta,
//           required: true,
//           type: geeter.length > 0 ? dataecoder[geeter[0]["type"]] : "",
//           option: geeter?.[0]?.type == "Dropdown" ? geeter[0]["dropdown"]?.split(",").map((itm) => {
//             return {
//               label: itm,
//               value: itm,
//             };
//           }) : [],
//           props: mileStoneprops[dta] || {},
//         };
//       }
//     });
//   });
//   if(Array.isArray(mileStoneCompletion)){
//     // console.log(mileStoneCompletion,"__mileStoneCompletion_")

//     if (mileStoneCompletion[0]?.name?.includes("CC_")) {
//         mileStoneCompletion = [...mileStoneCompletion, ...itemCodeAllInputs];
//       }

//   }
 
//   let backgeturl = projectListActions.getProjectTypeAll(projectuniqueId, filterView);
//   if (myTaskPage === "Yes") {
//     backgeturl = MyHomeActions.getMyTask();
//   }

//   useEffect(()=>{
//     if(Array.isArray(mileStoneCompletion)&& mileStoneCompletion?.length>0){
//       for(let i = 0; i< mileStoneCompletion.length;i++){
//       setValue(mileStoneCompletion[i]?.name,"")
//     }
//     }
//     setQuantityValue({})
//   },[itemCodeAllInputs])

//   const onsubmiting = (data) => {
//     console.log("comingHJer",data)
    
//     if (checkmilestone.includes("Forms & Checklist")) {
//       data['Checklist'] = "Yes"
//       data['siteuid'] = siteCompleteData.uniqueId
//       data['mName'] = mileStone['Name']
//       data['projectTypeName'] = projectTypeName
//       data['subProjectTypeName'] = subProjectName
//     }else{
//       let tempData={}
//       console.log(quantityValue,"__valueofQa")
//           for (let i = range.start; i <= range.end; i++) {
//         const quantityKey = `quantity0${i}`;

//         if (quantityValue[quantityKey] !== undefined) {
//           tempData = { ...tempData, [quantityKey]: quantityValue[quantityKey] };
//         } else {
//           tempData = { ...tempData, [quantityKey]: "" };
//         }
//       }
//       console.log(tempData,"__tenp")
//       data={...data,...tempData}
//         console.log(data,"__data")
//        data = calculateCompletionCriteriaPaylaod(itemCodeAllInputs,data);
//     }

//     if(data===false){
//       return;
//     }
   
//       console.log(data,"___newjbjsd")
//     // dispatch(
//     //   projectListActions.postSubmit(Urls.projectList_closeMilestone + mileStone["uniqueId"], data, () => {
//     //     setmodalOpen(false);
//     //     setmodalFullOpen(false);
//     //     dispatch(backgeturl);
//     //   }
//     //   )
//     // );
//   };


//   // console.log(mileStone , 'asdfkahsdfkjashdkjfhaskjdfh')

//   useEffect(() => {
//     // console.log("running_usefrer")
//     setItemCodeAllInputs([])
//     if(['MS1']?.includes(mileStone?.Name)&& modalOpen){
//         getdataAll()
//         // setQuantityValue({})
//     }
//   }, [modalOpen]);



//   return (
//     <>
//       <Modal
//         size={"full"}
//         children={modalFullBody}
//         isOpen={modalFullOpen1}
//         setIsOpen={setmodalFullOpen1}
//         modalHead={"Forms & Checklist"}
//       />

//       <CommonForm
//         classes={"grid-cols-2 gap-1"}
//         Form={mileStoneCompletion}
//         errors={errors}
//         register={register}
//         setValue={setValue}
//         getValues={getValues}
//       />
//       {...itemQuantityInputs}
      

//       <div className="flex justify-center">
//         {!checkmilestone?.includes("Forms & Checklist") && (
//           <Button
//             onClick={handleSubmit(onsubmiting)}
//             name={"Submit"}
//             classes="w-auto"
//           />
//         )}
//         {checkmilestone?.includes("Forms & Checklist") && ['Open', 'In Process']?.includes(checkmilestoneStatus) && (
//           <Button
//             onClick={handleSubmit(onsubmiting)}
//             name={"Submit"}
//             classes="w-auto"
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default CompletitonCreiteriaForm;

// ===================================================================OLD CODE
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import CommonForm from "../../../../components/CommonForm";
// import Button from "../../../../components/Button";
// import projectListActions from "../../../../store/actions/projectList-actions";
// import { useDispatch, useSelector } from "react-redux";
// import { Urls } from "../../../../utils/url";
// import MyHomeActions from "../../../../store/actions/myHome-actions";
// import NewLookBadge from "../../../../components/Badge";
// import ManageSite from "./ManageSite";
// import ManageComplianceTemplateForm from "../ManageCompliance/ManageComplianceTemplateForm";
// import Modal from "../../../../components/Modal";
// import AdminActions from "../../../../store/actions/admin-actions";
// import { GET_COMPLIANCE_DEGROW_TEMPLATE_DATA, GET_ONE_COMPLIANCE_DY_FORM, GET_ONE_COMPLIANCE_L1_LIST } from "../../../../store/reducers/admin-reducer";
// import { GET_GLOBAL_COMPLAINCE_TYPE_DATA } from "../../../../store/reducers/projectList-reducer";
// import ManageComplianceTemplateApproverForm from "../ManageCompliance/ManageComplinaceTemplateApproverForm";
// import ManageComplianceDegrowTemplateForm from "../ManageCompliance/ManageComplianceDegrowTemplateForm";
// import ManageComplianceDegrowSRQ_Raise_And_DismantleTemplateForm from "../ManageCompliance/ManageComplianceDegrowSRQ_Raise_And_DismantleTemplateForm";
// import Api from "../../../../utils/api";
// import { Watch } from "react-loader-spinner";
// import { calculateCompletionCriteriaPaylaod, range } from "../../../../components/CommonObjectsAndVariables";

// const CompletitonCreiteriaForm = ({
//   siteCompleteData,
//   projectTypeUniqueId,
//   mileStone,
//   projectuniqueId,
//   setmodalFullOpen,
//   setmodalOpen,
//   modalOpen,
//   customeruniqueId,
//   myTaskPage,
//   filterView
// }) => {


 
//   const dispatch = useDispatch();
//   const dateString = siteCompleteData["siteStartDate"];
//   const [day, month, year] = dateString?.split("-")?.map(Number);
//   const datestr = new Date(year, month - 1, day);
//   // const [modalFullOpen, setmodalFullOpen] = useState(false);
//   const [modalFullBody, setmodalFullBody] = useState(<></>);
//   const [modalFullOpen1, setmodalFullOpen1] = useState(false);
//   const [itemCodeAllInputs, setItemCodeAllInputs] = useState([])
//   const projectTypeName = siteCompleteData['projectType']
//   const subProjectName = siteCompleteData['subProject']
//   // const [totalAmount,setAmount] = useState([])
//   const [quantityValue, setQuantityValue] = useState({})


//   const checkmilestone = mileStone["Completion Criteria"]?.split(",")
//   const checkmilestoneStatus = mileStone['mileStoneStatus']
//   const milestoneName = mileStone['Name']

//    const {
//     register: register,
//     handleSubmit: handleSubmit,
//     setValue: setValue,
//     getValues: getValues,
//     watch,
//     formState: { errors: errors },
//   } = useForm();


//   let quantity = []
//   let temp={}
//   for (let i = 1; i <= 11; i++) {
//     if(i<11){
//        temp = {
//       label: i,
//       value: i
//     }
//     }else{
//       temp = {
//       label: "Custom Value",
//       value: "custom"
//     }
//     }
//     quantity.push(temp);

//   }



//   const getdataAll = async () => {
//     const res = await Api.get({
//       url: `/get/vendorCode/${customeruniqueId}/${siteCompleteData?.projectuniqueId}/${siteCompleteData?.projectuniqueId}/${siteCompleteData?.SubProjectId}?ACTIVITY=${siteCompleteData?.ACTIVITY}`,
//     });

//     // console.log(res?.data?.data[0], "__reshjhads");


    

//     const itemCodeData = res?.data?.data[0];
//     const itemCodeInputs = []
//     const tempQuantity = []
//     for (let i = range.start; i <= range.end; i++) {

//       const key = `itemCode0${i}`
//       if (itemCodeData[key]?.length > 0) {
//         const filteredData = itemCodeData[key]?.filter((item) => {
//             if(item?.rate&& item?.itemCodeDescription) return item
//           })
//         const tempData = {
//           label: `Item Code- 0${i}`,
//           name: `itemCode0${i}`,
//           required: i === 1 ? true : false,
//           type: "select",
//           option: filteredData?.map((itm,index) => {
//             if(itm?.rate !== undefined || itm?.rate !== ''){
              
              
//               return {
//               label: itm?.value+"-("+itm?.itemCodeDescription+")",
//               value: itm?.value+","+itm?.rate+","+itm?.itemCodeDescription,
//               rate:itm?.rate
//             }
//             }
//           }) ,
          
//           props: {
//             onChange: (e) => {
//                  const  key  = `itemCodeRate0${i}`
//                 //  console.log(e?.target?.value,"__sdfghjk")
//                 //  if(e?.target?.value?.split(" ")[-1]!=="" || e?.target?.value?.split(" ")[1]!==undefined){
//                 const n  = e?.target?.value?.split(" ")?.length
//                 console.log(e?.target?.value?.split(","),"__qwertyuiop")
//                    setQuantityValue(prev => ({
//                                   ...prev,
//                                   [key]: Number(e?.target?.value?.split(",")[1])
//                                 }));
//             // }
//                  }
             
//           },

//           classes: "col-span-1",
//         }
       
//         const quantityObj = {
//           label: `Quantity-0${i}`,
//           name: `quantity0${i}`,
//           required: i === 1 ? true : false,
//           type: "number",
//           // option: quantity,
//           props: {
//             onChange: (e) => {
//               const  key  = `quantity0${i}`
//               setQuantityValue(prev => ({
//                                   ...prev,
//                                   [key]: Number(e?.target?.value)
//                                 }));
//             },
//           },

//           classes: "col-span-1",
//         }
//          if (["MS1"]?.includes(mileStone?.Name)&& i===1){
//              const totalAmountField = {
//             label: "Total Amount",
//             name: "amount",
//             type: "number",
//             required: false,
//             props: {
//               onChange: (e) => {
              
//             },
//               readOnly: true,
//               style: { backgroundColor: '#f0f8ff', fontWeight: 'bold' }
//             },
//             classes: "col-span-1",
//           };
//           itemCodeInputs.push(totalAmountField)
//           }
//         if(filteredData?.length){
// itemCodeInputs.push(tempData);
//         itemCodeInputs.push(quantityObj)
//         }
        
        
//       }
//     }
      


//     setItemCodeAllInputs([...itemCodeInputs, ...tempQuantity]);

//   }


//   useEffect(()=>{
//     let total=0;
//     for (let i = range.start; i <= range?.end; i++) { 
//   const rateKey = `itemCodeRate0${i}`;
//   const qtyKey = `quantity0${i}`;

//   if (quantityValue[rateKey] !== undefined || NaN && quantityValue[qtyKey] !== undefined || NaN ) {
//     // console.log(quantityValue[rateKey],quantityValue[qtyKey],"___fghjk")
//     total += quantityValue[rateKey] * quantityValue[qtyKey];
//   }
// }

// setValue("amount",total)

//   },[quantityValue])

//   // console.log(quantityValue, "quantityValue")





 
//   let mileStoneprops = {
//     "Completion Date": {
//       maxSelectableDate: new Date(),
//       minSelectableDate: datestr,
//     },
//   };

//   let dataecoder = {
//     Date: "datetime",
//     Number: "number",
//     File: "file",
//     Text: "text",
//     Dropdown: "select"
//   };

//   let mileStoneCompletion = useSelector((state) => {

//     let mtoneCompletion = state?.adminData?.getManageCompletionCriteria || [];
//     // console.log(mileStone["Completion Criteria"],"___sdfghjk")
//     return mileStone["Completion Criteria"]?.split(",").map((dta) => {
//       let geeter = mtoneCompletion.filter((itm) => itm.completion == dta);
//       if (dta == "Forms & Checklist") {
//         return {
//           label: dta,
//           name: "Checklist",
//           type: "jsxcmpt",
//           value: "",
//           component:
//             <p className="cursor-pointer"
//               onClick={() => {
//                 dispatch(GET_GLOBAL_COMPLAINCE_TYPE_DATA({ dataAll: [], reset: true }))
//                 if (projectTypeName !== "DEGROW") {
//                   dispatch(GET_ONE_COMPLIANCE_L1_LIST({ dataAll: [], reset: true }))
//                   dispatch(GET_ONE_COMPLIANCE_DY_FORM({ dataAll: [], reset: true }))
//                   dispatch(AdminActions.getOneComplianceDyform(siteCompleteData.uniqueId, mileStone.Name, true, ""));
//                   dispatch(AdminActions.getOneComplianceL1List(siteCompleteData.uniqueId, mileStone.Name, true, ""));
//                 }
//                 dispatch(projectListActions.globalComplianceTypeDataGet(siteCompleteData.uniqueId, mileStone.uniqueId, "", true));
//                 setmodalFullOpen1(true)
//                 setmodalFullBody(
//                   projectTypeName === "DEGROW" && milestoneName === "Survey" ?
//                     <ManageComplianceDegrowTemplateForm
//                       siteCompleteData={siteCompleteData}
//                       uid={siteCompleteData.uniqueId}
//                       customeruniqueId={customeruniqueId}
//                       projectuniqueId={projectuniqueId}
//                       setmodalFullOpen={setmodalFullOpen}
//                       setmodalOpen={setmodalOpen}
//                       mileStone={mileStone}
//                       myTaskPage={myTaskPage}
//                       filterView={filterView}
//                     />
//                     : projectTypeName === "DEGROW" && (milestoneName === "SRQ Raise" || milestoneName === "Dismantle") ?
//                       <ManageComplianceDegrowSRQ_Raise_And_DismantleTemplateForm
//                         siteCompleteData={siteCompleteData}
//                         uid={siteCompleteData.uniqueId}
//                         customeruniqueId={customeruniqueId}
//                         projectuniqueId={projectuniqueId}
//                         setmodalFullOpen={setmodalFullOpen}
//                         setmodalOpen={setmodalOpen}
//                         mileStone={mileStone}
//                         myTaskPage={myTaskPage}
//                         filterView={filterView}
//                       />
//                       : <ManageComplianceTemplateForm
//                         siteCompleteData={siteCompleteData}
//                         uid={siteCompleteData.uniqueId}
//                         customeruniqueId={customeruniqueId}
//                         projectuniqueId={projectuniqueId}
//                         setmodalFullOpen={setmodalFullOpen}
//                         setmodalOpen={setmodalOpen}
//                         mileStone={mileStone}
//                         myTaskPage={myTaskPage}
//                         filterView={filterView}
//                       />
//                 )
//               }}>
//               <NewLookBadge text={"Form"} notifyType={"info"} />
//             </p>,
//           props: {
//             onChange: (e) => { },
//           },
//           required: false,
//           classes: "col-span-1",
//         };

//       }
//       else {
//         return {
//           label: dta,
//           value: "",
//           name: "CC_" + dta,
//           required: true,
//           type: geeter.length > 0 ? dataecoder[geeter[0]["type"]] : "",
//           option: geeter?.[0]?.type == "Dropdown" ? geeter[0]["dropdown"]?.split(",").map((itm) => {
//             return {
//               label: itm,
//               value: itm,
//             };
//           }) : [],
//           props: mileStoneprops[dta] || {},
//         };
//       }
//     });
//   });
//   if(Array.isArray(mileStoneCompletion)){
//     // console.log(mileStoneCompletion,"__mileStoneCompletion_")

//     if (mileStoneCompletion[0]?.name?.includes("CC_")) {
//         mileStoneCompletion = [...mileStoneCompletion, ...itemCodeAllInputs];
//       }

//   }
 
//   let backgeturl = projectListActions.getProjectTypeAll(projectuniqueId, filterView);
//   if (myTaskPage === "Yes") {
//     backgeturl = MyHomeActions.getMyTask();
//   }

//   useEffect(()=>{
//     if(Array.isArray(mileStoneCompletion)&& mileStoneCompletion?.length>0){
//       for(let i = 0; i< mileStoneCompletion.length;i++){
//       setValue(mileStoneCompletion[i]?.name,"")
//     }
//     }
//     setQuantityValue({})
//   },[itemCodeAllInputs])

//   const onsubmiting = (data) => {
//     console.log("comingHJer",data)
    
//     if (checkmilestone.includes("Forms & Checklist")) {
//       data['Checklist'] = "Yes"
//       data['siteuid'] = siteCompleteData.uniqueId
//       data['mName'] = mileStone['Name']
//       data['projectTypeName'] = projectTypeName
//       data['subProjectTypeName'] = subProjectName
//     }else{
//        data = calculateCompletionCriteriaPaylaod(itemCodeAllInputs,data);
//     }

//     if(data===false){
//       return;
//     }
   
//       console.log(data,"___newjbjsd")
//     dispatch(
//       projectListActions.postSubmit(Urls.projectList_closeMilestone + mileStone["uniqueId"], data, () => {
//         setmodalOpen(false);
//         setmodalFullOpen(false);
//         dispatch(backgeturl);
//       }
//       )
//     );
//   };


//   // console.log(mileStone , 'asdfkahsdfkjashdkjfhaskjdfh')

//   useEffect(() => {
//     // console.log("running_usefrer")
//     setItemCodeAllInputs([])
//     if(['MS1']?.includes(mileStone?.Name)&& modalOpen){
//         getdataAll()
//     }
//   }, [modalOpen]);



//   return (
//     <>
//       <Modal
//         size={"full"}
//         children={modalFullBody}
//         isOpen={modalFullOpen1}
//         setIsOpen={setmodalFullOpen1}
//         modalHead={"Forms & Checklist"}
//       />

//       <CommonForm
//         classes={"grid-cols-2 gap-1"}
//         Form={mileStoneCompletion}
//         errors={errors}
//         register={register}
//         setValue={setValue}
//         getValues={getValues}
//       />

//       <div className="flex justify-center">
//         {!checkmilestone?.includes("Forms & Checklist") && (
//           <Button
//             onClick={handleSubmit(onsubmiting)}
//             name={"Submit"}
//             classes="w-auto"
//           />
//         )}
//         {checkmilestone?.includes("Forms & Checklist") && ['Open', 'In Process']?.includes(checkmilestoneStatus) && (
//           <Button
//             onClick={handleSubmit(onsubmiting)}
//             name={"Submit"}
//             classes="w-auto"
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default CompletitonCreiteriaForm;



// NEw code That will work
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CommonForm from "../../../../components/CommonForm";
import Button from "../../../../components/Button";
import projectListActions from "../../../../store/actions/projectList-actions";
import { useDispatch, useSelector } from "react-redux";
import { Urls } from "../../../../utils/url";
import MyHomeActions from "../../../../store/actions/myHome-actions";
import NewLookBadge from "../../../../components/Badge";
import ManageSite from "./ManageSite";
import ManageComplianceTemplateForm from "../ManageCompliance/ManageComplianceTemplateForm";
import Modal from "../../../../components/Modal";
import AdminActions from "../../../../store/actions/admin-actions";
import { GET_COMPLIANCE_DEGROW_TEMPLATE_DATA, GET_ONE_COMPLIANCE_DY_FORM, GET_ONE_COMPLIANCE_L1_LIST } from "../../../../store/reducers/admin-reducer";
import { GET_GLOBAL_COMPLAINCE_TYPE_DATA } from "../../../../store/reducers/projectList-reducer";
import ManageComplianceTemplateApproverForm from "../ManageCompliance/ManageComplinaceTemplateApproverForm";
import ManageComplianceDegrowTemplateForm from "../ManageCompliance/ManageComplianceDegrowTemplateForm";
import ManageComplianceDegrowSRQ_Raise_And_DismantleTemplateForm from "../ManageCompliance/ManageComplianceDegrowSRQ_Raise_And_DismantleTemplateForm";
import Api from "../../../../utils/api";
import { Watch } from "react-loader-spinner";
import { calculateCompletionCriteriaPaylaod, range } from "../../../../components/CommonObjectsAndVariables";

const CompletitonCreiteriaForm = ({
  siteCompleteData,
  projectTypeUniqueId,
  mileStone,
  projectuniqueId,
  setmodalFullOpen,
  setmodalOpen,
  modalOpen,
  customeruniqueId,
  myTaskPage,
  filterView
}) => {


 
  const dispatch = useDispatch();
  const dateString = siteCompleteData["siteStartDate"];
  const [day, month, year] = dateString?.split("-")?.map(Number);
  const datestr = new Date(year, month - 1, day);
  // const [modalFullOpen, setmodalFullOpen] = useState(false);
  const [modalFullBody, setmodalFullBody] = useState(<></>);
  const [modalFullOpen1, setmodalFullOpen1] = useState(false);
  const [itemCodeAllInputs, setItemCodeAllInputs] = useState([])
  const [selectedOption,setSelectedOption] = useState("")
  const projectTypeName = siteCompleteData['projectType']
  const subProjectName = siteCompleteData['subProject']
  // const [totalAmount,setAmount] = useState([])
  const [quantityValue, setQuantityValue] = useState({})


  const checkmilestone = mileStone["Completion Criteria"]?.split(",")
  const checkmilestoneStatus = mileStone['mileStoneStatus']
  const milestoneName = mileStone['Name']

   const {
    register: register,
    handleSubmit: handleSubmit,
    setValue: setValue,
    getValues: getValues,
    watch,
    formState: { errors: errors },
  } = useForm();


  let quantity = []
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
    quantity.push(temp);

  }



  const getdataAll = async () => {
    const res = await Api.get({
      url: `/get/vendorCode/${customeruniqueId}/${siteCompleteData?.projectuniqueId}/${siteCompleteData?.projectuniqueId}/${siteCompleteData?.SubProjectId}?ACTIVITY=${siteCompleteData?.ACTIVITY}`,
    });

    // console.log(res?.data?.data[0], "__reshjhads");


    

    const itemCodeData = res?.data?.data[0];
    const itemCodeInputs = []
    const tempQuantity = []
    for (let i = range.start; i <= range.end; i++) {

      const key = `itemCode0${i}`
      if (itemCodeData[key]?.length > 0) {
        const filteredData = itemCodeData[key]?.filter((item) => {
            if(item?.rate&& item?.itemCodeDescription) return item
          })
        const tempData = {
          label: `Item Code- 0${i}`,
          name: `itemCode0${i}`,
          required: i === 1 ? true : false,
          type: "select",
          option: filteredData?.map((itm,index) => {
            if(itm?.rate !== undefined || itm?.rate !== ''){
              
              
              return {
              label: itm?.value+"-("+itm?.itemCodeDescription+")",
              value: itm?.value+","+itm?.rate+","+itm?.itemCodeDescription,
              rate:itm?.rate
            }
            }
          }) ,
          
          props: {
            onChange: (e) => {
                 const  key  = `itemCodeRate0${i}`
                //  console.log(e?.target?.value,"__sdfghjk")
                //  if(e?.target?.value?.split(" ")[-1]!=="" || e?.target?.value?.split(" ")[1]!==undefined){
                const n  = e?.target?.value?.split(" ")?.length
                console.log(e?.target?.value?.split(","),"__qwertyuiop")
                   setQuantityValue(prev => ({
                                  ...prev,
                                  [key]: Number(e?.target?.value?.split(",")[1])
                                }));
            // }
                 }
             
          },

          classes: "col-span-1",
        }
       
        const quantityObj = {
          label: `Quantity-0${i}`,
          name: `quantity0${i}`,
          required: i === 1 ? true : false,
          type: "customSelect",
          selectedOption:selectedOption,
          option: quantity,
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
         if (["MS1"]?.includes(mileStone?.Name)&& i===1){
             const totalAmountField = {
            label: "Total Amount",
            name: "amount",
            type: "number",
            required: false,
            props: {
              onChange: (e) => {
              
            },
              readOnly: true,
              style: { backgroundColor: '#f0f8ff', fontWeight: 'bold' }
            },
            classes: "col-span-1",
          };
          itemCodeInputs.push(totalAmountField)
          }
        if(filteredData?.length){
itemCodeInputs.push(tempData);
        itemCodeInputs.push(quantityObj)
        }
        
        
      }
    }
      


    setItemCodeAllInputs([...itemCodeInputs, ...tempQuantity]);

  }


  useEffect(()=>{
    let total=0;
    for (let i = range.start; i <= range?.end; i++) { 
  const rateKey = `itemCodeRate0${i}`;
  const qtyKey = `quantity0${i}`;

  if (quantityValue[rateKey] !== undefined || NaN && quantityValue[qtyKey] !== undefined || NaN ) {
    // console.log(quantityValue[rateKey],quantityValue[qtyKey],"___fghjk")
    total += quantityValue[rateKey] * quantityValue[qtyKey];
  }
}

setValue("amount",total)

  },[quantityValue])

  console.log(quantityValue, "quantityValue")





 
  let mileStoneprops = {
    "Completion Date": {
      maxSelectableDate: new Date(),
      minSelectableDate: datestr,
    },
  };

  let dataecoder = {
    Date: "datetime",
    Number: "number",
    File: "file",
    Text: "text",
    Dropdown: "select"
  };

  let mileStoneCompletion = useSelector((state) => {

    let mtoneCompletion = state?.adminData?.getManageCompletionCriteria || [];
    // console.log(mileStone["Completion Criteria"],"___sdfghjk")
    return mileStone["Completion Criteria"]?.split(",").map((dta) => {
      let geeter = mtoneCompletion.filter((itm) => itm.completion == dta);
      if (dta == "Forms & Checklist") {
        return {
          label: dta,
          name: "Checklist",
          type: "jsxcmpt",
          value: "",
          component:
            <p className="cursor-pointer"
              onClick={() => {
                dispatch(GET_GLOBAL_COMPLAINCE_TYPE_DATA({ dataAll: [], reset: true }))
                if (projectTypeName !== "DEGROW") {
                  dispatch(GET_ONE_COMPLIANCE_L1_LIST({ dataAll: [], reset: true }))
                  dispatch(GET_ONE_COMPLIANCE_DY_FORM({ dataAll: [], reset: true }))
                  dispatch(AdminActions.getOneComplianceDyform(siteCompleteData.uniqueId, mileStone.Name, true, ""));
                  dispatch(AdminActions.getOneComplianceL1List(siteCompleteData.uniqueId, mileStone.Name, true, ""));
                }
                dispatch(projectListActions.globalComplianceTypeDataGet(siteCompleteData.uniqueId, mileStone.uniqueId, "", true));
                setmodalFullOpen1(true)
                setmodalFullBody(
                  projectTypeName === "DEGROW" && milestoneName === "Survey" ?
                    <ManageComplianceDegrowTemplateForm
                      siteCompleteData={siteCompleteData}
                      uid={siteCompleteData.uniqueId}
                      customeruniqueId={customeruniqueId}
                      projectuniqueId={projectuniqueId}
                      setmodalFullOpen={setmodalFullOpen}
                      setmodalOpen={setmodalOpen}
                      mileStone={mileStone}
                      myTaskPage={myTaskPage}
                      filterView={filterView}
                    />
                    : projectTypeName === "DEGROW" && (milestoneName === "SRQ Raise" || milestoneName === "Dismantle") ?
                      <ManageComplianceDegrowSRQ_Raise_And_DismantleTemplateForm
                        siteCompleteData={siteCompleteData}
                        uid={siteCompleteData.uniqueId}
                        customeruniqueId={customeruniqueId}
                        projectuniqueId={projectuniqueId}
                        setmodalFullOpen={setmodalFullOpen}
                        setmodalOpen={setmodalOpen}
                        mileStone={mileStone}
                        myTaskPage={myTaskPage}
                        filterView={filterView}
                      />
                      : <ManageComplianceTemplateForm
                        siteCompleteData={siteCompleteData}
                        uid={siteCompleteData.uniqueId}
                        customeruniqueId={customeruniqueId}
                        projectuniqueId={projectuniqueId}
                        setmodalFullOpen={setmodalFullOpen}
                        setmodalOpen={setmodalOpen}
                        mileStone={mileStone}
                        myTaskPage={myTaskPage}
                        filterView={filterView}
                      />
                )
              }}>
              <NewLookBadge text={"Form"} notifyType={"info"} />
            </p>,
          props: {
            onChange: (e) => { },
          },
          required: false,
          classes: "col-span-1",
        };

      }
      else {
        return {
          label: dta,
          value: "",
          name: "CC_" + dta,
          // required: true,
          type: geeter.length > 0 ? dataecoder[geeter[0]["type"]] : "",
          option: geeter?.[0]?.type == "Dropdown" ? geeter[0]["dropdown"]?.split(",").map((itm) => {
            return {
              label: itm,
              value: itm,
            };
          }) : [],
          props: mileStoneprops[dta] || {},
        };
      }
    });
  });
  if(Array.isArray(mileStoneCompletion)){
    // console.log(mileStoneCompletion,"__mileStoneCompletion_")

    if (mileStoneCompletion[0]?.name?.includes("CC_")) {
        mileStoneCompletion = [...mileStoneCompletion, ...itemCodeAllInputs];
      }

  }
 
  let backgeturl = projectListActions.getProjectTypeAll(projectuniqueId, filterView);
  if (myTaskPage === "Yes") {
    backgeturl = MyHomeActions.getMyTask();
  }

  useEffect(()=>{
    if(Array.isArray(mileStoneCompletion)&& mileStoneCompletion?.length>0){
      for(let i = 0; i< mileStoneCompletion.length;i++){
      setValue(mileStoneCompletion[i]?.name,"")
    }
    }
    setQuantityValue({})
  },[itemCodeAllInputs])

  const onsubmiting = (data) => {
    console.log("comingHJer",data)
    
    if (checkmilestone.includes("Forms & Checklist")) {
      data['Checklist'] = "Yes"
      data['siteuid'] = siteCompleteData.uniqueId
      data['mName'] = mileStone['Name']
      data['projectTypeName'] = projectTypeName
      data['subProjectTypeName'] = subProjectName
    }else{
         let tempData={}
              console.log(quantityValue,"__valueofQa")
                  for (let i = range.start; i <= range.end; i++) {
                const quantityKey = `quantity0${i}`;

                if (quantityValue[quantityKey] !== undefined) {
                  tempData = { ...tempData, [quantityKey]: quantityValue[quantityKey] };
                } else {
                  tempData = { ...tempData, [quantityKey]: "" };
                }
              }
              console.log(tempData,"__tenp")
              data={...data,...tempData}
                console.log(data,"__data")
       data = calculateCompletionCriteriaPaylaod(itemCodeAllInputs,data);
    }

    if(data===false){
      return;
    }
   
      console.log(data,"___newjbjsd")
    dispatch(
      projectListActions.postSubmit(Urls.projectList_closeMilestone + mileStone["uniqueId"], data, () => {
        setmodalOpen(false);
        setmodalFullOpen(false);
        dispatch(backgeturl);
      }
      )
    );
  };


  // console.log(mileStone , 'asdfkahsdfkjashdkjfhaskjdfh')

  useEffect(() => {
    // console.log("running_usefrer")
    setItemCodeAllInputs([])
    if(['MS1']?.includes(mileStone?.Name)&& modalOpen){
        getdataAll()
    }
  }, [modalOpen]);



  return (
    <>
      <Modal
        size={"full"}
        children={modalFullBody}
        isOpen={modalFullOpen1}
        setIsOpen={setmodalFullOpen1}
        modalHead={"Forms & Checklist"}
      />

      <CommonForm
        classes={"grid-cols-2 gap-1"}
        Form={mileStoneCompletion}
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
        setQuantityValue={setQuantityValue}
        quantityValue={quantityValue}
      />

      <div className="flex justify-center">
        {!checkmilestone?.includes("Forms & Checklist") && (
          <Button
            onClick={handleSubmit(onsubmiting)}
            name={"Submit"}
            classes="w-auto"
          />
        )}
        {checkmilestone?.includes("Forms & Checklist") && ['Open', 'In Process']?.includes(checkmilestoneStatus) && (
          <Button
            onClick={handleSubmit(onsubmiting)}
            name={"Submit"}
            classes="w-auto"
          />
        )}
      </div>
    </>
  );
};

export default CompletitonCreiteriaForm;


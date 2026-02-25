import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import AdvancedTable from '../../../components/AdvancedTable';
import ComplianceForm from '../Admin/Compliance/ComplianceForm';
import { useDispatch, useSelector } from 'react-redux';
import VendorActions from '../../../store/actions/vendor-actions';
import { checkArray, CheckTrueOrFalse, checkVariable, pagination } from '../../../components/CommonObjectsAndVariables';
import ConditionalButton from "../../../components/ConditionalButton";
import {
  getAccessType,
  objectToQueryString,
} from "../../../utils/commonFunnction";
import CommonActions from "../../../store/actions/common-actions";
import CstmButton from '../../../components/CstmButton';
import DeleteButton from '../../../components/DeleteButton';
import Button from '../../../components/Button';
import { ALERTS } from '../../../store/reducers/component-reducer';
import Modal from '../../../components/Modal';
import CommonAlert from '../../../components/Common Alert/CommonAlert';
import FileUploader from '../../../components/FIleUploader';
import { Urls } from '../../../utils/url';
const Wcc = () => {

    const dispatch = useDispatch();
      const [filters, setFilters] = useState(pagination);
      const [fileOpen, setFileOpen] = useState(false);
      const [checkedData,setCheckData] =useState([])
      const [checkedChildData,setCheckChildData] =useState([])
      const [wccPdfData,setWccPdfData]= useState([])
      const [assignDate, setAssignDate] = useState();
        const [strValFil, setstrVal] = useState(false);
        const [modalOpen, setmodalOpen] = useState(false);
        const [modalBody, setmodalBody] = useState(<></>);
        const [modalHead, setmodalHead] = useState(<></>);
 const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();


    // useEffect(()=>{
    //     dispatch(VendorActions.getWccSubmodule());
    // },[])

// const handleAddActivity = (data) => {
//     setExtraColumns(data["Month"]);
//     setValue("viewBy", data["Month"]);
//     if (assignDate) {
//       const { start, end } = assignDate;
//       data["start"] = start?.split("T")[0];
//       data["end"] = end?.split("T")[0];
//     }

//     setFilters({
//       ...filters,
//       ...data,
//     });
//     dispatch(
//       VendorActions.getVendorProjectTracking(true, objectToQueryString(data))
//     );
//   };

    const onSubmit = (data) => {
      // console.log(data,"__data__")
    let shouldReset = data.reseter;
    delete data.reseter;

    let strVal = objectToQueryString({...data,...pagination});
    // console.log(strVal,"___strVal__")
    if (assignDate) {
      let tempObj={}
      const { start, end } = assignDate;
      tempObj["start"] = start?.split("T")[0];
      tempObj["end"] = end?.split("T")[0];
   
     strVal= objectToQueryString({...data,...pagination,...{startData:tempObj["start"],endDate:tempObj["end"]}})
    }
   
    // console.log(data,"___data")
    setstrVal(strVal);
    setFilters({
      ...filters,
      ...data,
    });
    
    dispatch(
       VendorActions.getWccSubmodule(true,strVal)
      // VendorActions.getVendorProjectTracking(true, objectToQueryString(data))
    );
  };
  //   useEffect(() => {
  //     const defaultPagination = objectToQueryString({"page":1, "limit":50})
  //    dispatch(VendorActions.getWccSubmodule(true,defaultPagination))
  // }, []);

  // console.log(checkedData,checkedChildData,"___checkdateda")


 const getAllData = (itm) => {
  // console.log("CommingHEre")
  dispatch(
    VendorActions.postDeSelectWCC(
      { ssid: itm?.ssid, vendorItemCode: itm?.vendorItemCode },
      () => {
        const defaultPagination = objectToQueryString({ page: 1, limit: 50 });
        dispatch(VendorActions.getWccSubmodule(true, defaultPagination));
      },
      null
    )
  );
  // console.log(modalOpen,"___modalOpen")
  // setmodalOpen(false)

  
};                                    

      const table = {
    
     columns : [
          {
        name: (
          <input
            type={"checkbox"}
            checked={
              checkedData?.length === checkedChildData?.length && checkedData?.length>0
                ? true
                : false
            }
            onClick={(e) => {
              // console.log(e,"___e__")
              if (e.target.checked) {
                setCheckChildData(prev=>prev=[])
              tableData?.map((itm)=>{
                
                if(CheckTrueOrFalse(itm?.wccEligibility)){

                  const tempObj ={ssid:itm?.ssid,vendorItemCode:itm?.vendorItemCode}
                  const tempObj2=[itm?.ssid]
                  if(itm?.wccNumber===undefined){
                     setCheckData(prev=>[...prev,...tempObj2,...[tempObj]])
                     setCheckChildData(prev=>[...prev,...tempObj2,...[tempObj]])
                  }
                  
                }
              })
              } else{
                 setCheckData([])
                 setCheckChildData([])
              }
            }}
          />
        ),
        value: "checkboxProject",
        style: "min-w-[40px] max-w-[40px] text-center",
      },{
        name:"Generate PDF",
        value:"generatePdf",
         style: "min-w-[20px] max-w-[200px] text-center",
      },
  // {
  //   name: "Customer",
  //   value: "customer",
  //   style: "min-w-[140px] max-w-[200px] text-center",
  // },
  {
    name: "Project Group",
    value: "projectGroup",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
  // {
  //   name: "Project ID",
  //   value: "projectId",
  //   style: "min-w-[140px] max-w-[200px] text-center",
  // },
  {
    name: "Project Type",
    value: "projectType",
    style: "min-w-[100px] max-w-[220px] text-center",
  },
  {
    name: "Sub Project",
    value: "subProject",
    style: "min-w-[100px] max-w-[220px] text-center",
  },
  {
    name: "Site ID",
    value: "siteId",
    style: "min-w-[120px] max-w-[180px] text-center",
  },
  {
    name: "SSID",
    value: "ssid",
    style: "min-w-[100px] max-w-[180px] text-center",
  },
  {
    name: "Vendor Name",
    value: "vendorName",
    style: "min-w-[250px] max-w-[300px] text-center",
  },
  // {
  //   name: "Vendor ID",
  //   value: "vendorId",
  //   style: "min-w-[140px] max-w-[200px] text-center",
  // },
  {
    name: "Vendor Item Code",
    value: "vendorItemCode",
    style: "min-w-[100px] max-w-[240px] text-center",
  },
  {
    name: "Vendor Item Code Description",
    value: "vendorItemCodeDescription",
    style: "min-w-[120px] max-w-[5 00px] text-center",
  },
  {
    name: "Qty",
    value: "quantity",
    style: "min-w-[60px] max-w-[160px] text-center",
  },
  {
    name: "Vendor Rate",
    value: "vendorRate",
    style: "min-w-[80px] max-w-[200px] text-center",
  },
  // {
  //   name: "PO Value",
  //   value: "poValue",
  //   style: "min-w-[140px] max-w-[200px] text-center",
  // },
  // {
  //   name: "Activity Month",
  //   value: "activityMonth",
  //   style: "min-w-[160px] max-w-[220px] text-center",
  // },
  {
    name: "PO Number",
    value: "poNumber",
    style: "min-w-[60px] max-w-[220px] text-center",
  },
  {
    name: "CDH",
    value: "cdh",
    style: "min-w-[40px] max-w-[140px] text-center",
  },
  {
    name: "PAT",
    value: "pat",
    style: "min-w-[40px] max-w-[160px] text-center",
  },
  {
    name: "OCI",
    value: "oci",
    style: "min-w-[40px] max-w-[140px] text-center",
  },
  {
    name: "SCFT",
    value: "scft",
    style: "min-w-[40px] max-w-[140px] text-center",
  },
  {
    name: "EMF",
    value: "emf",
    style: "min-w-[40px] max-w-[140px] text-center",
  },
  {
    name: "Action",
    value: "action",
    style: "min-w-[120px] max-w-[160px] text-center",
  },
  {
    name: "Submission Date",
    value: "submissionDate",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
  {
    name: "WCC Eligibility",
    value: "wccEligibility",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
  {
    name: "WCC Number",
    value: "wccNumber",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
  {
    name: "Actions",
    value: "actions",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
],
    properties: {
      rpp: [10, 20, 50, 100],
    },

    filter:[
      {
        label: "Site Id",
        value: "",
        name: "siteId",

        type: "text",
      },
      {
        label: "Vendor Name",
        value: "",
        type: "text",
        name: "vendorName",
      },
      {
        label: "Vendor Id",
        value: "",
        name: "vendorId",
        type: "text",
      },
       {
        label: "Vendor Item Code",
        value: "",
        name: "vendorItemCode",

        type: "text",
      },
      {
        label: "WCC Number",
        value: "",
        name: "wccNumber",

        type: "text",
      },
       {
      label: "Date Filter",
      value: "",
      name: "dateFilter",
      type: "datetimeRangeNew",
      
      // bg: "bg-[#3e454d] text-gray-300 border-[1.5px] border-solid border-[#64676d]",
      required: false,
      onChange: (data) => {
        setAssignDate(data);
      },
    },
      {
        label: "WCC Eligibility",
        value: "",
        type: "select",
        name: "wccEligibility",
        // bg: "bg-[#3e454d] text-gray-300 border-[1.5px] border-solid border-[#64676d]",
        option: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      },
    ],
  };


//   Table Data starts here
// console.log(checkedData,checkedChildData,"___checkedData_")
// console.log(wccPdfData,"___wccPdfData")

  let tableData  = useSelector((state)=>state?.vendorData?.getWccSubmodule);
  tableData = tableData?.map((itm)=>{
    return {
      ...itm,
      // itm?.cdh:itm?.cdh==="Approved"?<p className='text-green-600'>{itm?.cdh}</p>:<p >{itm?.cdh}</p>,
      checkboxProject: (
          <>
          {
            CheckTrueOrFalse(itm?.wccEligibility ) && itm?.wccNumber===undefined?

            
              <input
              type={"checkbox"}
              // id={itm.uniqueId}
              // subId={itm.SubProjectId}
              checked={checkedData?.some(d => d.ssid === itm.ssid) || checkedChildData?.some(d => d.ssid === itm.ssid)}
              value={itm.uniqueId}
              onChange={(e) => {
                
                  if(e?.target?.checked && itm?.wccNumber===undefined ){
          
                      const tempObj = {ssid:itm?.ssid,vendorItemCode:itm?.vendorItemCode}
                      setCheckChildData(prev=>[...prev,...[tempObj]])
                    
                  }
                  else{
                    // console.log(e?.target?.checked,"___peinfoes")
                        if(checkVariable(checkedData)){
                            const data  = checkedData?.filter(CheckItm=>itm?.ssid !== CheckItm?.ssid)
                            setCheckChildData(data)
                            setCheckData([])
                        }else{
                           const data  = checkedChildData?.filter(checkChildItm=>itm?.ssid !== checkChildItm?.ssid)
                           console.log(data,"CheckChldata")
                           setCheckChildData(data)
                        }
                  }
              }}
            />:
            <></>
          }
         
          </>
        ),
        generatePdf:(
          <>
            {
            itm?.isWccCreated===true?

            
              <input
              type={"checkbox"}
              // id={itm.uniqueId}
              // subId={itm.SubProjectId}
              checked={wccPdfData?.some(d => d.ssid === itm.ssid) }
              value={itm.uniqueId}
              onChange={(e) => {
                
                  if(e?.target?.checked ){
          
                      const tempObj = {ssid:itm?.ssid,vendorItemCode:itm?.vendorItemCode,wccNumber:itm?.wccNumber}
                      setWccPdfData(prev=>[...prev,...[tempObj]])
                    
                  }
                  else{
                    // console.log(e?.target?.checked,"___peinfoes")
                        const data =wccPdfData?.filter(bar=>bar?.ssid!==itm?.ssid)
                        setWccPdfData(data)
                       
                  }
              }}
            />:
            <></>
          }
         
          </>
        ),
        actions:(
          <>
          {
            CheckTrueOrFalse(itm?.wccEligibility) && itm?.wccNumber!==undefined
            ?
              <CstmButton child={<DeleteButton name={""} onClick={() => {
                    // let msgdata = {
                    //     show: true,
                    //     icon: 'warning',
                    //     // buttons: [
                    //     //     <Button classes='w-15 bg-rose-400' onClick={() => {
                                 
                            
                    //     //     }} name={"OK"} />,
                    //     //     <Button classes='w-auto' onClick={() => {
                    //     //         dispatch(ALERTS({ show: false }))
                    //     //     }} name={"Cancel"} />
                    //     // ],
                        
                    //     text: "Are you sure you want to Delete?"
                    // }

                     console.log("Raaand")
                              
                                setmodalBody(
                                        <>
                                          <CommonAlert
                                            selectedRow={itm}
                                            Heading={"Are you Sure ?"}
                                            getAllDAta = {() => {
                                                      console.log("CommingHEre")
                                                      dispatch(
                                                        VendorActions.postDeSelectWCC(
                                                          { ssid: itm?.ssid, vendorItemCode: itm?.vendorItemCode },
                                                          () => {
                                                            const defaultPagination = objectToQueryString({ page: 1, limit: 50 });
                                                            dispatch(VendorActions.getWccSubmodule(true, defaultPagination));
                                                          },
                                                          null
                                                        )
                                                      )}}
                                            setmodalOpen={setmodalOpen}
                                            sendData={{}}
                                          />
                                        </>
                                      );
                                      setmodalOpen(true);
                    // dispatch(ALERTS(msgdata))
                }}></DeleteButton>} />
                :
                <></>
          }
           
          </>
        )
    }
  })
  // console.log(tableData,"___tableData")
//   Table Data ends here

  const handleModalClose = () => {
    // dataAll();
    setmodalOpen(false);
    setmodalBody(<></>);
    setmodalHead(<></>);

    // setSelectedRow(null);
  };

    const onTableViewSubmit = (data) => {
    data["fileType"] = "wccUpload";
        dispatch(
        CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
            const defaultPagination = objectToQueryString({ page: 1, limit: 50 });
        dispatch(VendorActions.getWccSubmodule(true, defaultPagination));
            setFileOpen(false);
            resetting("");
            
        })
        );
  };


  return (
   <>
        <AdvancedTable
        headerButton={
          <div className="flex">
           {
            checkVariable(checkedData)  ?
            <>
               <ConditionalButton
              showType={getAccessType("Add New(ManageEmployee)")}
              classes="w-auto mr-1"
              // onClick={() => navigate("/empdetails")}
              onClick={() => {
                setCheckData([])
                setCheckChildData([])
                dispatch(VendorActions.postCreateWCC(checkedData,()=>{

                  const defaultPagination = objectToQueryString({"page":1, "limit":50})
                  dispatch(VendorActions.getWccSubmodule(true,defaultPagination))
                },null))
                // setmodalHead("Add Compliance");
                // setmodalBody(
                //   <ComplianceForm modalBody={modalBody} setIsOpen={setmodalOpen} onClose={() => setmodalOpen(false)}  />
                // );
                // setmodalOpen(true);
              }}
              name={"Create WCC"}
            />
            {/* <ConditionalButton
              showType={getAccessType("Upload(ManageEmployee)")}
              name={"Delete"}
              classes="w-auto mr-1"
              onClick={() => 
                // setFileOpen(true)
                  console.log("asdasd")
              }
            /> */}
              </>
              :checkVariable(checkedChildData)?<>
                <ConditionalButton
              showType={getAccessType("Add New(ManageEmployee)")}
              classes="w-auto mr-1"
              // onClick={() => navigate("/empdetails")}
              onClick={() => {
                  setCheckChildData([])
                  setCheckData([])
                dispatch(VendorActions.postCreateWCC(checkedChildData,()=>{
                  const defaultPagination = objectToQueryString({"page":1, "limit":50})
                  dispatch(VendorActions.getWccSubmodule(true,defaultPagination))
                },null))
                // setmodalHead("Add Compliance");
                // setmodalBody(
                //   <ComplianceForm modalBody={modalBody} setIsOpen={setmodalOpen} onClose={() => setmodalOpen(false)}  />
                // );
                // setmodalOpen(true);
              }}
              name={"Create WCC"}
            />
            {/* <ConditionalButton
              showType={getAccessType("Upload(ManageEmployee)")}
              name={"Delete"}
              classes="w-auto mr-1"
              onClick={() => 
                // setFileOpen(true)
                  console.log("asdasd")
              }
            /> */}
              </>
              :<></>
           }
            {
            wccPdfData?.length>0?
              <ConditionalButton
              showType={getAccessType("Export(Site)")}
              classes="w-auto "
              onClick={(e) => {
                // dispatch(
                //   CommonActions.commondownload(
                //     "/wcc/download?","","POST",wccPdfData,()=>{}
                //   )
                // );
              dispatch(
                      CommonActions.commondownloadpost(
                        "/wcc/download?",
                        `${wccPdfData[0]?.wccNumber}.pdf`,
                        "POST",
                        wccPdfData
                      )
                    );
                    setWccPdfData([])

              }}
              name={"Generate PDF"}
            ></ConditionalButton>:
            <></>
           }
          
            <ConditionalButton
              showType={getAccessType("Upload(ManageEmployee)")}
              name={"Upload File"}
              classes="w-auto mr-1"
              onClick={() => setFileOpen(true)}
            />
           <ConditionalButton
              showType={getAccessType("Export(Site)")}
              classes="w-auto "
              onClick={(e) => {
                dispatch(
                  CommonActions.commondownload(
                    "/export/wcc?"+
                      objectToQueryString(filters),
                    "WCC.xlsx"
                  )
                );
              }}
              name={"Export"}
            ></ConditionalButton>
            
           
          </div>
        }
        table={table}
        
        filterAfter={onSubmit}
        tableName={"WCC"}
        handleSubmit={handleSubmit}
        data={[
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "Yes",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19689,
      "poValue": 650,
      "projectGroup": "AIR-DEL-MCT0356",
      "projectId": "S-IN-AIR-DL-REL-30012",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "43027",
      "ssid": "SSID00094428",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "459",
      "vendorItemCode": "RELBBBBT13",
      "vendorItemCodeDescription": "Services : Relocation : EMF Survey-Calculation :EMF testing per site by calculation method with Report acceptance",
      "vendorName": "SA.AR TELECONSTRUCTION PRIVATE LIMITED",
      "vendorRate": 650,
      "wccEligibility": "No"
    },
    {
      "action": "Wcc Submitted",
      "activityMonth": "Sep-2025",
      "cdh": "Approved",
      "customer": "AIRTEL",
      "emf": "No",
      "isWccCreated": true,
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19812,
      "poValue": 1000,
      "projectGroup": "AIR-DEL-MCT0356",
      "projectId": "S-IN-AIR-DL-REL-30012",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "43039",
      "ssid": "SSID00094434",
      "subProject": "RELOCATION",
      "submissionDate": "12-02-2026",
      "vendorId": "40689",
      "vendorItemCode": "RFAIINCSUR1",
      "vendorItemCodeDescription": "Services :RFAI :RFAI Survey: Tower Top RFAI Survey for Installation and Commissioning Services with Reporting",
      "vendorName": "VEDTEL SERVICES PRIVATE LIMITED",
      "vendorRate": 1000,
      "wccEligibility": "Yes",
      "wccNumber": "WCC-26-100015"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "Yes",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19689,
      "poValue": 650,
      "projectGroup": "AIR-DEL-MCT0356",
      "projectId": "S-IN-AIR-DL-REL-30012",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "43039",
      "ssid": "SSID00094434",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "459",
      "vendorItemCode": "RELBBBBT13",
      "vendorItemCodeDescription": "Services : Relocation : EMF Survey-Calculation :EMF testing per site by calculation method with Report acceptance",
      "vendorName": "SA.AR TELECONSTRUCTION PRIVATE LIMITED",
      "vendorRate": 650,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "Yes",
      "poNumber": 19499,
      "poValue": 18000,
      "projectGroup": "AIR-DEL-MCT0356",
      "projectId": "S-IN-AIR-DL-REL-30012",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "43039",
      "ssid": "SSID00094434",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "40824",
      "vendorItemCode": "RELFSINC11",
      "vendorItemCodeDescription": "Services : Relocation : Installation & Commissioning Services:RFAI Survey,Full Site I&C services for Relocation including 1 MW HOP - greater than 9 & upto 12 Radios with Accessories & Report acceptance",
      "vendorName": "Maaz Telecom",
      "vendorRate": 18000,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "May-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "Yes",
      "poNumber": 17848,
      "poValue": 17500,
      "projectGroup": "AIR-APTL-MCT0380",
      "projectId": "S-IN-AIR-AP-REL-30013",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "AKMN12",
      "ssid": "SSID00094525",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "40833",
      "vendorItemCode": "RELFSINC10",
      "vendorItemCodeDescription": "Services : Relocation : Installation & Commissioning Services:RFAI Survey,Full Site I&C services for Relocation including 1 MW HOP - greater than 6 & upto 9 Radios with Accessories & Report acceptance",
      "vendorName": "SV TELECOMMUNICATIONS",
      "vendorRate": 17500,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Sep-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "Yes",
      "poNumber": 19247,
      "poValue": 15500,
      "projectGroup": "AIR-APTL-MCT0380",
      "projectId": "S-IN-AIR-AP-REL-30013",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "VIJ706",
      "ssid": "SSID00095309",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "40723",
      "vendorItemCode": "RELFSINC09",
      "vendorItemCodeDescription": "Services : Relocation : Installation & Commissioning Services:RFAI Survey,Full Site I&C services for Relocation including 1 MW HOP - greater than 3 & upto 6 Radios with Accessories & Report acceptance",
      "vendorName": "DHANVI TELECOM SERVICES",
      "vendorRate": 15500,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Sep-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "Yes",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19251,
      "poValue": 2500,
      "projectGroup": "AIR-APTL-MCT0380",
      "projectId": "S-IN-AIR-AP-REL-30013",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "VIJ706",
      "ssid": "SSID00095309",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "40721",
      "vendorItemCode": "RELBBBBT13",
      "vendorItemCodeDescription": "Services : Relocation : Broadband Testing :EMF testing per site by broadband method with report & Acceptance",
      "vendorName": "PADMAVATHI ENTERPRISES",
      "vendorRate": 2500,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "Yes",
      "poNumber": 19658,
      "poValue": 17500,
      "projectGroup": "AIR-APTL-MCT0380",
      "projectId": "S-IN-AIR-AP-REL-30013",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "KHA237",
      "ssid": "SSID00095611",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "551",
      "vendorItemCode": "RELFSINC10",
      "vendorItemCodeDescription": "Services : Relocation : Installation & Commissioning Services:RFAI Survey,Full Site I&C services for Relocation including 1 MW HOP - greater than 6 & upto 9 Radios with Accessories & Report acceptance",
      "vendorName": "SIRI ENTERPRISES",
      "vendorRate": 17500,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "Yes",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19489,
      "poValue": 2500,
      "projectGroup": "AIR-APTL-MCT0380",
      "projectId": "S-IN-AIR-AP-REL-30013",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "KHA237",
      "ssid": "SSID00095611",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "40721",
      "vendorItemCode": "RELBBBBT13",
      "vendorItemCodeDescription": "Services : Relocation : Broadband Testing :EMF testing per site by broadband method with report & Acceptance",
      "vendorName": "PADMAVATHI ENTERPRISES",
      "vendorRate": 2500,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "Yes",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19489,
      "poValue": 800,
      "projectGroup": "AIR-APTL-MCT0380",
      "projectId": "S-IN-AIR-AP-REL-30013",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "PEPA02",
      "ssid": "SSID00096528",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "40721",
      "vendorItemCode": "RELEMEMS14",
      "vendorItemCodeDescription": "Services : Relocation : EMF Survey-Calculation :EMF testing per site by calculation method with Report acceptance",
      "vendorName": "PADMAVATHI ENTERPRISES",
      "vendorRate": 800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "May-2024",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 194999,
      "poValue": 1000,
      "projectGroup": "AIR-APTL-MCT0380",
      "projectId": "S-IN-AIR-AP-REL-30013",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "PEPA02",
      "ssid": "SSID00096528",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "40721",
      "vendorItemCode": "RFAIINCSUR1",
      "vendorItemCodeDescription": "Services :RFAI :RFAI Survey: Tower Top RFAI Survey for Installation and Commissioning Services with Reporting",
      "vendorName": "PADMAVATHI ENTERPRISES",
      "vendorRate": 1000,
      "wccEligibility": "No"
    },
    {
      "action": "Wcc Submitted",
      "activityMonth": "Nov-2025",
      "cdh": "Approved",
      "customer": "AIRTEL",
      "emf": "No",
      "isWccCreated": true,
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "Approved",
      "poNumber": 19968,
      "poValue": 19500,
      "projectGroup": "AIR-APTL-MCT0380",
      "projectId": "S-IN-AIR-AP-REL-30013",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "PEPA02",
      "ssid": "SSID00096528",
      "subProject": "RELOCATION",
      "submissionDate": "24-02-2026",
      "vendorId": "40721",
      "vendorItemCode": "RELFSINC11",
      "vendorItemCodeDescription": "Services : Relocation : Installation & Commissioning Services:RFAI Survey,Full Site I&C services for Relocation including 1 MW HOP - greater than 9 & upto 12 Radios with Accessories & Report acceptance",
      "vendorName": "PADMAVATHI ENTERPRISES",
      "vendorRate": 19500,
      "wccEligibility": "Yes",
      "wccNumber": "WCC-26-100017"
    },
    {
      "activityMonth": "Nov-2024",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "Yes",
      "poNumber": 17386,
      "poValue": 17500,
      "projectGroup": "AIR-APTL-MCT0380",
      "projectId": "S-IN-AIR-AP-REL-30013",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "RJM098",
      "ssid": "SSID00096618",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "40833",
      "vendorItemCode": "RELFSINC10",
      "vendorItemCodeDescription": "Services : Relocation : Installation & Commissioning Services:RFAI Survey,Full Site I&C services for Relocation including 1 MW HOP - greater than 6 & upto 9 Radios with Accessories & Report acceptance",
      "vendorName": "SV TELECOMMUNICATIONS",
      "vendorRate": 17500,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Feb-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "Yes",
      "poNumber": 17724,
      "poValue": 15500,
      "projectGroup": "AIR-APTL-MCT0380",
      "projectId": "S-IN-AIR-AP-REL-30013",
      "projectType": "RELOCATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "TDVP12",
      "ssid": "SSID00096801",
      "subProject": "RELOCATION",
      "submissionDate": null,
      "vendorId": "40833",
      "vendorItemCode": "RELFSINC09",
      "vendorItemCodeDescription": "Services : Relocation : Installation & Commissioning Services:RFAI Survey,Full Site I&C services for Relocation including 1 MW HOP - greater than 3 & upto 6 Radios with Accessories & Report acceptance",
      "vendorName": "SV TELECOMMUNICATIONS",
      "vendorRate": 15500,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19818,
      "poValue": 6000,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-HR-DEG-80003",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "BGRH61",
      "ssid": "SSID00121181",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 6000,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19818,
      "poValue": 6000,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-HR-DEG-80003",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "BGRH61",
      "ssid": "SSID00121182",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 6000,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19832,
      "poValue": 800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "CPDS",
      "ssid": "SSID00121974",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40786",
      "vendorItemCode": "RFAIDNCSUR1",
      "vendorItemCodeDescription": "Services :RFAI :RFAI Survey: Tower Top RFAI Survey for Installation and Commissioning Services with Reporting",
      "vendorName": "ASPL ENTERPRISES",
      "vendorRate": 800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19534,
      "poValue": 3800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "DIGB",
      "ssid": "SSID00122081",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40786",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "ASPL ENTERPRISES",
      "vendorRate": 3800,
      "wccEligibility": "No"
    },
    {
      "action": "Wcc Submitted",
      "activityMonth": "Sep-2025",
      "cdh": "Approved",
      "customer": "AIRTEL",
      "emf": "No",
      "isWccCreated": true,
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19534,
      "poValue": 800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "DIGB",
      "ssid": "SSID00122081",
      "subProject": "TWIN BEAM",
      "submissionDate": "12-02-2026",
      "vendorId": "40786",
      "vendorItemCode": "RFAIDNCSUR1",
      "vendorItemCodeDescription": "Services :RFAI :RFAI Survey: Tower Top RFAI Survey for De-Installation Services +SRN/SRQ+with Reporting",
      "vendorName": "ASPL ENTERPRISES",
      "vendorRate": 800,
      "wccEligibility": "Yes",
      "wccNumber": "WCC-26-100011"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19277,
      "poValue": 5200,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-HR-DEG-80003",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "DMLA47",
      "ssid": "SSID00122096",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 5200,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19833,
      "poValue": 3800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "EBLN",
      "ssid": "SSID00122173",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "524",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "CT GROUP",
      "vendorRate": 3800,
      "wccEligibility": "No"
    },
    {
      "action": "Wcc Submitted",
      "activityMonth": "Aug-2025",
      "cdh": "Approved",
      "customer": "AIRTEL",
      "emf": "No",
      "isWccCreated": true,
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19833,
      "poValue": 800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "EBLN",
      "ssid": "SSID00122173",
      "subProject": "TWIN BEAM",
      "submissionDate": "10-02-2026",
      "vendorId": "524",
      "vendorItemCode": "RFAIDNCSUR1",
      "vendorItemCodeDescription": "Services :RFAI :RFAI Survey: Tower Top RFAI Survey for De-Installation Services +SRN/SRQ+with Reporting",
      "vendorName": "CT GROUP",
      "vendorRate": 800,
      "wccEligibility": "Yes",
      "wccNumber": "WCC-26-100015"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19833,
      "poValue": 3800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "ENTL",
      "ssid": "SSID00122191",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "524",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "CT GROUP",
      "vendorRate": 3800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19538,
      "poValue": 800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "ENTL",
      "ssid": "SSID00122191",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "524",
      "vendorItemCode": "RFAIDNCSUR1",
      "vendorItemCodeDescription": "Services :RFAI :RFAI Survey: Tower Top RFAI Survey for De-Installation Services +SRN/SRQ+with Reporting",
      "vendorName": "CT GROUP",
      "vendorRate": 800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19833,
      "poValue": 3800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "GRGP",
      "ssid": "SSID00122392",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "524",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "CT GROUP",
      "vendorRate": 3800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19549,
      "poValue": 3800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "JDVG",
      "ssid": "SSID00122844",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "403",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "TELEYSIA NETWORKS PVT.LTD- GUJRAT",
      "vendorRate": 3800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19818,
      "poValue": 5200,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-HR-DEG-80003",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "JIND28",
      "ssid": "SSID00123107",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 5200,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19818,
      "poValue": 5200,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-PB-DEG-80006",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "KNGW72",
      "ssid": "SSID00123356",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 5200,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19818,
      "poValue": 5200,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-PB-DEG-80006",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "KNGW72",
      "ssid": "SSID00123357",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 5200,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19818,
      "poValue": 5200,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-HR-DEG-80003",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "KTHL99",
      "ssid": "SSID00123578",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 5200,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19818,
      "poValue": 5200,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-PB-DEG-80006",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "KTHR61",
      "ssid": "SSID00123579",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 5200,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19818,
      "poValue": 6000,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-PB-DEG-80006",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "LBR690",
      "ssid": "SSID00123628",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 6000,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19898,
      "poValue": 2700,
      "projectGroup": "AIR-UPW-MCT0370",
      "projectId": "S-IN-AIR-UPW-DEG-80001",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "NAYG02",
      "ssid": "SSID00124450",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "489",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "SHREE TECHNOCRAT COMMUNICATION SYSTEM PVT LTD",
      "vendorRate": 2700,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19898,
      "poValue": 800,
      "projectGroup": "AIR-UPW-MCT0370",
      "projectId": "S-IN-AIR-UPW-DEG-80001",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "NAYG02",
      "ssid": "SSID00124450",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "489",
      "vendorItemCode": "RFAIDNCSUR1",
      "vendorItemCodeDescription": "Services :RFAI :RFAI Survey: Tower Top RFAI Survey for De-Installation Services +SRN/SRQ+with Reporting",
      "vendorName": "SHREE TECHNOCRAT COMMUNICATION SYSTEM PVT LTD",
      "vendorRate": 800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19277,
      "poValue": 5200,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-PB-DEG-80006",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "NHAL04",
      "ssid": "SSID00124494",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 5200,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19549,
      "poValue": 800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "PDMA",
      "ssid": "SSID00125319",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "403",
      "vendorItemCode": "RFAIDNCSUR1",
      "vendorItemCodeDescription": "Services :RFAI :RFAI Survey: Tower Top RFAI Survey for De-Installation Services +SRN/SRQ+with Reporting",
      "vendorName": "TELEYSIA NETWORKS PVT.LTD- GUJRAT",
      "vendorRate": 800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19816,
      "poValue": 5200,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-PB-DEG-80006",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "PND977",
      "ssid": "SSID00125393",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "588",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "FIBER FITTERS",
      "vendorRate": 5200,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19818,
      "poValue": 6000,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-HR-DEG-80003",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "RWRI76",
      "ssid": "SSID00125622",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 6000,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19816,
      "poValue": 6000,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-PB-DEG-80006",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "SATH86",
      "ssid": "SSID00125654",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "588",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "FIBER FITTERS",
      "vendorRate": 6000,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Sep-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19832,
      "poValue": 3800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "SMRS",
      "ssid": "SSID00125829",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40786",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "ASPL ENTERPRISES",
      "vendorRate": 3800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Sep-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19303,
      "poValue": 3800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "SMRS",
      "ssid": "SSID00125830",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40786",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "ASPL ENTERPRISES",
      "vendorRate": 3800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Sep-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19303,
      "poValue": 3800,
      "projectGroup": "AIR-KROB-MCT0292",
      "projectId": "S-IN-AIR-KOL-DEG-80019",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "SNTS",
      "ssid": "SSID00125862",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40786",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "ASPL ENTERPRISES",
      "vendorRate": 3800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Dec-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19277,
      "poValue": 5200,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-PB-DEG-80006",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "SUK492",
      "ssid": "SSID00125925",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 5200,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19817,
      "poValue": 4700,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-HR-DEG-80003",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "YMN168",
      "ssid": "SSID00126427",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40748",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "FORCETEL TELECOM (OPC) PRIVATE LIMITED",
      "vendorRate": 4700,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19277,
      "poValue": 5200,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-HR-DEG-80003",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "YMN239",
      "ssid": "SSID00126439",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40810",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "GALAXY CELLULAR",
      "vendorRate": 5200,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Nov-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "Yes",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19817,
      "poValue": 4700,
      "projectGroup": "AIR-HPHP-MCT0384",
      "projectId": "S-IN-AIR-HR-DEG-80003",
      "projectType": "DEGROW",
      "quantity": 1,
      "scft": "No",
      "siteId": "YMNR73",
      "ssid": "SSID00126450",
      "subProject": "TWIN BEAM",
      "submissionDate": null,
      "vendorId": "40748",
      "vendorItemCode": "DEGTBSDT15",
      "vendorItemCodeDescription": "Services: De-Grow: TB dismantle: Survey, Dismantling & Installation, Packaging, Transportation to Warehouse/Site, OCI with Reports",
      "vendorName": "FORCETEL TELECOM (OPC) PRIVATE LIMITED",
      "vendorRate": 4700,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19507,
      "poValue": 1800,
      "projectGroup": "AIR-DEL-MCT0356",
      "projectId": "S-IN-AIR-DL-OPE-70001",
      "projectType": "OPERATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "2851",
      "ssid": "SSID00127086",
      "subProject": "RRU INSTALLATION",
      "submissionDate": null,
      "vendorId": "40657",
      "vendorItemCode": "MCOIRINC34",
      "vendorItemCodeDescription": "Services :MCO :Installation of 1 RRU: Installation & Commissioning with Reporting",
      "vendorName": "STAR NETWORK SOLUTIONS",
      "vendorRate": 1800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19507,
      "poValue": 900,
      "projectGroup": "AIR-DEL-MCT0356",
      "projectId": "S-IN-AIR-DL-OPE-70001",
      "projectType": "OPERATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "4858",
      "ssid": "SSID00127153",
      "subProject": "RRU INSTALLATION",
      "submissionDate": null,
      "vendorId": "40657",
      "vendorItemCode": "MCOIRINC35",
      "vendorItemCodeDescription": "Services :MCO :Installation of Additional Incremental RRU: Installation & Commissioning with Reporting",
      "vendorName": "STAR NETWORK SOLUTIONS",
      "vendorRate": 900,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19507,
      "poValue": 1800,
      "projectGroup": "AIR-DEL-MCT0356",
      "projectId": "S-IN-AIR-DL-OPE-70001",
      "projectType": "OPERATION",
      "quantity": 1,
      "scft": "No",
      "siteId": "4858",
      "ssid": "SSID00127153",
      "subProject": "RRU INSTALLATION",
      "submissionDate": null,
      "vendorId": "40657",
      "vendorItemCode": "MCOIRINC34",
      "vendorItemCodeDescription": "Services :MCO :Installation of 1 RRU: Installation & Commissioning with Reporting",
      "vendorName": "STAR NETWORK SOLUTIONS",
      "vendorRate": 1800,
      "wccEligibility": "No"
    },
    {
      "activityMonth": "Oct-2025",
      "cdh": "Yes",
      "customer": "AIRTEL",
      "emf": "No",
      "oci": "No",
      "overall_table_count": 19374,
      "pat": "No",
      "poNumber": 19490,
      "poValue": 8000,
      "projectGroup": "AIR-APTL-MCT0380",
      "projectId": "S-IN-AIR-AP-OPE-70002",
      "projectType": "OPERATION",
      "quantity": 2,
      "scft": "No",
      "siteId": "PDKL11",
      "ssid": "SSID00131602",
      "subProject": "HEIGHT INCREMENT",
      "submissionDate": null,
      "vendorId": "40823",
      "vendorItemCode": "MCOHRIHT36",
      "vendorItemCodeDescription": "Services :MCO :Increase in Height of 1 RRU: Increase in Height  with Reporting",
      "vendorName": "MS ENTERPRISES",
      "vendorRate": 4000,
      "wccEligibility": "No"
    }
  ]
} // ✅ EMPTY TABLE
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
        totalCount={checkArray(tableData)?tableData?.length:0} 
        // checkboxshow={shouldIncludeEditColumn}
        //  exportButton={[
        //     "/export/subVendor",
        //     "PartnerTeam.xlsx",
        //     ]}
        heading={"Total Count:-"}
      />
       <FileUploader
        isOpen={fileOpen}
        onTableViewSubmit={onTableViewSubmit}
        setIsOpen={setFileOpen}
        tempbtn={true}
        tempbtnlink={[
          "/template/wccUpload.xlsx",
          "WCC_File_template.xlsx",
        ]}
        head={"Upload Upgrade File"}
      />

       <Modal
              size="sm"
              modalHead={modalHead}
              children={modalBody}
              isOpen={modalOpen}
              setIsOpen={handleModalClose}
            />
    </>
  )
}

export default Wcc

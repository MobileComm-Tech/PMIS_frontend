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
const Wcc = () => {

    const dispatch = useDispatch();
      const [filters, setFilters] = useState(pagination);
      const [checkedData,setCheckData] =useState([])
      const [checkedChildData,setCheckChildData] =useState([])
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
    useEffect(() => {
      const defaultPagination = objectToQueryString({"page":1, "limit":50})
     dispatch(VendorActions.getWccSubmodule(true,defaultPagination))
  }, []);

  console.log(checkedData,checkedChildData,"___checkdateda")


 const getAllData = (itm) => {
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
  );
  console.log(modalOpen,"___modalOpen")
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
      },
  {
    name: "Customer",
    value: "customer",
    style: "min-w-[140px] max-w-[200px] text-center",
  },
  {
    name: "Project Group",
    value: "projectGroup",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
  {
    name: "Project ID",
    value: "projectId",
    style: "min-w-[140px] max-w-[200px] text-center",
  },
  {
    name: "Project Type",
    value: "projectType",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
  {
    name: "Sub Project",
    value: "subProject",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
  {
    name: "Site ID",
    value: "siteId",
    style: "min-w-[120px] max-w-[180px] text-center",
  },
  {
    name: "SSID",
    value: "ssid",
    style: "min-w-[120px] max-w-[180px] text-center",
  },
  {
    name: "Vendor Name",
    value: "vendorName",
    style: "min-w-[250px] max-w-[300px] text-center",
  },
  {
    name: "Vendor ID",
    value: "vendorId",
    style: "min-w-[140px] max-w-[200px] text-center",
  },
  {
    name: "Vendor Item Code",
    value: "vendorItemCode",
    style: "min-w-[180px] max-w-[240px] text-center",
  },
  {
    name: "Vendor Item Code Description",
    value: "vendorItemCodeDescription",
    style: "min-w-[300px] max-w-[5 00px] text-center",
  },
  {
    name: "Quantity",
    value: "quantity",
    style: "min-w-[120px] max-w-[160px] text-center",
  },
  {
    name: "Vendor Rate",
    value: "vendorRate",
    style: "min-w-[140px] max-w-[200px] text-center",
  },
  {
    name: "PO Value",
    value: "poValue",
    style: "min-w-[140px] max-w-[200px] text-center",
  },
  {
    name: "Activity Month",
    value: "activityMonth",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
  {
    name: "PO Number",
    value: "poNumber",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
  {
    name: "CDH",
    value: "cdh",
    style: "min-w-[100px] max-w-[140px] text-center",
  },
  {
    name: "PAT",
    value: "pat",
    style: "min-w-[120px] max-w-[160px] text-center",
  },
  {
    name: "OCI",
    value: "oci",
    style: "min-w-[100px] max-w-[140px] text-center",
  },
  {
    name: "SCFT",
    value: "scft",
    style: "min-w-[100px] max-w-[140px] text-center",
  },
  {
    name: "EMF",
    value: "emf",
    style: "min-w-[100px] max-w-[140px] text-center",
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

  let tableData  = useSelector((state)=>state?.vendorData?.getWccSubmodule);
  tableData = tableData?.map((itm)=>{
    return {
      ...itm,
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
        data={checkArray(tableData)?tableData:[]} // ✅ EMPTY TABLE
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

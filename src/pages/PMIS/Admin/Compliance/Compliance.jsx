import AdvancedTable from "../../../../components/AdvancedTable";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import ConditionalButton from "../../../../components/ConditionalButton";
import FileUploader from "../../../../components/FIleUploader";

import {
  getAccessType,
  objectToQueryString,
} from "../../../../utils/commonFunnction";

import { Urls } from "../../../../utils/url";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ComplianceForm from "./ComplianceForm";
import AdminActions from "../../../../store/actions/admin-actions";
import { checkArray, checkVariable } from "../../../../components/CommonObjectsAndVariables";
import CstmButton from "../../../../components/CstmButton";
import EditButton from "../../../../components/EditButton";
import DeleteButton from "../../../../components/DeleteButton";
import { ALERTS } from "../../../../store/reducers/component-reducer";
import CommonActions from "../../../../store/actions/common-actions";

// const AddApproverForm = ({ onClose }) => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     console.log("FORM DATA (UI ONLY)", data);
//     onClose();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="grid grid-cols-2 gap-x-6 gap-y-5 px-2">
//         {/* Customer Name */}
//         <div>
//           <label className="block text-white text-sm mb-1">
//             Customer Name <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full h-10 rounded-md px-3 bg-white text-black"
//             {...register("customerId", { required: true })}
//           >
//             <option value="">Select</option>
//           </select>
//         </div>

//         {/* Emp Name */}
//         {/* <div>
//           <label className="block  text-white text-sm mb-1">
//             Emp Name <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full h-10 rounded-md px-3 bg-white text-black"
//             {...register("empId", { required: true })}
//           >
//             <option value="">Select</option>
//           </select>
//         </div> */}

//         {/* Project Type */}
//         <div>
//           <label className="block text-white text-sm mb-1">
//             Project Type <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full h-10 rounded-md px-3 bg-white text-black"
//             {...register("projectTypeId", { required: true })}
//           >
//             <option value="">Select</option>
//           </select>
//         </div>

//         {/* Project Group */}
//         <div>
//           <label className="block text-white text-sm mb-1">
//             Sub Project <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full h-10 rounded-md px-3 bg-white text-black"
//             {...register("projectGroupId", { required: true })}
//           >
//             <option value="">Select</option>
//           </select>
//         </div>

//                <div>
//           <label className="block text-white text-sm mb-1">
//             Work Description <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full h-10 rounded-md px-3 bg-white text-black"
//             {...register("workDescription", { required: true })}
//           >
//             <option value="">Select</option>
//           </select>
//         </div>

//         {/* Circle */}
//         {/* <div>
//           <label className="block  text-white text-sm mb-1">
//             Circle <span className="text- red-500">*</span>
//           </label>
//           <select
//             className="w-full h-10 rounded-md px-3 bg-white text-black"
//             {...register("circleId", { required: true })}
//           >
//             <option value="">Select</option>
//           </select>
//         </div> */}

//         {/* SAT */}
//         <div>
//           <label className="block text-white text-sm mb-1">
//             SAT <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full h-10 rounded-md px-3 bg-white text-black"
//             {...register("sat")}
//           >
//             <option value="">Select</option>
//             <option value="YES">Yes</option>
//             <option value="NO">No</option>
//           </select>
//         </div>

//         {/* PAT */}
//         <div>
//           <label className="block text-white text-sm mb-1">
//             PAT <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full h-10 rounded-md px-3 bg-white text-black"
//             {...register("pat")}
//           >
//             <option value="">Select</option>
//             <option value="YES">Yes</option>
//             <option value="NO">No</option>
//           </select>
//         </div>

//         {/* OCI */}
//         <div>
//           <label className="block text-white text-sm mb-1">
//             OCI <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full h-10 rounded-md px-3 bg-white text-black"
//             {...register("oci")}
//           >
//             <option value="">Select</option>
//             <option value="YES">Yes</option>
//             <option value="NO">No</option>
//           </select>
//         </div>
//       </div>

//       <div className="mt-4 flex justify-center">
//         <Button
//           name="Submit"
//           type="submit"
//           classes="px-4 py-1.5 text-sm w-auto"
//         />
//       </div>
//     </form>
//   );
// };

const Compliance = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  const [filters,setFilters] = useState({})
  // const [modalHead, setmodalHead] = useState(<></>);
  // const [addModalOpen, setAddModalOpen] = useState(false);
  // const [modalBody, setmodalBody] = useState(null);
  const [modalHead, setmodalHead] = useState("");

  // dropdown data
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [projectTypes, setProjectTypes] = useState([]);
  const [projectGroups, setProjectGroups] = useState([]);
  const [circles, setCircles] = useState([]);

  const [fileOpen, setFileOpen] = useState(false);
  const [fileOpen2, setFileOpen2] = useState(false);
  const [fileOpen3, setFileOpen3] = useState(false);
  const [strVal, setstrVal] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentDate = new Date();
  const dt = currentDate
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

    useEffect(() => {
    dispatch(AdminActions.getWccCompiliance())
    dispatch(AdminActions.getCustomer())  
  }, []);

  const tableData = useSelector((state) => {
        let interdata = state?.adminData?.getWccCompliance || [];
        return interdata?.map((itm) => {
        let updateditm = {
            ...itm,
            edit: (
            <CstmButton
                className={"p-2"}
                child={
                    <EditButton
                    name={""}
                    onClick={() => {
                        // dispatch(GET_VENDOR_PARTNER_TABLE_DATA({ dataAll: [], reset: true }));

                        // navigate(`${routesObjects?.partnerTeamForm}/${itm.uniqueId}`);
                        setmodalBody(
                        <>
                            <ComplianceForm
                            resetting={false}
                            formValue={itm}
                            setIsOpen={setmodalOpen}
                            // isOpen={modalOpen}
                            />
                            {/* <div className='mx-3'><Button name={"Submit"} classes={""} onClick={(handleSubmit(onTableViewSubmit))} /></div> */}
                        </>
                        );
                        setmodalOpen(true);
                    }}
                    ></EditButton>

                
                }
            />
            ),

            delete: (
            <CstmButton
                child={
                <DeleteButton
                    name={""}
                    onClick={() => {
                    let msgdata = {
                        show: true,
                        icon: "warning",
                        buttons: [
                        <Button
                            classes="w-15 bg-rose-400"
                            onClick={() => {
                                dispatch(CommonActions.deleteApiCaller(`${Urls.post_Wcc_Compliance}/${itm?.uniqueId}`,()=>{
                                   dispatch(AdminActions.getWccCompiliance());
                                },itm?.uniqueId))
                               dispatch(ALERTS({ show: false }));
                            }}
                            name={"OK"}
                        />,
                        <Button
                            classes="w-auto"
                            onClick={() => {
                            dispatch(ALERTS({ show: false }));
                            }}
                            name={"Cancel"}
                        />,
                        ],
                        text: "Are you sure you want to Delete?",
                    };
                    dispatch(ALERTS(msgdata));
                    }}
                ></DeleteButton>
                }
            />
            ),

            // view: (
            // <CstmButton
            //     className={"p-5"}
            //     child={
            //     <Button
            //         name={""}
            //         onClick={() => {
            //         setmodalOpen(true);
            //         setmodalHead("Show PDF");
            //         setmodalBody(
            //             <>
            //             {/* <div className='mx-3'><Button name={"Submit"} classes={""} onClick={(handleSubmit(onTableViewSubmit))} /></div> */}
            //             </>
            //         );
            //         }}
            //     ></Button>
            //     }
            // />
            // ),
        };
        return updateditm;
        });
    });
  // console.log(tableData,"___tableDat")


  // Customer Filter Data Starts here
   const customersData = useSelector((state)=> state?.adminData?.getCustomer);

  const selectedCustomerOption = watch('customerId');
  // Customer Filter Data Starts here


  // Project Type Data Starts here
      // useEffect(()=>{
      //   console.log(checkVariable(selectedCustomerOption),"___selectedCustomerOption__")
      //   if( checkVariable(selectedCustomerOption)){
      //     dispatch(AdminActions.compliance_ProjectType(true,`customerId=${selectedCustomerOption}`)) 
      //   }
        
      // },[selectedCustomerOption])


      const projectTypeData  = useSelector((state)=>state?.adminData?.getComplianceProjectType)
      // console.log(projectTypeData,"___projectTypeData_")
    // Project Type Data Ends here

     // Sub Project FIlter Data Starts here 
   

    const subProjectData  = useSelector((state)=>state?.adminData?.getComplianceSubProject);
    
    // Sub Project Filter Data Ends here 

    // Work Description Filter starts here
     const workDescriptionData  = useSelector((state)=>state?.adminData?.getComplianceWorkDescription)
    // Work Description Filter ends here

  
  const table = {
    columns: [
      {
        name: "Customer",
        value: "customer",
        style:
          "min-w-[200px] max-w-[200px] font-extrabold text-center sticky left-0 bg-[#3e454d]",
      },
      {
        name: "Project Type",
        value: "projectType",
        style:
          "min-w-[150px] max-w-[450px] text-center sticky left-[199px] bg-[#3e454d]",
      },
      {
        name: "Sub Project",
        value: "subProject",
        style: "min-w-[250px] max-w-[450px] text-center",
      },
      {
        name: "Work Description",
        value: "workDescription",
        style: "min-w-[120px] max-w-[450px] text-center",
      },
      {
        name: "MS List",
        value: "msList",
        style: "min-w-[200px] max-w-[450px] text-center",
      },
      {
        name: "CDH",
        value: "cdh",
        style: "min-w-[100px] max-w-[450px] text-center",
      },
      {
        name: "PAT",
        value: "pat",
        style: "min-w-[100px] max-w-[450px] text-center",
      },
      {
        name: "SCFT",
        value: "scft",
        style: "min-w-[120px] max-w-[450px] text-center",
      },
      {
        name: "OCI",
        value: "oci",
        style: "min-w-[100px] max-w-[450px] text-center",
      },
      {
        name: "EMF",
        value: "emf",
        style: "min-w-[100px] max-w-[450px] text-center",
      },
      // ...(shouldIncludeEditColumn
         {
              name: "Edit",
              value: "edit",
              style: "min-w-[100px] max-w-[200px] text-center",
            },
            {
              name: "Delete",
              value: "delete",
              style: "min-w-[100px] max-w-[100px] text-center",
            },
    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },
       filter: [
      {
        label: "Customer",
        type: "select",
        name: "customerId",
        option: checkArray(customersData) ? customersData?.map((itm )=> { return {label:itm?.customerName,value:itm?.customerId}}):[],
        props: {
          onChange: (e) => {
            if (e.target.value) {
              // dispatch(
              //   FilterActions.getMyTaskSubProject(true, "", e.target.value)
                
              // );
                dispatch(AdminActions.compliance_ProjectType(true,`customerId=${e.target.value}`))
                dispatch(AdminActions.compliance_WorkDescription(true,`customerId=${e.target.value}`))
            } else {
              dispatch(
                GET_FILTER_MYTASK_SUBPROJECT({ dataAll: [], reset: true })
              );
            }
          },
        },
      },
      {
        label: "Project Type",
        type: "select",
        name: "projectType",
        option: checkArray(projectTypeData)?projectTypeData?.map((itm)=>{return {label:itm?.projectType,value:itm?.projectType}}):[],
        props: {
            onChange: (e) => {
            if (e.target.value) {
              // dispatch(
              //   FilterActions.getMyTaskSubProject(true, "", e.target.value)
                
              // );
                dispatch(AdminActions.compliance_SubProject(true,`customerId=${selectedCustomerOption}&projectType=${e.target.value}`))
            } else {
              dispatch(
                GET_FILTER_MYTASK_SUBPROJECT({ dataAll: [], reset: true })
              );
            }
          },

        },
      },
      {
        label: "Sub Project",
        type: "select",
        name: "subProjectId",
        option: checkArray(subProjectData)?subProjectData?.map((itm)=> {return {label:itm?.subProject,value:itm?.subProjectId}}):[],
        props: {
            onChange: (e) => {
            if (e.target.value) {
              // dispatch(
              //   FilterActions.getMyTaskSubProject(true, "", e.target.value)
                
              // );
                // dispatch(AdminActions.compliance_SubProject(true,`customerId=${selectedCustomerOption}&projectType=${e.target.value}`))
            } else {
              dispatch(
                GET_FILTER_MYTASK_SUBPROJECT({ dataAll: [], reset: true })
              );
            }
          },

        },
      },
      {
        label: "Work Description",
        type: "select",
        name: "workDescription",
        option: checkArray(workDescriptionData)?workDescriptionData?.map((itm)=>{return {label:itm?.workDescription,value:itm?.workDescription}}):[],
        props: {
            onChange: (e) => {
            if (e.target.value) {
              // dispatch(
              //   FilterActions.getMyTaskSubProject(true, "", e.target.value)
                
              // );
                // dispatch(AdminActions.compliance_SubProject(true,`customerId=${selectedCustomerOption}&projectType=${e.target.value}`))
            } else {
              dispatch(
                GET_FILTER_MYTASK_SUBPROJECT({ dataAll: [], reset: true })
              );
            }
          },

        },
      },
      // {
      //   label: "Site Status",
      //   type: "select",
      //   name: "siteStatus",
      //   option: [
      //     { label: "Open", value: "Open" },
      //     { label: "Close", value: "Close" },
      //     { label: "Drop", value: "Drop" },
      //     { label: "All", value: "all" },
      //   ],
      //   props: {},
      // },
      // {
      //   label: "MileStone Status",
      //   type: "select",
      //   name: "mileStoneStatus",
      //   option: [
      //     { label: "Open", value: "Open" },
      //     { label: "In Process", value: "In Process" },
      //     { label: "Submit", value: "Submit" },
      //     { label: "Approve", value: "Approve" },
      //     { label: "Submit to Airtel", value: "Submit to Airtel" },
      //     { label: "Reject", value: "Reject" },
      //     { label: "Closed", value: "Closed" },
      //     { label: "All", value: "All" },
      //   ],
      //   props: {},
      // },
    ],
  };

  /* ===========================
     FILTER SUBMIT (API OFF)
  =========================== */
  const onSubmit = (data) => {
      
    let shouldReset = data.reseter;
    delete data.reseter;

    let strVal = objectToQueryString(data);
    setstrVal(strVal);
    setFilters({
      ...filters,
      ...data,
    });
console.log("data___",data)
     dispatch(AdminActions.getWccCompiliance(true,objectToQueryString(data)));

  }

  /* ===========================
     FILE UPLOAD (UI ONLY)
  =========================== */
  const onTableViewSubmit = (data) => {
    data["fileType"] = "WCC_Compliance";
        dispatch(
        CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
            dispatch(AdminActions.getWccCompiliance())
            setFileOpen(false);
            resetting("");
            
        })
        );
  };
   const onTableViewSubmit2 = (data) => {
      
    };
  // const onTableViewSubmit3 = () => {
      
  // };

  /* ===========================
     NO API ON LOAD
  =========================== */


  return (
    <>
      <AdvancedTable
        headerButton={
          <div className="flex">
            <ConditionalButton
              showType={getAccessType("Add New(ManageEmployee)")}
              classes="w-auto mr-1"
              // onClick={() => navigate("/empdetails")}
              onClick={() => {
                setmodalHead("Add Compliance");
                setmodalBody(
                  <ComplianceForm modalBody={modalBody} setIsOpen={setmodalOpen} onClose={() => setmodalOpen(false)}  />
                );
                setmodalOpen(true);
              }}
              name={"Add New"}
            />
            <ConditionalButton
              showType={getAccessType("Upload(ManageEmployee)")}
              name={"Upload File"}
              classes="w-auto mr-1"
              onClick={() => setFileOpen(true)}
            />
            <ConditionalButton
              showType={getAccessType("Upgrade(ManageEmployee)")}
              name={"Export"}
              classes="w-auto mr-1"
              onClick={() => dispatch(
                   CommonActions.commondownloadpost(
                      `/export/wccCompliance?${objectToQueryString(filters)}`,
                      // {exportTableName:"ptwBackupData"},
                      "WCC_Compliance.xlsx",
                      "GET",
                     
                    )
               )}
            />
           
          </div>
        }
        table={table}
        
        filterAfter={onSubmit}
        tableName={"ManageEmployee"}
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
        size={"sm"}
        modalHead={modalHead}
        children={modalBody}
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
      />

      {/* <FileUploader
        isOpen={fileOpen}
        onTableViewSubmit={onTableViewSubmit}
        setIsOpen={setFileOpen}
        tempbtn={true}
        tempbtnlink={["/template/ManageEmployee.xlsx", "ManageEmployee.xlsx"]}
        head={"Upload File"}
      /> */}

      {/* <FileUploader
        isOpen={fileOpen2}
        onTableViewSubmit={onTableViewSubmit2}
        setIsOpen={setFileOpen2}
        tempbtn={true}
        tempbtnlink={["/template/ManageEmployee.xlsx", "ManageEmployee.xlsx"]}
        head={"Upload Upgrade File"}
      /> */}

      <FileUploader
        isOpen={fileOpen}
        onTableViewSubmit={onTableViewSubmit}
        setIsOpen={setFileOpen}
        tempbtn={true}
        tempbtnlink={[
          `/template/WCC_Compliance.xlsx`,
          "WCC_Compliance_template.xlsx",
        ]}
        head={"Upload Upgrade File"}
      />
    </>
  );
};

export default Compliance;

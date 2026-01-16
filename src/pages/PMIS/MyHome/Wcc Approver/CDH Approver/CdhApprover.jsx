import React, { useEffect, useState } from 'react'
import AdvancedTable from '../../../../../components/AdvancedTable';
import { checkArray } from '../../../../../components/CommonObjectsAndVariables';
import { useDispatch, useSelector } from 'react-redux';
import CommonActions from '../../../../../store/actions/common-actions';
import FormssActions from '../../../../../store/actions/formss-actions';
import ConditionalButton from '../../../../../components/ConditionalButton';
import { getAccessType } from '../../../../../utils/commonFunnction';
import FileUploader from '../../../../../components/FIleUploader';
import { Urls } from '../../../../../utils/url';
import MyHomeActions from '../../../../../store/actions/myHome-actions';

const CdhApprover= () => {
const dispatch = useDispatch();
const [fileOpen, setFileOpen] = useState(false);


    // useEffect(()=>{
    //     dispatch(VendorActions.getWccSubmodule());
    // },[])



      const table = {
    
     columns : [
  {
    name: "Customer",
    value: "customer",
    style: "min-w-[120px] max-w-[160px]",
  },
  {
    name: "Project Group",
    value: "projectGroup",
    style: "min-w-[140px] max-w-[180px] text-center",
  },
  {
    name: "Project ID",
    value: "projectId",
    style: "min-w-[180px] max-w-[320px] text-center",
  },
  {
    name: "Project Type",
    value: "projectType",
    style: "min-w-[140px] max-w-[180px] text-center",
  },
  {
    name: "Sub Project",
    value: "subProject",
    style: "min-w-[140px] max-w-[180px] text-center",
  },
  {
    name: "Site ID",
    value: "siteId",
    style: "min-w-[120px] max-w-[160px] text-center",
  },
  {
    name: "SSID",
    value: "ssid",
    style: "min-w-[80px] max-w-[120px] text-center",
  },
  {
    name: "Vendor Name",
    value: "vendorName",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
  {
    name: "Vendor ID",
    value: "vendorId",
    style: "min-w-[120px] max-w-[160px] text-center",
  },
  {
    name: "Vendor Item Code",
    value: "vendorItemCode",
    style: "min-w-[160px] max-w-[220px] text-center",
  },
  {
    name: "Vendor Item Code Description",
    value: "vendorItemCodeDescription",
    style: "min-w-[220px] max-w-[300px] text-center",
  },
  {
    name: "Quantity",
    value: "quantity",
    style: "min-w-[100px] max-w-[120px] text-center",
  },
  {
    name: "Vendor Rate",
    value: "vendorRate",
    style: "min-w-[120px] max-w-[140px] text-center",
  },
  {
    name: "PO Value",
    value: "poValue",
    style: "min-w-[120px] max-w-[160px] text-center",
  },
  {
    name: "Activity Month",
    value: "activityMonth",
    style: "min-w-[140px] max-w-[180px] text-center",
  },
  {
    name: "PO Number",
    value: "poNumber",
    style: "min-w-[140px] max-w-[180px] text-center",
  },
//   {
//     name: "Action",
//     value: "action",
//     style: "min-w-[100px] max-w-[120px] text-center",
//   },
]

  };


//   Table Data starts here

//   const tableData  = useSelector((state)=>state?.vendorData?.getWccSubmodule);
//   console.log(tableData,"___tableData")
//   Table Data ends here


  const onTableViewSubmit = (data) => {
    data["fileType"] = "cdhUpload";
        dispatch(
        CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
            dispatch(FormssActions.getWccCdh())
            setFileOpen(false);
            resetting("");
            
        })
        );
  };



//   Table Data starts here
useEffect(()=>{
    dispatch(MyHomeActions.getMyHome());
},[])

const tableData  = useSelector((state)=>state?.myHomeData?.getWccCdhApprover)
//   Table Data Ends here





  return (
   <>
        <AdvancedTable
         headerButton={
          <div className="flex">
            {/* <ConditionalButton
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
            /> */}
            {/* <ConditionalButton
              showType={getAccessType("Upload(ManageEmployee)")}
              name={"Upload File"}
              classes="w-auto mr-1"
              onClick={() => setFileOpen(true)}
            /> */}
            {/* <ConditionalButton
              showType={getAccessType("Upgrade(ManageEmployee)")}
              name={"Export"}
              classes="w-auto mr-1"
              onClick={() => dispatch(
                   CommonActions.commondownloadpost(
                      "/export/wccCompliance",
                      // {exportTableName:"ptwBackupData"},
                      "WCC_Compliance.xlsx",
                      "GET",
                     
                    )
               )}
            /> */}
           
          </div>
        }
        // headerButton={
        //   <div className="flex">
        //     <ConditionalButton
        //       showType={getAccessType("Add New(ManageEmployee)")}
        //       classes="w-auto mr-1"
        //       // onClick={() => navigate("/empdetails")}
        //       onClick={() => {
        //         setmodalHead("Add Compliance");
        //         setmodalBody(
        //           <ComplianceForm modalBody={modalBody} setIsOpen={setmodalOpen} onClose={() => setmodalOpen(false)}  />
        //         );
        //         setmodalOpen(true);
        //       }}
        //       name={"Add New"}
        //     />
        //     <ConditionalButton
        //       showType={getAccessType("Upload(ManageEmployee)")}
        //       name={"Upload File"}
        //       classes="w-auto mr-1"
        //       onClick={() => setFileOpen(true)}
        //     />
        //     <ConditionalButton
        //       showType={getAccessType("Upgrade(ManageEmployee)")}
        //       name={"Export"}
        //       classes="w-auto mr-1"
        //       onClick={() => dispatch(
        //            CommonActions.commondownloadpost(
        //               "/export/wccCompliance",
        //               // {exportTableName:"ptwBackupData"},
        //               "WCC_Compliance.xlsx",
        //               "GET",
                     
        //             )
        //        )}
        //     />
           
        //   </div>
        // }
        table={table}
        
        // filterAfter={onSubmit}
        tableName={"ManageEmployee"}
        // handleSubmit={handleSubmit}
        data={checkArray(tableData)?tableData:[]} // ✅ EMPTY TABLE
        // errors={errors}
        // register={register}
        // setValue={setValue}
        // getValues={getValues}
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
          "/template/cdhUpload.xlsx",
          "CDH_File_template.xlsx",
        ]}
        head={"Upload Upgrade File"}
      />
    </>
  )
}

export default CdhApprover

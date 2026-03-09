import React, { useEffect, useState } from 'react';
import AdvancedTable from '../../../../../components/AdvancedTable';
import { checkArray } from '../../../../../components/CommonObjectsAndVariables';
import { useDispatch, useSelector } from 'react-redux';
import CommonActions from '../../../../../store/actions/common-actions';
import FormssActions from '../../../../../store/actions/formss-actions';
import ConditionalButton from '../../../../../components/ConditionalButton';
import {
  getAccessType,
  objectToQueryString,
} from '../../../../../utils/commonFunnction';
import FileUploader from '../../../../../components/FIleUploader';
import { Urls } from '../../../../../utils/url';

const CDH = () => {
  const dispatch = useDispatch();
  const [fileOpen, setFileOpen] = useState(false);

  // useEffect(()=>{
  //     dispatch(VendorActions.getWccSubmodule());
  // },[])

  const table = {
    columns: [
      {
        name: 'SSID',
        value: 'ssid',
        style: 'min-w-[80px] max-w-[120px] text-center',
      },
      {
        name: 'Vendor Item Code',
        value: 'itemCode',
        style: 'min-w-[140px] max-w-[200px] text-center',
      },
      {
        name: 'Compliance',
        value: 'compliance',
        style: 'min-w-[140px] max-w-[200px] text-center',
      },
      {
        name: 'Status',
        value: 'status',
        style: 'min-w-[160px] max-w-[220px] text-center',
      },
    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },

    filter: [
      //  {
      //     label: "Site ID",
      //     type: "select",
      //     name: "siteId",
      //     option:siteList,
      //     props: {
      //     }
      // },
    ],
  };

  //   Table Data starts here

  //   const tableData  = useSelector((state)=>state?.vendorData?.getWccSubmodule);
  //   console.log(tableData,"___tableData")
  //   Table Data ends here

  const onTableViewSubmit = (data) => {
    data['fileType'] = 'cdhUpload';
    dispatch(
      CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
        dispatch(FormssActions.getWccCdh());
        setFileOpen(false);
        resetting('');
      }),
    );
  };

  //   Table Data starts here
  useEffect(() => {
    const defaultPagination = objectToQueryString({ page: 1, limit: 50 });
    dispatch(FormssActions.getWccCdh(true, defaultPagination));
  }, []);

  const tableData = useSelector((state) => state?.formssData?.getWccCdh);
  //   Table Data Ends here

  let dbConfigTotalCount = useSelector((state) => {
    let interdata = state?.formssData?.getWccCdh;
    if (interdata.length > 0) {
      return interdata[0]['overall_table_count'];
    } else {
      return 0;
    }
  });

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
            <ConditionalButton
              showType={getAccessType('Upload(ManageEmployee)')}
              name={'Upload File'}
              classes="w-auto mr-1"
              onClick={() => setFileOpen(true)}
            />
            <ConditionalButton
              showType={getAccessType('Upgrade(ManageEmployee)')}
              name={'Export'}
              classes="w-auto mr-1"
              onClick={() =>
                dispatch(
                  CommonActions.commondownloadpost(
                    '/wcc/export/cdh',
                    // {exportTableName:"ptwBackupData"},
                    'Export_CDH_Master_Data.xlsx',
                    'GET',
                  ),
                )
              }
            />
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
        tableName={'ManageEmployee'}
        // handleSubmit={handleSubmit}
        data={checkArray(tableData) ? tableData : []} // ✅ EMPTY TABLE
        // errors={errors}
        // register={register}
        // setValue={setValue}
        // getValues={getValues}
        // totalCount={checkArray(tableData)?tableData?.length:0}
        totalCount={dbConfigTotalCount}
        // checkboxshow={shouldIncludeEditColumn}
        //  exportButton={[
        //     "/export/subVendor",
        //     "PartnerTeam.xlsx",
        //     ]}
        heading={'Total Count:-'}
      />

      <FileUploader
        isOpen={fileOpen}
        onTableViewSubmit={onTableViewSubmit}
        setIsOpen={setFileOpen}
        tempbtn={true}
        tempbtnlink={['/template/cdhUpload.xlsx', 'CDH_File_template.xlsx']}
        head={'Upload Upgrade File'}
      />
    </>
  );
};

export default CDH;
//OLD
// import React, { useEffect, useState } from 'react'
// import AdvancedTable from '../../../../../components/AdvancedTable';
// import { checkArray } from '../../../../../components/CommonObjectsAndVariables';
// import { useDispatch, useSelector } from 'react-redux';
// import CommonActions from '../../../../../store/actions/common-actions';
// import FormssActions from '../../../../../store/actions/formss-actions';
// import ConditionalButton from '../../../../../components/ConditionalButton';
// import { getAccessType } from '../../../../../utils/commonFunnction';
// import FileUploader from '../../../../../components/FIleUploader';
// import { Urls } from '../../../../../utils/url';

// const CDH= () => {
// const dispatch = useDispatch();
// const [fileOpen, setFileOpen] = useState(false);

//     // useEffect(()=>{
//     //     dispatch(VendorActions.getWccSubmodule());
//     // },[])

//       const table = {

//      columns : [
//   {
//     name: "SSID",
//     value: "ssid",
//     style: "min-w-[80px] max-w-[120px] text-center",
//   },
//    {
//     name: "Vendor Item Code",
//     value: "itemCode",
//     style: "min-w-[140px] max-w-[200px] text-center",
//   },
//   {
//     name: "Compliance",
//     value: "compliance",
//     style: "min-w-[140px] max-w-[200px] text-center",
//   },
//   {
//     name: "Status",
//     value: "status",
//     style: "min-w-[160px] max-w-[220px] text-center",
//   },
// ],
//     properties: {
//       rpp: [10, 20, 50, 100],
//     },

//     filter: [

//             //  {
//             //     label: "Site ID",
//             //     type: "select",
//             //     name: "siteId",
//             //     option:siteList,
//             //     props: {
//             //     }
//             // },

//     ],
//   };

// //   Table Data starts here

// //   const tableData  = useSelector((state)=>state?.vendorData?.getWccSubmodule);
// //   console.log(tableData,"___tableData")
// //   Table Data ends here

//   const onTableViewSubmit = (data) => {
//     data["fileType"] = "cdhUpload";
//         dispatch(
//         CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
//             dispatch(FormssActions.getWccCdh())
//             setFileOpen(false);
//             resetting("");

//         })
//         );
//   };

// //   Table Data starts here
// useEffect(()=>{
//     dispatch(FormssActions.getWccCdh());
// },[])

// const tableData  = useSelector((state)=>state?.formssData?.getWccCdh)
// //   Table Data Ends here

//   return (
//    <>
//         <AdvancedTable
//          headerButton={
//           <div className="flex">
//             {/* <ConditionalButton
//               showType={getAccessType("Add New(ManageEmployee)")}
//               classes="w-auto mr-1"
//               // onClick={() => navigate("/empdetails")}
//               onClick={() => {
//                 setmodalHead("Add Compliance");
//                 setmodalBody(
//                   <ComplianceForm modalBody={modalBody} setIsOpen={setmodalOpen} onClose={() => setmodalOpen(false)}  />
//                 );
//                 setmodalOpen(true);
//               }}
//               name={"Add New"}
//             /> */}
//             <ConditionalButton
//               showType={getAccessType("Upload(ManageEmployee)")}
//               name={"Upload File"}
//               classes="w-auto mr-1"
//               onClick={() => setFileOpen(true)}
//             />
//             {/* <ConditionalButton
//               showType={getAccessType("Upgrade(ManageEmployee)")}
//               name={"Export"}
//               classes="w-auto mr-1"
//               onClick={() => dispatch(
//                    CommonActions.commondownloadpost(
//                       "/export/wccCompliance",
//                       // {exportTableName:"ptwBackupData"},
//                       "WCC_Compliance.xlsx",
//                       "GET",

//                     )
//                )}
//             /> */}

//           </div>
//         }
//         // headerButton={
//         //   <div className="flex">
//         //     <ConditionalButton
//         //       showType={getAccessType("Add New(ManageEmployee)")}
//         //       classes="w-auto mr-1"
//         //       // onClick={() => navigate("/empdetails")}
//         //       onClick={() => {
//         //         setmodalHead("Add Compliance");
//         //         setmodalBody(
//         //           <ComplianceForm modalBody={modalBody} setIsOpen={setmodalOpen} onClose={() => setmodalOpen(false)}  />
//         //         );
//         //         setmodalOpen(true);
//         //       }}
//         //       name={"Add New"}
//         //     />
//         //     <ConditionalButton
//         //       showType={getAccessType("Upload(ManageEmployee)")}
//         //       name={"Upload File"}
//         //       classes="w-auto mr-1"
//         //       onClick={() => setFileOpen(true)}
//         //     />
//         //     <ConditionalButton
//         //       showType={getAccessType("Upgrade(ManageEmployee)")}
//         //       name={"Export"}
//         //       classes="w-auto mr-1"
//         //       onClick={() => dispatch(
//         //            CommonActions.commondownloadpost(
//         //               "/export/wccCompliance",
//         //               // {exportTableName:"ptwBackupData"},
//         //               "WCC_Compliance.xlsx",
//         //               "GET",

//         //             )
//         //        )}
//         //     />

//         //   </div>
//         // }
//         table={table}

//         // filterAfter={onSubmit}
//         tableName={"ManageEmployee"}
//         // handleSubmit={handleSubmit}
//         data={checkArray(tableData)?tableData:[]} // ✅ EMPTY TABLE
//         // errors={errors}
//         // register={register}
//         // setValue={setValue}
//         // getValues={getValues}
//         // totalCount={checkArray(tableData)?tableData?.length:0}
//         // checkboxshow={shouldIncludeEditColumn}
//         //  exportButton={[
//         //     "/export/subVendor",
//         //     "PartnerTeam.xlsx",
//         //     ]}
//         heading={"Total Count:-"}
//       />

//       <FileUploader
//         isOpen={fileOpen}
//         onTableViewSubmit={onTableViewSubmit}
//         setIsOpen={setFileOpen}
//         tempbtn={true}
//         tempbtnlink={[
//           "/template/cdhUpload.xlsx",
//           "CDH_File_template.xlsx",
//         ]}
//         head={"Upload Upgrade File"}
//       />
//     </>
//   )
// }

// export default CDH

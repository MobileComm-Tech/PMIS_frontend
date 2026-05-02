import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import AdvancedTable from "../../../components/AdvancedTable";
import PTWActions from "../../../store/actions/ptw-actions";
import CommonActions from "../../../store/actions/common-actions";
import Button from "../../../components/Button";
import { objectToQueryString } from "../../../utils/commonFunnction";
import AdminActions from "../../../store/actions/admin-actions";
import SearchBarView from "../../../components/SearchBarView";
import DateRangePicking from "../../../components/FormElements/DateRangePicking";
import { UilSearch } from "@iconscout/react-unicons";
import NewMultiSelects from "../../../components/NewMultiSelect";
const PTWLogBackup = () => {
  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [finalQuery, setFinalQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [requesterTerm, setRequesterTerm] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const dataAll = useSelector((state) => state?.ptwData?.getPtwLogBackup || []);
  const PTW_STATUS_MAP = {
    Active: ["Submitted", "L1-Approved", "L2-Approved"],
    Rejected: ["L1-Rejected", "L2-Rejected"],
    Closed: ["Closed", "Auto Closed"],
  };
  // console.log(dataAll, "csddsffffdff");
  const [strValFil, setstrVal] = useState("");
  const dateRef = useRef(null);
  const ptwBackupData = useSelector(
    (state) => state?.ptwData?.getPtwLogBackup || [],
  );
  const extractRowData = (rowData) => {
    const extractedData = {};

    Object.keys(tableData).forEach((key) => {
      if (rowData.hasOwnProperty(key)) {
        extractedData[key] = rowData[key];
      }
    });

    extractedData.downloadTimestamp = new Date().toISOString();
    extractedData.downloadType = "";

    return extractedData;
  };

  useEffect(() => {
    const defaultPagination = objectToQueryString({ page: 1, limit: 50 });
    dispatch(AdminActions.getManageSite());
    fetchPTWLogBackupData(true, defaultPagination);
  }, []);

  let siteList = useSelector((state) => {
    return state?.adminData?.getManageSite?.map((itm) => {
      return {
        label: itm?.siteId,
        value: itm?.siteId,
      };
    });
  });

//   const buildStatusQuery = (selected) => {
//   if (!selected) return "";

//   const values = PTW_STATUS_MAP[selected] || [];
//   return values.length ? `status=${values.join(",")}` : "";
// };

  const handleExcelDownload = (rowData) => {
    // console.log("Downloading Excel for:", rowData);

    const extractedData = extractRowData(rowData);
    const exportType = "EXCEL";

    const queryParams = new URLSearchParams();

    queryParams.append("exportType", exportType);
    queryParams.append("uniqueId", rowData?._id);
    queryParams.append("ptwNumber", rowData?.ptwNumber);
    queryParams.append("l1Approver", "l1Approver");

    // Object.keys(tableData).forEach((key) => {
    //   const value = extractedData[key] || rowData[key] || "";
    //   if (value !== "") {
    //     queryParams.append(key, value);
    //   }
    // });

    const endpoint = `/ptw_export?${queryParams?.toString()}`;

    // console.log("Excel Download endpoint:", endpoint);
    // console.log("Row data being sent:", extractedData);

    dispatch(
      CommonActions.commondownloadpost(
        endpoint,
        `PTW_${extractedData.ptwNumber || rowData.ptwNumber || Date.now()
        }.xlsx`,
        "POST",
        {
          rowData,
          columns: table["columns"],
        },
      ),
    );
  };

  const handlePdfDownload = (rowData) => {
    // console.log("Downloading PDF for:", rowData);

    const extractedData = extractRowData(rowData);
    const exportType = "PDF";

    const queryParams = new URLSearchParams();
    queryParams.append("exportType", exportType);
    queryParams.append("uniqueId", rowData?._id);
    queryParams.append("ptwNumber", rowData?.ptwNumber);
    queryParams.append("l1Approver", "l1Approver");

    // Object.keys(tableData).forEach(key => {
    //   const value = extractedData[key] || rowData[key] || "";
    //   if (value !== "") {
    //     queryParams.append(key, value);
    //   }
    // });

    const endpoint = `/ptw_export?${queryParams.toString()}`;

    // console.log("PDF Download endpoint:", endpoint);
    // console.log("Row data being sent:", extractedData);

    dispatch(
      CommonActions.commondownloadpost(
        endpoint,
        `PTW_${extractedData.ptwNumber || rowData.ptwNumber || Date.now()}.pdf`,
        "POST",
        { rowData, columns: table["columns"] },
      ),
    );
  };

  // const buildStatusQuery = (selected) => {
  //   if (!selected?.length) return "";

  //   let values = [];

  //   selected.forEach((status) => {
  //     values = [...values, ...(PTW_STATUS_MAP[status] || [])];
  //   });

  //   return values.length ? values.join(",") : "";
  // };


  const tableData = ptwBackupData?.map((itm) => {
    return {
      ...itm,
      ptwFormStatus: (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => handlePdfDownload(itm)}
            className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600 transition flex items-center gap-1"
            title="Download PDF"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            PDF
          </button>
          <button
            onClick={() => handleExcelDownload(itm)}
            className="bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600 transition flex items-center gap-1"
            title="Download Excel"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12.5,13L9.5,17H11.5L13.25,15L15,17H17L14,13L17,9H15L13.25,11L11.5,9H9.5L12.5,13Z" />
            </svg>
            Excel
          </button>
        </div>
      ),
    };
  });

  // console.log(ptwBackupData, "___ptwBackupData");

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const fetchPTWLogBackupData = (reset = true, additionalArgs = "") => {
    dispatch(PTWActions.getPtwLogBackup(reset, additionalArgs));
  };

  useEffect(() => {
    const defaultPagination = objectToQueryString({ page: 1, limit: 50 });
    fetchPTWLogBackupData(true, defaultPagination);
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const args = `page=${newPage}&limit=${rowsPerPage}`;
    dispatch(PTWActions.getPtwLogBackup(false, args));
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
    const args = `page=1&limit=${newRowsPerPage}`;
    dispatch(PTWActions.getPtwLogBackup(true, args));
  };

  const debounceRef = React.useRef(null);

  const debounceSearch = (query) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      dispatch(PTWActions.getPtwLogBackup(true, query));
    }, 700);
  };
  const table = {
    columns: [
      {
        name: "Site Id",
        value: "siteId",
        style: "text-center min-w-[150px]",
      },
      {
        name: "Milestone",
        value: "Milestone",
        style: "text-center min-w-[150px]",
      },
      {
        name: "Project ID",
        value: "projectID",
        style: "text-center min-w-[150px]",
      },
      {
        name: "Type of Work",
        value: "TYPE OF WORK",
        style: "text-center min-w-[150px]",
      },
      {
        name: "PTW Number",
        value: "ptwNumber",
        style: "text-center min-w-[150px]",
      },
      {
        name: "PTW Submission Date",
        value: "submissionDate",
        style: "text-center min-w-[150px]",
      },
      {
        name: "Submitted by Name",
        value: "createdBy",
        style: "text-center min-w-[150px]",
      },
      {
        name: "Submitted by Mobile Number",
        value: "SUBMITTED_BY_MOBILE_NUMBER",
        style: "text-center min-w-[150px]",
      },
      {
        name: "Status",
        value: "status",
        style: "text-center min-w-[150px]",
      },
      {
        name: "1st Level Manager Name",
        value: "1ST_LEVEL_MANAGER_NAME",
        style: "text-center min-w-[150px]",
      },
      {
        name: "1st Level Manager Mobile Number",
        value: "1ST_LEVEL_MANAGER_MOBILE_NUMBER",
        style: "text-center min-w-[150px]",
      },
      {
        name: "Approved by 2nd Level on",
        value: "APPROVED_BY_2ND_LEVEL_ON",
        style: "text-center min-w-[150px]",
      },
      {
        name: "2nd Level Manager Name",
        value: "2ND_LEVEL_MANAGER_NAME",
        style: "text-center min-w-[150px]",
      },
      // {
      //   name: "PTW Requester",
      //   value: "createdBy",
      //   style: "text-center min-w-[150px]",
      // },


      // {
      //   name: "SSID",
      //   value: "ssId",
      //   style: "text-center min-w-[150px]",
      // },
      // {
      //   name: "Unique ID",
      //   value: "uniqueId",
      //   style: "text-center min-w-[150px]",
      // },
      // {
      //   name: "SR Number",
      //   value: "SRNumber",
      //   style: "text-center min-w-[150px]",
      // },
      // {
      //   name: "Project Group",
      //   value: "projectGroupName",
      //   style: "text-center min-w-[150px]",
      // },

      // {
      //   name: "Project Type",
      //   value: "projectType",
      //   style: "text-center min-w-[150px]",
      // },
      // {
      //   name: "Sub Project",
      //   value: "subProject",
      //   style: "text-center min-w-[150px]",
      // },
      // {
      //   name: "Activity",
      //   value: "activity",
      //   style: "text-center min-w-[150px]",
      // },

      // {
      //   name: "Approval/Rejection Date",
      //   value: "approvedOrRejectionDate",
      //   style: "text-center min-w-[150px]",
      // },
      // {
      //   name: "Completion Date",
      //   value: "complitionDate",
      //   style: "text-center min-w-[150px]",
      // },
      {
        name: "PTW Form & Checklist Attachment",
        value: "ptwFormStatus",
        style: "text-center min-w-[180px]",
        render: (value, rowData) => {
          // console.log("Rendering buttons for row:", rowData);
          return (
            <div className="flex justify-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePdfDownload(rowData);
                }}
                className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600 transition flex items-center gap-1"
                title="Download PDF"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                PDF
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleExcelDownload(rowData);
                }}
                className="bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600 transition flex items-center gap-1"
                title="Download Excel"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12.5,13L9.5,17H11.5L13.25,15L15,17H17L14,13L17,9H15L13.25,11L11.5,9H9.5L12.5,13Z" />
                </svg>
                Excel
              </button>
            </div>
          );
        },
      },

    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },

    filter: [
      {
        label: "Site ID",
        type: "text",
        name: "siteId",
        //option: siteList,
        props: {},
      },
      // {
      //   label: "PTW Number",
      //   type: "text",
      //   name: "ptwNumber",
      //   props: {
      //     placeholder: "Search PTW Number",
      //     onChange: (e) => {
      //       const value = e.target.value;

      //       const query = value
      //         ? `ptwNumber=${value}&${strValFil || ""}`
      //         : strValFil;

      //       debounceSearch(query);
      //     },
      //   },
      // },
      {
        label: "Project ID",
        type: "text",
        name: "projectID",
        props: {},
      },
      {
        label: "PTW Status",
        type: "select",
        name: "ptwStatus",
        option: [
          { label: "Active", value: "Active" },
          { label: "Rejected", value: "Rejected" },
          { label: "Closed", value: "Closed" },
        ],
        props: {}
      }
    ],
  };
  useEffect(() => {
    const input = dateRef.current?.querySelector("input");

    if (!input) return;

    const handleInput = (e) => {
      if (!e.target.value) {
        setStartDate(null);
        setEndDate(null);

        const resetQuery = `page=1&limit=${rowsPerPage}`;
        dispatch(PTWActions.getPtwLogBackup(true, resetQuery));
        setFinalQuery(resetQuery);
        setResetKey((prev) => prev + 1);
      }
    };

    input.addEventListener("input", handleInput);

    return () => {
      input.removeEventListener("input", handleInput);
    };
  }, [rowsPerPage, strValFil]);
  // const onSubmit = (data) => {
  //   // console.log("Filter form submitted:", data);

  //   // const queryParams = new URLSearchParams();
  //   // Object.keys(data).forEach((key) => {
  //   //   if (data[key] && data[key] !== "") {
  //   //     queryParams.append(key, data[key]);
  //   //   }
  //   // });

  //   // const filterArgs = queryParams.toString();
  //   // const args = `page=1&limit=${rowsPerPage}${
  //   //   filterArgs ? "&" + filterArgs : ""
  //   // }`;

  //   // setCurrentPage(1);
  //   let value = data.reseter;
  //   delete data.reseter;
  //   // const strVal = objectToQueryString(data);
  //   // const strVal = objectToQueryString(data);
  //   // if(strVal?.length>0){
  //   //   strVal = strVal+"&"+objectToQueryString({ ApproverType: "L2-Approver" })
  //   // }else{
  //   //   strVal =objectToQueryString({ ApproverType: "L2-Approver" })
  //   // }
  //   // console.log(strVal,"___strVal__")
  //   const statusQuery = buildStatusQuery(selectedStatus);

  //   let strVal = objectToQueryString(data);

  //   if (statusQuery) {
  //     strVal += `&${statusQuery}`;
  //   }
  //   // const strVal = objectToQueryString(data);
  //   setstrVal(strVal);
  //   setFinalQuery(strVal);
  //   dispatch(PTWActions.getPtwLogBackup(true, strVal));
  // };


 const onSubmit = (data) => {
  let strVal = objectToQueryString(data);

  const selected = data.ptwStatus;

  if (selected) {
    const values =
      PTW_STATUS_MAP[selected]?.length > 0
        ? PTW_STATUS_MAP[selected]
        : [];

    if (values.length) {
      strVal += `&status=${values.join(",")}`;
    }
  }

  setstrVal(strVal);
  setFinalQuery(strVal);

  dispatch(PTWActions.getPtwLogBackup(true, strVal));
};
  useEffect(() => {
    if (dataAll && dataAll.length > 0) {
      // console.log("PTW Data received:", dataAll);
      // console.log("Total items:", dataAll.length);
      // console.log("First item structure:", dataAll[0]);
      // console.log("Overall table count:", dataAll[0]?.overall_table_count);
    }
  }, [dataAll]);

  return (
    <>
      <AdvancedTable
        searchView={
          <>
            <SearchBarView
              onblur={() => { }}
              onchange={(e) => {
                const value = e.target.value;
                setSearchTerm(value);

                if (debounceRef.current) clearTimeout(debounceRef.current);

                debounceRef.current = setTimeout(() => {
                  let baseParams = {
                    page: 1,
                    limit: rowsPerPage,
                  };

                  if (value) {
                    baseParams.ptwNumber = value;
                  }

                  let query = objectToQueryString(baseParams);

                  // if (statusQuery) {
                  //   query += `&${statusQuery.replace("status=", "status=")}`;
                  // }

                  if (strValFil) {
                    query += `&${strValFil}`;
                  }
                  setFinalQuery(query);
                  dispatch(PTWActions.getPtwLogBackup(true, query));
                }, 700);
              }}
              placeHolder={"PTW Number"}
            />
            <SearchBarView
              onblur={() => { }}
              onchange={(e) => {
                const value = e.target.value;

                if (debounceRef.current) {
                  clearTimeout(debounceRef.current);
                }

                if (!value) {
                  const resetQuery = `page=1&limit=${rowsPerPage}`;
                  dispatch(PTWActions.getPtwLogBackup(true, resetQuery));
                  return;
                }

                const query =
                  `page=1&limit=${rowsPerPage}&createdBy=${value}&` +
                  (strValFil || "");
                setFinalQuery(query);
                debounceSearch(query);
              }}
              placeHolder={"PTW Requester"}
            />

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <div ref={dateRef}>
                <DateRangePicking
                  key={resetKey}

                  itm={{
                    name: "dateRange",
                    formatop: "YYYY-MM-DD",
                    onChange: ({ start, end }) => {
                      setStartDate(start);
                      setEndDate(end);
                    },
                  }}
                />
              </div>

              <Button
                classes="flex h-fit"
                name=""
                icon={<UilSearch className="w-5 m-2 h-5" />}
                onClick={() => {
                  if (!startDate || !endDate) return;

                  const fromDate = new Date(startDate)
                    .toISOString()
                    .split("T")[0];
                  const toDate = new Date(endDate).toISOString().split("T")[0];

                  const query =
                    `page=1&limit=${rowsPerPage}&start=${fromDate}&end=${toDate}` +
                    (strValFil ? `&${strValFil}` : "");
                  setFinalQuery(query);
                  dispatch(PTWActions.getPtwLogBackup(true, query));
                }}
              />
            </div>
            {/* <NewMultiSelects
              label="PTW Status"
              name="ptwStatus"
              placeholder="PTW Status"
              option={[
                { label: "Active", value: "Active" },
                { label: "Rejected", value: "Rejected" },
                { label: "Closed", value: "Closed" },
              ]}
              value={selectedStatus}
              cb={(selected) => {
                setSelectedStatus(selected);

                let query = `page=1&limit=${rowsPerPage}`;

                if (selected.length) {
                  const values = selected.flatMap(
                    (s) => PTW_STATUS_MAP[s.value] || []
                  );

                  // IMPORTANT: no encoding
                  query += `&status=${values.join(",")}`;
                }

                if (strValFil) {
                  query += `&${strValFil}`;
                }

                setFinalQuery(query);
                dispatch(PTWActions.getPtwLogBackup(true, query));
              }}
            /> */}
          </>
        }
        headerButton={
          <div className="flex gap-2">
            <Button
              name={"Export"}
              classes="w-auto bg-teal-500 hover:bg-teal-600"
              onClick={() => {
                dispatch(
                  CommonActions.commondownloadpost(
                    "/ptwTableExport?exportTableName=ptwLogBackup&" +
                    finalQuery,
                    // {exportTableName:"ptwBackupData"},
                    "New_file.xlsx",
                    "GET",
                  ),
                );
              }}
            />
          </div>
        }
        table={table}
        filterAfter={onSubmit}
        tableName="PTW Log Backup Table"
        TableHeight="h-[68vh]"
        handleSubmit={handleSubmit}
        data={tableData || []}
        errors={errors || {}}
        register={register}
        setValue={setValue}
        getValues={getValues}
        totalCount={tableData[0]?.overall_table_count}
        heading="Total Count :-"
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </>
  );
};

export default PTWLogBackup;

// /////////////////////////////////////////////////////////////// OLD CODE
// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import AdvancedTable from "../../../components/AdvancedTable";
// import PTWActions from "../../../store/actions/ptw-actions";
// import CommonActions from "../../../store/actions/common-actions";
// import Button from "../../../components/Button";
// import { objectToQueryString } from "../../../utils/commonFunnction";

// const PTWLogBackup = () => {
//   const dispatch = useDispatch();
//   const dataAll = useSelector((state) => state?.ptwData?.getPtwLogBackup || []);
// console.log(dataAll, "csddsffffdff");

//   const ptwBackupData = useSelector(
//     (state) => state?.ptwData?.getPtwLogBackup || []

//   );
//   const extractRowData = (rowData) => {
//     const extractedData = {};

//     Object.keys(tableData).forEach((key) => {
//       if (rowData.hasOwnProperty(key)) {
//         extractedData[key] = rowData[key];
//       }
//     });

//     extractedData.downloadTimestamp = new Date().toISOString();
//     extractedData.downloadType = "";

//     return extractedData;
//   };

//    const handleExcelDownload = (rowData) => {
//     console.log("Downloading Excel for:", rowData);

//     const extractedData = extractRowData(rowData);
//     const exportType = "EXCEL";

//     const queryParams = new URLSearchParams();

//     queryParams.append("exportType", exportType);
//     queryParams.append("uniqueId", rowData?._id);
//     queryParams.append("ptwNumber", rowData?.ptwNumber);
//     queryParams.append("l1Approver", "l1Approver");

//     // Object.keys(tableData).forEach((key) => {
//     //   const value = extractedData[key] || rowData[key] || "";
//     //   if (value !== "") {
//     //     queryParams.append(key, value);
//     //   }
//     // });

//     const endpoint = `/ptw_export?${queryParams.toString()}`;

//     console.log("Excel Download endpoint:", endpoint);
//     console.log("Row data being sent:", extractedData);

//     dispatch(
//       CommonActions.commondownloadpost(
//         endpoint,
//         `PTW_${
//           extractedData.ptwNumber || rowData.ptwNumber || Date.now()
//         }.xlsx`,
//         "POST",
//         {
//           rowData,
//           columns: table["columns"]
//         }

//       )
//     );
//   };

//    const handlePdfDownload = (rowData) => {
//     console.log("Downloading PDF for:", rowData);

//     const extractedData = extractRowData(rowData);
//     const exportType = "PDF";

//     const queryParams = new URLSearchParams();
//     queryParams.append("exportType", exportType);
//     queryParams.append("uniqueId", rowData?._id);
//     queryParams.append("ptwNumber", rowData?.ptwNumber);
//     queryParams.append("l1Approver", "l1Approver");

//     // Object.keys(tableData).forEach(key => {
//     //   const value = extractedData[key] || rowData[key] || "";
//     //   if (value !== "") {
//     //     queryParams.append(key, value);
//     //   }
//     // });

//     const endpoint = `/ptw_export?${queryParams.toString()}`;

//     console.log("PDF Download endpoint:", endpoint);
//     console.log("Row data being sent:", extractedData);

//     dispatch(
//       CommonActions.commondownloadpost(
//         endpoint,
//         `PTW_${extractedData.ptwNumber || rowData.ptwNumber || Date.now()}.pdf`,
//         "POST",
//         { rowData , columns: table["columns"]}
//       )
//     );
//   };

//   const tableData = ptwBackupData?.map((itm)=>{
//     return {
//       ...itm,
//       ptwFormStatus:(
//         <div className="flex justify-center gap-2">
//           <button
//             onClick={() => handlePdfDownload(itm)}
//             className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600 transition flex items-center gap-1"
//             title="Download PDF"
//           >
//             <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
//             </svg>
//             PDF
//           </button>
//           <button
//             onClick={() => handleExcelDownload(itm)}
//             className="bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600 transition flex items-center gap-1"
//             title="Download Excel"
//           >
//             <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12.5,13L9.5,17H11.5L13.25,15L15,17H17L14,13L17,9H15L13.25,11L11.5,9H9.5L12.5,13Z" />
//             </svg>
//             Excel
//           </button>
//         </div>
//       ),
//     }
//   })

//   console.log(ptwBackupData, "___ptwBackupData");

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm();

//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const fetchPTWLogBackupData = (reset = true, additionalArgs = "") => {
//     dispatch(PTWActions.getPtwLogBackup(reset,additionalArgs));
//   };

//   useEffect(() => {
//     const defaultPagination = objectToQueryString({"page":1, "limit":50})
//     fetchPTWLogBackupData(true,defaultPagination);
//   }, []);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//     const args = `page=${newPage}&limit=${rowsPerPage}`;
//     dispatch(PTWActions.getPtwLogBackup(false, args));
//   };

//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage);
//     setCurrentPage(1);
//     const args = `page=1&limit=${newRowsPerPage}`;
//     dispatch(PTWActions.getPtwLogBackup(true, args));
//   };

//   const table = {
//     columns: [
//       {
//         name: "PTW",
//         value: "ptwNumber",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "PTW Requester",
//         value: "ptwRequester",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "Milestone",
//         value: "milestoneName",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "Site Id",
//         value: "siteId",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "SSID",
//         value: "ssid",
//         style: "text-center min-w-[150px]",
//       },
//       // {
//       //   name: "Unique ID",
//       //   value: "uniqueId",
//       //   style: "text-center min-w-[150px]",
//       // },
//       {
//         name: "SR Number",
//         value: "SRNumber",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "Project Group",
//         value: "projectGroupName",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "Project ID",
//         value: "projectID",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "Project Type",
//         value: "projectType",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "Sub Project",
//         value: "subProject",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "Activity",
//         value: "activity",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "PTW Submission Date",
//         value: "ptwSubmissionDate",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "Approval/Rejection Date",
//         value: "approvedOrRejectionDate",
//         style: "text-center min-w-[150px]",
//       },
//       {
//         name: "PTW Form & Checklist Attachment",
//         value: "ptwFormStatus",
//         style: "text-center min-w-[180px]",
//         render: (value, rowData) => {
//           console.log("Rendering buttons for row:", rowData);
//           return (
//             <div className="flex justify-center gap-2">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handlePdfDownload(rowData);
//                 }}
//                 className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600 transition flex items-center gap-1"
//                 title="Download PDF"
//               >
//                 <svg
//                   width="12"
//                   height="12"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
//                 </svg>
//                 PDF
//               </button>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleExcelDownload(rowData);
//                 }}
//                 className="bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600 transition flex items-center gap-1"
//                 title="Download Excel"
//               >
//                 <svg
//                   width="12"
//                   height="12"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12.5,13L9.5,17H11.5L13.25,15L15,17H17L14,13L17,9H15L13.25,11L11.5,9H9.5L12.5,13Z" />
//                 </svg>
//                 Excel
//               </button>
//             </div>
//           );
//         },
//       },
//       {
//         name: "Current Status",
//         value: "currentStatus",
//         style: "text-center min-w-[150px]",
//       },
//     ],
//     properties: {
//       rpp: [10, 20, 50, 100],
//     },

//     filter: [],
//   };

//   const onSubmit = (data) => {
//     // console.log("Filter form submitted:", data);

//     // const queryParams = new URLSearchParams();
//     // Object.keys(data).forEach((key) => {
//     //   if (data[key] && data[key] !== "") {
//     //     queryParams.append(key, data[key]);
//     //   }
//     // });

//     // const filterArgs = queryParams.toString();
//     // const args = `page=1&limit=${rowsPerPage}${
//     //   filterArgs ? "&" + filterArgs : ""
//     // }`;

//     // setCurrentPage(1);
//      let value = data.reseter;
//         delete data.reseter;
//         // const strVal = objectToQueryString(data);
//         const strVal = objectToQueryString(data);
//         // if(strVal?.length>0){
//         //   strVal = strVal+"&"+objectToQueryString({ ApproverType: "L2-Approver" })
//         // }else{
//         //   strVal =objectToQueryString({ ApproverType: "L2-Approver" })
//         // }
//         console.log(strVal,"___strVal__")
//     dispatch(PTWActions.getPtwLogBackup(true, strVal));
//   };

//   useEffect(() => {
//     if (dataAll && dataAll.length > 0) {
//       console.log("PTW Data received:", dataAll);
//       console.log("Total items:", dataAll.length);
//       console.log("First item structure:", dataAll[0]);
//       console.log("Overall table count:", dataAll[0]?.overall_table_count);
//     }
//   }, [dataAll]);

//   return (
//     <>
//       <AdvancedTable
//        headerButton={
//             <div className="flex gap-2">

//               <Button
//                 name={"Export"}
//                 classes="w-auto bg-teal-500 hover:bg-teal-600"
//                 onClick={(e) => {
//                   dispatch(
//                     CommonActions.commondownloadpost(
//                       "/ptwTableExport?exportTableName=ptwLogBackup",
//                       // {exportTableName:"ptwBackupData"},
//                       "New_file.xlsx",
//                       "GET",

//                     )
//                   );
//                 }}
//               />
//             </div>
//           }
//         table={table}
//         filterAfter={onSubmit}
//         tableName="PTW Log Backup Table"
//         TableHeight="h-[68vh]"
//         handleSubmit={handleSubmit}
//         data={tableData || []}
//         errors={errors || {}}
//         register={register}
//         setValue={setValue}
//         getValues={getValues}
//         totalCount={tableData[0]?.overall_table_count}
//         heading="Total Count :-"
//         currentPage={currentPage}
//         rowsPerPage={rowsPerPage}
//         onPageChange={handlePageChange}
//         onRowsPerPageChange={handleRowsPerPageChange}
//       />
//     </>
//   );
// };

// export default PTWLogBackup;

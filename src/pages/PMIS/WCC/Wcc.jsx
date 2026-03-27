import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AdvancedTable from "../../../components/AdvancedTable";
import ComplianceForm from "../Admin/Compliance/ComplianceForm";
import { useDispatch, useSelector } from "react-redux";
import VendorActions from "../../../store/actions/vendor-actions";
import {
  checkArray,
  CheckTrueOrFalse,
  checkVariable,
  pagination,
} from "../../../components/CommonObjectsAndVariables";
import ConditionalButton from "../../../components/ConditionalButton";
import {
  getAccessType,
  objectToQueryString,
} from "../../../utils/commonFunnction";
import CommonActions from "../../../store/actions/common-actions";
import CstmButton from "../../../components/CstmButton";
import DeleteButton from "../../../components/DeleteButton";
import Button from "../../../components/Button";
import { ALERTS } from "../../../store/reducers/component-reducer";
import Modal from "../../../components/Modal";
import CommonAlert from "../../../components/Common Alert/CommonAlert";
import FileUploader from "../../../components/FIleUploader";
import { Urls } from "../../../utils/url";
const Wcc = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState(pagination);
  const [fileOpen, setFileOpen] = useState(false);
  const [checkedData, setCheckData] = useState([]);
  const [checkedChildData, setCheckChildData] = useState([]);
  const [wccPdfData, setWccPdfData] = useState([]);
  const [assignDate, setAssignDate] = useState();
  const [strValFil, setstrVal] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  const [modalHead, setmodalHead] = useState(<></>);
  const [selectedProjectType, setSelectedProjectType] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   dispatch(VendorActions.getWccSubmodule());
  // }, []);
  useEffect(() => {
    const defaultPagination = objectToQueryString({ page: 1, limit: 50 });
    dispatch(VendorActions.getWccSubmodule(true, defaultPagination));
    dispatch(VendorActions.getProjectTypeList());
  }, []);

  let dbConfigTotalCount = useSelector((state) => {
    let interdata = state?.vendorData?.getWccSubmodule;
    if (interdata.length > 0) {
      return interdata[0]["overall_table_count"];
    } else {
      return 0;
    }
  });
  const getStatusBadge = (value) => {
    if (value === "Approved") {
      return (
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
          {value}
        </span>
      );
    }
    if (value === "Rejected") {
      return (
        <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-semibold">
          {value}
        </span>
      );
    }

    return <span>{value}</span>;
  };
  // console.log(wccPdfData, '___checkedData');
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

    let strVal = objectToQueryString({ ...data, ...pagination });
    // console.log(strVal,"___strVal__")
    if (assignDate) {
      let tempObj = {};
      const { start, end } = assignDate;
      tempObj["start"] = start?.split("T")[0];
      tempObj["end"] = end?.split("T")[0];
      data = { ...data, startDate: tempObj["start"], endDate: tempObj["end"] };

      strVal = objectToQueryString({
        ...data,
        ...pagination,
      });
    }

    // console.log(data,"___data")
    setstrVal(strVal);
    setFilters({
      ...filters,
      ...data,
    });

    dispatch(
      VendorActions.getWccSubmodule(true, strVal),
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
          const defaultPagination = objectToQueryString({
            page: 1,
            limit: 50,
          });
          dispatch(VendorActions.getWccSubmodule(true, defaultPagination));
        },
        null,
      ),
    );
    // console.log(modalOpen,"___modalOpen")
    // setmodalOpen(false)
  };

  //   Table Data starts here
  // console.log(checkedData,checkedChildData,"___checkedData_")
  // console.log(wccPdfData,"___wccPdfData")

  let tableData = useSelector((state) => state?.vendorData?.getWccSubmodule);
  tableData = tableData?.map((itm) => {
    return {
      ...itm,
      cdh: getStatusBadge(itm?.cdh),
      pat: getStatusBadge(itm?.pat),
      oci: getStatusBadge(itm?.oci),
      scft: getStatusBadge(itm?.scft),
      emf: getStatusBadge(itm?.emf),
      // itm?.cdh:itm?.cdh==="Approved"?<p className='text-green-600'>{itm?.cdh}</p>:<p >{itm?.cdh}</p>,
      checkboxProject: (
        <>
          {CheckTrueOrFalse(itm?.wccEligibility) &&
          itm?.wccNumber === undefined ? (
            <input
              type={"checkbox"}
              // id={itm.uniqueId}
              // subId={itm.SubProjectId}
              checked={
                checkedData?.some((d) => d.ssid === itm.ssid) ||
                checkedChildData?.some((d) => d.ssid === itm.ssid)
              }
              value={itm.uniqueId}
              onChange={(e) => {
                if (e?.target?.checked && itm?.wccNumber === undefined) {
                  const tempObj = {
                    ssid: itm?.ssid,
                    vendorItemCode: itm?.vendorItemCode,
                  };
                  setCheckChildData((prev) => [...prev, ...[tempObj]]);
                } else {
                  // console.log(e?.target?.checked,"___peinfoes")
                  if (checkVariable(checkedData)) {
                    const data = checkedData?.filter(
                      (CheckItm) => itm?.ssid !== CheckItm?.ssid,
                    );
                    setCheckChildData(data);
                    setCheckData([]);
                  } else {
                    const data = checkedChildData?.filter(
                      (checkChildItm) => itm?.ssid !== checkChildItm?.ssid,
                    );
                    console.log(data, "CheckChldata");
                    setCheckChildData(data);
                  }
                }
              }}
            />
          ) : (
            <></>
          )}
        </>
      ),
      generatePdf: (
        <>
          {itm?.isWccCreated === true ? (
            <input
              type={"checkbox"}
              // id={itm.uniqueId}
              // subId={itm.SubProjectId}
              checked={wccPdfData?.some((d) => d.uniqueId === itm.uniqueId)}
              value={itm.uniqueId}
              onChange={(e) => {
                if (e?.target?.checked) {
                  const tempObj = {
                    ssid: itm?.ssid,
                    vendorItemCode: itm?.vendorItemCode,
                    wccNumber: itm?.wccNumber,
                    uniqueId: itm?.uniqueId,
                  };
                  setWccPdfData((prev) => [...prev, ...[tempObj]]);
                } else {
                  // console.log(e?.target?.checked,"___peinfoes")

                  const data = wccPdfData?.filter(
                    (bar) => bar?.uniqueId !== itm?.uniqueId,
                  );
                  // console.log(itm, wccPdfData, '__itm');
                  // console.log(data, '___wccData');
                  setWccPdfData(data);
                }
              }}
            />
          ) : (
            <></>
          )}
        </>
      ),
      actions: (
        <>
          {itm?.wccEligibility === "WCC Generated" &&
          getAccessType("Actions(Partner WCC)") === "visible" &&
          itm?.wccNumber !== undefined ? (
            <CstmButton
              child={
                <DeleteButton
                  name={""}
                  onClick={() => {
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

                    // console.log('Raaand');

                    setmodalBody(
                      <>
                        <CommonAlert
                          selectedRow={itm}
                          Heading={"Are you Sure ?"}
                          getAllDAta={() => {
                            console.log("CommingHEre");
                            dispatch(
                              VendorActions.postDeSelectWCC(
                                {
                                  ssid: itm?.ssid,
                                  vendorItemCode: itm?.vendorItemCode,
                                },
                                () => {
                                  const defaultPagination = objectToQueryString(
                                    {
                                      page: 1,
                                      limit: 50,
                                    },
                                  );
                                  dispatch(
                                    VendorActions.getWccSubmodule(
                                      true,
                                      defaultPagination,
                                    ),
                                  );
                                },
                                null,
                              ),
                            );
                          }}
                          setmodalOpen={setmodalOpen}
                          sendData={{}}
                        />
                      </>,
                    );
                    setmodalOpen(true);
                    // dispatch(ALERTS(msgdata))
                  }}
                ></DeleteButton>
              }
            />
          ) : (
            <></>
          )}
        </>
      ),
    };
  });
  // console.log(tableData,"___tableData")
  //   Table Data ends here
  let projectTypeList = useSelector((state) => {
    return state?.vendorData?.getProjectTypeDetails?.map((itm) => {
      return {
        label: itm?.projectType,
        value: itm?.uid,
      };
    });
  });
  // console.log(projectTypeList, '__projectTypeList');
  const subProjectList = useSelector((state) => {
    return state?.vendorData?.getSubProjectDetails?.map((item) => ({
      label: item?.subProject,
      value: item?.subProjectId,
    }));
  });

  const componentTable = {
    columns: [
      {
        name: (
          <input
            type={"checkbox"}
            checked={
              checkedData?.length === checkedChildData?.length &&
              checkedData?.length > 0
                ? true
                : false
            }
            onClick={(e) => {
              // console.log(e,"___e__")
              if (e.target.checked) {
                setCheckChildData((prev) => (prev = []));
                tableData?.map((itm) => {
                  if (CheckTrueOrFalse(itm?.wccEligibility)) {
                    const tempObj = {
                      ssid: itm?.ssid,
                      vendorItemCode: itm?.vendorItemCode,
                    };
                    const tempObj2 = [itm?.ssid];
                    if (itm?.wccNumber === undefined) {
                      setCheckData((prev) => [
                        ...prev,
                        ...tempObj2,
                        ...[tempObj],
                      ]);
                      setCheckChildData((prev) => [
                        ...prev,
                        ...tempObj2,
                        ...[tempObj],
                      ]);
                    }
                  }
                });
              } else {
                setCheckData([]);
                setCheckChildData([]);
              }
            }}
          />
        ),
        value: "checkboxProject",
        style: "min-w-[40px] max-w-[40px] text-center",
      },
      {
        name: "Generate PDF",
        value: "generatePdf",
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
        style: "min-w-[60px] max-w-[140px] text-center",
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
        name: "WCC Eligibility",
        value: "wccEligibility",
        style: "min-w-[160px] max-w-[220px] text-center",
      },
      // {
      //   name: "Status",
      //   value: "action",
      //   style: "min-w-[120px] max-w-[160px] text-center",
      // },
      {
        name: "WCC Issuance Date",
        value: "submissionDate",
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

    filter: [
      {
        label: "Site Id",
        value: "",
        name: "siteId",

        type: "text",
      },
      {
        label: "Project Type",
        value: "",
        name: "projectType",

        // type: "text",
        type: "select",
        bg: "bg-[#3e454d] text-gray-300 border-[1.5px] border-solid border-[#64676d]",
        option: projectTypeList,
        props: {
          onChange: (e) => {
            if (e.target.value) {
              // setSelectedProjectType(e?.target?.value);
              dispatch(VendorActions.getSubProjectList(true, e.target.value));
            } else {
              // setSelectedProjectType(null);
              dispatch(GET_SUB_PROJECT_DETAILS({ dataAll: [], reset: true }));
            }
          },
        },
        required: false,
      },
      {
        label: "Sub Project",
        value: "",
        name: "subProject",

        // type: "text",
        type: "select",
        bg: "bg-[#3e454d] text-gray-300 border-[1.5px] border-solid border-[#64676d]",
        option: subProjectList,
        required: false,
      },
      {
        label: "Vendor Name",
        value: "",
        type: "text",
        name: "vendorName",
      },
      // {
      //   label: 'Vendor Id',
      //   value: '',
      //   name: 'vendorId',
      //   type: 'text',
      // },

      {
        label: "Vendor Item Code",
        value: "",
        name: "vendorItemCode",

        type: "text",
      },
      {
        label: "PO Number",
        value: "",
        name: "poNumber",

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
          { label: "WCC Generated", value: "WCC Generated" },
        ],
      },
    ],
  };

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
      }),
    );
  };

  return (
    <>
      <AdvancedTable
        headerButton={
          <div className="flex">
            {checkVariable(checkedData) ? (
              <>
                <ConditionalButton
                  showType={"visible"}
                  classes="w-auto mr-1"
                  // onClick={() => navigate("/empdetails")}
                  onClick={() => {
                    setCheckData([]);
                    setCheckChildData([]);
                    dispatch(
                      VendorActions.postCreateWCC(
                        checkedData,
                        () => {
                          const defaultPagination = objectToQueryString({
                            page: 1,
                            limit: 50,
                          });
                          dispatch(
                            VendorActions.getWccSubmodule(
                              true,
                              defaultPagination,
                            ),
                          );
                        },
                        null,
                      ),
                    );
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
            ) : checkVariable(checkedChildData) ? (
              <>
                <ConditionalButton
                  showType={"visible"}
                  classes="w-auto mr-1"
                  // onClick={() => navigate("/empdetails")}
                  onClick={() => {
                    setCheckChildData([]);
                    setCheckData([]);
                    dispatch(
                      VendorActions.postCreateWCC(
                        checkedChildData,
                        () => {
                          const defaultPagination = objectToQueryString({
                            page: 1,
                            limit: 50,
                          });
                          dispatch(
                            VendorActions.getWccSubmodule(
                              true,
                              defaultPagination,
                            ),
                          );
                        },
                        null,
                      ),
                    );
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
            ) : (
              <></>
            )}
            {wccPdfData?.length > 0 ? (
              <ConditionalButton
                showType={"visible"}
                classes="w-auto mr-1"
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
                      wccPdfData,
                    ),
                  );
                  setWccPdfData([]);
                }}
                name={"Generate PDF"}
              ></ConditionalButton>
            ) : (
              <></>
            )}

            <ConditionalButton
              showType={getAccessType("Partner WCC(Upload)")}
              name={"Upload File"}
              classes="w-auto mr-1"
              onClick={() => setFileOpen(true)}
            />
            <ConditionalButton
              showType={getAccessType("Partner WCC(Export)")}
              classes="w-auto "
              onClick={(e) => {
                dispatch(
                  CommonActions.commondownload(
                    "/export/wcc?" + objectToQueryString(filters),
                    "WCC.xlsx",
                  ),
                );
              }}
              name={"Export"}
            ></ConditionalButton>
          </div>
        }
        table={componentTable}
        filterAfter={onSubmit}
        dateInputReset={setAssignDate}
        tableName={"WCC"}
        handleSubmit={handleSubmit}
        data={checkArray(tableData) ? tableData : []}
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
        totalCount={dbConfigTotalCount ?? 0}
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
        tempbtnlink={["/template/wccUpload.xlsx", "WCC_File_template.xlsx"]}
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
  );
};

export default Wcc;

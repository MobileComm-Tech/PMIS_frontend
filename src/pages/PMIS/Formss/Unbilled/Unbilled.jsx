import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../../../components/Modal";
import AdvancedTable from "../../../../components/AdvancedTable";
import {
  checkArray,
  wccAccessInFormsKey,
} from "../../../../components/CommonObjectsAndVariables";
import { useDispatch, useSelector } from "react-redux";
import CommonActions from "../../../../store/actions/common-actions";
import FormssActions from "../../../../store/actions/formss-actions";
import Button from "../../../../components/Button";
import gpTrackingActions from "../../../../store/actions/gpTrackingActions";
import {
  getAccessType,
  objectToQueryString,
} from "../../../../utils/commonFunnction";
import FileUploader from "../../../../components/FIleUploader";
import { Urls } from "../../../../utils/url";
import FilterActions from "../../../../store/actions/filter-actions";
import CstmButton from "../../../../components/CstmButton";
import EditButton from "../../../../components/EditButton";
import DeleteButton from "../../../../components/DeleteButton";
import { ALERTS } from "../../../../store/reducers/component-reducer";
import FormsUnBilledForm from "./FormsUnBilledForm";
import { useNavigate } from "react-router-dom";
import ConditionalButton from "../../../../components/ConditionalButton";
const FormsUnBilled = () => {
  const dispatch = useDispatch();
  const [fileOpen, setFileOpen] = useState(false);
  //   const [strValFil, setstrVal] = useState(false);

  // const [strValFil, setstrVal] = useState("page=1&limit=50");
  const defaultPagination = objectToQueryString({
    page: 1,
    limit: 50,
  });

  const [strValFil, setstrVal] = useState(defaultPagination);
  const [modalFormValue, setModalFormValue] = useState({});
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
  // const [fileOpen, setFileOpen] = useState(false);
  const [fileOpen2, setFileOpen2] = useState(false);
  const [modalHead, setmodalHead] = useState("");
  const [modalKey, setModalKey] = useState(0);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setValues,
    getValues,
    dbConfigList,
    formState: { errors },
  } = useForm();

  let customerList = useSelector((state) => {
    return state?.gpTrackingReducer?.getCustomer.map((itm) => {
      return {
        label: itm?.customerName,
        value: itm?.uniqueId,
      };
    });
  });


    let showType = getAccessType('Unbilled Tracking(Actions)');
  
    let shouldIncludeEditColumn = false;
  
    if (showType === 'visible') {
      shouldIncludeEditColumn = true;
    }
  //   let projectTypeList = useSelector((state) => {
  //     return state?.filterData?.getfinancialworkdoneprojecttype.map((itm) => {
  //       return {
  //         label: itm.projectType,
  //         value: itm.uid,
  //       };
  //     });
  //   });

const reduxState = useSelector((state) => state);

// useEffect(() => {
//   console.log("REDUX STATE", reduxState);
// }, [reduxState]);

// const userData = useSelector((state) => state?.authData?.userData);
// console.log("userData", userData);

// const userRole = useSelector(
//   (state) => state?.authData?.userData?.userRoleName
// );

const userRole = useSelector(
  (state) => state?.auth?.user?.userRoleName
);

console.log("userRole =>", userRole);
// const loginData = JSON.parse(localStorage.getItem("loginData") || "{}");

// const userRole = loginData?.userRoleName;

// console.log("userRole =>", userRole);

  const table = {
    columns: [
      {
        name: (
          <input
            type="checkbox"
            checked={selectAll}
            onChange={(e) => {
              const checked = e.target.checked;

              setSelectAll(checked);

              if (checked) {
                setSelectedRows(tableData.map((itm) => itm.uniqueId));
              } else {
                setSelectedRows([]);
              }
            }}
          />
        ),

        value: "checkbox",

        style: "min-w-[60px] max-w-[60px] text-center",
      },
      {
        name: "Customer",
        value: "customer",
        style: "min-w-[140px] max-w-[220px] text-center",
      },
      {
        name: "Circle",
        value: "circle",
        style: "min-w-[120px] max-w-[180px] text-center",
      },
      {
        name: "Project Group",
        value: "projectGroup",
        style: "min-w-[160px] max-w-[220px] text-center",
      },
      {
        name: "Project Type",
        value: "projectType",
        style: "min-w-[160px] max-w-[220px] text-center",
      },
      {
        name: "Project ID",
        value: "projectId",
        style: "min-w-[140px] max-w-[200px] text-center",
      },
      {
        name: "Sub Project",
        value: "subProject",
        style: "min-w-[160px] max-w-[220px] text-center",
      },
      {
        name: "SSID",
        value: "systemId",
        style: "min-w-[120px] max-w-[180px] text-center",
      },
      {
        name: "Site Id",
        value: "siteId",
        style: "min-w-[120px] max-w-[180px] text-center",
      },
      {
        name: "MS1 Completion Date",
        value: "ms1CompletionDate",
        style: "min-w-[180px] max-w-[240px] text-center",
      },
      {
        name: "MS2 Completion Date",
        value: "ms2CompletionDate",
        style: "min-w-[180px] max-w-[240px] text-center",
      },
      {
        name: "Unbilled MS1 Done",
        value: "unbilledMs1Done",
        style: "min-w-[180px] max-w-[240px] text-center",
      },
      {
        name: "Unbilled MS2 Done",
        value: "unbilledMs2Done",
        style: "min-w-[180px] max-w-[240px] text-center",
      },
      {
        name: "Total Unbilled",
        value: "totalUnbilled",
        style: "min-w-[160px] max-w-[220px] text-center",
      },
      {
        name: "Customer Project Type",
        value: "customerProjectType",
        style: "min-w-[200px] max-w-[260px] text-center",
      },
      {
        name: "Final Ageing",
        value: "finalAgeing",
        style: "min-w-[140px] max-w-[200px] text-center",
      },
      {
        name: "YEAR",
        value: "year",
        style: "min-w-[100px] max-w-[140px] text-center",
      },
      {
        name: "Current Unbilled Bucket",
        value: "currentUnbilledBucket",
        style: "min-w-[220px] max-w-[280px] text-center",
      },
      {
        name: "Unbilled Sub-Bucket",
        value: "unbilledSubBucket",
        style: "min-w-[220px] max-w-[280px] text-center",
      },
      // {
      //   name: "Edit",
      //   value: "edit",
      //   style: "min-w-[100px] max-w-[200px] text-center",
      // },
      // {
      //   name: "Delete",
      //   value: "delete",
      //   style: "min-w-[100px] max-w-[100px] text-center",
      // },

       ...(shouldIncludeEditColumn
        ? [
            {
              name: 'Edit',
              value: 'edit',
              style: 'min-w-[100px] max-w-[200px] text-center',
            },
            {
              name: 'Delete',
              value: 'delete',
              style: 'min-w-[100px] max-w-[100px] text-center',
            },
          ]
        : []),
    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },

    filter: [
      {
        label: "Customer",
        type: "select",
        name: "customer",
        option: customerList,
        props: {
          onChange: (e) => {
            if (e.target.value) {
              dispatch(
                FilterActions.getfinancialWorkDoneProjectType(
                  true,
                  "",
                  1,
                  e.target.value,
                ),
              );
            } else {
              dispatch(
                GET_FINANCIAL_WORKDONE_PROJECT_TYPE({
                  dataAll: [],
                  reset: true,
                }),
              );
            }
          },
        },
      },
      {
        label: "Project Group",
        type: "text",
        name: "projectGroup",
        props: {},
      },
      {
        label: "Project ID",
        type: "text",
        name: "projectId",
        props: {},
      },
      {
        label: "Site Id",
        type: "text",
        name: "siteId",
        props: {},
      },
    ],
  };

  const onTableViewSubmit = (data) => {
    data["fileType"] = "formUnBilledUpload";
    dispatch(
      CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
        dispatch(FormssActions.getFormsUnBilled());
        setFileOpen(false);
        resetting("");
      }),
    );
  };

  const onTableViewSubmit2 = (data) => {
    data["fileType"] = "formUnBilledUpgrade";

    dispatch(
      CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
        dispatch(FormssActions.getFormsUnBilled(true, strValFil));
        setFileOpen2(false);
      }),
    );
  };

  const onSubmit = (data) => {
    delete data.rolename;
    delete data.sub;
    let shouldReset = data.reseter;
    delete data.reseter;

    let strVal = objectToQueryString(data);
    setstrVal(strVal);
    dispatch(FormssActions.getFormsUnBilled(true, objectToQueryString(data)));
  };

  useEffect(() => {
    const defaultPagination = objectToQueryString({ page: 1, limit: 50 });
    dispatch(FormssActions.getFormsUnBilled(true, defaultPagination));
    // FormssActions.getFormsUnBilled(true, defaultPagination)
    dispatch(gpTrackingActions.getGPCustomer());
  }, []);

  const tableData = useSelector((state) => {
    let interdata = state?.formssData?.getFormsUnBilled || [];
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
                  setModalFormValue(itm);
                  setmodalHead("Edit UnBilled");
                  setModalKey((k) => k + 1);
                  setmodalOpen(true);
                }}
              ></EditButton>
            }
          />
        ),

        checkbox: (
          <input
            type="checkbox"
            checked={selectedRows.includes(itm.uniqueId)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedRows((prev) => [...prev, itm.uniqueId]);
              } else {
                setSelectedRows((prev) =>
                  prev.filter((id) => id !== itm.uniqueId),
                );
              }
            }}
          />
        ),

        // delete: (
        //   <CstmButton
        //     child={
        //       <DeleteButton
        //         name={""}
        //         onClick={() => {
        //           let msgdata = {
        //             show: true,
        //             icon: "warning",
        //             buttons: [
        //               <Button
        //                 classes="w-15 bg-rose-400"
        //                 onClick={() => {
        //                   dispatch(
        //                     CommonActions.deleteApiCallerBulk(
        //                       `/form/unbilled/multidelete`,
        //                       {
        //                         uniqueIds: [itm?.uniqueId],
        //                       },
        //                       () => {
        //                         dispatch(
        //                           FormssActions.getFormsUnBilled(
        //                             true,
        //                             strValFil,
        //                           ),
        //                         );

        //                         dispatch(ALERTS({ show: false }));
        //                       },
        //                     ),
        //                   );
        //                 }}
        //                 name={"OK"}
        //               />,

        //               <Button
        //                 classes="w-auto"
        //                 onClick={() => {
        //                   dispatch(ALERTS({ show: false }));
        //                 }}
        //                 name={"Cancel"}
        //               />,
        //             ],

        //             text: "Are you sure you want to Delete?",
        //           };

        //           dispatch(ALERTS(msgdata));
        //         }}
        //       ></DeleteButton>
        //     }
        //   />
        // ),

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
                          dispatch(
                            CommonActions.deleteApiCaller(
                              `${Urls.forms_UnBIlled}/${itm?.uniqueId}`,
                              () => {
                                // dispatch(FormssActions.getFormsUnBilled());
                                dispatch(
                                  FormssActions.getFormsUnBilled(
                                    true,
                                    strValFil,
                                  ),
                                );
                              },
                              itm?.uniqueId,
                            ),
                          );
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
      };
      return updateditm;
    });
  });

  let dbConfigTotalCount = useSelector((state) => {
    let interdata = state?.formssData?.getFormsUnBilled;
    if (interdata.length > 0) {
      return interdata[0]["overall_table_count"];
    } else {
      return 0;
    }
  });

  return (
    <>
      <AdvancedTable
        headerButton={
          <div className="flex gap-1">
            {" "}
            {/* <ConditionalButton
              showType={getAccessType("Unbilled Tracking(Upgrade)")}
              name={"Upgrade"}
              classes="w-auto"
              onClick={() => {
                setFileOpen2((prev) => !prev);
              }}
            /> */}
            {selectedRows.length > 0 && (
              <Button
                name={`Delete (${selectedRows.length})`}
                classes="w-auto bg-rose-400"
                onClick={() => {
                  let msgdata = {
                    show: true,
                    icon: "warning",

                    buttons: [
                      <Button
                        classes="w-15 bg-rose-400"
                        onClick={() => {
                          dispatch(
                            CommonActions.postApiCallerBulk(
                              "/form/unbilled/multidelete",
                              {
                                uniqueIds: selectedRows,
                              },
                              () => {
                                dispatch(
                                  FormssActions.getFormsUnBilled(
                                    true,
                                    strValFil,
                                  ),
                                );

                                setSelectedRows([]);
                                setSelectAll(false);

                                dispatch(ALERTS({ show: false }));
                              },
                            ),
                          );
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
              />
            )}
            {/* <Button
              name={"Upload"}
              classes="w-auto"
              onClick={(e) => {
                setFileOpen((prev) => !prev);
              }}
            ></Button> */}
            <ConditionalButton
              showType={getAccessType("Unbilled Tracking(Upload)")}
              name={"Upload"}
              classes="w-auto"
              onClick={(e) => {
                setFileOpen((prev) => !prev);
              }}
            />
            <ConditionalButton
              showType={getAccessType("Unbilled Tracking(Upgrade)")}
              name={"Upgrade"}
              classes="w-auto"
              onClick={() => {
                setFileOpen2((prev) => !prev);
              }}
            />
            {/* <ButtonUnbilled Tracking(Export)
              name={"Upgrade"}
              classes="w-auto"
              onClick={() => {
                setFileOpen2((prev) => !prev);
              }}
            /> */}
            <ConditionalButton
              showType={getAccessType("Unbilled Tracking(Export)")}
              name={"Export"}
              classes="w-auto"
              onClick={() => {
                dispatch(
                  CommonActions.commondownloadpost(
                    "/export/form/unbilled?" + strValFil,
                    "Export_UnBilled.xlsx",
                    "GET",
                    {},
                  ),
                );
              }}
            />
          </div>
        }
        table={table}
        filterAfter={onSubmit}
        data={checkArray(tableData) ? tableData : []}
        tableName={"UnBilled Table"}
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
        totalCount={dbConfigTotalCount}
        // checkboxshow={shouldIncludeEditColumn}
        
        heading={"Total Count :-  "}
        //        checkboxshow={true}
        // delurl={"/form/unbilled/multidelete"}
        // geturl={FormssActions.getFormsUnBilled()}
      />
      <Modal
        size={"sm"}
        modalHead={modalHead}
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
      >
        <FormsUnBilledForm
          key={modalKey}
          formValue={modalFormValue}
          setIsOpen={setmodalOpen}
           userRole={userRole}
          refreshQuery={strValFil}
        />
      </Modal>

      <FileUploader
        isOpen={fileOpen}
        onTableViewSubmit={onTableViewSubmit}
        setIsOpen={setFileOpen}
        tempbtn={true}
        tempbtnlink={["/template/formUnbilled.xlsx", "UnBilled_template.xlsx"]}
        head={"Upload Unbilled File"}
      />

      <FileUploader
        isOpen={fileOpen2}
        onTableViewSubmit={onTableViewSubmit2}
        setIsOpen={setFileOpen2}
        tempbtn={true}
        tempbtnlink={[
          "/template/formUnbilledUpgrade.xlsx",
          "formUnbilledUpgrade.xlsx",
        ]}
        head={"Upload Upgrade File"}
      />
    </>
  );
};

export default FormsUnBilled;

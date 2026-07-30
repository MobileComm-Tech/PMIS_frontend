import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import EditButton from "../../../../components/EditButton";
import DeleteButton from "../../../../components/DeleteButton";
import AdvancedTable from "../../../../components/AdvancedTable";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import CstmButton from "../../../../components/CstmButton";
import FileUploader from "../../../../components/FIleUploader";

import OciApproverFormTwo from "./OciApproverFormTwo"; 
import OCIApproverAction from "../../../../store/actions/ociApprover-action";
import CommonActions from "../../../../store/actions/common-actions";

import { Urls } from "../../../../utils/url";
import { objectToQueryString } from "../../../../utils/commonFunnction";
import { ALERTS } from "../../../../store/reducers/component-reducer";
import { pagination } from "../../../../components/CommonObjectsAndVariables";

const OciApprovertwo = () => {
  const dispatch = useDispatch();

  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  const [modalHead, setmodalHead] = useState("");
  const [fileOpen, setFileOpen] = useState(false);
  const [strValFil, setstrVal] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const refreshData = () => {
    dispatch(
      OCIApproverAction.OciApproverData(
        true,
        objectToQueryString(pagination)
      )
    );
  };

  const OciApproverList = useSelector((state) => {
    const interdata = state?.ociApproverData?.OciApproverData || [];

    return interdata.map((itm) => ({
      ...itm,

      projectGroupDisplay: itm?.projectGroupCombined
        ? itm.projectGroupCombined
            .split(",")
            .filter((_, index) => index % 2 === 0)
            .join(", ")
        : "",

      projectGroupIds: itm?.projectGroupCombined
        ? itm.projectGroupCombined
            .split(",")
            .map((item) => item.trim())
            .filter((_, index) => index % 2 !== 0)
        : [],

      edit: (
        <CstmButton
          className="p-2"
          child={
            <EditButton
              name=""
              onClick={() => {
                setmodalHead("Edit OCI Approver");

                setmodalBody(
                  <OciApproverFormTwo
                    isOpen={true}
                    setIsOpen={setmodalOpen}
                    resetting={false}
                    formValue={itm}
                    onSuccess={() => refreshData()}
                  />
                );

                setmodalOpen(true);
              }}
            />
          }
        />
      ),

      delete: (
        <CstmButton
          child={
            <DeleteButton
              name=""
              onClick={() => {
                dispatch(
                  ALERTS({
                    show: true,
                    icon: "warning",
                    text: "Are you sure you want to delete?",
                    buttons: [
                      <Button
                        classes="w-15 bg-rose-400"
                        name="OK"
                        onClick={() => {
                          dispatch(
                            CommonActions.deleteApiCaller(
                              `${Urls.ociApprover}/${itm.uniqueId}`,
                              () => {
                                refreshData();
                                dispatch(ALERTS({ show: false }));
                              }
                            )
                          );
                        }}
                      />,
                      <Button
                        classes="w-15 bg-[#13B497]"
                        name="Cancel"
                        onClick={() =>
                          dispatch(ALERTS({ show: false }))
                        }
                      />,
                    ],
                  })
                );
              }}
            />
          }
        />
      ),
    }));
  });

  const dbConfigTotalCount = useSelector((state) => {
    const interdata = state?.ociApproverData?.OciApproverData || [];

    if (interdata.length > 0) {
      return interdata[0].overall_table_count;
    }

    return 0;
  });

  const table = {
    columns: [
      {
        name: "Emp Name",
        value: "empName",
        style: "text-center min-w-[150px]",
      },
      {
        name: "Emp Email",
        value: "employeeEmail",
        style: "text-center min-w-[150px]",
      },

      {
        name: "Customer",
        value: "customer",
        style: "text-center min-w-[150px]",
      },
      {
        name: "Project Group",
        value: "projectGroupDisplay",
        style: "text-center min-w-[150px]",
      },
      {
        name: "Project Type",
        value: "projectType",
        style: "text-center min-w-[150px]",
      },
      {
        name: "Sub Project Type",
        value: "subProject",
        style: "text-center min-w-[150px]",
      },
      {

        name: "Edit",
        value: "edit",
        style: "text-center min-w-[100px]",
      },
      {
        name: "Delete",
        value: "delete",
        style: "text-center min-w-[100px]",
      },
    ],

    properties: {
      rpp: [10, 20, 50, 100],
    },

    filter: [
      {
        label: "Employee Name",
        type: "text",
        name: "empName",
      },
      {
        label: "Project Group",
        type: "text",
        name: "projectGroup",
      },
    ],
  };

  const onSubmit = (data) => {
    delete data.reseter;

    const strVal = objectToQueryString(data);

    setstrVal(strVal);

    dispatch(
      OCIApproverAction.OciApproverData(
        true,
        strVal
      )
    );
  };

  const onTableViewSubmit = (data) => {
    data.fileType = "oci_approver";

    dispatch(
      CommonActions.fileSubmit(
        Urls.common_file_uploadr,
        data,
        () => {
          refreshData();
          setFileOpen(false);
        }
      )
    );
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <>
      <AdvancedTable
        headerButton={
          <div className="flex gap-1">
            <Button
              name="Add New"
              classes="w-auto"
              onClick={() => {
                setmodalHead("Add OCI Approver");

                setmodalBody(
                  <OciApproverFormTwo
                    isOpen={true}
                    setIsOpen={setmodalOpen}
                    resetting={true}
                    formValue={{}}
                    onSuccess={() => refreshData()}
                  />
                );

                setmodalOpen(true);
              }}
            />

            <Button
              name="Upload"
              classes="w-auto"
              onClick={() => setFileOpen(true)}
            />

            <Button
              name="Export"
              classes="w-auto"
              onClick={() => {
                dispatch(
                  CommonActions.commondownload(
                    // "/Export/oci_approver?" + strValFil,
                    "/export/wcc/oci_approver?" + strValFil,
                    "Export_OCI_Approver.xlsx"
                  )
                );
              }}
            />
          </div>
        }
        table={table}
        filterAfter={onSubmit}
        tableName="OCI Approver Table"
        handleSubmit={handleSubmit}
        data={OciApproverList}
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
        totalCount={dbConfigTotalCount}
        heading="Total Count :- "
      />

      <Modal
        size="sm"
        modalHead={modalHead}
        children={modalBody}
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
      />

      <FileUploader
        isOpen={fileOpen}
        fileUploadUrl=""
        onTableViewSubmit={onTableViewSubmit}
        setIsOpen={setFileOpen}
        tempbtn={true}
        tempbtnlink={[
          "/template/OCI_Approver.xlsx",
          "OCI Approver.xlsx",
        ]}
      />
    </>
  );
};

export default OciApprovertwo;
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import EditButton from "../../../../components/EditButton";
import AdvancedTable from "../../../../components/AdvancedTable";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import DeleteButton from "../../../../components/DeleteButton";
import CstmButton from "../../../../components/CstmButton";
import ToggleButton from "../../../../components/ToggleButton";
import { objectToQueryString } from "../../../../utils/commonFunnction";
import { ALERTS } from "../../../../store/reducers/component-reducer";
import CommonActions from "../../../../store/actions/common-actions";
import { Urls } from "../../../../utils/url";
import AdminActions from "../../../../store/actions/admin-actions";
import FileUploader from "../../../../components/FIleUploader";
import { GET_MANAGE_CIRCLE } from "../../../../store/reducers/admin-reducer";
import ManageTaskForm from "./ManagePTWTaskForm";
import HrActions from "../../../../store/actions/hr-actions";

const PTWTaskAllocation = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  const [modalHead, setmodalHead] = useState(<></>);
  const [fileOpen, setFileOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [isResetting, setIsResetting] = useState(false);

  let dispatch = useDispatch();

  const currentDate = new Date();
  const dt = currentDate
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");
  useEffect(() => {
    dispatch(HrActions.getPTWTaskTable(true));
  }, []);
  const tableData = useSelector(
    (state) => state.hrReducer.getPTWTaskTable || [],
  );

  let dbConfigList = tableData.map((itm) => ({
    ...itm,

    edit: (
      <CstmButton
        className={"p-2"}
        child={
          <EditButton
            name={""}
            onClick={() => {
              dispatch(
                HrActions.getPTWTask(
                  true,
                  itm.customerId,
                  `projectType=${itm.projectType}&subProject=${itm.subProject}`,
                ),
              );
              setSelectedData(itm); // Set the row data
              setIsResetting(false);
              setmodalHead("Edit PTW Task");
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
            name={""}
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
                            `/admin/managePtwTaskAllocation/${itm.uniqueId}`,
                            () => {
                              dispatch(HrActions.getPTWTaskTable(true));
                              dispatch(ALERTS({ show: false }));
                            },
                          ),
                        );
                      }}
                    />,
                    <Button
                      classes="w-15 bg-[#13B497]"
                      name="Cancel"
                      onClick={() => dispatch(ALERTS({ show: false }))}
                    />,
                  ],
                }),
              );
            }}
          />
        }
      />
    ),
  }));

  let dbConfigTotalCount = useSelector((state) => {
    let interdata = state?.hrReducer?.getPTWTaskTable;
    console.log(interdata, "ittt");
    if (interdata.length > 0) {
      return interdata[0]["overall_table_count"];
    } else {
      return 0;
    }
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setValues,
    getValues,
    formState: { errors },
  } = useForm();

  let table = {
    columns: [
      {
        name: "Customer Name",
        value: "customerName",
        style: "min-w-[140px] max-w-[200px] text-center",
      },
      {
        name: "Project Type",
        value: "projectType",
        style: "min-w-[140px] max-w-[200px] text-center",
      },
      {
        name: "Sub Project",
        value: "subProject",
        style: "min-w-[140px] max-w-[200px] text-center",
      },
      {
        name: "Milestone List",
        value: "msList",
        style: "min-w-[140px] max-w-[200px] text-center",
      },
      {
        name: "Edit",
        value: "edit",
        style: "min-w-[100px] max-w-[200px] text-center",
      },
      {
        name: "Delete",
        value: "delete",
        style: "min-w-[100px] max-w-[200px] text-center",
      },
    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },
    filter: [],
  };
  // const onSubmit = (data) => {
  //   let value = data.reseter;
  //   delete data.reseter;
  //   dispatch(AdminActions.getManageZone(value, objectToQueryString(data)));
  // };
  //   useEffect(() => {
  //     dispatch(AdminActions.getManageZone());
  //     dispatch(GET_MANAGE_CIRCLE({ dataAll: [], reset: true }));
  //   }, []);

  const onTableViewSubmit = (data) => {
    data["fileType"] = "ManageZone";
    data["collection"] = "zone";
    dispatch(
      CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
        dispatch(AdminActions.getManageZone());
        setFileOpen(false);
      }),
    );
  };

  return (
    <>
      <AdvancedTable
        headerButton={
          <div className="flex gap-1">
            <Button
              classes="w-auto "
              onClick={(e) => {
                setmodalOpen((prev) => !prev);
                setSelectedData({});
                setmodalHead("New PTW Task");
                dispatch(GET_MANAGE_CIRCLE({ dataAll: [], reset: true }));
                setmodalBody(
                  <ManageTaskForm
                    isOpen={modalOpen}
                    setIsOpen={setmodalOpen}
                    resetting={true}
                    formValue={{}}
                  />,
                );
              }}
              name={"Add PTW Task"}
            ></Button>
            {/* <Button
              name={"Upload File"}
              classes="w-auto"
              onClick={(e) => {
                setFileOpen((prev) => !prev);
              }}
            ></Button> */}
            <Button
              name={"Export"}
              classes="w-auto mr-1"
              onClick={(e) => {
                dispatch(
                  CommonActions.commondownload(
                    "/export/ptwAllocation",
                    "Export_PTWTask(" + dt + ").xlsx",
                  ),
                );
              }}
            ></Button>
          </div>
        }
        table={table}
        // filterAfter={onSubmit}
        tableName={"UserListTable"}
        handleSubmit={handleSubmit}
        data={dbConfigList}
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
        totalCount={dbConfigTotalCount}
        heading={"Total PTW Task :- "}
      />

      <Modal
        size={"sm"}
        modalHead={modalHead}
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
      >
        <ManageTaskForm
          isOpen={modalOpen}
          setIsOpen={setmodalOpen}
          resetting={isResetting}
          formValue={selectedData}
        />
      </Modal>
      <FileUploader
        isOpen={fileOpen}
        fileUploadUrl={""}
        onTableViewSubmit={onTableViewSubmit}
        setIsOpen={setFileOpen}
        tempbtn={true}
        tempbtnlink={["/template/Zone.xlsx", "Zone.xlsx"]}
      />
    </>
  );
};

export default PTWTaskAllocation;

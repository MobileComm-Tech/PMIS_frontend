import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import EditButton from "../../../../components/EditButton";
import AdvancedTable from "../../../../components/AdvancedTable";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import DeleteButton from "../../../../components/DeleteButton";
import CstmButton from "../../../../components/CstmButton";
import FileUploader from "../../../../components/FIleUploader";
import WccApproverForm from "./wccCdhApproverForm";
import WCCApproverAction from "../../../../store/actions/wccApprover-actions";
import CommonActions from "../../../../store/actions/common-actions";
import { Urls } from "../../../../utils/url";
import { objectToQueryString } from "../../../../utils/commonFunnction";
import { ALERTS } from "../../../../store/reducers/component-reducer";
// import {pagination} from "../../../../components/CommonObjectsAndVariables";
import AdminActions from "../../../../store/actions/admin-actions";
import { pagination } from "../../../../components/CommonObjectsAndVariables";
const WCCApprover = () => {
  const dispatch = useDispatch();
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  const [modalHead, setmodalHead] = useState(<></>);
  const [fileOpen, setFileOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [strValFil, setstrVal] = useState(false);
  const Data = useRef("");

  const [year] = useState(new Date().getFullYear());

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const refreshData = () => {
    const defaultArgs =
      objectToQueryString(pagination);
    dispatch(WCCApproverAction.WccApproverData(true, defaultArgs));
  };

  // let empList = useSelector((state) => {

  //   return state?.adminData?.getEmpNameList?.map((itm) => {
  //     return {
  //       label: itm?.empName,
  //       value: itm?.employeeId,
  //     };
  //   });
  // });

  const WccApproverList = useSelector((state) => {
    // console.log("Redux state:", state);
    const interdata = state?.wccApproverData?.WccApproverData || [];
    return interdata.map((itm) => ({
      ...itm,
      edit: (
        <CstmButton
          className="p-2"
          child={<EditButton name="" onClick={() => handleEditClick(itm)} />}
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
                        dispatch(
                          CommonActions.deleteApiCaller(
                            `${Urls.wccApprover}/${itm.uniqueId}`,
                            () => {
                              refreshData();
                              dispatch(ALERTS({ show: false }));
                            }
                          )
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
            ></DeleteButton>
          }
        />
      ),
    }));
  });

  const WccApproverTotalCount = useSelector((state) => {
    const interdata = state?.wccApproverData?.WccApproverData || [];
    return interdata.length > 0 ? interdata[0]["overall_table_count"] : 0;
  });

  const handleEditClick = (item) => {
    console.log(item,"kjhkhjh")
    setEditingItem(item);
    setmodalHead("Edit Approver");

    setmodalBody(
      <WccApproverForm
        isOpen={true}
        setIsOpen={setmodalOpen}
        resetting={false}
        formValue={item}
        filtervalue=""
        onSuccess={refreshData}
      />
    );

    setmodalOpen(true);
  };

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
        name: "Project Id",
        value: "projectId",
        style: "text-center min-w-[150px]",
      },
      
      { name: "Edit", value: "edit", style: "text-center min-w-[100px]" },
      { name: "Delete", value: "delete", style: "text-center min-w-[100px]" },
    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },
    filter: [
      {
        label: "Employee Name",
        type: "text",
        name: "empName",
        props: {},
      },
       {
        label: "Project Id",
        type: "text",
        name: "projectId",
        props: {},
      },
    ],
  };

  const onSubmit = (data) => {
    let value = data.reseter;
    delete data.reseter;
    let strVal = objectToQueryString(data);

    setstrVal(strVal);
    dispatch(
      WCCApproverAction.WccApproverData(
        true,
        strVal,
      )
    );
  };

  const onTableViewSubmit = (data) => {
    data["fileType"] = "cdh_wccApprover";
    dispatch(
      CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
        setFileOpen(false);
        dispatch(
          WCCApproverAction.WccApproverData(
            true,
          )
        );
      })
    );
  };

  const handleModalClose = () => {
    refreshData();

    setmodalOpen(false);
    setEditingItem(null);
    setmodalBody(<></>);
    setmodalHead(<></>);
  };

  useEffect(() => {
    refreshData();
    // dispatch(AdminActions.getEmpNameList(true));
  }, [dispatch]);

  return (
    <>
      <AdvancedTable
        headerButton={
          <div className="flex">
            <Button
              onClick={() => {
                setmodalHead("Add CDH Approver");
                setmodalBody(
                  <WccApproverForm
                    isOpen={true}
                    setIsOpen={setmodalOpen}
                    resetting={true}
                    formValue={{}}
                    year={year}
                    monthss={[]}
                    filtervalue=""
                    onSuccess={refreshData}
                  />
                );
                setmodalOpen(true);
              }}
              name="Add New"
              classes="w-auto mr-1"
            />
            <Button
              name="Upload File"
              classes="w-auto mr-1"
              onClick={() => setFileOpen(true)}
            />
            <Button
              name={"Export"}
              classes="w-auto mr-1"
              onClick={(e) => {
                dispatch(
                  CommonActions.commondownloadpost(
                    "/Export/cdh_approver?" + strValFil,
                    "Export WCC CDH Approver.xlsx",
                    "POST",
                  )
                );
              }}
            ></Button>
          </div>
        }
        table={table}
        filterAfter={onSubmit}
        tableName="Wcc CDH Approver Table"
        TableHeight="h-[68vh]"
        handleSubmit={handleSubmit}
        data={WccApproverList}
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
        totalCount={WccApproverTotalCount}
        heading="Total Count :-"
      />
      <Modal
        size="sm"
        modalHead={modalHead}
        children={modalBody}
        isOpen={modalOpen}
        setIsOpen={handleModalClose}
      />
      <FileUploader
        isOpen={fileOpen}
        fileUploadUrl={""}
        onTableViewSubmit={onTableViewSubmit}
        setIsOpen={setFileOpen}
        tempbtn={true}
        tempbtnlink={["/template/WCC_Approver.xlsx", "WCC CDH Approver.xlsx"]}
      />
    </>
  );
};

export default WCCApprover;

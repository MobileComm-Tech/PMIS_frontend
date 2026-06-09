import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import AdvancedTable from "../../../../components/AdvancedTable";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import EditButton from "../../../../components/EditButton";
import DeleteButton from "../../../../components/DeleteButton";
import CstmButton from "../../../../components/CstmButton";

import HrActions from "../../../../store/actions/hr-actions";
import CommonActions from "../../../../store/actions/common-actions";
import { ALERTS } from "../../../../store/reducers/component-reducer";
import { Urls } from "../../../../utils/url";

import CurrentUnbilledBucketForm from "./CurrentUnbilledBucketForm";

const CurrentUnbilledBucket = () => {
  const dispatch = useDispatch();

  const [modalOpen, setmodalOpen] = useState(false);
  const [modalHead, setmodalHead] = useState("");
  const [modalBody, setmodalBody] = useState(<></>);



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
    formState: { errors },
  } = useForm();

const dbConfigTotalCount = useSelector((state) => {
  const interdata = state?.hrReducer?.getCurrentUnbilledBucket || [];

  if (interdata.length > 0) {
    return interdata[0]?.overall_table_count || 0;
  }

  return 0;
});
  
  const bucketList = useSelector((state) => {
    let data = state?.hrReducer?.getCurrentUnbilledBucket || [];

    return data.map((itm) => ({
      ...itm,

      edit: (
        <CstmButton
          className={"p-2"}
          child={
            <EditButton
              onClick={() => {
                setmodalOpen(true);
                setmodalHead("Edit Current Unbilled Bucket");

                setmodalBody(
                  <CurrentUnbilledBucketForm
                    formValue={itm}
                    resetting={false}
                    setIsOpen={setmodalOpen}
                  />
                );
              }}
            />
          }
        />
      ),

      delete: (
        <CstmButton
          child={
            <DeleteButton
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
                              `${Urls.hr_unbilled_bucket}/${itm.uniqueId}`,
                              () => {
                                dispatch(
                                  HrActions.getCurrentUnbilledBucket()
                                );
                                dispatch(ALERTS({ show: false }));
                              }
                            )
                          );
                        }}
                      />,
                       <Button
                        classes="w-auto"
                        onClick={() => {
                          dispatch(ALERTS({ show: false }));
                        }}
                        name={"Cancel"}
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

  const table = {
    columns: [
      // {
      //   name: "SSID",
      //   value: "ssid",
      //   style: "min-w-[150px] text-center",
      // },
      {
        name: "Current Unbilled Bucket",
        value: "name",
        style: "min-w-[250px] text-center",
      },
      {
        name: "Edit",
        value: "edit",
        style: "min-w-[100px] text-center",
      },
      {
        name: "Delete",
        value: "delete",
        style: "min-w-[100px] text-center",
      },
    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },
  };

  useEffect(() => {
    dispatch(HrActions.getCurrentUnbilledBucket());
  }, []);

  return (
    <>
      <AdvancedTable
  table={table}
  data={bucketList}
  tableName={"CurrentUnbilledBucket"}
  register={register}
  handleSubmit={handleSubmit}
  setValue={setValue}
  getValues={getValues}
  errors={errors}
  heading={"Current Unbilled Bucket :- "}
  totalCount={dbConfigTotalCount}
  headerButton={
    <div className="flex gap-1">
      <Button
        name={"Add New"}
        classes={"w-auto"}
        onClick={() => {
          setmodalOpen(true);

          setmodalHead("Add Current Unbilled Bucket");

          setmodalBody(
            <CurrentUnbilledBucketForm
              formValue={{}}
              resetting={true}
              setIsOpen={setmodalOpen}
            />
          );
        }}
      />

      <Button
        name={"Export"}
        classes={"w-auto"}
        onClick={() => {
          dispatch(
            CommonActions.commondownload(
              "/export/unbilledBucket",
              `Current_Unbilled_Bucket(${dt}).xlsx`
            )
          );
        }}
      />
    </div>
  }
/>

<Modal
  size={"sm"}
  modalHead={modalHead}
  children={modalBody}
  isOpen={modalOpen}
  setIsOpen={setmodalOpen}
/>
    </>
  );
};

export default CurrentUnbilledBucket;
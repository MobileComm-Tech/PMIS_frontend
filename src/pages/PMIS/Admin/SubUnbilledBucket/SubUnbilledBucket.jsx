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

import SubUnbilledBucketForm from "./SubUnbilledBucketForm";

const SubUnbilledBucket = () => {
  const dispatch = useDispatch();

  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  const [modalHead, setmodalHead] = useState("");

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

  const bucketList = useSelector((state) => {
    const data = state?.hrReducer?.getSubUnbilledBucket || [];

    return data.map((itm) => ({
      ...itm,

      edit: (
        <CstmButton
          className={"p-2"}
          child={
            <EditButton
              onClick={() => {
                setmodalOpen(true);

                setmodalHead("Edit Sub Unbilled Bucket");

                setmodalBody(
                  <SubUnbilledBucketForm
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
                              `${Urls.hr_unbilled_sub_bucket}/${itm.uniqueId}`,
                              () => {
                                dispatch(
                                  HrActions.getSubUnbilledBucket()
                                );

                                dispatch(
                                  ALERTS({
                                    show: false,
                                  })
                                );
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

  const dbConfigTotalCount = useSelector((state) => {
    const data = state?.hrReducer?.getSubUnbilledBucket || [];

    if (data.length > 0) {
      return data[0]?.overall_table_count || 0;
    }

    return 0;
  });

  const table = {
    columns: [
      {
        name: "Sub Unbilled Bucket",
        value: "name",
        style: "min-w-[250px] text-center",
      },
      {
        name: "Edit",
        value: "edit",
        style: "min-w-[120px] text-center",
      },
      {
        name: "Delete",
        value: "delete",
        style: "min-w-[120px] text-center",
      },
    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },
    filter: [],
  };

  useEffect(() => {
    dispatch(HrActions.getSubUnbilledBucket());
  }, []);

  return (
    <>
      <AdvancedTable
        table={table}
        data={bucketList}
        tableName={"SubUnbilledBucket"}
        register={register}
        handleSubmit={handleSubmit}
        setValue={setValue}
        getValues={getValues}
        errors={errors}
        heading={"Sub Unbilled Bucket :- "}
        totalCount={dbConfigTotalCount}
        headerButton={
          <div className="flex gap-2">
            <Button
              name={"Add New"}
              classes={"w-auto"}
              onClick={() => {
                setmodalOpen(true);

                setmodalHead("Add Sub Unbilled Bucket");

                setmodalBody(
                  <SubUnbilledBucketForm
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
                    "/export/unbilledSubBucket",
                    `Sub_Unbilled_Bucket(${dt}).xlsx`
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

export default SubUnbilledBucket;
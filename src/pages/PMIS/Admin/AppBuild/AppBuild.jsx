
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import FileUploader from "../../../../components/FIleUploader";
import Button from "../../../../components/Button";
import AdvancedTable from "../../../../components/AdvancedTable";

import appUpdateAction from "../../../../store/actions/AppUpdateAction";
import CommonActions from "../../../../store/actions/common-actions";

import { objectToQueryString } from "../../../../utils/commonFunnction";
import { Urls } from "../../../../utils/url";

import { pagination } from "../../../../components/CommonObjectsAndVariables";
import CustomModal from "./CustomModal";

const AppBuild = () => {
  const dispatch = useDispatch();
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  const [modalHead, setmodalHead] = useState(<></>);
  const [year] = useState(new Date().getFullYear());
  const Data = useRef("");

  const getAppUpdateData = useSelector(
    (state) => state.appUpdateReducer.getAppUpdate
  );

  const totalCount = Array.isArray(getAppUpdateData)
    ? getAppUpdateData.length
    : 0;

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const refreshData = () => {
    const defaultArgs = objectToQueryString(pagination);
    dispatch(appUpdateAction.getAppUpdateData(true, defaultArgs));
  };

  const table = {
    columns: [
      {
        name: "Version",
        value: "version",
        style: "text-center min-w-[150px]",
      },
      {
        name: "App Build",
        value: "appBuild",
        style: "text-center min-w-[200px]",
        render: (row) => (
          <a
            href={row.appBuild}
            download
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download APK
          </a>
        ),
      },
    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },
    filter: [],
  };

  const onSubmit = (data) => {
    delete data.reseter;
    const strVal = objectToQueryString(data);
    dispatch(appUpdateAction.getAppUpdateData(true, strVal));
  };

  const onTableViewSubmit = (data) => {
    data["fileType"] = "APP_BUILD_FILE";
    dispatch(
      CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
        setmodalOpen(false);
        refreshData();
      })
    );
  };

  const handleModalClose = () => {
    refreshData();
    setmodalOpen(false);
    setmodalBody(<></>);
    setmodalHead(<></>);
  };

  useEffect(() => {
    refreshData();
  }, []);

  useEffect(() => {
    console.log("Fetched App Update Data:", getAppUpdateData);
  }, [getAppUpdateData]);

  return (
    <>
      <AdvancedTable
        headerButton={
          <div className="flex">
            <Button
              name="Upload File"
              classes="w-auto mr-1"
              onClick={() => {
                setmodalHead("Upload File");
                setmodalBody(
                  <div className="flex space-x-4">
                    <div className="flex-1 border p-4 rounded shadow-sm">
                      <h3 className="font-semibold mb-4">Upload APK</h3>
                      <FileUploader
                        onFileUpload={(fileData) => {
                          onTableViewSubmit({ file: fileData });
                        }}
                      />
                    </div>

                    <div className="flex-1 border p-4 rounded shadow-sm">
                      <h3 className="font-semibold mb-4">App Build Info</h3>
                      <p>Current Year: {year}</p>
                      <p>Total Records: {totalCount}</p>
                    </div>
                  </div>
                );
                setmodalOpen(true);
              }}
            />
          </div>
        }
        table={table}
        filterAfter={onSubmit}
        tableName=""
        TableHeight="h-[68vh]"
        handleSubmit={handleSubmit}
        data={getAppUpdateData || []}
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
        totalCount={totalCount}
        heading="Total Count :-"
      />

      <CustomModal
        isOpen={modalOpen}
        setIsOpen={handleModalClose}
        modalHead={modalHead}
      >
        {modalBody}
      </CustomModal>
    </>
  );
};

export default AppBuild;

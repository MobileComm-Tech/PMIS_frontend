import AdvancedTable from "../../../../components/AdvancedTable";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import ConditionalButton from "../../../../components/ConditionalButton";
import FileUploader from "../../../../components/FIleUploader";

import {
  getAccessType,
  objectToQueryString,
} from "../../../../utils/commonFunnction";

import { Urls } from "../../../../utils/url";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddApproverForm = ({ onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("FORM DATA (UI ONLY)", data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 px-2">
        {/* Customer Name */}
        <div>
          <label className="block text-white text-sm mb-1">
            Customer Name <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full h-10 rounded-md px-3 bg-white text-black"
            {...register("customerId", { required: true })}
          >
            <option value="">Select</option>
          </select>
        </div>

        {/* Emp Name */}
        {/* <div>
          <label className="block  text-white text-sm mb-1">
            Emp Name <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full h-10 rounded-md px-3 bg-white text-black"
            {...register("empId", { required: true })}
          >
            <option value="">Select</option>
          </select>
        </div> */}

        {/* Project Type */}
        <div>
          <label className="block text-white text-sm mb-1">
            Project Type <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full h-10 rounded-md px-3 bg-white text-black"
            {...register("projectTypeId", { required: true })}
          >
            <option value="">Select</option>
          </select>
        </div>

        {/* Project Group */}
        <div>
          <label className="block text-white text-sm mb-1">
            Sub Project <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full h-10 rounded-md px-3 bg-white text-black"
            {...register("projectGroupId", { required: true })}
          >
            <option value="">Select</option>
          </select>
        </div>

               <div>
          <label className="block text-white text-sm mb-1">
            Work Description <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full h-10 rounded-md px-3 bg-white text-black"
            {...register("workDescription", { required: true })}
          >
            <option value="">Select</option>
          </select>
        </div>

        {/* Circle */}
        {/* <div>
          <label className="block  text-white text-sm mb-1">
            Circle <span className="text- red-500">*</span>
          </label>
          <select
            className="w-full h-10 rounded-md px-3 bg-white text-black"
            {...register("circleId", { required: true })}
          >
            <option value="">Select</option>
          </select>
        </div> */}

        {/* SAT */}
        <div>
          <label className="block text-white text-sm mb-1">
            SAT <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full h-10 rounded-md px-3 bg-white text-black"
            {...register("sat")}
          >
            <option value="">Select</option>
            <option value="YES">Yes</option>
            <option value="NO">No</option>
          </select>
        </div>

        {/* PAT */}
        <div>
          <label className="block text-white text-sm mb-1">
            PAT <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full h-10 rounded-md px-3 bg-white text-black"
            {...register("pat")}
          >
            <option value="">Select</option>
            <option value="YES">Yes</option>
            <option value="NO">No</option>
          </select>
        </div>

        {/* OCI */}
        <div>
          <label className="block text-white text-sm mb-1">
            OCI <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full h-10 rounded-md px-3 bg-white text-black"
            {...register("oci")}
          >
            <option value="">Select</option>
            <option value="YES">Yes</option>
            <option value="NO">No</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <Button
          name="Submit"
          type="submit"
          classes="px-4 py-1.5 text-sm w-auto"
        />
      </div>
    </form>
  );
};

const Compliance = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  // const [modalHead, setmodalHead] = useState(<></>);
  // const [addModalOpen, setAddModalOpen] = useState(false);
  // const [modalBody, setmodalBody] = useState(null);
  const [modalHead, setmodalHead] = useState("");

  // dropdown data
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [projectTypes, setProjectTypes] = useState([]);
  const [projectGroups, setProjectGroups] = useState([]);
  const [circles, setCircles] = useState([]);

  const [fileOpen, setFileOpen] = useState(false);
  const [fileOpen2, setFileOpen2] = useState(false);
  const [fileOpen3, setFileOpen3] = useState(false);
  const [strVal, setstrVal] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

 
  const table = {
    columns: [
      {
        name: "Customer",
        value: "empName",
        style:
          "min-w-[200px] max-w-[200px] font-extrabold text-center sticky left-0 bg-[#3e454d]",
      },
      {
        name: "Project Type",
        value: "empCode",
        style:
          "min-w-[150px] max-w-[450px] text-center sticky left-[199px] bg-[#3e454d]",
      },
      {
        name: "Sub Project",
        value: "email",
        style: "min-w-[250px] max-w-[450px] text-center",
      },
      {
        name: "Work Description",
        value: "mobile",
        style: "min-w-[120px] max-w-[450px] text-center",
      },
      {
        name: "PAT",
        value: "designationName",
        style: "min-w-[100px] max-w-[450px] text-center",
      },
      {
        name: "SAT",
        value: "userRoleName",
        style: "min-w-[120px] max-w-[450px] text-center",
      },
      {
        name: "OCI",
        value: "status",
        style: "min-w-[100px] max-w-[450px] text-center",
      },
      // ...(shouldIncludeEditColumn
         {
              name: "Edit",
              value: "edit",
              style: "min-w-[100px] max-w-[200px] text-center",
            },
            {
              name: "Delete",
              value: "delete",
              style: "min-w-[100px] max-w-[100px] text-center",
            },
    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },
    filter: [
      {
        label: "EMP Name",
        type: "text",
        name: "empName",
      },
      {
        label: "EMP Code",
        type: "text",
        name: "empCode",
      },
      {
        label: "Status",
        type: "select",
        name: "status",
        option: [
          { label: "Active", value: "Active" },
          { label: "Resign", value: "Resign" },
          { label: "Abscond", value: "Abscond" },
          { label: "Exit", value: "Exit" },
        ],
      },
    ],
  };

  /* ===========================
     FILTER SUBMIT (API OFF)
  =========================== */
  const onSubmit = (data) => {
    const qs = objectToQueryString(data);
    setstrVal(qs);
    // ❌ API CALL DISABLED
  };

  /* ===========================
     FILE UPLOAD (UI ONLY)
  =========================== */
  const onTableViewSubmit = () => setFileOpen(false);
  const onTableViewSubmit2 = () => setFileOpen2(false);
  const onTableViewSubmit3 = () => setFileOpen3(false);

  /* ===========================
     NO API ON LOAD
  =========================== */
  useEffect(() => {
    // API intentionally disabled
  }, []);

  return (
    <>
      <AdvancedTable
        headerButton={
          <div className="flex">
            <ConditionalButton
              showType={getAccessType("Add New(ManageEmployee)")}
              classes="w-auto mr-1"
              // onClick={() => navigate("/empdetails")}
              onClick={() => {
                setmodalHead("Add Compliance");
                setmodalBody(
                  <AddApproverForm onClose={() => setmodalOpen(false)} />
                );
                setmodalOpen(true);
              }}
              name={"Add New"}
            />
            <ConditionalButton
              showType={getAccessType("Upload(ManageEmployee)")}
              name={"Upload File"}
              classes="w-auto mr-1"
              onClick={() => setFileOpen(true)}
            />
            <ConditionalButton
              showType={getAccessType("Upgrade(ManageEmployee)")}
              name={"Export"}
              classes="w-auto mr-1"
              onClick={() => setFileOpen2(true)}
            />
          </div>
        }
        table={table}
        filterAfter={onSubmit}
        tableName={"ManageEmployee"}
        handleSubmit={handleSubmit}
        data={[]} // ✅ EMPTY TABLE
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
        // totalCount={totalCount} // ✅ ZERO
        // checkboxshow={shouldIncludeEditColumn}
        exportButton={false}
        heading={"Total Count:-"}
      />

      <Modal
        size={"sm"}
        modalHead={modalHead}
        children={modalBody}
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
      />

      <FileUploader
        isOpen={fileOpen}
        onTableViewSubmit={onTableViewSubmit}
        setIsOpen={setFileOpen}
        tempbtn={true}
        tempbtnlink={["/template/ManageEmployee.xlsx", "ManageEmployee.xlsx"]}
        head={"Upload File"}
      />

      <FileUploader
        isOpen={fileOpen2}
        onTableViewSubmit={onTableViewSubmit2}
        setIsOpen={setFileOpen2}
        tempbtn={true}
        tempbtnlink={["/template/ManageEmployee.xlsx", "ManageEmployee.xlsx"]}
        head={"Upload Upgrade File"}
      />

      <FileUploader
        isOpen={fileOpen3}
        onTableViewSubmit={onTableViewSubmit3}
        setIsOpen={setFileOpen3}
        tempbtn={true}
        tempbtnlink={[
          "/template/UpgradeEmployee2.xlsx",
          "UpgradeEmployee2.xlsx",
        ]}
        head={"Upload Upgrade File"}
      />
    </>
  );
};

export default Compliance;

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import Modal from "../../../../components/Modal";
import CommonForm from "../../../../components/CommonForm";
import Button from "../../../../components/Button";

const ComplianceForm = ({
  isOpen,
  setIsOpen,
  resetting,
  formValue = {},
  onSuccess,
}) => {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedProjectTypeName, setSelectedProjectTypeName] = useState("");
  const [selectedProjectGroup, setSelectedProjectGroup] = useState("");
  const [modalOpen, setmodalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditMode = Object.entries(formValue).length > 0 && !resetting;

  /* ================= FORM CONFIG (UI SAME) ================= */
  let Form = [
    {
      label: "Customer",
      value: "",
      name: "customer",
      type: "select",
      option: [], // EMPTY (API REMOVED)
      required: true,
      props: {
        onChange: (e) => {
          setSelectedCustomer(e?.target?.value);
        },
      },
    },
    {
      label: "Project Type",
      value: "",
      name: "projectType",
      type: "select",
      option: [], // EMPTY
      required: true,
    },
    {
      label: "Sub Project",
      value: "",
      name: "subProject",
      type: "select",
      option: [], // EMPTY
      required: true,
      props: {
        onChange: (e) => {
          let selectedIndex = e?.target?.selectedIndex;
          setSelectedProjectTypeName(e?.target?.options[selectedIndex]?.text);
        },
      },
    },
    {
      label: "Work Decription",
      value: "",
      name: "workDescription",
      type: "select",
      option: [], // EMPTY
      required: true,
      props: {
        onChange: (e) => {
          setSelectedProjectGroup(e?.target?.value);
        },
      },
    },
    {
      label: "SAT",
      value: "",
      name: "sat",
      type: "select",
      option: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      required: true,
    },
    {
      label: "PAT",
      value: "",
      name: "pat",
      type: "select",
      option: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      required: true,
    },
    {
      label: "OCI",
      value: "",
      name: "oci",
      type: "select",
      option: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      required: true,
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  /* ================= SUBMIT (NO API) ================= */
  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      console.log("UI FORM DATA :", {
        ...data,
        projectTypeName: selectedProjectTypeName,
      });

      if (onSuccess) onSuccess();
      if (setIsOpen) setIsOpen(false);

      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const onTableViewSubmit = (data) => {
    onSubmit(data);
  };

  /* ================= RESET / EDIT MODE ================= */
  useEffect(() => {
    if (resetting) {
      reset({});
      Form.forEach((field) => {
        setValue(field.name, field.value);
      });
    } else if (isEditMode) {
      reset({});
      Form.forEach((field) => {
        if (["endAt", "startAt"].includes(field.name)) {
          const momentObj = moment(formValue[field.name]);
          setValue(field.name, momentObj.toDate());
        } else {
          setValue(field.name, formValue[field.name]);
        }
      });
    }
  }, [formValue, resetting]);

  return (
    <>
      <Modal
        size={"xl"}
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
        children={
          <CommonForm
            classes={"grid-cols-1 gap-1"}
            Form={Form}
            errors={errors}
            register={register}
            setValue={setValue}
            getValues={getValues}
          />
        }
      />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">
        <CommonForm
          classes={"grid-cols-2 gap-1"}
          Form={Form}
          errors={errors}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />

        <Button
          classes={"mt-2 w-sm text-center flex mx-auto"}
          onClick={handleSubmit(onTableViewSubmit)}
          name={
            isSubmitting ? "Submitting..." : isEditMode ? "Update" : "Submit"
          }
          disabled={isSubmitting}
        />
      </div>
    </>
  );
};

export default ComplianceForm;

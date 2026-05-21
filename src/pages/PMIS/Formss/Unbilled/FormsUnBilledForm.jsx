import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CommonForm from "../../../../components/CommonForm";
import Button from "../../../../components/Button";
import { useDispatch } from "react-redux";
import FormssActions from "../../../../store/actions/formss-actions";
import moment from "moment";
const FormsUnBilledForm = ({ setIsOpen, formValue = {}, refreshQuery }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const isEditMode = Object.entries(formValue).length > 0;
  const ms1Value = watch("unbilledMs1Done");
  const ms2Value = watch("unbilledMs2Done");

  const today = moment().format("YYYY-MM-DD");
  const Form = [
    {
      label: "Customer",
      name: "customer",
      type: "text",
      required: true,
    },
    {
      label: "Circle",
      name: "circle",
      type: "text",
      required: true,
    },
    {
      label: "Project Group",
      name: "projectGroup",
      type: "text",
      required: true,
    },
    {
      label: "Project Type",
      name: "projectType",
      type: "text",
      required: true,
    },
    {
      label: "Project ID",
      name: "projectId",
      type: "text",
      required: true,
    },
    {
      label: "Sub Project",
      name: "subProject",
      type: "text",
      required: true,
    },
    {
      label: "SSID",
      name: "systemId",
      type: "text",
    },
    {
      label: "Site Id",
      name: "siteId",
      type: "text",
    },
    // {
    //   label: "MS1 Completion Date",
    //   name: "ms1CompletionDate",
    //   type: "date",
    // },

    {
      label: "MS1 Completion Date",
      name: "ms1CompletionDate",
      type: "datetime",
      value: "",
      props: {
        maxSelectableDate: today,
        onChange: (e) => {
          // console.log(e.target.value);
        },
      },
      required: true,
      classes: "col-span-1",
    },

    // {
    //   label: "MS2 Completion Date",
    //   name: "ms2CompletionDate",
    //   type: "datetime",
    //   value: "",
    //   props: {
    //     minSelectableDate: today,
    //     onChange: (e) => {},
    //   },
    //   required: true,
    //   classes: "col-span-1",
    // },
    {
  label: "MS2 Completion Date",
  name: "ms2CompletionDate",
  type: "datetime",
  // required: true,
  classes: "col-span-1",
 props: {
    minSelectableDate: isEditMode ? null : today,
    onChange: (e) => {
      if (!e.target.value) {
        setValue("ms2CompletionDate", "");
      }
    },
  },
},

    {
      label: "Unbilled MS1 Done",
      name: "unbilledMs1Done",
      type: "number",
    },
    {
      label: "Unbilled MS2 Done",
      name: "unbilledMs2Done",
      type: "number",
    },

    {
      label: "Total Unbilled",
      name: "totalUnbilled",
      type: "text",
    },
    {
      label: "Customer Project Type",
      name: "customerProjectType",
      type: "text",
    },
    {
      label: "Final Ageing",
      name: "finalAgeing",
      type: "text",
    },
    {
      label: "YEAR",
      name: "year",
      type: "text",
    },
    {
      label: "Current Unbilled Bucket",
      name: "currentUnbilledBucket",
      type: "text",
    },
    {
      label: "Unbilled Sub-Bucket",
      name: "unbilledSubBucket",
      type: "text",
    },
  ];

  // const onSubmit = (data) => {
  //   const finalData = {
  //     ...data,
  //     uniqueId: formValue?.uniqueId,
  //   };

  //   dispatch(
  //     FormssActions.postFormsUnBilled(
  //       finalData,
  //       () => {
  //         dispatch(FormssActions.getFormsUnBilled());
  //         setIsOpen(false);
  //       },
  //       formValue?.uniqueId
  //     )
  //   );
  // };

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      uniqueId: formValue?.uniqueId,
    };

   dispatch(
  FormssActions.postFormsUnBilled(
    finalData,
    () => {
      setIsOpen(false);

      dispatch(
        FormssActions.getFormsUnBilled(
          true,
          refreshQuery || "page=1&limit=50"
        )
      );
    },
    formValue?.uniqueId
  )
);
  };

// REPLACE with:
useEffect(() => {
  if (formValue?.uniqueId) {
    Form.forEach((field) => {
      if (["ms1CompletionDate", "ms2CompletionDate"].includes(field.name)) {
        const raw = formValue[field.name];
        if (raw) {
          const parsed = moment(raw, ["DD/MM/YYYY", "YYYY-MM-DD", "YYYY-MM-DDTHH:mm"]);
          setValue(field.name, parsed.isValid() ? parsed.format("YYYY-MM-DDTHH:mm") : "");
        }
        // No setValue when raw is empty — preserves user's cleared state
      } else {
        setValue(field.name, formValue[field.name] || "");
      }
    });
  }
}, []);  // ← empty array: runs only on mount, never overrides user input

  useEffect(() => {
    const total = (Number(ms1Value) || 0) + (Number(ms2Value) || 0);

    setValue("totalUnbilled", total);
  }, [ms1Value, ms2Value, setValue]);

  return (
    <div className="mt-5">
      <CommonForm
        classes={"grid-cols-2 gap-2"}
        Form={Form}
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
      />

      <Button
        classes={"mt-4 w-sm text-center flex mx-auto"}
        onClick={handleSubmit(onSubmit)}
        name={isEditMode ? "Update" : "Submit"}
      />
    </div>
  );
};

export default FormsUnBilledForm;

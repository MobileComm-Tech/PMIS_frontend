// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import moment from "moment";
// import Modal from "../../../../components/Modal";
// import CommonForm from "../../../../components/CommonForm";
// import Button from "../../../../components/Button";
// import { useDispatch, useSelector } from "react-redux";
// import AdminActions from "../../../../store/actions/admin-actions";
// import {
//   checkArray,
//   checkVariable,
// } from "../../../../components/CommonObjectsAndVariables";
// import { labelToValue } from "../../../../utils/commonFunnction";

// const ComplianceForm = ({
//   isOpen,
//   setIsOpen,
//   resetting,
//   formValue = {},
//   onSuccess,
//   modalBody,
// }) => {
//   const [selectedCustomer, setSelectedCustomer] = useState("");
//   const [selectedProjectTypeName, setSelectedProjectTypeName] = useState("");
//   const [selectedProjectGroup, setSelectedProjectGroup] = useState("");
//   const [modalOpen, setmodalOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const isEditMode = Object.entries(formValue).length > 0 && !resetting;

//   // console.log(formValue?.uniqueId,"___formValue__")

//   const dispatch = useDispatch();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     getValues,
//     formState: { errors },
//     watch,
//   } = useForm();

//   console.log(modalBody, "__isOpne");

//   // CustomerData Starts here
//   useEffect(() => {
//     console.log("this is running");

//     dispatch(AdminActions.getCustomer());
//   }, [modalBody]);

//   const customersData = useSelector((state) => state?.adminData?.getCustomer);

//   const selectedCustomerOption = watch("customerId");
//   // console.log(selectedCustomerOption,"__selectedCustomerOption__")

//   // CustomerData Ends here

//   // Project Type Data Starts here
//   useEffect(() => {
//     console.log(
//       checkVariable(selectedCustomerOption),
//       "___selectedCustomerOption__",
//     );
//     if (checkVariable(selectedCustomerOption)) {
//       dispatch(
//         AdminActions.compliance_ProjectType(
//           true,
//           `customerId=${selectedCustomerOption}`,
//         ),
//       );
//     }
//   }, [selectedCustomerOption]);

//   const projectTypeData = useSelector(
//     (state) => state?.adminData?.getComplianceProjectType,
//   );
//   // console.log(projectTypeData,"___projectTypeData_")
//   // Project Type Data Ends here

//   // Sub Project Data Starts here
//   const selectedProjectTypeOption = watch("projectType");
//   //  console.log(selectedProjectTypeOption,"__selectedProjectTypeOption_")

//   useEffect(() => {
//     if (checkVariable(selectedProjectTypeOption)) {
//       dispatch(
//         AdminActions.compliance_SubProject(
//           true,
//           `customerId=${selectedCustomerOption}&projectType=${selectedProjectTypeOption?.split(",")[0]}`,
//         ),
//       );
//     }
//   }, [selectedProjectTypeOption]);

//   const subProjectData = useSelector(
//     (state) => state?.adminData?.getComplianceSubProject,
//   );
//   // console.log(subProjectData,"___subProjectData__")
//   // Sub Project Data Ends here

//   // Work description data starts here

//   useEffect(() => {
//     if (checkVariable(selectedCustomerOption)) {
//       dispatch(
//         AdminActions.compliance_WorkDescription(
//           true,
//           `customerId=${selectedCustomerOption}`,
//         ),
//       );
//     }
//   }, [selectedCustomerOption]);

//   const workDescriptionData = useSelector(
//     (state) => state?.adminData?.getComplianceWorkDescription,
//   );
//   // console.log(workDescriptionData,"___workDescriptionData__")
//   // Work description data ends here

//   // MS LIst starts here
//   useEffect(() => {
//     dispatch(AdminActions.getMsList());
//   }, []);

//   const msListData = useSelector((state) => state?.adminData?.getMsList);
//   // console.log(msListData,"___msListData__")
//   // MS LIst ends here

//   let Form = [
//     {
//       label: "Customer",
//       value: "",
//       name: "customerId",
//       type: "select",
//       option: checkArray(customersData)
//         ? customersData?.map((itm) => {
//             return { label: itm?.customerName, value: itm?.customerId };
//           })
//         : [],
//       required: true,
//       props: {
//         onChange: (e) => {
//           setSelectedCustomer(e?.target?.value);
//         },
//       },
//     },
//     {
//       label: "Project Type",
//       value: "",
//       name: "projectType",
//       type: "select",
//       option: checkArray(projectTypeData)
//         ? projectTypeData?.map((itm) => {
//             return {
//               label: itm?.projectType,
//               value: itm?.projectType + "," + itm?.projectTypeId,
//             };
//           })
//         : [],
//       required: true,
//     },
//     {
//       label: "Sub Project",
//       value: "",
//       name: "subProjectId",
//       type: "select",
//       option: checkArray(subProjectData)
//         ? subProjectData?.map((itm) => {
//             return { label: itm?.subProject, value: itm?.subProjectId };
//           })
//         : [],
//       required: true,
//       props: {
//         onChange: (e) => {
//           let selectedIndex = e?.target?.selectedIndex;
//           setSelectedProjectTypeName(e?.target?.options[selectedIndex]?.text);
//         },
//       },
//     },
//     {
//       label: "Work Decription",
//       value: "",
//       name: "workDescription",
//       type: "select",
//       option: checkArray(workDescriptionData)
//         ? workDescriptionData?.map((itm) => {
//             return { label: itm?.workDescription, value: itm?.workDescription };
//           })
//         : [],
//       required: true,
//       props: {
//         onChange: (e) => {
//           setSelectedProjectGroup(e?.target?.value);
//         },
//       },
//     },
//     {
//       label: "MS List",
//       value: "",
//       name: "msList",
//       type: "select",
//       option: checkArray(msListData)
//         ? msListData?.map((itm) => {
//             return { label: itm?.milestone, value: itm?.milestone };
//           })
//         : [],
//       required: true,
//       props: {
//         onChange: (e) => {
//           setSelectedProjectGroup(e?.target?.value);
//         },
//       },
//     },
//     {
//       label: "CDH",
//       value: "",
//       name: "cdh",
//       type: "select",
//       option: [
//         { label: "Yes", value: "YES" },
//         { label: "No", value: "NO" },
//       ],
//       required: true,
//     },

//     {
//       label: "SCFT",
//       value: "",
//       name: "scft",
//       type: "select",
//       option: [
//         { label: "Yes", value: "YES" },
//         { label: "No", value: "NO" },
//       ],
//       required: true,
//     },
//     {
//       label: "PAT",
//       value: "",
//       name: "pat",
//       type: "select",
//       option: [
//         { label: "Yes", value: "YES" },
//         { label: "No", value: "NO" },
//       ],
//       required: true,
//     },
//     {
//       label: "OCI",
//       value: "",
//       name: "oci",
//       type: "select",
//       option: [
//         { label: "Yes", value: "YES" },
//         { label: "No", value: "NO" },
//       ],
//       required: true,
//     },
//     {
//       label: "EMF",
//       value: "",
//       name: "emf",
//       type: "select",
//       option: [
//         { label: "Yes", value: "YES" },
//         { label: "No", value: "NO" },
//       ],
//       required: true,
//     },
//   ];

//   // /* ================= SUBMIT (NO API) ================= */
//   // const onSubmit = async (data) => {
//   //   try {
//   //     setIsSubmitting(true);

//   //     console.log("UI FORM DATA :", {
//   //       ...data,
//   //       projectTypeName: selectedProjectTypeName,
//   //     });

//   //     if (onSuccess) onSuccess();
//   //     if (setIsOpen) setIsOpen(false);

//   //     reset();
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };

//   const onTableViewSubmit = (data) => {
//     if (formValue?.uniqueId === undefined) {
//       const finalData = {
//         ...data,
//         projectType: data?.projectType?.split(",")[1],
//       };

//       dispatch(
//         AdminActions.postWccCompliance(
//           finalData,
//           () => {
//             dispatch(AdminActions.getWccCompiliance());
//           },
//           null,
//         ),
//       );
//     } else {
//       const finalData = {
//         ...data,
//         projectType: data?.projectType?.split(",")[1],
//       };

//       dispatch(
//         AdminActions.postWccCompliance(
//           finalData,
//           () => {
//             dispatch(AdminActions.getWccCompiliance());
//           },
//           formValue?.uniqueId,
//         ),
//       );
//     }

//     setIsOpen(false);
//   };

//   // user Data Edit Starts here
//   useEffect(() => {
//     console.log(formValue?.uniqueId, "___asdsdasd");
//     if (formValue?.uniqueId !== undefined) {
//       // reset({});
//       Form.forEach((key) => setValue(key.name, formValue[key.name] || ""));
//       setValue(
//         "projectType",
//         formValue?.projectType + "," + formValue?.projectTypeId,
//       );
//     } else {
//       // reset({});
//     }
//   }, [formValue]);
//   // user Data Edit Ends here

//   return (
//     <>
//       <Modal
//         size={"xl"}
//         isOpen={modalOpen}
//         setIsOpen={setmodalOpen}
//         children={
//           <CommonForm
//             classes={"grid-cols-1 gap-1"}
//             Form={Form}
//             errors={errors}
//             register={register}
//             setValue={setValue}
//             getValues={getValues}
//           />
//         }
//       />

//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">
//         <CommonForm
//           classes={"grid-cols-2 gap-1"}
//           Form={Form}
//           errors={errors}
//           register={register}
//           setValue={setValue}
//           getValues={getValues}
//         />

//         <Button
//           classes={"mt-2 w-sm text-center flex mx-auto"}
//           onClick={handleSubmit(onTableViewSubmit)}
//           name={
//             isSubmitting ? "Submitting..." : isEditMode ? "Update" : "Submit"
//           }
//           disabled={isSubmitting}
//         />
//       </div>
//     </>
//   );
// };

// export default ComplianceForm;
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import Modal from "../../../../components/Modal";
import CommonForm from "../../../../components/CommonForm";
import Button from "../../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import AdminActions from "../../../../store/actions/admin-actions";
import {
  checkArray,
  checkVariable,
} from "../../../../components/CommonObjectsAndVariables";
import { labelToValue } from "../../../../utils/commonFunnction";

const ComplianceForm = ({
  isOpen,
  setIsOpen,
  resetting,
  formValue = {},
  onSuccess,
  modalBody,
}) => {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedProjectTypeId, setSelectedProjectTypeId] = useState("");
  const [selectedProjectGroup, setSelectedProjectGroup] = useState("");
  const [modalOpen, setmodalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSubProjectId, setSelectedSubProjectId] = useState("");

  const isEditMode = Object.entries(formValue).length > 0 && !resetting;

  // console.log(formValue?.uniqueId,"___formValue__")

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
    watch,
  } = useForm();

  console.log(modalBody, "__isOpne");

  // CustomerData Starts here
  useEffect(() => {
    console.log("this is running");

    dispatch(AdminActions.getCustomer());
    dispatch(AdminActions.getMsList());
  }, [modalBody]);

  const customersData = useSelector((state) => state?.adminData?.getCustomer);

  // const selectedCustomerOption = watch('customerId');
  // // console.log(selectedCustomerOption,"__selectedCustomerOption__")

  // // CustomerData Ends here

  // // Project Type Data Starts here
  // useEffect(() => {
  //   console.log(
  //     checkVariable(selectedCustomerOption),
  //     '___selectedCustomerOption__',
  //   );
  //   if (checkVariable(selectedCustomerOption)) {
  //     setTimeout(() => {
  //       dispatch(
  //         AdminActions.compliance_ProjectType(
  //           true,
  //           `customerId=${selectedCustomerOption}`,
  //         ),
  //       );
  //     }, 1000);
  //   }
  // }, [selectedCustomerOption]);

  const projectTypeData = useSelector(
    (state) => state?.adminData?.getComplianceProjectType,
  );
  // // console.log(projectTypeData,"___projectTypeData_")
  // // Project Type Data Ends here

  // // Sub Project Data Starts here
  // const selectedProjectTypeOption = watch('projectType');
  // //  console.log(selectedProjectTypeOption,"__selectedProjectTypeOption_")

  // useEffect(() => {
  //   if (checkVariable(selectedProjectTypeOption)) {
  //     dispatch(
  //       AdminActions.compliance_SubProject(
  //         true,
  //         `customerId=${selectedCustomerOption}&projectType=${selectedProjectTypeOption?.split(',')[0]}`,
  //       ),
  //     );
  //   }
  // }, [selectedProjectTypeOption]);
  useEffect(() => {
    if (selectedCustomer && selectedProjectTypeId) {
      dispatch(
        AdminActions.compliance_SubProject(
          true,
          `customerId=${selectedCustomer}&projectType=${selectedProjectTypeId}`,
        ),
      );

      // reset subproject field
      setValue("subProjectId", "");
    }
  }, [selectedProjectTypeId]);
  const subProjectData = useSelector(
    (state) => state?.adminData?.getComplianceSubProject,
  );
  // // console.log(subProjectData,"___subProjectData__")
  // // Sub Project Data Ends here

  // // Work description data starts here

  // useEffect(() => {
  //   if (checkVariable(selectedCustomerOption)) {
  //     dispatch(
  //       AdminActions.compliance_WorkDescription(
  //         true,
  //         `customerId=${selectedCustomerOption}`,
  //       ),
  //     );
  //   }
  // }, [selectedCustomerOption]);

  const workDescriptionData = useSelector(
    (state) => state?.adminData?.getComplianceWorkDescription,
  );
  // console.log(workDescriptionData,"___workDescriptionData__")
  // Work description data ends here

  // MS LIst starts here
  // useEffect(() => {
  //   dispatch(AdminActions.getMsList());
  // }, []);
  useEffect(() => {
    if (selectedCustomer) {
      dispatch(
        AdminActions.compliance_ProjectType(
          true,
          `customerId=${selectedCustomer}`,
        ),
      );

      // 2️⃣ Work Description API
      dispatch(
        AdminActions.compliance_WorkDescription(
          true,
          `customerId=${selectedCustomer}`,
        ),
      );

      // ✅ Reset dependent fields
      setValue("projectType", "");
      setValue("subProjectId", "");
      setValue("workDescription", "");
    }
  }, [selectedCustomer]);
  const msListData = useSelector((state) => state?.adminData?.getMsList);
  // console.log(msListData,"___msListData__")
  // MS LIst ends here

  let Form = [
    // {
    //   label: "Customer",
    //   value: "",
    //   name: "customerId",
    //   type: formValue?.uniqueId ? "text" : "select",
    //   option: checkArray(customersData)
    //     ? customersData?.map((itm) => {
    //         return { label: itm?.customerName, value: itm?.customerId };
    //       })
    //     : [],
    //   required: true,
    //   props: {
    //     onChange: (e) => {
    //       setSelectedCustomer(e?.target?.value);
    //     },
    //   },
    // },
    {
      label: "Customer",
      value: "",
      name: "customerId",
      type: formValue?.uniqueId ? "text" : "select",
      option: checkArray(customersData)
        ? customersData?.map((itm) => ({
            label: itm?.customerName,
            value: itm?.customerId,
          }))
        : [],
      required: true,
      props: {
        readOnly: formValue?.uniqueId ? true : false,
        onChange: (e) => {
          setSelectedCustomer(e?.target?.value);
        },
      },
      disabled: formValue?.uniqueId ? true : false,
    },
    {
      label: "Project Type",
      value: "",
      name: "projectType",
      type: formValue?.uniqueId ? "text" : "select",
      option: checkArray(projectTypeData)
        ? projectTypeData?.map((itm) => {
            return {
              label: itm?.projectType,
              value: itm?.projectType + "," + itm?.projectTypeId,
            };
          })
        : [],
      required: true,
      props: {
        onChange: (e) => {
          const value = e.target.value;
          const projectTypeId = value.split(",")[1];

          setSelectedProjectTypeId(projectTypeId);
        },
      },
      disabled: formValue?.uniqueId ? true : false,
    },
    {
      label: "Sub Project",
      value: "",
      name: "subProjectId",
      type: formValue?.uniqueId ? "text" : "select",
      option: checkArray(subProjectData)
        ? subProjectData?.map((itm) => {
            return { label: itm?.subProject, value: itm?.subProjectId };
          })
        : [],
      required: true,
      disabled: formValue?.uniqueId ? true : false,
      // props: {
      //   onChange: (e) => {
      //     let selectedIndex = e?.target?.selectedIndex;
      //     setSelectedProjectTypeId(e?.target?.options[selectedIndex]?.text);
      //   },
      // },
    },
    {
      label: "Work Decription",
      value: "",
      name: "workDescription",
      type: formValue?.uniqueId ? "text" : "select",
      option: checkArray(workDescriptionData)
        ? workDescriptionData?.map((itm) => {
            return { label: itm?.workDescription, value: itm?.workDescription };
          })
        : [],
      required: true,
      props: {
        onChange: (e) => {
          setSelectedProjectGroup(e?.target?.value);
        },
      },
      disabled: formValue?.uniqueId ? true : false,
    },
    {
      label: "MS List",
      value: "",
      name: "msList",
      type: formValue?.uniqueId ? "text" : "select",
      option: checkArray(msListData)
        ? msListData?.map((itm) => {
            return { label: itm?.milestone, value: itm?.milestone };
          })
        : [],
      required: true,
      props: {
        onChange: (e) => {
          setSelectedProjectGroup(e?.target?.value);
        },
      },
      disabled: formValue?.uniqueId ? true : false,
    },
    {
      label: "CDH",
      value: "",
      name: "cdh",
      type: "select",
      option: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      required: true,
    },

    {
      label: "SCFT",
      value: "",
      name: "scft",
      type: "select",
      option: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      required: true,
    },
    {
      label: "PAT",
      value: "",
      name: "pat",
      type: "select",
      option: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      required: true,
    },
    {
      label: "OCI",
      value: "",
      name: "oci",
      type: "select",
      option: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      required: true,
    },
    {
      label: "EMF",
      value: "",
      name: "emf",
      type: "select",
      option: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      required: true,
    },
  ];

  // /* ================= SUBMIT (NO API) ================= */
  // const onSubmit = async (data) => {
  //   try {
  //     setIsSubmitting(true);

  //     console.log("UI FORM DATA :", {
  //       ...data,
  //       projectTypeName: selectedProjectTypeName,
  //     });

  //     if (onSuccess) onSuccess();
  //     if (setIsOpen) setIsOpen(false);

  //     reset();
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const onTableViewSubmit = (data) => {
    if (formValue?.uniqueId === undefined) {
      const finalData = {
        ...data,
        projectType: data?.projectType?.split(",")[1],
      };

      dispatch(
        AdminActions.postWccCompliance(
          finalData,
          () => {
            dispatch(AdminActions.getWccCompiliance());
          },
          null,
        ),
      );
    } else {
      const finalData = {
        ...data,
        projectType: data?.projectType?.split(",")[1],
        customerId: formValue?.customerId,
        // projectType: formValue?.projectType,
        subProjectId: formValue?.subProjectId,
        workDescription: formValue?.workDescription,
      };

      dispatch(
        AdminActions.postWccCompliance(
          finalData,
          () => {
            dispatch(AdminActions.getWccCompiliance());
          },
          formValue?.uniqueId,
        ),
      );
    }

    setIsOpen(false);
  };

  // user Data Edit Starts here
  // useEffect(() => {
  //   console.log(formValue, "___asdsdasd");
  //   if (formValue?.uniqueId !== undefined) {
  //     const staticFields = [
  //       "customerId",
  //       "cdh",
  //       "scft",
  //       "pat",
  //       "oci",
  //       "emf",
  //       "msList",
  //     ];
  //     // staticFields.forEach((name) => setValue(name, formValue[name] || ""));
  //     if (checkArray(customersData)) {
  //       const customerObj = customersData.find(
  //         (c) => c.customerId === formValue.customerId,
  //       );

  //       // 👀 Show NAME in UI
  //       setValue("customerId", customerObj?.customerName || "");

  //       // 🚀 Store ID separately
  //       setSelectedCustomer(formValue.customerId);
  //     }

  //     // 2. Fire all dependent API calls in parallel
  //     Promise.all([
  //       dispatch(
  //         AdminActions.compliance_ProjectType(
  //           true,
  //           `customerId=${formValue.customerId}`,
  //         ),
  //       ),
  //       dispatch(
  //         AdminActions.compliance_WorkDescription(
  //           true,
  //           `customerId=${formValue.customerId}`,
  //         ),
  //       ),
  //       dispatch(
  //         AdminActions.compliance_SubProject(
  //           true,
  //           `customerId=${formValue.customerId}&projectType=${formValue.projectTypeId}`,
  //         ),
  //       ),
  //     ]).then(() => {
  //       // 3. Set API-dependent fields after all calls resolve
  //       setValue(
  //         "projectType",
  //         `${formValue.projectType},${formValue.projectTypeId}`,
  //       );
  //       setValue("workDescription", formValue.workDescription || "");
  //       setValue("subProjectId", formValue.subProjectId || "");
  //     });
  //   } else {
  //     // reset({});
  //   }
  // }, [formValue]);
  useEffect(() => {
    if (formValue?.uniqueId !== undefined && checkArray(customersData)) {
      // ✅ Static fields
      const staticFields = ["cdh", "scft", "pat", "oci", "emf", "msList"];
      staticFields.forEach((name) => setValue(name, formValue[name] || ""));

      // ✅ Customer (show name, store ID)
      const customerObj = customersData.find(
        (c) => c.customerId === formValue.customerId,
      );

      setValue("customerId", customerObj?.customerName || "");
      setSelectedCustomer(formValue.customerId);

      // ✅ Store projectTypeId
      setSelectedProjectTypeId(formValue.projectTypeId);

      // ✅ APIs
      Promise.all([
        dispatch(
          AdminActions.compliance_ProjectType(
            true,
            `customerId=${formValue.customerId}`,
          ),
        ),
        dispatch(
          AdminActions.compliance_WorkDescription(
            true,
            `customerId=${formValue.customerId}`,
          ),
        ),
        dispatch(
          AdminActions.compliance_SubProject(
            true,
            `customerId=${formValue.customerId}&projectType=${formValue.projectTypeId}`,
          ),
        ),
      ]).then(() => {
        // Project Type (already handled)
        setValue("projectType", formValue.projectType);
        setSelectedProjectTypeId(formValue.projectTypeId);

        // Work Description
        setValue("workDescription", formValue.workDescription || "");

        // ✅ Sub Project (FIX)
        const subProjectObj = subProjectData.find(
          (sp) => sp.subProjectId === formValue.subProjectId,
        );

        setValue("subProjectId", subProjectObj?.subProject || "");
        setSelectedSubProjectId(formValue.subProjectId);
      });
    }
  }, [formValue, customersData]);
  // user Data Edit Ends here

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

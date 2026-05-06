// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import CommonForm from "../../../../components/CommonForm";
// import Button from "../../../../components/Button";
// import AdminActions from "../../../../store/actions/admin-actions";
// import { GET_MANAGE_CIRCLE } from "../../../../store/reducers/admin-reducer";
// import { GET_PTW_TASK } from "../../../../store/reducers/hr-reduces";
// import HrActions from "../../../../store/actions/hr-actions";

// const ManageTaskForm = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {
//   const dispatch = useDispatch();

//   const isEdit = !!formValue?.uniqueId;

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     getValues,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const selectedSubProject = watch("subProject");
//     const selectedCustomer = watch("customer");
//   const selectedProjectType = watch("projectType");

//   const ptwTaskList = useSelector((state) => state.hrReducer.getPTWTask || []);

//   const customerList = useSelector((state) =>
//     (state?.adminData?.getManageCustomer || []).map((itm) => ({
//       label: itm?.customerName,
//       value: itm?.uniqueId,
//     })),
//   );

//   let selectedData = [];

//   if (selectedSubProject !== undefined) {
//     selectedData = ptwTaskList.find(
//       (item) => item.subProject === selectedSubProject,
//     );
//   }

//   const projectList = [
//     ...new Map(
//       ptwTaskList.map((item) => [
//         item.projectType,
//         { label: item.projectType, value: item.projectType },
//       ]),
//     ).values(),
//   ];

//   const subProjectList = [
//     ...new Map(
//       ptwTaskList.map((item) => [
//         item.subProject,
//         { label: item.subProject, value: item.subProject },
//       ]),
//     ).values(),
//   ];

//   const milestoneList =
//     selectedData?.MileStone?.filter((ms) => ms?.fieldName)?.map((ms) => ({
//       name: ms.fieldName,
//       id: ms.fieldName,
//     })) || [];
//   console.log(milestoneList, "___milestoneList");

//   useEffect(() => {
//     dispatch(AdminActions.getManageCustomer());
//   }, []);

//   useEffect(() => {
//     if (!isEdit) return;

//     if (
//       formValue?.customer &&
//       formValue?.projectType &&
//       formValue?.subProject
//     ) {
//       dispatch(
//         HrActions.getPTWTask(
//           true,
//           formValue.customer,
//           `projectType=${formValue.projectType}&subProject=${formValue.subProject}`,
//         ),
//       );
//     }
//     console.log(formValue?.msList, "___forva");

//     reset({
//       customer: formValue?.customerName || "",
//       projectType: formValue?.projectType || "",
//       subProject: formValue?.subProject || "",
//       // milestone:
//       //   [
//       //     {
//       //       name: formValue?.msList,
//       //       id: formValue?.msList,
//       //     },
//       //   ] || "",
//     });

//     // if (formValue?.customer) {
//     //   dispatch(HrActions.getPTWTask(true, formValue.customer));
//     // }

//     // if (formValue?.customer && formValue?.projectType) {
//     //   dispatch(
//     //     HrActions.getPTWTask(
//     //       true,
//     //       formValue.customer,
//     //       `projectType=${formValue.projectType}`,
//     //     ),
//     //   );
//     // }
//   }, [formValue?.uniqueId]);

//   const Form = [
//     {
//       label: "Customer Name",
//       name: "customer",
//       type: formValue?.uniqueId !== undefined ? "text" : "select",
//       required: true,
//       disabled: formValue?.uniqueId !== undefined ? true : false,
//       option: customerList,
//       props: {
//         onChange: (e) => {
//           const value = e.target.value;

//           if (value) {
//             dispatch(HrActions.getPTWTask(true, value));
//           } else {
//             dispatch(GET_MANAGE_CIRCLE({ dataAll: [], reset: true }));
//             dispatch(GET_PTW_TASK({ dataAll: [], reset: true }));
//           }

//           setValue("projectType", "");
//           setValue("subProject", "");
//           setValue("milestone", "");
//         },
//       },
//     },

//     {
//       label: "Project Type",
//       name: "projectType",
//       type: formValue?.uniqueId !== undefined ? "text" : "select",
//       required: true,
//       disabled: formValue?.uniqueId !== undefined ? true : false,
//       option: projectList,
//       props: {
//         onChange: (e) => {
//           const value = e.target.value;

//           if (value && selectedCustomer) {
//             dispatch(
//               HrActions.getPTWTask(
//                 true,
//                 selectedCustomer,
//                 `projectType=${value}`,
//               ),
//             );
//           }

//           setValue("subProject", "");
//           setValue("milestone", "");
//         },
//       },
//     },

//     {
//       label: "Sub Project",
//       name: "subProject",
//       type: formValue?.uniqueId !== undefined ? "text" : "select",
//       required: true,
//       disabled: formValue?.uniqueId !== undefined ? true : false,
//       option: subProjectList,
//       props: {
//         onChange: (e) => {
//           const value = e.target.value;

//           if (value && selectedCustomer && selectedProjectType) {
//             dispatch(
//               HrActions.getPTWTask(
//                 true,
//                 selectedCustomer,
//                 `projectType=${selectedProjectType}&subProject=${value}`,
//               ),
//             );
//           }

//           setValue("milestone", "");
//         },
//       },
//     },

//     {
//       label: "Milestone List",
//       name: "milestone",
//       type: "BigmuitiSelect",

//       option: milestoneList,
//       required: true,
//       width: "350px",
//     },
//   ];

//   const onSubmit = (data) => {
//     const selected = ptwTaskList.find(
//       (item) => item.subProject === data.subProject,
//     );

//     const selectedMilestones =
//       selected?.MileStone?.filter((ms) =>
//         (data.milestone || "")
//           .split(",")
//           .map((v) => v.trim())
//           .includes(ms.fieldName),
//       ) || [];

//     const payload = {
//       customer: data.customerId,
//       projectType: data.projectType,
//       subProject: data.subProject,
//       mileStone: selectedMilestones,
//     };

//     dispatch(
//       HrActions.postPTWTask(
//         true,
//         payload,
//         () => {
//           setIsOpen(false);
//           dispatch(HrActions.getPTWTaskTable(true));
//         },
//         formValue?.uniqueId || "",
//       ),
//     );
//   };

//   useEffect(() => {
//     if (resetting) {
//       reset({});
//     }
//   }, [resetting]);

//   return (
//     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">
//       <CommonForm
//         classes={"grid-cols-1 gap-1"}
//         Form={Form}
//         errors={errors}
//         register={register}
//         setValue={setValue}
//         getValues={getValues}
//       />

//       <Button
//         classes={"mt-4 w-sm text-center flex mx-auto"}
//         onClick={handleSubmit(onSubmit)}
//         name={isEdit ? "Update" : "Submit"}
//       />
//     </div>
//   );
// };

// export default ManageTaskForm;
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CommonForm from "../../../../components/CommonForm";
import Button from "../../../../components/Button";
import AdminActions from "../../../../store/actions/admin-actions";
import { GET_PTW_TASK } from "../../../../store/reducers/hr-reduces";
import HrActions from "../../../../store/actions/hr-actions";

const ManageTaskForm = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {
  const dispatch = useDispatch();
  const isEdit = !!formValue?.uniqueId;

  const {
    onSuccess,
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customer: "",
      projectType: "",
      subProject: "",
      milestone: "",
    },
  });

  const selectedCustomer = watch("customer");
  const selectedProjectType = watch("projectType");
  const selectedSubProject = watch("subProject");

  const ptwTaskList = useSelector((state) => state.hrReducer.getPTWTask || []);

  const customerList = useSelector((state) =>
    (state?.adminData?.getManageCustomer || []).map((itm) => ({
      label: itm?.customerName,
      value: itm?.uniqueId,
    })),
  );


  useEffect(() => {
  console.log("FORM VALUES:", getValues());
}, [watch("customer"), watch("projectType"), watch("subProject"), watch("milestone")]);
  useEffect(() => {
    dispatch(AdminActions.getManageCustomer());
  }, [dispatch]);

  useEffect(() => {
    if (!isOpen) return;

    if (isEdit && formValue) {
      console.log("useEffectRunning");
      console.log(formValue, "__formValue");
      reset({
        customer: formValue.customerName || "",
        projectType: formValue.projectType || "",
        subProject: formValue.subProject || "",
        milestone: formValue?.msList || "",
      });
    } else {
      reset({
        customer: "",
        projectType: "",
        subProject: "",
        milestone: "",
      });

      dispatch(GET_PTW_TASK({ dataAll: [], reset: true }));
    }
  }, [isOpen, isEdit, formValue]);

  // useEffect(() => {
  //   if (!isOpen) return;


  //   if (isEdit && formValue) {
  //     const milestoneString = Array.isArray(formValue?.milList)
  //       ? formValue.milList.map((m) => m?.fieldName || m).join(",")
  //       : formValue?.milList || "";

  //     reset({
  //       customer: formValue.customerName || "",
  //       projectType: formValue.projectType || "",
  //       subProject: formValue.subProject || "",
  //       milestone: milestoneString,
  //     });

  //     if (formValue.customer) {
  //       dispatch(HrActions.getPTWTask(true, formValue.customer));
  //     }
  //   }

  //   // ✅ ADD MODE (IMPORTANT FIX)
  //   else {
  //     reset({
  //       customer: "",
  //       projectType: "",
  //       subProject: "",
  //       milestone: "",
  //     });

  //     dispatch(GET_PTW_TASK({ dataAll: [], reset: true }));
  //   }
  // }, [isOpen, isEdit, formValue]);

  // const projectList = useMemo(() => {
  //   return [
  //     ...new Map(
  //       ptwTaskList.map((item) => [
  //         item.projectType,
  //         { label: item.projectType, value: item.projectType },
  //       ]),
  //     ).values(),
  //   ];
  // }, [ptwTaskList]);
  const projectList = useMemo(() => {
    const unique = {};

    ptwTaskList.forEach((item) => {
      if (item.projectType) {
        unique[item.projectType] = {
          label: item.projectType,
          value: item.projectType,
        };
      }
    });

    return Object.values(unique);
  }, [ptwTaskList]);

  // -------------------------
  // SUB PROJECT LIST
  // -------------------------
 const subProjectList = useMemo(() => {
  if (!selectedProjectType) return [];

  return [
    ...new Map(
      ptwTaskList
        .filter((item) => item.projectType === selectedProjectType)
        .map((item) => [
          item.subProject,
          { label: item.subProject, value: item.subProject },
        ])
    ).values(),
  ];
}, [ptwTaskList, selectedProjectType]);

  // -------------------------
  // MILESTONE LIST (FIXED SAFELY)
  // -------------------------
  // const milestoneList = useMemo(() => {
  //   const task = ptwTaskList?.find(
  //     (item) => item.subProject === selectedSubProject,
  //   );

  //   const list =
  //     task?.MileStone?.map((ms) => ({
  //       name: ms?.fieldName,
  //       id: ms?.fieldName,
  //     })) || [];

  //   return list;
  // }, [ptwTaskList, selectedSubProject]);

  // const milestoneList = useMemo(() => {
  //   if (!selectedSubProject) return [];

  //   const task = ptwTaskList.find(
  //     (item) => item.subProject === selectedSubProject,
  //   );

  //   return (
  //     task?.MileStone?.map((ms) => ({
  //       name: ms?.fieldName,
  //       id: ms?.fieldName,
  //     })) || []
  //   );
  // }, [ptwTaskList, selectedSubProject]);


  const milestoneList = useMemo(() => {
    if (!selectedSubProject || !selectedProjectType) return [];

    const task = ptwTaskList.find(
      (item) =>
        item.subProject === selectedSubProject &&
        item.projectType === selectedProjectType
    );

    console.log("tsk", task)
    return (
      task?.MileStone?.map((ms) => ({
        name: ms?.fieldName,
        id: ms?.fieldName,
      })) || []
    );
  }, [ptwTaskList, selectedSubProject, selectedProjectType]);
  const FormFields = [
    {
      label: "Customer Name",
      name: "customer",
      type: formValue?.uniqueId !== undefined ? "text" : "select",
      required: true,
      disabled: formValue?.uniqueId !== undefined ? true : false,
      option: customerList,
      classes: "col-span-1",
      props: {
        onChange: (e) => {
          const val = e.target.value;

          setValue("customer", val);
          setValue("projectType", "");
          setValue("subProject", "");
          setValue("milestone", "");

          if (val) dispatch(HrActions.getPTWTask(true, val));
        },
      },
    },

    {
  label: "Project Type",
  name: "projectType",
  type: formValue?.uniqueId !== undefined ? "text" : "select",
  required: true,
  disabled: formValue?.uniqueId !== undefined ? true : false,
  option: projectList,
  classes: "col-span-1",

  props: {
    onChange: (e) => {
      const val = e.target.value;

      
      setValue("projectType", val, {
        shouldDirty: true,
        shouldValidate: true,
      });

      console.log("PROJECT TYPE SELECTED:", val);

      // reset dependent
      setValue("subProject", "");
      setValue("milestone", "");

      if (val && selectedCustomer) {
        console.log("🔥 API HIT: projectType");

        dispatch(
          HrActions.getPTWTask(
            true,
            selectedCustomer,
            `projectType=${val}`
          )
        );
      }
    },
  },
},
    // {
    //   label: "Project Type",
    //   name: "projectType",
    //   type: formValue?.uniqueId !== undefined ? "text" : "select",
    //   required: true,
    //   disabled: formValue?.uniqueId !== undefined ? true : false,
    //   option: projectList,
    //   classes: "col-span-1",
     
    //    props: {
    // ...register("projectType", {
    //   onChange: (e) => {
    //     const val = e.target.value;

    //     console.log("RHF CHANGE:", val);

    //     setValue("subProject", "");
    //     setValue("milestone", "");

    //     if (val && selectedCustomer) {
    //       dispatch(
    //         HrActions.getPTWTask(
    //           true,
    //           selectedCustomer,
    //           `projectType=${val}`
    //         )
    //       );
    //     }
    //   },
    // }),
  
    //   },
    // },

   {
  label: "Sub Project",
  name: "subProject",
  type: formValue?.uniqueId !== undefined ? "text" : "select",
  required: true,
  disabled: formValue?.uniqueId !== undefined ? true : false,
  option: subProjectList,
  classes: "col-span-1",

  props: {
    onChange: (e) => {
      const val = e.target.value;

    
      setValue("subProject", val, {
        shouldDirty: true,
        shouldValidate: true,
      });

  

      setValue("milestone", "");

      if (val && selectedCustomer && selectedProjectType) {
      

        dispatch(
          HrActions.getPTWTask(
            true,
            selectedCustomer,
            `projectType=${selectedProjectType}&subProject=${val}`
          )
        );
      }
    },
  },
},

    {
      label: "Milestone List",
      name: "milestone",
      type: "BigmuitiSelect",
      option: milestoneList,
      required: true,
      classes: "col-span-1",
      width: "350px",
    },
  ];

  // const onSubmit = (data) => {
  //   // const selected = ptwTaskList.find(
  //   //   (item) => item.subProject === data.subProject,
  //   // );

  //   // const selectedMilestones =
  //   //   selected?.MileStone?.filter((ms) =>
  //   //     (data.milestone || "")
  //   //       .split(",")
  //   //       .map((v) => v.trim())
  //   //       .includes(ms.fieldName),
  //   //   ) || [];
  //   if (formValue?.uniqueId !== undefined) {
  //     // delete data?.customer;

  //     const payload = {
  //       customer: formValue?.customerId,
  //       projectType: data.projectType,
  //       subProject: data.subProject,
  //       mileStone: data.msList,
  //     };

  //     dispatch(
  //       HrActions.postPTWTask(
  //         true,
  //         payload,
  //         () => {
  //           setIsOpen(false);
  //           dispatch(HrActions.getPTWTaskTable(true));
  //           if (onSuccess) onSuccess();
  //         },
  //         formValue?.uniqueId,
  //       ),
  //     );
  //   } else {
  //     const payload = {
  //       customer: data.customerId,
  //       projectType: data.projectType,
  //       subProject: data.subProject,
  //       mileStone: data.msList,
  //     };

  //     dispatch(
  //       HrActions.postPTWTask(
  //         true,
  //         payload,
  //         () => {
  //           setIsOpen(false);
  //           dispatch(HrActions.getPTWTaskTable(true));
  //           if (onSuccess) onSuccess();
  //         },
  //         "",
  //       ),
  //     );
  //   }
  // };
  const onSubmit = (data) => {
    const selectedNames = (data.milestone || "")
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);

    const currentTask = ptwTaskList.find(
      (item) => item.subProject === data.subProject
    );
const selectedMilestones =
      currentTask?.MileStone?.filter((ms) =>
        selectedNames.includes(ms.fieldName),
      ) || [];
    const payload = {
      customer: isEdit ? formValue?.customerId : data.customer,
      projectType: data.projectType,
      subProject: data.subProject,
      mileStone: selectedMilestones,
    };

    

    // const payload = {
    //   customer: isEdit ? formValue?.customerId : data.customer,
    //   projectType: data.projectType,
    //   subProject: data.subProject,
    //   mileStone: selectedMilestones,
    // };

    dispatch(
      HrActions.postPTWTask(
        true,
        payload,
        () => {
          setIsOpen(false);
          dispatch(HrActions.getPTWTaskTable(true));
          if (onSuccess) onSuccess();
        },
        isEdit ? formValue?.uniqueId : "",
      ),
    );
  };
  return (
    <div className="mt-4 pb-4">
      <CommonForm
        classes={"grid-cols-1 gap-1"}
        Form={FormFields}
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
      />

      <Button
        classes={"mt-4 w-sm text-center flex mx-auto"}
        onClick={handleSubmit(onSubmit)}
        name="Submit"
      />
    </div>
  );
};

export default ManageTaskForm;

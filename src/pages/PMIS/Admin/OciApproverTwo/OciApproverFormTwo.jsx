import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../../../../components/Modal";
import CommonForm from "../../../../components/CommonForm";
import Button from "../../../../components/Button";

import OCIApproverAction from "../../../../store/actions/ociApprover-action";

const OciApproverFormTwo = ({
  isOpen,
  setIsOpen,
  resetting,
  formValue = {},
  onSuccess,
}) => {
  const dispatch = useDispatch();

  const [modalOpen, setmodalOpen] = useState(false);
const [selectedCustomer, setSelectedCustomer] = useState("");
const [selectedProjectGroup, setSelectedProjectGroup] = useState("");
const [selectedProjectType, setSelectedProjectType] = useState("");

  // Fetch dropdown data
 useEffect(() => {
  dispatch(OCIApproverAction.getOciCustomers(true, "", ""));
  dispatch(OCIApproverAction.getOciEmployee(true, "", ""));
}, [dispatch]);

  const customers = useSelector(
  (state) => state?.ociApproverData?.getOciCustomers || []
);

const projectTypes = useSelector(
  (state) => state?.ociApproverData?.getOciProjectType || []
);

const projectGroups = useSelector(
  (state) => state?.ociApproverData?.getOciProjectGroup || []
);

const subProjectTypes = useSelector(
  (state) => state?.ociApproverData?.getOciSubProjectType || []
);

const employees = useSelector(
    state => state.ociApproverData.getOciEmployee || []
);

  // Employee List
  const employeeList = useSelector((state) =>
    (state?.ociApproverData?.getOciEmployee || []).map((itm) => ({
      label: itm.empName,
      value: itm.employeeId,
    }))
  );

  const customerList = customers.map((itm) => ({
  label: itm.customerName,
  value: itm.customer,
}));

// const projectTypeList = projectTypes.map((itm) => ({
//   label: itm.projectTypeName,
//   value: itm.projectType,
// }));

// const projectTypeList = projectTypes.map((itm) => ({
//   label: itm.projectTypeName,
//   value: itm.projectTypeName,
// }));

const projectTypeList = projectTypes.map((itm) => ({
  label: itm.projectTypeName,
  value: itm.projectType,
}));
console.log("Project Type List", projectTypeList);
  // Project Group List
 const projectGroupList = projectGroups.map((itm) => ({
  label: itm.projectGroupName,
  value: itm.projectGroup,
}));

// const subProjectTypeList = subProjectTypes.map((itm) => ({
//   label: itm.subProjectTypeName,
//   value: itm.subProjectType,
// }));

const subProjectTypeList = subProjectTypes.map((itm) => ({
  label: itm.subProject,
  value: itm.uniqueId,   // or itm.subProject if your backend expects the name
}));

console.log("Sub Project List", subProjectTypeList);
// const employeeEmailList = useSelector((state) =>
//   (state?.ociApproverData?.getOciEmployee || []).map((itm) => ({
//     label: itm.employeeEmail,
//     value: itm.employeeEmail,
//   }))
// );

const employeeEmailList = useSelector((state) =>
  (state?.ociApproverData?.getOciEmployee || []).map((itm) => ({
    label: itm.email,
    value: itm.email,
  }))
);

//   const Form = [
//     {
//       label: "Emp Name",
//       name: "employeeId",
//       value: "",
//       required: true,
//       type: "select",
//       option: employeeList,
//       classes: "col-span-1",
//     },
//     {
//       label: "Project Group",
//       name: "projectGroup",
//       type: "BigmuitiSelect",
//       value: "",
//       option: ociProjectGroupList,
//       props: {
//         onChange: () => {},
//       },
//       classes: "col-span-2",
//       width: "450px",
//     },
//   ];


const Form = [
  {
    label: "Customer",
    name: "customer",
    value: "",
    type: "select",
    option: customerList,
    required: true,
    props: {
      onChange: (e) => {
        
        const customer = e.target.value;
        setSelectedCustomer(customer);

        dispatch(
          OCIApproverAction.getOciProjectGroup(true, customer, "")
        );
      },
    },
  },

  {
    label: "Emp Name",
    name: "employeeId",
    value: "",
    type: "select",
    option: employeeList,
    required: true,
    props: {
    //   onChange: (e) => {
    //     const empId = e.target.value;

    //     dispatch(
    //       OCIApproverAction.getOciEmployeeEmail(
    //         true,
    //         empId,
    //         ""
    //       )
    //     );
    //   },

    onChange: (e) => {

    const empId = e.target.value;

    const emp = employees.find(
        item => item.employeeId === empId
    );

    setValue("employeeEmail", emp?.email || "");
}
    },
  },

  {
    label: "Emp Email",
    name: "employeeEmail",
    value: "",
    type: "select", // or "text" if it should be readonly
    option: employeeEmailList,
    required: true,
  },

  {
    label: "Project Group",
    name: "projectGroup",
    value: "",
    type: "select",
    option: projectGroupList,
    required: true,
    props: {
    //   onChange: (e) => {
    //     dispatch(
    //       OCIApproverAction.getOciProjectType(
    //         true,
    //         selectedCustomer,
    //         e.target.value,
    //         ""
    //       )
    //     );
    //   },

    onChange: (e) => {

    setSelectedProjectGroup(e.target.value);

    dispatch(
        OCIApproverAction.getOciProjectType(
            true,
            selectedCustomer,
            e.target.value,
            ""
        )
    );
}
    },
  },

//   {
//     label: "Project Type",
//     name: "projectType",
//     value: "",
//     type: "select",
//     option: projectTypeList,
//     required: true,
//     props: {
//     //   onChange: (e) => {
//     //     dispatch(
//     //       OCIApproverAction.getOciSubProjectType(
//     //         true,
//     //         selectedCustomer,
//     //         getValues("projectGroup"),
//     //         e.target.value,
//     //         ""
//     //       )
//     //     );
//     //   },

//     onChange: (e) => {

//     setSelectedProjectType(e.target.value);

//     dispatch(
//         OCIApproverAction.getOciSubProjectType(
//             true,
//             selectedCustomer,
//             selectedProjectGroup,
//             e.target.value,
//             ""
//         )
//     );
// }
//     },
//   },


{
  label: "Project Type",
  name: "projectType",
  type: "select",
  option: projectTypeList,
  required: true,
  props: {
   onChange: (e) => {
  const selectedProject = projectTypes.find(
    (item) => item.projectType === e.target.value
  );

  dispatch(
    OCIApproverAction.getOciSubProjectType(
      true,
      selectedCustomer,
      selectedProject?.projectTypeName || ""
    )
  );

// onChange: (e) => {
//   const selectedProject = projectTypes.find(
//     (item) => item.projectType === e.target.value
//   );

//   dispatch(
//     OCIApproverAction.getOciSubProjectType(
//       true,
//       selectedCustomer,
//       selectedProject?.projectTypeName || ""
//     )
//   );


//     dispatch(
//   OCIApproverAction.getOciSubProjectType(
//     true,
//     selectedCustomer,
//     selectedProjectGroup,
//     projectTypeName
//   )
// );
    },
  },
},

  {
    label: "Sub Project Type",
    name: "subProjectType",
    value: "",
    type: "select",
    option: subProjectTypeList,
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

  const onTableViewSubmit = (data) => {
    // const formData = {
    //   empId: data.employeeId,
    //   projectGroupId: data.projectGroup,
    // };

    const formData = {
    customer: data.customer,
    empId: data.employeeId,
    employeeEmail: data.employeeEmail,
    projectGroupId: data.projectGroup,
    projectType: data.projectType,
    subProject: data.subProjectType,
};

    if (formValue.uniqueId) {
      dispatch(
        OCIApproverAction.updateOciApproverForm(
          formData,
          formValue.uniqueId,
          () => {
            setIsOpen(false);
            dispatch(OCIApproverAction.getOciEmployee(true, "", ""));
            if (onSuccess) onSuccess();
          }
        )
      );
    } else {
      dispatch(
        OCIApproverAction.submitOciApproverForm(formData, () => {
          setIsOpen(false);
          dispatch(OCIApproverAction.getOciEmployee(true, "", ""));
          if (onSuccess) onSuccess();
        })
      );
    }
  };

  useEffect(() => {
    if (
        formValue.uniqueId &&
        projectTypes.length > 0
    ) {
        setValue(
            "projectType",
            formValue.projectTypeId
        );

        dispatch(
            OCIApproverAction.getOciSubProjectType(
                true,
                formValue.customerId,
                formValue.projectType
            )
        );
    }
}, [projectTypes]);

useEffect(() => {
    if (
        formValue.uniqueId &&
        subProjectTypes.length > 0
    ) {
        setValue(
            "subProjectType",
            formValue.subProjectId
        );
    }
}, [subProjectTypes]);

useEffect(() => {
  if (resetting) {
    reset();
    return;
  }

  if (!formValue?.uniqueId) return;

  const loadEditData = async () => {
    // Customer
    setValue("customer", formValue.customerId);
    setSelectedCustomer(formValue.customerId);

    // Load Project Groups
    await dispatch(
      OCIApproverAction.getOciProjectGroup(
        true,
        formValue.customerId,
        ""
      )
    );

    // Project Group Id
    const projectGroupId =
      formValue.projectGroupCombined?.split(",")[1] || "";

    setValue("projectGroup", projectGroupId);
    setSelectedProjectGroup(projectGroupId);

    // Load Project Types
    await dispatch(
      OCIApproverAction.getOciProjectType(
        true,
        formValue.customerId,
        projectGroupId
      )
    );

    // DON'T set Project Type here

    // DON'T load Sub Project here

    // DON'T set Sub Project here

    // Employee
    setValue("employeeId", formValue.employeeUniqueId);
    setValue("employeeEmail", formValue.employeeEmail);
  };
  console.log("projectTypeId", formValue.projectTypeId);
console.log("subProjectId", formValue.subProjectId);

  loadEditData();


}, [formValue]);


useEffect(() => {
  if (!formValue?.uniqueId) return;
  if (!subProjectTypes.length) return;

  setValue("subProjectType", formValue.subProjectId);
}, [subProjectTypes]);


// useEffect(() => {
//   if (resetting) {
//     reset();
//     return;
//   }

//   if (!formValue?.uniqueId) return;

//   async function loadEditData() {

//     // Customer
//     setValue("customer", formValue.customerId);
//     setSelectedCustomer(formValue.customerId);

//     await dispatch(
//       OCIApproverAction.getOciProjectGroup(
//         true,
//         formValue.customerId,
//         ""
//       )
//     );

//     // Project Group Id comes after comma
//     const projectGroupId =
//       formValue.projectGroupCombined?.split(",")[1] || "";

//     setValue("projectGroup", projectGroupId);
//     setSelectedProjectGroup(projectGroupId);

//     await dispatch(
//       OCIApproverAction.getOciProjectType(
//         true,
//         formValue.customerId,
//         projectGroupId,
//         ""
//       )
//     );

//     // setValue("projectType", formValue.projectType);

//     setValue("projectType", formValue.projectType);

//     await dispatch(
//       OCIApproverAction.getOciSubProjectType(
//         true,
//         formValue.customerId,
//         projectGroupId,
//         formValue.projectType,
//         ""
//       )
//     );

//     // setValue("subProjectType", formValue.subProject);

//     setValue("subProjectType", formValue.subProjectId);

//     setValue("employeeId", formValue.employeeUniqueId);
//     setValue("employeeEmail", formValue.employeeEmail);
//   }

//   loadEditData();

// }, [formValue]);

  return (
    <>
      <Modal
        size="full"
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
        children={
          <CommonForm
            classes="grid-cols-2 gap-1"
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
          classes="grid-cols-1 gap-1"
          Form={Form}
          errors={errors}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />

        <Button
          classes="mt-2 w-sm text-center flex mx-auto"
          onClick={handleSubmit(onTableViewSubmit)}
          name={formValue.uniqueId ? "Update" : "Submit"}
        />
      </div>
    </>
  );
};

export default OciApproverFormTwo;
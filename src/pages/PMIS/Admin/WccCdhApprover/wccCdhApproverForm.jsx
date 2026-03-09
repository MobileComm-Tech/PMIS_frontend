import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../../components/Modal';
import CommonForm from '../../../../components/CommonForm';
import Button from '../../../../components/Button';
import WCCActions from '../../../../store/actions/wccApprover-actions';

const WccApproverForm = ({
  isOpen,
  setIsOpen,
  resetting,
  formValue = {},
  onSuccess,
}) => {
  let dispatch = useDispatch();
  const [modalOpen, setmodalOpen] = useState(false);
  // Fetch dropdown data
  useEffect(() => {
    dispatch(WCCActions.getWccProjectGroup(true, '', ''));
    dispatch(WCCActions.getWccEmployee(true, '', ''));
  }, []);

  // Employee List
  const employeeList = useSelector((state) => {
    return state?.wccApproverData?.getWccEmployee?.map((itm) => {
      return {
        label: itm?.empName,
        value: itm?.employeeId,
      };
    });
  });

  // Project Group List
  const wccProjectGroupList = useSelector((state) => {
    return state?.wccApproverData?.getWccProjectGroup?.map((itm) => {
      return {
        name: itm?.projectGroup,
        id: itm?.projectGroupId,
      };
    });
  });

  let Form = [
    {
      label: 'Emp Name',
      name: 'employeeId',
      value: '',
      required: true,
      type: 'select',
      option: employeeList,
      classes: 'col-span-1',
    },
    {
      label: 'Project Group',
      name: 'projectGroup',
      type: 'BigmuitiSelect',
      value: '',
      option: wccProjectGroupList,
      props: {
        onChange: (e) => {},
      },
      classes: 'col-span-2',
      width: '450px',
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
    const formData = {
      empId: data.employeeId,
      projectGroupId: data.projectGroup,
    };

    if (formValue.uniqueId) {
      dispatch(
        WCCActions.updateWccApproverForm(formData, formValue.uniqueId, () => {
          setIsOpen(false);
          dispatch(WCCActions.getWccEmployee(true, '', ''));
          if (onSuccess) onSuccess();
        }),
      );
    } else {
      dispatch(
        WCCActions.submitWccApproverForm(formData, () => {
          setIsOpen(false);
          dispatch(WCCActions.getWccEmployee(true, '', ''));
          if (onSuccess) onSuccess();
        }),
      );
    }
  };

  useEffect(() => {
    if (resetting) {
      reset({});
      Form.forEach((fieldName) => {
        setValue(fieldName.name, fieldName.value);
      });
    } else {
      reset({});
      Form.forEach((field) => {
        if (field.name === 'employeeId') {
          setValue(field.name, formValue?.employeeUniqueId);
        } else if (field.name === 'projectGroup') {
          setValue(field.name, formValue?.projectGroupCombined);
        } else {
          setValue(field.name, formValue[field.name]);
        }
      });
    }
  }, [formValue, resetting]);

  return (
    <>
      <Modal
        size={'full'}
        children={
          <>
            <CommonForm
              classes={'grid-cols-2 gap-1'}
              Form={Form}
              errors={errors}
              register={register}
              setValue={setValue}
              getValues={getValues}
            />
          </>
        }
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
      />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">
        <CommonForm
          classes={'grid-cols-1 gap-1'}
          Form={Form}
          errors={errors}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />

        <Button
          classes={'mt-2 w-sm text-center flex mx-auto'}
          onClick={handleSubmit(onTableViewSubmit)}
          name={formValue.uniqueId ? 'Update' : 'Submit'}
        />
      </div>
    </>
  );
};

export default WccApproverForm;

//OLD
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import moment from "moment";
// import * as Unicons from "@iconscout/react-unicons";
// import Modal from "../../../../components/Modal";
// import CommonForm from "../../../../components/CommonForm";
// import Button from "../../../../components/Button";
// import WCCActions from "../../../../store/actions/wccApprover-actions";
// import { objectToQueryString } from "../../../../utils/commonFunnction";

// const WccApproverForm = ({
//   isOpen,
//   setIsOpen,
//   resetting,
//   formValue = {},
//   onSuccess,
// }) => {

//   const dispatch = useDispatch();
//   const [modalOpen, setmodalOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const wccEmployee = useSelector((state) => state?.wccApproverData?.getWccEmployee);
//   const wccProjectId = useSelector(
//     (state) => state?.wccApproverData?.getWccProjectId
//   );

//   const isEditMode = Object.entries(formValue).length > 0 && !resetting;
//   useEffect(() => {
//     dispatch(WCCActions.getWccProjectId(true, "", ""));
//     dispatch(WCCActions.getWccEmployee(true, "", ""));
//   }, [dispatch]);

//   const employeeList = wccEmployee?.map((employee) => ({
//     label: employee?.empName,
//     value: employee?.employeeId || employee?.empName,
//   }));

//   const wccProjectIdList = wccProjectId?.map((projectId) => ({
//     label: projectId?.projectId,
//     value: projectId?.projectUniqueId
//   }));

//   let Form = [
//     {
//       label: "Emp Name",
//       value: "",
//       name: "employeeId",
//       type: "select",
//       option: employeeList,
//       required: true,
//     },
//     {
//       label: "Project Id",
//       value: "",
//       name: "projectUniqueId",
//       type: "select",
//       option: wccProjectIdList,
//       required: true,
//     },

//   ];

//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       setIsSubmitting(true);

//       const formData = {
//         empId: data.employeeId,
//         projectUniqueId: data.projectUniqueId,
//       };

//       const submitAction = (actionCreator, ...args) => {
//         return new Promise((resolve, reject) => {
//           const callback = () => {
//             resolve();
//           };

//           if (isEditMode) {
//             dispatch(actionCreator(...args, callback));
//           } else {
//             dispatch(actionCreator(args[0], callback));
//           }
//         });
//       };

//       if (isEditMode) {
//         if (formValue?.projectUniqueId && formData?.projectUniqueId === "") {
//           formData.projectUniqueId = formValue.projectUniqueId;
//         }
//         if (formValue?.employeeId && formData?.employeeId === "") {
//           formData.employeeId = formValue.employeeId;
//         }

//         // Wait for the update to complete
//         await submitAction(
//           WCCActions.updateWccApproverForm,
//           formData,
//           formValue.uniqueId
//         );
//       } else {
//         await submitAction(WCCActions.submitWccApproverForm, formData);
//       }

//       reset();
//       if (setIsOpen) setIsOpen(false);

//       if (onSuccess) {
//         onSuccess();
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const onTableViewSubmit = (data) => {
//     onSubmit(data);
//   };

//   useEffect(() => {
//     if (resetting) {
//       reset({});
//       Form.forEach((fieldName) => {
//         setValue(fieldName["name"], fieldName["value"]);
//       });
//     } else if (isEditMode) {
//       reset({});

//       Form.forEach((field) => {
//             if (field.name=="employeeId"){
//                 setValue(field.name, formValue?.employeeUniqueId);
//             }else{
//                 setValue(field.name, formValue[field.name]);
//             }
//       });
//     }
//   }, [formValue, resetting, setValue, dispatch]);

//   return (
//     <>
//       <Modal
//         size={"xl"}
//         children={
//           <>
//             <CommonForm
//               classes={"grid-cols-1 gap-1"}
//               Form={Form}
//               errors={errors}
//               register={register}
//               setValue={setValue}
//               getValues={getValues}
//             />
//           </>
//         }
//         isOpen={modalOpen}
//         setIsOpen={setmodalOpen}
//       />
//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">
//         <>
//           <CommonForm
//             classes={"grid-cols-2 gap-1"}
//             Form={Form}
//             errors={errors}
//             register={register}
//             setValue={setValue}
//             getValues={getValues}
//           />
//         </>
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

// export default WccApproverForm;

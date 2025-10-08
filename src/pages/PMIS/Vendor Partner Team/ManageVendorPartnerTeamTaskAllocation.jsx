import { Button, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CommonForm from "../../../components/CommonForm";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import VendorActions from "../../../store/actions/vendor-actions";

const ManageVendorPartnerTeamTaskAllocation = ({
  from,
  itemData,
  listsite,
  projectuniqueId,
  isOpen,
  setIsOpen,
  resetting,
  formValue = {},
  projectGroupId,
  subProject,
  customerId,
  filtervalue,
  checkbox,
  parentcheckbox,
  onClose = () => {},
  formName,
}) => {
  const [modalFullBody, setmodalFullBody] = useState(<></>);
  const [modalFullOpen, setmodalFullOpen] = useState(false);

  console.log(itemData, "__itemData__");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset: reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  // get data

  const partnerTeamLeadData = useSelector(
    (state) => state?.vendorData?.getVendorPartnerTeamLeadData
  );
  console.log(partnerTeamLeadData, "__partner");

  // const onTableViewSubmit = (data) => {
  //   console.log(data, "__aya");
  //   const FinalData = { ids: itemData?.split(","), ...data };
  //   dispatch(
  //     VendorActions.postPartnerTeamLeadAllocation(
  //       true,
  //       FinalData,
  //       () => {},
  //       null
  //     )
  //   );
  //   dispatch(VendorActions.partnerTeamLeadData)
  //   reset();
  //   setIsOpen(false);
  // };

  const onTableViewSubmit = (data) => {
  console.log(data, "__aya");

  const FinalData = { ids: itemData?.split(","), ...data };

 
  dispatch(
    VendorActions.postPartnerTeamLeadAllocation(
      true,
      FinalData,
      () => {
        
        dispatch(VendorActions.partnerTeamLeadData()); 
        reset();
        setIsOpen(false); 
      },
      null
    )
  );
};


  const formData = [
  
    {
      label: "Partner Team",
      value: "",
      name: "teamLeadName",
      type: "select",
      option: Array.isArray(partnerTeamLeadData)
        ? partnerTeamLeadData?.map((itm) => {
            return {
              label: itm?.teamLeadName,
              value: itm?.subOwnerId + "_" + itm?.teamLeadName,
            };
          })
        : [],
      props: {
        onChange: (e) => {
         
        },
      },
    
      classes: "col-span-1",
      required: true,
    },
  ];

  return (
    <>
      <Modal
        size={"xl"}
        children={modalFullBody}
        isOpen={modalFullOpen}
        setIsOpen={setmodalFullOpen}
      />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">
        <CommonForm
          classes={"grid-cols-1 gap-1"}
          Form={formData}
          errors={errors}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />
        
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onTableViewSubmit)}
          className="mt-6 ml-4 flex justify-center rounded-md bg-pbutton px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default ManageVendorPartnerTeamTaskAllocation;


// import { Button, Modal } from "@material-ui/core";
// import React, { useEffect, useState } from "react";
// import CommonForm from "../../../components/CommonForm";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import VendorActions from "../../../store/actions/vendor-actions";

// // const ManageVendorPartnerTeamTaskAllocation = ({
// //   from,
// //   itemData,
// //   listsite,
// //   projectuniqueId,
// //   isOpen,
// //   setIsOpen,
// //   resetting,
// //   formValue = {},
// //   projectGroupId,
// //   subProject,
// //   customerId,
// //   filtervalue,
// //   checkbox,
// //   parentcheckbox,
// //   onClose = () => {},
// //   formName,
// // }) => {
// //   const [modalFullBody, setmodalFullBody] = useState(<></>);
// //   const [modalFullOpen, setmodalFullOpen] = useState(false);

// //   const dispatch = useDispatch();

// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     setValue,
// //     getValues,
// //     formState: { errors },
// //   } = useForm();

// //   // ✅ Fetch partner team lead data when modal opens
// //   useEffect(() => {
// //     if (isOpen) {
// //       dispatch(VendorActions.partnerTeamLeadData());
// //     }
// //   }, [dispatch, isOpen]);

// //   const partnerTeamLeadData = useSelector(
// //     (state) => state?.vendorData?.getVendorPartnerTeamLeadData
// //   );

// //   console.log(partnerTeamLeadData, "__partner");

// //   // ✅ Submit handler
// //   const onTableViewSubmit = (data) => {
// //     console.log(data, "__submitted_data__");
// //     const FinalData = { ids: itemData?.split(","), ...data };
// //     dispatch(
// //       VendorActions.postPartnerTeamLeadAllocation(true, FinalData, () => {}, null)
      
// //     );
// //     dispatch(VendorActions.partnerTeamLeadData());
// //     reset();
// //     setIsOpen(false);
// //   };

// //   const formData = [
// //     {
// //       label: "Partner Team",
// //       name: "teamLeadName",
// //       type: "select",
// //       option: Array.isArray(partnerTeamLeadData)
// //         ? partnerTeamLeadData.map((itm) => ({
// //             label: itm?.teamLeadName,
// //             value: itm?.subOwnerId + "_" + itm?.teamLeadName,
// //           }))
// //         : [],
// //       classes: "col-span-1",
// //       required: true,
// //     },
// //   ];

// //   return (
// //     <>
// //       <Modal
// //         size={"xl"}
// //         children={modalFullBody}
// //         isOpen={modalFullOpen}
// //         setIsOpen={setmodalFullOpen}
// //       />

// //       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">
// //         <CommonForm
// //           classes={"grid-cols-1 gap-1"}
// //           Form={formData}
// //           errors={errors}
// //           register={register}
// //           setValue={setValue}
// //           getValues={getValues}
// //         />

// //         <Button
// //           variant="contained"
// //           color="primary"
// //           onClick={handleSubmit(onTableViewSubmit)}
// //           className="mt-6 ml-4 flex justify-center rounded-md bg-pbutton px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
// //         >
// //           Submit
// //         </Button>
// //       </div>
// //     </>
// //   );
// // };

// // export default ManageVendorPartnerTeamTaskAllocation;

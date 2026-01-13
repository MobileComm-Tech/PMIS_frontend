import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import Modal from "../../../../components/Modal";
import CommonForm from "../../../../components/CommonForm";
import Button from "../../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import AdminActions from "../../../../store/actions/admin-actions";
import { checkArray } from "../../../../components/CommonObjectsAndVariables";
import { labelToValue } from "../../../../utils/commonFunnction";

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


  const dispatch  = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
    watch
  } = useForm();



  // CustomerData Starts here
  useEffect(()=>{

    dispatch(AdminActions.getCustomer())  

  },[])



  const customersData = useSelector((state)=> state?.adminData?.getCustomer);

  const selectedCustomerOption = watch('customerId');
  console.log(selectedCustomerOption,"__selectedCustomerOption__")

    // CustomerData Ends here

    // Project Type Data Starts here
      useEffect(()=>{
        if(selectedCustomerOption!==undefined){
          dispatch(AdminActions.compliance_ProjectType(true,`customerId=${selectedCustomerOption}`)) 
        }
        
      },[selectedCustomerOption])


      const projectTypeData  = useSelector((state)=>state?.adminData?.getComplianceProjectType)
      console.log(projectTypeData,"___projectTypeData_")
    // Project Type Data Ends here


    // Sub Project Data Starts here 
     const selectedProjectTypeOption = watch('projectType');
     console.log(selectedProjectTypeOption,"__selectedProjectTypeOption_")

    useEffect(()=>{
      if(selectedProjectTypeOption!==undefined){
        dispatch(AdminActions.compliance_SubProject(true,`customerId=${selectedCustomerOption}&projectType=${selectedProjectTypeOption?.split(",")[0]}`))
      }
        
    },[selectedProjectTypeOption])


    const subProjectData  = useSelector((state)=>state?.adminData?.getComplianceSubProject);
    console.log(subProjectData,"___subProjectData__")
    // Sub Project Data Ends here 

    // Work description data starts here

    useEffect(()=>{
          dispatch(AdminActions.compliance_WorkDescription(true,`customerId=${selectedCustomerOption}`))
    },[selectedCustomerOption])


    const workDescriptionData  = useSelector((state)=>state?.adminData?.getComplianceWorkDescription)
console.log(workDescriptionData,"___workDescriptionData__")
    // Work description data ends here

    // MS LIst starts here
    useEffect(()=>{
          dispatch(AdminActions.getMsList())
    },[])


    const msListData  = useSelector((state)=> state?.adminData?.getMsList);
    console.log(msListData,"___msListData__")
    // MS LIst ends here

 
  let Form = [
    {
      label: "Customer",
      value: "",
      name: "customerId",
      type: "select",
      option: checkArray(customersData) ? customersData?.map((itm )=> { return {label:itm?.customerName,value:itm?.customerId}}):[],
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
      option: checkArray(projectTypeData)?projectTypeData?.map((itm)=>{return {label:itm?.projectType,value:itm?.projectType+","+itm?.projectTypeId}}):[], 
      required: true,
    },
    {
      label: "Sub Project",
      value: "",
      name: "subProjectId",
      type: "select",
      option: checkArray(subProjectData)?subProjectData?.map((itm)=> {return {label:itm?.subProject,value:itm?.subProjectId}}):[], 
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
      option: checkArray(workDescriptionData)?workDescriptionData?.map((itm)=>{return {label:itm?.workDescription,value:itm?.workDescription}}):[], 
      required: true,
      props: {
        onChange: (e) => {
          setSelectedProjectGroup(e?.target?.value);
        },
      },
    },
    {
      label: "MS List",
      value: "",
      name: "msList",
      type: "select",
      option: checkArray(msListData)?msListData?.map((itm)=>{return {label:itm?.milestone,value:itm?.milestone}}):[], 
      required: true,
      props: {
        onChange: (e) => {
          setSelectedProjectGroup(e?.target?.value);
        },
      },
    },
     {
      label: "CDH",
      value: "",
      name: "cdh",
      type: "select",
      option: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      required: true,
    },

    {
      label: "SCFT",
      value: "",
      name: "scft",
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
    {
      label: "EMF",
      value: "",
      name: "emf",
      type: "select",
      option: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
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

    const finalData = {...data,projectType:data?.projectType?.split(",")[1]}

    dispatch(AdminActions.postWccCompliance(finalData,()=>{
          console.log("Ram Ram")
    },null))

    setIsOpen(false)
    
  };


 

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

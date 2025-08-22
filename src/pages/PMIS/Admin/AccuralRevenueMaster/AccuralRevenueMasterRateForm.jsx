import React, { useEffect, useState } from 'react'

const AccuralRevenueMasterRateForm = ({setRateForm,isOpen, setIsOpen, resetting, formValue = {}, filtervalue }) => {


    const [dynamicFormData, setDynamicFormData] = useState([])
    let subProjectTypelist = useSelector((state) => {
        return state?.adminData?.getAccuralRevenueMasterSubProject?.map((itm) => {
          return {
            label: itm?.subProjectName,
            value: itm?.subProject,
            
          };
        });
    });
    
    let ProjectTypelist = useSelector((state) => {
        return state?.adminData?.getAccuralRevenueMasterProjectType?.map((itm) => {
          return {
            label: itm?.projectTypeName,
            value: itm?.projectType,
            
          };
        });
      });

      let Projectlist = useSelector((state) => {
        return state?.adminData?.getAccuralRevenueMasterProjectId?.map((itm) => {
          return {
            label: itm?.projectId,
            value: itm?.project,
          };
        });
      });

    let customerList = useSelector((state) => {
        return state?.adminData?.getManageCustomer.map((itm) => {
            return {
                label: itm?.customerName,
                value: itm?.uniqueId
            }
        })
    })


    const [modalOpen, setmodalOpen] = useState(false)

    let dispatch = useDispatch()


    useEffect(()=>{
        let dynamicForm = [];
         for( let  i = 1; i<=7; i++){
        
        const tempItem ={
            label: `Item Code-0${i}`,
            value: "",
            name: `itemCode0${i}`,
            type: "text",
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        }

        const rateItem ={
            label: `Rate Code-0${i}`,
            value: "",
            name: `rateCode0${i}`,
            type: "text",
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        }
        dynamicForm.append(tempItem);
        dynamicForm.append(rateItem);
    }

        setDynamicFormData(dynamicForm)
    })

   

    // console.log(dynamicFormData,"__dynamicForm__")
    let Form = [
        {
            label: "Customer",
            value: "",
            name:Object.entries(formValue).length > 0 ? "customerName" : "customer",
            type: Object.entries(formValue).length > 0 ? "sdisabled" : "select",
            option: customerList,
            props: {
              onChange: (e)=>{
                if (e.target.value){
                    dispatch(AdminActions.getAccuralRevenueMasterProjectType(true,"",e.target.value));
                }
                else{
                    dispatch(GET_ACCURAL_REVENUE_MASTER_PROJECTTYPE({ dataAll:[], reset:true}));
                    dispatch(GET_ACCURAL_REVENUE_MASTER_PROJECTID({ dataAll:[], reset:true }));
                    dispatch(GET_ACCURAL_REVENUE_MASTER_SUBPROJECTTYPE({ dataAll:[], reset:true }));
                }
              },
            },
            required: true,
            classes: "col-span-1",
        },
        {
            label: "Project Type",
            value: "",
            name:Object.entries(formValue).length > 0 ? "projectTypeName" : "projectType",
            type: Object.entries(formValue).length > 0 ? "sdisabled" : "select",
            option: ProjectTypelist,
            props: {
              onChange: (e)=>{
                if (e.target.value){
                    dispatch(AdminActions.getAccuralRevenueMasterProjectID(true,"",e.target.value));
                    dispatch(AdminActions.getAccuralRevenueMasterSubProjectType(true,"",e.target.value));
                }
                else{
                    dispatch(GET_ACCURAL_REVENUE_MASTER_PROJECTID({ dataAll:[], reset:true }));
                    dispatch(GET_ACCURAL_REVENUE_MASTER_SUBPROJECTTYPE({ dataAll:[], reset:true }));
                }
                
              },
              
            },
            required: true,
            classes: "col-span-1",
        },
        {
            label: "Project",
            value: "",
            name:Object.entries(formValue).length > 0 ? "projectId" : "project",
            type: Object.entries(formValue).length > 0 ? "sdisabled" : "select",
            option: Projectlist,
            props: {
                onChange: (e)=>{
                
                },
                
            },
            required: true,
            classes: "col-span-1",
        },
        {
            label: "Sub Project",
            value: "",
            name:Object.entries(formValue).length > 0 ? "subProjectName" : "subProject",
            type: Object.entries(formValue).length > 0 ? "sdisabled" : "select",
            option: subProjectTypelist,
            props: {
              onChange: (e)=>{
              },
            },
            required: true,
            classes: "col-span-1",
        },
        {
            label: "Band",
            value: "",
            name: "band",
            type: "text",
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Activity",
            value: "",
            name: "activity",
            type: "text",
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Rate",
            value: "",
            name: "rate",
            type: "number",
            required: true,
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Item Code-01",
            value: "",
            name: "itemCode01",
            type: "text",
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Daheajds Code-02",
            value: "",
            name: "itemCode02",
            type: "text",
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Item Code-03",
            value: "",
            name: "itemCode03",
            type: "text",
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Item Code-04",
            value: "",
            name: "itemCode04",
            type: "text",
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Item Code-05",
            value: "",
            name: "itemCode05",
            type: "text",
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Item Code-06",
            value: "",
            name: "itemCode06",
            type: "text",
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Item Code-07",
            value: "",
            name: "itemCode07",
            type: "text",
            filter: true,
            props: {
                onChange: ((e) => {
                }),
            },
            classes: "col-span-1"
        },
    ]


    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        getValues,
        formState: { errors },
    } = useForm()

    const onTableViewSubmit = (data) => {

        // console.log(data,"__data")
        // setRateForm(true);
        // tempForm = data?.map((itm,index)=>{
        //     if(itm[`itemCode0${index}`]?.length>0){

        //         return{
        //         label: `Rate Code-0${index}`,
        //         value: "",
        //         name: `ringCode0${index}`,
        //         type: "text",
        //         filter: true,
        //         props: {
        //             onChange: ((e) => {
        //             }),
        //         },
        //         classes: "col-span-1"
        //     }
        //     }
        // })
        // setRateForm(tempForm)
        // if (formValue.uniqueId) {
        //     dispatch(AdminActions.postAccuralRevenueMasterProject(data, () => {
        //         setIsOpen(false)
        //         dispatch(AdminActions.getAccuralRevenueMasterProject(true,filtervalue))
        //     }, formValue.uniqueId))
        // } else {
        //     dispatch(AdminActions.postAccuralRevenueMasterProject(data, () => {
        //         setIsOpen(false)
        //         dispatch(AdminActions.getAccuralRevenueMasterProject())
        //     }))
        // }
    }

    useEffect(() => {
        dispatch(GET_ACCURAL_REVENUE_MASTER_PROJECTTYPE({ dataAll:[], reset:true}));
        dispatch(GET_ACCURAL_REVENUE_MASTER_PROJECTID({ dataAll:[], reset:true }));
        dispatch(GET_ACCURAL_REVENUE_MASTER_SUBPROJECTTYPE({ dataAll:[], reset:true }));
      if (!isOpen) {
        reset({});
        Form.forEach(key => setValue(key.name, formValue[key.name] || ""));
      } else {
        reset({});
      }
    }, [isOpen,formValue,resetting]);




    return <>
        <Modal size={"xl"} children={<><CommonForm classes={"grid-cols-1 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} /></>} isOpen={modalOpen} setIsOpen={setmodalOpen} />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">

            <CommonForm classes={"grid-cols-2 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
            <Button classes={"mt-2 w-sm text-center flex mx-auto"} onClick={(handleSubmit(onTableViewSubmit))} name="Submit" />
        </div>
    </>


};


export default AccuralRevenueMasterRateForm

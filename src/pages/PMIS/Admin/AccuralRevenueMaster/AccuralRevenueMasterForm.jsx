import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import CommonForm from '../../../../components/CommonForm';
import Button from '../../../../components/Button';
import AdminActions from '../../../../store/actions/admin-actions';
import Modal from '../../../../components/Modal';
import FilterActions from '../../../../store/actions/filter-actions';
import { GET_ACCURAL_REVENUE_MASTER_PROJECTID, GET_ACCURAL_REVENUE_MASTER_PROJECTTYPE, GET_ACCURAL_REVENUE_MASTER_SUBPROJECTTYPE } from '../../../../store/reducers/admin-reducer';
import { range } from '../../../../components/CommonObjectsAndVariables';

const AccuralRevenueMasterForm = ({ isOpen, setIsOpen, resetting, formValue = {}, filtervalue }) => {

    const [rateForm, setRateForm] = useState([])
    const [dynamicFormData, setDynamicFormData] = useState([])
    const [ammount, setAmmount] = useState({})


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

    useEffect(() => {
        
        let dynamicForm = [];
        for (let i = range.start; i <= range.end; i++) {

            const tempItem = {
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

            const rateItem = {
                label: `Rate-0${i}`,
                value: "",
                name: `itemRate0${i}`,
                type: "number",
                filter: true,
                props: {
                    onChange: (e) => {
                        const { name, value } = e.target;

                        setValue(name, +value);
                        setAmmount((prev) => ({
                            ...prev,
                            [name]: +value
                        }));
                    },
                },
                classes: "col-span-1"
            }

            const itemCodeDescription = {
                label: `Description-0${i}`,
                value: "",
                name: `itemCodeDescription0${i}`,
                type: "text",

                filter: true,
                props: {
                    onChange: ((e) => {

                    }),
                },
                classes: "col-span-2"
            }
            dynamicForm.push(itemCodeDescription);
            dynamicForm.push(tempItem);
            dynamicForm.push(rateItem);
            
        }

        setDynamicFormData(dynamicForm)
    }, [])


    useEffect(() => {
        setValue('rate' , Object.values(ammount).reduce((sum, val) => sum + Number(val), 0))
    }, [ammount]);
    useEffect(() => {
        setAmmount({})
        setValue('rate' , 0)
    } , [modalOpen])


// const totalAmount = Object.values(ammount).reduce((sum, val) => sum + Number(val), 0);

    let Form = useMemo(() => [
        {
            label: "Customer",
            value: "",
            name: Object.entries(formValue).length > 0 ? "customerName" : "customer",
            type: Object.entries(formValue).length > 0 ? "sdisabled" : "select",
            option: customerList,
            props: {
                onChange: (e) => {
                    if (e.target.value) {
                        dispatch(AdminActions.getAccuralRevenueMasterProjectType(true, "", e.target.value));
                    }
                    else {
                        dispatch(GET_ACCURAL_REVENUE_MASTER_PROJECTTYPE({ dataAll: [], reset: true }));
                        dispatch(GET_ACCURAL_REVENUE_MASTER_PROJECTID({ dataAll: [], reset: true }));
                        dispatch(GET_ACCURAL_REVENUE_MASTER_SUBPROJECTTYPE({ dataAll: [], reset: true }));
                    }
                },
            },
            required: true,
            classes: "col-span-1",
        },
        {
            label: "Project Type",
            value: "",
            name: Object.entries(formValue).length > 0 ? "projectTypeName" : "projectType",
            type: Object.entries(formValue).length > 0 ? "sdisabled" : "select",
            option: ProjectTypelist,
            props: {
                onChange: (e) => {
                    if (e.target.value) {
                        dispatch(AdminActions.getAccuralRevenueMasterProjectID(true, "", e.target.value));
                        dispatch(AdminActions.getAccuralRevenueMasterSubProjectType(true, "", e.target.value));
                    }
                    else {
                        dispatch(GET_ACCURAL_REVENUE_MASTER_PROJECTID({ dataAll: [], reset: true }));
                        dispatch(GET_ACCURAL_REVENUE_MASTER_SUBPROJECTTYPE({ dataAll: [], reset: true }));
                    }

                },

            },
            required: true,
            classes: "col-span-1",
        },
        {
            label: "Project",
            value: "",
            name: Object.entries(formValue).length > 0 ? "projectId" : "project",
            type: Object.entries(formValue).length > 0 ? "sdisabled" : "select",
            option: Projectlist,
            props: {
                onChange: (e) => {

                },

            },
            required: true,
            classes: "col-span-1",
        },
        {
            label: "Sub Project",
            value: "",
            name: Object.entries(formValue).length > 0 ? "subProjectName" : "subProject",
            type: Object.entries(formValue).length > 0 ? "sdisabled" : "select",
            option: subProjectTypelist,
            props: {
                onChange: (e) => {
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
            label: "Amount",
            
           
            name: "rate",
            type: "sdisabled",
            required : true,
            
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
            classes: "col-span-2"
        },
        
        ...dynamicFormData,
        
        // {
        //     label: "Item Code-01",
        //     value: "",
        //     name: "itemCode01",
        //     type: "text",
        //     filter: true,
        //     props: {
        //         onChange: ((e) => {
        //         }),
        //     },
        //     classes: "col-span-1"
        // },
        // {
        //     label: "Item Code-02",
        //     value: "",
        //     name: "itemCode02",
        //     type: "text",
        //     filter: true,
        //     props: {
        //         onChange: ((e) => {
        //         }),
        //     },
        //     classes: "col-span-1"
        // },
        // {
        //     label: "Item Code-03",
        //     value: "",
        //     name: "itemCode03",
        //     type: "text",
        //     filter: true,
        //     props: {
        //         onChange: ((e) => {
        //         }),
        //     },
        //     classes: "col-span-1"
        // },
        // {
        //     label: "Item Code-04",
        //     value: "",
        //     name: "itemCode04",
        //     type: "text",
        //     filter: true,
        //     props: {
        //         onChange: ((e) => {
        //         }),
        //     },
        //     classes: "col-span-1"
        // },
        // {
        //     label: "Item Code-05",
        //     value: "",
        //     name: "itemCode05",
        //     type: "text",
        //     filter: true,
        //     props: {
        //         onChange: ((e) => {
        //         }),
        //     },
        //     classes: "col-span-1"
        // },
        // {
        //     label: "Item Code-06",
        //     value: "",
        //     name: "itemCode06",
        //     type: "text",
        //     filter: true,
        //     props: {
        //         onChange: ((e) => {
        //         }),
        //     },
        //     classes: "col-span-1"
        // },
        // {
        //     label: "Item Code-07",
        //     value: "",
        //     name: "itemCode07",
        //     type: "text",
        //     filter: true,
        //     props: {
        //         onChange: ((e) => {
        //         }),
        //     },
        //     classes: "col-span-1"
        // },
    ] , [ammount, dynamicFormData,ProjectTypelist])  


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

        // console.log(data, "__data")
        let falseKey = false;
        

       for (let i = range.start; i <= range.end; i++) {
    const itemCode = data[`itemCode0${i}`];
    const itemRate = data[`itemRate0${i}`];
    const itemCodeDesc = data[`itemCodeDescription0${i}`];

    const allEmpty = !itemCode && !itemRate && !itemCodeDesc;
    const allFilled = itemCode && itemRate && itemCodeDesc;

    
    if (!allEmpty && !allFilled) {
        falseKey=true;
        break;
    }
}

        if (falseKey) {
            alert(`Please select the itemCode , itemRate and itemCodeDescription for all the filled ItemCodes (and vice versa).`);
            return;
        }

        let sum = 0;
        for (let i = range.start; i <= range.end; i++) {
            const rateKey = `itemRate0${i}`;
            const rateValue = data[rateKey];

            if (rateValue && rateValue !== "") {
                const numericRate = Number(rateValue);


                if (isNaN(numericRate)) {
                    alert(`Item Rate ${i} must be a valid number.`);
                    return;
                }

                if (numericRate < 0) {
                    alert(`Item Rate ${i} cannot be less than ${numericRate}.`);
                    return;
                } 
                // else if (numericRate > 50000) {
                //     alert(`Item Rate ${i} should be less than 50000`);
                //     return;
                // }


                data[rateKey] = numericRate;
            }
            // console.log(ammount[rateKey],"___aksjvdbka")
            if(ammount[rateKey]!==undefined){
                sum+=ammount[rateKey]
            }
        }   
            
        data = { ...data, rate: sum,}
        setAmmount(prev=>prev=0)

        // console.log(data,"____data__")

        if (formValue.uniqueId) {
            data = { ...data, rate: sum,subProject:formValue?.subProject,customer:formValue?.customer, projectType:formValue?.projectType,project:formValue?.project}
            dispatch(AdminActions.postAccuralRevenueMasterProject(data, () => {
                setIsOpen(false)
                dispatch(AdminActions.getAccuralRevenueMasterProject(true, filtervalue))
            }, formValue.uniqueId))
        } else {
            dispatch(AdminActions.postAccuralRevenueMasterProject(data, () => {
                setIsOpen(false)
                dispatch(AdminActions.getAccuralRevenueMasterProject())
            }))
        }
    }



    // console.log(formValue,"___formValue___")
    useEffect(() => {
        dispatch(GET_ACCURAL_REVENUE_MASTER_PROJECTTYPE({ dataAll: [], reset: true }));
        dispatch(GET_ACCURAL_REVENUE_MASTER_PROJECTID({ dataAll: [], reset: true }));
        dispatch(GET_ACCURAL_REVENUE_MASTER_SUBPROJECTTYPE({ dataAll: [], reset: true }));
       if (!isOpen) {
            reset({});
            Form.forEach(key => { setValue(key.name, formValue[key.name] || "")
                // console.log(key.name,formValue[key.name] , 'sdfjksdhfkjhasdkfasdkjfakjsdfkasjdfhkajsdfhlkasdhfkashd')
                if(['itemRate01','itemRate02','itemRate03','itemRate04','itemRate05','itemRate06','itemRate07'].includes(key.name)&& formValue[key.name]){
                setAmmount((prev) => ({
                            ...prev,
                            [key.name]: +formValue[key.name]
                        }));
            }

            });
            
        } else {
            reset({});
        }
    }, [isOpen, formValue, resetting,dynamicFormData]);




    return <>
        <Modal size={"xl"} children={<><CommonForm classes={"grid-cols-1 gap-1"} Form={rateForm?.length > 0 ? rateForm : Form} errors={errors} register={register} setValue={setValue} getValues={getValues} /></>} isOpen={modalOpen} setIsOpen={setmodalOpen} />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full pb-4">

            <CommonForm classes={"grid-cols-2 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
            <Button classes={"mt-2 w-sm text-center flex mx-auto"} onClick={(handleSubmit(onTableViewSubmit))} name="Submit" />
        </div>
    </>


};

export default AccuralRevenueMasterForm;
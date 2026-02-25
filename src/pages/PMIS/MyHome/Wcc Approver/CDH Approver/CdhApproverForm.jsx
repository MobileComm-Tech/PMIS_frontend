import React from 'react'
import CommonForm from '../../../../../components/CommonForm'
import { useForm } from 'react-hook-form';
import Button from '../../../../../components/Button';
import { useDispatch } from 'react-redux';
import MyHomeActions from '../../../../../store/actions/myHome-actions';

const CdhApproverForm = ({itm,setmodalOpen,setmodalBody,setmodalHead}) => {


    const dispatch = useDispatch();
      const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        getValues,
        formState: { errors },
      } = useForm();

const Form =[
    { label: "File", value: "", name: "file",  type: "file" },
    // { label: "Note", value: "", name: "note", required: true, type: "text" },
  ];


  const handleFileSubmit =(data)=>{
   

        // const finalData = {...data,ssid:itm?.ssid,vendorItemCode:itm?.vendorItemCode,status:"Approved"}
        const formData = new FormData();
        console.log(data,"__Datat")
        formData.append('file',data.file[0])
        formData.append('ssid',itm?.ssid)
        formData.append('vendorItemCode',itm?.vendorItemCode)
        formData.append('status',"Approved")

        console.log(formData,"__finalData__")
        dispatch(MyHomeActions.postCdhActions(formData,()=>{
               dispatch(MyHomeActions.getCdhApprover());
        },null))
        handleModalClose()
  }

   const handleModalClose = () => {
    // dataAll();
    setmodalOpen(false);
    setmodalBody(<></>);
    setmodalHead(<></>);

    // setSelectedRow(null);
  };

  return (
    <div>
       <CommonForm
                    classes={"grid-cols-1 gap-1"}
                    Form={Form}
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                  />
           <Button  classes={
                  "w-auto mx-auto mb-2 py-1 font-extrabold px-50 py-5 text-[16px]"
                }
                  name="Upload"
                  onClick={handleSubmit(handleFileSubmit)}
                />       
    </div>
  )
}

export default CdhApproverForm

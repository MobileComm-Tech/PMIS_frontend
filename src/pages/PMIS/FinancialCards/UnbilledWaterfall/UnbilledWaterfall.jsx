import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import EditButton from '../../../../components/EditButton';
import AdvancedTable from '../../../../components/AdvancedTable';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import DeleteButton from '../../../../components/DeleteButton';
import CstmButton from '../../../../components/CstmButton';
import ToggleButton from '../../../../components/ToggleButton';
import {
  getAccessType,
  objectToQueryString,
} from '../../../../utils/commonFunnction';
import { ALERTS } from '../../../../store/reducers/component-reducer';
import CommonActions from '../../../../store/actions/common-actions';
import { Urls } from '../../../../utils/url';
// import OperationManagementActions from '../../../../store/actions/OperationManagement-actions';
import InvoiceBasedForm from '../InvoiceBased/InvoiceBasedForm';
import FinanceActions from '../../../../store/actions/finance-actions';
import { range } from '../../../../components/CommonObjectsAndVariables';
import ConditionalButton from '../../../../components/ConditionalButton';
import FileUploader from '../../../../components/FIleUploader';
import { useParams } from 'react-router-dom';
import { GET_UNBILLED } from '../../../../store/reducers/finance-reducer';

const Unbilled = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  const [modalHead, setmodalHead] = useState(<></>);
  const [itemColumns, setItemColumns] = useState([]);
  const [fileOpen, setFileOpen] = useState(false);
  const { customer, customerId } = useParams();
  const [strValFil, setstrVal] = useState(false);

  let dispatch = useDispatch();
  // let roleList = useSelector((state) => {
  //     let interdata = state?.operationManagement?.USERS_LIST
  //     return interdata
  // })
  let dbConfigList = useSelector((state) => {
    // let interdata = state?.financeData?.getPoLifeCycle || []
    // return interdata?.map((itm) => {
    //     let updateditm = {
    //         ...itm,

    //         "edit": <CstmButton className={"p-2"} child={<EditButton name={""} onClick={() => {
    //             setmodalOpen(true)
    //             dispatch(FinanceActions.getPoLifeCycle())
    //             setmodalHead("Edit User")
    //             setmodalBody(<>
    //                 <InvoiceBased isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={false} formValue={itm} />
    //                 {/* <div className='mx-3'><Button name={"Submit"} classes={""} onClick={(handleSubmit(onTableViewSubmit))} /></div> */}
    //             </>)
    //             // console.log('ahshshhs',itm)
    //             //setmodalOpen(false)
    //         }}></EditButton>} />,

    //         "delete": <CstmButton child={<DeleteButton name={""} onClick={() => {
    //             let msgdata = {
    //                 show: true,
    //                 icon: 'warning',
    //                 buttons: [
    //                     <Button classes='w-15 bg-rose-400' onClick={() => {
    //                         dispatch(CommonActions.deleteApiCaller(`${Urls.finance_poLifeCycle}/${itm.uniqueId}`, () => {
    //                             dispatch(FinanceActions.getPoLifeCycle())
    //                             dispatch(ALERTS({ show: false }))
    //                         }))
    //                     }} name={"OK"} />,
    //                     <Button classes='w-auto' onClick={() => {
    //                         dispatch(ALERTS({ show: false }))
    //                     }} name={"Cancel"} />
    //                 ],
    //                 text: "Are you sure you want to Delete?"
    //             }
    //             dispatch(ALERTS(msgdata))
    //         }}></DeleteButton>} />
    //     }
    //     return updateditm
    // });
    // let interdata = state?.financeData?.getUnbillled || [];
    // return interdata;
    return state?.financeData?.getUnbillled || [];
  });
  let dbConfigTotalCount = useSelector((state) => {
    // let interdata = state?.financeData?.getPoLifeCycle || []\
    let interdata = state?.financeData?.getUnbillled || [];
    if (interdata.length > 0) {
      return interdata[0]['overall_table_count'];
    } else {
      return 0;
    }
  });
  // let Form = [
  //     { label: "DB Server", value: "", option: ["Please Select Your DB Server"], type: "select" },
  //     { label: "Custom Queries", value: "", type: "textarea" }
  // ]
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setValues,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    let allItemInputsColums = [];
    for (let i = range.start; i <= range.end; i++) {
      const itemCodes = {
        name: `Item Code ${i}`,
        value: `Item Code ${i}`,
        style: 'min-w-[100px] max-w-[200px] text-center',
      };

      const itemDescriptions = {
        name: `Description ${i}`,
        value: `Item Code Description ${i}`,
        style: 'min-w-[140px] max-w-[200px] text-center',
      };
      const itemQuantity = {
        name: `Quantity ${i}`,
        value: `Quantity ${i}`,
        style: 'min-w-[100px] max-w-[200px] text-center',
      };
      const itemRate = {
        name: `Rate ${i}`,
        value: `Item Rate ${i}`,
        style: 'min-w-[100px] max-w-[200px] text-center',
      };
      allItemInputsColums.push(itemCodes);
      allItemInputsColums.push(itemDescriptions);
      allItemInputsColums.push(itemQuantity);
      allItemInputsColums.push(itemRate);
    }
    setItemColumns(allItemInputsColums);
  }, []);

  let table = {
    columns: [
      //   {
      //     name: 'Project ID',
      //     value: 'projectId',
      //     style: 'min-w-[140px] max-w-[200px] text-center',
      //   },
      {
        name: 'Project Group',
        //     value: "projectGroup",
        //     style: "min-w-[140px] max-w-[200px] text-center"
        // },
        value: 'Project Group',
        style:
          'min-w-[140px] max-w-[200px] text-center sticky  bg-[#3e454d] z-10',
      },

      {
        name: 'Project Type',
        //
        value: 'Project Type',
        style: 'min-w-[100px] max-w-[200px] text-center p-2',
      },
      {
        name: 'Project ID',
        value: 'Project ID',
        style: 'min-w-[160px] max-w-[200px] text-center  bg-[#3e454d] z-10',
      },
      {
        name: 'Sub Project',
        value: 'Sub Project',
        style: 'min-w-[140px] max-w-[200px] text-center',
      },
      {
        name: 'SSID',
        value: 'SSID',
        style: 'min-w-[120px] max-w-[200px] text-center bg-[#3e454d] z-10',
      },
      {
        name: 'Site ID',
        value: 'Site Id',
        style: 'min-w-[140px] max-w-[200px] text-center bg-[#3e454d] z-10',
      },
      {
        name: 'BAND',
        value: 'BAND',
        style: 'min-w-[140px] max-w-[200px] text-center',
      },
      {
        name: 'Activity',
        value: 'ACTIVITY',
        style: 'min-w-[140px] max-w-[200px] text-center',
      },
      {
        name: 'MS1 Completion Date',
        value: 'MS1 Completion Date',
        style: 'min-w-[160px] max-w-[200px] text-center',
      },
      {
        name: 'MS2 Completion Date',
        value: 'MS2 Completion Date',
        style: 'min-w-[160px] max-w-[200px] text-center',
      },
      {
        name: 'Billing Status',
        value: 'Billing Status',
        style: 'min-w-[140px] max-w-[200px] text-center',
      },
      {
        name: 'Unbilled MS1 Done',
        value: 'Unbilled MS1 Done',
        style: 'min-w-[140px] max-w-[200px] text-center',
      },
      {
        name: 'Unbilled MS2 Done',
        value: 'Unbilled MS2 Done',
        style: 'min-w-[140px] max-w-[200px] text-center',
      },
      {
        name: 'Total Unbilled',
        value: 'Unbilled',
        style: 'min-w-[100px] max-w-[200px] text-center',
      },
      {
        name: 'IRR Amount',
        value: 'IRR Amount',
        style: 'min-w-[100px] max-w-[200px] text-center',
      },
      {
        name: 'IRR Month',
        value: 'IRR Month',
        style: 'min-w-[100px] max-w-[200px] text-center',
      },
      ...itemColumns,
    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },
    filter: [
      // {
      //     label: "Role",
      //     type: "select",
      //     name: "rolename",
      //     option: roleList,
      //     props: {
      //     }
      // }
      {
        label: 'Billing Status',
        type: 'select',
        name: 'siteBillingStatus',
        option: [
          { label: 'Billed', value: 'Billed' },
          { label: 'Unbilled', value: 'Unbilled' },
          { label: 'Partially Billed', value: 'Partially Billed' },
        ],
        props: {},
      },
    ],
  };
  // const onSubmit = (data) => {
  //     // console.log("jsjsjsjss", data)
  //     let value = data.reseter
  //     delete data.reseter
  //     dispatch(FinanceActions.getPoLifeCycle(value, objectToQueryString(data)))
  // }


  // Changes 13-04-2026
  // const onSubmit = (data) => {
  //   delete data.reseter;
  //   let strVal = objectToQueryString(data);
  //   setstrVal(strVal);
  //   dispatch(FinanceActions.getUnbilled(true, '', strVal, customerId));
  // };
    const onSubmit = (data) => {
    let value = data?.reseter;
    delete data?.reseter;

    let strVal = objectToQueryString(data);
    setstrVal(strVal);

    dispatch(
      FinanceActions.getUnbilled(
        true,
        strVal,
        customerId
      )
    );
  };

  useEffect(() => {
    // dispatch(FinanceActions.getPoLifeCycle())
    dispatch(GET_UNBILLED({ dataAll: [], reset: true }));
    // Changes 13-04-2026
    // fjhgjvh
    // dispatch(FinanceActions.getUnbilled(true, '', '',customerId));
    dispatch(FinanceActions.getUnbilled(true, '', customerId));
  }, []);

  const onTableViewSubmit = (data) => {
    data['fileType'] = 'Unbilled';
    dispatch(
      CommonActions.fileSubmit(
        Urls.common_file_uploadr + '/' + customerId,
        data,
        () => {
          dispatch(FinanceActions.getUnbilled(true, '', '', customerId));
          setFileOpen(false);
          resetting('');
        },
      ),
    );
  };

  return (
    <>
      <AdvancedTable
        // headerButton={<><Button onClick={(e) => {
        //     setmodalOpen(prev => !prev)
        //     setmodalHead("New PO Life Cycle ")
        //     setmodalBody(<POLifeCycleForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={true} formValue={{}} />)
        // }}
        //     name={"Add New"}></Button></>}
        headerButton={
          <>
            <ConditionalButton
              showType={getAccessType('Upload(Unbilled)')}
              name={'Upload'}
              classes="w-auto mr-1"
              onClick={(e) => {
                setFileOpen((prev) => !prev);
              }}
            ></ConditionalButton>
            <ConditionalButton
              showType={getAccessType('Export(Unbilled)')}
              name={'Export'}
              classes="w-auto mr-1"
              onClick={() => {
                dispatch(
                  CommonActions.commondownload(
                    `/export/Unbilled/${customerId}` + '?' + strValFil,
                    `Export_${customer}_Unbilled.xlsx`,
                  ),
                );
              }}
            ></ConditionalButton>
          </>
        }
        table={table}
        filterAfter={onSubmit}
        tableName={'UserListTable'}
        handleSubmit={handleSubmit}
        data={dbConfigList}
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
        totalCount={dbConfigTotalCount}
        heading={'Total Count:- '}
      />
      <FileUploader
        isOpen={fileOpen}
        fileUploadUrl={''}
        onTableViewSubmit={onTableViewSubmit}
        setIsOpen={setFileOpen}
        tempbtn={false}
        tempbtnlink={[]}
      />

      <Modal
        size={'sm'}
        modalHead={modalHead}
        children={modalBody}
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
      />

      {/* <CommonForm/> */}
    </>
  );
};

export default Unbilled;
///////////////////////////////////////////////////////////OLD CODE
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import * as Unicons from '@iconscout/react-unicons';
// import { useDispatch, useSelector } from 'react-redux';
// import EditButton from '../../../../components/EditButton';
// import AdvancedTable from '../../../../components/AdvancedTable';
// import Modal from '../../../../components/Modal';
// import Button from '../../../../components/Button';
// import DeleteButton from '../../../../components/DeleteButton';
// import CstmButton from '../../../../components/CstmButton';
// import ToggleButton from '../../../../components/ToggleButton';
// import { objectToQueryString } from '../../../../utils/commonFunnction';
// import { ALERTS } from '../../../../store/reducers/component-reducer';
// import CommonActions from '../../../../store/actions/common-actions';
// import { Urls } from '../../../../utils/url';
// // import OperationManagementActions from '../../../../store/actions/OperationManagement-actions';
// import InvoiceBasedForm from '../InvoiceBased/InvoiceBasedForm';
// import FinanceActions from '../../../../store/actions/finance-actions';

// const Unbilled = () => {
//     const [modalOpen, setmodalOpen] = useState(false)
//     const [modalBody, setmodalBody] = useState(<></>)
//     const [modalHead, setmodalHead] = useState(<></>)
//     let dispatch = useDispatch()
//     // let roleList = useSelector((state) => {
//     //     let interdata = state?.operationManagement?.USERS_LIST
//     //     return interdata
//     // })
//     let dbConfigList = useSelector((state) => {
//         let interdata = state?.financeData?.getPoLifeCycle || []
//         return interdata?.map((itm) => {
//             let updateditm = {
//                 ...itm,

//                 "edit": <CstmButton className={"p-2"} child={<EditButton name={""} onClick={() => {
//                     setmodalOpen(true)
//                     dispatch(FinanceActions.getPoLifeCycle())
//                     setmodalHead("Edit User")
//                     setmodalBody(<>
//                         <InvoiceBased isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={false} formValue={itm} />
//                         {/* <div className='mx-3'><Button name={"Submit"} classes={""} onClick={(handleSubmit(onTableViewSubmit))} /></div> */}
//                     </>)
//                     // console.log('ahshshhs',itm)
//                     //setmodalOpen(false)
//                 }}></EditButton>} />,

//                 "delete": <CstmButton child={<DeleteButton name={""} onClick={() => {
//                     let msgdata = {
//                         show: true,
//                         icon: 'warning',
//                         buttons: [
//                             <Button classes='w-15 bg-rose-400' onClick={() => {
//                                 dispatch(CommonActions.deleteApiCaller(`${Urls.finance_poLifeCycle}/${itm.uniqueId}`, () => {
//                                     dispatch(FinanceActions.getPoLifeCycle())
//                                     dispatch(ALERTS({ show: false }))
//                                 }))
//                             }} name={"OK"} />,
//                             <Button classes='w-auto' onClick={() => {
//                                 dispatch(ALERTS({ show: false }))
//                             }} name={"Cancel"} />
//                         ],
//                         text: "Are you sure you want to Delete?"
//                     }
//                     dispatch(ALERTS(msgdata))
//                 }}></DeleteButton>} />
//             }
//             return updateditm
//         });
//     })
//     let dbConfigTotalCount = useSelector((state) => {
//         let interdata = state?.financeData?.getPoLifeCycle || []
//         if (interdata.length > 0) {
//             return interdata[0]["overall_table_count"]
//         } else {
//             return 0
//         }
//     })
//     // let Form = [
//     //     { label: "DB Server", value: "", option: ["Please Select Your DB Server"], type: "select" },
//     //     { label: "Custom Queries", value: "", type: "textarea" }
//     // ]
//     const {
//         register,
//         handleSubmit,
//         watch,
//         setValue,
//         setValues,
//         getValues,
//         formState: { errors },
//     } = useForm()

//     let table = {
//         columns: [
//             {
//                 name: "Project ID",
//                 value: "projectId",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Project Group",
//                 value: "projectGroup",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Project Type",
//                 value: "projectType",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Sub Project Type",
//                 value: "subProjectType",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "System Ref ID",
//                 value: "systemRefId",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Site Id",
//                 value: "siteId",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "RFAI Date",
//                 value: "rfaiDate",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "MD Date",
//                 value: "mdDate",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "MS1 Date",
//                 value: "ms1Date",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "MS2 Date",
//                 value: "invoiceNumber",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Item Code",
//                 value: "itemCode",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Total Unbilled Amount",
//                 value: "totalUnbilledAmount",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             // {
//             //     name: "Edit",
//             //     value: "edit",
//             //     style: "min-w-[100px] max-w-[200px] text-center"
//             // },
//             // {
//             //     name: "Delete",
//             //     value: "delete",
//             //     style: "min-w-[100px] max-w-[200px] text-center"
//             // }
//         ],
//         properties: {
//             rpp: [10, 20, 50, 100]
//         },
//         filter: [
//             // {
//             //     label: "Role",
//             //     type: "select",
//             //     name: "rolename",
//             //     option: roleList,
//             //     props: {
//             //     }
//             // }
//         ]
//     }
//     const onSubmit = (data) => {
//         // console.log("jsjsjsjss", data)
//         let value = data.reseter
//         delete data.reseter
//         dispatch(FinanceActions.getPoLifeCycle(value, objectToQueryString(data)))
//     }
//     useEffect(() => {
//         // dispatch(FinanceActions.getPoLifeCycle())
//     }, [])
//     return <>
//         <AdvancedTable
//             // headerButton={<><Button onClick={(e) => {
//             //     setmodalOpen(prev => !prev)
//             //     setmodalHead("New PO Life Cycle ")
//             //     setmodalBody(<POLifeCycleForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={true} formValue={{}} />)
//             // }}
//             //     name={"Add New"}></Button></>}
//             table={table}
//             filterAfter={onSubmit}
//             tableName={"UserListTable"}
//             handleSubmit={handleSubmit}
//             data={dbConfigList}
//             errors={errors}
//             register={register}
//             setValue={setValue}
//             getValues={getValues}
//             totalCount={dbConfigTotalCount}
//             heading = {'Total Count:- '}
//         />

//         <Modal size={"sm"} modalHead={modalHead} children={modalBody} isOpen={modalOpen} setIsOpen={setmodalOpen} />

//         {/* <CommonForm/> */}
//     </>

// };

// export default Unbilled;

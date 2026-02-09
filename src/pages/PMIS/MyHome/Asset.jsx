import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import EditButton from '../../../components/EditButton';
import AdvancedTable from '../../../components/AdvancedTable';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import DeleteButton from '../../../components/DeleteButton';
import CstmButton from '../../../components/CstmButton';
import { objectToQueryString } from '../../../utils/commonFunnction';
import { ALERTS } from '../../../store/reducers/component-reducer';
import CommonActions from '../../../store/actions/common-actions';
import { Urls} from '../../../utils/url';
import AdminActions from '../../../store/actions/admin-actions';
import { useNavigate} from 'react-router-dom';
import ManageCustomerForm from '../Admin/ManageCustomer/ManageCustomerForm';




const Asset = () => {


    const [modalOpen, setmodalOpen] = useState(false)
    const [modalBody, setmodalBody] = useState(<></>)
    const [type, settype] = useState(false)
    const [modalHead, setmodalHead] = useState(<></>)


    let dispatch = useDispatch()

    let navigate = useNavigate()

    let dbConfigList = useSelector((state) => {
        let interdata = state?.adminData?.getMasterData
        return interdata?.map((itm) => {
            let updateditm = {
                ...itm,


                // "edit": <CstmButton className={"p-2"} child={<EditButton name={""} onClick={() => {
                //     setmodalOpen(true)
                //     dispatch(AdminActions.getManageCustomer())
                //     setmodalHead("Edit Customer Details")
                //     setmodalBody(<>
                //         <ManageCustomerForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={false} formValue={itm} />
                       
                //     </>)
                // }}></EditButton>} />,

                // "delete": <CstmButton child={<DeleteButton name={""} onClick={() => {
                //     let msgdata = {
                //         show: true,
                //         icon: 'warning',
                //         buttons: [
                //             <Button classes='w-15 bg-rose-400' onClick={() => {
                //                 dispatch(CommonActions.deleteApiCaller(`${Urls.admin_customer}/${itm.uniqueId}`, () => {
                //                     dispatch(AdminActions.getManageCustomer())
                //                     dispatch(ALERTS({ show: false }))
                //                 }))
                //             }} name={"OK"} />,
                //             <Button classes='w-auto' onClick={() => {
                //                 dispatch(ALERTS({ show: false }))
                //             }} name={"Cancel"} />
                //         ],
                //         text: "Are you sure you want to Delete?"
                //     }
                //     dispatch(ALERTS(msgdata))
                // }}></DeleteButton>} />,


                // "view": <CstmButton className={"p-5"} child={<Button name={""} onClick={() => {
                //     setmodalOpen(true)
                //     setmodalHead("Show PDF")
                //     setmodalBody(<>

                //     </>)
                // }}></Button>} />,




            }
            return updateditm
        });
    })
    let dbConfigTotalCount = useSelector((state) => {
        let interdata = state?.adminData?.getMasterData
        if (interdata.length > 0) {
            return interdata[0]["overall_table_count"]
        } else {
            return 0
        }
    })

    const { register, handleSubmit, watch, setValue, setValues, getValues, formState: { errors } } = useForm()


    let columnsList = [
        "region","State","market","clusterName","insertedDate",	"Key","Vendor","Grad Month","LID","Grid_Morphology","Grid_Pops","Urban_Pops","Rural_Pops","Date_Time_Start","Technology","ST_TASKID","ST_Technology_Test","ST_DL Speed (Mbps)","ST_LATITUDE_START","ST_LONGITUDE_START","ST_NR_CA_SITEID_0","ST_NR_CA_SERVINGCELLID_0","ST_NR_CA_SERVINGCELLID_1","ST_NR_CA_SERVINGCELLID_2","ST_NR_CA_NR_ARFCN_0",	"ST_NR_CA_AVG_RSRP_CARRIER_0","ST_NR_CA_AVG_RSRP_CARRIER_1","ST_NR_CA_AVG_RSRP_CARRIER_2","ST_NR_CA_BANDWIDTH_DL_0","ST_NR_CA_BANDWIDTH_DL_1","ST_NR_CA_BANDWIDTH_DL_2","ST_LTE_CA_SITEID_0","ST_LTE_CA_SERVINGCELLID_0","ST_LTE_CA_SERVINGCELLID_1","ST_LTE_CA_BANDWIDTH_DL_0","MO_TASKID","MO_Technology_Test","MO_DL Speed (Mbps)","MO_LATITUDE_START","MO_LONGITUDE_START","MO_NR_CA_SITEID_0","MO_NR_CA_SERVINGCELLID_0","MO_NR_CA_SERVINGCELLID_1","MO_NR_CA_SERVINGCELLID_2","MO_NR_CA_NR_ARFCN_0","MO_NR_CA_AVG_RSRP_CARRIER_0","MO_NR_CA_AVG_RSRP_CARRIER_1","MO_NR_CA_AVG_RSRP_CARRIER_2","MO_NR_CA_BANDWIDTH_DL_0","MO_NR_CA_BANDWIDTH_DL_1","MO_NR_CA_BANDWIDTH_DL_2","MO_LTE_CA_SITEID_0","MO_LTE_CA_SERVINGCELLID_0", "MO_LTE_CA_SERVINGCELLID_1","MO_LTE_CA_BANDWIDTH_DL_0","ST_MO_Tests","Combined Speed Flag","Combined Speed","Speed_Category","Prediction_Speed_Category","Comparison","Grid_Status","Skip_LAST_MODIFIED_DATE","Skip_Grid_From_Skip_ID","SKIP_ID","SKIP_CAUSE","SKIP_REVISITED","DRIVER_TEXT","Scanner Missing"
    ]

    const columns = columnsList.map(col => ({
        name:col,
        value:col,
        style: "min-w-[200px] max-w-[300px] text-center"

    }))

    let table = {
        // columns: [
        //     {
        //         name: "Region",
        //         value: "region",
        //         // style: "min-w-[100px] max-w-[100px] text-center sticky left-0 bg-[#3e454d]"
        //         style: "min-w-[100px] max-w-[100px] text-center"
        //     },
        //     {
        //         name: "State",
        //         value: "State",
        //         // style: "min-w-[100px] max-w-[100px] text-center sticky left-0 bg-[#3e454d]",
        //         style: "min-w-[100px] max-w-[100px] text-center"
        //     },
        columns:columns,
        properties: {
            rpp: [10, 20, 50, 100]
        },
        
        filter: []
    }





    const onSubmit = (data) => {
        let value = data.reseter
        delete data.reseter
        dispatch(AdminActions.getMasterData(value, objectToQueryString(data)))
    }

    useEffect(() => {
        dispatch(AdminActions.getMasterData())
    }, [])

    return <>
        <AdvancedTable
            headerButton={
                <> 
                    {/* <Button onClick={() => {
                    }}
                    name={"Add New"}>
                    </Button> */}
                </>
            }
            table={table}
            filterAfter={onSubmit}
            tableName={"masterDataTable"}
            handleSubmit={handleSubmit}
            data={dbConfigList}
            errors={errors}
            register={register}
            setValue={setValue}
            getValues={getValues}
            totalCount={dbConfigTotalCount}
            heading={"Total Records : "}
        />

        <Modal size={"sm"} modalHead={modalHead} children={modalBody} isOpen={modalOpen} setIsOpen={setmodalOpen} />
    </>
}

export default Asset;

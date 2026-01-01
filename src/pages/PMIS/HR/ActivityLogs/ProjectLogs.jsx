import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import AdvancedTable from '../../../../components/AdvancedTable';
import Button from '../../../../components/Button';
import AdminActions from '../../../../store/actions/admin-actions';
import { objectToQueryString } from '../../../../utils/commonFunnction';
import CommonActions from '../../../../store/actions/common-actions';


const ProjectLogs = () => {


    let dispatch = useDispatch()

    let dbConfigList = useSelector((state) => {
        let interdata = state?.adminData?.getManageProjectLogs || []
        return interdata?.map((itm) => {
            let updateditm = {
                ...itm,
            }
            return updateditm
        });
    })
    
    let dbConfigTotalCount = useSelector((state) => {
        let interdata = state?.adminData?.getManageProjectLogs
        if (interdata.length > 0) {
            return interdata[0]["overall_table_count"]
        } else {
            return 0
        }
    })

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setValues,
        getValues,
        formState: { errors },
    } = useForm()

    let table = {
        columns: [
            {
                name: "Project Id",
                value: "projectId",
                style: "min-w-[100px] max-w-[100px] text-center"
            },
           
            {
                name: "Site Id",
                value: "siteId",
                style: "min-w-[100px] max-w-[100px] text-center"
            },
            {
                name: "System Id",
                value: "systemId",
                style: "min-w-[90px] max-w-[90px] text-center"
            },
            {
                name: "Milestone",
                value: "milestone",
                style: "min-w-[100px] max-w-[100px] text-center"
            },             
            {
                name: "User Mail",
                value: "usermail",
                style: "min-w-[100px] max-w-[100px] text-center"
            },                      
            {
                name: "Date & Time",
                value: "actionAt",
                style: "min-w-[90px] max-w-[90px] text-center"
            },           
            {
                name: "Event",
                value: "event",
                style: "min-w-[200px] max-w-[300px] text-center"
            },           
        ],
        properties: {
            rpp: [10, 20, 50, 100]
        },
        filter: []
    }

    const onSubmit = (data) => {
        let value = data.reseter
        delete data.reseter
        dispatch(AdminActions.getProjectLogs(value, objectToQueryString(data)))
    }

    useEffect(() => {
        dispatch(AdminActions.getProjectLogs())
      
    }, [])

    return <>
        <AdvancedTable
            headerButton={<>
            <div className="flex gap-1">
              <Button
              classes="w-auto"
              onClick={(e) => {
                dispatch(CommonActions.commondownload("/export/ProjectLogs","Export_AdminLogs.xlsx"))
              }}
              name={"Export"}
            ></Button>
            </div>
            </>}
            table={table}
            filterAfter={onSubmit}
            tableName={"Projectlogs"}
            handleSubmit={handleSubmit}
            data={dbConfigList}
            errors={errors}
            register={register}
            setValue={setValue}
            getValues={getValues}
            totalCount={dbConfigTotalCount}
            heading={"Total:-"}
        />
    </>


};

export default ProjectLogs;
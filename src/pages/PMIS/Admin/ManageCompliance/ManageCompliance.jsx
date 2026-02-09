import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import AdvancedTable from '../../../../components/AdvancedTable';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import DeleteButton from '../../../../components/DeleteButton';
import CstmButton from '../../../../components/CstmButton';
import { objectToQueryString } from '../../../../utils/commonFunnction';
import FileUploader from '../../../../components/FIleUploader';
import { ALERTS } from '../../../../store/reducers/component-reducer';
import CommonActions from '../../../../store/actions/common-actions';
import { Urls } from '../../../../utils/url';
import AdminActions from '../../../../store/actions/admin-actions';
import EditButton from '../../../../components/EditButton';
import { GET_FINANCIAL_WORKDONE_PROJECT_TYPE } from '../../../../store/reducers/filter-reducer';
import { masterUnitRateWithActivityFilter, range } from '../../../../components/CommonObjectsAndVariables';
import SearchBarView from '../../../../components/SearchBarView';
const ManageCompliance = () => {

    const [modalOpen, setmodalOpen] = useState(false)
    const [fileOpen, setFileOpen] = useState(false)
    const [modalBody, setmodalBody] = useState(<></>)
    const [modalHead, setmodalHead] = useState(<></>)
    const [strValFil, setstrVal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const debounceTimeout = useRef(null);
    
    let dispatch = useDispatch()
    let dbConfigList = useSelector((state) => {
        let interdata = state?.adminData?.getCompiliance
        return interdata?.map((itm) => {
            
            let updateditm = {
                ...itm,
            }
            return updateditm
        });
    })

    let dbConfigTotalCount = useSelector((state) => {
        let interdata = state?.adminData?.getCompiliance;
        if (interdata.length > 0) {
        return interdata[0]["overall_table_count"];
        } else {
        return 0;
        }
    });

    

    const {register,handleSubmit,watch,setValue,setValues,getValues,formState: { errors },} = useForm()

    

    let table = {
        columns: [
            
            {
                name: "Date",
                value: "date",
                style: "min-w-[80px] max-w-[80px] text-center sticky"
            },
            {
                name: "Driver Name",
                value: "driver",
                style: "min-w-[120px] max-w-[200px] text-center sticky"
            },
            {
                name: "Team#",
                value: "",
                style: "min-w-[80px] max-w-[80px] text-center sticky"
            },
            {
                name: "Drive Test Vendor",
                value: "vendor",
                style: "min-w-[100px] max-w-[100px] text-center sticky"
            },
            {
                name: "Upload ID",
                value: "",
                style: "min-w-[120px] max-w-[120px] text-center sticky"
            },
            {
                name: "Market",
                value: "market",
                style: "min-w-[140px] max-w-[200px] text-center"
            },
            {
                name: "Cluster Name",
                value: "clusterName",
                style: "min-w-[140px] max-w-[200px] text-center"
            },
            {
                name: "# of Grids Completed",
                value: "total_tested",
                style: "min-w-[160px] max-w-[200px] text-center"
            },
            {
                name: "# valid_sufficient_no neighbour",
                value: "case1",
                style: "min-w-[180px] max-w-[200px] text-center"
            },
            {
                name: "# valid_sufficient_neighbour_with remark",
                value: "case2",
                style: "min-w-[250px] max-w-[300px] text-center"
            },
            {
                name: "# valid_insufficient_with remark",
                value: "case3",
                style: "min-w-[180px] max-w-[200px] text-center"
            },
            {
                name: "Total Skipped",
                value: "total_skipped",
                style: "min-w-[140px] max-w-[200px] text-center"
            },
            {
                name: "#Skipped payble",
                value: "skip_case1",
                style: "min-w-[140px] max-w-[200px] text-center"
            },
            {
                name: "#Skipped non-payble",
                value: "skip_case2",
                style: "min-w-[140px] max-w-[200px] text-center"
            },
            
        ],
        properties: {
            rpp: [10, 20, 50, 100]
        },
        filter: [
            
        ]
    }

    const onSubmit = (data) => {
        let shouldReset = data.reseter;
        delete data.reseter
        let strVal = objectToQueryString(data);
        setstrVal(strVal);
        dispatch(AdminActions.getAccuralRevenueMasterProject(true,strVal+"&"+masterUnitRateWithActivityFilter))
    }

    
    useEffect(() => {
        dispatch(AdminActions.getCompiliance());
    }, []);


    const onTableViewSubmit3 = (data) => {
        data["fileType"] = "UploadAccuralRevenueMasterWithActivity";
        dispatch(
          CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
            setFileOpen(false);
            dispatch(AdminActions.getAccuralRevenueMasterProject(true,masterUnitRateWithActivityFilter));
            resetting("");
          })
        );
    };


      const handleSearch = (value) => {
        dispatch(AdminActions.getCompiliance(true,value !== "" ? "filterData=" + value:""))
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);


        if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
        }


        debounceTimeout.current = setTimeout(() => {
        handleSearch(value);
        }, 500); 
    };
   
    return <>
        <AdvancedTable
            searchView={
                <>
                    <SearchBarView
                    onblur={(e) => {
                    }}
                    onchange={handleChange}
                    placeHolder={"Search...."}
                    />
                </>
            }
            headerButton={
                <div className='flex gap-1'>
                    {/* <Button
                        name={"Add New"}
                        classes="w-auto"
                        onClick={(e) => {setmodalOpen((prev) => !prev)
                        setmodalHead("Add Master Rate") 
                        setmodalBody( <AccuralRevenueMasterWithActivityForm  isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={true} formValue={{}} />) 
                        }}>
                    </Button> */}
                    {/* <Button
                        name={"Upload"}
                        classes="w-auto"
                        onClick={(e) => {setFileOpen((prev) => !prev);}}>
                    </Button> */}
                    <Button
                        name={"Export"}
                        classes="w-auto"
                        onClick={() => {
                            const url =
                                searchTerm !== ""
                                    ? `/admin/addComplianceForm/id?filterData=${searchTerm}`
                                    : `/admin/addComplianceForm/id`;
                            dispatch(CommonActions.commondownload(url,"Export_Day_wise_project_tracking.xlsx"))
                          }}>
                    </Button>
                </div>
            }
            table={table}
            filterAfter={onSubmit}
            tableName={"UserListTable"}
            handleSubmit={handleSubmit}
            data={dbConfigList}
            errors={errors}
            register={register}
            setValue={setValue}
            getValues={getValues}
            totalCount={dbConfigTotalCount}
            heading = {'Total Count :-  '}
        />
        <Modal size={"sm"} modalHead={modalHead} children={modalBody} isOpen={modalOpen} setIsOpen={setmodalOpen} />
        <FileUploader
        isOpen={fileOpen}
        fileUploadUrl={""}
        onTableViewSubmit={onTableViewSubmit3}
        setIsOpen={setFileOpen}
        tempbtn={true} tempbtnlink = {["/template/AccuralRevenueMasterWithActivity.xlsx","AccuralRevenueMasterWithActivity.xlsx"]}
        head = {"Upload File"}
      />

    </>

};

export default ManageCompliance;
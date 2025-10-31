    import React, { useEffect, useState } from "react";
    import { useForm } from "react-hook-form";
    import * as Unicons from "@iconscout/react-unicons";
    import { useDispatch, useSelector } from "react-redux";
    import EditButton from "../../../components/EditButton";
    import ManageVendorForm from "../ManageVendor/ManageVendorForm";
    import AdvancedTable from "../../../components/AdvancedTable";
    import Modal from "../../../components/Modal";
    import Button from "../../../components/Button";
    import DeleteButton from "../../../components/DeleteButton";
    import CstmButton from "../../../components/CstmButton";
    import ToggleButton from "../../../components/ToggleButton";
    import {
    getAccessType,
    objectToQueryString,
    } from "../../../utils/commonFunnction";
    import { ALERTS } from "../../../store/reducers/component-reducer";
    import CommonActions from "../../../store/actions/common-actions";
    import HrActions from "../../../store/actions/hr-actions";
    import VendorActions from "../../../store/actions/vendor-actions";
    import { json, useNavigate, useParams } from "react-router-dom";
    import FileUploader from "../../../components/FIleUploader";
    import { GET_VENDOR_DETAILS, GET_VENDOR_PARTNER_TABLE_DATA } from "../../../store/reducers/vendor-reducer";
    import { routesObjects, Urls } from "../../../utils/url";
    import ConditionalButton from "../../../components/ConditionalButton";
    import ManageVendorPartnerTeamForm from "./ManageVendorPartnerTeamForm";

    // import { routesObjects } from "../../../components/CommonObjectsAndVariables";

    const ManageVendorPartnerTeam = () => {
    const [modalOpen, setmodalOpen] = useState(false);
    const [modalBody, setmodalBody] = useState(<></>);
    const [type, settype] = useState(false);
    const [fileOpen, setFileOpen] = useState(false);
    const [fileOpen2, setFileOpen2] = useState(false);
    const [modalHead, setmodalHead] = useState(<></>);
    const [strValFil, setstrVal] = useState(false);

    let dispatch = useDispatch();

    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setValues,
        getValues,
        formState: { errors },
    } = useForm();

    let showType = getAccessType("Actions(Partner Team)");
    // console.log(showType,"__showowo")
    let shouldIncludeEditColumn = false;
    let actionColumns=[]

    if (showType === "visible") {
        shouldIncludeEditColumn = true;
        actionColumns=[{
            name: "Edit",
            value: "edit",
            style: "min-w-[100px] max-w-[200px] text-center",
        },
        {
            name: "Delete",
            value: "delete",
            style: "min-w-[100px] max-w-[100px] text-center",
        },]
    }

    // if(shouldIncludeEditColumn===false){
        
    // }

    let dbConfigList = useSelector((state) => {
        let interdata = state?.vendorData?.getVendorPartnerTableList || [];
        return interdata?.map((itm) => {
        let updateditm = {
            ...itm,
            edit: (
            <CstmButton
                className={"p-2"}
                child={
                    <EditButton
                    name={""}
                    onClick={() => {
                        dispatch(GET_VENDOR_PARTNER_TABLE_DATA({ dataAll: [], reset: true }));

                        navigate(`${routesObjects?.partnerTeamForm}/${itm.uniqueId}`);
                        setmodalBody(
                        <>
                            <ManageVendorPartnerTeamForm
                            resetting={false}
                            formValue={itm}
                            />
                            {/* <div className='mx-3'><Button name={"Submit"} classes={""} onClick={(handleSubmit(onTableViewSubmit))} /></div> */}
                        </>
                        );
                        setmodalOpen(true);
                    }}
                    ></EditButton>

                
                }
            />
            ),

            delete: (
            <CstmButton
                child={
                <DeleteButton
                    name={""}
                    onClick={() => {
                    let msgdata = {
                        show: true,
                        icon: "warning",
                        buttons: [
                        <Button
                            classes="w-15 bg-rose-400"
                            onClick={() => {
                            dispatch(
                                CommonActions.deleteApiCallerBulk(
                                `${Urls.partnerTeamData}`,
                                {
                                    ids: [itm.uniqueId],
                                },
                                () => {
                                    dispatch(
                                    VendorActions.getVendorPartnerTeamData()
                                    );
                                    dispatch(ALERTS({ show: false }));
                                }
                                )
                            );
                            }}
                            name={"OK"}
                        />,
                        <Button
                            classes="w-auto"
                            onClick={() => {
                            dispatch(ALERTS({ show: false }));
                            }}
                            name={"Cancel"}
                        />,
                        ],
                        text: "Are you sure you want to Delete?",
                    };
                    dispatch(ALERTS(msgdata));
                    }}
                ></DeleteButton>
                }
            />
            ),

            view: (
            <CstmButton
                className={"p-5"}
                child={
                <Button
                    name={""}
                    onClick={() => {
                    setmodalOpen(true);
                    setmodalHead("Show PDF");
                    setmodalBody(
                        <>
                        {/* <div className='mx-3'><Button name={"Submit"} classes={""} onClick={(handleSubmit(onTableViewSubmit))} /></div> */}
                        </>
                    );
                    }}
                ></Button>
                }
            />
            ),
        };
        return updateditm;
        });
    });

    let dbConfigTotalCount = useSelector((state) => {
        let interdata = state?.vendorData?.getVendorPartnerTableList;
        if (interdata?.length > 0) {
        return interdata[0]["overall_table_count"];
        } else {
        return 0;
        }
    });
    // let Form = [
    //     { label: "DB Server", value: "", option: ["Please Select Your DB Server"], type: "select" },
    //     { label: "Custom Queries", value: "", type: "textarea" }
    // ]

    let table = {
        columns: [
        {
            name: "Team Lead Name",
            value: "teamLeadName",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold ",
            // sticky left-0 bg-[#3e454d] z-10
        },
        {
            name: "Mail id",
            value: "email",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        {
            name: "Contact Number",
            value: "contactNumber",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        //   {
        //     name: "Role",
        //     value: "type",
        //     style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        //   },
        {
            name: "Partner name",
            value: "partnerName",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        {
            name: "Partner code",
            value: "partnerCode",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        {
            name: "Partner mail id",
            value: "partnerMailId",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        {
            name: "Aadhar number",
            value: "aadharNumber",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        {
            name: "FARM Tocli/FARM Refresher",
            value: "farmTocliRefresher",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        {
            name: "FARM Tocli/FARM Refresher-Valid upto",
            value: "farmTocliRefresherValidUpto",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        {
            name: "Medical Test Certificate",
            value: "medicalTestCertificate",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        {
            name: "Medical Test Certificate-Valid upto",
            value: "medicalTestCertificateValidUpto",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        {
            name: "First Aid Training Certificate",
            value: "firstAidTrainingCertificate",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        {
            name: "First Aid Training Certificate-Valid upto",
            value: "firstAidTrainingCertificateValidUpto",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        {
            name: "Status",
            value: "status",
            style: "min-w-[150px] max-w-[450px] text-center font-extrabold",
        },
        ...actionColumns
        
        ],
        properties: {
        rpp: [10, 20, 50, 100],
        },
        filter: [
        {
            label: "Partner Name",
            type: "text",
            name: "partnerName",
            props: {},
        },
        {
            label: "Partner Code",
            type: "text",
            name: "partnerCode",
            props: {},
        },
        {
            label: "Team Lead Name",
            type: "text",
            name: "teamLeadName",
            props: {},
        },
        {
            label: "Mail ID",
            type: "text",
            name: "email",
            props: {},
        },
        {
            label: "Status",
            type: "select",
            name: "status",
            option: [
            { label: "Active", value: "Active" },
            { label: "Inactive", value: "Inactive" },
            ],
            props: {},
        },
        ],
    };
    const onSubmit = (data) => {
        let value = data.reseter;
        delete data.reseter;
        let strVal = objectToQueryString(data);

        setstrVal(strVal);

        dispatch(VendorActions.getVendorPartnerTeamData(true, strVal));
    };

    useEffect(() => {
        dispatch(VendorActions.getVendorPartnerTeamData());
    }, []);
    const onTableViewSubmit = (data) => {
        data["fileType"] = "partnerTeamUpload";
        dispatch(
        CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
            dispatch(VendorActions.getVendorPartnerTeamData());
            setFileOpen(false);
            resetting("");
        })
        );
    };
    const onTableViewSubmit2 = (data) => {
        data["fileType"] = "UpgradeVendor";
        dispatch(
        CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
            dispatch(VendorActions.getVendorPartnerTeamData());
            setFileOpen2(false);
            resetting("");
            
        })
        );
    };
    return (
        <>
        <AdvancedTable
            headerButton={
            <div className="flex">
                {" "}
                <ConditionalButton
                showType={getAccessType("Add New(Partner Team)")}
                classes="w-auto mr-1"
                onClick={() => {
                    dispatch(GET_VENDOR_DETAILS({ dataAll: [], reset: true }));
                    navigate(`${routesObjects?.partnerTeamForm}`);
                }}
                name={"Add New"}
                ></ConditionalButton>
                <ConditionalButton
                showType={getAccessType("Upload File(Partner Team)")}
                name={"Upload File"}
                classes="w-auto mr-1"
                onClick={(e) => {
                    setFileOpen((prev) => !prev);
                }}
                ></ConditionalButton>
                {/* <ConditionalButton
                                showType={getAccessType("Upgrade(Partner On-Board)")}
                                name={"Upgrade Partner"}
                                classes="w-auto mr-1"
                                onClick={(e) => {
                                    setFileOpen2((prev) => !prev);
                                }}
                            ></ConditionalButton> */}
            </div>
            }
            table={table}
            exportButton={[
            "/export/subVendor" + "?" + strValFil,
            "PartnerTeam.xlsx",
            ]}
            filterAfter={onSubmit}
            tableName={"ManagePartner"}
            handleSubmit={handleSubmit}
            data={dbConfigList}
            errors={errors}
            register={register}
            setValue={setValue}
            getValues={getValues}
            totalCount={dbConfigTotalCount}
            checkboxshow={shouldIncludeEditColumn}
            delurl={Urls.vendor_details}
            geturl={VendorActions.getVendorPartnerTeamData()}
            getaccessExport={"Export(Partner On-Board)"}
            heading={"Total Partner :- "}
        />

        <Modal
            size={"sm"}
            modalHead={modalHead}
            children={modalBody}
            isOpen={modalOpen}
            setIsOpen={setmodalOpen}
        />

        {/* <CommonForm/> */}
        <FileUploader
            isOpen={fileOpen}
            fileUploadUrl={""}
            onTableViewSubmit={onTableViewSubmit}
            setIsOpen={setFileOpen}
            tempbtn={true}
            tempbtnlink={["/template/PartnerTeamUpload.xlsx", "PartnerTeam.xlsx"]}
        />
        <FileUploader
            isOpen={fileOpen2}
            fileUploadUrl={""}
            onTableViewSubmit={onTableViewSubmit2}
            setIsOpen={setFileOpen2}
            tempbtn={true}
            tempbtnlink={["/template/ManageVendor.xlsx", "ManageVendor.xlsx"]}
        />
        </>
    );
    };

    export default ManageVendorPartnerTeam;

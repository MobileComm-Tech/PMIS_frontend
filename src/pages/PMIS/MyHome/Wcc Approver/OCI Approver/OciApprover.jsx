import React, { useEffect, useState } from 'react';
import AdvancedTable from '../../../../../components/AdvancedTable';
import {
  checkArray,
  CheckTrueOrFalse,
  CheckTrueOrFalseforApproval,
  checkTrueOrFalseDynamic,
  checkVariable,
} from '../../../../../components/CommonObjectsAndVariables';
import { useDispatch, useSelector } from 'react-redux';
import CommonActions from '../../../../../store/actions/common-actions';
import FormssActions from '../../../../../store/actions/formss-actions';
import ConditionalButton from '../../../../../components/ConditionalButton';
import {
  getAccessType,
  objectToQueryString,
} from '../../../../../utils/commonFunnction';
import FileUploader from '../../../../../components/FIleUploader';
import { Urls } from '../../../../../utils/url';
import MyHomeActions from '../../../../../store/actions/myHome-actions';
import { TbPlayerEjectFilled } from 'react-icons/tb';

import Modal from '../../../../../components/Modal';
import { useForm } from 'react-hook-form';
import CommonAlert from '../../../../../components/Common Alert/CommonAlert';
import VendorActions from '../../../../../store/actions/vendor-actions';
import OciApproverForm from './OciApproverForm';
// import { Modal } from '@material-ui/core';

const OciApprover = () => {
  const dispatch = useDispatch();
  const [fileOpen, setFileOpen] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  const [modalHead, setmodalHead] = useState(<></>);
  const [strValFil, setstrVal] = useState({});
  // const [strValFil, setstrVal] = useState(false);
  const [checkedData, setCheckData] = useState([]);
  const [checkedChildData, setCheckChildData] = useState([]);
  const isApprovedView =
    strValFil?.status !== undefined && strValFil?.status === 'Approved'
      ? true
      : false;
  const isRejectedView =
    strValFil?.status !== undefined && strValFil?.status === 'Rejected'
      ? true
      : false;

  // const [strValFil, setstrVal] = useState(false);

  // useEffect(()=>{
  //     dispatch(VendorActions.getWccSubmodule());
  // },[])
  // console.log(strValFil, '____strValFil');
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  let tableData = useSelector((state) => state?.myHomeData?.getOciApprover);
  useEffect(() => {
    const defaultPagination = objectToQueryString({ page: 1, limit: 50 });
    dispatch(MyHomeActions.getOciApprover(true, defaultPagination));
    dispatch(VendorActions.getWccSubmodule(true, defaultPagination));
    dispatch(VendorActions.getProjectTypeList());
  }, []);

  let projectTypeList = useSelector((state) => {
    return state?.vendorData?.getProjectTypeDetails?.map((itm) => {
      return {
        label: itm?.projectType,
        value: itm?.uid,
      };
    });
  });
  // console.log(projectTypeList, '__projectTypeList');
  const subProjectList = useSelector((state) => {
    return state?.vendorData?.getSubProjectDetails?.map((item) => ({
      label: item?.subProject,
      value: item?.subProjectId,
    }));
  });

  const table = {
    columns: [
      {
        name: (
          // <input
          //   type="checkbox"
          //   checked={
          //     tableData?.length > 0 &&
          //     tableData.every((itm) =>
          //       checkedChildData?.some((d) => d.ssid === itm.ssid),
          //     )
          //   }
          //   onChange={(e) => {
          //     if (e.target.checked) {
          //       const visibleData = tableData.map((itm) => ({
          //         ssid: itm?.ssid,
          //         vendorItemCode: itm?.vendorItemCode,
          //       }));

          //       setCheckData(visibleData);
          //       setCheckChildData(visibleData);
          //     } else {
          //       setCheckData([]);
          //       setCheckChildData([]);
          //     }
          //   }}
          // />
          <input
            type="checkbox"
            checked={
              tableData?.length > 0 &&
              tableData.every((itm) =>
                checkedChildData?.some((d) => d.uniqueId === itm.uniqueId),
              )
            }
            onChange={(e) => {
              if (e.target.checked) {
                const visibleData = tableData.map((itm) => ({
                  uniqueId: itm.uniqueId,
                  ssid: itm.ssid,
                  vendorItemCode: itm.vendorItemCode,
                }));

                setCheckData(visibleData);
                setCheckChildData(visibleData);
              } else {
                setCheckData([]);
                setCheckChildData([]);
              }
            }}
          />
        ),
        value: 'checkboxProject',
        style: 'min-w-[40px] max-w-[40px] text-center',
      },
      // {
      //   name: "Customer",
      //   value: "customer",
      //   style: "min-w-[120px] max-w-[160px]",
      // },
      {
        name: 'Project Group',
        value: 'projectGroup',
        style: 'min-w-[120px] max-w-[180px] text-center',
      },
      // {
      //   name: "Project ID",
      //   value: "projectId",
      //   style: "min-w-[180px] max-w-[320px] text-center",
      // },
      {
        name: 'Project Type',
        value: 'projectType',
        style: 'min-w-[100px] max-w-[180px] text-center',
      },
      {
        name: 'Sub Project',
        value: 'subProject',
        style: 'min-w-[140px] max-w-[180px] text-center',
      },
      {
        name: 'Site ID',
        value: 'siteId',
        style: 'min-w-[120px] max-w-[160px] text-center',
      },
      {
        name: 'SSID',
        value: 'ssid',
        style: 'min-w-[80px] max-w-[120px] text-center',
      },
      {
        name: 'Vendor Name',
        value: 'vendorName',
        style: 'min-w-[160px] max-w-[220px] text-center',
      },
      // {
      //   name: "Vendor ID",
      //   value: "vendorId",
      //   style: "min-w-[120px] max-w-[160px] text-center",
      // },
      {
        name: 'Vendor Item Code',
        value: 'vendorItemCode',
        style: 'min-w-[120px] max-w-[220px] text-center',
      },
      // {
      //   name: "Vendor Item Code Description",
      //   value: "vendorItemCodeDescription",
      //   style: "min-w-[220px] max-w-[300px] text-center",
      // },
      {
        name: 'Qty',
        value: 'quantity',
        style: 'min-w-[60px] max-w-[120px] text-center',
      },
      {
        name: 'Rate',
        value: 'vendorRate',
        style: 'min-w-[50px] max-w-[140px] text-center',
      },
      // {
      //   name: "PO Value",
      //   value: "poValue",
      //   style: "min-w-[120px] max-w-[160px] text-center",
      // },
      // {
      //   name: "Activity Month",
      //   value: "activityMonth",
      //   style: "min-w-[80px] max-w-[180px] text-center",
      // },
      {
        name: 'PO No.',
        value: 'poNumber',
        style: 'min-w-[80px] max-w-[180px] text-center',
      },
      ...(getAccessType('CDH Approver(Action)') === 'visible'
        ? [
            {
              name: 'Action',
              value: 'action',
              style: 'min-w-[40px] max-w-[120px] text-center',
            },
          ]
        : []),
    ],

    filter: [
      {
        label: 'Site Id',
        value: '',
        name: 'siteId',
        type: 'text',
      },
      {
        label: 'Project Type',
        value: '',
        name: 'projectType',

        // type: "text",
        type: 'select',
        bg: 'bg-[#3e454d] text-gray-300 border-[1.5px] border-solid border-[#64676d]',
        option: projectTypeList,
        props: {
          onChange: (e) => {
            if (e.target.value) {
              // setSelectedProjectType(e?.target?.value);
              dispatch(VendorActions.getSubProjectList(true, e.target.value));
            } else {
              // setSelectedProjectType(null);
              dispatch(GET_SUB_PROJECT_DETAILS({ dataAll: [], reset: true }));
            }
          },
        },
        required: false,
      },
      {
        label: 'Sub Project',
        value: '',
        name: 'subProject',

        // type: "text",
        type: 'select',
        bg: 'bg-[#3e454d] text-gray-300 border-[1.5px] border-solid border-[#64676d]',
        option: subProjectList,
        required: false,
      },
      {
        label: 'Vendor Name',
        value: '',
        type: 'text',
        name: 'vendorName',
      },
      // {
      //   label: "Vendor Id",
      //   value: "",
      //   name: "vendorId",
      //   type: "text",
      // },
      {
        label: 'Vendor Item Code',
        value: '',
        name: 'vendorItemCode',

        type: 'text',
      },

      {
        label: 'Status',
        value: '',
        type: 'select',
        name: 'status',
        // bg: "bg-[#3e454d] text-gray-300 border-[1.5px] border-solid border-[#64676d]",
        option: [
          { label: 'Approved', value: 'Approved' },
          { label: 'Rejected', value: 'Rejected' },
        ],
      },
    ],
  };

  const onTableViewSubmit = (data) => {
    data['fileType'] = 'OciApproverFileUpload';
    dispatch(
      CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
        dispatch(FormssActions.getWccCdh());
        setFileOpen(false);
        resetting('');
      }),
    );
  };

  let dbConfigTotalCount = useSelector((state) => {
    let interdata = state?.myHomeData?.getOciApprover;
    if (interdata?.length > 0) {
      return interdata[0]['overall_table_count'];
    } else {
      return 0;
    }
  });

  //   Table Data starts here

  const handleApproveWithNofileUpload = (itm) => {
    const sendData = {
      _id: itm?.uniqueId,
      rejected: false,
      status: 'Approved',
    };
    setmodalBody(
      <>
        <CommonAlert
          selectedRow={itm}
          Heading={'Are you Sure ?'}
          getAllDAta={() => {
            dispatch(
              MyHomeActions.postOciActions(
                {
                  vendorItemCode: itm?.vendorItemCode,
                  ssid: itm?.ssid,
                  status: 'Approved',
                },
                () => {
                  dispatch(MyHomeActions.getOciApprover());
                },
              ),
              null,
            );
          }}
          setmodalOpen={setmodalOpen}
          sendData={sendData}
        />
      </>,
    );
    setmodalOpen(true);
  };

  const handleSingleReject = (itm) => {
    const sendData = {
      _id: itm?.uniqueId,
      rejected: true,
      status: 'Rejected',
    };
    setmodalBody(
      <>
        <CommonAlert
          selectedRow={itm}
          Heading={'Are you Sure?'}
          getAllDAta={() => {
            dispatch(
              MyHomeActions.postOciActions(
                {
                  vendorItemCode: itm?.vendorItemCode,
                  ssid: itm?.ssid,
                  status: 'Rejected',
                },
                () => {
                  dispatch(
                    MyHomeActions.getOciApprover(
                      true,
                      objectToQueryString({ page: 1, limit: 50 }),
                    ),
                  );
                },
              ),
              null,
            );
          }}
          setmodalOpen={setmodalOpen}
          sendData={sendData}
        />
      </>,
    );

    setmodalOpen(true);
    setCheckData([]);
    setCheckChildData([]);
  };

  const handleReject = (itm) => {
    const sendData = {
      _id: itm?.uniqueId,
      rejected: true,
      status: 'Rejected',
    };
    setmodalBody(
      <>
        <CommonAlert
          selectedRow={itm}
          Heading={'Are you Sure ?'}
          getAllDAta={() => {
            dispatch(
              MyHomeActions.postOciMultiActions(
                checkedData,
                () => {
                  const defaultPagination = objectToQueryString({
                    page: 1,
                    limit: 50,
                  });
                  dispatch(
                    MyHomeActions.getOciApprover(true, defaultPagination),
                  );
                },
                null,
                `status=Rejected`,
              ),
            );
          }}
          setmodalOpen={setmodalOpen}
          sendData={sendData}
        />
      </>,
    );

    setmodalOpen(true);
    setCheckData([]);
    setCheckChildData([]);
  };

  const handleApprove = (itm) => {
    console.log('working Finr');

    setmodalOpen(true);

    setmodalBody(
      <>
        <OciApproverForm
          itm={itm}
          setmodalHead={setmodalHead}
          setmodalBody={setmodalBody}
          setmodalOpen={setmodalOpen}
        />
      </>,
    );
  };

  const handleModalClose = () => {
    // dataAll();
    setmodalOpen(false);
    setmodalBody(<></>);
    setmodalHead(<></>);

    // setSelectedRow(null);
  };

  tableData = tableData?.map((itm) => {
    return {
      ...itm,
      // checkboxProject: (
      //   <>
      //     {CheckTrueOrFalseforApproval(itm?.cdh) ? (
      //       <input
      //         type={"checkbox"}
      //         // id={itm.uniqueId}
      //         // subId={itm.SubProjectId}
      //         checked={
      //           checkedData?.some((d) => d.ssid === itm.ssid) ||
      //           checkedChildData?.some((d) => d.ssid === itm.ssid)
      //         }
      //         value={itm.uniqueId}
      //         onChange={(e) => {
      //           if (e?.target?.checked) {
      //             const tempObj = {
      //               ssid: itm?.ssid,
      //               vendorItemCode: itm?.vendorItemCode,
      //             };
      //             setCheckChildData((prev) => [...prev, ...[tempObj]]);
      //           } else {
      //             // console.log(e?.target?.checked,"___peinfoes")
      //             if (checkVariable(checkedData)) {
      //               const data = checkedData?.filter(
      //                 (CheckItm) => itm?.ssid !== CheckItm?.ssid,
      //               );
      //               setCheckChildData(data);
      //               setCheckData([]);
      //             } else {
      //               const data = checkedChildData?.filter(
      //                 (checkChildItm) => itm?.ssid !== checkChildItm?.ssid,
      //               );
      //               console.log(data, "CheckChldata");
      //               setCheckChildData(data);
      //             }
      //           }
      //         }}
      //       />
      //     ) : (
      //       <></>
      //     )}
      //   </>
      // ),

      checkboxProject: (
        <>
          {CheckTrueOrFalseforApproval(itm?.cdh) ? (
            <input
              type="checkbox"
              checked={checkedChildData?.some(
                (d) => d.uniqueId === itm.uniqueId,
              )}
              onChange={(e) => {
                if (e.target.checked) {
                  const alreadyExists = checkedChildData.some(
                    (d) => d.uniqueId === itm.uniqueId,
                  );

                  if (!alreadyExists) {
                    const updatedData = [
                      ...checkedChildData,
                      {
                        uniqueId: itm.uniqueId,
                        ssid: itm.ssid,
                        vendorItemCode: itm.vendorItemCode,
                      },
                    ];

                    setCheckChildData(updatedData);
                    setCheckData(updatedData);
                  }
                } else {
                  const updatedData = checkedChildData.filter(
                    (d) => d.uniqueId !== itm.uniqueId,
                  );

                  setCheckChildData(updatedData);
                  setCheckData(updatedData);
                }
              }}
            />
          ) : null}
        </>
      ),
      // action: (
      //   <div className="flex justify-end gap-2">
      //     {/* {(type === 'l1Approver' ? ['Submitted'].includes(itm.status) : ['L1-Approved'].includes(itm.status)) && */}
      //     {CheckTrueOrFalseforApproval(itm?.cdh) ? (
      //       <>
      //         {/* <button
      //       onClick={(e) => {
      //         // e.stopPropagation();
      //         handleApprove(itm);
      //       }}
      //       className="bg-green-500 text-white text-xs p-1 px-2 rounded hover:bg-green-600 transition flex items-center gap-1"
      //       title="Approve"
      //     >
      //       <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      //         <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
      //       </svg>

      //     </button>
      //      */}
      //         <button
      //           onClick={(e) => {
      //             // e.stopPropagation();
      //             handleApproveWithNofileUpload(itm);
      //           }}
      //           className="bg-green-500 text-white text-xs p-1 px-2 rounded hover:bg-green-600 transition flex items-center gap-1"
      //           title="Approve"
      //         >
      //           <svg
      //             width="15"
      //             height="15"
      //             viewBox="0 0 24 24"
      //             fill="currentColor"
      //           >
      //             <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
      //           </svg>
      //         </button>

      //         {/* } */}
      //         {/* {(type === 'l1Approver' ? ['Submitted'].includes(itm.status) : ['L1-Approved'].includes(itm.status)) &&  */}
      //         <button
      //           onClick={(e) => {
      //             e.stopPropagation();
      //             handleSingleReject(itm);
      //           }}
      //           className="bg-red-500 text-white text-xs px-2 p-1 rounded hover:bg-red-600 transition flex items-center gap-1"
      //           title="Reject"
      //         >
      //           <TbPlayerEjectFilled size={28} />
      //         </button>
      //       </>
      //     ) : checkTrueOrFalseDynamic(itm?.cdh, "Approved") ? (
      //       <></>
      //     ) : checkTrueOrFalseDynamic(itm?.cdh, "Rejected") ? (
      //       <button
      //         onClick={(e) => {
      //           // e.stopPropagation();
      //           handleApprove(itm);
      //         }}
      //         className="bg-green-500 text-white text-xs p-1 px-2 rounded hover:bg-green-600 transition flex items-center gap-1"
      //         title="Approve"
      //       >
      //         <svg
      //           width="15"
      //           height="15"
      //           viewBox="0 0 24 24"
      //           fill="currentColor"
      //         >
      //           <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
      //         </svg>
      //       </button>
      //     ) : (
      //       <></>
      //     )}

      //     {/* } */}
      //   </div>
      // ),

      action: (
        <div className="flex justify-end gap-2">
          {/* ✅ If status is APPROVED → only show REJECT */}
          {checkTrueOrFalseDynamic(itm?.cdh, 'Approved') ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSingleReject(itm);
              }}
              className="bg-red-500 text-white text-xs px-2 p-1 rounded hover:bg-red-600 transition flex items-center gap-1"
              title="Reject"
            >
              <TbPlayerEjectFilled size={28} />
            </button>
          ) : /* ✅ If status is REJECTED → only show APPROVE */
          checkTrueOrFalseDynamic(itm?.cdh, 'Rejected') ? (
            <button
              onClick={(e) => {
                handleApproveWithNofileUpload(itm);
              }}
              className="bg-green-500 text-white text-xs p-1 px-2 rounded hover:bg-green-600 transition flex items-center gap-1"
              title="Approve"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
              </svg>
            </button>
          ) : CheckTrueOrFalseforApproval(itm?.cdh) ? (
            <>
              <button
                onClick={() => handleApproveWithNofileUpload(itm)}
                className="bg-green-500 text-white text-xs p-1 px-2 rounded hover:bg-green-600"
              >
                ✔
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSingleReject(itm);
                }}
                className="bg-red-500 text-white text-xs px-2 p-1 rounded hover:bg-red-600"
              >
                <TbPlayerEjectFilled size={18} />
              </button>
            </>
          ) : null}
        </div>
      ),
    };
  });

  const onSubmit = (data) => {
    let shouldReset = data.reseter;
    console.log(data, strValFil, '___data');

    if (data?.reseter === false) {
      delete data.reseter;
      setstrVal({
        ...strValFil,
        ...data,
      });
    }

    if (data?.reseter === true) {
      console.log('rinmondif');
      setstrVal({});
    }

    // let strVal = objectToQueryString(data);

    // setFilters({
    //   ...filters,
    //   ...data,
    // });
    console.log('data___', data);
    dispatch(MyHomeActions.getOciApprover(true, objectToQueryString(data)));
    // setstrVal({});
  };
  // console.log(strValFil, "strValFil");
  console.log(isRejectedView, isApprovedView, '____isFilteredView');
  return (
    <>
      <AdvancedTable
        setstrVal={setstrVal}
        // headerButton={
        //   <div className="flex">
        //     {checkVariable(checkedData) ? (
        //       <>
        //         <div className="flex">
        //           {/* <ConditionalButton
        //             showType={"visible"}
        //             classes="w-auto mr-1"
        //             // onClick={() => navigate("/empdetails")}
        //             onClick={() => {
        //               setCheckData([]);
        //               setCheckChildData([]);

        //               dispatch(
        //                 MyHomeActions.postCdhMultiActions(
        //                   checkedData,
        //                   () => {
        //                     const defaultPagination = objectToQueryString({
        //                       page: 1,
        //                       limit: 50,
        //                     });
        //                     dispatch(
        //                       MyHomeActions.getCdhApprover(
        //                         true,
        //                         defaultPagination,
        //                       ),
        //                     );
        //                   },
        //                   null,
        //                   `status=Approved`,
        //                 ),
        //               );
        //             }}
        //             name={"Approve CDH"}
        //           />
        //           <ConditionalButton
        //             showType={"visible"}
        //             classes="w-auto mr-1 bg-[#EF4444]"
        //             // onClick={() => navigate("/empdetails")}
        //             onClick={() => {
        //               handleReject();
        //             }}
        //             name={"Reject CDH"}
        //           /> */}
        //           {/* ❌ Hide Approve if already Approved */}
        //           {!isApprovedView && (
        //             <ConditionalButton
        //               showType={"visible"}
        //               classes="w-auto mr-1"
        //               onClick={() => {
        //                 setCheckData([]);
        //                 setCheckChildData([]);

        //                 dispatch(
        //                   MyHomeActions.postCdhMultiActions(
        //                     checkedData,
        //                     () => {
        //                       const defaultPagination = objectToQueryString({
        //                         page: 1,
        //                         limit: 50,
        //                       });
        //                       dispatch(
        //                         MyHomeActions.getCdhApprover(
        //                           true,
        //                           defaultPagination,
        //                         ),
        //                       );
        //                     },
        //                     null,
        //                     `status=Approved`,
        //                   ),
        //                 );
        //               }}
        //               name={"Approve CDH"}
        //             />
        //           )}

        //           {/* ❌ Hide Reject if already Rejected */}
        //           {!isRejectedView && (
        //             <ConditionalButton
        //               showType={"visible"}
        //               classes="w-auto mr-1 bg-[#EF4444]"
        //               onClick={() => {
        //                 handleReject();
        //               }}
        //               name={"Reject CDH"}
        //             />
        //           )}
        //         </div>
        //       </>
        //     ) : checkVariable(checkedChildData) ? (
        //       <>
        //         <div className="flex">
        //           {/* <ConditionalButton
        //             showType={"visible"}
        //             classes="w-auto mr-1"
        //             onClick={() => {
        //               setCheckChildData([]);
        //               setCheckData([]);
        //               dispatch(
        //                 MyHomeActions.postCdhMultiActions(
        //                   checkedChildData,
        //                   () => {
        //                     const defaultPagination = objectToQueryString({
        //                       page: 1,
        //                       limit: 50,
        //                     });
        //                     dispatch(
        //                       MyHomeActions.getCdhApprover(
        //                         true,
        //                         defaultPagination,
        //                       ),
        //                     );
        //                   },
        //                   null,
        //                   `status=Approved`,
        //                 ),
        //               );
        //             }}
        //             name={"Approve CDH"}
        //           />
        //           <ConditionalButton
        //             showType={"visible"}
        //             classes="w-auto mr-1 bg-[#EF4444]"
        //             onClick={() => {
        //               setCheckChildData([]);
        //               setCheckData([]);
        //               dispatch(
        //                 MyHomeActions.postCdhMultiActions(
        //                   checkedChildData,
        //                   () => {
        //                     const defaultPagination = objectToQueryString({
        //                       page: 1,
        //                       limit: 50,
        //                     });
        //                     dispatch(
        //                       MyHomeActions.getCdhApprover(
        //                         true,
        //                         defaultPagination,
        //                       ),
        //                     );
        //                   },
        //                   null,
        //                   `status=Rejected`,
        //                 ),
        //               );
        //             }}
        //             name={"Reject CDH"}
        //           /> */}
        //           {/* ❌ Hide Approve if already Approved */}
        //           {!isApprovedView && (
        //             <ConditionalButton
        //               showType={"visible"}
        //               classes="w-auto mr-1"
        //               onClick={() => {
        //                 setCheckChildData([]);
        //                 setCheckData([]);
        //                 dispatch(
        //                   MyHomeActions.postCdhMultiActions(
        //                     checkedChildData,
        //                     () => {
        //                       const defaultPagination = objectToQueryString({
        //                         page: 1,
        //                         limit: 50,
        //                       });
        //                       dispatch(
        //                         MyHomeActions.getCdhApprover(
        //                           true,
        //                           defaultPagination,
        //                         ),
        //                       );
        //                     },
        //                     null,
        //                     `status=Approved`,
        //                   ),
        //                 );
        //               }}
        //               name={"Approve CDH"}
        //             />
        //           )}

        //           {/* ❌ Hide Reject if already Rejected */}
        //           {!isRejectedView && (
        //             <ConditionalButton
        //               showType={"visible"}
        //               classes="w-auto mr-1 bg-[#EF4444]"
        //               onClick={() => {
        //                 setCheckChildData([]);
        //                 setCheckData([]);
        //                 dispatch(
        //                   MyHomeActions.postCdhMultiActions(
        //                     checkedChildData,
        //                     () => {
        //                       const defaultPagination = objectToQueryString({
        //                         page: 1,
        //                         limit: 50,
        //                       });
        //                       dispatch(
        //                         MyHomeActions.getCdhApprover(
        //                           true,
        //                           defaultPagination,
        //                         ),
        //                       );
        //                     },
        //                     null,
        //                     `status=Rejected`,
        //                   ),
        //                 );
        //               }}
        //               name={"Reject CDH"}
        //             />
        //           )}
        //         </div>
        //         {/* <ConditionalButton
        //       showType={getAccessType("Upload(ManageEmployee)")}
        //       name={"Delete"}
        //       classes="w-auto mr-1"
        //       onClick={() =>
        //         // setFileOpen(true)
        //           console.log("asdasd")
        //       }
        //     /> */}
        //       </>
        //     ) : (
        //       <></>
        //     )}
        //     {/* <ConditionalButton
        //       showType={getAccessType("Add New(ManageEmployee)")}
        //       classes="w-auto mr-1"
        //       // onClick={() => navigate("/empdetails")}
        //       onClick={() => {
        //         setmodalHead("Add Compliance");
        //         setmodalBody(
        //           <ComplianceForm modalBody={modalBody} setIsOpen={setmodalOpen} onClose={() => setmodalOpen(false)}  />
        //         );
        //         setmodalOpen(true);
        //       }}
        //       name={"Add New"}
        //     /> */}
        //     <ConditionalButton
        //       showType={getAccessType("CDH Approver(Upload)")}
        //       name={"Upload File"}
        //       classes="w-auto mr-1"
        //       onClick={() => setFileOpen(true)}
        //     />
        //     <ConditionalButton
        //       showType={getAccessType("CDH Approver(Export)")}
        //       name={"Export"}
        //       classes="w-auto mr-1"
        //       onClick={() =>
        //         dispatch(
        //           CommonActions.commondownloadpost(
        //             `/export/myHome/wcc/cdhApproval${strValFil ? "?" + strValFil : ""}`,
        //             // {exportTableName:"ptwBackupData"},
        //             "WCC CDH Approval.xlsx",
        //             "GET",
        //           ),
        //         )
        //       }
        //     />
        //   </div>
        // }

        headerButton={
          <div className="flex">
            {/* ❌ Hide bulk buttons when filtered */}

            <>
              {checkVariable(checkedData) && (
                <div className="flex">
                  {!isApprovedView && !isRejectedView ? (
                    <>
                      <ConditionalButton
                        showType={'visible'}
                        classes="w-auto mr-1"
                        onClick={() => {
                          setCheckData([]);
                          setCheckChildData([]);

                          dispatch(
                            MyHomeActions.postOciMultiActions(
                              checkedData,
                              () => {
                                const defaultPagination = objectToQueryString({
                                  page: 1,
                                  limit: 50,
                                });
                                dispatch(
                                  MyHomeActions.getOciApprover(
                                    true,
                                    defaultPagination,
                                  ),
                                );
                              },
                              null,
                              `status=Approved`,
                            ),
                          );
                        }}
                        name={'Approve OCI'}
                      />
                      <ConditionalButton
                        showType={'visible'}
                        classes="w-auto mr-1 bg-[#EF4444]"
                        onClick={() => handleReject()}
                        name={'Reject OCI'}
                      />
                    </>
                  ) : isApprovedView ? (
                    <></>
                  ) : isRejectedView ? (
                    <ConditionalButton
                      showType={'visible'}
                      classes="w-auto mr-1"
                      onClick={() => {
                        setCheckData([]);
                        setCheckChildData([]);

                        dispatch(
                          MyHomeActions.postOciMultiActions(
                            checkedData,
                            () => {
                              const defaultPagination = objectToQueryString({
                                page: 1,
                                limit: 50,
                              });
                              dispatch(
                                MyHomeActions.getOciApprover(
                                  true,
                                  defaultPagination,
                                ),
                              );
                            },
                            null,
                            `status=Approved`,
                          ),
                        );
                      }}
                      name={'Approve CDH'}
                    />
                  ) : (
                    <></>
                  )}

                  {/* {!isApprovedView ? (
                    <ConditionalButton
                      showType={"visible"}
                      classes="w-auto mr-1 bg-[#EF4444]"
                      onClick={() => handleReject()}
                      name={"Reject CDH"}
                    />
                  ) : (
                    <></>
                  )} */}
                </div>
              )}
            </>

            {/* ✅ ALWAYS VISIBLE BUTTONS */}
            <ConditionalButton
              showType={getAccessType('CDH Approver(Upload)')}
              name={'Upload File'}
              classes="w-auto mr-1"
              onClick={() => setFileOpen(true)}
            />

            <ConditionalButton
              showType={getAccessType('OCI Approver(Export)')}
              name={'Export'}
              classes="w-auto mr-1"
              onClick={() =>


                
                dispatch(
                  CommonActions.commondownloadpost(
                    `/export/myHome/wcc/ociApprover${
                      strValFil ? '?' + objectToQueryString(strValFil) : ''
                    }`,
                    'WCC CDH Approval.xlsx',
                    'GET',
                  ),
                )
              }
            />
          </div>
        }
        // headerButton={
        //   <div className="flex">
        //     <ConditionalButton
        //       showType={getAccessType("Add New(ManageEmployee)")}
        //       classes="w-auto mr-1"
        //       // onClick={() => navigate("/empdetails")}
        //       onClick={() => {
        //         setmodalHead("Add Compliance");
        //         setmodalBody(
        //           <ComplianceForm modalBody={modalBody} setIsOpen={setmodalOpen} onClose={() => setmodalOpen(false)}  />
        //         );
        //         setmodalOpen(true);
        //       }}
        //       name={"Add New"}
        //     />
        //     <ConditionalButton
        //       showType={getAccessType("Upload(ManageEmployee)")}
        //       name={"Upload File"}
        //       classes="w-auto mr-1"
        //       onClick={() => setFileOpen(true)}
        //     />
        //     <ConditionalButton
        //       showType={getAccessType("Upgrade(ManageEmployee)")}
        //       name={"Export"}
        //       classes="w-auto mr-1"
        //       onClick={() => dispatch(
        //            CommonActions.commondownloadpost(
        //               "/export/wccCompliance",
        //               // {exportTableName:"ptwBackupData"},
        //               "WCC_Compliance.xlsx",
        //               "GET",

        //             )
        //        )}
        //     />

        //   </div>
        // }
        table={table}
        filterAfter={onSubmit}
        tableName={'CDH Approver'}
        handleSubmit={handleSubmit}
        data={checkArray(tableData) ? tableData : []} // ✅ EMPTY TABLE
        errors={errors}
        register={register}
        setValue={setValue}
        getValues={getValues}
        // totalCount={checkArray(tableData)?tableData?.length:0}
        totalCount={dbConfigTotalCount}
        // checkboxshow={shouldIncludeEditColumn}
        //  exportButton={[
        //     "/export/subVendor",
        //     "PartnerTeam.xlsx",
        //     ]}
        heading={'Total Count:-'}
      />

      <FileUploader
        isOpen={fileOpen}
        onTableViewSubmit={onTableViewSubmit}
        setIsOpen={setFileOpen}
        tempbtn={true}
        tempbtnlink={[
          '/template/cdhApproverUpload.xlsx',
          'CDH_Approver_template.xlsx',
        ]}
        head={'Upload Upgrade File'}
      />

      <Modal
        size="sm"
        modalHead={modalHead}
        children={modalBody}
        isOpen={modalOpen}
        setIsOpen={handleModalClose}
      />
    </>
  );
};

export default OciApprover;

// OLD
// import React, { useEffect, useState } from 'react'
// import AdvancedTable from '../../../../../components/AdvancedTable';
// import { checkArray, CheckTrueOrFalse, checkTrueOrFalseDynamic } from '../../../../../components/CommonObjectsAndVariables';
// import { useDispatch, useSelector } from 'react-redux';
// import CommonActions from '../../../../../store/actions/common-actions';
// import FormssActions from '../../../../../store/actions/formss-actions';
// import ConditionalButton from '../../../../../components/ConditionalButton';
// import { getAccessType, objectToQueryString } from '../../../../../utils/commonFunnction';
// import FileUploader from '../../../../../components/FIleUploader';
// import { Urls } from '../../../../../utils/url';
// import MyHomeActions from '../../../../../store/actions/myHome-actions';
// import { TbPlayerEjectFilled } from 'react-icons/tb';
// import CdhApproverForm from './CdhApproverForm';
// import Modal from '../../../../../components/Modal';
// import { useForm } from 'react-hook-form';
// import CommonAlert from '../../../../../components/Common Alert/CommonAlert';
// // import { Modal } from '@material-ui/core';

// const CdhApprover= () => {
// const dispatch = useDispatch();
// const [fileOpen, setFileOpen] = useState(false);
// const [modalOpen, setmodalOpen] = useState(false);
// const [modalBody, setmodalBody] = useState(<></>);
// const [modalHead, setmodalHead] = useState(<></>);
//  const [strValFil, setstrVal] = useState(false);

//     // useEffect(()=>{
//     //     dispatch(VendorActions.getWccSubmodule());
//     // },[])

//      const {
//         register,
//         handleSubmit,
//         setValue,
//         getValues,
//         formState: { errors },
//       } = useForm();

//       const table = {

//      columns : [
//   // {
//   //   name: "Customer",
//   //   value: "customer",
//   //   style: "min-w-[120px] max-w-[160px]",
//   // },
//   {
//     name: "Project Group",
//     value: "projectGroup",
//     style: "min-w-[120px] max-w-[180px] text-center",
//   },
//   // {
//   //   name: "Project ID",
//   //   value: "projectId",
//   //   style: "min-w-[180px] max-w-[320px] text-center",
//   // },
//   {
//     name: "Project Type",
//     value: "projectType",
//     style: "min-w-[100px] max-w-[180px] text-center",
//   },
//   {
//     name: "Sub Project",
//     value: "subProject",
//     style: "min-w-[140px] max-w-[180px] text-center",
//   },
//   {
//     name: "Site ID",
//     value: "siteId",
//     style: "min-w-[120px] max-w-[160px] text-center",
//   },
//   {
//     name: "SSID",
//     value: "ssid",
//     style: "min-w-[80px] max-w-[120px] text-center",
//   },
//   {
//     name: "Vendor Name",
//     value: "vendorName",
//     style: "min-w-[160px] max-w-[220px] text-center",
//   },
//   // {
//   //   name: "Vendor ID",
//   //   value: "vendorId",
//   //   style: "min-w-[120px] max-w-[160px] text-center",
//   // },
//   {
//     name: "Vendor Item Code",
//     value: "vendorItemCode",
//     style: "min-w-[120px] max-w-[220px] text-center",
//   },
//   // {
//   //   name: "Vendor Item Code Description",
//   //   value: "vendorItemCodeDescription",
//   //   style: "min-w-[220px] max-w-[300px] text-center",
//   // },
//   {
//     name: "Qty",
//     value: "quantity",
//     style: "min-w-[60px] max-w-[120px] text-center",
//   },
//   {
//     name: "Rate",
//     value: "vendorRate",
//     style: "min-w-[50px] max-w-[140px] text-center",
//   },
//   // {
//   //   name: "PO Value",
//   //   value: "poValue",
//   //   style: "min-w-[120px] max-w-[160px] text-center",
//   // },
//   // {
//   //   name: "Activity Month",
//   //   value: "activityMonth",
//   //   style: "min-w-[80px] max-w-[180px] text-center",
//   // },
//   {
//     name: "PO No.",
//     value: "poNumber",
//     style: "min-w-[80px] max-w-[180px] text-center",
//   },
//   {
//     name: "Action",
//     value: "action",
//     style: "min-w-[40px] max-w-[120px] text-center",
//   },
// ],

//  filter:[
//       {
//         label: "Site Id",
//         value: "",
//         name: "siteId",
//         type: "text",
//       },
//       {
//         label: "Vendor Name",
//         value: "",
//         type: "text",
//         name: "vendorName",
//       },
//       {
//         label: "Vendor Id",
//         value: "",
//         name: "vendorId",
//         type: "text",
//       },
//        {
//         label: "Vendor Item Code",
//         value: "",
//         name: "vendorItemCode",

//         type: "text",
//       },

//       {
//         label: "Status",
//         value: "",
//         type: "select",
//         name: "status",
//         // bg: "bg-[#3e454d] text-gray-300 border-[1.5px] border-solid border-[#64676d]",
//         option: [
//         { label: "Approved", value: "Approved" },
//         { label: "Rejected", value: "Rejected" },
//       ],
//       },
//     ],

//   };

// //   Table Data starts here

// //   const tableData  = useSelector((state)=>state?.vendorData?.getWccSubmodule);
// //   console.log(tableData,"___tableData")
// //   Table Data ends here

//   const onTableViewSubmit = (data) => {
//     data["fileType"] = "cdhUpload";
//         dispatch(
//         CommonActions.fileSubmit(Urls.common_file_uploadr, data, () => {
//             dispatch(FormssActions.getWccCdh())
//             setFileOpen(false);
//             resetting("");

//         })
//         );
//   };

// //   Table Data starts here
// useEffect(()=>{
//     dispatch(MyHomeActions.getCdhApprover());
// },[])

// const handleReject =(itm)=>{
//     const sendData = {
//         _id: itm?.uniqueId,
//         rejected: true,
//         status: "Rejected",
//       };
//   setmodalBody(
//           <>
//             <CommonAlert
//               selectedRow={itm}
//               Heading={"Are you Sure ?"}
//               getAllDAta = {()=>{ dispatch(MyHomeActions.postCdhActions({vendorItemCode:itm?.vendorItemCode, ssid:itm?.ssid,status:"Rejected"},()=>{
//                 dispatch(MyHomeActions.getCdhApprover());
//     }),null)}}
//               setmodalOpen={setmodalOpen}
//               sendData={sendData}
//             />
//           </>
//         );
//         setmodalOpen(true);

// }

// const handleApprove =(itm)=>{
//   console.log("working Finr")

//     setmodalOpen(true);

//        setmodalBody(
//         <>
//             <CdhApproverForm
//             itm={itm}
//             setmodalHead={setmodalHead}
//             setmodalBody={setmodalBody}
//             setmodalOpen={setmodalOpen}
//           />
//         </>
//       )

// }

//   const handleModalClose = () => {
//     // dataAll();
//     setmodalOpen(false);
//     setmodalBody(<></>);
//     setmodalHead(<></>);

//     // setSelectedRow(null);
//   };

// let tableData  = useSelector((state)=>state?.myHomeData?.getWccCdhApprover)
// tableData  = tableData?.map((itm)=>{
//   return {
//     ...itm,
//     action:(
//         <div className='flex justify-end gap-2'>

//                 {/* {(type === 'l1Approver' ? ['Submitted'].includes(itm.status) : ['L1-Approved'].includes(itm.status)) && */}
//           {
//             CheckTrueOrFalse(itm?.cdh)?
//             <>
//                <button
//             onClick={(e) => {
//               // e.stopPropagation();
//               handleApprove(itm);
//             }}
//             className="bg-green-500 text-white text-xs p-1 px-2 rounded hover:bg-green-600 transition flex items-center gap-1"
//             title="Approve"
//           >
//             <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
//             </svg>

//           </button>
//            {/* } */}
//            {/* {(type === 'l1Approver' ? ['Submitted'].includes(itm.status) : ['L1-Approved'].includes(itm.status)) &&  */}
//             <button
//             onClick={(e) => {
//               e.stopPropagation();
//               handleReject(itm);
//             }}
//             className="bg-red-500 text-white text-xs px-2 p-1 rounded hover:bg-red-600 transition flex items-center gap-1"
//             title="Reject"
//           >
//             <TbPlayerEjectFilled size={28} />

//           </button>
//             </>:checkTrueOrFalseDynamic(itm?.cdh,"Approved")?
//             <></>:
//             checkTrueOrFalseDynamic(itm?.cdh,"Rejected")?
//              <button
//             onClick={(e) => {
//               // e.stopPropagation();
//               handleApprove(itm);
//             }}
//             className="bg-green-500 text-white text-xs p-1 px-2 rounded hover:bg-green-600 transition flex items-center gap-1"
//             title="Approve"
//           >
//             <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
//             </svg>

//           </button>:<></>

//           }

//            {/* } */}
//         </div>
//     )
//   }
// })
// //   Table Data Ends here

//     const onSubmit = (data) => {

//     let shouldReset = data.reseter;
//     delete data.reseter;

//     let strVal = objectToQueryString(data);
//     setstrVal(strVal);
//     // setFilters({
//     //   ...filters,
//     //   ...data,
//     // });
// console.log("data___",data)
//      dispatch(MyHomeActions.getCdhApprover(true,objectToQueryString(data)));

//   }

//   return (
//    <>
//         <AdvancedTable
//          headerButton={
//           <div className="flex">
//             {/* <ConditionalButton
//               showType={getAccessType("Add New(ManageEmployee)")}
//               classes="w-auto mr-1"
//               // onClick={() => navigate("/empdetails")}
//               onClick={() => {
//                 setmodalHead("Add Compliance");
//                 setmodalBody(
//                   <ComplianceForm modalBody={modalBody} setIsOpen={setmodalOpen} onClose={() => setmodalOpen(false)}  />
//                 );
//                 setmodalOpen(true);
//               }}
//               name={"Add New"}
//             /> */}
//             {/* <ConditionalButton
//               showType={getAccessType("Upload(ManageEmployee)")}
//               name={"Upload File"}
//               classes="w-auto mr-1"
//               onClick={() => setFileOpen(true)}
//             /> */}
//             <ConditionalButton
//               showType={getAccessType("Upgrade(ManageEmployee)")}
//               name={"Export"}
//               classes="w-auto mr-1"
//               onClick={() => dispatch(
//                    CommonActions.commondownloadpost(
//                       "/export/myHome/wcc/cdhApproval",
//                       // {exportTableName:"ptwBackupData"},
//                       "WCC CDH Approval.xlsx",
//                       "GET",

//                     )
//                )}
//             />

//           </div>
//         }
//         // headerButton={
//         //   <div className="flex">
//         //     <ConditionalButton
//         //       showType={getAccessType("Add New(ManageEmployee)")}
//         //       classes="w-auto mr-1"
//         //       // onClick={() => navigate("/empdetails")}
//         //       onClick={() => {
//         //         setmodalHead("Add Compliance");
//         //         setmodalBody(
//         //           <ComplianceForm modalBody={modalBody} setIsOpen={setmodalOpen} onClose={() => setmodalOpen(false)}  />
//         //         );
//         //         setmodalOpen(true);
//         //       }}
//         //       name={"Add New"}
//         //     />
//         //     <ConditionalButton
//         //       showType={getAccessType("Upload(ManageEmployee)")}
//         //       name={"Upload File"}
//         //       classes="w-auto mr-1"
//         //       onClick={() => setFileOpen(true)}
//         //     />
//         //     <ConditionalButton
//         //       showType={getAccessType("Upgrade(ManageEmployee)")}
//         //       name={"Export"}
//         //       classes="w-auto mr-1"
//         //       onClick={() => dispatch(
//         //            CommonActions.commondownloadpost(
//         //               "/export/wccCompliance",
//         //               // {exportTableName:"ptwBackupData"},
//         //               "WCC_Compliance.xlsx",
//         //               "GET",

//         //             )
//         //        )}
//         //     />

//         //   </div>
//         // }
//         table={table}

//         filterAfter={onSubmit}
//         tableName={"CDH Approver"}
//         handleSubmit={handleSubmit}
//         data={checkArray(tableData)?tableData:[]} // ✅ EMPTY TABLE
//         errors={errors}
//         register={register}
//         setValue={setValue}
//         getValues={getValues}
//         totalCount={checkArray(tableData)?tableData?.length:0}
//         // checkboxshow={shouldIncludeEditColumn}
//         //  exportButton={[
//         //     "/export/subVendor",
//         //     "PartnerTeam.xlsx",
//         //     ]}
//         heading={"Total Count:-"}
//       />

//       <FileUploader
//         isOpen={fileOpen}
//         onTableViewSubmit={onTableViewSubmit}
//         setIsOpen={setFileOpen}
//         tempbtn={true}
//         tempbtnlink={[
//           "/template/cdhUpload.xlsx",
//           "CDH_File_template.xlsx",
//         ]}
//         head={"Upload Upgrade File"}
//       />

//           <Modal
//         size="sm"
//         modalHead={modalHead}
//         children={modalBody}
//         isOpen={modalOpen}
//         setIsOpen={handleModalClose}
//       />
//     </>
//   )
// }

// export default CdhApprover

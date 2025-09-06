
import React, { useEffect, useRef, useState } from "react";
import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons";
import Modalmoreinfo from "./Modalmoreinfo";
import Button from "./Button";
import { ListItemAvatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import VendorActions from "../store/actions/vendor-actions";

const AdvancedTableExpandableOneRow = ({
  multiSelect,
  setOpenModal,
  setModalBody,
  table,
  itm,
  poSiteIdsRef,
  itmIndex,
  hide,
  finalData,
}) => {
  const [expand, setExpand] = useState(false);

  const dispatch = useDispatch();
  const [poSiteIds, setPoSitIds] = useState([]);
  //   const poSiteIdsRef = useRef([])
  const countRef = useRef({});

  function getRowSpan(itm) {
    let count = 0;

    if (!("workDescription" in itm)) {
      count = 1;
    } else if (!(itm?.workDescription in finalData)) {
      count = 1;
    } else if (finalData[itm?.workDescription]?.length) {
      if (finalData[itm?.workDescription][0]?._id === itm?._id) {
        count = finalData[itm?.workDescription].length;
        countRef.current = {
          ...countRef.current,
          [itm.workDescription]: true,
        };
        // console.log("countRef.current", countRef.current);
      } else {
        count = 0;
      }
    }
    return count;
  }
  // const poData = [
  //   {
  //     "SSID00256324_IBSSSLAY16": "PO Issued",
  //     "SSID00256324_IBSNWPOP02": "PO Issued"
      
  //   }
  // ]
  const poData = useSelector((state) => state?.vendorData?.getPoEligibility);
    console.log(poData,"___poData")
  //   console.log(itm,"___itm__")
  function expendedRows() {
    const rows = [];
    console.log(finalData, "__FinalData");
    // const keys = poData?.length > 0 ? Object.keys(poData[0]) : [];
    const keys = poData?.length > 0 ? Object.keys(poData[0]).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {}) : {};
    console.log(keys,"___keys__")
    Object.keys(finalData).map((key,index) => {
      console.log(key,index, "adsd");
      finalData[key].forEach((item) => {
        // console.log("1:",finalData[item?.workDescription][0]?.siteId,"2:",Object.keys(poData[0])[0],"____fajsbhdjvadskmbj")
        // console.log(finalData[item?.workDescription],"__itmIndex")
        console.log(item,"__item")
        const data = [];
        table?.childs?.milestoneArray.map((innerItem) => {
          if (
            [
              "Vendor Item Code",
              "Vendor Rate",
              "Activity Month",
              "PO eligibility (Yes/No)",
              "PO Number",
              "Quantity",
              "Vendor Code Description",
              "PO Value",
            ].includes(innerItem?.name)
          ) {
            if (getRowSpan(item)) {
              // console.log(poData[0]?.[item?.systemId+"_"+item?.itemCode],"__sdfghjk")
              data.push(
                <td
                  rowSpan={`${getRowSpan(item)}`}
                  className="text-[12px] text-center whitespace-nowrap pl-1 text-white border-[#0e8670] border-[0.1px] bg-[#475058] text-primaryLine"
                >
                  {innerItem.name === "Vendor Item Code" ? (
                    finalData[item?.workDescription]?.[0]?.["itemCode"]
                  ) : innerItem.name === "Vendor Rate" ? (
                    finalData[item?.workDescription]?.[0]?.["rate"]
                  ) : innerItem.name === "Activity Month" ? (
                    finalData[item?.workDescription]?.[0]?.["completionMonth"]
                  ) : innerItem.name === "PO eligibility (Yes/No)" ? (
                    <span className="px-4 py-[2px] bg-[#1cb99c] rounded-md">
                      {" "}
                      {poData?.length > 0 &&
                      // keys?.includes(
                      //   finalData[item?.workDescription]?.[0]?.siteId
                      // )
                      item?.itemCode!==undefined && item?.itemCode===keys[item?.systemId+"_"+item?.itemCode]?.split("_")[1] && item?.systemId ===keys[item?.systemId+"_"+item?.itemCode]?.split("_")[0]?
                      poData[0]?.[item?.systemId+"_"+item?.itemCode]:
                        item?.itemCode===undefined && item?.systemId === keys[item?.systemId+"_poStatus"]?.split("_")[0]? poData[0]?.[item?.systemId+"_poStatus"]
                        : finalData[item?.workDescription]?.[0]?.[
                            "POEligibility"
                          ]}
                      {/* {finalData[item?.workDescription]?.[0]?.["POEligibility"]} */}
                    </span>
                  ) : innerItem.name === "PO Number" ? (
                    finalData[item?.workDescription]?.[0]?.["poNumber"]
                  ) : innerItem.name === "Quantity" ? (
                    finalData[item?.workDescription]?.[0]?.["quantity"]
                  ) : innerItem.name === "Vendor Code Description" ? (
                    <div className="relative group">
                      <p className="truncate max-w-[150px]">
                        {finalData[item?.workDescription]?.[0]
                          ?.vendorCodeDescription?.length > 30
                          ? finalData[
                              item?.workDescription
                            ]?.[0]?.vendorCodeDescription.slice(0, 30) + "..."
                          : finalData[item?.workDescription]?.[0]
                              ?.vendorCodeDescription}
                      </p>

                      {finalData[item?.workDescription]?.[0]
                        ?.vendorCodeDescription?.length > 30 && (
                        <span className="pointer-events-none w-max absolute -top-8 left-1/2 -translate-x-1/2 bg-[#13b497] text-white text-xs rounded-lg p-1 opacity-0 transition-opacity group-hover:opacity-100 z-50">
                          {
                            finalData[item?.workDescription]?.[0]
                              ?.vendorCodeDescription
                          }
                        </span>
                      )}
                    </div>
                  ) : innerItem.name === "PO Value" ? (
                    finalData[item?.workDescription]?.[0]?.["poValue"]
                  ) : (
                    item[innerItem?.value]
                  )}
                </td>
              );
            } else {
              return;
            }
          } else {
            data.push(
              <td className="text-[12px] text-center whitespace-nowrap pl-1 text-white border-[#0e8670] border-[0.1px] bg-[#475058] text-primaryLine">
                {item[innerItem?.value]}
              </td>
            );
          }
        });
        rows.push(<tr className="border-[#0e8670]">{data}</tr>);
      });
    });
    return rows;
  }
  //   console.log(poSiteIds,"__kbfbjdsd")

  const handleAddId = (siteId) => {
    if (!poSiteIdsRef.current.includes(siteId)) {
      poSiteIdsRef.current.push(siteId);
    }

    //   console.log([...poSiteIdsRef.current], "___poSiteIdsRef.current___");
    dispatch(VendorActions.getPoEligibility(poSiteIdsRef.current, true));
  };
  const handleRemoveSiteId = (siteId) => {
    if (poSiteIdsRef.current.includes(siteId)) {
      poSiteIdsRef.current = poSiteIdsRef.current.filter(
        (itm) => itm !== siteId
      );
    }
    if (poSiteIdsRef.current?.length === 1) {
      poSiteIdsRef.current = [];
    }
    // console.log([...poSiteIdsRef.current], "___poSiteIdsRef.current___");
  };
  return (
    <>
      <tr className="relative" >
        <td className="text-[12px] pl-1  !h-[10px] border-[#0e8670]  sticky left-0 bg-[#3e454d] z-40 cursor-pointer h-[10px] border-[0.1px] text-primaryLine">
          <span
            onClick={() => {
              const siteId =
                itm?.siteId || itm?.site_id || itm?.id || itm?._id || "";
              // console.log(expand, siteId, "__c_");
              if (!expand) {
                handleAddId(siteId);
              } else {
                handleRemoveSiteId(siteId);
              }

              //   console.log("object ...", "called");
              setExpand((prev) => !prev);
            }}
            else
          >
            {expand ? <UilAngleUp /> : <UilAngleDown />}
          </span>
        </td>

        {table.columns.map((innerItm, index) => {
          return hide.indexOf(String(index)) == -1 ? (
            <td
              rowSpan={`${getRowSpan(itm)}`}
              className={`text-[12px] !h-[10px] pl-1 border-[#0e8670] border-[0.1px] text-white ${
                innerItm.style ? innerItm.style : " min-w-[300px] max-w-[500px]"
              } `}
            >
              <Modalmoreinfo
                ctt={32}
                setModalBody={setModalBody}
                setOpenModal={setOpenModal}
                value={itm[innerItm.value]}
              />
            </td>
          ) : (
            <></>
          );
        })}
      </tr>

      {expand && expendedRows()}
    </>
  );
};

export default AdvancedTableExpandableOneRow;
// =======================================================OLD CODE START
// import React, { useEffect, useRef, useState } from "react";
// import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons";
// import Modalmoreinfo from "./Modalmoreinfo";
// import Button from "./Button";
// import { ListItemAvatar } from "@material-ui/core";
// import { useDispatch, useSelector } from "react-redux";
// import VendorActions from "../store/actions/vendor-actions";

// const AdvancedTableExpandableOneRow = ({
//   multiSelect,
//   setOpenModal,
//   setModalBody,
//   table,
//   itm,
//   poSiteIdsRef,
//   itmIndex,
//   hide,
//   finalData,
// }) => {
//   const [expand, setExpand] = useState(false);

//   const dispatch = useDispatch();
//   const [poSiteIds,setPoSitIds] = useState([])
// //   const poSiteIdsRef = useRef([])
//   const countRef = useRef({});

//   function getRowSpan(itm) {
//     let count = 0;

//     if (!("workDescription" in itm)) {
//       count = 1;
//     } else if (!(itm?.workDescription in finalData)) {
//       count = 1;
//     } else if (finalData[itm?.workDescription]?.length) {
//       if (finalData[itm?.workDescription][0]?._id === itm?._id) {
//         count = finalData[itm?.workDescription].length;
//         countRef.current = {
//           ...countRef.current,
//           [itm.workDescription]: true,
//         };
//         // console.log("countRef.current", countRef.current);
//       } else {
//         count = 0;
//       }
//     }
//     return count;
//   }
//   const poData = useSelector((state)=>state?.vendorData?.getPoEligibility);
// //   console.log(poData,"___poData")
// //   console.log(itm,"___itm__")
//   function expendedRows() {
//     const rows = [];
//     console.log(finalData,"__FinalData")
//     const keys = poData?.length>0 ? Object.keys(poData[0]):[];
//     Object.keys(finalData).map((key) => {
//         console.log(key,"__key")
//       finalData[key].forEach((item,index) => {
//             // console.log("1:",finalData[item?.workDescription][0]?.siteId,"2:",Object.keys(poData[0])[0],"____fajsbhdjvadskmbj")
//         // console.log(finalData[item?.workDescription],"__itmIndex")
//         const data = [];
//         table?.childs?.milestoneArray.map((innerItem) => {
//           if (
//             [
//               "Vendor Item Code",
//               "Vendor Rate",
//               "PO eligibility (Yes/No)",
//               "Quantity",
//               "Vendor Code Description",
//               "PO Value",
//             ].includes(innerItem?.name)
//           ) {
//             if (getRowSpan(item)) {
//               data.push(
//                 <td
//                   rowSpan={`${getRowSpan(item)}`}
//                   className="text-[12px] text-center whitespace-nowrap pl-1 text-white border-[#0e8670] border-[0.1px] bg-[#475058] text-primaryLine"
//                 >
//                   {innerItem.name === "Vendor Item Code" ? (
//                     finalData[item?.workDescription]?.[0]?.["itemCode"]
//                   ) : innerItem.name === "Vendor Rate" ? (
//                     finalData[item?.workDescription]?.[0]?.["rate"]
//                   ) : innerItem.name === "PO eligibility (Yes/No)" ? (
//                     <span className="px-4 py-[2px] bg-[#1cb99c] rounded-md">
//                       {" "}
//                       {poData?.length>0 && keys?.includes(finalData[item?.workDescription]?.[0]?.siteId) ? poData[0]?.[itm?.uniqueId] : finalData[item?.workDescription]?.[0]?.["POEligibility"]}
//                       {/* {finalData[item?.workDescription]?.[0]?.["POEligibility"]} */}
//                     </span>
//                   ) : innerItem.name === "Quantity" ? (
//                     finalData[item?.workDescription]?.[0]?.["quantity"]
//                   ) : innerItem.name === "Vendor Code Description" ? (
//                     finalData[item?.workDescription]?.[0]?.[
//                       "vendorCodeDescription"
//                     ]
//                   ) : innerItem.name === "PO Value" ? (
//                     finalData[item?.workDescription]?.[0]?.["poValue"]
//                   ) : (
//                     item[innerItem?.value]
//                   )}
//                 </td>
//               );
//             } else {
//               return;
//             }
//           } else {
//             data.push(
//               <td className="text-[12px] text-center whitespace-nowrap pl-1 text-white border-[#0e8670] border-[0.1px] bg-[#475058] text-primaryLine">
//                 {item[innerItem?.value]}
//               </td>
//             );
//           }
//         });
//         rows.push(<tr className="border-[#0e8670]">{data}</tr>);
//       });
//     });
//     return rows;
//   }
// //   console.log(poSiteIds,"__kbfbjdsd")

//   const handleAddId = (siteId) => {
//   if (!poSiteIdsRef.current.includes(siteId)) {
//     poSiteIdsRef.current.push(siteId);
//   }



// //   console.log([...poSiteIdsRef.current], "___poSiteIdsRef.current___");
//   dispatch(VendorActions.getPoEligibility(poSiteIdsRef.current, true));
// };
//   const handleRemoveSiteId =(siteId)=>{
//     if (poSiteIdsRef.current.includes(siteId)) {
//       poSiteIdsRef.current=  poSiteIdsRef.current.filter((itm)=>itm!==siteId)
//     }
//     if(poSiteIdsRef.current?.length===1){
//         poSiteIdsRef.current=[]
//     }
//     // console.log([...poSiteIdsRef.current], "___poSiteIdsRef.current___");
//   }
//   return (
//     <>
//       <tr>
//         <td className="text-[12px] pl-1 !h-[10px] border-[#0e8670] h-[10px] border-[0.1px] text-primaryLine">
//           <span
//           onClick={() => {
            
//             const siteId =
//                 itm?.siteId || itm?.site_id || itm?.id || itm?._id || "";
//             // console.log(expand, siteId, "__c_");
//             if (!expand) {

//                 handleAddId(siteId)
                
//             }else{
//                 handleRemoveSiteId(siteId)
//             }

//             //   console.log("object ...", "called");
//               setExpand((prev) => !prev);
//             }}else
//           >
//             {expand ? <UilAngleUp /> : <UilAngleDown />}
//           </span>
//         </td>

//         {table.columns.map((innerItm, index) => {
//           return hide.indexOf(String(index)) == -1 ? (
//             <td
//               rowSpan={`${getRowSpan(itm)}`}
//               className={`text-[12px] !h-[10px] pl-1 border-[#0e8670] border-[0.1px] text-white ${
//                 innerItm.style ? innerItm.style : " min-w-[300px] max-w-[500px]"
//               } `}
//             >
//               <Modalmoreinfo
//                 ctt={32}
//                 setModalBody={setModalBody}
//                 setOpenModal={setOpenModal}
//                 value={itm[innerItm.value]}
//               />
//             </td>
//           ) : (
//             <></>
//           );
//         })}
//       </tr>

//       {expand && expendedRows()}
//     </>
//   );
// };

// export default AdvancedTableExpandableOneRow;

// =======================================================OLD CODE END

// ////////////////////////////////////////////////////////////////// 2nd LAST OLD Code
// import React, { useEffect, useRef, useState } from "react";
// import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons";
// import Modalmoreinfo from "./Modalmoreinfo";
// import Button from "./Button";
// import { ListItemAvatar } from "@material-ui/core";

// const AdvancedTableExpandableOneRow = ({
//     multiSelect,
//     setOpenModal,
//     setModalBody,
//     table,
//     itm,
//     hide,
//     finalData
// }) => {
//     const [expand, setExpand] = useState(false);
    // console.log("called_____")
    // console.log("finalData___", finalData)


//     const countRef = useRef({})

//     function getRowSpan(itm) {

//         let count = 0

//         if (!("workDescription" in itm)) {
//             count = 1
//         }
//         else if (!(itm?.workDescription in finalData)) {
//             count = 1
//         }
//         else if (finalData[itm?.workDescription]?.length) {
//             if (finalData[itm?.workDescription][0]?._id === itm?._id) {
//                 count = finalData[itm?.workDescription].length
//                 countRef.current = {
//                     ...countRef.current,
//                     [itm.workDescription]: true
//                 }
                // console.log("countRef.current", countRef.current)
//             }
//             else {
//                 count = 0
//             }
//         }
//         return count
//     }

//     function expendedRows() {
//         const rows = []
//         Object.keys(finalData).map(key => {
//             finalData[key].forEach(item => {
//                 const data = []
//                 table?.childs?.milestoneArray.map(innerItem => {


                    
//                     if (["Vendor Item Code", "Vendor Rate", "PO eligibility (Yes/No)","Quantity","Vendor Code Description","PO Value"].includes(innerItem?.name)) {
//                         if (getRowSpan(item)) {
//                             // data.push(<td rowSpan={`${getRowSpan(item)}`} className="text-[35px] text-center whitespace-nowrap pl-1 text-white border-[#0e8670] border-[0.1px] bg-[#475058] text-primaryLine">{innerItem.name === "Vendor Item Code" ? finalData[item?.workDescription]?.[0]?.["itemCode"] : innerItem.name === "Vendor Rate" ? finalData[item?.workDescription]?.[0]?.["rate"] : innerItem.name === "PO eligibility (Yes/No)" ? finalData[item?.workDescription]?.[0]?.["POEligibility"] : item[innerItem?.value]}</td>)
//                             data.push(<td rowSpan={`${getRowSpan(item)}`} className="text-[12px] text-center whitespace-nowrap pl-1 text-white border-[#0e8670] border-[0.1px] bg-[#475058] text-primaryLine">
//                                 {innerItem.name === "Vendor Item Code" ? finalData[item?.workDescription]?.[0]?.["itemCode"] : innerItem.name === "Vendor Rate" ? finalData[item?.workDescription]?.[0]?.["rate"] : innerItem.name === "PO eligibility (Yes/No)" ? <span className="px-4 py-[2px] bg-[#1cb99c] rounded-md"> {finalData[item?.workDescription]?.[0]?.["POEligibility"] }</span>:innerItem.name === "Quantity" ? finalData[item?.workDescription]?.[0]?.["quantity"] : innerItem.name === "Vendor Code Description"? finalData[item?.workDescription]?.[0]?.["vendorCodeDescription"] :innerItem.name === "PO Value"? finalData[item?.workDescription]?.[0]?.["poValue"] : item[innerItem?.value]}
//                             </td>
                             
//                         )
//                         } else {
//                             return
//                         }
//                     }
//                     else {
//                         data.push(<td className="text-[12px] text-center whitespace-nowrap pl-1 text-white border-[#0e8670] border-[0.1px] bg-[#475058] text-primaryLine">{item[innerItem?.value]}</td>)
//                     }
//                 })
//                 rows.push(<tr className="border-[#0e8670]">{data}</tr>)
//             })
//         })
//         return rows
//     }

//     return (
//         <>
//             <tr>
//                 <td className="text-[12px] pl-1 !h-[10px] border-[#0e8670] h-[10px] border-[0.1px] text-primaryLine">
//                     <span
//                         onClick={() => {
                            // console.log('object ...' , 'called')
//                             setExpand((prev) => !prev);
//                         }}
//                     >
//                         {expand ? <UilAngleUp /> : <UilAngleDown />}
//                     </span>
//                 </td>

//                 {table.columns.map((innerItm, index) => {
//                     return hide.indexOf(String(index)) == -1 ? (

//                         <td rowSpan={`${getRowSpan(itm)}`}
//                             className={`text-[12px] !h-[10px] pl-1 border-[#0e8670] border-[0.1px] text-white ${innerItm.style ? innerItm.style : " min-w-[300px] max-w-[500px]"
//                                 } `}
//                      >
//                             <Modalmoreinfo
//                                 ctt={32}
//                                 setModalBody={setModalBody}
//                                 setOpenModal={setOpenModal}
//                                 value={itm[innerItm.value]}
//                             />
//                         </td>

//                     ) : (
//                         <></>
//                     );
//                 })}
//             </tr>

//             {/* {expand &&
//                 table?.childs &&
//                 Object.entries(table.childs)?.map((onewq) => {
//                     return itm[onewq[0]]?.map((onewqq) => {
//                         return (
//                             <tr>
//                                 <td className="text-[12px] pl-1 border-[#0e8670] border-[0.1px] bg-[#475058] text-primaryLine ">
//                                     {multiSelect ? (
//                                         <div className="flex justify-center">
//                                             <input
//                                                 type="checkbox"
//                                                 name="groupOfCheck[]"
//                                                 value={onewqq.uniqueId}
//                                             />
//                                         </div>
//                                     ) : (
//                                         <></>
//                                     )}
//                                 </td>

//                                 {table?.childs[onewq[0]]?.map((itts, index) => {
                                    // console.log("itts.name", itts.name)
//                                     return (
//                                         // !countRef.current[onewqq?.workDescription] ? (
//                                         ["Vendor Item Code", "Vendor Rate", "PO eligibility (Yes/No)"].includes(itts.name) ? (
//                                             getRowSpan(onewqq) > 0 ?
//                                                 <td rowspan={`${getRowSpan(onewqq)}`}
//                                                     className={`text-[12px] pl-1 cursor-pointer border-[#0e8670] border-[0.1px] bg-[#475058] text-white ${itts.style ? itts.style : " min-w-[300px] max-w-[500px]"
//                                                         }`}
//                                                 >
//                                                     <Modalmoreinfo
//                                                         ctt={32}
//                                                         setModalBody={setModalBody}
//                                                         setOpenModal={setOpenModal}
//                                                         value={itts.name === "Vendor Item Code" ? finalData[onewqq?.workDescription]?.[0]?.["itemCode"] : itts.name === "Vendor Rate" ? finalData[onewqq?.workDescription]?.[0]?.["rate"] : itts.name === "PO eligibility (Yes/No)" ? finalData[onewqq?.workDescription]?.[0]?.["POEligibility"] : ""}
//                                                     />
//                                                 </td> : null
//                                         )
//                                             :
//                                             <td
//                                                 className={`text-[12px] pl-1 cursor-pointer border-[#0e8670] border-[0.1px] bg-[#475058] text-white ${itts.style ? itts.style : " min-w-[300px] max-w-[500px]"
//                                                     }`}
//                                             >
//                                                 <Modalmoreinfo
//                                                     ctt={32}
//                                                     setModalBody={setModalBody}
//                                                     setOpenModal={setOpenModal}
//                                                     value={onewqq[itts.value]}
//                                                 />
//                                             </td>
//                                         // ) : ""


//                                     );
//                                 })}
//                             </tr>
//                         );
//                     });
//                 })} */}

//             {expand && expendedRows()}
//         </>
//     );
// };

// export default AdvancedTableExpandableOneRow;

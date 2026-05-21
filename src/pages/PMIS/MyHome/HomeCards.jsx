import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Unicons from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import CCDash from "../../../components/CCDash";
import { useNavigate, useParams } from "react-router-dom";
import ComponentActions from "../../../store/actions/component-actions";
import { getAccessType } from "../../../utils/commonFunnction";
import { ALERTS } from "../../../store/reducers/component-reducer";
import MileStoneChart from "../Dashboard1/MileStoneChart";
import ExpenseApprovalStatus from "../ExpenseAdvanceGraph/ExpenseApprovalStatus";
import AdvanceApprovalStatus from "../ExpenseAdvanceGraph/AdvanceApprovalStatus";
import TrendExpenseAdvance from "../ExpenseAdvanceGraph/TrendExpenseAdvance";
import MyHomeActions from "../../../store/actions/myHome-actions";
import Button from "../../../components/Button";
import { baseUrl } from "../../../utils/url";

const HomeCards = () => {
  const [type, settype] = useState(false);
  let dispatch = useDispatch();

  let navigate = useNavigate();
  const { customeruniqueId } = useParams();
  const [viewMoreGraphs, setViewMoreGraphs] = useState(2);

  const viewMore = () => {
    setViewMoreGraphs((prev) => prev + 2);
  };

  useEffect(() => {
    dispatch(ComponentActions.breadcrumb("Home", "/home", 0, true));
  }, []);
  useEffect(() => {
    callGlobalNotify();
  }, []);

  const hasCalled = React.useRef(false);

  const callGlobalNotify = async () => {
    try {
      // Prevent multiple calls
      if (hasCalled.current) return;
      hasCalled.current = true;

      console.log("1️⃣ [API] Starting callGlobalNotify...");

      const userData = JSON.parse(localStorage.getItem("user"));
      const userId = userData?.uniqueId;

      // if (!userId && window.location.pathname !== "/login") {
      //   console.error("❌ No User ID found!");
      //   dispatch(
      //     ALERTS({
      //       show: true,
      //       text: "User ID not found",
      //       icon: "error",
      //       type: "message",
      //     }),
      //   );
      //   return;
      // }

      // Call API
      const res = await dispatch(
        MyHomeActions.getwebGlobalNotify(true, userId),
      );

      console.log("2️⃣ [API] Raw Response Data:", res?.data);

      // Do not show modal if data is empty
      if (!res?.data || res.data.length === 0) {
        console.log("ℹ️ No notifications found for this user. Skipping modal.");
        return;
      }

      const item = res.data[0];

      const type = item?.type?.toLowerCase();
      const fileName = item?.msg?.split("/").pop() || "file";

      if (type === "message") {
        dispatch(
          ALERTS({
            show: true,
            text: item.msg,
            icon: "info",
            type: "message",
          }),
        );
        console.log("3️⃣ Message Payload Dispatched:", item.msg);
      } else if (type === "file") {
        dispatch(
          ALERTS({
            show: true,
            text: fileName,
            filePath: item.msg,
            icon: "info",
            type: "file",
          }),
        );
        console.log("3️⃣ File Payload Dispatched:", fileName);
      } else {
        console.warn("⚠️ Unknown notification type:", type);
        dispatch(
          ALERTS({
            show: true,
            text: "Unknown notification type",
            icon: "warning",
            type: "message",
          }),
        );
      }
    } catch (error) {
      console.error("🔥 [API ERROR]:", error);
      dispatch(
        ALERTS({
          show: true,
          text: "Something went wrong",
          icon: "error",
          type: "message",
        }),
      );
    }
  };
  const graphs = [ExpenseApprovalStatus, AdvanceApprovalStatus, MileStoneChart];

  let showType1 = getAccessType("MS Status(Graph)");
  let showType2 = getAccessType("Expanse Approval Status(Graph)");
  let showType3 = getAccessType("Advance Approval Status(Graph)");

  let graph1 = false;
  let graph2 = false;
  let graph3 = false;

  if (showType1 === "visible") {
    graph1 = true;
  }
  if (showType2 === "visible") {
    graph2 = true;
  }
  if (showType3 === "visible") {
    graph3 = true;
  }

  return (
    <>
      <div className="absolute w-full top-6 mt-12 h-18 z-10 bg-[#3e454d] overflow-auto ">
        <CCDash
          showbtn={false}
          approveddata={[
            [
              "Personal Info",
              "bg-pcol",
              "/home/personalInfo",
              <Unicons.UilUserCircle size="36" color="" />,
              "border-b-blue-300",
            ],
            [
              "My Task",
              "bg-pcol",
              "/home/myTask",
              <Unicons.UilFileAlt size="40" color="" />,
            ],

            [
              "My Entitlement",
              "bg-pcol",
              "/home/myPolicy",
              <Unicons.UilFileAlt size="40" color="" />,
            ],

            [
              "Claim & Advance",
              "bg-pcol",
              "/home/claimAndAdvance",
              <Unicons.UilMoneyWithdrawal size="40" color="#b39800" />,
              "border-b-[#b39800]",
            ],
            [
              "Asset",
              "bg-pcol",
              "/home/assets",
              <Unicons.UilArchive size="40" color="white" />,
            ],
            [
              "Approvals",
              "bg-pcol",
              "/home/Approval",
              <Unicons.UilCheckCircle size="40" color="" />,
            ],
            [
              "PTW Log Backup",
              "bg-pcol",
              "/home/PtwLogBackup",
              <Unicons.UilFileAlt size="40" color="" />,
            ],
            [
              "OHS Guidelines",
              "bg-pcol",
              "/home/OHS",
              <Unicons.UilPagerduty size="32" color="" />,
              "border-b-[#b8e0d2]",
            ],
            // ["PTW Log Backup", "bg-pcol", "/superAdmin/PTWLogBackup"],
          ].map((itm) => (
            <>
              {getAccessType(itm[0]) == "visible" ||
              getAccessType(itm[0]) == "disabled" ? (
                <div
                  className={`${itm[1]} bg-pcol text-white text-center text-[14px] shadow-md hover:shadow-rxl w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-11/12 flex h-12 cursor-pointer rounded-lg hover:scale-[102%] transition-all duration-500 font-oxygen font-bold hover:text-[15px] hover:text-[#444c54] hover:bg-pcolhover`}
                  onClick={() => {
                    if (getAccessType(itm[0]) == "visible") {
                      dispatch(ComponentActions.globalUrlStore(itm[0], itm[2]));
                      navigate(itm[2]);
                      dispatch(
                        ComponentActions.breadcrumb(itm[0], itm[2], 1, false),
                      );
                    } else {
                      let msgdata = {
                        show: true,
                        icon: "error",
                        buttons: [],
                        type: 1,
                        text: "This option is disabled",
                      };
                      dispatch(ALERTS(msgdata));
                    }
                  }}
                >
                  {itm["companyimg"] && itm["companyimg"] !== "" && (
                    <>
                      <img
                        className="m-auto w-24"
                        src={backendassetUrl + itm["companyimg"]}
                        alt={itm[0]}
                      />
                    </>
                  )}
                  <div className="m-auto">{itm[0]}</div>
                </div>
              ) : (
                <></>
              )}
            </>
          ))}
          settype={settype}
          label="Add / Modify Customer"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 m-2 mt-32  gap-2">
        {graph1 && <MileStoneChart />}
        {/* <TrendExpenseAdvance /> */}
        {graph2 && <ExpenseApprovalStatus />}
        {graph3 && <AdvanceApprovalStatus />}
      </div>
      {/* <div className="grid lg:grid-cols-2 m-2 gap-2">
        {graphs.slice(0, viewMoreGraphs)?.map((AllGraphs, index) => (
          <AllGraphs key={index} customeruniqueId={customeruniqueId} />
        ))}
        {viewMoreGraphs < graphs.length && (
          <button
          className="flex w-full justify-center rounded-lg py-1.5 text-sm leading-6 text-white font-extrabold shadow-sm focus-visible:outline 
          focus-visible:outline-2 mr-4  focus-visible:outline-offset-2  buttonAnim border-[1.5px] border-[#0e8670] font-poppins transition
          duration-1000 ease-in-out hover:bg-[#ffab2d] hover:text-white bg-[#13b497] hover:border-[#FF6347] hover:border-[0.5px]"
            onClick={viewMore} 
          >
            View More
          </button>
        )}
      </div> */}
    </>
  );
};

export default HomeCards;

// According to Shubham's Code (old code)

// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import * as Unicons from "@iconscout/react-unicons";
// import { useDispatch, useSelector } from "react-redux";
// import CCDash from "../../../components/CCDash";
// import { useNavigate } from "react-router-dom";

// import ComponentActions from "../../../store/actions/component-actions";
// import { getAccessType } from "../../../utils/commonFunnction";
// import { ALERTS } from "../../../store/reducers/component-reducer";

// const HomeCards = () => {
//   const [type, settype] = useState(false);
//   let dispatch = useDispatch();

//   let navigate = useNavigate();

//   useEffect(() => {
//     dispatch(ComponentActions.breadcrumb("Home", "/home", 0, true));
//   }, []);
//   return (
//     <>
//       <CCDash
//         showbtn={false}
//         approveddata={[
//           ["Personal Info", "bg-gradient-to-r from-indigo-500/50 to-green-500/50", "/home/personalInfo"],
//           ["Claim & Advance", "bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-400", "/home/claimAndAdvance",],
//           ["Asset", "bg-gradient-to-r from-indigo-500/50 to-green-500/50", "/home/assets",],
//           ["Approvals", "bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-400", "/home/approverCards",],
//           ["PTW", "bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-400", "/home/ptw",],
//         ].map((itm) => {
//           return (
//             <>
//               {1 == 1 || (getAccessType(itm[0]) == "visible" ||
//                 getAccessType(itm[0]) == "disabled") ? (
//                 <div
//                   className={`${itm[1]} shadow-md hover:shadow-rxl w-[98%] flex h-24 cursor-pointer rounded-lg hover:scale-[102%] transition-all duration-500 font-oxygen font-bold  hover:text-lg  `}
//                   onClick={() => {

//                     console.log(getAccessType(itm[0]), "getAccessType(itm[0])")
//                     if (1 == 1 || getAccessType(itm[0]) == "visible") {

//                       dispatch(
//                         ComponentActions.globalUrlStore(
//                           itm[0],
//                           itm[2]
//                         )
//                       );
//                       navigate(itm[2]);

//                       dispatch(
//                         ComponentActions.breadcrumb(itm[0], itm[2], 1, false)
//                       );
//                     } else {
//                       let msgdata = {
//                         show: true,
//                         icon: "error",
//                         buttons: [],
//                         type: 1,
//                         text: "This option is disabled",
//                       };
//                       dispatch(ALERTS(msgdata));
//                     }
//                   }}
//                 >
//                   {itm["companyimg"] && itm["companyimg"] != "" && (
//                     <>
//                       <img
//                         className="m-auto w-24"
//                         src={backendassetUrl + itm["companyimg"]}
//                       />
//                     </>
//                   )}
//                   <div className="m-auto bg-gradient-to-r from-stone-800 to-stone-900 bg-clip-text text-transparent">
//                     {itm[0]}
//                   </div>
//                 </div>
//               ) : (
//                 <></>
//               )}
//             </>
//           );
//         })}
//         settype={settype}
//         label="Add / Modify Customer"
//       />
//     </>
//   );
// };

// export default HomeCards;

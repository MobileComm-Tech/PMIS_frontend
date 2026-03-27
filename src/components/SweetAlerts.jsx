// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Modal from "./Modal";
// import { ALERTS } from "../store/reducers/component-reducer";
// import {
//   UilExclamationTriangle,
//   UilInfoCircle,
// } from "@iconscout/react-unicons";
// import swal from "sweetalert";
// import Button from "./Button";
// export const SweetAlerts = () => {
//   const dispatch = useDispatch();
//   let swAlerts = useSelector((state) => {
//     let interdata = state?.component?.alerts;
//     interdata = {
//       ...interdata,
//       buttons:
//         interdata?.buttons?.length > 0
//           ? interdata?.buttons
//           : [
//               <Button
//                 classes="w-15 bg-rose-400"
//                 onClick={() => {
//                   dispatch(ALERTS({ show: false }));
//                 }}
//                 name={"OK"}
//               />,
//             ],
//     };
//     return interdata;
//   });

//   const [swalProps, setSwalProps] = useState({
//     show: true,
//     title: "Example",
//     text: "Hello World",
//   });

//   const icons = {
//     warning: <UilExclamationTriangle size="52" className={"hello"} />,
//     error: <UilExclamationTriangle size="52" className={"hello"} />,
//     info: <UilInfoCircle size="52" className={"hello"} />,
//     success: <UilInfoCircle size="52" className={"hello"} />,
//   };

//   const showAlert = () => {
//     swal({
//       title: swAlerts?.head,
//       text: swAlerts?.text,
//       icon: swAlerts?.icon,
//       button: "OK",
//     });

//     dispatch(ALERTS({ show: false }));
//   };
//   return (
//     <>
//       {swAlerts?.type == 1 ? (
//         <>{showAlert()}</>
//       ) : (
//         <>
//           <Modal
//             size={"sm"}
//             isOpen={swAlerts?.show}
//             setIsOpen={() => {
//               dispatch(ALERTS({ show: false }));
//             }}
//             children={
//               <div className="flex h-full flex-col px-2 items-center">
//                 <div className="text-red-400">{icons[swAlerts?.icon]}</div>
//                 <h1 className="text-white font-semibold mt-3">
//                   {swAlerts?.text}
//                 </h1>
//                 <div className="mt-6  flex justify-evenly w-48">
//                   {swAlerts?.buttons?.map((itms) => {
//                     return itms;
//                   })}
//                 </div>
//               </div>
//             }
//           />
//         </>
//       )}
//     </>
//   );
// };

// export default SweetAlerts;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { ALERTS } from "../store/reducers/component-reducer";
import MyHomeActions from "../store/actions/myHome-actions";
import {
  UilExclamationTriangle,
  UilInfoCircle,
} from "@iconscout/react-unicons";
import Button from "./Button";
import { baseUrl } from "../utils/url";

const SweetAlerts = () => {
  const dispatch = useDispatch();
  const swAlerts = useSelector((state) => state?.component?.alerts);

  const icons = {
    warning: <UilExclamationTriangle size={52} />,
    error: <UilExclamationTriangle size={52} />,
    info: <UilInfoCircle size={52} />,
    success: <UilInfoCircle size={52} />,
  };

  if (!swAlerts?.show) return null;

  // 🔹 Clear button handler → hits API correctly
  const handleClear = async () => {
    try {
      console.log("🚀 Clear button clicked");

      const res = await dispatch(MyHomeActions.getwebClearNotify(true));

      console.log("✅ Clear API response:", res);

      dispatch(ALERTS({ show: false }));
    } catch (error) {
      console.error("❌ Error calling Clear API:", error);
      dispatch(
        ALERTS({
          show: true,
          text: "Failed to clear notifications",
          icon: "error",
          type: "message",
        }),
      );
    }
  };

  // 🔹 Render buttons based on notification type
  const renderButtons = () => {
    if (swAlerts.type === "file") {
      const url = new URL(swAlerts.filePath, baseUrl).toString();

      return (
        <>
          <Button
            classes="w-20 bg-[#13B497]"
            name="Download"
            onClick={() => {
              const link = document.createElement("a");
              link.href = url;
              link.download = swAlerts.text;
              link.target = "_blank";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          />
          <Button
            classes="w-15 bg-red-800"
            name="Clear"
            onClick={handleClear}
          />
        </>
      );
    }

    // Default → message type
    if (swAlerts.type === "message" || swAlerts.type === "file") {
      return (
        <Button classes="w-15 bg-red-800" name="Clear" onClick={handleClear} />
      );
    } else {
      return (
        <Button
          classes="w-15 bg-[#13B497]"
          name="OK"
          onClick={() => dispatch(ALERTS({ show: false }))}
        />
      );
    }
  };

  return (
    <Modal
      notifyClear={swAlerts.type === "file" || swAlerts.type === "message"}
      handleClear={handleClear}
      size="sm"
      isOpen={swAlerts.show}
      setIsOpen={() => dispatch(ALERTS({ show: false }))}
      header={null}
    >
      <div className="flex flex-col items-center px-4 py-4 w-auto max-w-[90vw]">
        <div className="text-red-400 text-3xl">{icons[swAlerts.icon]}</div>
        <div className="max-h-[70vh] overflow-y-auto px-4">
          <h1 className="text-white font-semibold mt-3 text-center break-words">
            {swAlerts.text}
          </h1>
        </div>
        <div className="mt-6 flex justify-evenly w-full max-w-xs">
          {renderButtons()}
        </div>
      </div>
    </Modal>
  );
};

export default SweetAlerts;

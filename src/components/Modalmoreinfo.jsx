// import React from "react";
// import { moreinfo } from "../utils/commonFunnction";

// const Modalmoreinfo = ({
//   value,
//   setModalBody,
//   setOpenModal,
//   ctt = 100,
//   pStyle = null,
// }) => {
//   if (!value) return null;

//   // Function to parse text for **bold** and *italic*
//   const parseText = (text) => {
//     // Regex matches **bold** or *italic* or plain text
//     const regex = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|([^*]+)/g;
//     const elements = [];
//     let match;

//     while ((match = regex.exec(text)) !== null) {
//       if (match[2]) {
//         // Bold
//         elements.push(<strong key={elements.length}>{match[2]}</strong>);
//       } else if (match[4]) {
//         // Italic
//         elements.push(<em key={elements.length}>{match[4]}</em>);
//       } else if (match[5]) {
//         // Plain text
//         elements.push(<span key={elements.length}>{match[5]}</span>);
//       }
//     }
//     return elements;
//   };

//   if (value.length > 100) {
//     return (
//       <div className="group flex flex-col relative items-center w-full">
//         <p
//           className="cursor-pointer text-center"
//           onClick={() => {
//             setOpenModal(true);
//             setModalBody(
//               <div className="p-3 overflow-y-auto text-center text-white max-h-[70vh]">
//                 {parseText(value)}
//               </div>,
//             );
//           }}
//         >
//           {moreinfo(value, ctt) + "..."}
//         </p>
//         <span className="pointer-events-none w-max absolute -top-1 -right-0 bg-green-400 z-50 rounded-md p-[4px] opacity-0 transition-opacity group-hover:opacity-100">
//           {"Tap for moreInfo..."}
//         </span>
//       </div>
//     );
//   }

//   if (value === "Yes" || value === "No") {
//     return <p id="tdp1">{value}</p>;
//   } else {
//     if (pStyle !== null) {
//       return <p id="tdp">{value}</p>;
//     }
//     return <p>{parseText(value)}</p>;
//   }
// };

// export default Modalmoreinfo;
import React from "react";
import { moreinfo } from "../utils/commonFunnction";

const Modalmoreinfo = ({
  value,
  setModalBody,
  setOpenModal,
  ctt = 100,
  pStyle = null,
}) => {
  if (!value) return null;

  const parseLine = (text) => {
    const regex = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|([^\*\n]+)/g;
    const elements = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match[2])
        elements.push(<strong key={elements.length}>{match[2]}</strong>);
      else if (match[4])
        elements.push(<em key={elements.length}>{match[4]}</em>);
      else if (match[5])
        elements.push(<span key={elements.length}>{match[5]}</span>);
    }
    return elements;
  };

  // Parse text with multiple lines
  const parseText = (text) => {
    if (!text) return null;

    const str = String(text);

    return str.split("\n").map((line, i) => (
      <div key={i} style={{ whiteSpace: "pre-wrap" }}>
        {parseLine(line)}
      </div>
    ));
  };

  const renderText = (text) => <div>{parseText(text)}</div>;

  if (value.length > 100) {
    return (
      <div className="group flex flex-col relative items-center w-full">
        <p
          className="cursor-pointer text-center"
          onClick={() => {
            setOpenModal(true);
            setModalBody(
              <div className="p-3 overflow-y-auto text-center text-white max-h-[70vh]">
                {renderText(value)}
              </div>,
            );
          }}
        >
          {moreinfo(value, ctt) + "..."}
        </p>
        <span className="pointer-events-none w-max absolute -top-1 -right-0 bg-green-400 z-50 rounded-md p-[4px] opacity-0 transition-opacity group-hover:opacity-100">
          {"Tap for moreInfo..."}
        </span>
      </div>
    );
  }

  if (value === "Yes" || value === "No") {
    return <p id="tdp1">{value}</p>;
  } else if (pStyle !== null) {
    return <p id="tdp">{value}</p>;
  } else {
    return renderText(value);
  }
};

export default Modalmoreinfo;

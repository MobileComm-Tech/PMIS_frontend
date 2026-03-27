import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALERTS } from "../store/reducers/component-reducer";
import { UilFileDownloadAlt } from "@iconscout/react-unicons";
import { baseUrl } from "../utils/url";

export const SweetAlertNotify = () => {
  const dispatch = useDispatch();
  const swAlerts = useSelector((state) => state?.component?.alerts);

  // 🛠️ DEBUG LOG - If you don't see this in F12 console, the file isn't being used!
  if (swAlerts?.show && swAlerts?.type?.toLowerCase() === "file") {
    console.error(
      "🚀 [SYSTEM] SweetAlertNotify is now TAKING OVER the screen!",
    );
  }

  // ✅ 1. ONLY SHOW IF TYPE IS "file"
  if (!swAlerts?.show || swAlerts?.type?.toLowerCase() !== "file") return null;

  const closeAlert = () => {
    dispatch(ALERTS({ show: false }));
  };

  const handleDownload = () => {
    if (!swAlerts?.filePath) return;
    const fileUrl = `${baseUrl}/${swAlerts.filePath}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", swAlerts.text || "download.pdf");
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000", // Solid black to cover the old modal
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#2d3748",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "20px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          border: "1px solid #4a5568",
        }}
      >
        {/* Blue Icon */}
        <div style={{ color: "#63b3ed", marginBottom: "24px" }}>
          <UilFileDownloadAlt size="80" />
        </div>

        {/* Filename */}
        <h2
          style={{
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "40px",
            wordBreak: "break-all",
          }}
        >
          {swAlerts?.text}
        </h2>

        {/* ✅ THE TWO BUTTONS: DOWNLOAD AND CLEAR */}
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <button
            onClick={handleDownload}
            style={{
              backgroundColor: "#38a169",
              color: "white",
              fontWeight: "900",
              padding: "18px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              fontSize: "16px",
            }}
          >
            Download Now
          </button>

          <button
            onClick={closeAlert}
            style={{
              backgroundColor: "#e53e3e",
              color: "white",
              fontWeight: "bold",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              fontSize: "14px",
            }}
          >
            Clear Notification
          </button>
        </div>
      </div>
    </div>
  );
};

import Api from "../../utils/api";
import { Urls } from "../../utils/url";
import { ALERTS } from "../reducers/component-reducer";
import {
  GET_WCC_PROJECT_ID,
  GET_WCC_EMPLOYEE,
  WCC_APPROVER_DATA,
  UPDATE_WCC_APPROVER_DATA,
  GET_WCC_PROJECT_GROUP,
} from "../reducers/wccApprover-reducers";

const PTWActions = {

    
  getWccProjectId:
    (reset = true, uid = "", args = "") =>
      async (dispatch, _) => {
        try {
          const res = await Api.get({
            url: `${Urls.getWccProjectId}${uid != "" ? "/" + uid : ""}${args != "" ? "?" + args : ""
              }`,
          });
          if (res?.status === 200) {
            let dataAll = res?.data?.data;
            dispatch(GET_WCC_PROJECT_ID({ dataAll, reset }));
          } else {
            dispatch(ALERTS(res?.data));
          }

        } catch (error) { }
      },

  getWccEmployee:
    (reset = true, uid = "", args = "") =>
      async (dispatch, _) => {
        try {
          const res = await Api.get({
            url: `${Urls.getWccEmployee}${uid != "" ? "/" + uid : ""}${args != "" ? "?" + args : ""
              }`,
          });
          if (res?.status === 200) {
            let dataAll = res?.data?.data;
            dispatch(GET_WCC_EMPLOYEE({ dataAll, reset }));
          } else {
            dispatch(ALERTS(res?.data));
          }

        } catch (error) { }
      },
        getWccProjectGroup:
    (reset = true, uid = "", args = "") =>
      async (dispatch, _) => {
        try {
          const res = await Api.get({
            url: `${Urls.getWccProjectGroup}${uid != "" ? "/" + uid : ""}${args != "" ? "?" + args : ""
              }`,
          });
          if (res?.status === 200) {
            let dataAll = res?.data?.data;
            dispatch(GET_WCC_PROJECT_GROUP({ dataAll, reset }));
          } else {
            dispatch(ALERTS(res?.data));
          }

        } catch (error) { }
      },

  // Get Approver Data for table display
  WccApproverData:
    (reset = true, args = "") =>
      async (dispatch, _) => {
        try {
          const res = await Api.get({
            url: `${Urls.wccApprover}${args != "" ? "?" + args : ""}`,
          });
          if (res?.status !== 200) return;
        //   console.log("this_skjdbfjlksjbdfj")
          let dataAll = res?.data?.data;
          dispatch(WCC_APPROVER_DATA({ dataAll, reset }));
        } catch (error) {
          console.error("Error fetching Approver data:", error);
        }
      },

  // Submit Approver Form
  submitWccApproverForm:
    (formData, callback = null) =>
      async (dispatch, _) => {
        try {
          const res = await Api.post({
            url: Urls.wccApprover,
            data: formData,
          });
          console.log(res, "resresresresresres");
          if (res?.status == 200 || res?.status == 201) {
            let msgdata = {
              show: true,
              icon: "success",
              buttons: [],
              type: 1,
              text: "Approver form submitted successfully",
            };
            dispatch(ALERTS(msgdata));

            if (callback) callback();

            return res?.data;
          } else {
            // console.log("res",res,"lskjdfksdfs")
            let msgdata = {
              show: true,
              icon: "error",
              buttons: [],
              type: 1,
              text: res?.data?.text || "Failed to submit form",
            };
            dispatch(ALERTS(msgdata));
          }
        } catch (error) {
          console.error("Error submitting Approver form:", error);
          let msgdata = {
            show: true,
            icon: "error",
            buttons: [],
            type: 1,
            text: "Error submitting form. Please try again.",
          };
          dispatch(ALERTS(msgdata));
        }
      },

  // Update Approver Form
  updateWccApproverForm:
    (formData, uniqueId, callback = null) =>
      async (dispatch, _) => {
        try {
          const res = await Api.post({
            url: `${Urls.wccApprover}/${uniqueId}`,
            data: formData,
          });

          if (res?.status === 200) {
            // Update the data in the store
            dispatch(
              UPDATE_WCC_APPROVER_DATA({ uniqueId, data: res?.data?.data })
            );

            // Show success message
            let msgdata = {
              show: true,
              icon: "success",
              buttons: [],
              type: 1,
              text: "Approver form updated successfully!",
            };
            dispatch(ALERTS(msgdata));

            // Call callback if provided
            if (callback) callback();

            return res?.data;
          } else {
            // Show error message
            let msgdata = {
              show: true,
              icon: "error",
              buttons: [],
              type: 1,
              text: res?.data?.text || "Failed to update form",
            };
            dispatch(ALERTS(msgdata));
          }
        } catch (error) {
          console.error("Error updating Approver form:", error);
          let msgdata = {
            show: true,
            icon: "error",
            buttons: [],
            type: 1,
            text: "Error updating form. Please try again.",
          };
          dispatch(ALERTS(msgdata));
        }
      },

};

export default PTWActions;

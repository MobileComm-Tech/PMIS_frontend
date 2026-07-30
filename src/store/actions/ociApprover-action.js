import Api from "../../utils/api";
import { Urls } from "../../utils/url";
import { ALERTS } from "../reducers/component-reducer";
// import {
//   GET_OCI_PROJECT_ID,
//   GET_OCI_EMPLOYEE,
//   OCI_APPROVER_DATA,
//   UPDATE_OCI_APPROVER_DATA,
//   GET_OCI_PROJECT_GROUP,
// } from "../reducers/ociApprover-reducers";

import {
  GET_OCI_CUSTOMERS,
  GET_OCI_PROJECT_ID,
  GET_OCI_EMPLOYEE,
  GET_OCI_PROJECT_TYPE,
  GET_OCI_PROJECT_GROUP,
  GET_OCI_SUB_PROJECT_TYPE,
  OCI_APPROVER_DATA,
  UPDATE_OCI_APPROVER_DATA,
} from "../reducers/ociApprover-reducers";

const OCIApproverActions = {
  getOciProjectId:
    (reset = true, uid = "", args = "") =>
    async (dispatch, _) => {
      try {
        const res = await Api.get({
          url: `${Urls.getOciProjectId}${
            uid !== "" ? "/" + uid : ""
          }${args !== "" ? "?" + args : ""}`,
        });

        if (res?.status === 200) {
          let dataAll = res?.data?.data;
          dispatch(GET_OCI_PROJECT_ID({ dataAll, reset }));
        } else {
          dispatch(ALERTS(res?.data));
        }
      } catch (error) {
        console.error(error);
      }
    },

  getOciEmployee:
    (reset = true, uid = "", args = "") =>
    async (dispatch, _) => {
      try {
        const res = await Api.get({
          url: `${Urls.getOciEmployee}${
            uid !== "" ? "/" + uid : ""
          }${args !== "" ? "?" + args : ""}`,
        });

        if (res?.status === 200) {
          let dataAll = res?.data?.data;
          dispatch(GET_OCI_EMPLOYEE({ dataAll, reset }));
        } else {
          dispatch(ALERTS(res?.data));
        }
      } catch (error) {
        console.error(error);
      }
    },

 getOciProjectGroup:
  (reset = true, customer = "", args = "") =>
  async (dispatch) => {
    try {
      const res = await Api.get({
        url: `${Urls.getOciProjectGroup}/${customer}${args ? "?" + args : ""}`,
      });

      if (res?.status === 200) {
        dispatch(
          GET_OCI_PROJECT_GROUP({
            dataAll: res.data.data,
            reset,
          })
        );
      } else {
        dispatch(ALERTS(res.data));
      }
    } catch (err) {
      console.log(err);
    }
  },

//   getOciSubProjectType:
//   (
//     reset = true,
//     customer = "",
//     projectType = "",
//     args = ""
//   ) =>
//   async (dispatch) => {
//     try {
//       const res = await Api.get({
//         url: `${Urls.getOciSubProjectType}/${customer}/${projectType}${
//           args ? "?" + args : ""
//         }`,
//       });

//       if (res?.status === 200) {
//         dispatch(
//           GET_OCI_SUB_PROJECT_TYPE({
//             dataAll: res.data.data,
//             reset,
//           })
//         );
//       } else {
//         dispatch(ALERTS(res.data));
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   },


// getOciSubProjectType:
// (
//     reset = true,
//     customer = "",
//     projectGroup = "",
//     projectType = "",
//     args = ""
// ) =>
// async (dispatch) => {

//     const res = await Api.get({
//         url:
//             `${Urls.getOciSubProjectType}/${customer}/${projectGroup}/${projectType}${
//                 args ? "?" + args : ""
//             }`,
//     });

    
// },

// getOciSubProjectType:
// (
//   reset = true,
//   customer = "",
//   projectGroup = "",
//   projectTypeName = "",
//   args = ""
// ) =>
// async (dispatch) => {
//   try {
//     const res = await Api.get({
//       url: `${Urls.getOciSubProjectType}/${customer}/${projectGroup}?projectType=${encodeURIComponent(projectTypeName)}${
//         args ? "&" + args : ""
//       }`,
//     });

//     if (res?.status === 200) {
//       dispatch(
//         GET_OCI_SUB_PROJECT_TYPE({
//           dataAll: res.data.data,
//           reset,
//         })
//       );
//     } else {
//       dispatch(ALERTS(res.data));
//     }
//   } catch (err) {
//     console.log(err);
//   }
// },

getOciSubProjectType:
(
  reset = true,
  customer = "",
  projectTypeName = "",
  args = ""
) =>
async (dispatch) => {
  try {
    const res = await Api.get({
      url: `${Urls.getOciSubProjectType}/${customer}?projectType=${encodeURIComponent(projectTypeName)}${args ? "&" + args : ""}`,
    });

    if (res?.status === 200) {
      dispatch(
        GET_OCI_SUB_PROJECT_TYPE({
          dataAll: res.data.data,
          reset,
        })
      );
    } else {
      dispatch(ALERTS(res.data));
    }
  } catch (err) {
    console.log(err);
  }
},
    getOciCustomers:
  (reset = true, uid = "", args = "") =>
  async (dispatch) => {
    try {
      const res = await Api.get({
        url: `${Urls.getOciCustomers}${uid ? "/" + uid : ""}${args ? "?" + args : ""}`,
      });

      if (res?.status === 200) {
        dispatch(
          GET_OCI_CUSTOMERS({
            dataAll: res.data.data,
            reset,
          })
        );
      } else {
        dispatch(ALERTS(res.data));
      }
    } catch (err) {
      console.log(err);
    }
  },

  getOciProjectType:
  (reset = true, customer = "", args = "") =>
  async (dispatch) => {
    try {
      const res = await Api.get({
        url: `${Urls.getOciProjectType}/${customer}${args ? "?" + args : ""}`,
      });

      if (res?.status === 200) {
        dispatch(
          GET_OCI_PROJECT_TYPE({
            dataAll: res.data.data,
            reset,
          })
        );
      } else {
        dispatch(ALERTS(res.data));
      }
    } catch (err) {
      console.log(err);
    }
  },

  // Get OCI Approver Data
  OciApproverData:
    (reset = true, args = "") =>
    async (dispatch, _) => {
      try {
        const res = await Api.get({
          url: `${Urls.ociApprover}${args !== "" ? "?" + args : ""}`,
        });

        if (res?.status !== 200) return;

        let dataAll = res?.data?.data;
        dispatch(OCI_APPROVER_DATA({ dataAll, reset }));
      } catch (error) {
        console.error("Error fetching OCI Approver data:", error);
      }
    },

  // Submit OCI Approver Form
  submitOciApproverForm:
    (formData, callback = null) =>
    async (dispatch, _) => {
      try {
        const res = await Api.post({
          url: Urls.ociApprover,
          data: formData,
        });

        if (res?.status === 200 || res?.status === 201) {
          dispatch(
            ALERTS({
              show: true,
              icon: "success",
              buttons: [],
              type: 1,
              text: "OCI Approver submitted successfully",
            })
          );

          if (callback) callback();

          return res?.data;
        } else {
          dispatch(
            ALERTS({
              show: true,
              icon: "error",
              buttons: [],
              type: 1,
              text: res?.data?.text || "Failed to submit OCI Approver",
            })
          );
        }
      } catch (error) {
        console.error(error);

        dispatch(
          ALERTS({
            show: true,
            icon: "error",
            buttons: [],
            type: 1,
            text: "Error submitting OCI Approver.",
          })
        );
      }
    },

  // Update OCI Approver
  updateOciApproverForm:
    (formData, uniqueId, callback = null) =>
    async (dispatch, _) => {
      try {
        const res = await Api.post({
          url: `${Urls.ociApprover}/${uniqueId}`,
          data: formData,
        });

        if (res?.status === 200) {
          dispatch(
            UPDATE_OCI_APPROVER_DATA({
              uniqueId,
              data: res?.data?.data,
            })
          );

          dispatch(
            ALERTS({
              show: true,
              icon: "success",
              buttons: [],
              type: 1,
              text: "OCI Approver updated successfully!",
            })
          );

          if (callback) callback();

          return res?.data;
        } else {
          dispatch(
            ALERTS({
              show: true,
              icon: "error",
              buttons: [],
              type: 1,
              text: res?.data?.text || "Failed to update OCI Approver",
            })
          );
        }
      } catch (error) {
        console.error(error);

        dispatch(
          ALERTS({
            show: true,
            icon: "error",
            buttons: [],
            type: 1,
            text: "Error updating OCI Approver.",
          })
        );
      }
    },
};

export default OCIApproverActions;
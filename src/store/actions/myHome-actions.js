import Api from "../../utils/api";
import { Urls } from "../../utils/url";
import { ALERTS } from "../reducers/component-reducer";
import {
  GET_MY_HOME,
  GET_MY_TASK,
  GET_PERSONAL_INFO,
  GET_MY_POLICY,
  GET_WCC_CDH_APPROVER,
  GET_WEB_NOTIFY,
  GET_CLEAR_NOTIFICATION,
} from "../reducers/myHome-reducer";

const MyHomeActions = {
  getMyHome:
    (reset = true, args = "") =>
    async (dispatch, _) => {
      try {
        const res = await Api.get({
          url: `${Urls.MyHome}${args != "" ? "?" + args : ""}`,
          reset,
        });
        if (res?.status !== 200) return;
        let dataAll = res?.data?.data;
        dispatch(GET_MY_HOME({ dataAll, reset }));
      } catch (error) {}
    },
  getCdhApprover:
    (reset = true, args = "") =>
    async (dispatch, _) => {
      try {
        const res = await Api.get({
          url: `${Urls.wcc_Chd_Approver}${args != "" ? "?" + args : ""}`,
          reset,
        });
        console.log(res?.data, "__Datta");
        if (res?.status !== 200) {
          let msgdata = {
            show: true,
            icon: "error",
            buttons: [],
            type: 1,
            text: res?.data?.msg,
          };
          dispatch(ALERTS(msgdata));
        }
        let dataAll = res?.data?.data;
        dispatch(GET_WCC_CDH_APPROVER({ dataAll, reset }));
      } catch (error) {}
    },
  postMyHome: (reset, data, cb, uniqueId) => async (dispatch, _) => {
    try {
      const res = await Api.post({
        data: data,
        url: uniqueId == null ? Urls.MyHome : Urls.MyHome + "/" + uniqueId,
      });
      if (res?.status !== 201 && res?.status !== 200) {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          text: res?.data?.msg,
        };
        dispatch(ALERTS(msgdata));
      } else {
        cb();
      }
    } catch (error) {
      return;
    }
  },
  postCdhMultiActions:
    (data, cb, uniqueId, args = "") =>
    async (dispatch, _) => {
      // console.log(data,"__data")
      try {
        const res = await Api.post({
          data: data,
          url:
            uniqueId == null
              ? `${Urls.wcc_Chd_MultiActions}${args != "" ? "?" + args : ""}`
              : `${Urls.wcc_Chd_MultiActions}${args != "" ? "?" + args : ""}` +
                "/" +
                uniqueId,
        });
        if (res?.status !== 201 && res?.status !== 200) {
          let msgdata = {
            show: true,
            icon: "error",
            buttons: [],
            type: 1,
            text: res?.data?.msg,
          };
          dispatch(ALERTS(msgdata));
        } else {
          cb();
        }
      } catch (error) {
        return;
      }
    },
  postCdhActions: (data, cb, uniqueId) => async (dispatch, _) => {
    try {
      const res = await Api.post({
        data: data,
        url:
          uniqueId == null
            ? Urls.wcc_Chd_Actions
            : Urls.wcc_Chd_Actions + "/" + uniqueId,
        contentType: "multipart/form-data",
      });
      if (res?.status !== 201 && res?.status !== 200) {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          text: res?.data?.msg,
        };
        dispatch(ALERTS(msgdata));
      } else {
        cb();
      }
    } catch (error) {
      return;
    }
  },

  getPersonalInfo:
    (reset = true, args = "") =>
    async (dispatch, _) => {
      try {
        const res = await Api.get({
          url: `${Urls.myHome_personal_info}${args != "" ? "?" + args : ""}`,
          reset,
        });
        if (res?.status !== 200) return;
        let dataAll = res?.data?.data;
        dispatch(GET_PERSONAL_INFO({ dataAll, reset }));
      } catch (error) {}
    },

  getMyTask:
    (reset = true, args = "") =>
    async (dispatch, _) => {
      try {
        const res = await Api.get({
          url: `${Urls.user_myTask}${args != "" ? "?" + args : ""}`,
          reset,
        });
        if (res?.status !== 200) return;
        let dataAll = res?.data?.data;
        dispatch(GET_MY_TASK({ dataAll, reset }));
      } catch (error) {}
    },

  getMyPolicy:
    (reset = true, args = "") =>
    async (dispatch, _) => {
      try {
        const res = await Api.get({
          url: `${Urls.user_myPolicy}${args != "" ? "?" + args : ""}`,
          reset,
        });
        if (res?.status !== 200) return;
        let dataAll = res?.data?.data;
        dispatch(GET_MY_POLICY({ dataAll, reset }));
      } catch (error) {}
    },
  getwebGlobalNotify:
    (reset = true, args = "") =>
    async (dispatch, _) => {
      try {
        const res = await Api.get({
          url: `${Urls.getwebGlobal}/${args}`,
          reset,
        });

        if (res?.status !== 200) return null;

        let dataAll = res?.data?.data;

        dispatch(GET_WEB_NOTIFY({ dataAll, reset }));

        return res.data;
      } catch (error) {
        return null;
      }
    },
  getwebClearNotify:
    (reset = true) =>
    async (dispatch, _) => {
      try {
        // Send payload with { globalNotification: null }
        const res = await Api.patch({
          url: `${Urls.getwebClearNotify}`,
          data: { globalNotification: "null" }, // ✅ payload
          reset,
        });

        if (res?.status !== 200) return null;

        const dataAll = res?.data?.data;

        dispatch(GET_CLEAR_NOTIFICATION({ dataAll, reset }));

        return res.data;
      } catch (error) {
        console.error("Error clearing global notifications:", error);
        return null;
      }
    },
};
export default MyHomeActions;

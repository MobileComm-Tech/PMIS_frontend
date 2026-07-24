import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getMyHome: [],
  getWccCdhApprover: [],
  getPersonalInfo: [],
  getmyTask: [],
  getMyPolicy: [],
  getmyGlobal: [],
  getCdhApprover:[],
    getOciApprover:[],
  getwebClearNotify: [],
};

const myHome = createSlice({
  name: "myHome",
  initialState,
  reducers: {
    GET_MY_HOME: (state, { payload }) => {
      if (payload.reset) {
        state.getMyHome = payload.dataAll;
      } else {
        state.getMyHome = [...state.getMyHome, ...payload.dataAll];
      }
    },
    GET_WCC_CDH_APPROVER: (state, { payload }) => {
      if (payload.reset) {
        state.getWccCdhApprover = payload.dataAll;
      } else {
        state.getWccCdhApprover = [
          ...state.getWccCdhApprover,
          ...payload.dataAll,
        ];
      }
    },
    GET_WCC_OCI_APPROVER: (state, { payload }) => {
      if (payload.reset) {
        state.getOciApprover = payload.dataAll;
      } else {
        state.getOciApprover = [
          ...state.getOciApprover,
          ...payload.dataAll,
        ];
      }
    },

    GET_PERSONAL_INFO: (state, { payload }) => {
      if (payload.reset) {
        state.getPersonalInfo = payload.dataAll;
      } else {
        state.getPersonalInfo = [...state.getPersonalInfo, ...payload.dataAll];
      }
    },

    GET_MY_TASK: (state, { payload }) => {
      if (payload.reset) {
        state.getmyTask = payload.dataAll;
      } else {
        state.getmyTask = [...state.getmyTask, ...payload.dataAll];
      }
    },

    GET_MY_POLICY: (state, { payload }) => {
      if (payload.reset) {
        state.getMyPolicy = payload.dataAll;
      } else {
        state.getMyPolicy = [...state.getMyPolicy, ...payload.dataAll];
      }
    },

    GET_WEB_NOTIFY: (state, { payload }) => {
      if (payload.reset) {
        state.getmyGlobal = payload.dataAll;
      } else {
        state.getmyGlobal = [...state.getmyGlobal, ...payload.dataAll];
      }
    },
    GET_CLEAR_NOTIFICATION: (state, { payload }) => {
      const dataArray = Array.isArray(payload.dataAll) ? payload.dataAll : [];

      if (payload.reset) {
        state.getwebClearNotify = dataArray;
      } else {
        state.getwebClearNotify = [...state.getwebClearNotify, ...dataArray];
      }
    },
  },
});

export const {
  GET_MY_HOME,
  GET_WCC_CDH_APPROVER,
  GET_WCC_OCI_APPROVER,
  GET_PERSONAL_INFO,
  GET_MY_TASK,
  GET_MY_POLICY,
  GET_WEB_NOTIFY,
  GET_CLEAR_NOTIFICATION,
} = myHome.actions;
export default myHome.reducer;

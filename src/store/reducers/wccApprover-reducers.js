import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  getWccProjectId: [],
  getWccEmployee: [],
  WccApproverData: [],
  totalCount: 0,
};

const wccApproverData = createSlice({
  name: 'wccApproverData',
  initialState,
  reducers: {
    GET_WCC_PROJECT_ID: (state, { payload }) => {
      if (payload.reset) {
        state.getWccProjectId = payload.dataAll;
      } else {
        state.getWccProjectId = [...state.getWccProjectId, ...payload.dataAll];
      }
    },
    GET_WCC_EMPLOYEE: (state, { payload }) => {
      if (payload.reset) {
        state.getWccEmployee = payload.dataAll;
      } else {
        state.getWccEmployee = [...state.getWccEmployee, ...payload.dataAll];
      }
    },
    WCC_APPROVER_DATA: (state, { payload }) => {
      if (payload.reset) {
        state.WccApproverData = payload.dataAll;
      } else {
        state.WccApproverData = [...state.WccApproverData, ...payload.dataAll];
      }
      // if (
      //   payload.dataAll &&
      //   payload.dataAll.length > 0 &&
      //   payload.dataAll[0].overall_table_count
      // ) {
      //   state.totalCount = payload.dataAll[0].overall_table_count;
      // }
    },
    GET_WCC_PROJECT_GROUP: (state, { payload }) => {
      if (payload.reset) {
        state.getWccProjectGroup = payload.dataAll;
      } else {
        state.getWccProjectGroup = [
          ...state.getWccProjectGroup,
          ...payload.dataAll,
        ];
      }
    },
    UPDATE_WCC_APPROVER_DATA: (state, { payload }) => {
      const index = state.WccApproverData.findIndex(
        (item) => item.uniqueId === payload.uniqueId,
      );
      if (index !== -1) {
        state.WccApproverData[index] = {
          ...state.WccApproverData[index],
          ...payload.data,
        };
      }
    },
  },
});

export const {
  GET_WCC_PROJECT_ID,
  GET_WCC_EMPLOYEE,
  WCC_APPROVER_DATA,
  UPDATE_WCC_APPROVER_DATA,
  GET_WCC_PROJECT_GROUP,
} = wccApproverData.actions;

export default wccApproverData.reducer;

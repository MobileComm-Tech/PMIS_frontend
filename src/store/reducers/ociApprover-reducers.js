// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   getOciProjectId: [],
//   getOciEmployee: [],
//   getOciProjectGroup: [],
//   OciApproverData: [],
//   totalCount: 0,
// };

// const ociApproverData = createSlice({
//   name: "ociApproverData",
//   initialState,
//   reducers: {
//     GET_OCI_PROJECT_ID: (state, { payload }) => {
//       if (payload.reset) {
//         state.getOciProjectId = payload.dataAll;
//       } else {
//         state.getOciProjectId = [
//           ...state.getOciProjectId,
//           ...payload.dataAll,
//         ];
//       }
//     },

//     GET_OCI_EMPLOYEE: (state, { payload }) => {
//       if (payload.reset) {
//         state.getOciEmployee = payload.dataAll;
//       } else {
//         state.getOciEmployee = [
//           ...state.getOciEmployee,
//           ...payload.dataAll,
//         ];
//       }
//     },

//     GET_OCI_PROJECT_GROUP: (state, { payload }) => {
//       if (payload.reset) {
//         state.getOciProjectGroup = payload.dataAll;
//       } else {
//         state.getOciProjectGroup = [
//           ...state.getOciProjectGroup,
//           ...payload.dataAll,
//         ];
//       }
//     },

//     OCI_APPROVER_DATA: (state, { payload }) => {
//       if (payload.reset) {
//         state.OciApproverData = payload.dataAll;
//       } else {
//         state.OciApproverData = [
//           ...state.OciApproverData,
//           ...payload.dataAll,
//         ];
//       }

//       // Uncomment if you want to store total count
//       // if (
//       //   payload.dataAll &&
//       //   payload.dataAll.length > 0 &&
//       //   payload.dataAll[0].overall_table_count
//       // ) {
//       //   state.totalCount = payload.dataAll[0].overall_table_count;
//       // }
//     },

//     UPDATE_OCI_APPROVER_DATA: (state, { payload }) => {
//       const index = state.OciApproverData.findIndex(
//         (item) => item.uniqueId === payload.uniqueId
//       );

//       if (index !== -1) {
//         state.OciApproverData[index] = {
//           ...state.OciApproverData[index],
//           ...payload.data,
//         };
//       }
//     },
//   },
// });

// export const {
//   GET_OCI_PROJECT_ID,
//   GET_OCI_EMPLOYEE,
//   GET_OCI_PROJECT_GROUP,
//   OCI_APPROVER_DATA,
//   UPDATE_OCI_APPROVER_DATA,
// } = ociApproverData.actions;


// export default ociApproverData.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getOciCustomers: [],
  getOciProjectId: [],
  getOciEmployee: [],
  getOciProjectType: [],
  getOciProjectGroup: [],
  getOciSubProjectType: [],
  OciApproverData: [],
  totalCount: 0,
};

const ociApproverData = createSlice({
  name: "ociApproverData",
  initialState,
  reducers: {
    GET_OCI_CUSTOMERS: (state, { payload }) => {
      if (payload.reset) {
        state.getOciCustomers = payload.dataAll;
      } else {
        state.getOciCustomers = [
          ...state.getOciCustomers,
          ...payload.dataAll,
        ];
      }
    },

    GET_OCI_PROJECT_ID: (state, { payload }) => {
      if (payload.reset) {
        state.getOciProjectId = payload.dataAll;
      } else {
        state.getOciProjectId = [
          ...state.getOciProjectId,
          ...payload.dataAll,
        ];
      }
    },

    GET_OCI_EMPLOYEE: (state, { payload }) => {
      if (payload.reset) {
        state.getOciEmployee = payload.dataAll;
      } else {
        state.getOciEmployee = [
          ...state.getOciEmployee,
          ...payload.dataAll,
        ];
      }
    },

    GET_OCI_PROJECT_TYPE: (state, { payload }) => {
      if (payload.reset) {
        state.getOciProjectType = payload.dataAll;
      } else {
        state.getOciProjectType = [
          ...state.getOciProjectType,
          ...payload.dataAll,
        ];
      }
    },

    GET_OCI_PROJECT_GROUP: (state, { payload }) => {
      if (payload.reset) {
        state.getOciProjectGroup = payload.dataAll;
      } else {
        state.getOciProjectGroup = [
          ...state.getOciProjectGroup,
          ...payload.dataAll,
        ];
      }
    },

    GET_OCI_SUB_PROJECT_TYPE: (state, { payload }) => {
      if (payload.reset) {
        state.getOciSubProjectType = payload.dataAll;
      } else {
        state.getOciSubProjectType = [
          ...state.getOciSubProjectType,
          ...payload.dataAll,
        ];
      }
    },

    OCI_APPROVER_DATA: (state, { payload }) => {
      if (payload.reset) {
        state.OciApproverData = payload.dataAll;
      } else {
        state.OciApproverData = [
          ...state.OciApproverData,
          ...payload.dataAll,
        ];
      }

      // Optional:
      // if (
      //   payload.dataAll?.length > 0 &&
      //   payload.dataAll[0]?.overall_table_count
      // ) {
      //   state.totalCount = payload.dataAll[0].overall_table_count;
      // }
    },

    UPDATE_OCI_APPROVER_DATA: (state, { payload }) => {
      const index = state.OciApproverData.findIndex(
        (item) => item.uniqueId === payload.uniqueId
      );

      if (index !== -1) {
        state.OciApproverData[index] = {
          ...state.OciApproverData[index],
          ...payload.data,
        };
      }
    },
  },
});

export const {
  GET_OCI_CUSTOMERS,
  GET_OCI_PROJECT_ID,
  GET_OCI_EMPLOYEE,
  GET_OCI_PROJECT_TYPE,
  GET_OCI_PROJECT_GROUP,
  GET_OCI_SUB_PROJECT_TYPE,
  OCI_APPROVER_DATA,
  UPDATE_OCI_APPROVER_DATA,
} = ociApproverData.actions;

export default ociApproverData.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     getManageEmpDetails:[],
//     getHRAllEmployee:[],
//     getHRManagerInEmployee:[],
// }

// const hrReducer = createSlice({
//     name:'hrReducer',
//     initialState,
//     reducers:{

//         GET_EMPLOYEE_DETAILS:(state,{payload}) => {
//             if(payload.reset){
//                 state.getManageEmpDetails = payload.dataAll
//             }else{
//                 state.getManageEmpDetails  = [...state.getManageEmpDetails,...payload.dataAll]
//             }
//         },

//         GET_HR_ALL_EMPLOYEE:(state,{payload}) => {
//             if(payload.reset){
//                 state.getHRAllEmployee = payload.dataAll
//             }else{
//                 state.getHRAllEmployee  = [...state.getHRAllEmployee,...payload.dataAll]
//             }
//         },

//         GET_HR_MANAGER_EMP:(state,{payload}) => {
//             if(payload.reset){
//                 state.getHRManagerInEmployee = payload.dataAll
//             }else{
//                 state.getHRManagerInEmployee  = [...state.getHRManagerInEmployee,...payload.dataAll]
//             }
//         },
//     }
// })

// export const {GET_EMPLOYEE_DETAILS,GET_HR_ALL_EMPLOYEE,GET_HR_MANAGER_EMP,} = hrReducer.actions
// export default hrReducer.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getManageEmpDetails: [],
  getHRAllEmployee: [],
  getHRManagerInEmployee: [],
  getPTWTask: [],
  postPTWTaskResponse: [],
  getPTWTaskTable: [],
};

const hrReducer = createSlice({
  name: "hrReducer",
  initialState,
  reducers: {
    GET_EMPLOYEE_DETAILS: (state, { payload }) => {
      if (payload.reset) {
        state.getManageEmpDetails = payload.dataAll;
      } else {
        state.getManageEmpDetails = [
          ...state.getManageEmpDetails,
          ...payload.dataAll,
        ];
      }
    },

    GET_HR_ALL_EMPLOYEE: (state, { payload }) => {
      if (payload.reset) {
        state.getHRAllEmployee = payload.dataAll;
      } else {
        state.getHRAllEmployee = [
          ...state.getHRAllEmployee,
          ...payload.dataAll,
        ];
      }
    },

    GET_HR_MANAGER_EMP: (state, { payload }) => {
      if (payload.reset) {
        state.getHRManagerInEmployee = payload.dataAll;
      } else {
        state.getHRManagerInEmployee = [
          ...state.getHRManagerInEmployee,
          ...payload.dataAll,
        ];
      }
    },
    GET_PTW_TASK: (state, { payload }) => {
      if (payload.reset) {
        state.getPTWTask = payload.dataAll;
      } else {
        state.getPTWTask = [...state.getPTWTask, ...payload.dataAll];
      }
    },
    POST_PTW_TASK: (state, { payload }) => {
      // you can either push new data or just store response

      state.postPTWTaskResponse = payload; // store API response

      // ✅ OPTIONAL (if you want to update list instantly)
      if (payload?.data) {
        state.getPTWTask = [payload.data, ...state.getPTWTask];
      }
    },
    GET_PTW_TASK_TABLE: (state, { payload }) => {
      if (payload.reset) {
        state.getPTWTaskTable = payload.dataAll;
      } else {
        state.getPTWTaskTable = [...state.getPTWTaskTable, ...payload.dataAll];
      }
    },
  },
});

export const {
  GET_EMPLOYEE_DETAILS,
  GET_HR_ALL_EMPLOYEE,
  GET_HR_MANAGER_EMP,
  GET_PTW_TASK,
  POST_PTW_TASK,
  GET_PTW_TASK_TABLE,
} = hrReducer.actions;
export default hrReducer.reducer;

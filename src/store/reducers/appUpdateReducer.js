import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getAppUpdate: [],
}

const appUpdateReducer = createSlice( {
    name: 'appUpdateReducer',
    initialState,
    reducers:{

        GET_APP_UPDATE: (state, { payload }) => {
            console.log(payload,"__data_payload_")
            if (payload.reset) {
                state.getAppUpdate = payload.dataAll
            } else {
                state.getAppUpdate = [...state.getAppUpdate, ...payload.dataAll]
            }
           
        },
    }

})


export const {GET_APP_UPDATE} = appUpdateReducer.actions
export default appUpdateReducer.reducer
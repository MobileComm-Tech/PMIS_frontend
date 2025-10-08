import { Urls } from "../../utils/url";
import { GET_APP_UPDATE } from "../reducers/appUpdateReducer";
import Api from "../../utils/api";

const appUpdateAction = {
    getAppUpdateData: (reset = true, args = "") => async (dispatch, getState) => {
        try {
           
            console.log("API URL:", `${Urls.AppUpdate}${args !== "" ? "?" + args : ""}`); 
            
            const res = await Api.get({ 
                url: `${Urls.AppUpdate}${args !== "" ? "?" + args : ""}`, 
                reset 
            });
            
            console.log("API Response:", res);
            
            if (res?.status !== 200) {
                console.error("API returned non-200 status:", res?.status);
                return;
            }
            
            let dataAll = res?.data?.data;
            console.log("Dispatching data:", dataAll); 
            console.log(dataAll,"___alladtad")
            dispatch(GET_APP_UPDATE({ dataAll, reset }));
        } catch (error) {
            console.error("Error fetching app update data:", error);
        }
    },   
};

export default appUpdateAction;
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     getManageVendorDetails: [],
//     getVendorProjectList: [],
//     getvendorProjectTracking: [],
//     getvendorSubProject: [],
//     getvendorActivitySubproject: [],
//     getVendorCostMilestone: [],
//     getVendorCostMilestoneList: [],
//     getVendorCostProjetGroupList: [],
//     getVendorCostProjectTypeList: [],
//     getVendorCostSubProjectTypeList: [],
//     getVendorCostVendorsList: [],
//     getProjectType: [],
//     getfilterPOEligibility:[]
// }

// const vendorData = createSlice({
//     name: 'vendorData',
//     initialState,
//     reducers: {

//         GET_VENDOR_DETAILS: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getManageVendorDetails = payload.dataAll
//             } else {
//                 state.getManageVendorDetails = [...state.getManageVendorDetails, ...payload.dataAll]
//             }
//         },
//         GET_PO_ELIGIBILITY: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getPoEligibility = payload.dataAll;
//             } else {
//                 state.getPoEligibility = [
//                     ...state.getPoEligibility,
//                     ...payload.dataAll,
//                 ];
//             }
//         },
//          GET_FILTER_POELIGIBILITY: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getfilterPOEligibility = payload.dataAll
//             } else {
//                 state.getfilterPOEligibility = [...state.getfilterPOEligibility, ...payload.dataAll]
//             }
//         },

//         GET_VENDOR_PROJECT_LIST: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getVendorProjectList = payload.dataAll
//             } else {
//                 state.getVendorProjectList = [...state.getVendorProjectList, ...payload.dataAll]
//             }
//         },
//         GET_VENDORACTIVITY_SUBPROJECT_LIST: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getvendorActivitySubproject = payload.dataAll
//             } else {
//                 state.getvendorActivitySubproject = [...state.getvendorActivitySubproject, ...payload.dataAll]
//             }
//         },
//         GET_VENDOR_PROJECT_TRAKING: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getvendorProjectTracking = payload.dataAll
//             } else {
//                 state.getvendorProjectTracking = [...state.getvendorProjectTracking, ...payload.dataAll]
//             }
//         },
//         GET_VENDOR_SUBPROJECT: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getvendorSubProject = payload.dataAll
//             } else {
//                 state.getvendorSubProject = [...state.getvendorSubProject, ...payload.dataAll]
//             }
//         },
//         GET_VENDOR_COST_MILESTONE: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getVendorCostMilestone = payload.dataAll
//             } else {
//                 state.getVendorCostMilestone = [...state.getVendorCostMilestone, ...payload.dataAll]
//             }
//         },
//         GET_VENDOR_COST_MILESTONE_LIST: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getVendorCostMilestoneList = payload.dataAll
//             } else {
//                 state.getVendorCostMilestoneList = [...state.getVendorCostMilestoneList, ...payload.dataAll]
//             }
//         },
//         GET_VENDOR_COST_PROJECTGROUP_LIST: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getVendorCostProjetGroupList = payload.dataAll
//             } else {
//                 state.getVendorCostProjetGroupList = [...state.getVendorCostProjetGroupList, ...payload.dataAll]
//             }
//         },
//         GET_VENDOR_COST_PROJECTTYPE_LIST: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getVendorCostProjectTypeList = payload.dataAll
//             } else {
//                 state.getVendorCostProjectTypeList = [...state.getVendorCostProjectTypeList, ...payload.dataAll]
//             }
//         },
//         GET_VENDOR_COST_VENDORS_LIST: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getVendorCostVendorsList = payload.dataAll
//             } else {
//                 state.getVendorCostVendorsList = [...state.getVendorCostVendorsList, ...payload.dataAll]
//             }
//         },
//         GET_VENDOR_COST_SUBPROJECT_LIST: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getVendorCostSubProjectTypeList = payload.dataAll
//             } else {
//                 state.getVendorCostSubProjectTypeList = [...state.getVendorCostSubProjectTypeList, ...payload.dataAll]
//             }
//         },
//         GET_PROJECT_TYPE: (state, { payload }) => {
//             if (payload.reset) {
//                 state.getProjectType = payload.dataAll
//             } else {
//                 state.getProjectType = [...state.getProjectType, ...payload.dataAll]
//             }
//         },
//     }
// })

// export const { GET_VENDOR_DETAILS,GET_FILTER_POELIGIBILITY,GET_PO_ELIGIBILITY, GET_VENDOR_PROJECT_LIST, GET_VENDOR_PROJECT_TRAKING, GET_VENDOR_SUBPROJECT, GET_VENDORACTIVITY_SUBPROJECT_LIST, GET_VENDOR_COST_MILESTONE, GET_VENDOR_COST_MILESTONE_LIST, GET_VENDOR_COST_PROJECTGROUP_LIST, GET_VENDOR_COST_SUBPROJECT_LIST, GET_VENDOR_COST_PROJECTTYPE_LIST, GET_VENDOR_COST_VENDORS_LIST, GET_PROJECT_TYPE } = vendorData.actions
// export default vendorData.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    getManageVendorDetails: [],
    getWccSubmodule: [],
    getVendorProjectList: [],
    getvendorProjectTracking: [],
    getvendorSubProject: [],
    getvendorActivitySubproject: [],
    getVendorCostMilestone: [],
    getVendorCostMilestoneList: [],
    getVendorCostProjetGroupList: [],
    getVendorCostProjectIdList: [],
    getVendorCostProjectTypeList: [],
    getVendorCostSubProjectTypeList: [],
    getVendorCostVendorsList: [],
    getProjectType: [],
    getfilterPOEligibility:[],
    getPartnerTeamRole:[],
    getProjectTypeDetails:[],
    getSubProjectDetails:[]
}

const vendorData = createSlice({
    name: 'vendorData',
    initialState,
    reducers: {

        GET_VENDOR_DETAILS: (state, { payload }) => {
            if (payload.reset) {
                state.getManageVendorDetails = payload.dataAll
            } else {
                state.getManageVendorDetails = [...state.getManageVendorDetails, ...payload.dataAll]
            }
        },
        GET_WCC_SUBMODULE: (state, { payload }) => {
            if (payload.reset) {
                state.getWccSubmodule = payload.dataAll
            } else {
                state.getWccSubmodule = [...state.getWccSubmodule, ...payload.dataAll]
            }
        },
        GET_PO_ELIGIBILITY: (state, { payload }) => {
            if (payload.reset) {
                state.getPoEligibility = payload.dataAll;
            } else {
                state.getPoEligibility = [
                    ...state.getPoEligibility,
                    ...payload.dataAll,
                ];
            }
        },
         GET_FILTER_POELIGIBILITY: (state, { payload }) => {
            if (payload.reset) {
                state.getfilterPOEligibility = payload.dataAll
            } else {
                state.getfilterPOEligibility = [...state.getfilterPOEligibility, ...payload.dataAll]
            }
        },

        GET_VENDOR_PROJECT_LIST: (state, { payload }) => {
            if (payload.reset) {
                state.getVendorProjectList = payload.dataAll
            } else {
                state.getVendorProjectList = [...state.getVendorProjectList, ...payload.dataAll]
            }
        },
        GET_VENDORACTIVITY_SUBPROJECT_LIST: (state, { payload }) => {
            if (payload.reset) {
                state.getvendorActivitySubproject = payload.dataAll
            } else {
                state.getvendorActivitySubproject = [...state.getvendorActivitySubproject, ...payload.dataAll]
            }
        },
        GET_VENDOR_PROJECT_TRAKING: (state, { payload }) => {
            if (payload.reset) {
                state.getvendorProjectTracking = payload.dataAll
            } else {
                state.getvendorProjectTracking = [...state.getvendorProjectTracking, ...payload.dataAll]
            }
        },
        GET_VENDOR_SUBPROJECT: (state, { payload }) => {
            if (payload.reset) {
                state.getvendorSubProject = payload.dataAll
            } else {
                state.getvendorSubProject = [...state.getvendorSubProject, ...payload.dataAll]
            }
        },
        GET_PROJECT_TYPE_DETAILS: (state, { payload }) => {
            if (payload.reset) {
                state.getProjectTypeDetails= payload.dataAll
            } else {
                state.getProjectTypeDetails = [...state.getProjectTypeDetails, ...payload.dataAll]
            }
        },
        GET_SUB_PROJECT_DETAILS: (state, { payload }) => {
            if (payload.reset) {
                state.getSubProjectDetails= payload.dataAll
            } else {
                state.getSubProjectDetails = [...state.getSubProjectDetails, ...payload.dataAll]
            }
        },
        GET_VENDOR_COST_MILESTONE: (state, { payload }) => {
            if (payload.reset) {
                state.getVendorCostMilestone = payload.dataAll
            } else {
                state.getVendorCostMilestone = [...state.getVendorCostMilestone, ...payload.dataAll]
            }
        },
        GET_VENDOR_COST_MILESTONE_LIST: (state, { payload }) => {
            if (payload.reset) {
                state.getVendorCostMilestoneList = payload.dataAll
            } else {
                state.getVendorCostMilestoneList = [...state.getVendorCostMilestoneList, ...payload.dataAll]
            }
        },
        GET_VENDOR_COST_PROJECTGROUP_LIST: (state, { payload }) => {
            if (payload.reset) {
                state.getVendorCostProjetGroupList = payload.dataAll
            } else {
                state.getVendorCostProjetGroupList = [...state.getVendorCostProjetGroupList, ...payload.dataAll]
            }
        },
            GET_VENDOR_COST_PROJECTID_LIST: (state, { payload }) => {
                if (payload.reset) {
                    state.getVendorCostProjectIdList = payload.dataAll
                } else {
                    state.getVendorCostProjectIdList = [...state.getVendorCostProjectIdList, ...payload.dataAll]
                }
            },
        GET_VENDOR_COST_PROJECTTYPE_LIST: (state, { payload }) => {
            if (payload.reset) {
                state.getVendorCostProjectTypeList = payload.dataAll
            } else {
                state.getVendorCostProjectTypeList = [...state.getVendorCostProjectTypeList, ...payload.dataAll]
            }
        },
        GET_VENDOR_COST_VENDORS_LIST: (state, { payload }) => {
            if (payload.reset) {
                state.getVendorCostVendorsList = payload.dataAll
            } else {
                state.getVendorCostVendorsList = [...state.getVendorCostVendorsList, ...payload.dataAll]
            }
        },
        GET_VENDOR_COST_SUBPROJECT_LIST: (state, { payload }) => {
            if (payload.reset) {
                state.getVendorCostSubProjectTypeList = payload.dataAll
            } else {
                state.getVendorCostSubProjectTypeList = [...state.getVendorCostSubProjectTypeList, ...payload.dataAll]
            }
        },
        GET_PROJECT_TYPE: (state, { payload }) => {
            if (payload.reset) {
                state.getProjectType = payload.dataAll
            } else {
                state.getProjectType = [...state.getProjectType, ...payload.dataAll]
            }
        },
             GET_VENDOR_PARTNER_TEAM_DATA: (state, { payload }) => {
            if (payload.reset) {
                state.getVendorPartnerTeamList = payload.dataAll
            } else {
                state.getVendorPartnerTeamList = [...state.getVendorPartnerTeamList, ...payload.dataAll]
            }
        },
        GET_VENDOR_PARTNER_TEAM_LEAD_DATA: (state, { payload }) => {
            if (payload.reset) {
                state.getVendorPartnerTeamLeadData = payload.dataAll
            } else {
                state.getVendorPartnerTeamLeadData = [...state.getVendorPartnerTeamLeadData, ...payload.dataAll]
            }
        },
        GET_VENDOR_PARTNER_TABLE_DATA: (state, { payload }) => {
            if (payload.reset) {
                state.getVendorPartnerTableList = payload.dataAll
            } else {
                state.getVendorPartnerTableList = [...state.getVendorPartnerTableList, ...payload.dataAll]
            }
        },
        GET_PARTNER_TEAM_ROLE: (state, { payload }) => {
            if (payload.reset) {
                state.getPartnerTeamRole = payload.dataAll
            } else {
                state.getPartnerTeamRole = [...state.getPartnerTeamRole, ...payload.dataAll]
            }
        },
    }
})

// export const { GET_VENDOR_DETAILS,GET_FILTER_POELIGIBILITY,GET_PO_ELIGIBILITY, GET_VENDOR_PROJECT_LIST, GET_VENDOR_PROJECT_TRAKING, GET_VENDOR_SUBPROJECT, GET_VENDORACTIVITY_SUBPROJECT_LIST, GET_VENDOR_COST_MILESTONE, GET_VENDOR_COST_MILESTONE_LIST, GET_VENDOR_COST_PROJECTGROUP_LIST,GET_VENDOR_COST_PROJECTID_LIST, GET_VENDOR_COST_SUBPROJECT_LIST, GET_VENDOR_COST_PROJECTTYPE_LIST, GET_VENDOR_COST_VENDORS_LIST, GET_PROJECT_TYPE } = vendorData.actions
// export default vendorData.reducer
export const {GET_SUB_PROJECT_DETAILS,GET_PROJECT_TYPE_DETAILS, GET_VENDOR_DETAILS,GET_WCC_SUBMODULE,GET_VENDOR_PARTNER_TEAM_LEAD_DATA,GET_PARTNER_TEAM_ROLE,GET_VENDOR_PARTNER_TABLE_DATA,GET_VENDOR_PARTNER_TEAM_DATA,GET_VENDOR_COST_PROJECTID_LIST,GET_FILTER_POELIGIBILITY,GET_PO_ELIGIBILITY, GET_VENDOR_PROJECT_LIST, GET_VENDOR_PROJECT_TRAKING, GET_VENDOR_SUBPROJECT, GET_VENDORACTIVITY_SUBPROJECT_LIST, GET_VENDOR_COST_MILESTONE, GET_VENDOR_COST_MILESTONE_LIST, GET_VENDOR_COST_PROJECTGROUP_LIST, GET_VENDOR_COST_SUBPROJECT_LIST, GET_VENDOR_COST_PROJECTTYPE_LIST, GET_VENDOR_COST_VENDORS_LIST, GET_PROJECT_TYPE } = vendorData.actions
export default vendorData.reducer
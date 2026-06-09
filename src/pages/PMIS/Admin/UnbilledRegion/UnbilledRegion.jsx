import React, { useState } from "react";
import CCDash from "../../../../components/CCDash";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ComponentActions from "../../../../store/actions/component-actions";


import { getAccessType } from "../../../../utils/commonFunnction";
const UnbilledRegion = () => {
  const [type, settype] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const buttons = [
  //   [
  //     "Current Unbilled Bucket",
  //     "bg-pcol",
  //     "/hr/superAdmin/unbilledregion/current-unbilled-bucket",
  //   ],
  //   [
  //     "Sub Unbilled Bucket",
  //     "bg-pcol",
  //     "/hr/superAdmin/unbilledregion/sub-unbilled-bucket",
  //   ],
  // ];

  return (
    <>
      <div className="absolute w-full top-12 mt-12 z-10 bg-[#3e454d] overflow-auto">
        <CCDash
          showbtn={false}
          approveddata={[
            ["Current Unbilled Bucket", "bg-pcol", "/hr/superAdmin/UnbilledManagement/current-unbilled-bucket"],
            ["Unbilled Sub-Bucket", "bg-pcol", "/hr/superAdmin/UnbilledManagement/sub-unbilled-bucket"],
          
          ].map((itm) => {
            return (
            
            <>
              {getAccessType(itm[0]) == "visible" || getAccessType(itm[0]) == "disabled" ? (
                <div
                className={`${itm[1]} bg-pcol text-white text-center text-[14px] md:text-[11px] xl:text-[14px] shadow-md hover:shadow-rxl w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-11/12 flex h-12 cursor-pointer rounded-lg hover:scale-[102%] transition-all duration-500 font-oxygen font-bold hover:text-[16px] hover:text-[#444c54] hover:bg-pcolhover`}
                  onClick={() => {

                    if ( getAccessType(itm[0]) == "visible") {
                      dispatch(ComponentActions.globalUrlStore(itm[0],itm[2]));
                      navigate(itm[2]);
                      dispatch(ComponentActions.breadcrumb(itm[0], itm[2], 1, false));
                    } else {
                      let msgdata = {
                        show: true,
                        icon: "error",
                        buttons: [],
                        type: 1,
                        text: "This option is disabled",
                      };
                      dispatch(ALERTS(msgdata));
                    }
                  }}
                >
                  {itm["companyimg"] && itm["companyimg"] != "" && (
                    <>
                      <img
                        className="m-auto w-24"
                        src={backendassetUrl + itm["companyimg"]}
                      />
                    </>
                  )}
                  <div className="m-auto">
                    {itm[0]}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          );
        })}
      />
      </div>
    </>
  );
};

export default UnbilledRegion;
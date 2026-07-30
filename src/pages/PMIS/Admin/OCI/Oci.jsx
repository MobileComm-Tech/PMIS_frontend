import React, { useState } from "react";
import CCDash from "../../../../components/CCDash";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ComponentActions from "../../../../store/actions/component-actions";

const Oci = () => {
  const [type, settype] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuItems = [
    ["OCI Approver", "bg-pcol", "/superAdmin/OCI/ociApprover"],
  ];

  return (
    <>
      <div className="absolute w-full top-12 mt-12 z-10 bg-[#3e454d] overflow-auto">
        <CCDash
          showbtn={false}
          approveddata={menuItems.map((itm, index) => (
            <div
              key={index}
              className={`${itm[1]} text-white text-[14px] md:text-[11px] xl:text-[14px] text-center shadow-md hover:shadow-rxl w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-11/12 flex h-12 cursor-pointer rounded-lg hover:scale-[102%] transition-all duration-500 font-oxygen font-bold hover:text-[15px] hover:text-[#444c54] hover:bg-pcolhover`}
              onClick={() => {
                dispatch(ComponentActions.globalUrlStore(itm[0], itm[2]));
                dispatch(
                  ComponentActions.breadcrumb(itm[0], itm[2], 2, false)
                );
                navigate(itm[2]);
              }}
            >
              <div className="m-auto">{itm[0]}</div>
            </div>
          ))}
          settype={settype}
          label="OCI"
        />
      </div>
    </>
  );
};

export default Oci;
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {backendassetUrl} from "../../../utils/url";
import AdminActions from "../../../store/actions/admin-actions";
import { useNavigate,} from "react-router-dom";
import CCDash from "../../../components/CCDash";
import ComponentActions from "../../../store/actions/component-actions";

const DashboardCard = () => {



  let dispatch = useDispatch();

  let navigate = useNavigate();


  let dbConfigList = useSelector((state) => {
    let interdata = state?.adminData?.getCardCustomer;
    return interdata?.map((itm) => {
      let updateditm = {
        ...itm,
      };
      return updateditm;
    });
  });


  useEffect(() => {
    dispatch(AdminActions.getCardCustomer());
    dispatch(ComponentActions.breadcrumb("Project Management", "/manageCustomer", 0, true));
  }, []);

  return  (
      <CCDash
        // approveddata={dbConfigList?.map((itm) => {
        //   return (
        //     <>
        //       <div
        //         className={`border-[1px] border-[#186757] bg-pcol ${itm[1]} shadow-md hover:shadow-rxl w-full sm:w-11/12 md:w-full lg:w-3/4 xl:w-full h-16 flex cursor-pointer rounded-lg hover:scale-105 transition-all duration-500 font-oxygen font-extrabold hover:text-lg hover:bg-pcolhover`}
        //         onClick={() => {
        //           dispatch(
        //             ComponentActions.globalUrlStore(itm["customerName"], `${"/dashboard"}/${itm["customerName"]}/${itm["uniqueId"]}`)
        //           );
        //           navigate(`${"/dashboard"}/${itm["customerName"]}/${itm["uniqueId"]}`);
        //         }}
        //       >
        //         {itm["companyimg"] && itm["companyimg"] != "" && (
        //           <>
        //             <img
        //              className="m-auto w-[48px] md:w-[40px] xl:w-[40px] rounded-md hover:border-b-slate-600 border-b-[2px] border-b-slate-700"
        //               src={backendassetUrl + itm["companyimg"]}
        //             />
        //           </>
        //         )}
        //         <div className="m-auto md:text-sm md:text-center xl:text-base">{itm["customerName"]}</div>
        //       </div>
        //     </>
        //   );
        // })}

        alignment = "vertical"
        className="flex flex-col"

      />
  );
};

export default DashboardCard;
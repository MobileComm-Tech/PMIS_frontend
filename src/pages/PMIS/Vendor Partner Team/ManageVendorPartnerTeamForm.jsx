
import React, { useEffect, useState } from "react";
import "react-querybuilder/dist/query-builder.css";
import moment from "moment";
import QueryBuilder from "react-querybuilder";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CommonForm from "../../../components/CommonForm";
import Button from "../../../components/Button";
import AdminActions from "../../../store/actions/admin-actions";
import HrActions from "../../../store/actions/hr-actions";
import * as Unicons from "@iconscout/react-unicons";
import SweetAlerts from "../../../components/SweetAlerts";
import { GET_EMPLOYEE_DETAILS } from "../../../store/reducers/hr-reduces";
import VendorActions from "../../../store/actions/vendor-actions";
import { GET_VENDOR_DETAILS } from "../../../store/reducers/vendor-reducer";
import { routesObjects } from "../../../utils/url";
// import { routesObjects } from "../../../components/CommonObjectsAndVariables";

const ManageVendorPartnerTeamForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setValues,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  // console.log(props,"___props__")
  const { empuid } = useParams();
  // console.log(empuid, "formValueformValueformValue");
  console.log(empuid,"__empuid__")
  const dispatch = useDispatch();
  const [oneLoad, setOneLoad] = useState({});
  const [dataQuery, SetdataQuery] = useState("Select * from values;");
  const [filtering, setFiltering] = useState("Select * from values;");
  const navigate = useNavigate();
  const [showVendorRegistered, setshowVendorRegistered] = useState(false);
  const [partnerOptions, setPartnerOptions] = useState([]);
 
  const [filteredPartnerOptions, setFilteredPartnerOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  

  const today = moment().format("DD-MM-yyyy");

  let partnerRole = useSelector((state) => {
     console.log(state,"state________")
    return state?.vendorData?.getPartnerTeamRole?.map((itm) => {
      return {
        label: itm?.roleName,
        value: itm?.uniqueId,
      };
    });
  });
  console.log(partnerRole,"kdfnjdfndj")


 useEffect(() => {
  if (empuid !== undefined) {
    dispatch(VendorActions?.getVendorPartnerTeamData(true, `uniqueId=${empuid}`));
  } else {
    dispatch(VendorActions?.getVendorPartnerTeam());
    dispatch(VendorActions?.getPartnerTeam());
  }
}, [empuid, dispatch]);

const partnerData = useSelector((state) =>
  empuid !== undefined
    ? state?.vendorData?.getVendorPartnerTableList
    : state?.vendorData?.getVendorPartnerTeamList
);

console.log(partnerData, empuid, "__partnerData__");
const formInputs = [
    {
      label: "Team Lead Name",
      name: "teamLeadName",
      value: "",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    {
      label: "Mail id",
      name: "email",
      value: "",
      type: "text",
      props: "",
      required: true,
       disabled: empuid !== undefined ? true : false,
      placeholder: "",
    },
    {
      label: "Password",
      name: "password",
      value: "",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    {
      label: "Contact Number",
      name: "contactNumber",
      value: "",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    {
      label: "Role",
      name: "type",
      value: "",
      type: empuid!==undefined? "text":"select",
      option: Array.isArray(partnerRole)?partnerRole:[],
      required: true,
      disabled:empuid!==undefined?true:false,
      props: {},
      classes: "col-span-1",
    },
    {
      label: "Partner name",
      name: "partnerName",
      value: "",
      type: empuid !== undefined ? "text" : "searchableSelect",
      option: partnerOptions,
      disabled: empuid !== undefined ? true : false,
      props: {
        onChange: (e) => {
          const data = partnerData?.filter((itm) => {
            // console.log(itm?.uniqueId,e?.target?.value,"___e?.target?.value__")
            return itm?.uniqueId === e?.target?.value;
          });
          console.log(data, "__Data");
          setValue("partnerMailId", data[0]?.email);
          setValue("partnerCode", data[0]?.vendorCode);
        },
      },
      required: true,
      placeholder: "",
    },
    {
      label: "Partner code",
      name: "partnerCode",
      value: "",
      type: "text",
      props: "",
      required: true,
      disabled: empuid !== undefined ? true : false,
      placeholder: "",
    },
    {
      label: "Partner mail id",
      name: "partnerMailId",
      value: "",
      type: "text",
      props: "",
      required: true,
      disabled: empuid !== undefined ? true : false,
      placeholder: "",
    },
    {
      label: "Aadhar number",
      name: "aadharNumber",
      value: "",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    {
      label: "FARM Tocli/FARM Refresher",
      name: "farmTocliRefresher",
      value: "",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    {
      label: "FARM Tocli/FARM Refresher-Valid upto",
      name: "farmTocliRefresherValidUpto",
      value: "",
      type: "datetime",
      props: "",
      required: true,
      placeholder: "",
    },
    {
      label: "Medical Test Certificate",
      name: "medicalTestCertificate",
      value: "",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    {
      label: "Medical Test Certificate-Valid upto",
      name: "medicalTestCertificateValidUpto",
      
      value: "",
      type: "datetime",
      props: "",
      required: true,
      placeholder: "",
    },
    {
      label: "First Aid Training Certificate",
      name: "firstAidTrainingCertificate",
      value: "",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    {
      label: "First Aid Training Certificate-Valid upto",
      name: "firstAidTrainingCertificateValidUpto",
      value: "",
      type: "datetime",
      props: "",
      required: true,
      placeholder: "",
    },
    {
        label: "Status",    
        type: "select",
        name: "status",
        option: [
          { label: "Active", value: "Active" },
          { label: "Inactive", value: "Inactive" },
        ],
        props: {},
      },
  ];

useEffect(() => {
  if (empuid !== undefined && partnerData?.length === 1) {
    const partner = partnerData[0];

    formInputs?.forEach((itm) => {
      const key = itm?.name;
      const value = partner?.[key];

      
      if (value && typeof value === "string" && value.includes("/")) {
        const momentObj = moment(value, "DD/MM/YYYY", true); 
        if (momentObj.isValid()) {
          setValue(key, momentObj.toDate());
          console.log(key, momentObj.toDate(), "___dateSet");
        } else {
          console.warn(`Invalid date for ${key}: ${value}`);
          setValue(key, null); 
        }
      } else {
        setValue(key, value ?? ""); 
      }
    });
  } else {
  
    const partnerNameOptions = partnerData?.map((itm) => ({
      label: itm?.vendorName,
      value: itm?.uniqueId,
    })) ?? [];
    setPartnerOptions(partnerNameOptions);
  }
}, [partnerData, empuid, formInputs, setValue]);

  

  const onTableViewGenerateSubmit = (data) => {
    if (empuid) {
      data = { ...data, partnerName: partnerData[0]["partnerId"] };
      dispatch(
        VendorActions.postPartnerTeamData(
          false,
          data,
          () => {
            alert("Data submitted successfully!");
            navigate(`${routesObjects?.partnerTeam}`);
          },
          empuid
        )
      );
    } else {
      dispatch(
        VendorActions.postPartnerTeamData(false, data, () => {
          alert("Data submitted successfully!");
          navigate(`${routesObjects?.partnerTeam}`);
        })
      );
    }
    reset({});
  };

  return (
    <>
      <div className=" w-full h-full">
        <button
          onClick={() => {
            navigate(`${routesObjects?.partnerTeam}`);
            setOneLoad(false);
          }}
          className="mt-2 w-auto flex ml-auto mr-2 rounded-md px-10 py-1 mb-2  bg-pcol hover:bg-violet-100 hover:text-pcol hover:font-extrabold text-white text-sm font-extrabold leading-6  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-pbutton"
        >
          Back
        </button>
        <div className="mb-14">
          {/* <UiTopBar /> */}
          <div className="w-full mt-2 bg-[#3e454d] mb-12">
            <div class="grid grid-cols-12 gap-2 m-2 bg-gray-800 border-[1.5px] rounded-lg">
              <div className="col-span-12">
                <div className="grid grid-cols-1 md:grid-cols-1">
                  <CommonForm
                    classes={
                      "grid-cols-4 gap-4 w-full bg-[#3e454d] p-4 rounded-lg"
                    }
                    errors={errors}
                    Form={formInputs}
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                  />
                </div>
                {/* <div class="grid h-96 grid-cols-1 gap-2 bg-white">
                <div className='col-span-1 h-full  pt-0 overflow-scroll relative border-primaryLine border'>


                  <div className='flex flex-col justify-between p-2'>
                    <div class="overflow-scroll">

                      {conditioncountform.map((val, index) => {
                        return <>
                          <CommonForm classes={"grid-cols-1 md:grid-cols-2 lg:gap-8 w-full"} errors={errors} Form={conditionmultiForm.map((itm) => {
                            return {
                              ...itm,
                              type: itm.name == "formovalue" ? nestfilter["wherecondition" + "_" + val + "_form"] == "joins" ? "muitiSelect" : "text" : itm.type,
                              props: itm.label == "Select Column" || (itm.label == "Value" && nestfilter["wherecondition" + "_" + val + "_form"] == "joins") ? {
                                ...itm.props, onSelect: (a, b) => {
                                  console.log("gamecall", a, b, "column" + "_" + val + "_form")
                                  setValue(itm.label == "Select Column" ? "wherecolumn" + "_" + val + "_form" : "formovalue" + "_" + val + "_form", b.category + "smartGame" + b.name)
                                }
                              } : { ...itm.props },
                              option: itm.label == "Expression" ? all_command_type_wise[nestfilter["wherecondition" + "_" + val + "_form"]] : itm.option,
                              name: itm.name + "_" + val + "_form"
                            }
                          })}
                            register={register} setValue={setValue} getValues={getValues} />
                        </>
                      })}
                    </div>
                  </div>

                  <div className='flex w-full top  relative justify-between bg-primaryLine  p-2 pt-0'>
                    <h1 className='text-white'>
                      <p className="mt-2">
                        Upload Document
                      </p>
                    </h1>
                    <button onClick={() => {
                      let finval = 0
                      setconditioncountform((prev) => {
                        let val = [...prev]
                        let sval = val.pop()
                        if (isNaN(sval)) {
                          finval = 1
                        } else {
                          finval = sval + 1
                        }
                        console.log(finval, "finval", val, prev)
                        return [...prev, finval]
                      })
                      setnestfilter(newprev => ({
                        ...newprev,
                        ["wherecondition" + "_" + finval + "_form"]: "blank"
                      }));
                    }}
                      className='bg-pbutton text-white rounded-full mt-2'>
                      <Unicons.UilPlus size="24" />
                    </button>
                  </div>
                </div>
              </div> */}

                {/* {
                UserLyp != "" && <CommonForm classes={"grid-cols-1 lg:grid-cols-2 lg:gap-8 w-full pt-4"} errors={errors} Form={contype}
                  register={register} setValue={setValue} getValues={getValues} />
              } */}

                <div className="flex space-x-2 absolute bottom-0 inset-x-0 mx-auto z-10 justify-center items-center bg-[#24292d]">
                  <button
                    onClick={() => {
                      navigate("/vendor/managePartner");
                    }}
                    className="mt-2 w-auto justify-center rounded-md px-10 py-1 mb-2  bg-pcol hover:bg-violet-100 hover:text-pcol hover:font-extrabold text-white text-sm font-extrabold leading-6  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-pbutton"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit(onTableViewGenerateSubmit)}
                    className="mt-2 w-auto justify-center rounded-md bg-pcol mb-2 hover:bg-violet-100 hover:text-pcol hover:font-extrabold px-10 py-1 text-sm font-extrabold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-pbutton"
                  >
                    Submit
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageVendorPartnerTeamForm;

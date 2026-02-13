import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/Button";
import AdminActions from "../../../../store/actions/admin-actions";
import projectListActions from "../../../../store/actions/projectList-actions";
import AdvancedTable from "../../../../components/AdvancedTable";
import CommonActions from "../../../../store/actions/common-actions";


const ManageMilestoneSite = ({
  CompleteData,
}) => {

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

  const dispatch = useDispatch();

  const userId = CompleteData['userId']
  const date = CompleteData['date']
  const clusterName = CompleteData['clusterName']


  let dbConfigList = useSelector((state) => {
      let interdata = state?.adminData?.getOneProjectTypeDyform
      return interdata?.map((itm) => {
          let updateditm = {
              ...itm,
          }
          return updateditm
      });
  })

  let dbConfigTotalCount = useSelector((state) => {
      let interdata = state?.adminData?.getOneProjectTypeDyform;
      if (interdata.length > 0) {
      return interdata[0]["overall_table_count"];
      } else {
      return 0;
      }
  });

    let table = {
      columns: [
          
          {
              name: "GridCell Id",
              value: "GridCellId",
              style: "min-w-[140px] max-w-[20px] text-center sticky"
          },
          {
              name: "Grid Morphology",
              value: "Grid_Morphology",
              style: "min-w-[100px] max-w-[200px] text-center sticky"
          },
          {
              name: "Grid Status",
              value: "Grid_Status",
              style: "min-w-[100px] max-w-[80px] text-center sticky"
          },
          {
              name: "Stationary Status",
              value: "StationaryStatus",
              style: "min-w-[100px] max-w-[100px] text-center sticky"
          },
          {
              name: "Mobility Status",
              value: "MobilityStatus",
              style: "min-w-[100px] max-w-[120px] text-center sticky"
          },
          {
              name: "Last Stationary Change",
              value: "LastStationaryChange",
              style: "min-w-[100px] max-w-[200px] text-center"
          },
          {
              name: "Last Mobility Change",
              value: "LastMobilityChange",
              style: "min-w-[100px] max-w-[200px] text-center"
          },
          
      ],
      properties: {
          rpp: [10, 20, 50, 100]
      },
      filter: [
          
      ]
    }


  useEffect(() => {
  }, []);

  const onSubmit = (data) => {
        let shouldReset = data.reseter;
        delete data.reseter
        let strVal = objectToQueryString(data);
        dispatch(AdminActions.getAccuralRevenueMasterProject(true,strVal+"&"+masterUnitRateWithActivityFilter))
  }


  return <>
        <AdvancedTable
            headerButton={
              <div className='flex gap-1'>
                  <Button
                      name={"Export"}
                      classes="w-auto"
                      onClick={() => {
                          const url =`/export/getOneSiteEngg/${userId}/${date}/${clusterName}`
                          dispatch(CommonActions.commondownload(url,"Export_project_tracking.xlsx"))
                        }}
                  >
                  </Button>
              </div>
            }
            table={table}
            filterAfter={onSubmit}
            tableName={"UserListTable"}
            handleSubmit={handleSubmit}
            data={dbConfigList}
            errors={errors}
            register={register}
            setValue={setValue}
            getValues={getValues}
            totalCount={dbConfigTotalCount}
            heading = {'Total Count :-  '}
        />
    </>
};

export default ManageMilestoneSite;

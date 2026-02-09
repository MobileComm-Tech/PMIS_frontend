import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewMultiSelects from "../../../../components/NewMultiSelect";
import GraphActions from "../../../../store/actions/graph-actions";
import Button from "../../../../components/Button";
import { UilSearch, UilRefresh } from "@iconscout/react-unicons";
import NewSingleSelect from "../../../../components/NewSingleSelect";
import TripleBarGraph from "../../../../components/TripleBarGraph"
import MixedChart from "../../../../components/sampleTripleBarGraph";
import NewDateRangePicker from "../../../../components/NewDatePicker";
import HrActions from "../../../../store/actions/hr-actions";
import * as XLSX from "xlsx";
import { FiDownload } from "react-icons/fi";


const MonthlyRevenueCircle = () => {
  const exportData = useRef([]);
  const months = [];
  const now = new Date();
  const monthsNumber = [];
  const month=8

  for (let i = 0; i < 6; i++) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const month = date.getMonth() + 1;
    monthsNumber.push(month);
    const year = date.getFullYear();
    months.push({ month, year });
  }

  months.reverse();
  monthsNumber.reverse();

  const currentYear = new Date().getFullYear();
  const [selectedYears, setSelectedYears] = useState(null);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [selectedEmp, setSelectedEmp] = useState([]);
  const dispatch = useDispatch();

  const monthStr = `${month}`;


  let empList = useSelector((state) => {
    return state?.hrReducer?.getManageEmpDetails?.filter(itm => itm?.roleName === "DT Technician")?.map((itm) => ({
      label: itm?.empName,
      value: itm?.uniqueId,
    }));
  });



  let GraphData = useSelector((state) => {
    return state?.GraphData?.getGraphRevenuePlanVSActual_Circle || [];
  });

  let data1 = GraphData?.map(item => item.total_tested) || []
  let data2 = GraphData?.map(item => item.total_approve) || []
  let data3 = GraphData?.map(item => item.tested_urban) || []
  let data4 = GraphData?.map(item => item.tested_rural) || []
  let data5 = GraphData?.map(item => item.total_revisit) || []
  let data6 = GraphData?.map(item => item.total_skipped) || []
  let data7 = GraphData?.map(item => item.amount) || []



  const barLables = { 
    show: true, 
    position: "top",
    color: "#ffffff",
    fontSize:"9",
    fontWeight:"bold",
    fontFamily:"Mulish, sans-serif",
    formatter: (params) => Number(params.value).toFixed(0)

  }

  const lineLabels = { 
    show: true, 
    position: "top",
    color: "#fff",
    fontWeight:"bold",
    fontSize:"9",
    fontFamily:"Mulish, sans-serif",
    formatter: (params) => `${params.value}%`
  }

  const barColors = [
    "#19a38b",
    "#e29c31",
    "#2e8bc1",
    "#b8ee30",
    "#f4d3a8",
    "#8c564b",
  ];

  const lineColors = [
    "#e29c31",
    "#2e8bc1",
    "#b8ee30",
    "#f4d3a8",
  ];

  const barDimenssion = {
    "barWidth" :22,
    "barGap":"10%",
    "barCategoryGap": "10%"
  }

  const SeriesData = [
    {
      name: "Total Tested",
      type: "bar",
      data: data1,
      yAxisIndex: 0,
      label: barLables,
      itemStyle: {
        color: barColors[0],
      },
      barWidth: barDimenssion["barWidth"],
      barGap: barDimenssion["barGap"],
    },
    {
      name: "Total Approved",
      type: "bar",
      data: data2,
      yAxisIndex: 0,
      label: barLables,
      itemStyle: {
        color: barColors[1]
      },
      barWidth: barDimenssion["barWidth"],
      barGap: barDimenssion["barGap"],
    },
    {
      name: "Tested Urban",
      type: "bar",
      data: data3,
      yAxisIndex: 0,
      label: barLables,
      itemStyle: {
        color:barColors[2]
      },
      barWidth: barDimenssion["barWidth"],
      barGap: barDimenssion["barGap"],    
    },
    {
      name: "Tested Rural",
      type: "bar",
      data: data4,
      yAxisIndex: 0,
        label: barLables,
        itemStyle: {
        color: barColors[3]
      },
      barWidth: barDimenssion["barWidth"],
      barGap: barDimenssion["barGap"],
    },
    {
      name: "Total Skipped",
      type: "bar",
      data: data5,
      yAxisIndex: 0,
      label: barLables,
      itemStyle: {
        color: barColors[4]
      },
      barWidth: barDimenssion["barWidth"],
      barGap: barDimenssion["barGap"],
    },
    {
      name: "Total Revisit",
      type: "bar",
      data: data6,
      yAxisIndex: 0,
      label: barLables,
      itemStyle: {
        color: barColors[5]
      },
      barWidth: barDimenssion["barWidth"],
      barGap: barDimenssion["barGap"],
    },
    {
      name: "Productivity (%)",
      type: "line",
      data: data7,
      yAxisIndex: 1,
      label: lineLabels,
      itemStyle: {
        color: lineColors[0],
      },
    },
  ];

  useEffect(() => {
    dispatch(GraphActions.getGraphRevenuePlanVSActual_Circle());
    dispatch(HrActions.getManageEmpDetails());
  }, []);



const handleFilter = () => {
    const filterData = {};
    if (selectedEmp.length > 0) {
      filterData.emp = selectedEmp?.map((Sweety) => Sweety.value);
    }
    if (selectedYears) {
      filterData.year = selectedYears.value;
    }
    if (selectedMonths.length > 0) {
      filterData.viewBy = selectedMonths?.map((Sweety) => Sweety.value);
    }
    if (dateRange?.[0] && dateRange?.[1]) {
      filterData.range = {
        from: dateRange[0].toISOString().slice(0, 10),
        to: dateRange[1].toISOString().slice(0, 10),
      };
    }
    dispatch(GraphActions.postGraphRevenuePlanVSActual_Circle(filterData, () => {}));
  };


  const handleClear = () => {
    setSelectedEmp([]);
    setSelectedYears(null);
    setSelectedMonths([]);
    setDateRange([null,null]);
    dispatch(GraphActions.getGraphRevenuePlanVSActual_Circle());
  };

  const years = Array.from(new Array(currentYear - 2020), (val, index) => ({
    label: 2021 + index,
    value: 2021 + index,
  }));

  const monthsList = [
    { value: "1", label: "Jan" },
    { value: "2", label: "Feb" },
    { value: "3", label: "Mar" },
    { value: "4", label: "Apr" },
    { value: "5", label: "May" },
    { value: "6", label: "Jun" },
    { value: "7", label: "Jul" },
    { value: "8", label: "Aug" },
    { value: "9", label: "Sep" },
    { value: "10", label: "Oct" },
    { value: "11", label: "Nov" },
    { value: "12", label: "Dec" },
  ];


    const columns = [
    { key: "description", label: "Employee" },
    { key: "total_tested", label: "Total Tested" },
    { key: "total_approve", label: "Total Approved" },
    { key: "tested_urban", label: "Tested Urban" },
    { key: "tested_rural", label: "Tested Rural" },
    { key: "total_revisit", label: "Total Revisit" },
    { key: "total_skipped", label: "Total Skipped" },
    { key: "tested_per", label: "Productivity (%)" },
    
  ];

    const exportToExcel = (columns, data, fileName = "table_data") => {
      const formattedData = data.map(row => {
        const obj = {};
        columns.forEach(col => {
          obj[col.label] = row[col.key];
        });
        return obj;
      });
  
      const worksheet = XLSX.utils.json_to_sheet(formattedData);
      const workbook = XLSX.utils.book_new();
  
      XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
      XLSX.writeFile(workbook, `${fileName}.xlsx`);
    };

  return (
    <div className="bg-transparent border-[1.5px] border-pcol rounded-md h-full p-4">
      <div className="flex items-center justify-between space-x-10">
        <div className="flex space-x-2 items-center w-full">
          <NewMultiSelects
            label="DT Technician"
            option={empList}  
            value={selectedEmp}
            placeholder="DT Technician"
            cb={(data) => setSelectedEmp(data)}
          />
          <NewSingleSelect
            label="Year"
            option={years}
            value={selectedYears}
            placeholder="Year"
            cb={(data) => setSelectedYears(data)}
          />
          <NewMultiSelects
            label="Month"
            option={monthsList} 
            value={selectedMonths}
            cb={(data) => setSelectedMonths(data)}
            placeholder="Month"
          />
          <NewDateRangePicker
            value={dateRange}
            cb={(range) => {
              setDateRange(range);
            }}
            placeholder="Date-Range"
          />
        </div>
        <div className="flex space-x-2">
          <Button
            classes="w-12 h-10 text-white mt-1 flex justify-center bg-transparent border-solid border-[#64676d] border-2"
            onClick={handleFilter}
            icon={<UilSearch size="36" className="text-[#f4d3a8]" />}
          ></Button>
          <Button
            classes="w-12 h-10 text-white mt-1 flex justify-center bg-transparent border-solid border-[#64676d] border-2"
            onClick={handleClear}
            icon={<UilRefresh size="36" className = "text-[#f4d3a8]"/>}
          ></Button>
        </div>
      </div>
      <MixedChart grapghData = {GraphData}  seriesData={SeriesData}/>

      <div className="flex justify-end mb-2 gap-2">
        <button
          onClick={() =>
            exportToExcel(columns, GraphData, "Resource_Productivity")
          }
          title="Export"
          className="px-4 py-2 bg-[#2b98d6] text-white rounded-md font-semibold hover:opacity-90"
        >
          <FiDownload size={20} />
        </button>
      </div>

      <div className="overflow-x-auto mt-2">
        <table className="w-full text-sm text-left border border-pcol">
          <thead className="bg-[#3e454d] text-[#f4d3a8]">
            <tr>
              {columns.map((s, idx) => (
                <th key={idx} className="border px-3 py-2 text-center">
                  {s.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-white">
            {GraphData.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-[#3e454d]">
                {columns.map((col, colIdx) => (
                  <td
                    key={colIdx}
                    className={`border px-3 py-2 text-center ${
                      col.key === "description" ? "font-semibold text-left" : ""
                    }`}
                  >
                    {row[col.key] ?? "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    
  );
};

export default MonthlyRevenueCircle;






















// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import NewMultiSelects from "../../../../components/NewMultiSelect";
// import GraphActions from "../../../../store/actions/graph-actions";
// import Button from "../../../../components/Button";
// import { UilSearch, UilRefresh } from "@iconscout/react-unicons";
// import NewSingleSelect from "../../../../components/NewSingleSelect";
// import TripleBarGraph from "../../../../components/TripleBarGraph"


// const MonthlyRevenueCircle = () => {
//   const exportData = useRef([]);
//   const months = [];
//   const now = new Date();
//   const monthsNumber = [];
//   const month=8

//   for (let i = 0; i < 6; i++) {
//     const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
//     const month = date.getMonth() + 1;
//     monthsNumber.push(month);
//     const year = date.getFullYear();
//     months.push({ month, year });
//   }

//   months.reverse();
//   monthsNumber.reverse();

//   const [extraColumnsState, setExtraColumns] = useState(months);

//   const currentYear = new Date().getFullYear();
// //   const [selectedDepartment, setSelectedDepartment] = useState([]);
//   const [selectedCircle, setSelectedCircle] = useState([]);
//   const [selectedZone, setSelectedZone] = useState([]);
//   const [selectedProjectType, setSelectedProjectType] = useState([]);
//   const [selectedYears, setSelectedYears] = useState(null);
//   const [selectedMonths, setSelectedMonths] = useState([]);
//   const dispatch = useDispatch();

//   const monthStr = `${month}`;


//   // let CircleList = useSelector((state) => {
//   //   return state?.currentuserData?.getcurrentusercircleprojectid?.map((itm) => ({
//   //     label: itm?.circle,
//   //     value: itm?.projectuid,
//   //   }));
//   // });

//   let ZoneList = useSelector((state) => {
//     return state?.GraphData?.getGraphZoneInCirlceRevenue?.map((itm) => ({
//       label: itm?.zone,
//       value: itm?.projectgroupuid,
//     }));
//   });



//   let GraphData = useSelector((state) => {
//     return state?.GraphData?.getGraphRevenuePlanVSActual_Circle || [];
//   });

//   let data1 = GraphData?.map(item => item.aop) || []
//   let data2 = GraphData?.map(item => item.pv) || []
//   let data3 = GraphData?.map(item => item.amount) || []

//   const SecondaryAxis = GraphData?.map(item => item.ach) || [];
//   const ThirdAxis = GraphData?.map(item => item.percentage) || [];




//   const SeriesData = [
//     {
//         name: "AOP-Target",
//         type: "column",
//         data: GraphData?.map(item => item.aop) || [],
//         yaxisIndex: 0
//     },
//     {
//         name: "PV-Target",
//         type: "column",
//         data: GraphData?.map(item => item.pv) || [],
//         yaxisIndex: 0
//     },
//     {
//         name: "Actual Revenue",
//         type: "column",
//         data: GraphData?.map(item => item.amount) || [],
//         yaxisIndex: 0
//     },
//     {
//         name: "Actual / PV (%)",
//         type: "line",
//         data: SecondaryAxis,
//         yaxisIndex: 1
//     },
//     {
//         name: "Actual / AOP (%)",
//         type: "line",
//         data: ThirdAxis,
//         yaxisIndex: 1
//     },
// ];


//   useEffect(() => {
//     dispatch(GraphActions.getGraphZoneInCirlceRevenue());
//     dispatch(GraphActions.getGraphRevenuePlanVSActual_Circle());
//   }, []);



// const handleFilter = () => {
//     const filterData = {};
//     if (selectedZone.length > 0) {
//       filterData.projectgroupuid = selectedZone?.map((Sweety) => Sweety.value);
//     }
//     if (selectedProjectType.length > 0) {
//       filterData.projectType = selectedProjectType?.map((Sweety) => Sweety.value);
//     }
//     if (selectedYears) {
//       filterData.year = selectedYears.value;
//     }
//     if (selectedMonths.length > 0) {
//       filterData.viewBy = selectedMonths?.map((Sweety) => Sweety.value);
//     }
//     dispatch(GraphActions.postGraphRevenuePlanVSActual_Circle(filterData, () => {}));
//   };


//   const handleClear = () => {
//     // setSelectedCircle([]);
//     setSelectedZone([]);
//     setSelectedProjectType([]);
//     setSelectedYears(null);
//     setSelectedMonths([]);
//     dispatch(GraphActions.getGraphRevenuePlanVSActual_Circle());
//   };

//   const years = Array.from(new Array(currentYear - 2020), (val, index) => ({
//     label: 2021 + index,
//     value: 2021 + index,
//   }));

//   const monthsList = [
//     { value: "1", label: "Jan" },
//     { value: "2", label: "Feb" },
//     { value: "3", label: "Mar" },
//     { value: "4", label: "Apr" },
//     { value: "5", label: "May" },
//     { value: "6", label: "Jun" },
//     { value: "7", label: "Jul" },
//     { value: "8", label: "Aug" },
//     { value: "9", label: "Sep" },
//     { value: "10", label: "Oct" },
//     { value: "11", label: "Nov" },
//     { value: "12", label: "Dec" },
//   ];

//   return (
//     <div className="bg-transparent border-[1.5px] border-pcol rounded-md h-full p-4">
//          <div className="text-center mb-4">
//             <h1 className="text-[#f4d3a8] font-bold text-lg whitespace-nowrap underline">Circle - Revenue Plan VS Actual</h1>
//         </div>
//         <div className="flex items-center justify-between space-x-10">
//         <div className="flex space-x-2 items-center w-full">
//         <NewMultiSelects
//             label="Circle"
//             option={ZoneList}
//             value={selectedZone}
//             cb={(data) => setSelectedZone(data)}
//             placeholder="Zone"
//           />
//           {/* <NewMultiSelects
//             label="Project Type"
//             option={projectTypeList}
//             value={selectedProjectType}
//             cb={(data) => setSelectedProjectType(data)}
//             placeholder="Project Type"
//           /> */}
//           <NewSingleSelect
//             label="Year"
//             option={years}
//             value={selectedYears}
//             placeholder="Year"
//             cb={(data) => setSelectedYears(data)}
//           />
//           <NewMultiSelects
//             label="Month"
//             option={monthsList}
//             value={selectedMonths}
//             cb={(data) => setSelectedMonths(data)}
//             placeholder="Month"
//           />
//            </div>
//       <div className="flex space-x-2">
//             <Button
//               classes="w-12 h-10 text-white mt-1 flex justify-center bg-transparent border-solid border-[#64676d] border-2"
//               onClick={handleFilter}
//               icon={<UilSearch size="36" className="text-[#f4d3a8]"/>}
//             ></Button>
//             <Button
//               classes="w-12 h-10 text-white mt-1 flex justify-center bg-transparent border-solid border-[#64676d] border-2"
//               onClick={handleClear}
//               icon={<UilRefresh size="36" className = "text-[#f4d3a8]"/>}
//             ></Button>
//           </div>
//         </div>
//       <TripleBarGraph data={GraphData} headerName={"Circle_Revenue_Plan_VS_Actual"} seriesData={SeriesData} YAxisTitle={"Sites"} XAxisTitle={"Zone"} horizontal={false}  data1= {data1} data2= {data2} data3= {data3} data4= {SecondaryAxis} data5= {ThirdAxis} shubham={true}/>
//     </div>
//   );
// };

// export default MonthlyRevenueCircle;
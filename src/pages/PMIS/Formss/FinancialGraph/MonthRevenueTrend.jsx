import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewMultiSelects from "../../../../components/NewMultiSelect";
import GraphActions from "../../../../store/actions/graph-actions";
import Button from "../../../../components/Button";
import { UilSearch, UilRefresh } from "@iconscout/react-unicons";
import NewSingleSelect from "../../../../components/NewSingleSelect";
import * as XLSX from "xlsx";
import { FiDownload } from "react-icons/fi";
import MixedChart from "../../../../components/sampleTripleBarGraph.jsx";
import AdminActions from "../../../../store/actions/admin-actions.js";
import { GET_MANAGE_COST_CENTER } from "../../../../store/reducers/admin-reducer.js";
import NewDateRangePicker from "../../../../components/NewDatePicker.jsx";
import WeekPicker from "../../../../components/WeekDatepicker.jsx";

const MonthRevenueTrend = () => {
  const exportData = useRef([]);
  const months = [];
  const now = new Date();
  const monthsNumber = [];

  for (let i = 0; i < 6; i++) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const month = date.getMonth() + 1;
    monthsNumber.push(month);
    const year = date.getFullYear();
    months.push({ month, year });
  }

  months.reverse();
  monthsNumber.reverse();

  const [extraColumnsState, setExtraColumns] = useState(months);

  const currentYear = new Date().getFullYear();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedMarket, setSelectedMarket] = useState([]);
  const [selectedYears, setSelectedYears] = useState(null);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [week, setWeek] = useState({startDate: null,endDate: null});
  const dispatch = useDispatch();


  console.log(week,"weekweekweekweekweekweek")



  const regionList = useSelector((state) => {
    return state?.adminData?.getManageCircle?.map((itm) => ({
      label: itm?.regionName,
      value: itm?.uniqueId,
    }));
  });

  const marketList = useSelector((state) => {
    return state?.adminData?.getManageCostCenter?.map((itm) => ({
      label: itm?.marketName,
      value: itm?.uniqueId,
    }));
  });


  let GraphData = useSelector((state) => {
    return state?.GraphData?.getGraphRevenuePlanVSActual_Trend || [];
  });


  let data1 = GraphData?.map(item => item.clusters) || []
  let data2 = GraphData?.map(item => item.total_grids) || []
  let data3 = GraphData?.map(item => item.test_grids) || []
  let data4 = GraphData?.map(item => item.skip_grids) || []
  let data5 = GraphData?.map(item => item.revisit_grids) || []
  let data6 = GraphData?.map(item => item.approved_grids) || []
  let data7 = GraphData?.map(item => item.invoice_grids) || []
  let data8 = GraphData?.map(item => item.tested_per) || []
  let data9 = GraphData?.map(item => item.Skipped_per) || []
  let data10 = GraphData?.map(item => item.Revisited_per) || []
  let data11 = GraphData?.map(item => item.Approved_per) || []
  let data12 = GraphData?.map(item => item.Invoiced_per) || []

  const SecondaryAxis = GraphData?.map(item => item.ach) || [];
  const ThirdAxis = GraphData?.map(item => item.percentage) || [];

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
  // "#1f77b4", // Blue (primary)
  // "#2ca02c", // Green
  // "#ff7f0e", // Orange
  // "#9467bd", // Purple
  // "#8c564b", // Brown
  // "#7f7f7f"  // Grey

"#19a38b",
"#e29c31",
"#2e8bc1",
"#b8ee30",
"#f4d3a8",


];

const lineColors = [
  // "#2ca02c", // Green
  // "#ff7f0e", // Orange
  // "#9467bd", // Purple
  // "#8c564b", // Brown
  // "#000000"  // Black
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
    // {
    //     name: "Clusters",
    //     type: "bar",
    //     data: data1,
    // },
    {
        name: "Total Grids",
        type: "bar",
        data: data2,
        yAxisIndex: 0,
        label: barLables,
        itemStyle: {
          color: barColors[0],
        },
        barWidth: barDimenssion["barWidth"],
        barGap: barDimenssion["barGap"],
    },
    {
        name: "Tested",
        type: "bar",
        data: data3,
        yAxisIndex: 0,
        label: barLables,
        itemStyle: {
          color: barColors[1]
        },
        barWidth: barDimenssion["barWidth"],
        barGap: barDimenssion["barGap"],
    },
    {
        name: "Approved",
        type: "bar",
        data: data6,
        yAxisIndex: 0,
        label: barLables,
        itemStyle: {
          color:barColors[2]
        },
        barWidth: barDimenssion["barWidth"],
        barGap: barDimenssion["barGap"],
         
    },
    {
        name: "Skipped",
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
        name: "Revisited",
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
    
    // {
    //     name: "Invoiced",
    //     type: "bar",
    //     data: data7,
    //     yAxisIndex: 0,
    //     label: barLables,
    //     itemStyle: {
    //       color: barColors[5]
    //     }
    // },
    {
        name: "Tested(%)",
        type: "line",
        data: data8,
        yAxisIndex: 1,
        label: lineLabels,
        itemStyle: {
          color: lineColors[0],
        },
        // lineStyle: {
        //   color: lineColors[0],
        //   width: 2,
        //   type: 'dashed'
        // },

    },
    {
        name: "Approved(%)",
        type: "line",
        data: data11,
        yAxisIndex: 1,
        label: { 
          show: true, 
          position: "left",
          color: "#fff",
          fontSize:"9",
          fontFamily:"Mulish, sans-serif",
          formatter: (params) => `${params.value}%`
        },
        //  label: { show: true, position: "top" },
        itemStyle: {
          color: lineColors[1]
        },
        // lineStyle: {
        //   color: lineColors[1],
        //   width: 2,
        //   type: 'dashed'
        // },
    },
    {
        name: "Skipped(%)",
        type: "line",
        data: data9,
        yAxisIndex: 1,
        label: lineLabels,
        //  label: { show: true, position: "top" },
        itemStyle: {
          color: lineColors[2]
        },
        // lineStyle: {
        //   color: lineColors[2],
        //   width: 2,
        //   type: 'dashed'
        // },
    },
    {
        name: "Revisited(%)",
        type: "line",
        data: data10,
        yAxisIndex: 1,
        label: lineLabels,
        //  label: { show: true, position: "top" },
        itemStyle: {
          color: lineColors[3]
        },
        // lineStyle: {
        //   color: lineColors[3],
        //   width: 2,
        //   type: 'dashed'
        // },
    },
    
    // {
    //     name: "Invoiced(%)",
    //     type: "line",
    //     data: data12,
    //     yAxisIndex: 1,
    //     itemStyle: {
    //       color: lineColors[4]
    //     }
    // },
  ];




  useEffect(() => {
    dispatch(GraphActions.getGraphRevenuePlanVSActual_Trend());
    dispatch(AdminActions.getManageCircle(true,"",0))
  }, []);


  const handleFilter = () => {
    const filterData = {};
    if (selectedRegion) {
      filterData.region = selectedRegion.value;
    }
    if (selectedMarket.length > 0) {
      filterData.market = selectedMarket?.map((Sweety) => Sweety.value);
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
    if (week?.startDate && week?.endDate) {
      filterData.week = {
        from: week.startDate.toISOString().slice(0, 10),
        to: week.endDate.toISOString().slice(0, 10),
      };
    }
    console.log(filterData,"filterData")
    dispatch(GraphActions.postGraphRevenuePlanVSActual_Trend(filterData, () => {}));
  };


  const handleClear = () => {
    setSelectedRegion(null);
    setSelectedMarket([]);
    setSelectedYears(null);
    setSelectedMonths([]);
    setDateRange([null,null])
    dispatch(GraphActions.getGraphRevenuePlanVSActual_Trend());
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
    { key: "description", label: "Market" },
    { key: "clusters", label: "Clusters" },
    { key: "total_grids", label: "Total Grids" },
    { key: "test_grids", label: "Tested" },
    { key: "approved_grids", label: "Approved" },
    { key: "skip_grids", label: "Skipped" },
    { key: "revisit_grids", label: "Revisited" },
    // { key: "invoice_grids", label: "Invoiced" },

    { key: "tested_per", label: "Tested(%)" },
    { key: "Approved_per", label: "Approved(%)" },
    { key: "Skipped_per", label: "Skipped(%)" },
    { key: "Revisited_per", label: "Revisited(%)" },
    // { key: "Invoiced_per", label: "Invoiced(%)" },
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

  useEffect(() => {
    if (selectedRegion) {
      dispatch(AdminActions.getManageCostCenter(true,`region=${selectedRegion.value}`));
    }
    else{
      dispatch(GET_MANAGE_COST_CENTER({ dataAll:[], reset:true }));
    }
  }, [selectedRegion]);



  return (
    <div className="bg-transparent border-[1.5px] border-pcol rounded-md h-full p-4">
       {/* <div className="text-center">
            <h1 className="text-[#f4d3a8] font-bold text-lg whitespace-nowrap underline">Market VS Clusters</h1>
        </div> */}
        <div className="flex items-center justify-between space-x-10">
          <div className="flex space-x-2 items-center w-full">
            <NewSingleSelect
              label="Region"
              option={regionList}
              value={selectedRegion}
              placeholder="Region"
              cb={(data) => setSelectedRegion(data)}
            />
            
            <NewMultiSelects
              label="Market"
              option={marketList}  
              value={selectedMarket}
              placeholder="Market"
              cb={(data) => setSelectedMarket(data)}
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
            <WeekPicker
              value={week}
              onChange={(data) => {
                console.log("Week Start:", data.startDate);
                console.log("Week End:", data.endDate);
                setWeek(data);
              }}
              placeholder = "Select Week"
            />
            <NewDateRangePicker
              value={dateRange}
              cb={(range) => {
                console.log("Start:", range[0]);
                console.log("End:", range[1]);
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

      {/* 👇 EXPORT BUTTONS HERE */}

      <div className="flex justify-end mb-2 gap-2">
        <button
          onClick={() =>
            exportToExcel(columns, GraphData, "Market_vs_Clusters")
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

export default MonthRevenueTrend;
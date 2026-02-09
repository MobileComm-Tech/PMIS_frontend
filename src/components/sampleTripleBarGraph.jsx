// import React from "react";
// import ReactApexChart from "react-apexcharts";

// const MixedChart = () => {
//   const series = [
//     {
//       name: "Bar A",
//       type: "column",
//       data: [30, 40, 35, 35, 35],
//       yAxisIndex: 0,
//       seriesName: "BarsAxis"
//     },
//     {
//       name: "Bar B",
//       type: "column",
//       data: [20, 35, 40, 45, 38],
//       yAxisIndex: 0,
//       seriesName: "BarsAxis"
//     },
//     {
//       name: "Bar C",
//       type: "column",
//       data: [25, 30, 28, 35, 40],
//       yAxisIndex: 0,
//       seriesName: "BarsAxis"
//     },
//     {
//       name: "Line 1",
//       type: "line",
//       data: [32, 38, 36, 48, 45],
//       yAxisIndex: 1,
//       seriesName: "BarsAxis"
//     },
//     {
//       name: "Line 2",
//       type: "line",
//       data: [100, 120, 115, 130, 150],
//       yAxisIndex: 1,
//       seriesName: "BarsAxis"
//     }
//   ];

//   const options = {
//     chart: {
//       height: 350,
//       type: "line",
//       stacked: false
//     },

//     stroke: {
//       width: [0, 0, 0, 3, 3]
//     },

//     plotOptions: {
//       bar: {
//         columnWidth: "50%"
//       }
//     },
//     dataLabels: {
//       enabled: true,
//       // offsetY:-,
//       offsetX: 5,
//       enabledOnSeries: [0, 1, 2],
//       style: {
//         colors: ["#ffffff"], 
//         fontSize: "12px",
//         fontWeight: "bold",
//       },
//       background: {
//         enabled: true,
//         foreColor: "#000",
//         borderRadius: 2,
//       }
//     },

//     xaxis: {
//       categories: ["Jan", "Feb", "Mar", "Apr", "May"],
//       title: {
//         text: "",
//         style: {
//           color: '#ffffff',
//           fontSize: '10px',
//           fontWeight: 'bold',
//         },
//       },
//       labels: {
//         style: {
//           colors: "#ffffff",
//           fontSize: "12px",
//         },
//       },
//     },

//     yaxis: [
//       {
//         seriesName: "BarsAxis",
//         title: {
//           text: "Primary Axis",
//           style:{
//             color: "#ffffff",
//             fontSize: '10px',
//           }
//         },
//         labels: {
//           formatter: function (val) {
//             return val.toFixed(0);
//           },
          
//           style: {
//             colors: "#ffffff",
//             fontSize: "12px",
//           },
//         },
//       },
//       {
//         opposite: true,
//         title: {
//           text: "Secondary Axis",
//           style:{
//             color: "#ffffff",
//             fontSize: '10px',
//           }
//         },
//         labels: {
//           style: {
//             colors: "#ffffff",
//             fontSize: "12px",
//           },
//           formatter: function (val) {return `${val.toFixed(0)}`;},
//         },
//       }
//     ],

//     tooltip: {
//       shared: true,
//       intersect: false
//     },

//     legend: {
//       position: "bottom",
//       labels: {
//         colors: "#ffffff",
//       }
//     }
//   };

//   return (
//     <ReactApexChart options={options} series={series} type="line" height={350} />
//   );
// };

// export default MixedChart;



// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { Chart } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Tooltip,
//   Legend
// );

// const MixedChart = () => {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//     datasets: [
//       {
//         type: "bar",
//         label: "Bar A",
//         data: [30, 40, 35, 35, 35],
//         backgroundColor: "#1e90ff",
//         yAxisID: "y"
//       },
//       {
//         type: "bar",
//         label: "Bar B",
//         data: [20, 35, 40, 45, 38],
//         backgroundColor: "#00d084",
//         yAxisID: "y"
//       },
//       {
//         type: "bar",
//         label: "Bar C",
//         data: [25, 30, 28, 35, 40],
//         backgroundColor: "#f5a623",
//         yAxisID: "y"
//       },
//       {
//         type: "line",
//         label: "Line 1",
//         data: [32, 38, 36, 48, 45],
//         borderColor: "#ff4d4f",
//         tension: 0.3,
//         yAxisID: "y1"
//       },
//       {
//         type: "line",
//         label: "Line 2",
//         data: [100, 120, 115, 130, 150],
//         borderColor: "#8e7cff",
//         tension: 0.3,
//         yAxisID: "y1"
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     interaction: {
//       mode: "index",
//       intersect: false
//     },
//     scales: {
//       y: {
//         position: "left",
//         title: {
//           display: true,
//           text: "Primary Axis"
//         }
//       },
//       y1: {
//         position: "right",
//         grid: {
//           drawOnChartArea: false
//         },
//         title: {
//           display: true,
//           text: "Secondary Axis"
//         }
//       }
//     }
//   };

//   return <Chart type="bar" data={data} options={options}/>;
// };

// export default MixedChart;


import ReactECharts from "echarts-for-react";

const MixedChart = ({
  seriesData = [],
  grapghData = []
}) => {

  const xAxisData = grapghData?.map((item) => item.description) || [];
  const legenData = seriesData?.map((item) => item.name) || [];



  const option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // data: ["Bar A", "Bar B", "Bar C", "Line 1", "Line 2"],
      data: legenData,
      textStyle: {
        color: "#fff"
      }
    },
    xAxis: {
      type: "category",
      // data: ["Jan", "Feb", "Mar", "Apr", "May"],
      data: xAxisData,
      axisLabel:{
        interval: 0,     
        rotate: 0,
        color:"#fff",
        fontWeight:"normal",
        fontSize:"12",
        fontFamily:"Mulish, sans-serif"
      },
    },
    yAxis: [
      {
        type: "value",
        name: "",
        axisLabel:{
          color:"#fff",
          fontWeight:"normal",
          fontSize:"12"
        },
        splitLine:{
          show:false
        },
      },
      {
        type: "value",
        name: "",
        axisLabel:{
          color:"#fff",
          fontWeight:"normal",
          fontSize:"12",
          formatter: '{value} %'
        },
        splitLine:{
          show:false
        },
      },
    ],
    series: seriesData
  };

  return <ReactECharts option={option} style={{ height: 500 }} />;
};

export default MixedChart;
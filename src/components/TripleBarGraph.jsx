import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TripleBarGraph = ({
  data,
  headerName,
  seriesData = [],
  horizontal = false,
  title = "",
  columnWidth = "70%",
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  data10,
  data11,
  data12,
  shubham = false, 
   
}) => {

  let max1 = Math.max(
    ...(data1 || []),
    ...(data2 || []),
    ...(data3 || []),
    ...(data4 || []),
    ...(data5 || []),
    ...(data6 || []),
    ...(data7 || []),
  )



  if (!shubham) {
    if (max1 % 500 !== 0) {
      max1 = Math.ceil(max1 / 500) * 500;
    }
  } else {
    if (max1 % 50 !== 0) {
      max1 = Math.ceil(max1 / 50) * 50;
    }
  }

  let max2 = Math.max(
    ...(data8 || []),
    ...(data9 || []),
    ...(data10 || []),
    ...(data11 || []),
    ...(data12 || []),
  )
  if (max2 % 25 !== 0) {
    max2 = Math.ceil(max2 /25) * 25;
  }


  const category = data?.map((item) => item.description) || [];

  const defaultSeries = [];

  const series = seriesData.length > 0 ? seriesData : defaultSeries;

  const colors = ["#13b497", "#ffab2d", "#2b98d6", "#b8ee30", "#f4d3a8","#8E7DFF","#FF6F91","#1F2937","#7C2D12", "#0F766E", "#4C1D95","#374151"];

  const offsetX = horizontal ? 0 : 1;
  const offsetY = horizontal ? 0 : -7;

  const options = {
    chart: {
      height: 350,
      type: "line",
      background: "#3e454d",
      stacked: false,
      toolbar: {
          show: true,
          tools: {
              download: true, 
              zoomin: false, 
              zoomout: false, 
              reset: false,
              pan: false,
              zoom: false,                
          },
          export: {
            csv:{
                filename:headerName
            },
            svg: {
                filename: headerName,
            },
            png: {
                filename: headerName,
            }
        }
      }
      
    },
    title: {
      text: title,
      align: "center",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "#ffffff",
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: offsetX,
      offsetY: offsetY,
      style: {
        colors: ["transparent"],
        fontSize: "12px",
        fontWeight: 'bold',
    }, 
    background: {
        enabled: true, 
        borderRadius: 0,
        borderWidth: 0, 
        borderColor: "transparent", 
      },
    },
    xaxis: {
      categories: category,
      title: {
        text: "",
        style: {
          color: '#ffffff',
          fontSize: '10px',
          fontWeight: 'bold',
        },
      },
      labels: {
        style: {
          colors: "#ffffff",
          fontSize: "12px",
        },
      },
    },
    yaxis: [
      {
        title: {
          text: '', 
          style:{
            color: "#ffffff",
            fontSize: '18px'
          } 
        },
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          },
          
          style: {
            colors: "#ffffff",
            fontSize: "12px",
          },
        },
        min:0,
        max:max1,
        // tickAmount: 5,
      }, 
      {
        labels: {
          show:false,
          formatter: function (val) {
            return val.toFixed(0);
          },
          
          style: {
            colors: "#ffffff",
            fontSize: "0px",
          },
        },
        min:0,
        max:max1,
      },
      {
        labels: {
          show:false,
          formatter: function (val) {
            return val.toFixed(0);
          },
          
          style: {
            colors: "#ffffff",
            fontSize: "0px",
          },
        },
        min:0,
        max:max1,
      },
      {
        labels: {
          show:false,
          formatter: function (val) {
            return val.toFixed(0);
          },
          
          style: {
            colors: "#ffffff",
            fontSize: "0px",
          },
        },
        min:0,
        max:max1,
      },
      {
        labels: {
          show:false,
          formatter: function (val) {
            return val.toFixed(0);
          },
          
          style: {
            colors: "#ffffff",
            fontSize: "0px",
          },
        },
        min:0,
        max:max1,
      },
      {
        labels: {
          show:false,
          formatter: function (val) {
            return val.toFixed(0);
          },
          
          style: {
            colors: "#ffffff",
            fontSize: "0px",
          },
        },
        min:0,
        max:max1,
      },
      {
        labels: {
          show:false,
          formatter: function (val) {
            return val.toFixed(0);
          },
          
          style: {
            colors: "#ffffff",
            fontSize: "0px",
          },
        },
        min:0,
        max:max1,
      },
      
      {
        opposite: true,
        title: {
          text: '',
          style:{
            color: "#ffffff",
            fontSize: '10px',
          }  
        },
        labels: {
          style: {
            colors: "#ffffff",
            fontSize: "12px",
          },
          formatter: function (val) {return `${val.toFixed(0)}%`;},
        },
        min:0,
        max:max2,
        tickAmount: 5
      },
      {
        opposite: true,
        labels: {
          show:false,
          style: {
            colors: "#ffffff",
            fontSize: "0px",
          },
          formatter: function (val) {return `${val.toFixed(0)}%`;},
        },
        min:0,
        max:max2,
        tickAmount: 5
      },
      {
        opposite: true,
        labels: {
          show:false,
          style: {
            colors: "#ffffff",
            fontSize: "0px",
          },
          formatter: function (val) {return `${val.toFixed(0)}%`;},
        },
        min:0,
        max:max2,
        tickAmount: 5
      },
      {
        opposite: true,
        labels: {
          show:false,
          style: {
            colors: "#ffffff",
            fontSize: "0px",
          },
          formatter: function (val) {return `${val.toFixed(0)}%`;},
        },
        min:0,
        max:max2,
        tickAmount: 5
      },
      {
        opposite: true,
        labels: {
          show:false,
          style: {
            colors: "#ffffff",
            fontSize: "0px",
          },
          formatter: function (val) {return `${val.toFixed(0)}%`;},
        },
        min:0,
        max:max2,
        tickAmount: 5
      },
    ],

    plotOptions: {
      bar: {
        columnWidth:columnWidth,
        horizontal: horizontal,
        borderRadius: 2,
        dataLabels: {
          style: {
            colors: "#fff",
          },
          position: "top",
        },
      },
    },
    stroke: {
      colors: ["transparent", "transparent", "transparent","transparent", "transparent", "transparent","transparent","#1F2937","#7C2D12", "#0F766E", "#4C1D95","#374151"],
      curve: 'smooth',
      // width: [0.8, 0.8, 0.8, 2.5, 2.5],
    },
    grid: {
      borderColor: "transparent",
      strokeDashArray: 0,
    },
    fill: {
      colors: colors,
    },
    legend: {
      show: true,
      colors: colors,
      position: "bottom",
      labels: {
        colors: "#ffffff",
      },
      markers: {
        fillColors: colors,
      },
      fontSize: "15px",
      fontWeight: "400",
    },
    tooltip: {
      theme: "dark",  
      marker: {
        fillColors: colors,  
      },
      y: {
        formatter: function (value, { seriesIndex }) {
          if (seriesIndex === 7 || seriesIndex === 8 || seriesIndex === 9 || seriesIndex === 10 || seriesIndex === 11) {
            return `${value}%`;
          }
          return value;
        },
      },
      
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="line" height={350} />
  );
};

export default TripleBarGraph;
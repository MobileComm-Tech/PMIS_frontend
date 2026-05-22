

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import PivotTableUIImport from "react-pivottable/PivotTableUI";
import createPlotlyRenderersImport from "react-pivottable/PlotlyRenderers";
import PlotImport from "react-plotly.js";

import "react-pivottable/pivottable.css";

import NewMultiSelects from "../../../components/NewMultiSelect";
import Button from "../../../components/Button";

import { UilSearch, UilRefresh } from "@iconscout/react-unicons";

import GraphActions from "../../../store/actions/graph-actions";

const PivotTableUI = PivotTableUIImport.default || PivotTableUIImport;

import TableRenderersImport from "react-pivottable/TableRenderers";

const TableRenderers = TableRenderersImport.default || TableRenderersImport;

const createPlotlyRenderers =
  createPlotlyRenderersImport.default || createPlotlyRenderersImport;

const Plot = PlotImport.default || PlotImport;

const PlotlyRenderers = createPlotlyRenderers(Plot);

const UnbilledDashboard = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const graphData = useSelector((state) => {
    return state?.GraphData?.getGraphUnbilled || [];
  });

  const [aging, setAging] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState([]);

  const [pivotState, setPivotState] = useState({
    rows: ["Aging"],
    cols: ["Circle"],
    vals: ["Total Unbilled"],
    aggregatorName: "Sum",
    rendererName: "Grouped Column Chart",
    // rowOrder: "value_a_to_z",
    // colOrder: "value_a_to_z",
    rowOrder: "value_z_to_a",
colOrder: "value_z_to_a",
  });

  useEffect(() => {
    dispatch(GraphActions.getGraphUnbilled());
  }, []);

  const formattedData = useMemo(() => {
    return graphData?.map((item) => ({
      Aging:
        item?.aging ||
        item?.finalAgeing ||
        item?.currentUnbilledBucket ||
        "N/A",

      // "Total Unbilled": Number(item?.totalUnbilled) || 0,
      "Total Unbilled": ((Number(item?.totalUnbilled) || 0) / 100000).toFixed(
        4,
      ),

      Circle: item?.circle || "N/A",

      "Project Type": item?.projectType || item?.customerProjectType || "N/A",

      "Project Id": item?.projectId || "N/A",
      "Unbilled Sub-Bucket": item?.unbilledSubBucket || "N/A",
      "Current Unbilled-Bucket": item?.currentUnbilledBucket || "N/A",
    }));
  }, [graphData]);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(formattedData);
  }, [formattedData]);

  const regionOptions = useMemo(() => {
    return [...new Set(formattedData.map((i) => i.region))].map((item) => ({
      label: item,
      value: item,
    }));
  }, [formattedData]);

  useEffect(() => {
    const pastelPalette = [
      "#13b497",
      "#ffab2d",
      "#e06666",
      "#fcd34d",
      "#c4b5fd",
      "#6ee7b7",
      "#fdba74",
      "#a5f3fc",
      "#f9a8d4",
      "#bbf7d0",
    ];

    // const timer = setTimeout(() => {
    //   const plotDivs = document.querySelectorAll(".pivot-dark .js-plotly-plot");
    //   plotDivs.forEach((div) => {
    //     if (div._fullLayout) {
    //       window.Plotly?.relayout(div, {
    //         colorway: pastelPalette,
    //         paper_bgcolor: "#1f2937",
    //         plot_bgcolor: "#1f2937",
    //         // showlegend: true,                    // ← force legend ON
    //         font: { color: "#d1d5db", family: "sans-serif" },
    //         // legend: {
    //         //   bgcolor: "#111827",
    //         //   bordercolor: "#4b5563",
    //         //   borderwidth: 1,
    //         //   font: { color: "#d1d5db", size: 11 },
    //         //   orientation: "h",                  // horizontal legend below chart
    //         //   x: 0,
    //         //   y: -0.25,                          // push below x-axis
    //         // },
    //         margin: { t: 30, b: 100, l: 60, r: 20 }, // extra bottom for legend
    //         // xaxis: {
    //         //   gridcolor: "#374151",
    //         //   linecolor: "#4b5563",
    //         //   tickfont: { color: "#d1d5db", size: 10 },
    //         //   title: { font: { color: "#d1d5db" } },
    //         // },
    //         // // yaxis: {
    //         //   gridcolor: "#374151",
    //         //   linecolor: "#4b5563",
    //         //   tickfont: { color: "#d1d5db", size: 10 },
    //         //   title: { font: { color: "#d1d5db" } },
    //         // },
    //       });
    //     }
    //   });
    // }, 1); // bumped to 500ms for safety

    const timer = setTimeout(() => {
  const plotDivs = document.querySelectorAll(
    ".pivot-dark .js-plotly-plot"
  );

  plotDivs.forEach((div) => {
    if (div && div._fullLayout) {
      div.style.background = "#1f2937";
      div.style.transition = "none";

      requestAnimationFrame(() => {
        window.Plotly?.relayout(div, {
          colorway: pastelPalette,

          paper_bgcolor: "#1f2937",
          plot_bgcolor: "#1f2937",

          font: {
            color: "#d1d5db",
            family: "sans-serif",
          },

          margin: {
            t: 30,
            b: 100,
            l: 50,
            r: 10,
          },

          // xaxis: {
          //   // gridcolor: "#374151",
          //   // linecolor: "#4b5563",
          //   tickfont: {
          //     color: "#d1d5db",
          //     size: 10,
          //   },
          // },

          // yaxis: {
          //   gridcolor: "#374151",
          //   linecolor: "#4b5563",
          //   tickfont: {
          //     color: "#d1d5db",
          //     size: 10,
          //   },
          // },
        });

        /* FORCE SVG DARK IMMEDIATELY */
        const bgRects = div.querySelectorAll(".bg");

        bgRects.forEach((bg) => {
          bg.style.fill = "#1f2937";
        });
      });
    }
  });
}, 0);
    return () => clearTimeout(timer);
  }, [filteredData, pivotState]);

  const circleOptions = useMemo(() => {
    return [...new Set(formattedData.map((i) => i.circle))].map((item) => ({
      label: item,
      value: item,
    }));
  }, [formattedData]);

  const projectTypeOptions = useMemo(() => {
    return [...new Set(formattedData.map((i) => i.projectType))].map(
      (item) => ({
        label: item,
        value: item,
      }),
    );
  }, [formattedData]);

  const handleFilter = () => {
    let query = [];

    if (aging?.trim()) {
      query.push(`aging=${encodeURIComponent(aging)}`);
    }

    const queryString = query.join("&");

    dispatch(GraphActions.getGraphUnbilled(true, queryString));
  };

  const handleClear = () => {
    setAging("");
    //   setFilteredData(formattedData);
    dispatch(GraphActions.getGraphUnbilled());
  };

  const finalUnbilled = graphData?.[0]?.finalUnbilled || 0;

  return (
    <div className="bg-transparent border-[1.5px] border-pcol rounded-md h-40% p-1">
      <div className="text-center mb-1">
        <h1 className="text-[#f4d3a8] font-bold text-lg underline">
          Unbilled Status Dashboard
        </h1>
      </div>

      {/* FILTERS */}

      <div className="flex flex-wrap items-center justify-between gap-4 mb-1">
        <div className="flex flex-wrap gap-3 flex-1">
          <div className="min-w-[220px]">
            <label className="text-[#f4d3a8] text-sm font-bold mb-1 block">
              Aging
            </label>

            <select
              value={aging}
              onChange={(e) => setAging(e.target.value)}
              className="w-full h-6 px-1 rounded-md bg-[#111827] border border-[#4b5563] text-sm text-white outline-none"
            >
              <option value="">Select Aging</option>

              <option value="Below 90 Days">Below 90 Days</option>

              <option value="Over 90 Days">Over 90 Days</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            classes="w-12 h-7 text-white flex justify-center items-center bg-transparent border-solid border-[#64676d] border-2 rounded-md"
            onClick={handleFilter}
            icon={<UilSearch size="18" className="text-[#f4d3a8]" />}
          />

          <Button
            classes="w-12 h-7 text-white flex justify-center items-center bg-transparent border-solid border-[#64676d] border-2 rounded-md"
            onClick={handleClear}
            icon={<UilRefresh size="18" className="text-[#f4d3a8]" />}
          />
        </div>
      </div>

      <div className="bg-[#2f3743] rounded-md border border-[#4b5563] p-1 mb-1 overflow-auto max-w-[1000px] mx-auto">
        <div className="pivot-dark bg-[#2f3743] scale-[0.90] origin-top-left">
          <PivotTableUI
            data={filteredData}
            plotlyOptions={{
              yaxis: {
                ticksuffix: " L",
              },

              annotations: [
                {
                  text: `Unbilled:- ₹${(finalUnbilled / 100000).toFixed(2)} L`,
                  x: 0.8,
                  y: 1.1,
                  xref: "paper",
                  yref: "paper",
                  showarrow: false,
                  font: {
                    size: 15,
                    color: "#ffffff",
                  },
                },
              ],

              margin: {
                t: 100,
              },
              
            }}
            // onChange={(s) => setPivotState(s)}
            onChange={(s) => {
              const rows = [...(s.rows || [])];
              let cols = [...(s.cols || [])];

              cols.forEach((col) => {
                const rowIndex = rows.indexOf(col);
                if (rowIndex !== -1) rows.splice(rowIndex, 1);
              });

              setPivotState({
                ...s,
                rows,
                cols,
                // rowOrder: s.rowOrder || "value_a_to_z",
                // colOrder: s.colOrder || "value_a_to_z",
                rowOrder: s.rowOrder || "value_z_to_a",
colOrder: s.colOrder || "value_z_to_a",
              });
            }}
            renderers={{
              ...PlotlyRenderers,
              ...TableRenderers,
            }}
            unusedOrientationCutoff={Infinity}
            {...pivotState}
          />
        </div>
      </div>
    </div>
  );
};

export default UnbilledDashboard;

"use client";

import * as echarts from "echarts";
import { useEffect } from "react";

const FinanceIncomeSourcesChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById("income_source");
    if (chartDom) {
      const myChart = echarts.init(chartDom);

      const option = {
        legend: {
          bottom: "0",
          left: "center",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            fontSize: 12,
            color: "#fff", // Adjust this for dark/light theme
          },
        },
        toolbox: {
          show: false,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        color: ["#3584FC", "#FD5812", "#3584FC", "#FD5812"],
        series: [
          {
            name: "Income Source",
            type: "pie",
            radius: [15, 70],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "Product Sales" },
              { value: 15, name: "Investments" },
              { value: 35, name: "Salary" },
              { value: 20, name: "Consulting" },
            ],
          },
        ],
      };

      myChart.setOption(option);

      // Cleanup the chart instance on unmount
      return () => {
        myChart.dispose();
      };
    }
  }, []);

  return (
    <>
      <div id="income_source" style={{ width: "100%", height: "250px" }} />
    </>
  );
};

export default FinanceIncomeSourcesChart;

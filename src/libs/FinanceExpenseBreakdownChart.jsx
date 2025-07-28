"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const FinanceExpenseBreakdownChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstanceRef.current = echarts.init(chartRef.current);

      const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: 0,
          left: "center",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            fontSize: 12,
            color: "#64748B",
          },
        },
        color: ["#AD63F6", "#BF85FB", "#D7B5FD", "#E9D5FF"],
        series: [
          {
            name: "Expense Breakdown",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Marketing" },
              { value: 735, name: "Sales" },
              { value: 580, name: "Salaries" },
              { value: 484, name: "Miscellaneous" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      chartInstanceRef.current.setOption(option);

      const handleResize = () => {
        chartInstanceRef.current?.resize();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chartInstanceRef.current?.dispose();
      };
    }
  }, []);

  return (
    <div
      ref={chartRef}
      className="!w-full !h-full"
      aria-label="Finance Expense Breakdown Chart"
      role="img"
    />
  );
};

export default FinanceExpenseBreakdownChart;

"use client";

import { useEffect, useState } from "react";

const FinanceNetProfitChart = () => {
  const [Chart, setChart] = useState();
  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const series = [
    {
      name: "Net Profit",
      data: [30, 70, 80, 95, 90, 20, 40],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#37D80A"],
    plotOptions: {
      bar: {
        columnWidth: "30%",
        rangeBarOverlap: false,
        isFunnel3d: false,
        colors: {
          ranges: [
            {
              from: 0,
              to: 0,
              color: undefined,
            },
          ],
          backgroundBarColors: ["#37D80A"],
          backgroundBarOpacity: 0.2,
          backgroundBarRadius: 0,
        },
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
      show: true,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: true,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      max: 100,
      min: 0,
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
        formatter: (val) => {
          return "$" + val + "";
        },
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    tooltip: {
      y: {
        formatter: (val) => {
          return "$" + val + "K";
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        width: 9,
        height: 9,
        offsetX: -2,
        offsetY: -0.5,
        radius: 2,
        shape: "diamond",
      },
    },
  };

  return (
    <>
      {Chart && (
        <Chart options={options} series={series} type="bar" className="!h-full" />
      )}
    </>
  );
};

export default FinanceNetProfitChart;

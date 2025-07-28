
import React, { useEffect, useState } from "react";

const FinanceStatisticsChart = () => {
    
  const [Chart, setChart] = useState();
  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const series = [
    {
      name: "Income",
      data: [40, 60, 50, 40, 45, 38, 42, 35, 45],
    },
    {
      name: "Expenses",
      data: [60, 80, 90, 80, 60, 70, 60, 90, 60],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#9CAAFF", "#605DFF"],
    plotOptions: {
      bar: {
        columnWidth: "60%",
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
      width: 4,
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
      tickAmount: 6,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val + "";
        },
        style: {
          colors: "#64748B",
          fontSize: "12px",
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
        formatter: function (val) {
          return "$" + val + "k";
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "12px",
      horizontalAlign: "center",
      fontFamily: "Inter",
      offsetY: 10,
      itemMargin: {
        horizontal: 8,
        vertical: 10,
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
              <Chart
                options={options}
                series={series}
                type="bar"
                height={360}
              />
            )}
    </>
  )
}

export default FinanceStatisticsChart

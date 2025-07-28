import { useEffect, useState } from "react";

const CrmSalesReportChart = () => {
  const [Chart, setChart] = useState();
  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const series = [
    {
      name: "Online",
      data: [45, 23, 62, 60, 110, 100, 135],
    },
    {
      name: "Offline",
      data: [20, 58, 24, 50, 40, 70, 97],
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },

    dataLabels: {
      enabled: false,
    },
    colors: ["#605DFF", "#FE7A36"],
    stroke: {
      curve: "straight",
      width: 2,
    },
    grid: {
      show: true,
      borderColor: "#F6F7F9",
    },
    markers: {
      size: 4,
      strokeWidth: 0,
      shape: "diamond",
      hover: {
        size: 5,
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTicks: {
        show: false,
        color: "#B1BBC8",
      },
      axisBorder: {
        show: false,
        color: "#B1BBC8",
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
      max: 150,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val + "k";
        },
        style: {
          colors: "#64748B",
          fontSize: "12px",
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
      },
    },
  };

  return (
    <>
      {Chart && (
        <Chart options={options} series={series} type="line" height={374} />
      )}
    </>
  );
};

export default CrmSalesReportChart;

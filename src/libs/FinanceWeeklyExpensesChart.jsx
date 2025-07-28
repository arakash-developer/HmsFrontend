import { useEffect, useState } from "react";

const FinanceWeeklyExpensesChart = () => {
  const [Chart, setChart] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const series = [
    {
      name: "Weekly Expenses",
      data: [0, 25, 40, 50, 80, 70, 140],
    },
  ];

  const options = {
    chart: {
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    colors: ["#AD63F6", "#605DFF"],
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTicks: { show: false },
      axisBorder: { show: false },
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
      max: 140,
      min: 0,
      labels: {
        formatter: (val) => `$${val}`,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      opposite: true,
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontSize: "12px",
      itemMargin: {
        horizontal: 8,
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
    <div className="w-full h-[130px]">
      {Chart && (
        <Chart
          options={options}
          series={series}
          type="area"
          height={130}
        />
      )}
    </div>
  );
};

export default FinanceWeeklyExpensesChart;

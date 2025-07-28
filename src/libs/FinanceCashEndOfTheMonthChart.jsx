import * as echarts from "echarts";
import { useEffect, useRef, useMemo } from "react";

const CashAtEndOfTheMonth = () => {
  const chartRef = useRef(null);

  const chartOptions = useMemo(() => ({
    tooltip: {
      trigger: "item",
      formatter: "{b}: {d}%", // Show label + percent
    },
    legend: {
      bottom: "0",
      left: "center",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        fontSize: 12,
        color: "#64748B",
      },
    },
    color: ["#37D80A", "#FD5812", "#605DFF"],
    series: [
      {
        name: "Cash at End of the Month",
        type: "pie",
        radius: ["40%", "100%"],
        center: ["50%", "60%"],
        startAngle: 180,
        endAngle: 360,
        data: [
          { value: 1048, name: "Operations" },
          { value: 735, name: "Marketing" },
          { value: 580, name: "Savings" },
        ],
        label: {
          show: true,
          position: "inside",
          formatter: "{d}%",
          fontSize: 12,
          color: "#fff",
        },
        labelLine: {
          show: false,
        },
      },
    ],
  }), []);

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.init(chartRef.current);
    myChart.setOption(chartOptions);

    const handleResize = () => {
      myChart.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      myChart.dispose();
    };
  }, [chartOptions]);

  return (
    <div
      ref={chartRef}
      className="!w-full !h-full"
    />
  );
};

export default CashAtEndOfTheMonth;

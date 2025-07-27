import BlockSuspense from "@/components/suspense/BlockSuspense";
import { lazy, Suspense } from "react";

const Chart = lazy(() => import("react-apexcharts"));
const CrmBalanceOverviewChart = () => {
  // const [Chart, setChart] = useState();
  // useEffect(() => {
  //   import("react-apexcharts").then((mod) => {
  //     setChart(() => mod.default);
  //   });
  // }, []);

  const series = [
    {
      name: "Revenue",
      data: [5, 12, 20, 23, 25, 30, 40, 45, 50, 70, 65, 80],
    },
    {
      name: "Expenses",
      data: [15, 20, 30, 30, 35, 45, 60, 70, 80, 85, 95, 120],
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

    colors: ["#AD63F6", "#605DFF"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
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
      <Suspense fallback={<BlockSuspense />}>
        {Chart && (
          <Chart options={options} series={series} type="area" height={350} />
        )}
      </Suspense>
    </>
  );
};

export default CrmBalanceOverviewChart;

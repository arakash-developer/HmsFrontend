import Table from "@/global/Table";
import { useParams } from "react-router";

const OutdoorReport = () => {
  const { backendDate } = useParams();
  return (
    <>
      <Table
        Breadcrumbname="Outdoor Income Report"
        BreadcrumbPath={{
          one: "Dasboard",
          two: "Report",
          three: "Outdoor",
        }}
        paginatedataurl={`api/report?date=${backendDate}&`}
        page={1}
        limit={30}
        searchdataurl={`/api/patientregistration/patientid/`}
      />
    </>
  );
};

export default OutdoorReport;

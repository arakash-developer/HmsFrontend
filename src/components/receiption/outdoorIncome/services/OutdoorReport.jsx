import Table from "@/global/Table";
import useDatePicker from "@/hooks/useDatePicker";
import { useParams } from "react-router";

const OutdoorReport = () => {
  const { backendDate } = useParams();
  const { convertIsoToUi } = useDatePicker("Asia/Dhaka");
  return (
    <>
      <Table
        Breadcrumbname="Outdoor Income Report"
        BreadcrumbPath={{
          one: "Dasboard",
          two: "Report",
          three: "Outdoor",
        }}
        uidate={convertIsoToUi(backendDate)}
        paginatedataurl={`api/report?date=${backendDate}&`}
        page={1}
        limit={30}
        searchdataurl={`/api/patientregistration/patientid/`}
      />
    </>
  );
};

export default OutdoorReport;

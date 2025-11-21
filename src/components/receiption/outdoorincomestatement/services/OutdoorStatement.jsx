import Table from "@/global/Table";
import useDatePicker from "@/hooks/useDatePicker";
import { useParams } from "react-router";

const OutdoorStatement = () => {
  const { startingBackendDate, endingBackendDate } = useParams();
  const { convertIsoToUi } = useDatePicker("Asia/Dhaka");
  return (
    <>
      <Table
        Breadcrumbname="Outdoor Income Report"
        BreadcrumbPath={{
          one: "Dasboard",
          two: "Report",
          three: "Outdoor Statement",
        }}
        uidate={
          convertIsoToUi(startingBackendDate) +
          " To " +
          convertIsoToUi(endingBackendDate)
        }
        paginatedataurl={`api/outdoorincomestatement?startDate=${startingBackendDate}&endDate=${endingBackendDate}&`}
        limit={10}
        page={1}
        searchdataurl={`/api/patientregistration/patientid/`}
      />
    </>
  );
};

export default OutdoorStatement;

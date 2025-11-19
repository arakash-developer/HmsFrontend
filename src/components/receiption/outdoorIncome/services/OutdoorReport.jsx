import useCrudPaginated from "@/hooks/useCrudPaginated";
import PatientDetailsPrint from "@/pdf/PatientDetailsPrint";

const OutdoorReport = () => {
  const { data: patientData } = useCrudPaginated(
    "api/patientregistration",
    1,
    300
  );
  return (
    <>
      <PatientDetailsPrint patientData={patientData} back="/receiption/outdoor-income" />
    </>
  );
};

export default OutdoorReport;

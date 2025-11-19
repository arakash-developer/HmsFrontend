import useCrudPaginated from "@/hooks/useCrudPaginated";
import PatientDetailsPrint from "@/pdf/PatientDetailsPrint";

const Patientinfo = () => {
  const { data: patientData } = useCrudPaginated(
    "api/patientregistration",
    1,
    300
  );
  return (
    <>
      <PatientDetailsPrint patientData={patientData} />
    </>
  );
};

export default Patientinfo;

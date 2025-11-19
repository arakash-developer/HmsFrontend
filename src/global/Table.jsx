import useCrudPaginated from "@/hooks/useCrudPaginated";
import useSearch from "@/hooks/useSearch";
import { useState } from "react";
import Breadcrumb from "./services/Breadcrumb";
import DeletePopup from "./services/DeletePopup";
import EditPopup from "./services/EditPopup";
import TableBody from "./services/TableBody";
import TableHeader from "./services/TableHeader";

const Table = ({
  paginatedataurl,
  searchdataurl,
  page,
  limit,
  Breadcrumbname,
  BreadcrumbPath,
}) => {
  let [deletepopup, setDeletePopup] = useState(false);
  let [editpopup, setEditPopup] = useState(false);

  const [form, setForm] = useState({
    date: "",
    patientName: "",
    sex: "",
    refdoctor: "",
    age: "",
    phone: "",
  });
  const [patientId, setPatientId] = useState(null);

  const {
    data: patientData,
    page: patientpage,
    setPage,
    limit: patientlimit,
    setLimit,

    refetch: patientrefetch,
    create: patientcreate,
    update: patientupdate,
    isLoading: patientisLoading,
    remove: patientremove,
  } = useCrudPaginated(paginatedataurl, page, limit);

  const { data: patientSearch } = useSearch(
    patientId ? `${searchdataurl}${patientId}` : null,
    300 // debounce in ms
  );

  // Decide which data to display
  const displayedData = patientId
    ? patientSearch
      ? [patientSearch]
      : []
    : patientData || [];

  console.log(patientSearch);

  let addcountryhandler = () => {
    setPopup(true);
  };

  return (
    <>
      {/* <!-- Main Content --> */}
      <Breadcrumb
        Breadcrumbname={Breadcrumbname}
        BreadcrumbPath={BreadcrumbPath}
      />

      {/* <!-- To Do List --> */}
      <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md ">
        <TableHeader
          patientId={patientId}
          setPatientId={setPatientId}
          addcountryhandler={addcountryhandler}
          setPage={setPage}
          page={page}
          setLimit={setLimit}
          patientData={patientData}
        />
        <TableBody
          patientData={displayedData}
          page={page}
          patientisLoading={patientisLoading}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          patientrefetch={patientrefetch}
        />
      </div>

      <div class="grow"></div>

      {editpopup && <EditPopup />}
      {deletepopup && <DeletePopup />}
    </>
  );
};

export default Table;

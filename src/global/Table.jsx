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
  page: initialPage,
  limit,
  Breadcrumbname,
  BreadcrumbPath,
  uidate,
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
  const [patientId, setPatientId] = useState("");
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Get all data and implement client-side pagination
  const {
    data: allPatientData,
    refetch: patientrefetch,
    isLoading: patientisLoading,
  } = useCrudPaginated(paginatedataurl, 1, "all");

  const { data: patientSearch } = useSearch(
    patientId ? `${searchdataurl}${patientId}` : null,
    300
  );

  // Client-side pagination logic
  const getPaginatedData = (data, page, limit) => {
    if (!data || data.length === 0) return [];
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return data.slice(startIndex, endIndex);
  };

  // Calculate pagination
  const totalPages = allPatientData
    ? Math.ceil(allPatientData.length / limit)
    : 0;
  const paginatedData = getPaginatedData(allPatientData, currentPage, limit);

  // Decide which data to display
  const displayedData =
    patientId && patientId.trim()
      ? patientSearch
        ? [patientSearch]
        : []
      : paginatedData || [];

  // Debug logs
  console.log("All Patient Data:", allPatientData?.length, "items");
  console.log("Current Page:", currentPage, "Limit:", limit);
  console.log("Paginated Data:", paginatedData?.length, "items");
  console.log("Total Pages:", totalPages);
  console.log("Displayed Data:", displayedData?.length, "items");

  let addcountryhandler = () => {
    setPopup(true);
  };

  // Handle pagination
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      console.log("Changing page to:", newPage);
      setCurrentPage(newPage);
    }
  };

  // Handle search input change and reset pagination
  const handlePatientIdChange = (value) => {
    setPatientId(value);
    if (!value.trim()) {
      setCurrentPage(1);
    }
  };

  return (
    <>
      {/* <!-- Main Content --> */}
      <Breadcrumb
        uidate={uidate}
        Breadcrumbname={Breadcrumbname}
        BreadcrumbPath={BreadcrumbPath}
      />

      {/* <!-- To Do List --> */}
      <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md ">
        <TableHeader
          patientId={patientId}
          setPatientId={handlePatientIdChange}
          uidate={uidate}
          addcountryhandler={addcountryhandler}
          setPage={handlePageChange}
          page={currentPage}
          patientData={allPatientData}
          isSearchActive={patientId && patientId.trim()}
          totalPages={totalPages}
        />
        <TableBody
          patientData={displayedData}
          page={currentPage}
          setPage={handlePageChange}
          uidate={uidate}
          patientisLoading={patientisLoading}
          patientrefetch={patientrefetch}
          isSearchActive={patientId && patientId.trim()}
          totalPages={totalPages}
        />
      </div>

      <div class="grow"></div>

      {editpopup && <EditPopup />}
      {deletepopup && <DeletePopup />}
    </>
  );
};

export default Table;

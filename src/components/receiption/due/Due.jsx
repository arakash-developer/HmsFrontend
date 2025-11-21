import useCrud from "@/hooks/useCrud";
import useCrudPaginated from "@/hooks/useCrudPaginated";
import useSearch from "@/hooks/useSearch";
import { useState } from "react";
import Breadcrumb from "./services/Breadcrumb";
import DueCreatePopup from "./services/DueCreatePopup";
import DueHeader from "./services/DueHeader";
import DueTables from "./services/DueTables";

const Due = () => {
  let [popup, setPopup] = useState(false);
  let [deletepopup, setDeletePopup] = useState(false);
  let [editpopup, setEditPopup] = useState(false);
  const [date, setDate] = useState(new Date());

  const [selectedcountryId, setSelectedcountryId] = useState(""); // state to store selected ID
  let [qualification, setQualification] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [editInfo, setEditInfo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTest, setSelectedTest] = useState("");
  const [testList, setTestList] = useState([]);
  const [testIds, setTestIds] = useState([]);
  const { data, refetch, update, remove } = useCrud("api/category");
  const { data: testData } = useCrud("api/test");
  const { data: doctorData } = useCrud("api/doctor");
  // const { data: patientData } = useCrud("api/patientregistration");
  const [patientId, setPatientId] = useState(null);

  const {
    data: patientData,
    page,
    setPage,
    limit,
    setLimit,
    refetch: patientrefetch,
    create: patientcreate,
    update: patientupdate,
    isLoading: patientisLoading,
    remove: patientremove,
  } = useCrudPaginated("api/patientregistration", 1, 30);

  const { data: patientSearch } = useSearch(
    patientId ? `/api/patientregistration/patientid/${patientId}` : null,
    300 // debounce in ms
  );

  // Decide which data to display
  const displayedData = patientId
    ? patientSearch
      ? [patientSearch]
      : []
    : patientData || [];

  console.log(patientSearch);

  // Filter tests based on selected category
  const filteredTests = testData?.filter(
    (t) => t.category?._id === selectedCategory
  );

  let addcountryhandler = () => {
    setPopup(true);
  };
  let cancelcountrypopup = () => {
    setPopup(false);
  };

  const handleDeletepopup = (id) => {
    setDeletePopup(true);
    setDeleteId(id);
  };
  const cancelDeletepopup = () => {
    setDeletePopup(false);
  };
  const handledeletecountry = () => {
    remove.mutate(deleteId, { onSuccess: () => console.log("Deleted! ✅") });
    setDeletePopup(false);
  };
  let handleEditpopup = (info) => {
    setEditPopup(true);
    setEditInfo(info);
    setSelectedcountryId(info.country); // Set the country ID
    setQualification(info.qualification); // Set the qualification value
    setForm({
      doctorname: info.doctorname,
      doctortitle: info.doctortitle,
      mobile: info.mobile,
      qualification: info.qualification,
      speciality: info.speciality,
      country: info.country,
      phone: info.phone,
      email: info.email,
    });
  };
  let handleEditpopupclose = () => {
    setEditPopup(false);
  };
  let handleedit = () => {
    update.mutate(
      {
        id: editInfo.id,
        body: {
          doctorname: form.doctorname,
          doctortitle: form.doctortitle,
          qualification: qualification,
          speciality: form.speciality,
          country: selectedcountryId,
          phone: form.phone,
          mobile: form.mobile,
          email: form.email,
        },
      },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
    setEditPopup(false);
    setForm({
      doctorname: "",
      doctortitle: "",
      qualification: "",
      speciality: "",
      country: "",
      phone: "",
      mobile: "",
      email: "",
    });
    setSelectedcountryId("");
    setQualification("");
  };
  return (
    <>
      {/* <!-- Main Content --> */}
      <Breadcrumb />

      {/* <!-- To Do List --> */}
      <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md ">
        <DueHeader
          patientId={patientId}
          setPatientId={setPatientId}
          addcountryhandler={addcountryhandler}
          setPage={setPage}
          page={page}
          setLimit={setLimit}
        />
        <DueTables
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

      {/* <!-- End Main Content --> */}

      {/* <!-- Add New Popup --> */}
      {popup && (
        <DueCreatePopup
          patientrefetch={patientrefetch}
          data={data}
          patientId={patientId}
          patientcreate={patientcreate}
          selectedCategory={selectedCategory}
          date={date}
          setTestIds={setTestIds}
          patientSearchdata={patientSearch}
          testIds={testIds}
          setSelectedCategory={setSelectedCategory}
          cancelcountrypopup={cancelcountrypopup}
          setDate={setDate}
          setPatientId={setPatientId}
          doctorData={doctorData}
          setPopup={setPopup}
          testList={testList}
          setTestList={setTestList}
          qualification={qualification}
          selectedTest={selectedTest}
          setQualification={setQualification}
          setSelectedTest={setSelectedTest}
          filteredTests={filteredTests}
          handleDeletepopup={handleDeletepopup}
        />
      )}
    </>
  );
};

export default Due;

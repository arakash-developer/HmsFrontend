import useCrud from "@/hooks/useCrud";
import { useState } from "react";
import Flatpickr from "react-flatpickr";

const PatientReg = () => {
  let [popup, setPopup] = useState(false);
  let [deletepopup, setDeletePopup] = useState(false);
  let [editpopup, setEditPopup] = useState(false);
  const [date, setDate] = useState(new Date());

  const [form, setForm] = useState({
    doctorname: "",
    doctortitle: "",
    qualification: "",
    speciality: "",
    country: "",
    phone: "",
    mobile: "",
    email: "",
  });
  const [selectedcountryId, setSelectedcountryId] = useState(""); // state to store selected ID
  let [qualification, setQualification] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [editInfo, setEditInfo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTest, setSelectedTest] = useState("");
  const { data, refetch, update, remove } = useCrud("api/category");
  const { data: testData } = useCrud("api/test");
  const { data: doctorData } = useCrud("api/doctor");

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
      {/* <!-- Breadcrumb --> */}
      <div class="mb-[25px] md:flex items-center justify-between">
        <h5 class="mb-0">Doctor</h5>
        <ol class="breadcrumb mt-[12px] md:mt-0">
          <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
            <a
              href="index.html"
              class="inline-block relative ltr:pl-[22px] rtl:pr-[22px] transition-all hover:text-primary-500"
            >
              <i class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 !text-lg -mt-px text-primary-500 top-1/2 -translate-y-1/2">
                home
              </i>
              Dashboard
            </a>
          </li>
          <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
            Setup
          </li>
          <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
            Doctor
          </li>
        </ol>
      </div>

      {/* <!-- To Do List --> */}
      <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md ">
        <div class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between ">
          <div class="trezo-card-title">
            <form class="relative sm:w-[265px]">
              <label class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2">
                <i class="material-symbols-outlined !text-[20px]">search</i>
              </label>
              <input
                type="text"
                placeholder="Search task here....."
                class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
              />
            </form>
          </div>
          <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
            <div
              onClick={addcountryhandler}
              class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
              id="add-new-popup-toggle"
            >
              <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
                <i class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2">
                  add
                </i>
                Add New Doctor
              </span>
            </div>
          </div>
        </div>
        <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
          <div class="table-responsive overflow-x-auto overflow-y-hidden">
            <table class="w-full without-border">
              <thead class="text-black dark:text-white">
                <tr>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    <div class="form-check relative top-[2px]">
                      <input type="checkbox" class="cursor-pointer" />
                    </div>
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    SL
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Dr. Name
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Dr. Title
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Qualification
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Country
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Mobile
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="text-black dark:text-white">
                {data?.map((doctor, index) => (
                  <tr key={index}>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <div class="form-check relative top-[2px]">
                        <input type="checkbox" class="cursor-pointer" />
                      </div>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="text-gray-500 dark:text-gray-400">
                        {index + 1}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {doctor?.doctorname}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {doctor?.qualification}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {doctor?.doctortitle}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {doctor?.country?.name}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {doctor?.mobile}
                      </span>
                    </td>

                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <div class="flex items-center gap-[9px]">
                        <div
                          class="text-primary-500 leading-none custom-tooltip"
                          id="customTooltip"
                          data-text="View"
                        >
                          <i class="material-symbols-outlined !text-xl">
                            visibility
                          </i>
                        </div>
                        <div
                          class="cursor-pointer text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          id="customTooltip"
                          data-text="Edit"
                          onClick={() =>
                            handleEditpopup({
                              id: doctor?._id,
                              doctorname: doctor?.doctorname,
                              doctortitle: doctor?.doctortitle,
                              mobile: doctor?.mobile,
                              qualification: doctor?.qualification,
                              speciality: doctor?.speciality,
                              country: doctor?.country,
                              phone: doctor?.phone,
                              email: doctor?.email,
                            })
                          }
                        >
                          <i class="material-symbols-outlined !text-xl">edit</i>
                        </div>
                        <div
                          class="text-danger-500 leading-none custom-tooltip cursor-pointer"
                          id="customTooltip"
                          data-text="Delete"
                          onClick={() => handleDeletepopup(doctor?._id)}
                        >
                          <i class="material-symbols-outlined !text-xl">
                            delete
                          </i>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="mt-5 px-[20px] py-[12px] md:py-[14px] rounded-b-md border-l border-r border-t  border-gray-100 dark:border-[#172036] sm:flex sm:items-center justify-between">
            <p class="mb-0 text-sm">Showing 5 of 36 results</p>
            <ol class="mt-[10px] sm:mt-0">
              <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                <a
                  href="javascript:void(0);"
                  class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                >
                  <span class="opacity-0">0</span>
                  <i class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                    chevron_left
                  </i>
                </a>
              </li>
              <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                <a
                  href="javascript:void(0);"
                  class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-primary-500 bg-primary-500 text-white"
                >
                  1
                </a>
              </li>
              <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                <a
                  href="javascript:void(0);"
                  class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                >
                  2
                </a>
              </li>
              <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                <a
                  href="javascript:void(0);"
                  class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                >
                  3
                </a>
              </li>
              <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                <a
                  href="javascript:void(0);"
                  class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                >
                  4
                </a>
              </li>
              <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                <a
                  href="javascript:void(0);"
                  class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                >
                  <span class="opacity-0">0</span>
                  <i class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                    chevron_right
                  </i>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="grow"></div>

      {/* <!-- End Main Content --> */}

      {/* <!-- Add New Popup --> */}
      {popup && (
        <div
          class="z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px] backdrop-blur-[0.5px] add-new-popups"
          id="add-new-popup"
        >
          <div class="popup-dialog flex transition-all max-w-[90vw] min-h-full items-center mx-auto">
            <div class="trezo-card w-full bg-gray-50 dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
              <div class="trezo-card-header bg-gray-50 dark:bg-[#15203c] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] py-3 text-center px-[20px] md:px-[25px] rounded-t-md">
                <div class="trezo-card-title text-center">
                  <h5 class="mb-0 text-center">Patient Test & Create Bill</h5>
                </div>
                <div class="trezo-card-subtitle">
                  <div
                    onClick={cancelcountrypopup}
                    class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
                    id="add-new-popup-toggle"
                  >
                    <i class="ri-close-fill"></i>
                  </div>
                </div>
              </div>
              <fieldset class="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                  Personal Information
                </legend>
                <form className="">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-[6px] md:gap-y-[6px] gap-x-5">
                    <div class="sm:col-span-1 flex items-center gap-x-4">
                      <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                        Patient Id
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          setForm({ ...form, doctorname: e.target.value })
                        }
                        value={form.doctorname}
                        class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                      />
                    </div>
                    <div class="sm:col-span-1 flex items-center gap-x-4">
                      <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[6%]">
                        Date
                      </label>
                      <div className="relative w-full">
                        <Flatpickr
                          value={date}
                          onChange={(selectedDates) =>
                            setDate(selectedDates[0])
                          }
                          options={{ dateFormat: "d-m-Y" }} // day-month-year
                          className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-4 pr-10 w-full outline-none placeholder-gray-500 dark:placeholder-[#fff]"
                        />

                        <i className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 pointer-events-none material-symbols-outlined !text-md">
                          calendar_month
                        </i>
                      </div>
                    </div>

                    <div class="sm:col-span-1 flex items-center gap-x-4">
                      <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                        Patient Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          setForm({ ...form, doctortitle: e.target.value })
                        }
                        value={form.doctortitle}
                        class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                      />
                    </div>
                    <div class="sm:col-span-1 flex items-center gap-x-4">
                      <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[6%]">
                        Sex
                      </label>
                      <input
                        type="number"
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        value={form.phone}
                        class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                      />
                    </div>
                    <div class="sm:col-span-1 flex items-center gap-x-4">
                      <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                        Ref. Dr.
                      </label>
                      <select
                        class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[14px] block !w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                        onChange={(e) => setQualification(e.target.value)}
                        value={qualification}
                      >
                        <option>Select Doctor</option>
                        {doctorData?.map((doc) => (
                          <option key={doc._id} value={doc._id}>
                            {doc.doctorname}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div class="sm:col-span-1 flex items-center gap-x-4">
                      <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[6%]">
                        Age
                      </label>
                      <input
                        type="number"
                        onChange={(e) =>
                          setForm({ ...form, mobile: e.target.value })
                        }
                        value={form.mobile}
                        class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                      />
                    </div>
                    <div class="sm:col-span-1 flex items-center gap-x-4">
                      <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                        Phone
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          setForm({ ...form, speciality: e.target.value })
                        }
                        value={form.speciality}
                        class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                      />
                    </div>
                  </div>
                </form>
              </fieldset>
              <fieldset class="mt-2 trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                  Test Information
                </legend>
                <form className="">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-[6px] md:gap-y-[6px] gap-x-5">
                    <div className="sm:col-span-1 flex flex-col gap-y-2">
                      <div class="flex items-center gap-x-4">
                        <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                          Test Category
                        </label>
                        <select
                          class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[14px] block !w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                          value={selectedCategory}
                          onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            setSelectedTest(""); // reset test when category changes
                          }}
                        >
                          <option>Select Country</option>
                          {data?.map((dept) => (
                            <option key={dept._id} value={dept._id}>
                              {dept.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="flex items-center gap-x-4">
                        <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                          Test Name
                        </label>
                        <select
                          class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[14px] block !w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                          onChange={(e) => setSelectedTest(e.target.value)}
                          disabled={!selectedCategory}
                        >
                          <option>Select Country</option>
                          {filteredTests?.map((dept) => (
                            <option key={dept._id} value={dept._id}>
                              {dept.testname}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="mt-2 px-4 trezo-card-content -mx-[20px] md:-mx-[25px]">
                        <div class="table-responsive overflow-x-auto overflow-y-hidden">
                          <table class="w-full without-border">
                            <thead class="text-black dark:text-white">
                              <tr>
                                <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                  SL
                                </th>
                                <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                  Procedure Name
                                </th>
                                <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                  Procedure Charge
                                </th>
                                <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody class="text-black dark:text-white">
                              {data?.map((doctor, index) => (
                                <tr key={index}>
                                  <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                    <span class="text-gray-500 dark:text-gray-400">
                                      {index + 1}
                                    </span>
                                  </td>
                                  <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                    <span class="block font-medium text-gray-500 dark:text-gray-400">
                                      {doctor?.doctorname}
                                    </span>
                                  </td>
                                  <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                    <span class="block font-medium text-gray-500 dark:text-gray-400">
                                      {doctor?.qualification}
                                    </span>
                                  </td>

                                  <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                    <div class="flex items-center gap-[9px]">
                                      <div
                                        class="text-danger-500 leading-none custom-tooltip cursor-pointer"
                                        id="customTooltip"
                                        data-text="Delete"
                                        onClick={() =>
                                          handleDeletepopup(doctor?._id)
                                        }
                                      >
                                        <i class="material-symbols-outlined !text-md">
                                          delete
                                        </i>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div class="sm:col-span-1">
                      <div className="mb-1 flex items-center gap-x-2">
                        <div class="font-medium whitespace-nowrap">
                          <div class="form-check relative top-[2px]">
                            <input type="checkbox" class="cursor-pointer" />
                          </div>
                        </div>
                        <p htmlFor="" className="mb-3">
                          Agree Calculation ?
                        </p>
                      </div>
                      <table class="w-full border-collapse border border-gray-400">
                        <thead>
                          <tr>
                            <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                              Department
                            </th>
                            <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                              Total
                            </th>
                            <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                              Discount (Editable)
                            </th>
                            <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                              Discounted
                            </th>
                            <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                              Paid
                            </th>

                            <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                              Due
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              Pathology
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                            <td class="border border-gray-400 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              <input
                                type="number"
                                placeholder="0"
                                class="bg-primary-200 placeholder:text-[#000] text-xs pl-1 w-full block text-[#000] outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
                              />
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                          </tr>
                          <tr>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              X-Ray| ECG
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                            <td class="border border-gray-400 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              <input
                                type="number"
                                placeholder="0"
                                class="bg-primary-200 placeholder:text-[#000] text-xs pl-1 w-full block text-[#000] outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
                              />
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                          </tr>
                          <tr>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              Ultra-Sono
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                            <td class="border border-gray-400 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              <input
                                type="number"
                                placeholder="0"
                                class="bg-primary-200 placeholder:text-[#000] text-xs pl-1 w-full block text-[#000] outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
                              />
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                            <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                              1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="date and timer mt-3 flex gap-x-2">
                        <div class="w-full">
                          <label class="mb-[2px] text-black dark:text-white font-medium block">
                            Delevery Date :
                          </label>
                          <div className="relative w-full">
                            <Flatpickr
                              value={date}
                              onChange={(selectedDates) =>
                                setDate(selectedDates[0])
                              }
                              options={{ dateFormat: "d-m-Y" }} // day-month-year
                              className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-4 pr-10 w-full outline-none placeholder-gray-500 dark:placeholder-[#fff]"
                            />

                            <i className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 pointer-events-none material-symbols-outlined !text-md">
                              calendar_month
                            </i>
                          </div>
                        </div>
                        <div class="w-full">
                          <label class="mb-[2px] text-black dark:text-white font-medium block">
                            Delevery Time :
                          </label>
                          <input
                            type="text"
                            onChange={(e) =>
                              setForm({ ...form, speciality: e.target.value })
                            }
                            value={form.speciality}
                            class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                          />
                        </div>
                      </div>
                      <div className="lastcalculation mt-4">
                        <div class="w-full max-w-md ml-auto rounded text-black dark:text-white font-medium">
                          <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                            <span class="text-right">Total Charge</span>
                            <span class="text-center w-4">=</span>
                            <span class="text-right">0</span>
                          </div>

                          <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                            <span class="text-right">Discount</span>
                            <span class="text-center w-4">=</span>
                            <span class="text-right">0</span>
                          </div>

                          <hr class="border-white/40" />

                          <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                            <span class="text-right">Discounted Amount</span>
                            <span class="text-center w-4">=</span>
                            <span class="text-right">0</span>
                          </div>

                          <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                            <span class="text-right">Paid</span>
                            <span class="text-center w-4">=</span>
                            <input
                              type="number"
                              class="!w-full px-2 py-1 bg-yellow-100 text-black border border-gray-400 rounded text-right"
                              placeholder="0"
                            />
                          </div>

                          <hr class="border-white/40" />

                          <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                            <span class="text-right">Due Amount</span>
                            <span class="text-center w-4">=</span>
                            <span class="text-right">0</span>
                          </div>

                          <div class="flex justify-end gap-x-4 pt-4">
                            <button class="bg-white text-black px-6 py-2 rounded border border-gray-300 hover:bg-gray-100">
                              Close
                            </button>
                            <button class="bg-white text-black px-6 py-2 rounded border border-gray-300 hover:bg-gray-100">
                              New
                            </button>
                            <button class="bg-white text-black px-6 py-2 rounded border border-gray-300 hover:bg-gray-100">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </fieldset>
            </div>
          </div>
        </div>
      )}

      {editpopup && (
        <div
          class="z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px] backdrop-blur-[0.5px] add-new-popups"
          id="add-new-popup"
        >
          <div class="popup-dialog flex transition-all max-w-[850px] min-h-full items-center mx-auto">
            <div class="trezo-card w-full bg-gray-50 dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
              <div class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md">
                <div class="trezo-card-title">
                  <h5 class="mb-0">Update Category</h5>
                </div>
                <div class="trezo-card-subtitle">
                  <div
                    onClick={handleEditpopupclose}
                    class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
                    id="add-new-popup-toggle"
                  >
                    <i class="ri-close-fill"></i>
                  </div>
                </div>
              </div>
              <div class="trezo-card-content">
                <form>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[25px]">
                    <div class="sm:col-span-1">
                      <label class="mb-[8px] text-black dark:text-white font-medium block">
                        Dr. Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          setForm({ ...form, doctorname: e.target.value })
                        }
                        value={form.doctorname}
                        class="h-[45px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                        placeholder="Test Name"
                      />
                    </div>
                    <div class="sm:col-span-1">
                      <label class="mb-[8px] text-black dark:text-white font-medium block">
                        Country
                      </label>
                      <select
                        class="h-[40px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[14px] block !w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                        onChange={(e) => setSelectedcountryId(e.target.value)}
                        value={form?.country}
                      >
                        <option>Select Country</option>
                      </select>
                    </div>

                    <div class="sm:col-span-1">
                      <label class="mb-[8px] text-black dark:text-white font-medium block">
                        Dr. Title
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          setForm({ ...form, doctortitle: e.target.value })
                        }
                        value={form.doctortitle}
                        class="h-[45px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                        placeholder="Unit Test"
                      />
                    </div>
                    <div class="sm:col-span-1">
                      <label class="mb-[8px] text-black dark:text-white font-medium block">
                        Phone
                      </label>
                      <input
                        type="number"
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        value={form.phone}
                        class="h-[45px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                        placeholder="Phone"
                      />
                    </div>
                    <div class="sm:col-span-1">
                      <label class="mb-[8px] text-black dark:text-white font-medium block">
                        Qualification
                      </label>
                      <select
                        class="h-[40px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[14px] block !w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                        onChange={(e) => setQualification(e.target.value)}
                        value={qualification}
                      >
                        <option>Select Qualification</option>
                        <option>Dr.</option>
                        <option>Proff.</option>
                      </select>
                    </div>

                    <div class="sm:col-span-1">
                      <label class="mb-[8px] text-black dark:text-white font-medium block">
                        Mobile
                      </label>
                      <input
                        type="number"
                        onChange={(e) =>
                          setForm({ ...form, mobile: e.target.value })
                        }
                        value={form.mobile}
                        class="h-[45px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                        placeholder="mobile"
                      />
                    </div>
                    <div class="sm:col-span-1">
                      <label class="mb-[8px] text-black dark:text-white font-medium block">
                        Speciality
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          setForm({ ...form, speciality: e.target.value })
                        }
                        value={form.speciality}
                        class="h-[45px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                        placeholder="speciality"
                      />
                    </div>
                    <div class="sm:col-span-1">
                      <label class="mb-[8px] text-black dark:text-white font-medium block">
                        Email
                      </label>
                      <input
                        type="email"
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        value={form.email}
                        class="h-[45px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
                    <div
                      class="cursor-pointer rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[10px] bg-danger-500 text-white hover:bg-danger-400"
                      id="add-new-popup-toggle"
                      onClick={handleEditpopupclose}
                    >
                      Cancel
                    </div>
                    <div
                      onClick={handleedit}
                      class="cursor-pointer inline-block bg-primary-500 text-white py-[10px] px-[26.5px] transition-all rounded-md hover:bg-primary-400"
                    >
                      <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                        <i class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                          edit
                        </i>
                        Update
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {deletepopup && (
        <div
          class="z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px] backdrop-blur-[0.5px] add-new-popups"
          id="add-new-popup"
        >
          <div class="popup-dialog flex transition-all max-w-[850px] min-h-full items-center mx-auto">
            <div class="trezo-card w-full bg-gray-50 dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
              <div class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md">
                <div class="trezo-card-title">
                  <h5 class="mb-0">Delete</h5>
                </div>
                <div class="trezo-card-subtitle">
                  <div
                    onClick={cancelDeletepopup}
                    class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500 cursor-pointer"
                    id="add-new-popup-toggle"
                  >
                    <i class="ri-close-fill"></i>
                  </div>
                </div>
              </div>
              <div class="trezo-card-content">
                <form>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[25px]">
                    <div class="sm:col-span-2">
                      <label class="mb-[10px] text-black dark:text-white font-medium block">
                        Are you sure you want to delete this Category?
                      </label>
                    </div>
                  </div>
                  <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
                    <div
                      onClick={cancelDeletepopup}
                      class="cursor-pointer inline-block bg-primary-500 text-white py-[10px] px-[26.5px] transition-all rounded-md hover:bg-primary-400 ltr:mr-[15px] rtl:ml-[15px]"
                    >
                      <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                        <i class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                          close
                        </i>
                        Close
                      </span>
                    </div>
                    <div
                      class="cursor-pointer rounded-md inline-block transition-all font-medium  px-[26.5px] py-[10px] bg-danger-500 text-white hover:bg-danger-400"
                      id="add-new-popup-toggle"
                      onClick={handledeletecountry}
                    >
                      <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                        <i class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                          delete
                        </i>
                        Delete
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatientReg;

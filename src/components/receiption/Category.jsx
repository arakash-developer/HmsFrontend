import useCrud from "@/hooks/useCrud";
import { useState } from "react";

const Category = () => {
  let [popup, setPopup] = useState(false);
  let [deletepopup, setDeletePopup] = useState(false);
  let [editpopup, setEditPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
  });
  const [selectedDeptId, setSelectedDeptId] = useState(""); // state to store selected ID
  const [deleteId, setDeleteId] = useState(null);
  const [editId, setEditId] = useState(null);
  const { data, refetch, create, update, remove } = useCrud("api/category");
  const { data: departmentData } = useCrud("api/department");

  console.log(departmentData);

  let addcountryhandler = () => {
    setPopup(true);
  };
  let cancelcountrypopup = () => {
    setPopup(false);
  };

  let addcountry = () => {
    create.mutate(
      {
        name: form.name,
        department: selectedDeptId,
      },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );

    setPopup(false);
    setForm({ name: "" });
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
    setEditId(info.id);
    setForm({ name: info.name });
  };
  let handleEditpopupclose = () => {
    setEditPopup(false);
  };
  let handleedit = () => {
    update.mutate(
      { id: editId, body: form },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
    setEditPopup(false);
    setForm({ name: "" });
  };
  return (
    <>
      {/* <!-- Main Content --> */}
      {/* <!-- Breadcrumb --> */}
      <div class="mb-[25px] md:flex items-center justify-between">
        <h5 class="mb-0">Country</h5>
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
            Apps
          </li>
          <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
            To Do List
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
                Add New Category
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
                    ID
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Category Name
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Under Department
                  </th>

                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="text-black dark:text-white">
                {data?.map((department, index) => (
                  <tr key={index}>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <div class="form-check relative top-[2px]">
                        <input type="checkbox" class="cursor-pointer" />
                      </div>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="text-gray-500 dark:text-gray-400">
                        #{index + 1}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {department.name}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {department.department.name}
                      </span>
                    </td>

                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <div class="flex items-center gap-[9px]">
                        <div
                          class="text-primary-500 leading-none custom-tooltip"
                          id="customTooltip"
                          data-text="View"
                        >
                          <i class="material-symbols-outlined !text-md">
                            visibility
                          </i>
                        </div>
                        <div
                          class="cursor-pointer text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          id="customTooltip"
                          data-text="Edit"
                          onClick={() =>
                            handleEditpopup({
                              id: department._id,
                              name: department.name,
                            })
                          }
                        >
                          <i class="material-symbols-outlined !text-md">edit</i>
                        </div>
                        <div
                          class="text-danger-500 leading-none custom-tooltip cursor-pointer"
                          id="customTooltip"
                          data-text="Delete"
                          onClick={() => handleDeletepopup(department._id)}
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

      <div class="grow"></div>

      {/* <!-- End Main Content --> */}

      {/* <!-- Add New Popup --> */}
      {popup && (
        <div
          class="z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px] backdrop-blur-[0.5px] add-new-popups"
          id="add-new-popup"
        >
          <div class="popup-dialog flex transition-all max-w-[850px] min-h-full items-center mx-auto">
            <div class="trezo-card w-full bg-gray-50 dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
              <div class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md">
                <div class="trezo-card-title">
                  <h5 class="mb-0">Add New Category</h5>
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
              <div class="trezo-card-content">
                <form>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[25px]">
                    <div class="sm:col-span-2">
                      <label class="mb-[10px] text-black dark:text-white font-medium block">
                        Select Department
                      </label>
                      <select
                        class="h-[40px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[14px] block !w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                        onChange={(e) => setSelectedDeptId(e.target.value)}
                        value={selectedDeptId}
                      >
                        {departmentData?.map((dept) => (
                          <option key={dept._id} value={dept._id}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="sm:col-span-2">
                      <label class="mb-[10px] text-black dark:text-white font-medium block">
                        Enter Category Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        value={form.name}
                        class="h-[45px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                        placeholder="Country Name"
                      />
                    </div>
                  </div>
                  <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
                    <div
                      class="cursor-pointer rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[10px] bg-danger-500 text-white hover:bg-danger-400"
                      id="add-new-popup-toggle"
                      onClick={cancelcountrypopup}
                    >
                      Cancel
                    </div>
                    <div
                      onClick={addcountry}
                      class="cursor-pointer inline-block bg-primary-500 text-white py-[10px] px-[26.5px] transition-all rounded-md hover:bg-primary-400"
                    >
                      <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                        <i class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                          add
                        </i>
                        Create
                      </span>
                    </div>
                  </div>
                </form>
              </div>
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
                  <h5 class="mb-0">Edit Department</h5>
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
                    <div class="sm:col-span-2">
                      <label class="mb-[10px] text-black dark:text-white font-medium block">
                        Enter Country Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        value={form.name}
                        class="h-[45px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                        placeholder="Country Name"
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
                        Are you sure you want to delete this country?
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

      {/* <!-- demotest --> */}
      {/* <div class="add-new- z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px]" id="add-new-pop">
            <div class="popup-dialog flex transition-all max-w-[550px] min-h-full items-center mx-auto">
                <div class="trezo-card w-full bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md">
                        <div class="trezo-card-title">
                            <h5 class="mb-0">
                                Add New Task
                            </h5>
                        </div>
                        <div class="trezo-card-subtitle">
                            <button type="button" class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500" id="add-new-popup-toggle">
                                <i class="ri-close-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div class="trezo-card-content">
                        <form>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[25px]">
                                <div class="sm:col-span-2">
                                    <label class="mb-[10px] text-black dark:text-white font-medium block">
                                        Task Name
                                    </label>
                                    <input type="text" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" placeholder="Task name" />
                                </div>
                               
                                <div>
                                    <label class="mb-[10px] text-black dark:text-white font-medium block">
                                        Due Date
                                    </label>
                                    <input type="date" class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500" />
                                </div>
                                <div>
                                    <label class="mb-[10px] text-black dark:text-white font-medium block">
                                        Priority
                                    </label>
                                    <select class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500">
                                        <option>
                                            Select
                                        </option>
                                        <option>
                                            High
                                        </option>
                                        <option>
                                            Medium
                                        </option>
                                        <option>
                                            Low
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label class="mb-[10px] text-black dark:text-white font-medium block">
                                        Status
                                    </label>
                                    <select class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500">
                                        <option>
                                            Select
                                        </option>
                                        <option>
                                            In Progress
                                        </option>
                                        <option>
                                            Pending
                                        </option>
                                        <option>
                                            Completed
                                        </option>
                                        <option>
                                            Not Started
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
                                <button type="button" class="rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[12px] bg-danger-500 text-white hover:bg-danger-400" id="add-new-popup-toggle">
                                    Cancel
                                </button>
                                <button type="button" class="inline-block bg-primary-500 text-white py-[12px] px-[26.5px] transition-all rounded-md hover:bg-primary-400">
                                    <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                                        <i class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                                            add
                                        </i>
                                        Create
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> */}
    </>
  );
};

export default Category;

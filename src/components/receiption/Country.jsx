import api from "@/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Country = () => {
  let [popup, setPopup] = useState(false);
  const [form, setForm] = useState({ name: "" });
  let addcountryhandler = (e) => {
    e.preventDefault();
    // alert("Add Country");
    setPopup(true);
  };
  let cancelcountrypopup = (e) => {
    e.preventDefault();
    setPopup(false);
  };

  // Define the mutation for the login request
  const { mutate, isLoading } = useMutation({
    mutationFn: async (formData) => {
      try {
        const response = await api.post("/api/country", {
          name: formData.name,
        });
        return response.data;
      } catch (err) {
        console.error("country added failed:", err);
        throw err;
      }
    },
    onSuccess: (data) => {
      if (data.token) {
        const token = data.token;
        // login(token);
      }
    },
    onError: (error) => {
      console.error("Country add error:", error);
      message.error(
        error?.response?.data?.message || "Invalid username or password"
      );
    },
  });

  let addcountry = (e) => {
    e.preventDefault();
    alert("Country Added");
    // Trigger the login mutation
    mutate(form);
    setPopup(false);
  };
  const {
    data: countries,
    isLoading: loadingCountries,
    error: fetchError,
  } = useQuery({
    queryKey: ["countries"], // Unique key for caching
    queryFn: async () => {
      const response = await api.get("/api/country"); // Your GET API
      return response.data; // assuming response.data is an array of countries
    },
  });
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
      <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
        <div class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between">
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
            <button
              onClick={addcountryhandler}
              type="button"
              class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
              id="add-new-popup-toggle"
            >
              <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
                <i class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2">
                  add
                </i>
                Add New Task
              </span>
            </button>
          </div>
        </div>
        <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
          <div class="table-responsive overflow-x-auto">
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
                    Country Name
                  </th>

                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="text-black dark:text-white">
                {countries.map((country, index) => (
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
                        {country.name}
                      </span>
                    </td>

                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <div class="flex items-center gap-[9px]">
                        <button
                          type="button"
                          class="text-primary-500 leading-none custom-tooltip"
                          id="customTooltip"
                          data-text="View"
                        >
                          <i class="material-symbols-outlined !text-md">
                            visibility
                          </i>
                        </button>
                        <button
                          type="button"
                          class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          id="customTooltip"
                          data-text="Edit"
                        >
                          <i class="material-symbols-outlined !text-md">edit</i>
                        </button>
                        <button
                          type="button"
                          class="text-danger-500 leading-none custom-tooltip"
                          id="customTooltip"
                          data-text="Delete"
                        >
                          <i class="material-symbols-outlined !text-md">
                            delete
                          </i>
                        </button>
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
                  <h5 class="mb-0">Add New Country</h5>
                </div>
                <div class="trezo-card-subtitle">
                  <button
                    type="button"
                    onClick={cancelcountrypopup}
                    class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
                    id="add-new-popup-toggle"
                  >
                    <i class="ri-close-fill"></i>
                  </button>
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
                    <button
                      type="button"
                      class="rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[10px] bg-danger-500 text-white hover:bg-danger-400"
                      id="add-new-popup-toggle"
                      onClick={cancelcountrypopup}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={addcountry}
                      class="inline-block bg-primary-500 text-white py-[10px] px-[26.5px] transition-all rounded-md hover:bg-primary-400"
                    >
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
        </div>
      )}
    </>
  );
};

export default Country;

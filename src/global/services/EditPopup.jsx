const EditPopup = ({
  handleEditpopupclose,
  form,
  setForm,
  setSelectedcountryId,
  qualification,
  setQualification,

  handleedit,
}) => {
  return (
    <>
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
    </>
  );
};

export default EditPopup;

const TableHeader = ({
  patientId,
  setPatientId,
  addcountryhandler,
  setPage,
  page,
  setLimit,
}) => {
  return (
    <>
      <div class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between ">
        <div class="trezo-card-title">
          <form class="relative sm:w-[265px]">
            <label class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2">
              <i class="material-symbols-outlined !text-[20px]">search</i>
            </label>
            <input
              type="text"
              placeholder="Search Patient Id here."
              onChange={(e) => setPatientId(e.target.value)}
              value={patientId}
              class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
            />
          </form>
        </div>
        <div class="trezo-card-subtitle mt-[15px] sm:mt-0 flex items-center gap-[10px]">
          <ol class="sm:mt-0">
            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                href="javascript:void(0);"
                class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              >
                <span class="opacity-0">0</span>
                <i class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                  chevron_left
                </i>
              </button>
            </li>

            <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
              <button
                href="javascript:void(0);"
                onClick={() => setPage(page + 1)}
                class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              >
                <span class="opacity-0">0</span>
                <i class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                  chevron_right
                </i>
              </button>
            </li>
          </ol>
          <div
            onClick={addcountryhandler}
            class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
            id="add-new-popup-toggle"
          >
            <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
              <i class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2">
                print
              </i>
              Print
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableHeader;

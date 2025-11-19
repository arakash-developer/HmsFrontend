import { useState } from "react";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router";

const OutdoorIncome = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div class="">
        <div class="popup-dialog flex transition-all  min-h-full items-center mx-auto">
          <div class="trezo-card w-full bg-gray-50 dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md">
              <div class="trezo-card-title">
                <h5 class="mb-0">Outdoor Income Report</h5>
              </div>
              <div class="trezo-card-subtitle">
                <div
                  // onClick={cancelcountrypopup}
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
                      Daily Income Statement With Due Collection.
                    </label>
                    <div className="relative w-full">
                      <Flatpickr
                        value={date}
                        onChange={(selectedDates) => setDate(selectedDates[0])}
                        options={{ dateFormat: "d-m-Y" }} // day-month-year
                        className="h-[40px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[14px] block !w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                      />

                      <i className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 pointer-events-none material-symbols-outlined !text-md">
                        calendar_month
                      </i>
                    </div>
                  </div>
                </div>
                <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
                  {/* <div
                    class="cursor-pointer rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[10px] bg-danger-500 text-white hover:bg-danger-400"
                    id="add-new-popup-toggle"
                    // onClick={cancelcountrypopup}
                  >
                    Back
                  </div> */}
                  <Link
                    to="/receiption/outdoor-income/outdoor-report"
                    class="cursor-pointer inline-block bg-primary-500 text-white py-[10px] px-[26.5px] transition-all rounded-md hover:bg-primary-400"
                  >
                    <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                      <i class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                        analytics
                      </i>
                      Report
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutdoorIncome;

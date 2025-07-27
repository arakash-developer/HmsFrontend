const AdminAccounts = () => {
  return (
    <>
      {/* <!-- Main Content --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-[25px] gap-[25px] mb-[25px]">
        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
          <div className="trezo-card-content">
            <div className="flex justify-between">
              <div>
                <span className="block">Total Income</span>
                <h5 className="mb-0 mt-[3px] text-[20px]">$531,200</h5>
              </div>
              <div className="w-[55px] lg:w-[60px] h-[55px] lg:h-[60px] flex items-center justify-center rounded-full text-success-600 bg-success-50 dark:bg-[#0a0e19]">
                <i className="material-symbols-outlined">attach_money</i>
              </div>
            </div>
            <div className="mt-[15px] md:mt-[20px] flex items-center gap-[10px]">
              <span className="inline-block px-[8.5px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px] text-xs">
                +35.5%
              </span>
              <span className="block text-xs">Last 30 days</span>
            </div>
          </div>
        </div>
        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
          <div className="trezo-card-content">
            <div className="flex justify-between">
              <div>
                <span className="block">Total Expenses</span>
                <h5 className="mb-0 mt-[3px] text-[20px]">$251,952</h5>
              </div>
              <div className="w-[55px] lg:w-[60px] h-[55px] lg:h-[60px] flex items-center justify-center rounded-full text-purple-600 bg-purple-50 dark:bg-[#0a0e19]">
                <i className="material-symbols-outlined">account_balance_wallet</i>
              </div>
            </div>
            <div className="mt-[15px] md:mt-[20px] flex items-center gap-[10px]">
              <span className="inline-block px-[8.5px] text-danger-700 border border-danger-300 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px] text-xs">
                -28.5%
              </span>
              <span className="block text-xs">Last 30 days</span>
            </div>
          </div>
        </div>
        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
          <div className="trezo-card-content">
            <div className="flex justify-between">
              <div>
                <span className="block">Accounts Receivable</span>
                <h5 className="mb-0 mt-[3px] text-[20px]">$15,990</h5>
              </div>
              <div className="w-[55px] lg:w-[60px] h-[55px] lg:h-[60px] flex items-center justify-center rounded-full text-primary-600 bg-primary-50 dark:bg-[#0a0e19]">
                <i className="material-symbols-outlined">money_bag</i>
              </div>
            </div>
            <div className="mt-[15px] md:mt-[20px] flex items-center gap-[10px]">
              <span className="inline-block px-[8.5px] text-danger-700 border border-danger-300 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px] text-xs">
                -5.8%
              </span>
              <span className="block text-xs">Last 30 days</span>
            </div>
          </div>
        </div>
        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
          <div className="trezo-card-content">
            <div className="flex justify-between">
              <div>
                <span className="block">Account Payable</span>
                <h5 className="mb-0 mt-[3px] text-[20px]">$14,580</h5>
              </div>
              <div className="w-[55px] lg:w-[60px] h-[55px] lg:h-[60px] flex items-center justify-center rounded-full text-secondary-600 bg-secondary-50 dark:bg-[#0a0e19]">
                <i className="material-symbols-outlined">payments</i>
              </div>
            </div>
            <div className="mt-[15px] md:mt-[20px] flex items-center gap-[10px]">
              <span className="inline-block px-[8.5px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px] text-xs">
                +10.1%
              </span>
              <span className="block text-xs">Last 30 days</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          {/* <!-- Statistics --> */}
          <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
              <div className="trezo-card-title">
                <h5 className="mb-0">Statistics</h5>
              </div>
              <div className="trezo-card-subtitle">
                <div className="trezo-card-dropdown relative">
                  <button
                    type="button"
                    className="trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]"
                    id="dropdownToggleBtn"
                  >
                    <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                      Monthly
                      <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"></i>
                    </span>
                  </button>
                  <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        Weekly
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        Monthly
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        Yearly
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="trezo-card-content">
              <div className="ltr:-ml-[15px] rtl:-mr-[15px] -mt-[20px] -mb-[22px]">
                <div id="financeStatisticsChart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[25px]">
            {/* <!-- Cash at End of the Month --> */}
            <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
              <div className="trezo-card-header mb-[20px] flex items-center justify-between">
                <div className="trezo-card-title">
                  <span className="block">Cash at End of the Month</span>
                </div>
              </div>
              <div className="trezo-card-content">
                <div className="-mt-[10px] h-[145px]">
                  <div id="financeCashEndOfTheMonthChart"></div>
                </div>
              </div>
            </div>

            {/* <!-- Weekly Expenses --> */}
            <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
              <div className="trezo-card-header mb-[20px] flex items-center justify-between">
                <div className="trezo-card-title flex items-center gap-[15px]">
                  <div>
                    <span className="block mb-[4px]">Weekly Expenses</span>
                    <h5 className="mb-0 md:text-[20px]">$1,200</h5>
                  </div>
                  <span className="inline-block px-[8.5px] text-danger-600 border border-danger-300 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px] text-xs">
                    -5.1%
                  </span>
                </div>
                <div className="trezo-card-subtitle">
                  <span className="block">Last 7 days</span>
                </div>
              </div>
              <div className="trezo-card-content">
                <div className="-mb-[28px] -mt-[32px]">
                  <div id="financeWeeklyExpensesChart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[25px]">
            {/* <!-- Income Sources --> */}
            <div
              className="trezo-card trezo_bg_finance p-[20px] md:p-[25px] rounded-md"
              // style="background: linear-gradient(120deg, #343A46 0%, #23272E 99.29%);"
            >
              <div className="trezo-card-header mb-[20px] flex items-center justify-between">
                <div className="trezo-card-title">
                  <h5 className="mb-0 text-white">Income Sources</h5>
                </div>
                <div className="trezo-card-subtitle">
                  <span className="block text-white">Last 30 days</span>
                </div>
              </div>
              <div className="trezo-card-content">
                <div className="-mt-[10px]">
                  <div id="financeIncomeSourcesChart"></div>
                </div>
              </div>
            </div>

            {/* <!-- Net Profit --> */}
            <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
              <div className="trezo-card-header mb-[20px] flex items-center justify-between">
                <div className="trezo-card-title flex items-center gap-[15px]">
                  <div>
                    <span className="block mb-[4px]">Net Profit</span>
                    <h5 className="mb-0 md:text-[20px]">$42,458</h5>
                  </div>
                  <span className="inline-block px-[8.5px] text-success-600 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px] text-xs">
                    +7.6%
                  </span>
                </div>
                <div className="trezo-card-subtitle">
                  <span className="block">Last 7 days</span>
                </div>
              </div>
              <div className="trezo-card-content">
                <div className="-mt-[25px] -mb-[25px] ltr:-ml-[15px] rtl:-mr-[15px]">
                  <div id="financeNetProfitChart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          {/* <!-- Transactions History --> */}
          <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
              <div className="trezo-card-title">
                <h5 className="mb-0">Transactions History</h5>
              </div>
              <div className="trezo-card-subtitle">
                <div className="trezo-card-dropdown relative">
                  <button
                    type="button"
                    className="trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]"
                    id="dropdownToggleBtn"
                  >
                    <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                      Last 30 Days
                      <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 md:mt-px"></i>
                    </span>
                  </button>
                  <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        Last 7 Days
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        Last 15 Days
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        Last 30 Days
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="trezo-card-content -mx-[20px] md:-mx-[25px]">
              <div className="table-responsive overflow-x-auto">
                <table className="w-full">
                  <thead className="text-black dark:text-white">
                    <tr>
                      <th className="font-normal ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        Transaction ID
                      </th>
                      <th className="font-normal ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        Date
                      </th>
                      <th className="font-normal ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        Description
                      </th>
                      <th className="font-normal ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        Amount
                      </th>
                      <th className="font-normal ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        Type
                      </th>
                      <th className="font-normal ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-black dark:text-white">
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[12px]">
                          <div className="form-check relative top-[1.5px]">
                            <input type="checkbox" className="cursor-pointer" />
                          </div>
                          <span className="text-gray-500 dark:text-gray-400">
                            #TID0015
                          </span>
                        </div>
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        30 Apr 2025
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Payment from Client
                      </td>
                      <td className="text-primary-500 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        $5,000
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Income
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[9px]">
                          <button
                            type="button"
                            className="text-primary-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="View"
                          >
                            <i className="material-symbols-outlined !text-md">
                              visibility
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Edit"
                          >
                            <i className="material-symbols-outlined !text-md">
                              edit
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-danger-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Delete"
                          >
                            <i className="material-symbols-outlined !text-md">
                              delete
                            </i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[12px]">
                          <div className="form-check relative top-[1.5px]">
                            <input type="checkbox" className="cursor-pointer" />
                          </div>
                          <span className="text-gray-500 dark:text-gray-400">
                            #TID0099
                          </span>
                        </div>
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        29 Apr 2025
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Office Supplies
                      </td>
                      <td className="text-primary-500 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        $10,000
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Expense
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[9px]">
                          <button
                            type="button"
                            className="text-primary-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="View"
                          >
                            <i className="material-symbols-outlined !text-md">
                              visibility
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Edit"
                          >
                            <i className="material-symbols-outlined !text-md">
                              edit
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-danger-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Delete"
                          >
                            <i className="material-symbols-outlined !text-md">
                              delete
                            </i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[12px]">
                          <div className="form-check relative top-[1.5px]">
                            <input type="checkbox" className="cursor-pointer" />
                          </div>
                          <span className="text-gray-500 dark:text-gray-400">
                            #TID0145
                          </span>
                        </div>
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        28 Apr 2025
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Website Maintenance
                      </td>
                      <td className="text-primary-500 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        $35,000
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Expense
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[9px]">
                          <button
                            type="button"
                            className="text-primary-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="View"
                          >
                            <i className="material-symbols-outlined !text-md">
                              visibility
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Edit"
                          >
                            <i className="material-symbols-outlined !text-md">
                              edit
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-danger-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Delete"
                          >
                            <i className="material-symbols-outlined !text-md">
                              delete
                            </i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[12px]">
                          <div className="form-check relative top-[1.5px]">
                            <input type="checkbox" className="cursor-pointer" />
                          </div>
                          <span className="text-gray-500 dark:text-gray-400">
                            #TID0247
                          </span>
                        </div>
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        27 Apr 2025
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Payment from Client
                      </td>
                      <td className="text-primary-500 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        $2,000
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Income
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[9px]">
                          <button
                            type="button"
                            className="text-primary-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="View"
                          >
                            <i className="material-symbols-outlined !text-md">
                              visibility
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Edit"
                          >
                            <i className="material-symbols-outlined !text-md">
                              edit
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-danger-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Delete"
                          >
                            <i className="material-symbols-outlined !text-md">
                              delete
                            </i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[12px]">
                          <div className="form-check relative top-[1.5px]">
                            <input type="checkbox" className="cursor-pointer" />
                          </div>
                          <span className="text-gray-500 dark:text-gray-400">
                            #TID0299
                          </span>
                        </div>
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        26 Apr 2025
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Advertising Campaign
                      </td>
                      <td className="text-primary-500 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        $15,500
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Expense
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[9px]">
                          <button
                            type="button"
                            className="text-primary-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="View"
                          >
                            <i className="material-symbols-outlined !text-md">
                              visibility
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Edit"
                          >
                            <i className="material-symbols-outlined !text-md">
                              edit
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-danger-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Delete"
                          >
                            <i className="material-symbols-outlined !text-md">
                              delete
                            </i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[12px]">
                          <div className="form-check relative top-[1.5px]">
                            <input type="checkbox" className="cursor-pointer" />
                          </div>
                          <span className="text-gray-500 dark:text-gray-400">
                            #TID0015
                          </span>
                        </div>
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        30 Apr 2025
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Payment from Client
                      </td>
                      <td className="text-primary-500 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        $5,000
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Income
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[9px]">
                          <button
                            type="button"
                            className="text-primary-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="View"
                          >
                            <i className="material-symbols-outlined !text-md">
                              visibility
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Edit"
                          >
                            <i className="material-symbols-outlined !text-md">
                              edit
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-danger-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Delete"
                          >
                            <i className="material-symbols-outlined !text-md">
                              delete
                            </i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[12px]">
                          <div className="form-check relative top-[1.5px]">
                            <input type="checkbox" className="cursor-pointer" />
                          </div>
                          <span className="text-gray-500 dark:text-gray-400">
                            #TID0099
                          </span>
                        </div>
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        29 Apr 2025
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Office Supplies
                      </td>
                      <td className="text-primary-500 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        $10,000
                      </td>
                      <td className="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Expense
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center gap-[9px]">
                          <button
                            type="button"
                            className="text-primary-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="View"
                          >
                            <i className="material-symbols-outlined !text-md">
                              visibility
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Edit"
                          >
                            <i className="material-symbols-outlined !text-md">
                              edit
                            </i>
                          </button>
                          <button
                            type="button"
                            className="text-danger-500 leading-none custom-tooltip"
                            id="customTooltip"
                            data-text="Delete"
                          >
                            <i className="material-symbols-outlined !text-md">
                              delete
                            </i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-[20px] md:px-[25px] pt-[12px] md:pt-[14px] sm:flex sm:items-center justify-between">
                <p className="mb-0 text-sm">Showing 7 of 36 results</p>
                <ol className="mt-[10px] sm:mt-0">
                  <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                    <a
                      href="javascript:void(0);"
                      className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                    >
                      <span className="opacity-0">0</span>
                      <i className="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                        chevron_left
                      </i>
                    </a>
                  </li>
                  <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                    <a
                      href="javascript:void(0);"
                      className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-primary-500 bg-primary-500 text-white"
                    >
                      1
                    </a>
                  </li>
                  <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                    <a
                      href="javascript:void(0);"
                      className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                    >
                      2
                    </a>
                  </li>
                  <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                    <a
                      href="javascript:void(0);"
                      className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                    >
                      3
                    </a>
                  </li>
                  <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                    <a
                      href="javascript:void(0);"
                      className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                    >
                      4
                    </a>
                  </li>
                  <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                    <a
                      href="javascript:void(0);"
                      className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                    >
                      <span className="opacity-0">0</span>
                      <i className="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                        chevron_right
                      </i>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          {/* <!-- Card --> */}
          <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div className="trezo-card-header mb-[20px] flex items-center justify-between">
              <div className="trezo-card-title">
                <h5 className="mb-0">Card</h5>
              </div>
              <div className="trezo-card-subtitle">
                <button
                  type="button"
                  className="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
                  id="add-new-popup-toggle"
                >
                  <span className="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
                    <i className="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2">
                      add
                    </i>
                    Add Card
                  </span>
                </button>
              </div>
            </div>
            <div className="trezo-card-content">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
                <div
                  className="trezo_bg_finance p-[20px] md:p-[25px] rounded-[16px] bg-center bg-no-repeat bg-cover"
                  // style="background-image: url(/images/wallet/card1.jpg);"
                >
                  <div className="mb-[7px] flex items-center justify-between">
                    <span className="block text-white font-medium text-xs">
                      Debit Card
                    </span>
                    <span className="text-xl text-white leading-none">
                      <i className="ri-visa-fill"></i>
                    </span>
                  </div>
                  <img
                    src="/images/icons/card-frame.png"
                    alt="card-frame"
                  />
                  <h5
                    className="text-white font-semibold mt-[12px] mb-[50px] !tracking-[4px]"
                    // style="word-spacing: 4px;"
                  >
                    5322 0520 0744 1794
                  </h5>
                  <div className="flex items-center justify-between">
                    <span className="block text-white">David Farrior</span>
                    <span className="text-white block font-medium text-xs">
                      EXP : 12/30
                    </span>
                  </div>
                </div>
                <div
                  className="p-[20px] trezo_bg_finance_two md:p-[25px] rounded-[16px] bg-center bg-no-repeat bg-cover"
                  // style="background-image: url(/images/wallet/card2.jpg);"
                >
                  <div className="mb-[7px] flex items-center justify-between">
                    <span className="block text-white font-medium text-xs">
                      Virtual Card
                    </span>
                    <span className="text-xl text-white leading-none">
                      <i className="ri-mastercard-fill"></i>
                    </span>
                  </div>
                  <img
                    src="/images/icons/card-frame.png"
                    alt="card-frame"
                  />
                  <h5
                    className="text-white font-semibold mt-[12px] mb-[50px] !tracking-[4px]"
                    // style="word-spacing: 4px;"
                  >
                    .... .... .... 1794
                  </h5>
                  <div className="flex items-center justify-between">
                    <span className="block text-white">David Farrior</span>
                    <span className="text-white block font-medium text-xs">
                      EXP : 12/30
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          {/* <!-- Expense Breakdown --> */}
          <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
              <div className="trezo-card-title">
                <h5 className="mb-0">Expense Breakdown</h5>
              </div>
            </div>
            <div className="trezo-card-content">
              <div className="-mt-[10px]">
                <div id="financeExpenseBreakdownChart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grow"></div>

      {/* <!-- End Main Content --> */}
    </>
  );
};

export default AdminAccounts;

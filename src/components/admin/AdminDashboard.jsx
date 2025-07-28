import CrmAnnualProfitChart from "@/libs/CrmAnnualProfitChart";
import CrmBalanceOverviewChart from "@/libs/CrmBalanceOverviewChart";
import CrmLeadConversionChart from "@/libs/CrmLeadConversionChart";
import CrmLeadsBySourceChart from "@/libs/CrmLeadsBySourceChart";
import CrmRevenueGrothChart from "@/libs/CrmRevenueGrothChart";
import CrmTotalOrdersChart from "@/libs/CrmTotalOrdersChart";

const AdminDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] mb-[25px]">
        {/* <!-- Revenue Growth --> */}
        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
          <div className="trezo-card-content relative">
            <span className="block">Revenue Growth</span>
            <h5 className="mb-0 mt-[3px] text-[20px]">$32,420</h5>
            <div className="absolute -top-[28px] ltr:-right-[9px] rtl:-left-[9px] max-w-[120px]">
              <div id="crmRevenueGrowthChart"></div>
              <CrmRevenueGrothChart />
            </div>
            <div className="mt-[25px] md:mt-[34px] flex items-center justify-between">
              <span className="inline-block text-sm text-success-700 py-[1px] px-[8.3px] border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] rounded-xl">
                +10%
              </span>
              <span className="block text-sm">Last 7 days</span>
            </div>
          </div>
        </div>

        {/* <!-- Lead Conversion --> */}
        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
          <div className="trezo-card-content relative">
            <span className="block">Lead Conversion</span>
            <h5 className="mb-0 mt-[3px] text-[20px]">48.79%</h5>
            <div className="absolute -top-[28px] ltr:-right-[9px] rtl:-left-[9px] max-w-[120px]">
              {/* <div id="crmLeadConversionChart"></div> */}
              <CrmLeadConversionChart />
            </div>
            <div className="mt-[25px] md:mt-[34px] flex items-center justify-between">
              <span className="inline-block text-sm text-danger-700 py-[1px] px-[8.3px] border border-danger-300 bg-danger-100 dark:bg-[#15203c] dark:border-[#172036] rounded-xl">
                -15%
              </span>
              <span className="block text-sm">Last 30 days</span>
            </div>
          </div>
        </div>

        {/* <!-- Total Orders --> */}
        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
          <div className="trezo-card-content relative">
            <span className="block">Total Orders</span>
            <h5 className="mb-0 mt-[3px] text-[20px]">$72,458</h5>
            <div className="absolute -top-[28px] ltr:-right-[9px] rtl:-left-[9px] max-w-[120px]">
              {/* <div id="crmTotalOrdersChart"></div> */}
              <CrmTotalOrdersChart />
            </div>
            <div className="mt-[25px] md:mt-[34px] flex items-center justify-between">
              <span className="inline-block text-sm text-success-700 py-[1px] px-[8.3px] border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] rounded-xl">
                +25%
              </span>
              <span className="block text-sm">Last 90 days</span>
            </div>
          </div>
        </div>

        {/* <!-- Annual Profit --> */}
        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
          <div className="trezo-card-content relative">
            <span className="block">Annual Profit</span>
            <h5 className="mb-0 mt-[3px] text-[20px]">$879.6k</h5>
            <div className="absolute -top-[28px] ltr:-right-[9px] rtl:-left-[9px] max-w-[120px]">
              {/* <div id="crmAnnualProfitChart"></div> */}
              <CrmAnnualProfitChart />
            </div>
            <div className="mt-[25px] md:mt-[34px] flex items-center justify-between">
              <span className="inline-block text-sm text-success-700 py-[1px] px-[8.3px] border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] rounded-xl">
                +30%
              </span>
              <span className="block text-sm">Last 12 months</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          {/* <!-- Balance Overview --> */}
          <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
              <div className="trezo-card-title">
                <h5 className="mb-0">Balance Overview</h5>
              </div>
              <div className="trezo-card-subtitle">
                <div className="trezo-card-dropdown relative">
                  <button
                    type="button"
                    className="trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]"
                    id="dropdownToggleBtn"
                  >
                    <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                      Current Year
                      <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"></i>
                    </span>
                  </button>
                  <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        Current Week
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        Current Month
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        Current Year
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="trezo-card-content">
              <div className="-mb-[3px] ltr:-ml-[10px] rtl:-mr-[10px]">
                <CrmBalanceOverviewChart />
              </div>
              <ul className="text-center">
                <li className="inline-block mx-[13px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                  <div className="flex items-center">
                    <span className="text-primary-500 font-semibold ltr:mr-[10px] rtl:ml-[10px] text-[20px]">
                      $628k
                    </span>
                    <span className="block">Revenue</span>
                  </div>
                </li>
                <li className="inline-block mx-[13px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                  <div className="flex items-center">
                    <span className="text-purple-500 font-semibold ltr:mr-[10px] rtl:ml-[10px] text-[20px]">
                      $379k
                    </span>
                    <span className="block">Expenses</span>
                  </div>
                </li>
                <li className="inline-block mx-[13px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                  <div className="flex items-center">
                    <span className="text-success-500 font-semibold ltr:mr-[10px] rtl:ml-[10px] text-[20px]">
                      11.2%
                    </span>
                    <span className="block">Profit Ratio</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          {/* <!-- Leads by Source --> */}
          <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
              <div className="trezo-card-title">
                <h5 className="mb-0">Leads by Source</h5>
              </div>
              <div className="trezo-card-subtitle">
                <div className="trezo-card-dropdown relative">
                  <button
                    type="button"
                    className="trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]"
                    id="dropdownToggleBtn"
                  >
                    <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                      This Month
                      <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"></i>
                    </span>
                  </button>
                  <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Day
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Week
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Month
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Year
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="trezo-card-content">
              <div className="-mt-[10px]">
                <CrmLeadsBySourceChart />
              </div>
              <ul className="mt-[17px] grid grid-cols-3 gap-[25px]">
                <li>
                  <span className="flex items-center text-sm mb-[7px]">
                    <span className="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-primary-500 d-block"></span>
                    Organic
                  </span>
                  <h6 className="mb-0 leading-none text-lg font-medium">320</h6>
                </li>
                <li>
                  <span className="flex items-center text-sm mb-[7px]">
                    <span className="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-secondary-500 d-block"></span>
                    Paid
                  </span>
                  <h6 className="mb-0 leading-none text-lg font-medium">60</h6>
                </li>
                <li>
                  <span className="flex items-center text-sm mb-[7px]">
                    <span className="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-purple-500 d-block"></span>
                    Direct
                  </span>
                  <h6 className="mb-0 leading-none text-lg font-medium">30</h6>
                </li>
                <li>
                  <span className="flex items-center text-sm mb-[7px]">
                    <span className="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-info-500 d-block"></span>
                    Social
                  </span>
                  <h6 className="mb-0 leading-none text-lg font-medium">160</h6>
                </li>
                <li>
                  <span className="flex items-center text-sm mb-[7px]">
                    <span className="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-success-500 d-block"></span>
                    Referrals
                  </span>
                  <h6 className="mb-0 leading-none text-lg font-medium">279</h6>
                </li>
                <li>
                  <span className="flex items-center text-sm mb-[7px]">
                    <span className="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-danger-500 d-block"></span>
                    Others
                  </span>
                  <h6 className="mb-0 leading-none text-lg font-medium">19</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-1">
          {/* <!-- Top Performers --> */}
          <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
              <div className="trezo-card-title">
                <h5 className="mb-0">Top Performers</h5>
              </div>
              <div className="trezo-card-subtitle">
                <div className="trezo-card-dropdown relative">
                  <button
                    type="button"
                    className="trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500"
                    id="dropdownToggleBtn"
                  >
                    <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                      This Week
                      <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"></i>
                    </span>
                  </button>
                  <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Day
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Week
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Month
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Year
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="trezo-card-content">
              <div className="table-responsive overflow-x-auto">
                <table className="w-full">
                  <tbody className="text-black dark:text-white">
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0">
                        <div className="flex items-center">
                          <div className="w-[44px] h-[44px] ltr:mr-[12px] rtl:ml-[12px]">
                            <img
                              src="/images/users/user6.jpg"
                              className="rounded-full inline-block"
                              alt="user-image"
                            />
                          </div>
                          <div>
                            <span className="block font-medium">
                              Alex Davis
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 block mt-px">
                              alex@trezo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0">
                        <a
                          href="javascript:void(0);"
                          className="inline-block relative w-[36px] h-[36px] text-center text-gray-500 dark:text-gray-400 transition-all border border-gray-100 dark:border-[#172036] rounded-full hover:bg-primary-500 hover:border-primary-500 hover:text-white"
                        >
                          <i className="material-symbols-outlined absolute left-0 right-0 !text-lg top-1/2 -translate-y-1/2">
                            arrow_outward
                          </i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0">
                        <div className="flex items-center">
                          <div className="w-[44px] h-[44px] ltr:mr-[12px] rtl:ml-[12px]">
                            <img
                              src="/images/users/user7.jpg"
                              className="rounded-full inline-block"
                              alt="user-image"
                            />
                          </div>
                          <div>
                            <span className="block font-medium">
                              Laura Martinez
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 block mt-px">
                              laura@trezo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0">
                        <a
                          href="javascript:void(0);"
                          className="inline-block relative w-[36px] h-[36px] text-center text-gray-500 dark:text-gray-400 transition-all border border-gray-100 dark:border-[#172036] rounded-full hover:bg-primary-500 hover:border-primary-500 hover:text-white"
                        >
                          <i className="material-symbols-outlined absolute left-0 right-0 !text-lg top-1/2 -translate-y-1/2">
                            arrow_outward
                          </i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0">
                        <div className="flex items-center">
                          <div className="w-[44px] h-[44px] ltr:mr-[12px] rtl:ml-[12px]">
                            <img
                              src="images/users/user8.jpg"
                              className="rounded-full inline-block"
                              alt="user-image"
                            />
                          </div>
                          <div>
                            <span className="block font-medium">
                              Mark Thompson
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 block mt-px">
                              mark@trezo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0">
                        <a
                          href="javascript:void(0);"
                          className="inline-block relative w-[36px] h-[36px] text-center text-gray-500 dark:text-gray-400 transition-all border border-gray-100 dark:border-[#172036] rounded-full hover:bg-primary-500 hover:border-primary-500 hover:text-white"
                        >
                          <i className="material-symbols-outlined absolute left-0 right-0 !text-lg top-1/2 -translate-y-1/2">
                            arrow_outward
                          </i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0">
                        <div className="flex items-center">
                          <div className="w-[44px] h-[44px] ltr:mr-[12px] rtl:ml-[12px]">
                            <img
                              src="/images/users/user9.jpg"
                              className="rounded-full inline-block"
                              alt="user-image"
                            />
                          </div>
                          <div>
                            <span className="block font-medium">
                              Rachel White
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 block mt-px">
                              rachel@trezo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0">
                        <a
                          href="javascript:void(0);"
                          className="inline-block relative w-[36px] h-[36px] text-center text-gray-500 dark:text-gray-400 transition-all border border-gray-100 dark:border-[#172036] rounded-full hover:bg-primary-500 hover:border-primary-500 hover:text-white"
                        >
                          <i className="material-symbols-outlined absolute left-0 right-0 !text-lg top-1/2 -translate-y-1/2">
                            arrow_outward
                          </i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0">
                        <div className="flex items-center">
                          <div className="w-[44px] h-[44px] ltr:mr-[12px] rtl:ml-[12px]">
                            <img
                              src="/images/users/user10.jpg"
                              className="rounded-full inline-block"
                              alt="user-image"
                            />
                          </div>
                          <div>
                            <span className="block font-medium">Kevin Lee</span>
                            <span className="text-gray-500 dark:text-gray-400 block mt-px">
                              kevin@trezo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0">
                        <a
                          href="javascript:void(0);"
                          className="inline-block relative w-[36px] h-[36px] text-center text-gray-500 dark:text-gray-400 transition-all border border-gray-100 dark:border-[#172036] rounded-full hover:bg-primary-500 hover:border-primary-500 hover:text-white"
                        >
                          <i className="material-symbols-outlined absolute left-0 right-0 !text-lg top-1/2 -translate-y-1/2">
                            arrow_outward
                          </i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between mt-[17px]">
                <p className="mb-0 text-sm">
                  Items per pages: <strong>5</strong>
                </p>
                <div className="flex items-center">
                  <p className="mb-0 text-sm">1 – 5 of 10</p>
                  <ol className="ltr:ml-[10px] rtl:mr-[10px]">
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
        <div className="lg:col-span-2">
          {/* <!-- Recent Leads --> */}
          <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
              <div className="trezo-card-title">
                <h5 className="mb-0">Recent Leads</h5>
              </div>
              <div className="trezo-card-subtitle">
                <div className="trezo-card-dropdown relative">
                  <button
                    type="button"
                    className="trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500"
                    id="dropdownToggleBtn"
                  >
                    <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                      This Day
                      <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"></i>
                    </span>
                  </button>
                  <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Day
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Week
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Month
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Year
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
                      <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        <div className="form-check relative top-[2px]">
                          <input type="checkbox" className="cursor-pointer" />
                        </div>
                      </th>
                      <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        Customer
                      </th>
                      <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        Email
                      </th>
                      <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        Source
                      </th>
                      <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        Status
                      </th>
                      <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-black dark:text-white">
                    <tr>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="form-check relative top-[2px]">
                          <input type="checkbox" className="cursor-pointer" />
                        </div>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center">
                          <div className="rounded-full w-[40px]">
                            <img
                              src="/images/users/user11.jpg"
                              className="inline-block rounded-full"
                              alt="user-image"
                            />
                          </div>
                          <div className="ltr:ml-[12px] rtl:mr-[12px]">
                            <span className="block font-medium">
                              David Brown
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        david@trezo.com
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Organic
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <span className="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs">
                          Confirmed
                        </span>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
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
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="form-check relative top-[2px]">
                          <input type="checkbox" className="cursor-pointer" />
                        </div>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center">
                          <div className="rounded-full w-[40px]">
                            <img
                              src="/images/users/user12.jpg"
                              className="inline-block rounded-full"
                              alt="user-image"
                            />
                          </div>
                          <div className="ltr:ml-[12px] rtl:mr-[12px]">
                            <span className="block font-medium">
                              Sarah Miller
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        sarah@trezo.com
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Social
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <span className="px-[8px] py-[3px] inline-block bg-warning-50 dark:bg-[#15203c] text-warning-500 rounded-sm font-medium text-xs">
                          Pending
                        </span>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
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
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="form-check relative top-[2px]">
                          <input type="checkbox" className="cursor-pointer" />
                        </div>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center">
                          <div className="rounded-full w-[40px]">
                            <img
                              src="/images/users/user13.jpg"
                              className="inline-block rounded-full"
                              alt="user-image"
                            />
                          </div>
                          <div className="ltr:ml-[12px] rtl:mr-[12px]">
                            <span className="block font-medium">
                              Michael Wilson
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        micheal@trezo.com
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Website
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <span className="px-[8px] py-[3px] inline-block bg-success-50 dark:bg-[#15203c] text-success-500 rounded-sm font-medium text-xs">
                          In Progress
                        </span>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
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
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="form-check relative top-[2px]">
                          <input type="checkbox" className="cursor-pointer" />
                        </div>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center">
                          <div className="rounded-full w-[40px]">
                            <img
                              src="/images/users/user14.jpg"
                              className="inline-block rounded-full"
                              alt="user-image"
                            />
                          </div>
                          <div className="ltr:ml-[12px] rtl:mr-[12px]">
                            <span className="block font-medium">
                              Amanda Clark
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        amanda@trezo.com
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Paid
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <span className="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs">
                          Confirmed
                        </span>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
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
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="form-check relative top-[2px]">
                          <input type="checkbox" className="cursor-pointer" />
                        </div>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <div className="flex items-center">
                          <div className="rounded-full w-[40px]">
                            <img
                              src="/images/users/user15.jpg"
                              className="inline-block rounded-full"
                              alt="user-image"
                            />
                          </div>
                          <div className="ltr:ml-[12px] rtl:mr-[12px]">
                            <span className="block font-medium">
                              Jennifer Taylor
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        taylor@trezo.com
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        Others
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                        <span className="px-[8px] py-[3px] inline-block bg-danger-50 dark:bg-[#15203c] text-danger-500 rounded-sm font-medium text-xs">
                          Rejected
                        </span>
                      </td>
                      <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
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
                <p className="mb-0 text-sm">Showing 5 of 36 results</p>
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
          {/* <!-- Sales Report --> */}
          <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
              <div className="trezo-card-title">
                <h5 className="mb-0">Sales Report</h5>
              </div>
              <div className="trezo-card-subtitle">
                <div className="trezo-card-dropdown relative">
                  <button
                    type="button"
                    className="trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500"
                    id="dropdownToggleBtn"
                  >
                    <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                      This Week
                      <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"></i>
                    </span>
                  </button>
                  <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Day
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Week
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Month
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Year
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="trezo-card-content">
              <div className="-mb-[15px] ltr:-ml-[10px] rtl:-mr-[10px]">
                <div id="crmSalesReportChart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          {/* <!-- Top Products by Sales --> */}
          <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
              <div className="trezo-card-title">
                <h5 className="mb-0">Top Products by Sales</h5>
              </div>
              <div className="trezo-card-subtitle">
                <div className="trezo-card-dropdown relative">
                  <button
                    type="button"
                    className="trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500"
                    id="dropdownToggleBtn"
                  >
                    <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                      This Week
                      <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"></i>
                    </span>
                  </button>
                  <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Day
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Week
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Month
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        This Year
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="trezo-card-content">
              <ul>
                <li className="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[14px] mb-[15px] last:mb-0 last:pb-0 last:border-0">
                  <div className="flex items-center">
                    <div className="text-primary-500 bg-primary-100 dark:bg-[#15203c] flex items-center justify-center w-[48px] h-[48px] ltr:mr-[15px] rtl:ml-[15px] rounded-sm">
                      <i className="material-symbols-outlined">smartphone</i>
                    </div>
                    <div>
                      <a
                        href="product-details.html"
                        className="block mb-[2px] text-black dark:text-white font-medium transition-all hover:text-primary-500"
                      >
                        Samsung Galaxy
                      </a>
                      <span className="block">Samsung</span>
                    </div>
                  </div>
                  <span className="block text-black dark:text-white font-medium">
                    $96,455
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[14px] mb-[15px] last:mb-0 last:pb-0 last:border-0">
                  <div className="flex items-center">
                    <div className="text-purple-500 bg-purple-100 dark:bg-[#15203c] flex items-center justify-center w-[48px] h-[48px] ltr:mr-[15px] rtl:ml-[15px] rounded-sm">
                      <i className="material-symbols-outlined">tap_and_play</i>
                    </div>
                    <div>
                      <a
                        href="product-details.html"
                        className="block mb-[2px] text-black dark:text-white font-medium transition-all hvoer:text-primary-500"
                      >
                        iPhone 15 Plus
                      </a>
                      <span className="block">Apple inc.</span>
                    </div>
                  </div>
                  <span className="block text-black dark:text-white font-medium">
                    $89,670
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[14px] mb-[15px] last:mb-0 last:pb-0 last:border-0">
                  <div className="flex items-center">
                    <div className="text-danger-500 bg-danger-100 dark:bg-[#15203c] flex items-center justify-center w-[48px] h-[48px] ltr:mr-[15px] rtl:ml-[15px] rounded-sm">
                      <i className="material-symbols-outlined">
                        edgesensor_low
                      </i>
                    </div>
                    <div>
                      <a
                        href="product-details.html"
                        className="block mb-[2px] text-black dark:text-white font-medium transition-all hover:text-primary-500"
                      >
                        Vivo V30
                      </a>
                      <span className="block">Vivo Ltd.</span>
                    </div>
                  </div>
                  <span className="block text-black dark:text-white font-medium">
                    $75,329
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[14px] mb-[15px] last:mb-0 last:pb-0 last:border-0">
                  <div className="flex items-center">
                    <div className="text-success-500 bg-success-100 dark:bg-[#15203c] flex items-center justify-center w-[48px] h-[48px] ltr:mr-[15px] rtl:ml-[15px] rounded-sm">
                      <i className="material-symbols-outlined">watch</i>
                    </div>
                    <div>
                      <a
                        href="product-details.html"
                        className="block mb-[2px] text-black dark:text-white font-medium transition-all hover:text-primary-500"
                      >
                        Watch Series 7
                      </a>
                      <span className="block">Apple</span>
                    </div>
                  </div>
                  <span className="block text-black dark:text-white font-medium">
                    $98,256
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[14px] mb-[15px] last:mb-0 last:pb-0 last:border-0">
                  <div className="flex items-center">
                    <div className="text-secondary-500 bg-secondary-100 dark:bg-[#15203c] flex items-center justify-center w-[48px] h-[48px] ltr:mr-[15px] rtl:ml-[15px] rounded-sm">
                      <i className="material-symbols-outlined">headphones</i>
                    </div>
                    <div>
                      <a
                        href="product-details.html"
                        className="block mb-[2px] text-black dark:text-white font-medium transition-all hover:text-primary-500"
                      >
                        Sony WF-SP800N
                      </a>
                      <span className="block">Sony</span>
                    </div>
                  </div>
                  <span className="block text-black dark:text-white font-medium">
                    $65,987
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grow"></div>
    </>
  );
};

export default AdminDashboard;

import { Link, NavLink, Outlet } from "react-router-dom";

import Footer from "@/components/main/admin/Footer";
import Header from "@/components/main/admin/Header";
import Logo from "@public/images/logo-small.svg";
import Logo2 from "@public/images/logo-small2.svg";
import { useState } from "react";
export default function DashboardLayout() {
  let [sidecompact, setSidecompact] = useState(false);
  // State to track which accordion items are open
  const [openAccordions, setOpenAccordions] = useState({});

  // Handler for sidebar toggle
  const handlerSidebarClose = (e) => {
    e.preventDefault();
    setSidecompact(!sidecompact);
  };

  // Handler for accordion toggle - React way
  const toggleAccordion = (e, accordionId) => {
    e.preventDefault();
    setOpenAccordions((prev) => ({
      ...prev,
      [accordionId]: !prev[accordionId],
    }));
  };

  let dashboardItemsList = [
    {
      title: "Analytics",
      link: "/admin/analytics",
      key: "new",
      keyvalue: "New",
    },
    {
      title: "Accounts",
      link: "/admin/accounts",
      key: "top",
      keyvalue: "Top",
    },
    // {
    //   title: "Patients",
    //   link: "/admin/patients",
    //   key: "popular",
    //   keyvalue: "Popular",
    // },
    // {
    //   title: "Pathology",
    //   link: "/admin/pathology",
    //   key: "hot",
    //   keyvalue: "Hot",
    // },
    // {
    //   title: "Doctors",
    //   link: "/admin/doctors",
    // },
  ];
  return (
    <>
      {/* <!-- Sidebar --> */}
      <div
        className={`sidebar-area bg-white dark:bg-[#0c1427] fixed overflow-hidden z-[7] top-0 h-screen transition-all rounded-r-md ${
          sidecompact ? "active" : ""
        }`}
        id="sidebar-area"
      >
        <div className="logo bg-white dark:bg-[#0c1427] border-b border-gray-100 dark:border-[#172036] px-[25px] pt-[19px] pb-[15px] absolute z-[2] right-0 top-0 left-0">
          <Link to="#" className="transition-none relative flex items-center">
            <img src={Logo} alt="logo" className="inline-block dark:hidden" />
            <img src={Logo2} alt="logo" className="hidden dark:inline-block" />
            {/* <span className="font-bold text-black dark:text-white relative ltr:ml-[8px] rtl:mr-[8px] top-px text-xl">
              4Hmi
            </span> */}
          </Link>
          <button
            type="button"
            className="burger-menu inline-block absolute z-[3] top-[24px] ltr:right-[25px] rtl:left-[25px] transition-all hover:text-primary-500"
            id="hide-sidebar-toggle2"
            onClick={handlerSidebarClose}
          >
            <i className="material-symbols-outlined">close</i>
          </button>
        </div>
        <div
          className="pt-[89px] px-[25px] pb-[20px] h-screen overflow-y-scroll custom-scrollbar"
          data-simplebar
        >
          <div className="accordion">
            <span className="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs">
              Main
            </span>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["dashboard"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "dashboard")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  dashboard
                </i>
                <span className="title leading-none">Dashboard</span>
                <span className="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-orange-500 bg-orange-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
                  2
                </span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["dashboard"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu" id="dashboardItemsList">
                    {dashboardItemsList?.map((item, index) => (
                      <li
                        key={index}
                        className="sidemenu-item mb-[4px] last:mb-0"
                      >
                        <NavLink
                          to={item?.link}
                          className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                        >
                          {item.title}
                          {item?.key === "top" && (
                            <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-purple-500 bg-purple-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                              {item?.keyvalue}
                            </span>
                          )}
                          {item?.key === "hot" && (
                            <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                              {item?.keyvalue}
                            </span>
                          )}
                          {item?.key === "popular" && (
                            <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-success-600 bg-success-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                              {item?.keyvalue}
                            </span>
                          )}
                          {item?.key === "new" && (
                            <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                              {item?.keyvalue}
                            </span>
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <button
                    id="showMoreToggleButton"
                    className="inline-block px-[17px] font-medium text-primary-500 transition-all mt-[3px] mb-[8px]"
                    type="button"
                  >
                    <span className="inline-block relative ltr:pr-[19px] rtl:pl-[19px]">
                      <span className="moreLessText">Show More</span>
                      <i className="plusMinusIcon ri-add-circle-fill absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 mt-px"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <span className="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
              receiption
            </span>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="to-do-list.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  badge
                </i>
                <span className="title leading-none">Doctors Entry</span>
              </a>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="calendar.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  person
                </i>
                <span className="title leading-none">Patient Registration</span>
              </a>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="chat.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  money
                </i>
                <span className="title leading-none">Due Collection</span>
              </a>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="kanban-board.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  receipt
                </i>
                <span className="title leading-none">Statement</span>
              </a>
            </div>

            <span className="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
              Settings
            </span>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["charts"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "charts")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  pie_chart
                </i>
                <span className="title leading-none">File</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["charts"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="line-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Test1
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Test2
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["charts"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "charts")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  pie_chart
                </i>
                <span className="title leading-none">Setup</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["charts"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="line-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add New Income Head
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add New Expense Head
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add New Department
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add New Category
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add New Test
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add New Country
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["charts"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "charts")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  pie_chart
                </i>
                <span className="title leading-none">Sales</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["charts"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="line-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add New Doctor
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add New Patient
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Due Collection
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Search Patient Info
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Refferel Doctor    
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["charts"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "charts")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  pie_chart
                </i>
                <span className="title leading-none">Report</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["charts"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="line-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Test1
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Test2
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["charts"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "charts")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  support
                </i>
                <span className="title leading-none">Help</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["charts"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="line-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Test1
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Test2
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="fp-index.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  logout
                </i>
                <span className="title leading-none">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Sidebar --> */}

      {/* <!-- Header --> */}
      <div
        className={`header-area bg-white dark:bg-[#0c1427] py-[13px] px-[20px] md:px-[25px] fixed top-0 z-[6] rounded-b-md transition-all ${
          sidecompact ? "active" : ""
        }`}
        id="header-area"
      >
        <Header setSidecompact={setSidecompact} sidecompact={sidecompact} />
      </div>
      {/* <!-- End Header --> */}
      {/* <!-- Main Content --> */}
      <div
        className={`main-content transition-all flex flex-col overflow-hidden min-h-screen ${
          sidecompact ? "active" : ""
        }`}
        id="main-content"
      >
        <Outlet />
      </div>
      {/* <!-- End Main Content --> */}
      {/* <!-- Footer --> */}
      <div
        className={`main-content transition-all flex flex-col overflow-hidden ${
          sidecompact ? "active" : ""
        }`}
        id="main-content"
      >
        <Footer />
      </div>
      {/* <!-- Footer --> */}
    </>
  );
}

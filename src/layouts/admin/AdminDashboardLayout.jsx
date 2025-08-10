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
    {
      title: "Patients",
      link: "/admin/patients",
      key: "popular",
      keyvalue: "Popular",
    },
    {
      title: "Pathology",
      link: "/admin/pathology",
      key: "hot",
      keyvalue: "Hot",
    },
    {
      title: "Doctors",
      link: "/admin/doctors",
    },
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
                  30
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
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["layout"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "layout")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  dock_to_right
                </i>
                <span className="title leading-none">Layout</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["layout"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="https://trezo-twcss-dark.envytheme.com/index.html"
                        target="_blank"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Dark Mode
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="https://trezo-dls.envytheme.com/index.html"
                        target="_blank"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Sidebar Dark
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="https://trezo-twcss-rtl.envytheme.com/index.html"
                        target="_blank"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        RTL Light
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="https://trezo-twcss-dark-rtl.envytheme.com/index.html"
                        target="_blank"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        RTL Dark
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["frontPages"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "frontPages")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  note_stack
                </i>
                <span className="title leading-none">Front Pages</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["frontPages"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="fp-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Home
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="fp-features.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Features
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="fp-team.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Team
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="fp-faq.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="fp-contact.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <span className="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
              Apps & Pages
            </span>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="to-do-list.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  format_list_bulleted
                </i>
                <span className="title leading-none">To Do List</span>
              </a>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="calendar.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  date_range
                </i>
                <span className="title leading-none">Calendar</span>
              </a>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="contacts.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  contact_page
                </i>
                <span className="title leading-none">Contacts</span>
              </a>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="chat.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  chat
                </i>
                <span className="title leading-none">Chat</span>
              </a>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["email"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "email")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  mail
                </i>
                <span className="title leading-none">Email</span>
                <span className="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-success-500 bg-success-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
                  3
                </span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["email"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="email-inbox.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Inbox
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="email-compose.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Compose
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="email-read.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Read
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="kanban-board.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  team_dashboard
                </i>
                <span className="title leading-none">Kanban Board</span>
              </a>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["fileManager"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "fileManager")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  folder_open
                </i>
                <span className="title leading-none">File Manager</span>
                <span className="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-danger-500 bg-danger-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
                  7
                </span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["fileManager"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="my-drive.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        My Drive
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="md-assets.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Assets
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="md-projects.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="md-personal.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Personal
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="md-applications.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Applications
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="md-documents.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Documents
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="md-media.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Media
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["helpdesk"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "helpdesk")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  support
                </i>
                <span className="title leading-none">HelpDesk</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["helpdesk"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="tickets.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Tickets
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="ticket-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Ticket Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="agents.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Agents
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="reports.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Reports
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["userManagement"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "userManagement")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  badge
                </i>
                <span className="title leading-none">Doctor</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["userManagement"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="patients-list.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Patients List
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="add-patient.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add Patient
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="patient-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Patient Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="appointments.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Appointments
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="prescriptions.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Prescriptions
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="write-prescription.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Write a Prescription
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["events"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "events")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  local_activity
                </i>
                <span className="title leading-none">Events</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["events"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="events-grid.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Events Grid
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="events-list.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Events List
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="event-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Event Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="create-an-event.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Create An Event
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="edit-an-event.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Edit An Event
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["social"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "social")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  share
                </i>
                <span className="title leading-none">Social</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["social"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="social-profile.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="social-settings.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["invoices"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "invoices")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  content_paste
                </i>
                <span className="title leading-none">Invoices</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["invoices"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="invoices.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Invoices
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="invoice-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Invoice Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="create-invoice.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Create Invoice
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="edit-invoice.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Edit Invoice
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["users"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "users")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  person
                </i>
                <span className="title leading-none">Users</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["users"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="team-members.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Team Members
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="users-list.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Users List
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="add-user.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add User
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["profile"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "profile")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  account_box
                </i>
                <span className="title leading-none">Profile</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["profile"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="user-profile.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        User Profile
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="profile-teams.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Teams
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="profile-projects.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Projects
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="starter.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  star_border
                </i>
                <span className="title leading-none">Starter</span>
              </a>
            </div>
            <span className="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
              MODULES
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
                <span className="title leading-none">Charts</span>
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
                        Line
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="area-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Area
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="column-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Column
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="mixed-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Mixed
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="radialbar-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        RadialBar
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="radar-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Radar
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="pie-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Pie
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="polar-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Polar
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="more-charts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        More
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="notifications.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  notifications
                </i>
                <span className="title leading-none">Notifications</span>
              </a>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="members.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  people
                </i>
                <span className="title leading-none">Members</span>
              </a>
            </div>
            <span className="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
              Others
            </span>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="my-profile.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  account_circle
                </i>
                <span className="title leading-none">My Profile</span>
              </a>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["settings"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "settings")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  settings
                </i>
                <span className="title leading-none">Settings</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["settings"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="settings.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Account Settings
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="change-password.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Change Password
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="connections.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Connections
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="privacy-policy.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="terms-conditions.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle ${
                  openAccordions["multiLevelMenu"] ? "active" : ""
                } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                type="button"
                onClick={(e) => toggleAccordion(e, "multiLevelMenu")}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  unfold_more
                </i>
                <span className="title leading-none">Multi Level Menu</span>
              </button>
              <div
                className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                  openAccordions["multiLevelMenu"]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="#"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        First
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <button
                        type="button"
                        className={`sidemenu-link toggle rounded-md flex items-center relative transition-all font-medium text-gray-500 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${
                          openAccordions["secondLevel"] ? "active" : ""
                        }`}
                        onClick={(e) => toggleAccordion(e, "secondLevel")}
                      >
                        Second
                        <span className="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-orange-500 bg-orange-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
                          2
                        </span>
                      </button>
                      <div
                        className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                          openAccordions["secondLevel"]
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pt-[6px] ltr:pl-[20px] rtl:pr-[20px]">
                          <ul className="sidebar-sub-menu">
                            <li className="sidemenu-item mb-[4px] last:mb-0">
                              <a
                                href="#"
                                className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                              >
                                Second 1
                              </a>
                            </li>
                            <li className="sidemenu-item mb-[4px] last:mb-0">
                              <a
                                href="#"
                                className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                              >
                                Second 2
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="#"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Third
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

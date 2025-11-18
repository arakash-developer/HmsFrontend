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
  let receiptionItemsList = [
    {
      title: "Admin Entry",
      link: "/admin/doctors-entry",
      icon: "badge",
    },
  ];
  let settingsItemsList = [
    {
      title: "File",

      link: "/admin/file",
      subItems: [
        {
          title: "Test1",
          link: "/admin/file/test1",
        },
      ],
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
            {receiptionItemsList?.map((item, index) => (
              <div
                key={index}
                className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
              >
                <Link
                  to={item.link}
                  className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                >
                  <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                    {item.icon}
                  </i>
                  <span className="title leading-none">{item.title}</span>
                </Link>
              </div>
            ))}

            <span className="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
              Settings
            </span>

            {/* Replace hardcoded File/Setup accordions with dynamic rendering */}
            {settingsItemsList?.map((sItem, sIndex) => {
              const accId = `settings-${sIndex}`; // unique id per settings item
              return (
                <div
                  key={accId}
                  className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
                >
                  {sItem.subItems && sItem.subItems.length > 0 ? (
                    <>
                      <button
                        className={`accordion-button toggle ${
                          openAccordions[accId] ? "active" : ""
                        } flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]`}
                        type="button"
                        onClick={(e) => toggleAccordion(e, accId)}
                      >
                        <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                          pie_chart
                        </i>
                        <span className="title leading-none">
                          {sItem.title}
                        </span>
                      </button>
                      <div
                        className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                          openAccordions[accId]
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pt-[4px]">
                          <ul className="sidebar-sub-menu">
                            {sItem.subItems.map((sub, subIdx) => (
                              <li
                                key={`${accId}-sub-${subIdx}`}
                                className="sidemenu-item mb-[4px] last:mb-0"
                              >
                                <NavLink
                                  to={sub.link}
                                  className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                                >
                                  {sub.title}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={sItem.link || "#"}
                      className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                    >
                      <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                        pie_chart
                      </i>
                      <span className="title leading-none">{sItem.title}</span>
                    </Link>
                  )}
                </div>
              );
            })}
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

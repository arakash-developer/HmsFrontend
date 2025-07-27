import { Link, Outlet } from "react-router-dom";

import Footer from "@/components/main/admin/Footer";
import Header from "@/components/main/admin/Header";
import Logo from "@public/images/logo-small.svg";
import { useState } from "react";
export default function DashboardLayout() {
  let [sidecompact, setSidecompact] = useState(false);
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
            <img src={Logo} alt="logo-icon" />
            {/* <span className="font-bold text-black dark:text-white relative ltr:ml-[8px] rtl:mr-[8px] top-px text-xl">
              4Hmi
            </span> */}
          </Link>
          <button
            type="button"
            className="burger-menu inline-block absolute z-[3] top-[24px] ltr:right-[25px] rtl:left-[25px] transition-all hover:text-primary-500"
            id="hide-sidebar-toggle2"
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
                className="accordion-button toggle open active flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  dashboard
                </i>
                <span className="title leading-none">Dashboard</span>
                <span className="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-orange-500 bg-orange-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
                  30
                </span>
              </button>
              <div className="accordion-collapse block">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu" id="dashboardItemsList">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/admin"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Analytics
                      </Link>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/admin/accounts"
                        className="sidemenu-link active rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Accounts
                      </Link>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/admin/project-management"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Project Management
                      </Link>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/admin/lms"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        LMS
                      </Link>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/admin/helpdesk"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        HelpDesk
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          Hot
                        </span>
                      </Link>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/admin/analytics"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Analytics
                      </Link>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/admin/crypto"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Crypto
                      </Link>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/admin/sales"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Sales
                      </Link>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/admin/hospital"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Hospital
                      </Link>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <Link
                        to="/admin/hrm"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        HRM
                      </Link>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <Link
                        to="/admin/school"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        School
                      </Link>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <Link
                        to="/admin/call-center"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Call Center
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-success-600 bg-success-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          Popular
                        </span>
                      </Link>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <Link
                        to="/admin/marketing"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Marketing
                      </Link>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <Link
                        to="/admin/nft"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        NFT
                      </Link>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="saas-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        SaaS
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="real-estate-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Real Estate
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-purple-500 bg-purple-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          Top
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="shipment-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Shipment
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="finance-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Finance
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="pos-system-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        POS System
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="podcast-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Podcast
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="social-media-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Social Media
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="doctor-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Doctor
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="beauty-salon-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Beauty Salon
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="store-analysis-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Store Analysis
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="restaurant-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Restaurant
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="hotel-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Hotel
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="real-estate-agent-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Real Estate Agent
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="credit-card-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Credit Card
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="crypto-trader-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Crypto Trader
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
                    <li className="sidemenu-item itemHidden mb-[4px] last:mb-0">
                      <a
                        href="crypto-performance-index.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Crypto Perf.
                        <span className="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm">
                          New
                        </span>
                      </a>
                    </li>
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  dock_to_right
                </i>
                <span className="title leading-none">Layout</span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  note_stack
                </i>
                <span className="title leading-none">Front Pages</span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  mail
                </i>
                <span className="title leading-none">Email</span>
                <span className="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-success-500 bg-success-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
                  3
                </span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  folder_open
                </i>
                <span className="title leading-none">File Manager</span>
                <span className="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-danger-500 bg-danger-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
                  7
                </span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  shopping_cart
                </i>
                <span className="title leading-none">eCommerce</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="products-grid.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Products Grid
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="products-list.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Products List
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="product-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Product Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="create-product.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Create Product
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="edit-product.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Edit Product
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="cart.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Cart
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="checkout.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Checkout
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="orders.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Orders
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="order-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Order Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="create-order.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Create Order
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="order-tracking.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Order Tracking
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="customers.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Customers
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="customer-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Customer Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="categories.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Categories
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="sellers.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Sellers
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="seller-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Seller Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="create-seller.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Create Seller
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="reviews.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Reviews
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="refunds.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Refunds
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  handshake
                </i>
                <span className="title leading-none">CRM</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="crm-contacts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Contacts
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="crm-customers.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Customers
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="crm-leads.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Leads
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="crm-deals.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Deals
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  description
                </i>
                <span className="title leading-none">Project Management</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="project-overview.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Project Overview
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="projects-list.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Projects List
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="create-project.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Create Project
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="pm-clients.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Clients
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="pm-teams.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Teams
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="pm-kanban-board.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Kanban Board
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="pm-users.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Users
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  auto_stories
                </i>
                <span className="title leading-none">LMS</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="courses-list.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Courses List
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="course-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Course Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="lesson-preview.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Lesson Preview
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="create-course.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Create Course
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="edit-course.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Edit Course
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="instructors.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Instructors
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  support
                </i>
                <span className="title leading-none">HelpDesk</span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  store
                </i>
                <span className="title leading-none">NFT Marketplace</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="nft-marketplace.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Marketplace
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="nft-explore-all.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Explore All
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="nft-live-auction.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Live Auction
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="nft-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        NFT Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="nft-creators.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Creators
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="nft-creator-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Creator Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="nft-wallet-connect.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Wallet Connect
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="create-nft.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Create NFT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  real_estate_agent
                </i>
                <span className="title leading-none">Real Estate</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="property-list.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Property List
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="property-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Property Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="re-add-property.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add Property
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="re-agents.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Agents
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="re-agent-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Agent Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="re-add-agent.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Add Agent
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="re-customers.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Customers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  calculate
                </i>
                <span className="title leading-none">Finance</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="wallet.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Wallet
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="transactions.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Transactions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  badge
                </i>
                <span className="title leading-none">Doctor</span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  lunch_dining
                </i>
                <span className="title leading-none">Restaurant</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="menus.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Menus
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="dish-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Dish Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  hotel
                </i>
                <span className="title leading-none">Hotel</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="rooms-list.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Rooms List
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="room-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Room Details
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="guests-list.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Guests List
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  location_away
                </i>
                <span className="title leading-none">Real Estate Agent</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="rea-properties.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Properties
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="rea-property-details.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Property Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  paid
                </i>
                <span className="title leading-none">Crypto Trader</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="ct-transactions.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Transactions
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="ct-gainers-losers.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Gainers & Losers
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="ct-wallet.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Wallet
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  local_activity
                </i>
                <span className="title leading-none">Events</span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  share
                </i>
                <span className="title leading-none">Social</span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  content_paste
                </i>
                <span className="title leading-none">Invoices</span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  person
                </i>
                <span className="title leading-none">Users</span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  account_box
                </i>
                <span className="title leading-none">Profile</span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  emoji_emotions
                </i>
                <span className="title leading-none">Icons</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="material-symbols.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Material Symbols
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="remixicon.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        RemixIcon
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  qr_code_scanner
                </i>
                <span className="title leading-none">UI Elements</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="alerts.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Alerts
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="avatars.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Avatars
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="accordion.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Accordion
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="badges.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Badges
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="buttons.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Buttons
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="breadcrumb.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Breadcrumb
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="clipboard.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Clipboard
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="dropdowns.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Dropdowns
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="images.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Images
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="modal.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Modal
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="pagination.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Pagination
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="popover.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Popover
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="progress.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Progress
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="tooltips.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Tooltips
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="tabs.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Tabs
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="typography.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Typography
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="videos.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Videos
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="https://tailwindcss.com/docs/installation"
                        target="_blank"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="tables.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  table_chart
                </i>
                <span className="title leading-none">Tables</span>
              </a>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  forum
                </i>
                <span className="title leading-none">Forms</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="input-select.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Input & Select
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="checkboxes-radios.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Checkboxes & Radios
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="rich-text-editor.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Rich Text Editor
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="file-uploader.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        File Uploader
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  pie_chart
                </i>
                <span className="title leading-none">Charts</span>
              </button>
              <div className="accordion-collapse hidden">
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
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  lock_open
                </i>
                <span className="title leading-none">Authentication</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="sign-in.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Sign In
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="sign-up.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Sign Up
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="forgot-password.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Forgot Password
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="reset-password.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Reset Password
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="confirm-email.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Confirm Email
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="lock-screen.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Lock Screen
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="logout.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  content_copy
                </i>
                <span className="title leading-none">Extra Pages</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="pricing.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="timeline.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Timeline
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="faq.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="gallery.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Gallery
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="testimonials.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="search.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Search
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="coming-soon.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Coming Soon
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="blank-page.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Blank Page
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  error
                </i>
                <span className="title leading-none">Errors</span>
              </button>
              <div className="accordion-collapse hidden">
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="not-found.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        404 Error Page
                      </a>
                    </li>
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="internal-error.html"
                        className="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Internal Error
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="widgets.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  widgets
                </i>
                <span className="title leading-none">Widgets</span>
              </a>
            </div>
            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="maps.html"
                className="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  map
                </i>
                <span className="title leading-none">Maps</span>
              </a>
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  settings
                </i>
                <span className="title leading-none">Settings</span>
              </button>
              <div className="accordion-collapse hidden">
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
                className="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[28px] rtl:pr-[14px] rtl:pl-[28px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
                type="button"
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  unfold_more
                </i>
                <span className="title leading-none">Multi Level Menu</span>
              </button>
              <div className="accordion-collapse hidden">
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
                        className="sidemenu-link toggle rounded-md flex items-center relative transition-all font-medium text-gray-500 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                      >
                        Second
                        <span className="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-orange-500 bg-orange-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto">
                          2
                        </span>
                      </button>
                      <div className="accordion-collapse hidden">
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

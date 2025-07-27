import React from 'react'

const AdminDoctors = () => {
  return (
    <>

        {/* <!-- Main Content --> */}

            {/* <!-- Welcome --> */}
            <div
                className="trezo-card trezo_bg_head pt-[25px] md:pt-[8px] px-[20px] md:px-[35px] lg:px-[50px] ltr:2xl:pl-[105px] rtl:2xl:pr-[105px] ltr:2xl:pr-[80px] rtl:2xl:pl-[80px] rounded-md relative z-[1]"
           
            >
                <div className="trezo-card-content">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="md:pt-[40px] text-center ltr:md:text-left rtl:md:text-right">
                            <span className="block text-white text-base md:text-lg mb-[6px] lg:mb-[4px]">
                                Good Morning
                            </span>
                            <h1 className="mb-[10px] text-xl md:text-2xl font-black text-white">
                                Dr. Olivia John
                            </h1>
                            <span className="inline-block relative text-white text-xs uppercase ltr:pl-[20px] rtl:pr-[20px] mb-[9px]">
                                <img src="/images/icons/heart.png" className="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2" alt="heart" />
                                CARDIO SPECIALIST
                            </span>
                            <p className="text-gray-300">
                                Today you have <span className="text-white">15</span> Consultations and <span className="text-white">12</span> Operations.
                            </p>
                        </div>
                        <div className="text-center mt-[15px] md:mt-0 ltr:md:text-right rtl:md:text-left">
                            <img src="/images/main-doctor.png" className="inline-block" alt="doctor-image" />
                        </div>
                    </div>
                </div>
                <div className="absolute ltr:right-0 rtl:left-0 bottom-0 -z-[1] rtl:-scale-x-[1]">
                    <img src="/images/line.png" alt="line" />
                </div>
                <div className="hidden md:block absolute top-[60px] ltr:right-[40px] rtl:left-[40px] ltr:lg:right-[85px] rtl:lg:left-[85px] -z-[1] rtl:-scale-x-[1]">
                    <img src="/images/star.png" alt="star" />
                </div>
            </div>

            <div className="lg:px-[30px] 2xl:px-[80px] mt-[25px] lg:-mt-[25px] relative z-[1]">

                {/* <!-- Stats --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] mb-[25px]">
                    
                    {/* <!-- Appointments --> */}
                    <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                        <div className="trezo-card-content flex justify-between">
                            <div>
                                <span className="block">
                                    Appointments
                                </span>
                                <h2 className="text-xl md:text-2xl font-black mt-[5px] mb-[8px]">
                                    32
                                </h2>
                                <span className="inline-block text-xs rounded-[30px] px-[10px] border border-orange-300 text-danger-500 bg-orange-100 dark:border-[#15203c] dark:bg-[#15203c]">
                                    -0.04%
                                </span>
                            </div>
                            <div className="mt-[5px]">
                                <img src="/images/icons/add-event.svg" alt="add-event" />
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Patients --> */}
                    <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                        <div className="trezo-card-content flex justify-between">
                            <div>
                                <span className="block">
                                    Patients
                                </span>
                                <h2 className="text-2xl font-black mt-[5px] mb-[8px]">
                                    334
                                </h2>
                                <span className="inline-block text-xs rounded-[30px] px-[10px] border border-success-300 text-success-700 bg-success-100 dark:border-[#15203c] dark:bg-[#15203c]">
                                    +7%
                                </span>
                            </div>
                            <div className="mt-[5px]">
                                <img src="/images/icons/examination.svg" alt="examination" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Operations --> */}
                    <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                        <div className="trezo-card-content flex justify-between">
                            <div>
                                <span className="block">
                                    Operations
                                </span>
                                <h2 className="text-2xl font-black mt-[5px] mb-[8px]">
                                    12
                                </h2>
                                <span className="inline-block text-xs rounded-[30px] px-[10px] border border-success-300 text-success-700 bg-success-100 dark:border-[#15203c] dark:bg-[#15203c]">
                                    +5.4%
                                </span>
                            </div>
                            <div className="mt-[5px]">
                                <img src="/images/icons/scissors.svg" alt="scissors" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Earnings --> */}
                    <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                        <div className="trezo-card-content flex justify-between">
                            <div>
                                <span className="block">
                                    Earnings
                                </span>
                                <h2 className="text-2xl font-black mt-[5px] mb-[8px]">
                                    $312
                                </h2>
                                <span className="inline-block text-xs rounded-[30px] px-[10px] border border-orange-300 text-danger-500 bg-orange-100 dark:border-[#15203c] dark:bg-[#15203c]">
                                    -1.4%
                                </span>
                            </div>
                            <div className="mt-[5px]">
                                <img src="/images/icons/money-bag.svg" alt="money-bag" /> 
                            </div>
                        </div>
                    </div>
    
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
                    <div className="lg:col-span-2">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[25px]">

                            {/* <!-- Patient Retention --> */}
                            <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                                <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                                    <div className="trezo-card-title">
                                        <h5 className="mb-0">
                                            Patient Retention
                                        </h5>
                                    </div>
                                    <div className="trezo-card-subtitle">
                                        <div className="trezo-card-dropdown relative">
                                            <button type="button" className="trezo-card-dropdown-btn inline-block transition-all text-[26px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500" id="dropdownToggleBtn">
                                                <i className="ri-more-fill"></i>
                                            </button>
                                            <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                                                <li>
                                                    <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                        This Day
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                        This Week
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                        This Month
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                        This Year
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="trezo-card-content">
                                    <div className="-mt-[22px] ltr:-ml-[15px] rtl:-mr-[15px] -mb-[25px]">
                                        <div id="doctorPatientRetentionChart"></div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Patient Distribution --> */}
                            <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                                <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                                    <div className="trezo-card-title">
                                        <h5 className="mb-0">
                                            Patient Distribution
                                        </h5>
                                    </div>
                                    <div className="trezo-card-subtitle">
                                        <div className="trezo-card-dropdown relative">
                                            <button type="button" className="trezo-card-dropdown-btn inline-block rounded-md border border-[#F5F7F8] bg-[#F5F7F8] dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]" id="dropdownToggleBtn">
                                                <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                                                    Weekly
                                                    <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"></i>
                                                </span>
                                            </button>
                                            <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                                                <li>
                                                    <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                        Weekly
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                        Monthly
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                        Yearly
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="trezo-card-content">
                                    <div className="-mt-[9px]">
                                        <div id="doctorPatientDistributionChart"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <!-- Upgrade Plan --> */}
                        <div
                            className="trezo-card trezo_bg_second py-[20px] md:py-[18.5px] px-[20px] md:px-[25px] rounded-md mb-[25px]"
                          
                        >
                            <div className="trezo-card-content">
                                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[15px]">
                                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                                        <h3 className="mb-0 text-white font-semibold max-w-[250px] leading-[1.5] text-lg md:text-[20px]">
                                            Upgrade Plan To Manage 20K+ Patients
                                        </h3>
                                    </div>
                                    <div className="text-center ltr:sm:text-right rtl:sm:text-left">
                                        <img src="/images/users.png" className="inline-block" alt="users-image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Income vs Expense --> */}
                        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                                <div className="trezo-card-title">
                                    <h5 className="mb-0">
                                        Income vs Expense
                                    </h5>
                                </div>
                                <div className="trezo-card-subtitle">
                                    <div className="trezo-card-dropdown relative">
                                        <button type="button" className="trezo-card-dropdown-btn inline-block rounded-md border border-[#F5F7F8] bg-[#F5F7F8] dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]" id="dropdownToggleBtn">
                                            <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                                                This Week
                                                <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"></i>
                                            </span>
                                        </button>
                                        <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                                            <li>
                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                    This Day
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                    This Week
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                    This Month
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                    This Year
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="trezo-card-content">
                                <div className="-mt-[22px] ltr:-ml-[15px] rtl:-mr-[15px] -mb-[25px]">
                                    <div id="doctorIncomeVsExpenseChart"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="lg:col-span-1">

                        {/* <!-- Today's Schedule --> */}
                        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                            <div className="trezo-card-header mb-[20px] md:mb-[22px] flex items-center justify-between">
                                <div className="trezo-card-title">
                                    <h5 className="mb-0">
                                        Today's Schedule
                                    </h5>
                                </div>
                            </div>
                            <div className="trezo-card-content">
                                <div id="workingScheduleCalendar">
                                    <div className="header flex items-center justify-between mb-[20px]">
                                        <button id="prevBtn" className="transition-all text-black bg-[#E6EFF2] dark:text-white dark:bg-[#172036] flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-primary-500 hover:text-white">
                                            <i className="material-symbols-outlined">
                                                chevron_left
                                            </i>
                                        </button>
                                        <span id="monthYear" className="block font-medium text-black dark:text-white"></span>
                                        <button id="nextBtn" className="transition-all text-black bg-[#E6EFF2] dark:text-white dark:bg-[#172036] flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-primary-500 hover:text-white">
                                            <i className="material-symbols-outlined">
                                                chevron_right
                                            </i>
                                        </button>
                                    </div>
                                    <div className="calendar grid grid-cols-7 text-center">
                                        {/* <!-- Days of the week --> */}
                                        <div className="days">Sun</div>
                                        <div className="days">Mon</div>
                                        <div className="days">Tue</div>
                                        <div className="days">Wed</div>
                                        <div className="days">Thu</div>
                                        <div className="days">Fri</div>
                                        <div className="days">Sat</div>
                                        {/* <!-- Dates will be injected here by JavaScript --> */}
                                    </div>
                                </div>
                                <div className="border-top border-[1px] border-gray-100 dark:border-[#172036] border-dashed mt-[10px] mb-[20px]"></div>
                                <div className="schedule-list h-[493px] overflow-y-scroll ltr:-mr-[20px] ltr:md:-mr-[25px] rtl:-ml-[20px] rtl:md:-ml-[25px] ltr:pr-[20px] ltr:md:pr-[25px] rtl:pl-[20px] rtl:md:pl-[25px]">
                                    <div className="p-[20px] md:p-[25px] rounded-md bg-primary-100 dark:bg-[#172036] relative z-[1] mt-[12px] first:mt-0">
                                        <span className="block text-black dark:text-white font-semibold">
                                            10:00 AM
                                        </span>
                                        <p className="mt-[3px] mb-[9px]">
                                            Appointment With Cardiac Patient
                                        </p>
                                        <div className="flex items-center gap-[5px]">
                                            <img src="/images/users/user1.jpg" alt="user-image" className="rounded-full w-[24px] border-[1px] border-white dark:border-black" /> 
                                            <span className="block font-medium">
                                                Jonathon Ronan
                                            </span>
                                        </div>
                                        <div className="mt-[15px] flex items-center justify-between">
                                            <button type="button" className="inline-block font-medium py-[5.5px] px-[16px] bg-white dark:bg-[#0C1427] rounded-md text-primary-500 transition-all hover:bg-primary-500 hover:text-white">
                                                View Details
                                            </button>
                                            <button type="button" className="flex items-center justify-center rounded-full bg-white dark:bg-[#0C1427] text-primary-500 transition-all hover:bg-primary-500 hover:text-white w-[28px] h-[28px]">
                                                <i className="ri-notification-2-line"></i>
                                            </button>
                                        </div>
                                        <div className="absolute -z-[1] ltr:right-0 rtl:left-0 top-0 rtl:-scale-x-[1] dark:opacity-[0.2]">
                                            <img src="/images/cut-circle.png" alt="cut-circle" />
                                        </div>
                                    </div>
                                    <div className="p-[20px] md:p-[25px] rounded-md bg-secondary-100 dark:bg-[#172036] relative z-[1] mt-[12px] first:mt-0">
                                        <span className="block text-black dark:text-white font-semibold">
                                            12:00 PM
                                        </span>
                                        <p className="mt-[3px] mb-[9px]">
                                            Major Cardiac Surgery of the patient
                                        </p>
                                        <div className="flex items-center gap-[5px]">
                                            <img src="/images/users/user2.jpg" alt="user-image" className="rounded-full w-[24px] border-[1px] border-white dark:border-black" />
                                            <span className="block font-medium">
                                                Walter White
                                            </span>
                                        </div>
                                        <div className="mt-[15px] flex items-center justify-between">
                                            <button type="button" className="inline-block font-medium py-[5.5px] px-[16px] bg-white dark:bg-[#0C1427] rounded-md text-secondary-500 transition-all hover:bg-secondary-500 hover:text-white">
                                                View Details
                                            </button>
                                            <button type="button" className="flex items-center justify-center rounded-full bg-white dark:bg-[#0C1427] text-secondary-500 transition-all hover:bg-secondary-500 hover:text-white w-[28px] h-[28px]">
                                                <i className="ri-notification-2-line"></i>
                                            </button>
                                        </div>
                                        <div className="absolute -z-[1] ltr:right-0 rtl:left-0 top-0 rtl:-scale-x-[1] dark:opacity-[0.2]">
                                            <img src="/images/cut-circle.png" alt="cut-circle" />
                                        </div>
                                    </div>
                                    <div className="p-[20px] md:p-[25px] rounded-md bg-purple-100 dark:bg-[#172036] relative z-[1] mt-[12px] first:mt-0">
                                        <span className="block text-black dark:text-white font-semibold">
                                            02:00 PM
                                        </span>
                                        <p className="mt-[3px] mb-[9px]">
                                            Board Meeting With
                                        </p>
                                        <div className="flex items-center gap-[5px]">
                                            <img src="/images/users/user3.jpg" alt="user-image" className="rounded-full w-[24px] border-[1px] border-white dark:border-black" />
                                            <span className="block font-medium">
                                                Jessy Pinkman
                                            </span>
                                        </div>
                                        <div className="mt-[15px] flex items-center justify-between">
                                            <button type="button" className="inline-block font-medium py-[5.5px] px-[16px] bg-white dark:bg-[#0C1427] rounded-md text-purple-500 transition-all hover:bg-purple-500 hover:text-white">
                                                View Details
                                            </button>
                                            <button type="button" className="flex items-center justify-center rounded-full bg-white dark:bg-[#0C1427] text-purple-500 transition-all hover:bg-purple-500 hover:text-white w-[28px] h-[28px]">
                                                <i className="ri-notification-2-line"></i>
                                            </button>
                                        </div>
                                        <div className="absolute -z-[1] ltr:right-0 rtl:left-0 top-0 rtl:-scale-x-[1] dark:opacity-[0.2]">
                                            <img src="/images/cut-circle.png" alt="cut-circle" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
                    <div className="lg:col-span-3">

                        {/* <!-- My Recent Patients --> */}
                        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                                <div className="trezo-card-title">
                                    <h5 className="mb-0">
                                        My Recent Patients
                                    </h5>
                                </div>
                                <div className="trezo-card-subtitle">
                                    <div className="trezo-card-dropdown relative">
                                        <button type="button" className="trezo-card-dropdown-btn inline-block rounded-md border border-[#F5F7F8] bg-[#F5F7F8] dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]" id="dropdownToggleBtn">
                                            <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                                                This Week
                                                <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"></i>
                                            </span>
                                        </button>
                                        <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                                            <li>
                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                    This Day
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                    This Week
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                    This Month
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
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
                                        <thead>
                                            <tr>
                                                <th className="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    ID
                                                </th>
                                                <th className="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    Patient Name
                                                </th>
                                                <th className="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    Disease
                                                </th>
                                                <th className="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    Payment Status
                                                </th>
                                                <th className="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    Status
                                                </th>
                                                <th className="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-black dark:text-white">
                                            <tr>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        #001
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="rounded-full w-[40px]">
                                                            <img src="/images/users/user33.jpg" className="inline-block rounded-full" alt="user-image" />
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold inline-block mb-px">
                                                                Johhna Loren
                                                            </span>
                                                            <span className="block text-gray-500 dark:text-gray-400 text-xs">
                                                                loren123@gmail.com
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        Heart Attack
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        Paid
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="inline-block text-xs px-[9px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px]">
                                                        Completed
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="trezo-card-dropdown relative">
                                                        <button type="button" className="trezo-card-dropdown-btn inline-block transition-all text-[20px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500" id="dropdownToggleBtn">
                                                            <i className="ri-more-2-fill"></i>
                                                        </button>
                                                        <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-add-fill text-primary-500"></i>
                                                                    View
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-multi-image-line text-primary-500"></i>
                                                                    Edit
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-dropbox-line text-primary-500"></i>
                                                                    Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        #002
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="rounded-full w-[40px]">
                                                            <img src="/images/users/user34.jpg" className="inline-block rounded-full" alt="user-image" />
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold inline-block mb-px">
                                                                Skyler White
                                                            </span>
                                                            <span className="block text-gray-500 dark:text-gray-400 text-xs">
                                                                skyqueen@gmail.com
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        Chest Pain
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        Paid
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="inline-block text-xs px-[9px] text-purple-700 border border-purple-300 bg-purple-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px]">
                                                        Pending
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="trezo-card-dropdown relative">
                                                        <button type="button" className="trezo-card-dropdown-btn inline-block transition-all text-[20px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500" id="dropdownToggleBtn">
                                                            <i className="ri-more-2-fill"></i>
                                                        </button>
                                                        <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-add-fill text-primary-500"></i>
                                                                    View
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-multi-image-line text-primary-500"></i>
                                                                    Edit
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-dropbox-line text-primary-500"></i>
                                                                    Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        #003
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="rounded-full w-[40px]">
                                                            <img src="/images/users/user35.jpg" className="inline-block rounded-full" alt="user-image" />
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold inline-block mb-px">
                                                                Jonathon Watson
                                                            </span>
                                                            <span className="block text-gray-500 dark:text-gray-400 text-xs">
                                                                jona2134@gmail.com
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        Breathing Issue
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        Unpaid
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="inline-block text-xs px-[9px] text-danger-700 border border-danger-300 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px]">
                                                        Failed
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="trezo-card-dropdown relative">
                                                        <button type="button" className="trezo-card-dropdown-btn inline-block transition-all text-[20px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500" id="dropdownToggleBtn">
                                                            <i className="ri-more-2-fill"></i>
                                                        </button>
                                                        <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md bottom-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-add-fill text-primary-500"></i>
                                                                    View
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-multi-image-line text-primary-500"></i>
                                                                    Edit
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-dropbox-line text-primary-500"></i>
                                                                    Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        #004
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="rounded-full w-[40px]">
                                                            <img src="/images/users/user36.jpg" className="inline-block rounded-full" alt="user-image" />
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold inline-block mb-px">
                                                                Walter White
                                                            </span>
                                                            <span className="block text-gray-500 dark:text-gray-400 text-xs">
                                                                puzzleworld@gmail.com
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        Heart Surgery
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        Paid
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="inline-block text-xs px-[9px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px]">
                                                        Completed
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="trezo-card-dropdown relative">
                                                        <button type="button" className="trezo-card-dropdown-btn inline-block transition-all text-[20px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500" id="dropdownToggleBtn">
                                                            <i className="ri-more-2-fill"></i>
                                                        </button>
                                                        <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md bottom-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-add-fill text-primary-500"></i>
                                                                    View
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-multi-image-line text-primary-500"></i>
                                                                    Edit
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-dropbox-line text-primary-500"></i>
                                                                    Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        #005
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="rounded-full w-[40px]">
                                                            <img src="/images/users/user37.jpg" className="inline-block rounded-full" alt="user-image" />
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold inline-block mb-px">
                                                                David Carlen
                                                            </span>
                                                            <span className="block text-gray-500 dark:text-gray-400 text-xs">
                                                                liveslong@gmail.com
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        CVD
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                        Unpaid
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <span className="inline-block text-xs px-[9px] text-purple-700 border border-purple-300 bg-purple-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px]">
                                                        Pending
                                                    </span>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="trezo-card-dropdown relative">
                                                        <button type="button" className="trezo-card-dropdown-btn inline-block transition-all text-[20px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500" id="dropdownToggleBtn">
                                                            <i className="ri-more-2-fill"></i>
                                                        </button>
                                                        <ul className="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md bottom-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none">
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-add-fill text-primary-500"></i>
                                                                    View
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-multi-image-line text-primary-500"></i>
                                                                    Edit
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black">
                                                                    <i className="ri-dropbox-line text-primary-500"></i>
                                                                    Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="pt-[9px] sm:flex sm:items-center justify-between">
                                    <p className="mb-0 text-xs">
                                        Showing 5 of 36 results
                                    </p>
                                    <ol className="mt-[10px] sm:mt-0">
                                        <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                            <a href="javascript:void(0);" className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                                <span className="opacity-0">
                                                    0
                                                </span>
                                                <i className="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                                                    chevron_left
                                                </i>
                                            </a>
                                        </li>
                                        <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                            <a href="javascript:void(0);" className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-primary-500 bg-primary-500 text-white">
                                                1
                                            </a>
                                        </li>
                                        <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                            <a href="javascript:void(0);" className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                                2
                                            </a>
                                        </li>
                                        <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                            <a href="javascript:void(0);" className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                                3
                                            </a>
                                        </li>
                                        <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                            <a href="javascript:void(0);" className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                                4
                                            </a>
                                        </li>
                                        <li className="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                                            <a href="javascript:void(0);" className="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500">
                                                <span className="opacity-0">
                                                    0
                                                </span>
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
                    <div className="lg:col-span-1">

                        {/* <!-- Recent Lab Reports --> */}
                        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                            <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                                <div className="trezo-card-title">
                                    <h5 className="mb-0">
                                        Recent Lab Reports
                                    </h5>
                                </div>
                            </div>
                            <div className="trezo-card-content">
                                <div className="table-responsive overflow-x-auto">
                                    <table className="w-full">
                                        <tbody className="text-black dark:text-white">
                                            <tr>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="w-[28px]">
                                                            <img src="/images/icons/pdf.png" className="inline-block" alt="user-image" />
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold inline-block mb-px">
                                                                Blood Report.pdf
                                                            </span>
                                                            <span className="block text-gray-500 dark:text-gray-400 text-xs">
                                                                submitted by <span className="text-black dark:text-white">Andrew</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <button type="button" className="lh-1 inline-block text-primary-500 text-[20px]">
                                                        <i className="ri-download-2-line"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="w-[28px]">
                                                            <img src="/images/icons/jpg.png" className="inline-block" alt="user-image" />
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold inline-block mb-px">
                                                                X-ray Report.jpg
                                                            </span>
                                                            <span className="block text-gray-500 dark:text-gray-400 text-xs">
                                                                submitted by <span className="text-black dark:text-white">Joanna</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <button type="button" className="lh-1 inline-block text-primary-500 text-[20px]">
                                                        <i className="ri-download-2-line"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="w-[28px]">
                                                            <img src="/images/icons/pdf.png" className="inline-block" alt="user-image" />
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold inline-block mb-px">
                                                                Creatinine Report.pdf
                                                            </span>
                                                            <span className="block text-gray-500 dark:text-gray-400 text-xs">
                                                                submitted by <span className="text-black dark:text-white">David</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <button type="button" className="lh-1 inline-block text-primary-500 text-[20px]">
                                                        <i className="ri-download-2-line"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="w-[28px]">
                                                            <img src="/images/icons/pdf.png" className="inline-block" alt="user-image" />
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold inline-block mb-px">
                                                                Blood Report
                                                            </span>
                                                            <span className="block text-gray-500 dark:text-gray-400 text-xs">
                                                                submitted by <span className="text-black dark:text-white">Zinia</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <button type="button" className="lh-1 inline-block text-primary-500 text-[20px]">
                                                        <i className="ri-download-2-line"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="w-[28px]">
                                                            <img src="/images/icons/doc.png" className="inline-block" alt="user-image" />
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold inline-block mb-px">
                                                                ECG Report.doc
                                                            </span>
                                                            <span className="block text-gray-500 dark:text-gray-400 text-xs">
                                                                submitted by <span className="text-black dark:text-white">Bella</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <button type="button" className="lh-1 inline-block text-primary-500 text-[20px]">
                                                        <i className="ri-download-2-line"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="w-[28px]">
                                                            <img src="/images/icons/pdf.png" className="inline-block" alt="user-image" />
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold inline-block mb-px">
                                                                Blood Report
                                                            </span>
                                                            <span className="block text-gray-500 dark:text-gray-400 text-xs">
                                                                submitted by <span className="text-black dark:text-white">Jonathon</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left">
                                                    <button type="button" className="lh-1 inline-block text-primary-500 text-[20px]">
                                                        <i className="ri-download-2-line"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

            <div className="grow"></div>



    
        {/* <!-- End Main Content --> */}
    </>
  )
}

export default AdminDoctors
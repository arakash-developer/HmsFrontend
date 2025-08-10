import Admin from "@public/images/admin.png";
import { useEffect, useRef, useState } from "react";

const Header = ({setSidecompact,sidecompact}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isConnectedOpen, setIsConnectedOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const profileRef = useRef(null);
  const languageRef = useRef(null);
  const connectedRef = useRef(null);
  const notificationsRef = useRef(null);
  const settingsRef = useRef(null);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const toggleConnected = () => {
    setIsConnectedOpen(!isConnectedOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    window.location.href = "/"; // Redirect to login page
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.log(`Error attempting to enable fullscreen: ${e.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    // Apply dark mode class to html element
    document.documentElement.classList.toggle("dark", isDarkMode);
    // Store preference
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (
        connectedRef.current &&
        !connectedRef.current.contains(event.target)
      ) {
        setIsConnectedOpen(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setIsNotificationsOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
const toggleSidebar = (e) => {
  e.preventDefault();
  setSidecompact(!sidecompact);
};
  return (
    <>
      {/* <!-- Header --> */}

      <div className="md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-center md:justify-normal">
          <div className="relative leading-none top-px ltr:mr-[13px] ltr:md:mr-[18px] ltr:lg:mr-[23px] rtl:ml-[13px] rtl:md:ml-[18px] rtl:lg:ml-[23px]">
            <button
              type="button"
              className="hide-sidebar-toggle transition-all inline-block hover:text-primary-500"
              id="hide-sidebar-toggle"
              onClick={toggleSidebar}
            >
              <i className="material-symbols-outlined !text-[20px]">menu</i>
            </button>
          </div>
          <form className="relative w-[250px] lg:w-[260px]">
            <input
              type="text"
              placeholder="Search here....."
              className="bg-gray-50 border border-gray-50 h-[44px] rounded-md w-full block text-black pt-[11px] pb-[12px] px-[13px] md:px-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
            />
            <button
              type="button"
              className="absolute text-primary-500 mt-[2px] ltr:right-[13px] ltr:md:right-[15px] rtl:left-[13px] rtl:md:left-[15px] top-1/2 -translate-y-1/2"
            >
              <i className="material-symbols-outlined !text-[20px]">search</i>
            </button>
          </form>
          <div
            className="connected-apps-menu relative ltr:ml-[13px] ltr:md:ml-[18px] ltr:lg:ml-[25px] rtl:ml-[r3px] rtl:md:mr-[18px] rtl:lg:mr-[25px]"
            ref={connectedRef}
          >
            <button
              type="button"
              className="transition-all relative top-[2px] hover:text-primary-500 connected-toggle"
              onClick={toggleConnected}
            >
              <i className="material-symbols-outlined !text-[22px] md:!text-[24px]">
                apps
              </i>
            </button>
            {isConnectedOpen && (
              <div className="connected-dropdown bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none pt-[20px] md:pt-[25px] px-[10px] md:px-[15px] pb-[5px] md:pb-[8px] absolute mt-[9px] md:mt-[20px] w-[240px] z-[1] top-full right-0 rounded-md">
                <ul className="grid grid-cols-3 text-center gap-[5px]">
                  <li>
                    <a
                      href="https://www.figma.com/"
                      className="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
                      target="_blank"
                    >
                      <img
                        src="/images/icons/figma.svg"
                        className="inline-block"
                        alt="figma"
                      />
                      <span className="block mt-[7px]">Figma</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dribbble.com/"
                      className="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
                      target="_blank"
                    >
                      <img
                        src="/images/icons/dribbble.svg"
                        className="inline-block"
                        alt="dribbble"
                      />
                      <span className="block mt-[7px]">Dribbble</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/"
                      className="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
                      target="_blank"
                    >
                      <img
                        src="/images/icons/spotify.svg"
                        className="inline-block"
                        alt="spotify"
                      />
                      <span className="block mt-[7px]">Spotify</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/"
                      className="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
                      target="_blank"
                    >
                      <img
                        src="/images/icons/gitlab.svg"
                        className="inline-block"
                        alt="gitlab"
                      />
                      <span className="block mt-[7px]">Gitlab</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/"
                      className="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
                      target="_blank"
                    >
                      <img
                        src="/images/icons/google-drive.svg"
                        className="inline-block"
                        alt="google-drive"
                      />
                      <span className="block mt-[7px]">GDrive</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://trello.com/"
                      className="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
                      target="_blank"
                    >
                      <img
                        src="/images/icons/trello.svg"
                        className="inline-block"
                        alt="trello"
                      />
                      <span className="block mt-[7px]">Trello</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://slack.com/"
                      className="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
                      target="_blank"
                    >
                      <img
                        src="/images/icons/slack.svg"
                        className="inline-block"
                        alt="slack"
                      />
                      <span className="block mt-[7px]">Slack</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/"
                      className="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
                      target="_blank"
                    >
                      <img
                        src="/images/icons/pinterest.svg"
                        className="inline-block"
                        alt="pinterest"
                      />
                      <span className="block mt-[7px]">Pinterest</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
                      target="_blank"
                    >
                      <img
                        src="/images/icons/facebook.svg"
                        className="inline-block"
                        alt="facebook"
                      />
                      <span className="block mt-[7px]">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
                      target="_blank"
                    >
                      <img
                        src="/images/icons/linkedin.svg"
                        className="inline-block"
                        alt="linkedIn"
                      />
                      <span className="block mt-[7px]">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <ul className="flex items-center justify-center md:justify-normal mt-[13px] md:mt-0">
          <li className="relative mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
            <button
              type="button"
              className="light-dark-toggle leading-none inline-block transition-all relative top-[2px] text-[#fe7a36]"
              onClick={toggleDarkMode}
            >
              <i className="material-symbols-outlined !text-[20px] md:!text-[22px]">
                {isDarkMode ? "dark_mode" : "light_mode"}
              </i>
            </button>
          </li>
          <li
            className="relative language-menu mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            ref={languageRef}
          >
            <button
              type="button"
              className="leading-none pr-[12px] inline-block transition-all relative top-[2px] hover:text-primary-500 language-toggle"
              onClick={toggleLanguage}
            >
              <i className="material-symbols-outlined !text-[20px] md:!text-[22px]">
                translate
              </i>
              <i className="ri-arrow-down-s-line text-[15px] absolute -right-[3px] top-1/2 -translate-y-1/2 -mt-[2px]"></i>
            </button>
            {isLanguageOpen && (
              <div className="language-dropdown bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none pt-[13px] md:pt-[14px] absolute mt-[18px] md:mt-[21px] w-[200px] md:w-[240px] z-[1] top-full ltr:left-0 ltr:md:left-auto ltr:lg:right-0 rtl:right-0 rtl:md:right-auto rtl:lg:left-0 rounded-md">
                <span className="block text-black dark:text-white font-semibold px-[20px] pb-[14px] text-sm md:text-[15px]">
                  Choose Language
                </span>
                <ul>
                  <li className="border-t border-dashed border-gray-100 dark:border-[#172036]">
                    <button
                      type="button"
                      className="text-black dark:text-white px-[20px] py-[12px] d-block w-full font-medium"
                    >
                      <div className="flex items-center">
                        <img
                          src="/images/flags/usa.svg"
                          className="w-[30px] ltr:mr-[10px] rtl:ml-[10px]"
                          alt="usa"
                        />
                        English
                      </div>
                    </button>
                  </li>
                  <li className="border-t border-dashed border-gray-100 dark:border-[#172036]">
                    <button
                      type="button"
                      className="text-black dark:text-white px-[20px] py-[12px] d-block w-full font-medium"
                    >
                      <div className="flex items-center">
                        <img
                          src="/images/flags/france.svg"
                          className="w-[30px] ltr:mr-[10px] rtl:ml-[10px]"
                          alt="france"
                        />
                        French
                      </div>
                    </button>
                  </li>
                  <li className="border-t border-dashed border-gray-100 dark:border-[#172036]">
                    <button
                      type="button"
                      className="text-black dark:text-white px-[20px] py-[12px] d-block w-full font-medium"
                    >
                      <div className="flex items-center">
                        <img
                          src="/images/flags/germany.svg"
                          className="w-[30px] ltr:mr-[10px] rtl:ml-[10px]"
                          alt="germany"
                        />
                        German
                      </div>
                    </button>
                  </li>
                  <li className="border-t border-dashed border-gray-100 dark:border-[#172036]">
                    <button
                      type="button"
                      className="text-black dark:text-white px-[20px] py-[12px] d-block w-full font-medium"
                    >
                      <div className="flex items-center">
                        <img
                          src="/images/flags/portugal.svg"
                          className="w-[30px] ltr:mr-[10px] rtl:ml-[10px]"
                          alt="portugal"
                        />
                        Portuguese
                      </div>
                    </button>
                  </li>
                  <li className="border-t border-dashed border-gray-100 dark:border-[#172036]">
                    <button
                      type="button"
                      className="text-black dark:text-white px-[20px] py-[12px] d-block w-full font-medium"
                    >
                      <div className="flex items-center">
                        <img
                          src="/images/flags/spain.svg"
                          className="w-[30px] ltr:mr-[10px] rtl:ml-[10px]"
                          alt="spain"
                        />
                        Spanish
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="relative mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
            <button
              type="button"
              className="fullscreen-btn leading-none inline-block transition-all relative top-[2px] hover:text-primary-500"
              onClick={toggleFullScreen}
            >
              <i className="material-symbols-outlined !text-[22px] md:!text-[24px]">
                {isFullscreen ? "fullscreen_exit" : "fullscreen"}
              </i>
            </button>
          </li>
          <li
            className="relative notifications-menu mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            ref={notificationsRef}
          >
            <button
              type="button"
              className="leading-none inline-block transition-all relative top-[2px] hover:text-primary-500 notifications-btn"
              onClick={toggleNotifications}
            >
              <i className="material-symbols-outlined !text-[22px] md:!text-[24px]">
                notifications
              </i>
              <span className="top-[3px] ltr:right-[4px] rtl:left-[4px] w-[6px] h-[6px] rounded-full absolute bg-orange-500"></span>
            </button>
            {isNotificationsOpen && (
              <div className="notifications-dropdown bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none py-[17px] absolute mt-[17px] md:mt-[20px] w-[290px] md:w-[350px] z-[1] top-full ltr:-right-[120px] ltr:md:right-0 rtl:-left-[120px] rtl:md:left-0 rounded-md">
                <div className="flex items-center justify-between px-[20px] pb-[17px]">
                  <span className="font-semibold text-black dark:text-white text-[15px]">
                    Notifications
                    <span className="text-gray-500 dark:text-gray-400 font-normal text-base">
                      (03)
                    </span>
                  </span>
                  <a href="javascript:void(0);" className="text-primary-500">
                    Clear All
                  </a>
                </div>
                <ul className="mb-[18px]">
                  <li className="relative border-b border-gray-100 dark:border-[#172036] border-dashed py-[17px] ltr:pl-[75px] ltr:pr-[20px] rtl:pr-[75px] rtl:pl-[20px] first:border-t first:border-gray-100 dark:first:border-[#172036]">
                    <div className="rounded-full flex items-center justify-center absolute text-center transition-all top-1/2 -translate-y-1/2 ltr:left-[20px] rtl:right-[20px] w-[44px] h-[44px] text-primary-500 bg-[#4936f50d]">
                      <i className="material-symbols-outlined !text-[22px]">
                        sms
                      </i>
                    </div>
                    <span className="block mb-[3px] text-black dark:text-white">
                      You have requested to{" "}
                      <strong className="font-semibold">withdrawal</strong>
                    </span>
                    <span className="block">2 hrs ago</span>
                    <a
                      href="notifications.html"
                      className="block left-0 top-0 right-0 bottom-0 z-[1] absolute"
                    ></a>
                  </li>
                  <li className="relative border-b border-gray-100 dark:border-[#172036] border-dashed py-[17px] ltr:pl-[75px] ltr:pr-[20px] rtl:pr-[75px] rtl:pl-[20px] first:border-t first:border-gray-100 dark:first:border-[#172036]">
                    <div className="rounded-full flex items-center justify-center absolute text-center transition-all top-1/2 -translate-y-1/2 ltr:left-[20px] rtl:right-[20px] w-[44px] h-[44px] text-[#39b2de] bg-[#4936f50d]">
                      <i className="material-symbols-outlined !text-[22px]">
                        person
                      </i>
                    </div>
                    <span className="block mb-[3px] text-black dark:text-white">
                      <strong className="font-semibold">A new user</strong>{" "}
                      added in Trezo
                    </span>
                    <span className="block">3 hrs ago</span>
                    <a
                      href="notifications.html"
                      className="block left-0 top-0 right-0 bottom-0 z-[1] absolute"
                    ></a>
                    <span className="inline-block rounded-full bg-primary-500 absolute w-[6px] h-[6px] right-[20px] top-1/2 -translate-y-1/2"></span>
                  </li>
                  <li className="relative border-b border-gray-100 dark:border-[#172036] border-dashed py-[17px] ltr:pl-[75px] ltr:pr-[20px] rtl:pr-[75px] rtl:pl-[20px] first:border-t first:border-gray-100 dark:first:border-[#172036]">
                    <div className="rounded-full flex items-center justify-center absolute text-center transition-all top-1/2 -translate-y-1/2 ltr:left-[20px] rtl:right-[20px] w-[44px] h-[44px] text-[#00b69b] bg-[#4936f50d]">
                      <i className="material-symbols-outlined !text-[22px]">
                        mark_email_unread
                      </i>
                    </div>
                    <span className="block mb-[3px] text-black dark:text-white">
                      You have requested to{" "}
                      <strong className="font-semibold">withdrawal</strong>
                    </span>
                    <span className="block">1 day ago</span>
                    <a
                      href="notifications.html"
                      className="block left-0 top-0 right-0 bottom-0 z-[1] absolute"
                    ></a>
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    href="notifications.html"
                    className="inline-block font-medium relative text-primary-500 transition-all hover:underline"
                  >
                    See All Notifications
                  </a>
                </div>
              </div>
            )}
          </li>
          <li
            className="relative profile-menu mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            ref={profileRef}
          >
            <button
              type="button"
              className="flex items-center -mx-[5px] relative ltr:pr-[14px] rtl:pl-[14px] text-black dark:text-white profile-toggle"
              onClick={toggleProfile}
            >
              <img
                src={Admin}
                className="w-[35px] h-[35px] md:w-[42px] md:h-[42px] rounded-full ltr:md:mr-[2px] ltr:lg:mr-[8px] rtl:md:ml-[2px] rtl:lg:ml-[8px] border-[2px] border-primary-200 inline-block"
                alt="admin-image"
              />
              <span className="block font-semibold text-[0] lg:text-base">
                Olivia
              </span>
              <i className="ri-arrow-down-s-line text-[15px] absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"></i>
            </button>
            {isProfileOpen && (
              <div className="profile-dropdown bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none py-[22px] absolute mt-[13px] md:mt-[14px] w-[195px] z-[1] top-full ltr:right-0 rtl:left-0 rounded-md">
                <div className="flex items-center border-b border-gray-100 dark:border-[#172036] pb-[12px] mx-[20px] mb-[10px]">
                  <img
                    src={Admin}
                    className="rounded-full w-[31px] h-[31px] ltr:mr-[9px] rtl:ml-[9px] border-2 border-primary-200 inline-block"
                    alt="admin-image"
                  />
                  <div>
                    <span className="block text-black dark:text-white font-medium">
                      Olivia John
                    </span>
                    <span className="block text-xs">Marketing Manager</span>
                  </div>
                </div>
                <ul>
                  <li
                    className="before:transition-all before:duration-[.5s] relative
                    before:content-[''] before:absolute before:w-[2px] before:h-0 before:bg-primary-500 before:left-0 before:top-1/2 before:-translate-y-1/2 hover:before:h-full
                    "
                  >
                    <a
                      href="my-profile.html"
                      className="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
                    >
                      <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                        account_circle
                      </i>
                      My Profile
                    </a>
                  </li>
                  <li
                    className="before:transition-all before:duration-[.5s] relative
                    before:content-[''] before:absolute before:w-[2px] before:h-0 before:bg-primary-500 before:left-0 before:top-1/2 before:-translate-y-1/2 hover:before:h-full
                    "
                  >
                    <a
                      href="my-profile.html"
                      className="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
                    >
                      <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                        flip_camera_android
                      </i>
                      Switch Account
                    </a>
                  </li>
                  <li
                    className="before:transition-all before:duration-[.5s] relative
                    before:content-[''] before:absolute before:w-[2px] before:h-0 before:bg-primary-500 before:left-0 before:top-1/2 before:-translate-y-1/2 hover:before:h-full
                    "
                  >
                    <a
                      href="chat.html"
                      className="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
                    >
                      <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                        chat
                      </i>
                      Messages
                    </a>
                  </li>
                  <li
                    className="before:transition-all before:duration-[.5s] relative
                    before:content-[''] before:absolute before:w-[2px] before:h-0 before:bg-primary-500 before:left-0 before:top-1/2 before:-translate-y-1/2 hover:before:h-full
                    "
                  >
                    <a
                      href="to-do-list.html"
                      className="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
                    >
                      <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                        format_list_bulleted
                      </i>
                      My Task
                    </a>
                  </li>
                  <li
                    className="before:transition-all before:duration-[.5s] relative
                    before:content-[''] before:absolute before:w-[2px] before:h-0 before:bg-primary-500 before:left-0 before:top-1/2 before:-translate-y-1/2 hover:before:h-full
                    "
                  >
                    <a
                      href="checkout.html"
                      className="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
                    >
                      <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                        credit_card
                      </i>
                      Billing
                    </a>
                  </li>
                </ul>
                <div className="border-t border-gray-100 dark:border-[#172036] mx-[20px] my-[9px]"></div>
                <ul>
                  <li
                    className="before:transition-all before:duration-[.5s] relative
                    before:content-[''] before:absolute before:w-[2px] before:h-0 before:bg-primary-500 before:left-0 before:top-1/2 before:-translate-y-1/2 hover:before:h-full
                    "
                  >
                    <a
                      href="settings.html"
                      className="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
                    >
                      <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                        settings
                      </i>
                      Settings
                    </a>
                  </li>
                  <li
                    className="before:transition-all before:duration-[.5s] relative
                    before:content-[''] before:absolute before:w-[2px] before:h-0 before:bg-primary-500 before:left-0 before:top-1/2 before:-translate-y-1/2 hover:before:h-full
                    "
                  >
                    <a
                      href="faq.html"
                      className="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
                    >
                      <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                        support
                      </i>
                      Support
                    </a>
                  </li>
                  <li
                    className="before:transition-all before:duration-[.5s] relative
                    before:content-[''] before:absolute before:w-[2px] before:h-0 before:bg-primary-500 before:left-0 before:top-1/2 before:-translate-y-1/2 hover:before:h-full
                    "
                  >
                    <a
                      href="lock-screen.html"
                      className="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
                    >
                      <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                        lock
                      </i>
                      Lock Screen
                    </a>
                  </li>
                  <li
                    className=" before:transition-all before:duration-[.5s] relative
                    before:content-[''] before:absolute before:w-[2px] before:h-0 before:bg-primary-500 before:left-0 before:top-1/2 before:-translate-y-1/2 hover:before:h-full
                    "
                  >
                    <div
                      onClick={handleLogout}
                      className="block relative py-[7px] cursor-pointer ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
                    >
                      <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                        logout
                      </i>
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="relative settings-menu mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            ref={settingsRef}
          >
            <button
              type="button"
              className="settings-menu-button leading-none inline-block transition-all relative top-[2px] hover:text-primary-500"
              onClick={toggleSettings}
            >
              <i className="material-symbols-outlined !text-[22px] md:!text-[24px]">
                settings
              </i>
            </button>
            {isSettingsOpen && (
              <div className="settings-dropdown bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none p-[20px] absolute mt-[17px] md:mt-[20px] w-[195px] z-[1] top-full ltr:right-0 rtl:left-0 rounded-md">
                <button
                  type="button"
                  className="rtl-mode-toggle flex items-center text-black dark:text-white font-medium"
                  id="rtl-mode-toggle"
                >
                  RTL Mode:
                  <span className="inline-block relative rounded-full w-[35px] h-[20px] bg-gray-50 dark:bg-[#0a0e19] ltr:ml-[10px] rtl:mr-[10px]">
                    <span className="inline-block transition-all absolute h-[12px] w-[12px] bg-black dark:bg-white rounded-full top-1/2 -translate-y-1/2"></span>
                  </span>
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* <!-- End Header --> */}
    </>
  );
};

export default Header;

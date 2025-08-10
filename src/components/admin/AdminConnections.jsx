import { getToken } from "@utils/auth";
import { useEffect, useState } from "react";

const Connections = () => {
  const [tokenObject, setTokenObject] = useState(null);

  useEffect(() => {
    const userToken = getToken();
    if (userToken) {
      // Store the actual token object for use in the component
      setTokenObject(userToken);
    }
  }, []);
  console.log("Hospitals:", tokenObject?.hospitals || "No hospitals data");

  return (
    <>
      {/* <!-- Main Content --> */}

      {/* <!-- Breadcrumb --> */}
      <div class="mb-[25px] md:flex items-center justify-between">
        <h5 class="mb-0">Connections</h5>
        <ol class="breadcrumb mt-[12px] md:mt-0">
          <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
            <a
              href="index.html"
              class="inline-block relative ltr:pl-[22px] rtl:pr-[22px] transition-all hover:text-primary-500"
            >
              <i class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 !text-lg -mt-px text-primary-500 top-1/2 -translate-y-1/2">
                home
              </i>
              Dashboard
            </a>
          </li>
          <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
            Settings
          </li>
          <li class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0">
            Connections
          </li>
        </ol>
      </div>

      {/* <!-- Connections --> */}
      <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
        <div class="trezo-card-content">
          <ul class="mb-[10px]">
            <li class="inline-block mb-[15px] ltr:mr-[11px] rtl:ml-[11px] ltr:last:mr-0 rtl:last:ml-0">
              <a
                href="settings.html"
                class="block rounded-md font-medium py-[8.5px] px-[15px] text-primary-500 border border-primary-500 transition-all hover:bg-primary-500 hover:text-white"
              >
                Account Settings
              </a>
            </li>
            <li class="inline-block mb-[15px] ltr:mr-[11px] rtl:ml-[11px] ltr:last:mr-0 rtl:last:ml-0">
              <a
                href="change-password.html"
                class="block rounded-md font-medium py-[8.5px] px-[15px] text-primary-500 border border-primary-500 transition-all hover:bg-primary-500 hover:text-white"
              >
                Change Password
              </a>
            </li>
            <li class="inline-block mb-[15px] ltr:mr-[11px] rtl:ml-[11px] ltr:last:mr-0 rtl:last:ml-0">
              <a
                href="connections.html"
                class="block rounded-md font-medium py-[8.5px] px-[15px] text-primary-500 border border-primary-500 transition-all bg-primary-500 text-white"
              >
                Connections
              </a>
            </li>
            <li class="inline-block mb-[15px] ltr:mr-[11px] rtl:ml-[11px] ltr:last:mr-0 rtl:last:ml-0">
              <a
                href="privacy-policy.html"
                class="block rounded-md font-medium py-[8.5px] px-[15px] text-primary-500 border border-primary-500 transition-all hover:bg-primary-500 hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li class="inline-block mb-[15px] ltr:mr-[11px] rtl:ml-[11px] ltr:last:mr-0 rtl:last:ml-0">
              <a
                href="terms-conditions.html"
                class="block rounded-md font-medium py-[8.5px] px-[15px] text-primary-500 border border-primary-500 transition-all hover:bg-primary-500 hover:text-white"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
          <h5 class="mb-[22px]">Connected Accounts</h5>
          <ul>
            {tokenObject?.hospitals.map((item) => (
              <li key={item.id} class="flex items-center justify-between mb-[20px] last:mb-0">
                <div class="flex items-center gap-[15px]">
                  <img
                    src="/images/socials/google.svg"
                    class="w-[40px]"
                    alt="google"
                  />
                  <div>
                    <span class="block text-black dark:text-white font-semibold">
                      {item?.hospital?.name}
                    </span>
                    <span class="block mt-[3px]">
                      {item?.role}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  class="inline-block transition-all text-primary-500 hover:underline"
                >
                  Click to Connect
                </button>
              </li>
            ))}
          </ul>
          <div class="border-t border-gray-100 dark:border-[#172036] my-[20px] md:my-[25px]"></div>
          <h5 class="mb-[22px]">Social Accounts</h5>
          <ul>
            <li class="flex items-center justify-between mb-[20px] last:mb-0">
              <div class="flex items-center gap-[15px]">
                <img
                  src="/images/socials/facebook.svg"
                  class="w-[40px]"
                  alt="facebook"
                />
                <span class="block text-black dark:text-white font-semibold">
                  Facebook
                </span>
              </div>
              <button
                type="button"
                class="inline-block transition-all text-primary-500 hover:underline"
              >
                Click to Connect
              </button>
            </li>
            <li class="flex items-center justify-between mb-[20px] last:mb-0">
              <div class="flex items-center gap-[15px]">
                <img
                  src="/images/socials/twitter.svg"
                  class="w-[40px]"
                  alt="twitter"
                />
                <span class="block text-black dark:text-white font-semibold">
                  X
                </span>
              </div>
              <button
                type="button"
                class="inline-block transition-all text-primary-500 hover:underline"
              >
                Click to Connect
              </button>
            </li>
            <li class="flex items-center justify-between mb-[20px] last:mb-0">
              <div class="flex items-center gap-[15px]">
                <img
                  src="/images/socials/instagram.svg"
                  class="w-[40px]"
                  alt="instagram"
                />
                <span class="block text-black dark:text-white font-semibold">
                  Instagram
                </span>
              </div>
              <button type="button" class="inline-block">
                Not Connected
              </button>
            </li>
            <li class="flex items-center justify-between mb-[20px] last:mb-0">
              <div class="flex items-center gap-[15px]">
                <img
                  src="/images/socials/dribbble.svg"
                  class="w-[40px]"
                  alt="dribbble"
                />
                <span class="block text-black dark:text-white font-semibold">
                  Dribbble
                </span>
              </div>
              <button
                type="button"
                class="inline-block transition-all text-primary-500 hover:underline"
              >
                Click to Connect
              </button>
            </li>
            <li class="flex items-center justify-between mb-[20px] last:mb-0">
              <div class="flex items-center gap-[15px]">
                <img
                  src="/images/socials/behance.svg"
                  class="w-[40px]"
                  alt="behance"
                />
                <span class="block text-black dark:text-white font-semibold">
                  Behance
                </span>
              </div>
              <button
                type="button"
                class="inline-block transition-all text-primary-500 hover:underline"
              >
                Click to Connect
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="grow"></div>

      {/* <!-- End Main Content --> */}
    </>
  );
};

export default Connections;

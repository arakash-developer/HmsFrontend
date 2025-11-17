const DeletePopup = ({ cancelDeletepopup, handledeletecountry }) => {
  return (
    <>
      <div
        class="z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px] backdrop-blur-[0.5px] add-new-popups"
        id="add-new-popup"
      >
        <div class="popup-dialog flex transition-all max-w-[850px] min-h-full items-center mx-auto">
          <div class="trezo-card w-full bg-gray-50 dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md">
              <div class="trezo-card-title">
                <h5 class="mb-0">Delete</h5>
              </div>
              <div class="trezo-card-subtitle">
                <div
                  onClick={cancelDeletepopup}
                  class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500 cursor-pointer"
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
                      Are you sure you want to delete this Category?
                    </label>
                  </div>
                </div>
                <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
                  <div
                    onClick={cancelDeletepopup}
                    class="cursor-pointer inline-block bg-primary-500 text-white py-[10px] px-[26.5px] transition-all rounded-md hover:bg-primary-400 ltr:mr-[15px] rtl:ml-[15px]"
                  >
                    <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                      <i class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                        close
                      </i>
                      Close
                    </span>
                  </div>
                  <div
                    class="cursor-pointer rounded-md inline-block transition-all font-medium  px-[26.5px] py-[10px] bg-danger-500 text-white hover:bg-danger-400"
                    id="add-new-popup-toggle"
                    onClick={handledeletecountry}
                  >
                    <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                      <i class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                        delete
                      </i>
                      Delete
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletePopup;

import useCrud from "@hooks/useCrud";
import { useToast } from "@hooks/useToast";
import { useEffect, useState } from "react";

const DueCreatePopup = ({
  patientSearchdata,
  patientId,
  setPopup,
  setPatientId,
}) => {
  const { showSuccess, showError } = useToast();
  const { update } = useCrud("api/duecollection/patientId");

  // Department collections and discounts
  const [departmentCollections, setDepartmentCollections] = useState({});
  const [departmentAgainDiscounts, setDepartmentAgainDiscounts] = useState({});
  const [totalCollection, setTotalCollection] = useState(0);

  // Handle collection input for each department
  const handleDepartmentCollection = (depname, collectionValue) => {
    const collection = Number(collectionValue) || 0;
    const dept = patientSearchdata?.procedurecalculation?.find(
      (item) => item.depname === depname
    );
    const due = dept?.due || 0;
    const againDiscount = due > collection ? due - collection : 0;

    setDepartmentCollections((prev) => ({
      ...prev,
      [depname]: collection,
    }));

    setDepartmentAgainDiscounts((prev) => ({
      ...prev,
      [depname]: againDiscount,
    }));
  };

  // Handle manual again discount input
  const handleAgainDiscount = (depname, discountValue) => {
    const discount = Number(discountValue) || 0;
    const dept = patientSearchdata?.procedurecalculation?.find(
      (item) => item.depname === depname
    );
    const due = dept?.due || 0;
    const validDiscount = discount > due ? due : discount;
    const collection = due - validDiscount;

    setDepartmentAgainDiscounts((prev) => ({
      ...prev,
      [depname]: validDiscount,
    }));

    setDepartmentCollections((prev) => ({
      ...prev,
      [depname]: collection,
    }));
  };

  // Calculate total collection
  useEffect(() => {
    const total = Object.values(departmentCollections).reduce(
      (sum, val) => sum + (Number(val) || 0),
      0
    );
    setTotalCollection(total);
  }, [departmentCollections]);

  const resetForm = () => {
    setDepartmentCollections({});
    setDepartmentAgainDiscounts({});
    setTotalCollection(0);
  };

  const closepopuphandler = () => {
    resetForm();
    setPopup(false);
  };

  const handleCancel = () => {
    resetForm();
    setPopup(false);
  };

  const handleSave = async () => {
    // Validate if any collection is made
    if (totalCollection === 0) {
      showError(
        "Validation Error",
        "Please enter at least one collection amount",
        {
          duration: 3000,
          showCloseButton: true,
        }
      );
      return;
    }

    // Prepare collection data with updated procedurecalculation
    const updatedProcedureCalculation =
      patientSearchdata?.procedurecalculation?.map((dept) => {
        const collection = departmentCollections[dept.depname] || 0;
        const againDiscount = departmentAgainDiscounts[dept.depname] || 0;
        const newPaid = (dept.paid || 0) + collection;
        const newDiscount = (dept.discount || 0) + againDiscount;
        const newDiscounted = dept.totalPrice - newDiscount;
        const newDue = newDiscounted - newPaid;

        return {
          depname: dept.depname,
          totalPrice: dept.totalPrice,
          discount: newDiscount,
          discounted: newDiscounted,
          paid: newPaid,
          due: newDue > 0 ? newDue : 0,
        };
      });

    const payload = {
      userId: "691c20c765b1956e514f1710", // Hardcoded as requested
      procedurecalculation: updatedProcedureCalculation,
    };

    update.mutate(
      {
        id: patientId,
        body: payload,
        onSuccess: () => {
          showSuccess("Success", "Collection saved successfully", {
            duration: 3000,
            showCloseButton: true,
          });
          resetForm();
          setPopup(false);
        },
      },
      {
        onError: (error) => {
          showError(
            "Error",
            error.response?.data?.message || "Failed to save collection",
            {
              duration: 3000,
              showCloseButton: true,
            }
          );
        },
      }
    );
  };

  return (
    <>
      <div
        className="z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px] backdrop-blur-[0.5px] add-new-popups"
        id="add-new-popup"
      >
        <div className="popup-dialog flex transition-all max-w-[90vw] min-h-full items-center mx-auto">
          <div className="trezo-card w-full bg-gray-50 dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div className="trezo-card-header bg-gray-50 dark:bg-[#15203c] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] py-3 text-center px-[20px] md:px-[25px] rounded-t-md">
              <div className="trezo-card-title text-center">
                <h5 className="mb-0 text-center">Due Collection</h5>
              </div>
              <div className="trezo-card-subtitle">
                <div
                  onClick={closepopuphandler}
                  className="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500 cursor-pointer"
                >
                  <i className="ri-close-fill"></i>
                </div>
              </div>
            </div>

            <fieldset className="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
              <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                Due Information
              </legend>
              <form className="">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-[6px] md:gap-y-[6px] gap-x-5">
                  <div className="patientsearch sm:col-span-2">
                    <fieldset className="trezo-card-content px-4 py-2 rounded-md">
                      <div className="flex items-center gap-x-4">
                        <label className="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                          Search Patient By Id. No
                        </label>
                        <input
                          type="number"
                          onChange={(e) => setPatientId(e.target.value)}
                          value={patientId}
                          className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                        />
                      </div>
                    </fieldset>
                  </div>

                  <div className="patientinfo sm:col-span-3">
                    <fieldset className="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                      <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                        Patient Info
                      </legend>
                      <div className="flex items-center gap-x-4">
                        <div className="">
                          <label className="text-black dark:text-white font-medium block flex-shrink-0">
                            Patient Name
                          </label>
                          <label className="text-black dark:text-white font-medium block flex-shrink-0">
                            Invoice Date
                          </label>
                        </div>
                        <div className="">
                          <div className="">:</div>
                          <div className="">:</div>
                        </div>
                        <div className="">
                          <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                            {patientSearchdata?.patientname || "N/A"}
                          </div>
                          <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                            {patientSearchdata?.date || "N/A"}
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  {patientSearchdata?.procedurecalculation?.length > 0 ? (
                    patientSearchdata?.procedurecalculation?.map(
                      (item, index) => (
                        <div key={index} className="pathology sm:col-span-1">
                          <fieldset className="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                            <legend className="px-2 capitalize text-sm text-[#000] dark:text-[#fff]">
                              {item?.depname}
                            </legend>
                            <div className="flex items-center gap-x-4">
                              <div className="">
                                <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                  Total
                                </label>
                                <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                  Discount
                                </label>
                                <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                  Paid
                                </label>
                                <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                  Due
                                </label>
                              </div>
                              <div className="">
                                <div className="">:</div>
                                <div className="">:</div>
                                <div className="">:</div>
                                <div className="">:</div>
                              </div>
                              <div className="">
                                <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                  {item?.totalPrice || 0}
                                </div>
                                <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                  {item?.discount || 0}
                                </div>
                                <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                  {item?.paid || 0}
                                </div>
                                <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                  {item?.due || 0}
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <fieldset className="sm:col-span-1 trezo-card-content border border-gray-400 px-4 py-2 rounded-md mt-2">
                            <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                              Present
                            </legend>
                            <div className="flex gap-x-4 items-center">
                              <div className="flex flex-col gap-y-2">
                                <label className="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                  Collection
                                </label>
                                <label className="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                  Again Discount
                                </label>
                              </div>
                              <div className="flex flex-col gap-y-2">
                                <input
                                  type="number"
                                  value={
                                    departmentCollections[item?.depname] || ""
                                  }
                                  onChange={(e) =>
                                    handleDepartmentCollection(
                                      item?.depname,
                                      e.target.value
                                    )
                                  }
                                  placeholder="0"
                                  className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                                />
                                <input
                                  type="number"
                                  value={
                                    departmentAgainDiscounts[item?.depname] ||
                                    ""
                                  }
                                  onChange={(e) =>
                                    handleAgainDiscount(
                                      item?.depname,
                                      e.target.value
                                    )
                                  }
                                  placeholder="0"
                                  className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                                />
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      )
                    )
                  ) : (
                    <>
                      <div className="pathology sm:col-span-1">
                        <fieldset className="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                          <legend className="px-2 capitalize text-sm text-[#000] dark:text-[#fff]">
                            Pathology
                          </legend>
                          <div className="flex items-center gap-x-4">
                            <div className="">
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Total
                              </label>
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Discount
                              </label>
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Paid
                              </label>
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Due
                              </label>
                            </div>
                            <div className="">
                              <div className="">:</div>
                              <div className="">:</div>
                              <div className="">:</div>
                              <div className="">:</div>
                            </div>
                            <div className="">
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="sm:col-span-1 trezo-card-content border border-gray-400 px-4 py-2 rounded-md mt-2">
                          <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                            Present
                          </legend>
                          <div className="flex gap-x-4 items-center">
                            <div className="flex flex-col gap-y-2">
                              <label className="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Collection
                              </label>
                              <label className="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Again Discount
                              </label>
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <input
                                type="number"
                                placeholder=""
                                className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                                disabled
                              />
                              <input
                                type="number"
                                disabled
                                placeholder=""
                                className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                              />
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="pathology sm:col-span-1">
                        <fieldset className="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                          <legend className="px-2 capitalize text-sm text-[#000] dark:text-[#fff]">
                            Xray & Ecg
                          </legend>
                          <div className="flex items-center gap-x-4">
                            <div className="">
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Total
                              </label>
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Discount
                              </label>
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Paid
                              </label>
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Due
                              </label>
                            </div>
                            <div className="">
                              <div className="">:</div>
                              <div className="">:</div>
                              <div className="">:</div>
                              <div className="">:</div>
                            </div>
                            <div className="">
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="sm:col-span-1 trezo-card-content border border-gray-400 px-4 py-2 rounded-md mt-2">
                          <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                            Present
                          </legend>
                          <div className="flex gap-x-4 items-center">
                            <div className="flex flex-col gap-y-2">
                              <label className="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Collection
                              </label>
                              <label className="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Again Discount
                              </label>
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <input
                                type="number"
                                placeholder=""
                                className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                                disabled
                              />
                              <input
                                type="number"
                                disabled
                                placeholder=""
                                className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                              />
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="ultrasono sm:col-span-1">
                        <fieldset className="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                          <legend className="px-2 capitalize text-sm text-[#000] dark:text-[#fff]">
                            UltraSono
                          </legend>
                          <div className="flex items-center gap-x-4">
                            <div className="">
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Total
                              </label>
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Discount
                              </label>
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Paid
                              </label>
                              <label className="text-black dark:text-white font-medium block flex-shrink-0">
                                Due
                              </label>
                            </div>
                            <div className="">
                              <div className="">:</div>
                              <div className="">:</div>
                              <div className="">:</div>
                              <div className="">:</div>
                            </div>
                            <div className="">
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                              <div className="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500"></div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="sm:col-span-1 trezo-card-content border border-gray-400 px-4 py-2 rounded-md mt-2">
                          <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                            Present
                          </legend>
                          <div className="flex gap-x-4 items-center">
                            <div className="flex flex-col gap-y-2">
                              <label className="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Collection
                              </label>
                              <label className="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Again Discount
                              </label>
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <input
                                type="number"
                                placeholder=""
                                className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                                disabled
                              />
                              <input
                                type="number"
                                disabled
                                placeholder=""
                                className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                              />
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </>
                  )}

                  <div className="total sm:col-span-3">
                    <fieldset className="w-full trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                      <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                        Total Collection
                      </legend>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-4 w-full">
                          <label className="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                            Total Collection
                          </label>
                          <input
                            type="number"
                            value={totalCollection}
                            readOnly
                            className="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-gray-100 dark:bg-[#0a1018] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow cursor-not-allowed"
                          />
                        </div>
                        <div className="buttons w-full flex justify-end gap-3">
                          <div
                            onClick={handleCancel}
                            className="cursor-pointer rounded-md inline-block transition-all font-medium px-[26.5px] py-[10px] bg-danger-500 text-white hover:bg-danger-400"
                          >
                            Cancel
                          </div>
                          <div
                            onClick={handleSave}
                            className="cursor-pointer inline-block bg-primary-500 text-white py-[10px] px-[26.5px] transition-all rounded-md hover:bg-primary-400"
                          >
                            <span className="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                              <i className="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                                save
                              </i>
                              Save
                            </span>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
};

export default DueCreatePopup;

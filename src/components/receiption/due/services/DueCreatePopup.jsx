import useCrud from "@/hooks/useCrud";
import useDatePicker from "@/hooks/useDatePicker";
import { useToast } from "@hooks/useToast";
import { useEffect, useRef, useState } from "react";
const DueCreatePopup = ({
  cancelcountrypopup,
  patientSearchdata,
  patientrefetch,
  patientId,
  selectedTest,
  setPopup,
  setPatientId,
  patientcreate,
  selectedCategory,
  date,
  setDate,
  setSelectedCategory,
  setTestIds,
  testIds,
  doctorData,
  setTestList,
  testList,
  qualification,
  setQualification,
  setSelectedTest,
  data,
  handleDeletepopup,
  filteredTests,
}) => {
  console.log("dd", patientSearchdata?.procedurecalculation);

  const { showSuccess, showError } = useToast();
  const [form, setForm] = useState({
    date: "",
    patientName: "",

    refdoctor: "",
    age: "",
    phone: "",
  });
  const [finalTotalCalculation, setFinalTotalCalculation] = useState({});
  const [dueAmount, setDueAmount] = useState();
  const [sex, setSex] = useState();
  const [totals, setTotals] = useState({
    totalDiscount: 0,
    totalDiscountedPrice: 0,
    totalDiscountAmount: 0,
  });
  const [testIdObjects, setTestIdObjects] = useState([]);
  const handleTestSelectChange = (e) => {
    const id = e.target.value;
    const obj = filteredTests.find((t) => t._id === id);

    // Prevent duplicates
    if (testList.some((item) => item._id === obj._id)) {
      showError(
        "Duplicate Test",
        "This test has already been added to the list",
        {
          duration: 3000,
          showCloseButton: true,
        }
      );
      return;
    }

    // Add to testList
    setTestList((prev) => [...prev, obj]);

    // Create a new updated array for testIds
    const updatedTestIds = [...testIds, obj._id];
    setTestIds(updatedTestIds);

    // ⭐ EXTRA FUNCTIONALITY YOU WANT:
    setTestIdObjects(updatedTestIds.map((id) => ({ test: id })));
    clearValidationError("tests");
  };
  console.log("akash", testIdObjects);

  let handleDeleteProcedure = (id) => {
    setTestList((prev) => prev.filter((test) => test._id !== id));
    setTestIds((prev) => prev.filter((testId) => testId !== id));

    showSuccess("Test Removed", "Test has been removed from the list", {
      duration: 3000,
      showCloseButton: true,
    });
  };

  const [departmentTotals, setDepartmentTotals] = useState([]);
  const [departmentPayments, setDepartmentPayments] = useState({});

  useEffect(() => {
    if (!testList.length) {
      setDepartmentTotals([]);
      return;
    }

    const totalsMap = {};

    testList.forEach((test) => {
      const dept = test?.category?.department?.name?.toLowerCase() || "unknown";
      const price = Number(test?.testcharge || 0);

      totalsMap[dept] = (totalsMap[dept] || 0) + price;
    });

    // Convert map to array with structure matching updated backend schema
    const totalsArray = Object.entries(totalsMap).map(
      ([depname, totalPrice]) => {
        const discount = finalTotalCalculation[depname]?.discount || 0;
        const discounted = totalPrice - discount;
        const due = discounted; // due is same as discounted since no paid field

        return {
          depname,
          totalPrice,
          discount,
          discounted,
          due,
        };
      }
    );

    setDepartmentTotals(totalsArray);
  }, [testList, finalTotalCalculation]);

  const handleDiscountChange = (deptName, value) => {
    setFinalTotalCalculation((prev) => {
      const totalPrice =
        departmentTotals.find((d) => d.depname === deptName)?.totalPrice || 0;

      let discount = Number(value) || 0;

      // Clamp discount between 0 and totalPrice
      if (discount < 0) discount = 0;
      if (discount > totalPrice) discount = totalPrice;

      // Discounted price is total minus discount
      const discountedPrice = totalPrice - discount;

      return {
        ...prev,
        [deptName]: {
          discount,
          discountedPrice, // this is final price after discount
          discountAmount: discount, // store actual discount value for clarity
        },
      };
    });
  };

  const calculateTotals = (discountObj) => {
    let result = {
      totalDiscount: 0,
      totalDiscountedPrice: 0,
      totalDiscountAmount: 0,
    };

    departmentTotals.forEach((dept) => {
      const deptName = dept.depname;
      const totalPrice = dept.totalPrice;

      const discount = discountObj[deptName]?.discount || 0;
      const discountedPrice = totalPrice - discount;
      const discountAmount = discount;

      result.totalDiscount += discount;
      result.totalDiscountedPrice += discountedPrice;
      result.totalDiscountAmount += discountAmount;
    });

    setTotals(result);
  };
  useEffect(() => {
    calculateTotals(finalTotalCalculation);
  }, [finalTotalCalculation, departmentTotals]);
  const handlerPaid = (e) => {
    let paid = Number(e.target.value) || 0; // default 0 if empty or invalid
    const maxPayable = totals?.totalDiscountedPrice || 0; // cannot pay more than discounted
    if (paid < 0) paid = 0; // prevent negative
    if (paid > maxPayable) paid = maxPayable; // prevent overpay
    const due = maxPayable - paid; // calculate due
    setDueAmount(due);
  };

  const handleDepartmentPayment = (deptName, paidAmount) => {
    setDepartmentPayments((prev) => ({
      ...prev,
      [deptName]: Number(paidAmount) || 0,
    }));
  };

  const { displayDate, uiDate, backendDate, handleDateChange } =
    useDatePicker("Asia/Dhaka");
  const {
    displayDate: deleveryDate,
    uiDate: deleveryUiDate,
    backendDate: deleveryBackendDate,
    handleDateChange: handleDeleveryDateChange,
  } = useDatePicker("Asia/Dhaka");

  const { data: nextpatientid, refetch: refetchNextPatientId } =
    useCrud("api/nextpatientid");

  // Patient ID management with ref to prevent re-renders
  const [currentPatientId, setCurrentPatientId] = useState(null);
  const hasInitialized = useRef(false);

  // Initialize patient ID only once
  useEffect(() => {
    if (nextpatientid?.patientid && !hasInitialized.current) {
      setCurrentPatientId(nextpatientid.patientid);
      hasInitialized.current = true;
    }
  }, [nextpatientid]);

  const resetForm = () => {
    // Reset form fields
    setForm({
      date: "",
      patientName: "",
      refdoctor: "",
      age: "",
      phone: "",
    });

    // Reset all selections and calculations
    setSex("");
    setQualification("");
    setSelectedCategory("");
    setSelectedTest("");
    setTestList([]);
    setTestIds([]);
    setTestIdObjects([]);

    // Reset calculation states
    setFinalTotalCalculation({});
    setDueAmount(0);
    setTotals({
      totalDiscount: 0,
      totalDiscountedPrice: 0,
      totalDiscountAmount: 0,
    });
    setDepartmentTotals([]);
    setDepartmentPayments({});

    // Reset validation errors
    setValidationErrors({});
    setIsSubmitting(false);
  };

  // Validation states
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form validation function
  const validateForm = () => {
    const errors = {};

    // Patient Name validation
    if (!form.patientName?.trim()) {
      errors.patientName = "Patient name is required";
    } else if (form.patientName.trim().length < 2) {
      errors.patientName = "Patient name must be at least 2 characters";
    }

    // Age validation
    if (!form.age) {
      errors.age = "Age is required";
    } else if (isNaN(form.age) || form.age < 0 || form.age > 150) {
      errors.age = "Please enter a valid age (0-150)";
    }

    // Phone validation
    if (!form.phone?.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{10,15}$/.test(form.phone.trim())) {
      errors.phone = "Please enter a valid phone number";
    }

    // Sex validation
    if (!sex || sex === "") {
      errors.sex = "Please select patient sex";
    }

    // Date validation
    if (!backendDate) {
      errors.date = "Date is required";
    }

    // Delivery date validation
    if (!deleveryBackendDate) {
      errors.deleveryDate = "Delivery date is required";
    }

    // Doctor validation
    if (!qualification || qualification === "") {
      errors.refdoctor = "Please select a referring doctor";
    }

    // Test validation
    if (!testList || testList.length === 0) {
      errors.tests = "Please add at least one test";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Clear specific validation error
  const clearValidationError = (field) => {
    setValidationErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  // Enhanced form field handlers with validation clearing
  const handleFormChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    clearValidationError(field);
  };

  const handleSexChange = (value) => {
    setSex(value);
    clearValidationError("sex");
  };

  const handleDoctorChange = (value) => {
    setQualification(value);
    clearValidationError("refdoctor");
  };

  const handleDateChangeWithValidation = (dates) => {
    handleDateChange(dates);
    clearValidationError("date");
  };

  const handleDeliveryDateChangeWithValidation = (dates) => {
    handleDeleveryDateChange(dates);
    clearValidationError("deleveryDate");
  };

  const patientReg = async () => {
    if (isSubmitting) return;

    if (!validateForm()) {
      showError(
        "Validation Error",
        "Please fill in all required fields correctly",
        {
          duration: 5000,
          showCloseButton: true,
        }
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare procedure calculation data for backend
      const procedureCalculationData = departmentTotals.map((dept) => ({
        depname: dept.depname,
        totalPrice: dept.totalPrice,
        discount: dept.discount,
        discounted: dept.discounted,
        due: dept.due,
      }));

      const patientData = {
        patientid: currentPatientId,
        patientname: form.patientName.trim(),
        sex: sex,
        age: parseInt(form.age),
        date: backendDate,
        deleveryDate: deleveryBackendDate,
        refDoctor: qualification,
        phone: form.phone.trim(),
        receptionist: receptionistId, // Use extracted receptionist ID
        procedures: testIdObjects,
        procedurecalculation: procedureCalculationData,
        totalCharge:
          (totals?.totalDiscountedPrice || 0) +
          (totals?.totalDiscountAmount || 0),
        totalDiscount: totals?.totalDiscountAmount || 0,
        totalDiscounted: totals?.totalDiscountedPrice || 0,
        totalPaid: (totals?.totalDiscountedPrice || 0) - (dueAmount || 0),
        totalDue: dueAmount || 0,
      };

      await patientcreate.mutateAsync(patientData);

      showSuccess(
        "Operation Successful",
        "Patient registration completed successfully",
        {
          duration: 5000,
          showCloseButton: true,
        }
      );

      // Call parent refetch first
      patientrefetch();

      const result = await refetchNextPatientId();
      if (result?.data?.patientid) {
        setCurrentPatientId(result.data.patientid);
      }

      // Reset form and close popup
      resetForm();
      setPopup(false);
    } catch (error) {
      console.error("Patient registration error:", error);
      showError(
        "Operation Failed",
        "Something went wrong during patient registration. Please try again later",
        {
          duration: 5000,
          showCloseButton: true,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const [token, setToken] = useState(null);
  const [receptionistId, setReceptionistId] = useState(null);

  useEffect(() => {
    let temptoken = localStorage.getItem("token") || null;

    if (temptoken) {
      try {
        let tokenData = JSON.parse(temptoken);
        setToken(tokenData);

        // Debug: Log the token structure
        console.log("Token data:", tokenData);

        // Try different possible token structures
        let extractedId = null;

        if (tokenData && tokenData.user && tokenData.user._id) {
          extractedId = tokenData.user._id;
        } else if (tokenData && tokenData._id) {
          extractedId = tokenData._id;
        } else if (tokenData && tokenData.id) {
          extractedId = tokenData.id;
        } else if (tokenData && tokenData.userId) {
          extractedId = tokenData.userId;
        } else if (typeof tokenData === "string") {
          // If token is just a string ID
          extractedId = tokenData;
        }

        console.log("Extracted receptionist ID:", extractedId);
        setReceptionistId(extractedId);
      } catch (error) {
        console.error("Error parsing token:", error);
        setToken(null);
        setReceptionistId(null);
      }
    } else {
      setToken(null);
      setReceptionistId(null);
    }
  }, []);

  const handleNewPatient = async () => {
    if (isSubmitting) return;

    if (!validateForm()) {
      showError(
        "Validation Error",
        "Please fill in all required fields correctly",
        {
          duration: 5000,
          showCloseButton: true,
        }
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare procedure calculation data for backend
      const procedureCalculationData = departmentTotals.map((dept) => ({
        depname: dept.depname,
        totalPrice: dept.totalPrice,
        discount: dept.discount,
        discounted: dept.discounted,
        due: dept.due,
      }));

      const patientData = {
        patientid: currentPatientId,
        patientname: form.patientName.trim(),
        sex: sex,
        age: parseInt(form.age),
        date: backendDate,
        deleveryDate: deleveryBackendDate,
        refDoctor: qualification,
        phone: form.phone.trim(),
        receptionist: receptionistId,
        procedures: testIdObjects,
        procedurecalculation: procedureCalculationData,
        totalCharge:
          (totals?.totalDiscountedPrice || 0) +
          (totals?.totalDiscountAmount || 0),
        totalDiscount: totals?.totalDiscountAmount || 0,
        totalDiscounted: totals?.totalDiscountedPrice || 0,
        totalPaid: (totals?.totalDiscountedPrice || 0) - (dueAmount || 0),
        totalDue: dueAmount || 0,
      };

      await patientcreate.mutateAsync(patientData);

      showSuccess(
        "Operation Successful",
        "Patient saved successfully. Ready for next patient",
        {
          duration: 5000,
          showCloseButton: true,
        }
      );

      // Call parent refetch and get new patient ID
      await patientrefetch();

      const result = await refetchNextPatientId();
      if (result?.data?.patientid) {
        setCurrentPatientId(result.data.patientid);
      }

      // Reset form but keep popup open for next patient
      resetForm();
    } catch (error) {
      console.error("Patient registration error:", error);

      // More detailed error handling
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong during patient registration";

      showError("Operation Failed", errorMessage, {
        duration: 5000,
        showCloseButton: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closepopuphandler = () => {
    resetForm();
    setPopup(false);
  };

  return (
    <>
      <div
        class="z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px] backdrop-blur-[0.5px] add-new-popups"
        id="add-new-popup"
      >
        <div class="popup-dialog flex transition-all max-w-[90vw] min-h-full items-center mx-auto">
          <div class="trezo-card w-full bg-gray-50 dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
            <div class="trezo-card-header bg-gray-50 dark:bg-[#15203c] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] py-3 text-center px-[20px] md:px-[25px] rounded-t-md">
              <div class="trezo-card-title text-center">
                <h5 class="mb-0 text-center">Patient Test & Create Bill</h5>
              </div>
              <div class="trezo-card-subtitle">
                <div
                  onClick={closepopuphandler}
                  class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
                  id="add-new-popup-toggle"
                >
                  <i class="ri-close-fill"></i>
                </div>
              </div>
            </div>

            <fieldset class="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
              <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                Due Information
              </legend>
              <form className="">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-[6px] md:gap-y-[6px] gap-x-5">
                  <div className="patientsearch sm:col-span-3">
                    <fieldset class="trezo-card-content px-4 py-2 rounded-md">
                      <div class="flex items-center gap-x-4">
                        <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                          Search Patient By Id. No
                        </label>
                        <input
                          type="number"
                          onChange={(e) => setPatientId(e.target.value)}
                          value={patientId}
                          class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div className="patientinfo sm:col-span-3">
                    <fieldset class="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                      <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                        Patient Info
                      </legend>

                      <div class="flex items-center gap-x-4">
                        <div className="">
                          <label class="text-black dark:text-white font-medium block flex-shrink-0">
                            Patient Name
                          </label>
                          <label class="text-black dark:text-white font-medium block flex-shrink-0">
                            Invoice Date
                          </label>
                        </div>
                        <div className="">
                          <div className="">:</div>
                          <div className="">:</div>
                        </div>
                        <div className="">
                          <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                            {patientSearchdata?.patientname}{" "}
                          </div>
                          <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                            {patientSearchdata?.date}{" "}
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  {patientSearchdata?.procedurecalculation?.length > 0 ? (
                    patientSearchdata?.procedurecalculation?.map((item) => (
                      <div key={item._id} className="pathology sm:col-span-1">
                        <fieldset class="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                          <legend className="px-2 capitalize text-sm text-[#000] dark:text-[#fff]">
                            {item?.depname}
                          </legend>
                          <div class="flex items-center gap-x-4">
                            <div className="">
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Total
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Discount
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Paid
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
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
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                {item?.totalPrice}
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                {item?.discount}
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                {item?.paid}
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                {item?.due}
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset class="sm:col-span-1 trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                          <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                            Present
                          </legend>
                          <div className="flex gap-x-4 items-center">
                            <div className="flex flex-col gap-y-2">
                              <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Collection
                              </label>
                              <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Again Discount
                              </label>
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <input
                                type="number"
                                class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                              />
                              <input
                                type="number"
                                class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                              />
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="pathology sm:col-span-1">
                        <fieldset class="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                          <legend className="px-2 capitalize text-sm text-[#000] dark:text-[#fff]">
                            Pathology
                          </legend>
                          <div class="flex items-center gap-x-4">
                            <div className="">
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Total
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Discount
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Paid
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
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
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset class="sm:col-span-1 trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                          <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                            Present
                          </legend>
                          <div className="flex gap-x-4 items-center">
                            <div className="flex flex-col gap-y-2">
                              <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Collection
                              </label>
                              <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Again Discount
                              </label>
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <input
                                type="number"
                                class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                              />
                              <input
                                type="number"
                                class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                              />
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="xray-ecg sm:col-span-1">
                        <fieldset class="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                          <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                            X-ray & Ecg
                          </legend>
                          <div class="flex items-center gap-x-4">
                            <div className="">
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Total
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Discount
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Paid
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
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
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset class="sm:col-span-1 trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                          <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                            Present
                          </legend>
                          <div className="flex gap-x-4 items-center">
                            <div className="flex flex-col gap-y-2">
                              <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Collection
                              </label>
                              <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Again Discount
                              </label>
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <input
                                type="number"
                                class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                              />
                              <input
                                type="number"
                                class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                              />
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="ultrasound sm:col-span-1">
                        <fieldset class="trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                          <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                            Ultra Sound
                          </legend>
                          <div class="flex items-center gap-x-4">
                            <div className="">
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Total
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Discount
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
                                Paid
                              </label>
                              <label class="text-black dark:text-white font-medium block flex-shrink-0">
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
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                              <div class="rounded-md text-black dark:text-white px-[17px] block w-full outline-0 transition-all focus:border-primary-500">
                                0
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset class="sm:col-span-1 trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                          <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                            Present
                          </legend>
                          <div className="flex gap-x-4 items-center">
                            <div className="flex flex-col gap-y-2">
                              <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Collection
                              </label>
                              <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                                Again Discount
                              </label>
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <input
                                type="number"
                                class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                              />
                              <input
                                type="number"
                                class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                              />
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </>
                  )}

                  <div className="total sm:col-span-3">
                    <fieldset class="w-full trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
                      <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                        Total Collection
                      </legend>
                      <div className="flex justify-between items-center">
                        <div class="flex items-center gap-x-4 w-full">
                          <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0">
                            Total Collection
                          </label>
                          <input
                            type="number"
                            class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500 no-arrow"
                          />
                        </div>
                        <div className="buttons w-full">sss</div>
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

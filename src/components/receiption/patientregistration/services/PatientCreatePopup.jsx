import useCrud from "@/hooks/useCrud";
import useDatePicker from "@/hooks/useDatePicker";
import { useToast } from "@hooks/useToast";
import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
const PatientCreatePopup = ({
  cancelcountrypopup,
  patientrefetch,
  selectedTest,
  setPopup,
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

    // Validate form
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
        patientid: nextpatientid?.patientid,
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
      refetchNextPatientId();

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

    // Validate form
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
        patientid: nextpatientid?.patientid,
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
      await refetchNextPatientId();

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
                Personal Information
              </legend>
              <form className="">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-[6px] md:gap-y-[6px] gap-x-5">
                  <div class="sm:col-span-1 flex items-center gap-x-4">
                    <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                      Patient Id
                    </label>
                    <input
                      disabled
                      type="text"
                      value={nextpatientid?.patientid || "Loading..."}
                      class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                    />
                  </div>
                  <div class="sm:col-span-1 flex items-center gap-x-4">
                    <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[6%]">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative w-full">
                      <Flatpickr
                        value={displayDate}
                        onChange={handleDateChangeWithValidation}
                        options={{ dateFormat: "d-m-Y" }}
                        className={`h-[32px] rounded-md text-black dark:text-white border-2 ${
                          validationErrors.date
                            ? "!border-red-500"
                            : "border-gray-500 dark:border-[#49557c]"
                        } bg-white dark:bg-[#0c1427] px-4 pr-10 w-full outline-none placeholder-gray-500 dark:placeholder-[#fff] focus:border-primary-500`}
                      />

                      <i className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 pointer-events-none material-symbols-outlined !text-md">
                        calendar_month
                      </i>
                    </div>
                  </div>

                  <div class="sm:col-span-1 flex items-center gap-x-4">
                    <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                      Patient Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      onChange={(e) =>
                        handleFormChange("patientName", e.target.value)
                      }
                      value={form.patientName}
                      className={`h-[32px] rounded-md text-black dark:text-white border-2 ${
                        validationErrors.patientName
                          ? "dark:!border-gray-400 !border-[#49557c]"
                          : "dark:!border-[#49557c] !border-gray-400"
                      } bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500`}
                      placeholder="Enter patient name"
                    />
                  </div>
                  <div class="sm:col-span-1 flex items-center gap-x-4">
                    <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[6%]">
                      Sex <span className="text-red-500">*</span>
                    </label>
                    <select
                      className={`h-[32px] rounded-md text-black dark:text-white border-2 ${
                        validationErrors.sex
                          ? "dark:!border-gray-400 !border-[#49557c]"
                          : "dark:!border-[#49557c] !border-gray-400"
                      } bg-white dark:bg-[#0c1427] px-[14px] block !w-full outline-0 cursor-pointer transition-all focus:border-primary-500`}
                      onChange={(e) => handleSexChange(e.target.value)}
                      value={sex || ""}
                    >
                      <option value="">Select Sex</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div class="sm:col-span-1 flex items-center gap-x-4">
                    <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                      Ref. Dr. <span className="text-red-500">*</span>
                    </label>
                    <select
                      className={`h-[32px] rounded-md text-black dark:text-white border-2 ${
                        validationErrors.refdoctor
                          ? "dark:!border-gray-400 !border-[#49557c]"
                          : "dark:!border-[#49557c] !border-gray-400"
                      } bg-white dark:bg-[#0c1427] px-[14px] block !w-full outline-0 cursor-pointer transition-all focus:border-primary-500`}
                      onChange={(e) => handleDoctorChange(e.target.value)}
                      value={qualification || ""}
                    >
                      <option value="">Select Doctor</option>
                      {doctorData?.map((doc) => (
                        <option key={doc._id} value={doc._id}>
                          {doc.doctorname}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div class="sm:col-span-1 flex items-center gap-x-4">
                    <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[6%]">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="150"
                      onChange={(e) => handleFormChange("age", e.target.value)}
                      value={form.age}
                      className={`h-[32px] rounded-md text-black dark:text-white border-2 ${
                        validationErrors.age
                          ? "dark:!border-gray-400 !border-[#49557c]"
                          : "dark:!border-[#49557c] !border-gray-400"
                      } bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500`}
                      placeholder="Enter age"
                    />
                  </div>
                  <div class="sm:col-span-1 flex items-center gap-x-4">
                    <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      onChange={(e) =>
                        handleFormChange("phone", e.target.value)
                      }
                      value={form.phone}
                      className={`h-[32px] no-arrow rounded-md text-black dark:text-white border-2 ${
                        validationErrors.phone
                          ? "dark:!border-gray-400 !border-[#49557c]"
                          : "dark:!border-[#49557c] !border-gray-400"
                      } bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500`}
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </form>
            </fieldset>
            <fieldset class="mt-2 trezo-card-content border border-gray-400 px-4 py-2 rounded-md">
              <legend className="px-2 text-sm text-[#000] dark:text-[#fff]">
                Test Information <span className="text-red-500">*</span>
              </legend>
              <form className="">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-[6px] md:gap-y-[6px] gap-x-5">
                  <div className="sm:col-span-1 flex flex-col gap-y-2">
                    <div class="flex items-center gap-x-4">
                      <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                        Test Category
                      </label>
                      <select
                        class={`h-[32px] rounded-md text-black dark:text-white border-2 ${
                          validationErrors.tests
                            ? "dark:!border-gray-400 !border-[#49557c]"
                            : "dark:!border-[#49557c] !border-gray-400"
                        } bg-white dark:bg-[#0c1427] px-[14px] block !w-full outline-0 cursor-pointer transition-all focus:border-primary-500`}
                        value={selectedCategory}
                        onChange={(e) => {
                          setSelectedCategory(e.target.value);
                          clearValidationError("tests");
                        }}
                      >
                        <option value="">Select Test Category</option>
                        {data?.map((dept) => (
                          <option key={dept._id} value={dept._id}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="flex items-center gap-x-4">
                      <label class="mb-[2px] text-black dark:text-white font-medium block flex-shrink-0 w-[18%]">
                        Test Name
                      </label>
                      <select
                        class={`h-[32px] rounded-md text-black dark:text-white border-2 ${
                          validationErrors.tests
                            ? "!border-gray-400"
                            : "border-gray-500 dark:border-[#49557c]"
                        } bg-white dark:bg-[#0c1427] px-[14px] block !w-full outline-0 cursor-pointer transition-all focus:border-primary-500`}
                        onChange={handleTestSelectChange}
                        disabled={!selectedCategory}
                        value={selectedTest}
                      >
                        <option value="">Select Test</option>
                        {filteredTests?.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.testname}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="mt-2 px-4 trezo-card-content -mx-[20px] md:-mx-[25px]">
                      <div class="table-responsive overflow-x-auto overflow-y-hidden">
                        <table class="w-full without-border">
                          <thead class="text-black dark:text-white">
                            <tr>
                              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                SL
                              </th>
                              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                Procedure Name
                              </th>
                              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                Procedure Charge
                              </th>
                              <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody class="text-black dark:text-white">
                            {testList?.map((test, index) => (
                              <tr key={index}>
                                <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                  <span class="text-gray-500 dark:text-gray-400">
                                    {index + 1}
                                  </span>
                                </td>
                                <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                  <span class="block font-medium text-gray-500 dark:text-gray-400">
                                    {test?.testname}
                                  </span>
                                </td>
                                <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                  <span class="block font-medium text-gray-500 dark:text-gray-400">
                                    {test?.testcharge}
                                  </span>
                                </td>

                                <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                                  <div class="flex items-center gap-[9px]">
                                    <div
                                      class="text-danger-500 leading-none custom-tooltip cursor-pointer"
                                      id="customTooltip"
                                      data-text="Delete"
                                      onClick={() =>
                                        handleDeleteProcedure(test?._id)
                                      }
                                    >
                                      <i class="material-symbols-outlined !text-md">
                                        delete
                                      </i>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div class="sm:col-span-1">
                    <div className="mb-1 flex items-center gap-x-2">
                      <div class="font-medium whitespace-nowrap">
                        <div class="form-check relative top-[2px]">
                          <input type="checkbox" class="cursor-pointer" />
                        </div>
                      </div>
                      <p htmlFor="" className="mb-3">
                        Agree Calculation ?
                      </p>
                    </div>
                    <table class="w-full border-collapse border border-gray-400">
                      <thead>
                        <tr>
                          <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                            Department
                          </th>
                          <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                            Total
                          </th>
                          <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                            Discount (Editable)
                          </th>
                          <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                            Discounted
                          </th>
                          <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                            Paid
                          </th>

                          <th class="border border-gray-400 px-2 py-1 text-left font-medium ltr:text-left rtl:text-right md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                            Due
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {departmentTotals.length > 0 ? (
                          departmentTotals?.map((item, index) => (
                            <tr key={index}>
                              <td class="capitalize border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                {item?.depname}
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                {item?.totalPrice}
                              </td>
                              <td class="border border-gray-400 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                <input
                                  type="number"
                                  min={0}
                                  max={item.totalPrice}
                                  value={
                                    finalTotalCalculation[item.depname]
                                      ?.discount || ""
                                  }
                                  onChange={(e) =>
                                    handleDiscountChange(
                                      item.depname,
                                      e.target.value
                                    )
                                  }
                                  class="no-arrow bg-primary-200 placeholder:text-[#000] text-xs pl-1 w-full block text-[#000] outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
                                />
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                {item.discounted ||
                                  item.totalPrice -
                                    (finalTotalCalculation[item.depname]
                                      ?.discount || 0)}
                              </td>
                              <td class="border border-gray-400 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                {item.due ||
                                  (item.discounted ||
                                    item.totalPrice -
                                      (finalTotalCalculation[item.depname]
                                        ?.discount || 0)) -
                                    (departmentPayments[item.depname] || 0)}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <>
                            <tr>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                Pathology
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                              <td class="border border-gray-400 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                <input
                                  type="number"
                                  placeholder="0"
                                  class="bg-primary-200 placeholder:text-[#000] text-xs pl-1 w-full block text-[#000] outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
                                />
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]"></td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                            </tr>
                            <tr>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                X-Ray| ECG
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                              <td class="border border-gray-400 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                <input
                                  type="number"
                                  placeholder="0"
                                  class="bg-primary-200 placeholder:text-[#000] text-xs pl-1 w-full block text-[#000] outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
                                />
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                            </tr>
                            <tr>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                Ultra-Sono
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                              <td class="border border-gray-400 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                <input
                                  type="number"
                                  placeholder="0"
                                  class="bg-primary-200 placeholder:text-[#000] text-xs pl-1 w-full block text-[#000] outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
                                />
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                              <td class="border border-gray-400 px-2 py-1 text-left ltr:text-left rtl:text-right whitespace-nowrap md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b dark:border-[#172036]">
                                0
                              </td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>
                    <div className="date and timer mt-3 flex gap-x-2">
                      <div class="w-full">
                        <label class="mb-[2px] text-black dark:text-white font-medium block">
                          Delivery Date :{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative w-full">
                          <Flatpickr
                            value={deleveryDate}
                            onChange={handleDeliveryDateChangeWithValidation}
                            options={{ dateFormat: "d-m-Y" }}
                            className={`h-[32px] rounded-md text-black dark:text-white border-2 ${
                              validationErrors.deleveryDate
                                ? "dark:!border-gray-400 !border-[#49557c]"
                                : "dark:!border-[#49557c] !border-gray-400"
                            } bg-white dark:bg-[#0c1427] px-4 pr-10 w-full outline-none placeholder-gray-500 dark:placeholder-[#fff] focus:border-primary-500`}
                          />

                          <i className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 pointer-events-none material-symbols-outlined !text-md">
                            calendar_month
                          </i>
                        </div>
                      </div>
                      <div class="w-full">
                        <label class="mb-[2px] text-black dark:text-white font-medium block">
                          Delivery Time :
                        </label>
                        <input
                          type="text"
                          onChange={(e) =>
                            setForm({ ...form, speciality: e.target.value })
                          }
                          value={form.speciality}
                          class="h-[32px] rounded-md text-black dark:text-white border border-gray-500 dark:border-[#49557c] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-[#fff] focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <div className="lastcalculation mt-4">
                      <div class="w-full max-w-md ml-auto rounded text-black dark:text-white font-medium">
                        <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                          <span class="text-right">Total Charge</span>
                          <span class="text-center w-4">=</span>
                          <span class="text-right">
                            {totals?.totalDiscountedPrice +
                              totals?.totalDiscountAmount || 0}
                          </span>
                        </div>

                        <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                          <span class="text-right">Discount</span>
                          <span class="text-center w-4">=</span>
                          <span class="text-right">
                            {totals?.totalDiscountAmount || 0}
                          </span>
                        </div>

                        <hr class="border-white/40" />

                        <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                          <span class="text-right">Discounted Amount</span>
                          <span class="text-center w-4">=</span>
                          <span class="text-right">
                            {totals?.totalDiscountedPrice || 0}
                          </span>
                        </div>

                        <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                          <span class="text-right">Paid</span>
                          <span class="text-center w-4">=</span>
                          <input
                            type="number"
                            class="no-arrow !w-full px-2 py-1 bg-yellow-100 text-black border border-gray-400 rounded text-right"
                            placeholder=""
                            value={
                              totals?.totalDiscountedPrice - dueAmount || 0
                            } // Paid = total - due
                            onChange={handlerPaid}
                          />
                        </div>

                        <hr class="border-white/40" />

                        <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                          <span class="text-right">Due Amount</span>
                          <span class="text-center w-4">=</span>
                          <span class="text-right">{dueAmount || 0}</span>
                        </div>

                        <div class="flex justify-end gap-x-4 pt-4">
                          <button
                            type="button"
                            onClick={closepopuphandler}
                            disabled={isSubmitting}
                            class="bg-white text-black px-6 py-2 rounded border border-gray-300 hover:bg-gray-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            onClick={handleNewPatient}
                            disabled={isSubmitting}
                            class="bg-blue-500 text-white px-6 py-2 rounded border border-blue-500 hover:bg-blue-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? "Saving..." : "New"}
                          </button>
                          <button
                            type="button"
                            onClick={patientReg}
                            disabled={isSubmitting}
                            class="bg-green-500 text-white px-6 py-2 rounded border border-green-500 hover:bg-green-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? "Saving..." : "Save"}
                          </button>
                        </div>
                      </div>
                    </div>
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

export default PatientCreatePopup;

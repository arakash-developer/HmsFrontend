import { useState } from "react";
import { DateTime } from "luxon";

const useDatePicker = (initialTimezone = "UTC") => {
  const TIMEZONE = initialTimezone;

  // Default today
  const now = DateTime.now().setZone(TIMEZONE);

  // Flatpickr Date object
  const [displayDate, setDisplayDate] = useState(now.toJSDate());

  // Backend ISO date (yyyy-mm-dd)
  const [backendDate, setBackendDate] = useState(now.toISODate());

  // UI date (dd-mm-yyyy)
  const [uiDate, setUiDate] = useState(now.toFormat("dd-MM-yyyy"));

  // When user selects a date from Flatpickr
  const handleDateChange = (selectedDates) => {
    const jsDate = selectedDates[0];
    if (!jsDate) return;

    const dt = DateTime.fromJSDate(jsDate).setZone(TIMEZONE);

    setDisplayDate(jsDate);
    setBackendDate(dt.toISODate());        // yyyy-mm-dd
    setUiDate(dt.toFormat("dd-MM-yyyy"));  // dd-mm-yyyy
  };

  // ⭐ Convert backend yyyy-mm-dd → dd-mm-yyyy
  const convertBackendToUi = (dateString) => {
    if (!dateString) return "";
    const dt = DateTime.fromISO(dateString).setZone(TIMEZONE);
    return dt.toFormat("dd-MM-yyyy");
  };

  // ⭐ Convert backend ISO full date → dd-mm-yyyy
  const convertIsoToUi = (isoString) => {
    if (!isoString) return "";
    const dt = DateTime.fromISO(isoString).setZone(TIMEZONE);
    return dt.toFormat("dd-MM-yyyy");
  };

  // ⭐ Convert backend yyyy-mm-dd → JS Date (Flatpickr needs this)
  const backendToJsDate = (dateString) => {
    if (!dateString) return null;
    return DateTime.fromISO(dateString).setZone(TIMEZONE).toJSDate();
  };

  return {
    displayDate,     // For Flatpickr
    backendDate,     // Server-ready yyyy-mm-dd
    uiDate,          // UI dd-mm-yyyy
    handleDateChange,

    // NEW HELPERS
    convertBackendToUi,  // yyyy-mm-dd → dd-mm-yyyy
    convertIsoToUi,      // 2025-11-17T07:46:23.798Z → dd-mm-yyyy
    backendToJsDate,      // yyyy-mm-dd → JS Date
  };
};

export default useDatePicker;

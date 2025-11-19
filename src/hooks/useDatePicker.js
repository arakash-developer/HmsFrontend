import { useState } from "react";
import { DateTime } from "luxon";

const useDatePicker = (initialTimezone = "UTC") => {
  // Timezone for backend conversion
  const TIMEZONE = initialTimezone;

  // Default: today
  const now = DateTime.now().setZone(TIMEZONE);

  // UI value (Date object for Flatpickr)
  const [displayDate, setDisplayDate] = useState(now.toJSDate());

  // Backend-ready date string: yyyy-mm-dd
  const [backendDate, setBackendDate] = useState(now.toISODate());

  // Display string for UI: dd-mm-yyyy
  const [uiDate, setUiDate] = useState(now.toFormat("dd-MM-yyyy"));

  const handleDateChange = (selectedDates) => {
    const d = selectedDates[0];
    if (!d) return;

    setDisplayDate(d);

    // Convert JS Date -> Luxon DateTime in timezone
    const dt = DateTime.fromJSDate(d).setZone(TIMEZONE);

    // Update backend date: yyyy-mm-dd
    setBackendDate(dt.toISODate());

    // Update UI string: dd-mm-yyyy
    setUiDate(dt.toFormat("dd-MM-yyyy"));
  };

  return {
    displayDate, // for Flatpickr value
    uiDate,      // dd-mm-yyyy for UI
    backendDate, // yyyy-mm-dd for backend
    handleDateChange,
  };
};

export default useDatePicker;

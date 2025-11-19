import PatientDetailsPrint from "@/pdf/PatientDetailsPrint";
import { useRef, useState } from "react";

const TableBody = ({ patientData = [], page, setPage, patientisLoading }) => {
  const componentRef = useRef();
  const singlePatientRef = useRef();
  const [selectedPatient, setSelectedPatient] = useState(null);

  const singlePrint = (patient) => {
    setSelectedPatient([patient]); // Convert to array format for PatientDetailsPrint

    setTimeout(() => {
      if (!singlePatientRef.current) {
        console.error("Single patient component ref not found");
        return;
      }

      // Create a new window with only the selected patient print content
      const printContent = singlePatientRef.current.innerHTML;
      const printWindow = window.open("", "_blank", "width=800,height=600");

      printWindow.document.write(`
          <html>
            <head>
              <title>Patient Invoice - ${
                patient?.patientname || "Patient"
              }</title>
              <style>
                @page {
                  size: A4;
                  margin: 15mm;
                }
                  *{
                margin: 0; 
                padding: 0px;
                }
                body { 
                  margin: 0; 
                  padding: 0px;
                  font-family: Inter, system-ui, sans-serif !important;
                  -webkit-print-color-adjust: exact;
                }
                table { 
                  width: 100%; 
                  border-collapse: collapse; 
                  margin-top: 20px; 
                }
                th, td { 
                  padding: 8px; 
                  border-bottom: 1px solid #ccc; 
                  text-align: left; 
                }
                th { 
                  border-bottom: 2px solid #000; 
                  font-weight: bold; 
                }
                .flex { display: flex; }
                .items-center { align-items: center; }
                .justify-center { justify-content: center; }
                .gap-x-2 { gap: 8px; }
                .text-center { text-align: center; }
                .uppercase { text-transform: uppercase; }
                .my-5 { margin: 20px 0; }
                img { height: 80px; display: block; }
                h1 { margin: 0; color: #000; }
                h3 { margin: 0; color: #000; }
                p { margin: 5px 0; color: #2e2e2e; }
              </style>
            </head>
            <body>${printContent}</body>
          </html>
        `);

      printWindow.document.close();

      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 500);
      };
    }, 100);
  };

  return (
    <>
      <PatientDetailsPrint
        patientData={patientData}
        componentRef={componentRef}
      />

      {/* Hidden component for single patient printing */}
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <PatientDetailsPrint
          patientData={selectedPatient || []}
          componentRef={singlePatientRef}
        />
      </div>

      {patientisLoading ? (
        <h5 class="mb-0 text-center capitalize">Loading...</h5>
      ) : patientData.length > 0 ? (
        <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
          <div class="table-responsive overflow-x-auto overflow-y-hidden">
            <table class="w-full without-border">
              <thead class="text-black dark:text-white">
                <tr>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    <div class="form-check relative top-[2px]">
                      <input type="checkbox" class="cursor-pointer" />
                    </div>
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Patient Id
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Name
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Phone
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Total
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Discount
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Paid
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Due
                  </th>
                  <th class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="text-black dark:text-white">
                {patientData?.map((patient, index) => (
                  <tr key={index}>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <div class="form-check relative top-[2px]">
                        <input type="checkbox" class="cursor-pointer" />
                      </div>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="text-gray-500 dark:text-gray-400">
                        {patient?.patientid}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {patient?.patientname}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {patient?.phone}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {patient?.totalCharge}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {patient?.totalDiscount}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {patient?.totalPaid}
                      </span>
                    </td>
                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <span class="block font-medium text-gray-500 dark:text-gray-400">
                        {patient?.totalDue}
                      </span>
                    </td>

                    <td class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]">
                      <div class="flex items-center gap-[9px]">
                        <div
                          class="text-primary-500 leading-none custom-tooltip"
                          id="customTooltip"
                          data-text="View"
                        >
                          <i class="material-symbols-outlined !text-xl">
                            visibility
                          </i>
                        </div>

                        <div
                          class="text-danger-500 leading-none custom-tooltip cursor-pointer"
                          id="customTooltip"
                          data-text="Print"
                          onClick={() => singlePrint(patient)}
                        >
                          <i class="material-symbols-outlined !text-xl">
                            print
                          </i>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="mt-5 px-[20px] py-[12px] md:py-[14px] rounded-b-md border-l border-r border-t  border-gray-100 dark:border-[#172036] sm:flex sm:items-center justify-between">
            <p class="mb-0 text-sm">Next & Previous Button</p>
            <ol class="mt-[10px] sm:mt-0">
              <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  href="javascript:void(0);"
                  class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                >
                  <span class="opacity-0">0</span>
                  <i class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                    chevron_left
                  </i>
                </button>
              </li>

              <li class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
                <button
                  href="javascript:void(0);"
                  onClick={() => setPage(page + 1)}
                  class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                >
                  <span class="opacity-0">0</span>
                  <i class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2">
                    chevron_right
                  </i>
                </button>
              </li>
            </ol>
          </div>
        </div>
      ) : (
        <h6 class="font-medium text-center px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap">
          No Data Found
        </h6>
      )}
    </>
  );
};

export default TableBody;

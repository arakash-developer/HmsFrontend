import Logo from "@public/images/logo-big.svg";
import { useRef } from "react";

const PatientDetailsPrint = ({ patientData }) => {
  const componentRef = useRef();

  const handlePrintClick = () => {
    if (!componentRef.current) {
      console.error("Component ref not found");
      return;
    }

    // Create a new window with only the print content
    const printContent = componentRef.current.innerHTML;
    const printWindow = window.open("", "_blank", "width=800,height=600");

    printWindow.document.write(`
      <html>
        <head>
          <title>Patient Invoice</title>
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
  };

  return (
    <div className="">
      <div className="mb-4 space-x-2">
        <div class="ltr:text-right rtl:text-left">
          <div
            class="cursor-pointer rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[7px] bg-danger-500 text-white hover:bg-danger-400"
            id="add-new-popup-toggle"
            //   onClick={cancelcountrypopup}
          >
            Back
          </div>
          <div
            onClick={handlePrintClick}
            class="cursor-pointer inline-block bg-primary-500 text-white py-[7px] px-[26.5px] transition-all rounded-md hover:bg-primary-400"
          >
            <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px] ">
              <i class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2">
                print
              </i>
              Print
            </span>
          </div>
        </div>
      </div>

      <div ref={componentRef} id="print-area">
        {/* Test with simple content first */}
        <div style={{ padding: "20px" }} className="bg-[#fff]">
          <div
            className="flex items-center justify-center gap-x-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img style={{ height: "80px" }} src={Logo} alt="Logo" srcset="" />
            <div className="trezo-card-content">
              <h1 className="text-[#000] uppercase">Demo Hospital</h1>
              <div class="trezo-card-content">
                <p class="text-[1.25rem] font-light">
                  Mirpur Dhaka Mobile : 0123456789
                </p>
              </div>
            </div>
          </div>
          <div className="text-[#000] text-center my-5">
            <h4 className="uppercase text-[#000]">Total Collection</h4>
            <p>Date : 12/02/2005</p>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead className="text-black dark:text-white">
              <tr style={{ borderBottom: "1px solid #000" }}>
                <th
                  className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
                  style={{ padding: "8px", textAlign: "left" }}
                >
                  Id
                </th>
                <th
                  className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
                  style={{ padding: "8px", textAlign: "left" }}
                >
                  Patient Name
                </th>
                <th
                  className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
                  style={{ padding: "8px", textAlign: "left" }}
                >
                  Total
                </th>
                <th
                  className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
                  style={{ padding: "8px", textAlign: "left" }}
                >
                  Less
                </th>
                <th
                  className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
                  style={{ padding: "8px", textAlign: "left" }}
                >
                  Total Ammount
                </th>
                <th
                  className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
                  style={{ padding: "8px", textAlign: "left" }}
                >
                  Paid
                </th>
                <th
                  className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
                  style={{ padding: "8px", textAlign: "left" }}
                >
                  Due
                </th>
              </tr>
            </thead>
            <tbody>
              {patientData.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #ccc" }}>
                  <td
                    className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
                    style={{ padding: "8px" }}
                  >
                    {item?.patientid}
                  </td>
                  <td
                    className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
                    style={{ padding: "8px", textAlign: "left" }}
                  >
                    {item?.patientname}
                  </td>
                  <td
                    className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
                    style={{ padding: "8px", textAlign: "left" }}
                  >
                    {item?.totalCharge}
                  </td>
                  <td
                    className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
                    style={{ padding: "8px", textAlign: "left" }}
                  >
                    {item?.totalDiscount}
                  </td>
                  <td
                    className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
                    style={{ padding: "8px", textAlign: "left" }}
                  >
                    {item?.totalDiscounted}
                  </td>
                  <td
                    className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
                    style={{ padding: "8px", textAlign: "left" }}
                  >
                    {item?.totalPaid}
                  </td>
                  <td
                    className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
                    style={{ padding: "8px", textAlign: "left" }}
                  >
                    {item?.totalDue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsPrint;

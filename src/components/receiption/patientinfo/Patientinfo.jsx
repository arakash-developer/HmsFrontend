// App.jsx
import useCrudPaginated from "@/hooks/useCrudPaginated";
import Logo from "@public/images/logo-big.svg";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
// import PatientInvoice from "./services/HospitalInvoicePDF";

const App = () => {
  const { data: patientData } = useCrudPaginated(
    "api/patientregistration",
    1,
    300
  );

  const componentRef = useRef();

  const patient = {
    patientName: "John Doe",
    patientId: "P12345",
    date: "2025-11-18",
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => console.log("Before print"),
    onAfterPrint: () => console.log("After print"),
    onPrintError: () => console.log("Print error"),
    pageStyle: `
      @page {
        size: A4;
        margin: 15mm;
      }
      @media print {
        @page {
          margin: 0;
        }
        body {
          margin: 0;
          padding: 0;
        }
        body * {
          visibility: hidden;
        }
          html * {
            visibility:hidden;
            }
        #print-area, #print-area * {
          visibility: visible;
        }
        #print-area {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        /* Hide browser headers and footers */
        @page :first {
          margin-top: 0;
        }
        @page :left {
          margin-left: 0;
        }
        @page :right {
          margin-right: 0;
        }
      }
    `,
  });

  console.log(patientData);

  const handlePrintClick = () => {
    // Fallback method if react-to-print doesn't work
    if (!componentRef.current) {
      console.error("Component ref not found");
      return;
    }

    try {
      handlePrint();
    } catch (error) {
      console.error("React-to-print failed, using window.print", error);
      // Fallback to native print
      window.print();
    }
  };

  const handleNativePrint = () => {
    const printContent = componentRef.current.innerHTML;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Patient Invoice</title>
          <style>
            @page {
              size: A4;
              margin: 15mm;
            }
            body { 
              font-family: Arial, sans-serif; 
              margin: 0; 
              padding: 20px;
              -webkit-print-color-adjust: exact;
            }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { padding: 8px; border-bottom: 1px solid #ccc; text-align: left; }
            th { border-bottom: 2px solid #000; font-weight: bold; }
            .flex { display: flex; }
            .items-center { align-items: center; }
            .gap-x-2 { gap: 8px; }
            .bg-\\[\\#fff\\] { background-color: #fff; }
            .text-\\[\\#000\\] { color: #000; }
            img { width: 100px; height: auto; display: block; }
            h1 { margin: 0; color: #000; }
            p { margin: 5px 0; }
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
      }, 1000);
    };
  };

  return (
    <div className="p-6">
      <div className="mb-4 space-x-2">
        <button
          onClick={handlePrintClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Print Invoice (React)
        </button>
        <button
          onClick={handleNativePrint}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Print Invoice (Native)
        </button>
      </div>

      <div ref={componentRef} id="print-area">
        {/* Test with simple content first */}
        <div style={{ padding: "20px" }} className="bg-[#fff]">
          <div className="flex items-center justify-center gap-x-2" style={{display:"flex", justifyContent:"center"}}>
            <img style={{height:"80px"}} src={Logo} alt="xxx" srcset="" />
            <div className="">
              <h1 className="text-[#000] uppercase">Hospital(HMS)</h1>
              <p className="text-[#2e2e2e]">Mirpur Dhaka Mobile :00000000</p>
            </div>
          </div>
        <div className="text-[#000] text-center my-5">
          <h3 className="uppercase text-[#000]">Total Collection</h3>
        </div>
        
         
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid #000" }}>
                <th style={{ padding: "8px", textAlign: "left" }}>Id</th>
                <th style={{ padding: "8px", textAlign: "left" }}>
                  Patient Name
                </th>
                <th style={{ padding: "8px", textAlign: "left" }}>Total</th>
                <th style={{ padding: "8px", textAlign: "left" }}>Less</th>
                <th style={{ padding: "8px", textAlign: "left" }}>
                  Total Ammount
                </th>
                <th style={{ padding: "8px", textAlign: "left" }}>Paid</th>
                <th style={{ padding: "8px", textAlign: "left" }}>Due</th>
              </tr>
            </thead>
            <tbody>
              {patientData.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #ccc" }}>
                  <td style={{ padding: "8px" }}>{item?.patientid}</td>
                  <td style={{ padding: "8px", textAlign: "left" }}>
                    {item?.patientname}
                  </td>
                  <td style={{ padding: "8px", textAlign: "left" }}>
                    {item?.totalCharge}
                  </td>
                  <td style={{ padding: "8px", textAlign: "left" }}>
                    {item?.totalDiscount}
                  </td>
                  <td style={{ padding: "8px", textAlign: "left" }}>
                    {item?.totalDiscounted}
                  </td>
                  <td style={{ padding: "8px", textAlign: "left" }}>
                    {item?.totalPaid}
                  </td>
                  <td style={{ padding: "8px", textAlign: "left" }}>
                    {item?.totalDue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Once this works, uncomment the line below */}
        {/* <PatientInvoice data={data} patient={patient} /> */}
      </div>
    </div>
  );
};

export default App;

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
    documentTitle: "Patient Invoice",
    pageStyle: "",
  });

  console.log(patientData);

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
            body { 
              font-family: Arial, sans-serif; 
              margin: 0; 
              padding: 20px;
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
    <div className="p-6">
      <div className="mb-4 space-x-2">
        <button
          onClick={handlePrintClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Print Invoice (React)
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
                <th style={{ padding: "8px", textAlign: "left" }}>
                  Due
                </th>
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

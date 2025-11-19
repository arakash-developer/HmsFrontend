import Logo from "@public/images/logo-big.svg";

const PatientDetailsPrint = ({ patientData=[], back, componentRef }) => {
  return (
    <>
      <style jsx>{`
        @media screen {
          #print-area {
            display: none !important;
          }
        }
      `}</style>

      <div ref={componentRef} id="print-area" className="">
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
    </>
  );
};

export default PatientDetailsPrint;

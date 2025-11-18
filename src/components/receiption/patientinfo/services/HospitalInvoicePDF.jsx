// PatientInvoice.jsx
import React, { forwardRef } from "react";

const HospitalInvoicePDF = forwardRef(({ data, patient }, ref) => {
  const totalAmount = data.reduce((sum, i) => sum + i.totalAmount, 0);
  const totalPaid = data.reduce((sum, i) => sum + i.paid, 0);
  const totalDue = data.reduce((sum, i) => sum + i.due, 0);

  return (
    <div ref={ref} className="p-6 bg-white w-[210mm] min-h-[297mm]">
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <img src="/logo.png" alt="Logo" className="w-20 h-20 mb-2" />
        <h1 className="text-2xl font-bold">HMS Clinic</h1>
        <p className="text-sm">Mirpur DOHS, Dhaka</p>
      </div>

      {/* Patient Info */}
      <div className="mb-4">
        <p><span className="font-semibold">Patient Name:</span> {patient.patientName}</p>
        <p><span className="font-semibold">Patient ID:</span> {patient.patientId}</p>
        <p><span className="font-semibold">Date:</span> {patient.date}</p>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-center">ID</th>
            <th className="border p-2 text-center">Name</th>
            <th className="border p-2 text-center">Patient Name</th>
            <th className="border p-2 text-center">Total</th>
            <th className="border p-2 text-center">Less</th>
            <th className="border p-2 text-center">Total Amount</th>
            <th className="border p-2 text-center">Paid</th>
            <th className="border p-2 text-center">Due</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.patientName}</td>
              <td className="border p-2">{item.total}</td>
              <td className="border p-2">{item.less}</td>
              <td className="border p-2">{item.totalAmount}</td>
              <td className="border p-2">{item.paid}</td>
              <td className="border p-2">{item.due}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="mt-4 text-right">
        <p className="font-bold">Grand Total: {totalAmount}</p>
        <p className="font-bold">Total Paid: {totalPaid}</p>
        <p className="font-bold">Total Due: {totalDue}</p>
      </div>
    </div>
  );
});

export default HospitalInvoicePDF;

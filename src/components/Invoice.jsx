import React from "react";
import { FaDownload } from "react-icons/fa"; // Importing download icon from React Icons

const InvoiceList = () => {
  const invoices = [
    {
      id: "001",
      paymentDate: "Jan 20, 2025",
      recipient: "Muhirwa Axelle",
      status: "Paid",
      amount: "20,000 RWF",
      shop: "Shop 1",
    },
    {
      id: "002",
      paymentDate: "Jan 20, 2025",
      recipient: "Teta Samuella",
      status: "Failed",
      amount: "10,000 RWF",
      shop: "Shop 3",
    },
    {
      id: "003",
      paymentDate: "Jan 20, 2025",
      recipient: "Tunga William",
      status: "Paid",
      amount: "15,000 RWF",
      shop: "Shop 2",
    },
    {
      id: "004",
      paymentDate: "Jan 20, 2025",
      recipient: "Muhirwa Axelle",
      status: "Failed",
      amount: "12,000 RWF",
      shop: "Shop 4",
    },
    {
      id: "005",
      paymentDate: "Jan 20, 2025",
      recipient: "Esther Ishimwe",
      status: "Paid",
      amount: "25,000 RWF",
      shop: "Shop 6",
    },
    {
      id: "006",
      paymentDate: "Jan 20, 2025",
      recipient: "Eliana Ishimwe",
      status: "Failed",
      amount: "30,000 RWF",
      shop: "Shop 5",
    },
    {
      id: "007",
      paymentDate: "Jan 20, 2025",
      recipient: "Cosima Jayson",
      status: "Paid",
      amount: "20,000 RWF",
      shop: "Shop 10",
    },
    {
      id: "008",
      paymentDate: "Jan 20, 2025",
      recipient: "Mutoni Celine",
      status: "Failed",
      amount: "25,000 RWF",
      shop: "Shop 8",
    },
  ];

  const getStatusStyle = (status) => {
    return status === "Paid"
      ? "bg-green-100 text-green-700 border-green-300"
      : "bg-red-100 text-red-700 border-red-300";
  };

  return (
    <div className="w-full px-6 py-6">
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full text-left border-collapse">
          {/* Table Header */}
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 font-medium">Invoice</th>
              <th className="px-6 py-3 font-medium">Payment Date</th>
              <th className="px-6 py-3 font-medium">Recipient</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Amount</th>
              <th className="px-6 py-3 font-medium">Shop</th>
              <th className="px-6 py-3 font-medium text-center">Download</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-gray-800">#{invoice.id}</td>
                <td className="px-6 py-4 text-gray-600">
                  {invoice.paymentDate}
                </td>
                <td className="px-6 py-4 text-gray-700">{invoice.recipient}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-lg border ${getStatusStyle(
                      invoice.status
                    )}`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-800">{invoice.amount}</td>
                <td className="px-6 py-4 text-gray-700">{invoice.shop}</td>
                <td className="px-6 py-4 text-center">
                  <FaDownload className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceList;

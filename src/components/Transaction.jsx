import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // Importing icons

const sampleTransactions = [
  {
    type: "Bank of Kigali",
    description: "You have received 1,000,000 RWF on your Account.",
    icon: <FaArrowDown style={{ color: "green" }} />, // Downward arrow for received
  },
  {
    type: "Mobile Money",
    description: "You have sent 1,000,000 RWF on your Account.",
    icon: <FaArrowUp style={{ color: "red" }} />, // Upward arrow for sent
  },
  {
    type: "Bank of Kigali",
    description: "You have received 1,000,000 RWF on your Account.",
    icon: <FaArrowDown style={{ color: "green" }} />,
  },
  {
    type: "Mobile Money",
    description: "You have sent 1,000,000 RWF on your Account.",
    icon: <FaArrowUp style={{ color: "red" }} />,
  },
];

const Transaction = ({ transactions = [] }) => {
  const [selectedOption, setSelectedOption] = useState("Bank of Kigali");

  return (
    <div style={{ textAlign: "left", marginTop: "50px" }}>
      <h2
        style={{ color: "black", marginBottom: "20px" }}
        className="text-2xl font-bold"
      >
        Transaction Summary
      </h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        {/* Buttons outside the table */}
        <button
          onClick={() => setSelectedOption("Bank of Kigali")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor:
              selectedOption === "Bank of Kigali" ? "#e0e0e0" : "transparent",
            textDecoration:
              selectedOption === "Bank of Kigali" ? "underline" : "none", // Underline for active
          }}
        >
          Bank of Kigali
        </button>
        <button
          onClick={() => setSelectedOption("Mobile Money")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor:
              selectedOption === "Mobile Money" ? "#e0e0e0" : "transparent",
            textDecoration:
              selectedOption === "Mobile Money" ? "underline" : "none", // Underline for active
          }}
        >
          Mobile Money
        </button>
      </div>

      {/* Table below the buttons */}
      <table
        style={{
          width: "1000px",
          borderCollapse: "collapse",
          backgroundColor: "#f0f0f0",
          marginTop: "0px", // Reduced marginTop to bring the table closer to buttons
          marginLeft: "3px",
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid #ccc",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                padding: "10px",
                textAlign: "left",
                fontSize: "12px",
                paddingLeft: "15px",
                borderBottom: "1px solid black", // Add bottom border here
              }}
            >
              {/* Only display the selected transactions */}
              {transactions
                .filter((transaction) => transaction.type === selectedOption)
                .map((transaction, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "10px",
                      padding: "10px", // Adding padding for inner space
                      borderBottom: "1px solid black", // Border line between transaction list items
                    }}
                  >
                    {transaction.icon}
                    <span>{transaction.description}</span>
                  </div>
                ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Transaction transactions={sampleTransactions} />
    </div>
  );
};

export default App;

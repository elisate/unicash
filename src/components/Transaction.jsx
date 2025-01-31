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
      </h2>{" "}
      <table
        style={{
          width: "1000px",
          borderCollapse: "collapse",
          backgroundColor: "#f0f0f0",
          marginTop: "50px",
          marginLeft: "3px",
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid #ccc",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "10px 25px",
                textAlign: "center",
                cursor: "pointer",
                fontSize: "14px",
                borderBottom: "2px solid black",
                borderRight: "1px solid black",
                backgroundColor:
                  selectedOption === "Bank of Kigali" ? "#e0e0e0" : "",
              }}
              onClick={() => setSelectedOption("Bank of Kigali")}
            >
              Bank of Kigali
            </th>
            <th
              style={{
                padding: "10px 25px",
                textAlign: "center",
                cursor: "pointer",
                fontSize: "14px",
                borderBottom: "1px solid black",
                backgroundColor:
                  selectedOption === "Mobile Money" ? "#e0e0e0" : "",
              }}
              onClick={() => setSelectedOption("Mobile Money")}
            >
              Mobile Money
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions
            .filter((transaction) => transaction.type === selectedOption)
            .map((transaction, index) => (
              <tr key={index}>
                <td
                  colSpan="2"
                  style={{
                    padding: "10px",
                    textAlign: "left",
                    fontSize: "12px",
                    paddingLeft: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderBottom: "1px solid black",
                  }}
                >
                  {transaction.icon}
                  {transaction.description}
                </td>
              </tr>
            ))}
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

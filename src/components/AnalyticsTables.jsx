import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FinancialSummaryCards = ({
  investment = 0,
  expenses = 0,
  earnings = 0,
}) => {
  // Ensure that investment, expenses, and earnings are valid numbers before using toLocaleString
  const formatCurrency = (amount) => {
    return Number(amount).toLocaleString(); // Convert to number in case it's passed as string or undefined
  };

  // Chart data and options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  const investmentData = {
    labels: ["Investment"],
    datasets: [
      {
        label: "Amount",
        data: [investment],
        backgroundColor: "#4caf50",
        borderRadius: 8,
      },
    ],
  };

  const expensesData = {
    labels: ["Expenses"],
    datasets: [
      {
        label: "Amount",
        data: [expenses],
        backgroundColor: "#ff5722",
        borderRadius: 8,
      },
    ],
  };

  const earningsData = {
    labels: ["Earnings"],
    datasets: [
      {
        label: "Amount",
        data: [earnings],
        backgroundColor: "#2196f3",
        borderRadius: 8,
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        position: "absolute",
        top: "80%",
        right: "120px",
        transform: "translateY(-50%)",
      }}
    >
      {/* Investment Card */}
      <div
        style={{
          width: "300px",
          padding: "20px",
          background: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
          Investment
        </h3>
        <p style={{ margin: "5px 0", fontSize: "14px" }}>
          ${formatCurrency(investment)}
        </p>
        <Bar data={investmentData} options={chartOptions} />
      </div>

      {/* Expenses Card */}
      <div
        style={{
          width: "300px",
          padding: "20px",
          background: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
          Expenses
        </h3>
        <p style={{ margin: "5px 0", fontSize: "14px" }}>
          ${formatCurrency(expenses)}
        </p>
        <Bar data={expensesData} options={chartOptions} />
      </div>

      {/* Earnings Card */}
      <div
        style={{
          width: "300px",
          padding: "20px",
          background: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
          Earnings
        </h3>
        <p style={{ margin: "5px 0", fontSize: "14px" }}>
          ${formatCurrency(earnings)}
        </p>
        <Bar data={earningsData} options={chartOptions} />
      </div>
    </div>
  );
};

export default FinancialSummaryCards;

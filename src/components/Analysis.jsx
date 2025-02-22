import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const earningsData = [
  { name: 1, payment: 600000, distribution: 500000 },
  { name: 2, payment: 300000, distribution: 350000 },
  { name: 3, payment: 400000, distribution: 450000 },
  { name: 4, payment: 300000, distribution: 250000 },
  { name: 5, payment: 50000, distribution: 100000 },
  { name: 6, payment: 100000, distribution: 200000 },
];

const EarningsChart = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("January");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "40px",
        position: "absolute",
        top: "8rem",
        left: "16rem",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "280px",
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          color: "#000",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Year and Month selectors */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            style={{
              background: "#fff",
              color: "#000",
              border: "1px solid #ccc",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            style={{
              background: "#fff",
              color: "#000",
              border: "1px solid #ccc",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={earningsData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis
              dataKey="name"
              stroke="#000"
              tick={{ fontSize: 14 }}
              tickLine={{ stroke: "#000" }}
            />
            <YAxis
              stroke="#000"
              tick={{ fontSize: 14 }}
              tickLine={{ stroke: "#000" }}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "10px",
                color: "#000",
                border: "1px solid #ccc",
              }}
              cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
            />
            <Line
              type="monotone"
              dataKey="payment"
              stroke="#38bdf8"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="distribution"
              stroke="#f472b6"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Payment and Distribution labels with color boxes */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            fontSize: "14px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#38bdf8",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            ></div>
            <span style={{ fontWeight: "bold" }}>Payments</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#f472b6",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            ></div>
            <span style={{ fontWeight: "bold" }}>Distribution</span>
          </div>
        </div>
      </div>

      {/* Expense and Distribution Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
        <div
          style={{
            width: "400px",
            padding: "20px",
            background: "#fff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
            Expenses
          </h3>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>$50,000</p>
        </div>
        <div
          style={{
            width: "400px",
            padding: "20px",
            background: "#fff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
            Distribution
          </h3>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>$20,000</p>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;

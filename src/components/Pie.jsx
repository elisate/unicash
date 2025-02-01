import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data = {
  labels: ["In", "Out"],
  datasets: [
    {
      data: [600000, 400000],
      backgroundColor: ["#6B5540", "#B0B0B0"],
      borderColor: ["#6B5540", "#B0B0B0"],
      borderWidth: 1,
    },
  ],
};

const cardData = [
  {
    title: "In",
    amount: "600,000 FRW",
    icon: (
      <FaSignInAlt
        className="text-black"
        size={14}
        style={{ transform: "rotate(180deg)" }}
      />
    ),
    bgColor: "bg-chocolate-400",
  },
  {
    title: "Out",
    amount: "400,000 FRW",
    icon: <FaSignOutAlt className="text-red-500" size={14} />,
    bgColor: "bg-gray-200",
  },
];

const options = {
  cutout: "45%", // Slightly increased cutout for a smaller look
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: { enabled: false },
    legend: { display: false },
    datalabels: {
      display: true,
      color: "black",
      font: { size: 9, weight: "bold" },
      formatter: (value) => `${value.toLocaleString()}`,
      anchor: "end",
      align: "start",
      offset: 8,
    },
  },
};

export default function DoughnutWithCards() {
  return (
    <div
      className="flex items-center gap-4 w-full"
      style={{ marginTop: "-220px" }}
    >
      <div className="max-w-[120px]">
        <Doughnut data={data} options={options} />
      </div>

      <div className="flex w-[200px] bg-gray-200 rounded-lg shadow-md p-1">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex-1 p-1 flex items-center justify-between ${
              index === 0 ? "border-r border-gray-400" : ""
            } ${card.bgColor}`}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div
                  className={`p-1.5 rounded-full ${card.bgColor} flex justify-center items-center`}
                >
                  {card.icon}
                </div>
                <h3 className="text-[10px] font-semibold text-black ml-1">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs font-bold text-gray-800 truncate">
                {card.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
        size={18}
        style={{ transform: "rotate(180deg)" }}
      />
    ),
    bgColor: "bg-chocolate-400",
  },
  {
    title: "Out",
    amount: "400,000 FRW",
    icon: (
      <FaSignOutAlt
        className="text-red-500"
        size={18}
        style={{ transform: "rotate(0deg)" }}
      />
    ),
    bgColor: "bg-gray-200",
  },
];

const options = {
  cutout: "30%",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      color: "black",
      font: {
        size: 10,
        weight: "bold",
      },
      formatter: (value) => `${value.toLocaleString()}`,
      anchor: "end",
      align: "start",
      offset: 15,
    },
  },
};

export default function DoughnutWithCards() {
  return (
    <div
      className="flex items-start gap-8 w-full"
      style={{ marginTop: "-260px" }}
    >
      <div className="flex-1 max-w-[180px] relative mr-16">
        {" "}
        <Doughnut data={data} options={options} />
      </div>

      <div className="flex w-[260px] bg-gray-200 rounded-lg shadow-md p-2">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex-1 p-3 flex items-center justify-between ${
              index === 0 ? "border-r-2 border-gray-400" : ""
            } ${card.bgColor}`}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div
                  className={`p-2 rounded-full ${card.bgColor} flex justify-center items-center`}
                >
                  {card.icon}
                </div>
                <h3
                  className={`text-sm font-semibold text-black  ml-2 p-1 rounded ${card.bgColor}`}
                >
                  {card.title}
                </h3>
              </div>
              <p className="text-md font-bold text-gray-800 truncate">
                {card.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

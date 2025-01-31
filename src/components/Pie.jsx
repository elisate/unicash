import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutWithCards() {
  const data = {
    labels: ["In", "Out"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#D2691E", "#B0B0B0"],
        borderColor: ["#D2691E", "#B0B0B0"],
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
          className="text-green-500"
          size={18}
          style={{ transform: "rotate(180deg)" }}
        />
      ),
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
    },
  ];

  return (
    <div
      className="flex items-start gap-4 w-full"
      style={{ marginTop: "-132px" }}
    >
      <div className="flex-1 max-w-[180px]">
        <Doughnut
          data={data}
          options={{
            cutout: "70%",
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>

      <div className="flex gap-2 items-start">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-[120px] bg-white rounded-lg shadow-md p-2 flex items-center justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                {card.icon}
                <h3 className="text-sm font-semibold text-gray-700 ml-2">
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

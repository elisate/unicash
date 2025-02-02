import {
  FaUserGraduate,
  FaStore,
  FaRegCreditCard,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import MyAccounts from "./MyAccounts";
import Notifications from "./Notification";
import Pie from "./Pie";
import Transactions from "./Transaction";

const Card = ({ number, title, percentage, icon, isNegative }) => {
  const arrow = isNegative ? (
    <FaArrowDown className="text-red-500 mr-1" size={12} />
  ) : (
    <FaArrowUp className="text-green-500 mr-1" size={12} />
  );

  return (
    <div
      className="p-3 bg-white rounded-md text-center flex items-center justify-between text-xs"
      style={{ boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.15) inset" }}
    >
      <div className="flex flex-col items-center gap-2">
        {" "}
        <h3 className="text-lg font-semibold">{number}</h3>{" "}
        <h3 className="text-gray-600 text-sm">{title}</h3>{" "}
        <p className="text-sm text-gray-500 flex items-center">
          {" "}
          {arrow}
          {percentage} Since last month
        </p>
      </div>
      <div className="flex justify-center items-center p-3 bg-gray-200 rounded-full">
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );
};

export default function AdminDashboard() {
  const data = [
    {
      number: 220,
      title: "Students",
      percentage: "3.46%",
      icon: <FaUserGraduate className="text-lg text-blue-600" />,
      isNegative: true,
    },
    {
      number: 30,
      title: "Shops",
      percentage: "3.46%",
      icon: <FaStore className="text-lg text-green-600" />,
      isNegative: false,
    },
    {
      number: "3500.00",
      title: "Debt Metrics",
      percentage: "3.46%",
      icon: <FaRegCreditCard className="text-lg text-red-600" />,
      isNegative: false,
    },
  ];

  return (
    <div className="p-3 bg-white w-[1080px] right-2 fixed top-[77px] max-h-[560px] overflow-y-auto">
      <h1 className="text-xl font-medium mb-2">Hi, Welcome back</h1>{" "}
      <h2 className="text-md text-gray-600 font-medium mb-3">
        Admin’s Dashboard
      </h2>{" "}
      <div className="flex flex-col gap-4 p-2">
        <div className="grid grid-cols-3 gap-4 max-h-[250px] overflow-y-auto">
          {data.map((item, index) => (
            <Card
              key={index}
              number={item.number}
              title={item.title}
              percentage={item.percentage}
              icon={item.icon}
              isNegative={item.isNegative}
            />
          ))}
        </div>
      </div>
      <MyAccounts />
      <Notifications />
      <Pie />
      <Transactions />
    </div>
  );
}

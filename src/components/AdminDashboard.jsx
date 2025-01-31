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
    <FaArrowDown
      className="text-red-500 mr-1"
      style={{ transform: "rotate(30deg)" }}
    />
  ) : (
    <FaArrowUp
      className="text-green-500 mr-1"
      style={{ transform: "rotate(30deg)" }}
    />
  );

  return (
    <div
      className="p-3 bg-white rounded-lg text-center flex items-center justify-between"
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" }}
    >
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-1">{number}</h3>
        <h3 className="text-gray-600 text-md mb-1">{title}</h3>
        <p className="text-xs text-gray-500 flex items-center">
          {arrow}
          {percentage} Since last month
        </p>
      </div>
      {icon}
    </div>
  );
};

export default function AdminDashboard() {
  const data = [
    {
      number: 220,
      title: "Students",
      percentage: "3.46%",
      icon: <FaUserGraduate className="text-3xl text-blue-600" />,
      isNegative: true,
    },
    {
      number: 30,
      title: "Shops",
      percentage: "3.46%",
      icon: <FaStore className="text-3xl text-green-600" />,
      isNegative: false,
    },
    {
      number: "3500.00",
      title: "Debt Metrics",
      percentage: "3.46%",
      icon: <FaRegCreditCard className="text-3xl text-red-600" />,
      isNegative: false,
    },
  ];

  return (
    <div className="p-2 bg-white w-[1080px] right-2 fixed top-[77px] max-h-[560px] overflow-y-auto">
      <h1 className="text-xl font-semibold mb-3">Hi, Welcome back</h1>
      <h2 className="text-lg text-gray-600 font-medium mb-4">
        Admin’s Dashboard
      </h2>

      <div className="flex flex-col gap-4 p-2">
        <div className="grid grid-cols-3 gap-4 max-h-[300px] overflow-y-auto">
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

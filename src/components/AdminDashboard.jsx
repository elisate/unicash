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
    <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between text-xs sm:text-sm lg:text-base">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{number}</h3>
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <p className="text-sm text-gray-500 flex items-center">
          {arrow}
          {percentage} Since last month
        </p>
      </div>
      <div className="flex justify-center items-center p-4 bg-gray-200 rounded-full shadow-inner">
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
      icon: <FaUserGraduate className="text-blue-600" />,
      isNegative: true,
    },
    {
      number: 30,
      title: "Shops",
      percentage: "3.46%",
      icon: <FaStore className="text-green-600" />,
      isNegative: false,
    },
    {
      number: "3500.00",
      title: "Debt Metrics",
      percentage: "3.46%",
      icon: <FaRegCreditCard className="text-red-600" />,
      isNegative: false,
    },
  ];

  return (
    <div className="p-4 bg-white w-full max-w-[1200px] mx-auto mt-[20px] max-h-[600px] overflow-y-auto rounded-lg shadow-lg">
      <h1 className="text-xl font-medium mb-2">Hi, Welcome back</h1>
      <h2 className="text-md text-gray-600 font-medium mb-4">
        Admin’s Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      <div className="mt-6 space-y-6">
        <MyAccounts />
        <Notifications />
        <Pie />
        <Transactions />
      </div>
    </div>
  );
}

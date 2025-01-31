import { FaRegBell } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    message: "You have used up 80% of your budget.",
    date: "Jan 31",
    time: "10:45 AM",
  },
  {
    id: 2,
    message: "You have used up 50% of your budget.",
    date: "Jan 30",
    time: "8:30 PM",
  },
  {
    id: 3,
    message: "You have used up 10% of your budget.",
    date: "Jan 29",
    time: "5:15 PM",
  },
  {
    id: 4,
    message: "You have used up 10% of your budget.",
    date: "Jan 29",
    time: "5:15 PM",
  },
  {
    id: 5,
    message: "You have used up 10% of your budget.",
    date: "Jan 29",
    time: "5:15 PM",
  },
  {
    id: 6,
    message: "You have used up 10% of your budget.",
    date: "Jan 29",
    time: "5:15 PM",
  },
];

const Notifications = ({ notifications = [] }) => {
  if (!notifications || notifications.length === 0) {
    return (
      <div
        className="w-[450px] p-4 rounded-lg bg-white shadow-md"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        <h2 className="text-xl font-semibold text-white bg-[#6B5540] p-2 rounded-t-lg mb-4">
          Notifications
        </h2>
        <p className="text-gray-500">No notifications yet.</p>
      </div>
    );
  }

  return (
    <div
      className="w-[450px] p-4 rounded-lg bg-white shadow-md"
      style={{ maxHeight: "500px", overflowY: "auto" }}
    >
      <h2 className="text-xl font-semibold text-white bg-[#6B5540] p-2 rounded-t-lg mb-4">
        Notifications
      </h2>
      <div>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center justify-between p-3 mb-4 border-b border-gray-200"
          >
            <FaRegBell className="text-black opacity-80" size={20} />
            <div className="flex flex-col ml-2 w-[70%]">
              <p className="text-xs font-medium text-gray-800">
                {notification.message}
              </p>
            </div>
            <div className="flex items-center text-xs text-gray-500 w-[30%] justify-end">
              <p className="mr-2">Today, {notification.date}</p>
              <p className="whitespace-nowrap">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex gap-12 p-2">
      <div className="flex-1"></div>
      <div className="mt-[-132px] mr-0 w-[450px] top[-132px]">
        {" "}
        <Notifications notifications={notifications} />
      </div>
    </div>
  );
}

export default App;

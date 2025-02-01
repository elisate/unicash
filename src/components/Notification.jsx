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
    message: "Your payment was successful.",
    date: "Jan 28",
    time: "3:10 PM",
  },
  {
    id: 5,
    message: "Subscription renewal is due soon.",
    date: "Jan 27",
    time: "12:00 PM",
  },
];

const Notifications = ({ notifications = [] }) => {
  return (
    <div className="w-[500px] h-[300px] p-4 rounded-lg bg-gray-200 shadow-md flex flex-col">
      <h2 className="text-lg font-semibold text-white bg-[#6B5540] p-2 rounded-t-lg  top-0 z-0">
        Notifications
      </h2>
      <div className="overflow-y-auto flex-1 space-y-3">
        {notifications.length === 0 ? (
          <p className="text-gray-500 p-3">No notifications yet.</p>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center justify-between p-2 border-b border-gray-400"
            >
              <FaRegBell className="text-black opacity-80" size={16} />
              <div className="flex flex-col ml-2 flex-1">
                <p className="text-xs font-medium text-gray-800">
                  {notification.message}
                </p>
                <p className="text-[10px] text-gray-500">
                  {notification.date}, {notification.time}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex justify-end p-4">
      <div className="mt-[-100px]">
        <Notifications notifications={notifications} />
      </div>
    </div>
  );
}

export default App;

import { Bell, Users, Search } from "lucide-react";

const NavbarIcon = ({ Icon, size, onClick, hasNotification }) => (
  <div className="relative text-gray-600 cursor-pointer" onClick={onClick}>
    <Icon size={size} />
    {hasNotification && (
      <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full"></span>
    )}
  </div>
);

export default function Navbar() {
  const notifications = {
    bell: true,
    profile: true,
  };

  const handleSearchClick = () => {
    console.log("Search clicked");
  };

  const handleBellClick = () => {
    console.log("Bell clicked");
  };

  const handleUsersClick = () => {
    console.log("Users clicked");
  };

  return (
    <nav className="w-[1132px] h-[77px] bg-white flex items-center justify-between px-6 shadow-sm border-b border-gray-200 fixed top-0 right-0">
      <NavbarIcon Icon={Search} size={24} onClick={handleSearchClick} />

      <div className="flex items-center gap-8 ml-auto">
        <NavbarIcon
          Icon={Bell}
          size={24}
          onClick={handleBellClick}
          hasNotification={notifications.bell}
        />

        <NavbarIcon Icon={Users} size={24} onClick={handleUsersClick} />
        <div className="h-16 w-[1px] bg-gray-300"></div>
      </div>

      <div className="flex items-center gap-6">
        <div className="h-16 w-[1px] bg-gray-300"></div>

        <div
          className="relative cursor-pointer"
          onClick={() => console.log("Profile clicked")}
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          {notifications.profile && (
            <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full"></span>
          )}
        </div>
      </div>
    </nav>
  );
}

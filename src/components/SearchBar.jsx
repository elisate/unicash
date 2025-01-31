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

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  return (
    <nav
      className="w-full max-w-[1100px] h-[77px]  bg-white flex items-center justify-between px-6 fixed top-0 right-8 z-10 border-b border-gray-300 mx-auto pr-4 lg:width-auto lg:px-8"
      style={{
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      <div className="flex items-center gap-2 lg:gap-4 lg:ml-0 ml-auto">
        <NavbarIcon Icon={Search} size={24} onClick={handleSearchClick} />
      </div>

      <div className="flex items-center gap-4 lg:ml-auto">
        <NavbarIcon
          Icon={Bell}
          size={24}
          onClick={handleBellClick}
          hasNotification={notifications.bell}
        />
        <NavbarIcon Icon={Users} size={24} onClick={handleUsersClick} />
        <div className="relative cursor-pointer" onClick={handleProfileClick}>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          {notifications.profile && (
            <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full"></span>
          )}
        </div>
      </div>
    </nav>
  );
}

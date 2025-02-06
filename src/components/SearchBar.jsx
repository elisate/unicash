import { Bell, Users, Search } from "lucide-react";

const NavbarIcon = ({ Icon, size, onClick, hasNotification }) => (
  <div className="relative text-gray-600 cursor-pointer p-2" onClick={onClick}>
    <Icon size={size} />
    {hasNotification && (
      <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-green-500 rounded-full"></span>
    )}
  </div>
);

export default function Navbar() {
  const notifications = {
    bell: true,
    profile: true,
  };

  const handleSearchClick = () => console.log("Search clicked");
  const handleBellClick = () => console.log("Bell clicked");
  const handleUsersClick = () => console.log("Users clicked");
  const handleProfileClick = () => console.log("Profile clicked");

  return (
    <nav className="w-full max-w-screen-lg h-[77px] bg-white flex items-center justify-between px-4 sm:px-6 lg:px-8  right-0 mx-auto z-0 border-b border-gray-300 fixed top-0 left-0  ml-56">
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        <NavbarIcon Icon={Search} size={24} onClick={handleSearchClick} />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-4">
        <NavbarIcon
          Icon={Bell}
          size={24}
          onClick={handleBellClick}
          hasNotification={notifications.bell}
        />
        <NavbarIcon Icon={Users} size={24} onClick={handleUsersClick} />

        {/* Profile Icon */}
        <div className="relative cursor-pointer" onClick={handleProfileClick}>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          {notifications.profile && (
            <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-green-500 rounded-full"></span>
          )}
        </div>
      </div>
    </nav>
  );
}

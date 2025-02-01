import React, { useState } from "react";
import {
  FaBell,
  FaEnvelope,
  FaGlobe,
  FaQuestionCircle,
  FaFileContract,
  FaCog,
} from "react-icons/fa";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);

  const settingsOptions = [
    {
      name: "General Settings",
      icon: <FaCog />,
      action: () => alert("General Settings Clicked"),
    },
    {
      name: "Sounds and Notifications",
      icon: <FaBell />,
      action: () => alert("Sounds & Notifications Clicked"),
    },
    {
      name: "Email Notification",
      icon: <FaEnvelope />,
      customElement: (
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="sr-only peer"
          />
          <div
            className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-5 peer-checked:after:border-white peer-checked:bg-blue-600 after:absolute after:top-[3px] 
          after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
          ></div>
        </label>
      ),
    },
    {
      name: "Languages",
      icon: <FaGlobe />,
      action: () => alert("Languages Clicked"),
    },
    {
      name: "Help Center",
      icon: <FaQuestionCircle />,
      action: () => alert("Help Center Clicked"),
    },
    {
      name: "Terms & Conditions",
      icon: <FaFileContract />,
      action: () => alert("Terms & Conditions Clicked"),
    },
  ];

  return (
    <div className="w-[800px] max-w-lg bg-white  rounded-lg p-6 mt-6 ml-[-20px]">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        General Settings
      </h2>

      <div className="space-y-2">
        {settingsOptions.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition cursor-pointer"
            onClick={option.action}
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-lg">{option.icon}</span>
              <span className="text-gray-700 text-base font-medium">
                {option.name}
              </span>
            </div>
            {option.customElement ? option.customElement : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;

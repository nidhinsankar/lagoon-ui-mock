"use client";
import {
  AccessibilityIcon,
  AirVentIcon,
  AirplayIcon,
  BackpackIcon,
  PanelRightCloseIcon,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { icon: <AccessibilityIcon />, label: "Home" },
  { icon: <AirVentIcon />, label: "Dashboard" },
  { icon: <AirplayIcon />, label: "Reports" },
  { icon: <BackpackIcon />, label: "Profile" },
  { icon: <AirplayIcon />, label: "Settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex fixed left-0 top-0 bottom-0 ">
      <div
        className={cn(
          "h-screen flex flex-col justify-between items-start py-4 transition-all duration-300 bg-white shadow-lg",
          isOpen ? "w-56" : "w-20"
        )}
      >
        {/* Sidebar Toggle Button */}
        <div className="flex justify-center mb-4">
          <PanelRightCloseIcon
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-black"
            size={24}
          />
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-col px-5 space-y-6 w-full">
          {NAV_LINKS.map((link) => (
            <div
              className="flex items-center justify-between space-x-3"
              key={link.label}
            >
              <div className="p-2 bg-blue-100 text-green-600 rounded-full">
                {link.icon}
              </div>
              {isOpen && <span className="text-gray-600">{link.label}</span>}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="my-6 flex justify-center">
          <div className="p-2 bg-blue-100 text-green-600 rounded-full">
            <AccessibilityIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarItemProps {
  index: number;
  path: string;
  label: string;
  icon: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ index, path, label, icon }) => {
  const location = useLocation();
  //const isActive = location.pathname === path;
  const isActive = location.pathname.startsWith(path);

  return (
    <li key={index} id={index.toString()} className="mb-2">
      <Link
        to={path}
        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
          isActive ? "bg-gray-200 dark:bg-gray-600" : ""
        }`}
      >
        <i
          className={`${icon} flex-shrink-0 w-5 h-5 transition-colors duration-200 text-gray-500 dark:text-gray-400`}
        />
        <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Users,
  Calendar,
  Clipboard,
  Folder,
  Box,
  CheckSquare,
  DollarSign,
  BarChart2,
  Settings,
  Archive,
  ChevronDown,
} from "@deemlol/next-icons";

const baseClass =
  "flex items-center gap-2 px-4 py-2 transition-colors text-[12px] w-full";
const activeClass = "bg-blue-500 text-white";
const hoverClass = "hover:bg-blue-300";

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  const links = [
    { href: "/home", label: "Home", icon: <House className="w-3 h-3" /> },
    { href: "/Employees", label: "Employees Directory", icon: <Users className="w-3 h-3" /> },

    {
      label: "Attendance",
      icon: <Calendar className="w-3 h-3" />,
      children: [
        { href: "/Attendence", label: "Overview" },
       
      ],
    },

    { href: "/Leave", label: "Leave Management", icon: <Clipboard className="w-3 h-3" /> },
    { href: "/Document", label: "Document Management", icon: <Folder className="w-3 h-3" /> },
    { href: "/Ticket", label: "Ticket Management", icon: <CheckSquare className="w-3 h-3" /> },
    { href: "/Asset", label: "Asset Management", icon: <Box className="w-3 h-3" /> },
    { href: "/Task", label: "Task Management", icon: <CheckSquare className="w-3 h-3" /> },
    { href: "/Offbording", label: "Offboarding", icon: <Archive className="w-3 h-3" /> },
    { href: "/Asset/Expense", label: "Expense Management", icon: <DollarSign className="w-3 h-3" /> },
    { href: "/Payroll", label: "Payroll Management", icon: <DollarSign className="w-3 h-3" /> },
    { href: "/performance", label: "Performance Management", icon: <BarChart2 className="w-3 h-3" /> },
    { href: "/admin", label: "Admin Settings", icon: <Settings className="w-3 h-3" /> },
  ];

  const isActive = (href) =>
    pathname?.toLowerCase() === href.toLowerCase();

  return (
    <div className="w-52 bg-white text-black fixed top-15 pt-3 left-0 h-[calc(100vh-4rem)] overflow-y-auto shadow-md">
      <ul className="flex flex-col gap-1">
        {links.map((item, index) => (
          <li key={index}>
            {item.children ? (
              <>
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === item.label ? null : item.label)
                  }
                  className={`${baseClass} ${hoverClass} justify-between`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openMenu === item.label && (
                  <ul className="ml-6 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`${baseClass} text-[11px] ${
                            isActive(child.href)
                              ? "bg-blue-100 text-blue-600"
                              : "hover:bg-blue-100"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className={`${baseClass} ${
                  isActive(item.href) ? activeClass : hoverClass
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
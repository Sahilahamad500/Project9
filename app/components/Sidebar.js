"use client";

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
} from "@deemlol/next-icons";

const baseClass = "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-[12px] w-50";

const activeClass = "bg-blue-500 text-white";
const hoverClass = "hover:bg-blue-300";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: <House className="w-3 h-3" /> },
    { href: "/Employees", label: "Employees Directory", icon: <Users className="w-3 h-3" /> },
    { href: "/Attendence", label: "Attendance", icon: <Calendar className="w-3 h-3" /> },
    { href: "/Leave", label: "Leave Management", icon: <Clipboard className="w-3 h-3" /> },
    { href: "/Document", label: "Document Management", icon: <Folder className="w-3 h-3" /> },
    { href: "/Ticket", label: "Ticket Management", icon: <CheckSquare className="w-3 h-3" /> },
    { href: "/Asset", label: "Asset Management", icon: <Box className="w-3 h-3" /> },
    { href: "/Task", label: "Task Management", icon: <CheckSquare className="w-3 h-3" /> },
    { href: "/offboarding", label: "Offboarding", icon: <Archive className="w-3 h-3" /> },
    { href: "/expenses", label: "Expense Management", icon: <DollarSign className="w-3 h-3" /> },
    { href: "/payroll", label: "Payroll Management", icon: <DollarSign className="w-3 h-3" /> },
    { href: "/performance", label: "Performance Management", icon: <BarChart2 className="w-3 h-3" /> },
    { href: "/admin", label: "Admin Settings", icon: <Settings className="w-3 h-3" /> },
  ];

  const isActive = (href) => pathname?.toLowerCase() === href.toLowerCase();

  return (
<div className="w-52 bg-white text-black fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto shadow-md p-2">
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${baseClass} ${
                isActive(link.href) ? activeClass : hoverClass
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

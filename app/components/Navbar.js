"use client";

import Link from "next/link";
import { Mail, Bell, House } from "@deemlol/next-icons";

export default function Navbar() {
    return (
        <nav className="w-full bg-white shadow-md text-black p-4 flex justify-between items-center">

            <div className="text-lg ">
                <Link href="/">
                <img
                    src="https://hr-screening.s3.ap-south-1.amazonaws.com/collectivWork%20Website%20images/updatedLogo.svg_1763715257799"
                    alt="Logo"
                    width={170}
                    height={70}
                    className="object-contain"
                />
                </Link>
            </div>


            <ul className="flex gap-6 pe-3">
                <li>
                    <Link href="/" className="hover:text-gray-300">
                        <House className="w-5 h-5 text-gray-600" />
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-gray-300">
                        <Mail className="w-5 h-5 text-gray-600" />
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-gray-300">
                        <Bell className="w-5 h-5 text-gray-600" />
                    </Link>
                </li>
                <li>
                    <input type="text" placeholder="Search..." className="border rounded-md w-50 px-2 py-1" />
                </li>
                <li>
                    <Link
                        href="/contact"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white hover:bg-blue-600 transition font-semibold">
                        SA
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

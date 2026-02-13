"use client";

import Link from "next/link";
import { Mail, Bell, Grid } from "@deemlol/next-icons";
import { useState, useEffect } from "react";

export default function Navbar() {


    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

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

            <ul className="flex gap-6 pe-3 items-center">
                <li>
                    <Link href="/">
                        <Grid className="w-5 h-5 hover:text-blue-300" />
                    </Link>
                </li>
                <li>
                    <Link href="/about" >
                        <Mail className="w-5 h-5 hover:text-blue-500" />
                    </Link>
                </li>
                <li>
                    <Link href="/contact" >
                        <Bell className="w-5 h-5 hover:text-blue-500" />
                    </Link>
                </li>

                <div className="border border-blue-100 flex justify-between rounded" >

                    <button className="w-22 py-1 ps-2 cursor-pointer  hover:bg-blue-50 " >
                        <span className="text-blue-500 text-sm pe-4  border-r-1 ">
                            {String(hours).padStart(2, "0")}:
                            {String(minutes).padStart(2, "0")}:
                            {String(seconds).padStart(2, "0")}
                        </span>
                    </button>

                    <button onClick={() => setIsRunning((prev) => !prev)} className= "w-auto pe-1 hover:bg-blue-50 pointer-coarse:"     >
                        <select className=" text-center appearance-none border-none outline-none focus:outline-none bg-transparent text-sm text-blue-500">
                            <option>Web Punch In  </option>
                            <option > Remote Punch In</option>
                        </select>
                    </button>

                </div>

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

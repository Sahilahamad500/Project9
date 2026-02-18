"use client";

import Link from "next/link";
import { Mail, Bell, Grid } from "@deemlol/next-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();

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
        <nav className="w-full bg-white shadow-md text-black p-2 px-6 flex justify-between items-center">
            <div className="text-lg ">
                <Link href="/">
                    <img
                        src="https://hr-screening.s3.ap-south-1.amazonaws.com/collectivWork%20Website%20images/updatedLogo.svg_1763715257799"
                        alt="Logo"
                        width={170}
                        height={170}
                        className="object-contain"
                    />
                </Link>
            </div>



            <ul className="flex gap-6  items-center">
                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("isLoggedIn");
                        router.push("/login"); 
                    }}
                    className=" rounded-2xl p-1 px-3 bg-blue-500 text-white hover:bg-red-500 cursor-pointer"
                >
                    Logout
                </button>

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

                    <button onClick={() => setIsRunning(false)} className="w-22 py-1 ps-2 cursor-pointer  hover:bg-blue-50 " >
                        <span className="text-blue-500 text-sm pe-4  border-r-1 ">
                            {String(hours).padStart(2, "0")}:
                            {String(minutes).padStart(2, "0")}:
                            {String(seconds).padStart(2, "0")}
                        </span>
                    </button>
                    {/* onClick={() => setIsRunning((prev) => !prev)} */}
                    <button className="w-auto pe-1 hover:bg-blue-50 pointer-coarse:">
                        <select
                            onChange={(e) => {
                                const value = e.target.value
                                setIsRunning(true)
                            }}
                            className=" text-center appearance-none border-none outline-none focus:outline-none bg-transparent text-sm text-blue-500">
                            <option value="">Select punch</option>
                            <option value="web">Web Punch In  </option>
                            <option value="remote"> Remote Punch In</option>
                        </select>
                    </button>

                </div>

                <li>
                    <Link
                        href="/home"
                        className="flex items-center justify-center w-11 h-11 rounded-full bg-pink-500 text-white hover:bg-blue-600 transition ">
                        SA
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

export default function LayoutContent({ children }) {
    const pathname = usePathname();
    const showSidebar = pathname !== "/";

    return (
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 left-0 right-0 h-16 z-50">
                <Navbar />
            </div>

            <div className="flex pt-16">
                {showSidebar && (
                    <div className="fixed top-16 left-0 w-52 h-[calc(100vh-4rem)] z-40">
                        <Sidebar />
                    </div>
                )}

                <main
                    className={`flex-1 overflow-y-auto  bg-gray-100 ${showSidebar ? "ml-52" : ""
                        }`}
                >
                    {children}
                    <Footer/>
                </main>
            </div>
        </div>
    );
}

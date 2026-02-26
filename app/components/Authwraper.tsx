"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn && pathname !== "/login") {
      router.replace("/login");
      return;
    }

    if (isLoggedIn && pathname === "/login") {
      router.replace("/"); 
      return;
    }

    setAllowed(true);
  }, [pathname, router]);

  if (!allowed) return null; 

  return <>{children}</>; 
}

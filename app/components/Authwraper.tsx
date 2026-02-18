"use client";

import { useLayoutEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useLayoutEffect(() => {
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
  });

  if (!allowed) return null;

  return <>{children}</>;
}

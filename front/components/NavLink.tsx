"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 w-full rounded-2xl rounded-r-none p-2 ${
        isActive ? "border-r-2 border-sidebar-primary text-sidebar-primary" : ""
      }`}
    >
      {children}
    </Link>
  );
};
export default NavLink;

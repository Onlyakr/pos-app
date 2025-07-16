"use client";

import { ModeToggle } from "./ModeToggle";
import Account from "./Account";
import { User } from "@/lib/usersdata";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/logo.png";

const Headers = ({ user }: { user: User }) => {
  const { open } = useSidebar();
  const pathname = usePathname();
  const title =
    pathname.split("/")[1].charAt(0).toUpperCase() +
    pathname.split("/")[1].slice(1);

  return (
    <div className="flex grow justify-between items-center cursor-default">
      {open ? (
        !title ? (
          <p className="text-2xl font-medium uppercase">Home</p>
        ) : (
          <p className="text-2xl font-medium uppercase">{title}</p>
        )
      ) : !title ? (
        <div className="flex items-center gap-5">
          <Image src={logo} alt="logo" width={50} height={50} />
          <p className="text-2xl font-medium uppercase">Home</p>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={50} height={50} />
          <p className="text-2xl font-medium uppercase">{title}</p>
        </div>
      )}

      <div className="flex items-center gap-5">
        <Account user={user} />
        <ModeToggle />
      </div>
    </div>
  );
};
export default Headers;

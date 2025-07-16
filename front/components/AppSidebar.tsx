import { User } from "@/lib/usersdata";
// import Logo from "./Logo";
import CashierMenu from "./cashier/CashierMenu";
import ManagerMenu from "./manager/ManagerMenu";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const AppSidebar = ({ user }: { user: User }) => {
  return (
    <Sidebar variant="floating" collapsible="offcanvas" className="border-none">
      <SidebarHeader className="mt-3 flex flex-col items-center">
        {/* <Logo /> */}
        <Link href="/">
          <Image src={logo} alt="logo" width={80} height={80} />
        </Link>
        <h1 className="text-2xl font-medium">Moonlight Books</h1>
      </SidebarHeader>
      <SidebarContent className="mt-5">
        <SidebarGroup className="flex flex-col grow gap-10">
          {user.role === "cashier" && <CashierMenu />}
          {user.role === "manager" && <ManagerMenu />}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-3 mx-auto max-w-2/3"></SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;

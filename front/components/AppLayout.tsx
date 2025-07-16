"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import { User } from "@/lib/usersdata";
import MainApp from "./MainApp";

const AppLayout = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User;
}) => {
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <MainApp user={user}>{children}</MainApp>
    </SidebarProvider>
  );
};
export default AppLayout;

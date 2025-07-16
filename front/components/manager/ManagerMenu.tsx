import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";
import { LayoutDashboard, ShoppingCart } from "lucide-react";
import NavLink from "../NavLink";

interface menuItems {
  label: string;
  icon: React.ElementType;
  href: string;
}

const managerMenuItems: menuItems[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Sales",
    icon: ShoppingCart,
    href: "/sales",
  },
  {
    label: "Stock",
    icon: ShoppingCart,
    href: "/stock",
  },
  {
    label: "Management",
    icon: ShoppingCart,
    href: "/management",
  },
];

const ManagerMenu = () => {
  return (
    <SidebarMenu>
      {managerMenuItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuButton className="h-12 rounded-2xl mb-5">
            <NavLink href={item.href}>
              <div className="bg-sidebar-foreground rounded-full p-1.5">
                <item.icon className="text-sidebar" size={20} />
              </div>
              <span>{item.label}</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};
export default ManagerMenu;

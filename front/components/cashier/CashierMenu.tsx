import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";
import NavLink from "../NavLink";
import { Package, ShoppingCart } from "lucide-react";

interface menuItems {
  label: string;
  icon: React.ElementType;
  href: string;
}

const cashierMenuItems: menuItems[] = [
  {
    label: "Products",
    icon: Package,
    href: "/products",
  },
  {
    label: "Sales",
    icon: ShoppingCart,
    href: "/sales",
  },
];

const CashierMenu = () => {
  return (
    <SidebarMenu>
      {cashierMenuItems.map((item) => (
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
export default CashierMenu;

import { Link } from "react-router-dom";
import { useLanguage } from "@/components/LanguageSwitcher";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Settings,
  BarChart3,
  LogOut,
  Store,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function DashboardSidebar() {
  const { lang } = useLanguage();

  const menuItems = [
    {
      title: lang === 'ar' ? "لوحة التحكم" : "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: lang === 'ar' ? "المنتجات" : "Products",
      path: "/dashboard/products",
      icon: Package,
    },
    {
      title: lang === 'ar' ? "الطلبات" : "Orders",
      path: "/dashboard/orders",
      icon: ShoppingCart,
    },
    {
      title: lang === 'ar' ? "التحليلات" : "Analytics",
      path: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: lang === 'ar' ? "الإعدادات" : "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-bold text-green-600 hover:text-green-700 transition-colors"
        >
          <Store className="h-6 w-6" />
          {lang === 'ar' ? "دكان تك" : "Dukan Tech"}
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {lang === 'ar' ? "القائمة الرئيسية" : "Main Menu"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                  >
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              variant="outline"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              tooltip={lang === 'ar' ? "تسجيل الخروج" : "Logout"}
            >
              <button className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                <span>{lang === 'ar' ? "تسجيل الخروج" : "Logout"}</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
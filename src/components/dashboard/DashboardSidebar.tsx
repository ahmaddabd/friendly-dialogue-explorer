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
  ChevronRight,
  ChevronLeft,
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
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function DashboardSidebar() {
  const { lang } = useLanguage();
  const { toggleSidebar, state } = useSidebar();

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
      <SidebarHeader className="relative border-b border-sidebar-border/50 p-4">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-bold text-primary transition-colors hover:text-primary/90"
        >
          <Store className="h-6 w-6" />
          <span className={cn("transition-opacity duration-200", 
            state === "collapsed" && "opacity-0"
          )}>
            {lang === 'ar' ? "دكان تك" : "Dukan Tech"}
          </span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          onClick={toggleSidebar}
        >
          {state === "collapsed" ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-2 py-4 text-xs font-semibold">
            {lang === 'ar' ? "القائمة الرئيسية" : "Main Menu"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    tooltip={state === "collapsed" ? item.title : undefined}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Link to={item.path} className="flex w-full items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span className={cn(
                        "text-sm font-medium transition-opacity duration-200",
                        state === "collapsed" && "opacity-0"
                      )}>
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border/50 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              variant="outline"
              className="w-full justify-start text-destructive hover:bg-destructive/10"
              tooltip={state === "collapsed" ? (lang === 'ar' ? "تسجيل الخروج" : "Logout") : undefined}
            >
              <button className="flex items-center gap-3">
                <LogOut className="h-4 w-4" />
                <span className={cn(
                  "text-sm font-medium transition-opacity duration-200",
                  state === "collapsed" && "opacity-0"
                )}>
                  {lang === 'ar' ? "تسجيل الخروج" : "Logout"}
                </span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
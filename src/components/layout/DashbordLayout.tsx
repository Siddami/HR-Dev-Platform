import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNav";

const DashboardLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar onMenuToggle={() => setIsMobileSidebarOpen(true)} />

      <Sidebar
        isMobileOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      <main className="pt-16 lg:ml-64 p-4 md:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

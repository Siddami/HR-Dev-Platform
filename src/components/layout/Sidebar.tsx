import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdAccessTime,
  MdGroupAdd,
  MdAttachMoney,
  MdAssessment,
  MdCalendarToday,
  MdFolder,
  MdSettings,
} from "react-icons/md";

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: "Dashboard", path: "/", icon: MdDashboard },
  { label: "Employees", path: "/employees", icon: MdPeople },
  { label: "Time & Attendance", path: "/attendance", icon: MdAccessTime },
  { label: "Recruitment", path: "/recruitment", icon: MdGroupAdd },
  { label: "Payroll", path: "/payroll", icon: MdAttachMoney },
  { label: "Reports", path: "/reports", icon: MdAssessment },
  { label: "Calendar", path: "/calendar", icon: MdCalendarToday },
  { label: "Documents", path: "/documents", icon: MdFolder },
  { label: "Settings", path: "/settings", icon: MdSettings },
];

interface SidebarProps {
  isMobileOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isMobileOpen = false, onClose }: SidebarProps) => {
  return (
    <aside
      className={`
        fixed left-0 top-16 bottom-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out overflow-y-auto
        lg:translate-x-0
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <nav className="mt-6 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-gray hover:bg-primary/10 hover:text-primary"
              }`
            }
            onClick={onClose}
          >
            <item.icon className="text-xl" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-10 px-3">
        <div className="bg-primary/10 p-4 rounded-xl">
          <h3 className="font-semibold text-primary-text text-sm mb-1">
            Need Help?
          </h3>
          <p className="text-xs text-gray mb-3">
            Please check our docs or contact support for any issues.
          </p>
          <button className="w-full bg-white text-primary text-sm font-medium py-2 rounded-lg hover:bg-primary/60 hover:text-white transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

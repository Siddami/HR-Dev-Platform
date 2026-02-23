import { useState } from "react";
import { MdMenu, MdNotificationsNone } from "react-icons/md";
import Avatar from '../../assets/avatar.svg?react'
import Question from '../../assets/question-Icon.svg?react'

interface TopNavbarProps {
  onMenuToggle: () => void;
}

const TopNavbar = ({ onMenuToggle }: TopNavbarProps) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 h-16">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="flex items-center gap-4">
          {/* Mobile hamburger */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden text-gray-600 text-2xl focus:outline-none"
          >
            <MdMenu />
          </button>
          {/* Logo */}
          <img src="/logo.svg" alt="logo image" className="h-8 w-auto" />
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <Question className="w-5 h-auto"/>
          {/* Notifications */}
          <button className="text-gray hover:text-primary relative">
            <MdNotificationsNone className="text-2xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
            </span>
          </button>

          {/* User Avatar / Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <Avatar className="w-8 h-8"/>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray hover:bg-gray/10"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray hover:bg-gray/10"
                >
                  Settings
                </a>
                <hr className="my-1" />
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray/10"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;

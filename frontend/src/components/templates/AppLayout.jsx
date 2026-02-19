import React, { Children } from "react";
import Navbar from "../organism/Navbar";
import Sidebar from "../organism/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

import { useAuthStore } from "../../store/useAuthStore";

const AppLayout = () => {
  const location = useLocation();
  const isLogin = useAuthStore((state) => state.isLogin);

  const types = {
    "/dashboard": "main",
    "/": "landing",
    "/activity": "sub",
    "/profile": "sub",
    "/about": "about",
    "/information-user": "info",
    "/hows-it-work": "how",
    "/profile/settings": "main",
  };

  const isLanding = location.pathname === "/";

  return (
    <div className="font-inter min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {!isLanding && isLogin && (
        <Sidebar className="hidden lg:flex flex-shrink-0 sticky top-0 h-screen" />
      )}

      <div className={`flex-1 flex flex-col min-w-0 ${!isLanding && isLogin ? "h-screen overflow-hidden" : ""}`}>
        <div className={!isLanding && isLogin ? "lg:hidden" : ""}>
          <Navbar
            variant={types[location.pathname]}
            isFixed={true}
          />
        </div>
        <main
          className={`p-4 lg:px-8 lg:py-10 bg-gray-50 flex-1 overflow-y-auto relative pb-24 lg:pb-8 ${!isLanding && isLogin ? "pt-20" : "pt-14"
            }`}
        >
          <div className="max-w-4xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

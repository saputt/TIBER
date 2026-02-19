import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Activity, User, LogOut } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import { useLogout } from "../../hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { activityOverviewService } from "../../services/activityService";
import { getPersonalizationService } from "../../services/personalizationService";
import Card from "../../components/atoms/Card";
import Button from "../../components/atoms/Button";

const Sidebar = ({ className }) => {
    const queryClient = useQueryClient();
    const location = useLocation();
    const isActive = (path) => location.pathname.startsWith(path);
    const user = useAuthStore((state) => state.user);
    const { mutate: logout } = useLogout();
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
        { icon: Activity, label: "Aktivitas", path: "/activity" },
        { icon: User, label: "Profil", path: "/profile" },
    ];

    let hoverTime;

    const handleMouseEnterActivity = () => {
        hoverTime = setTimeout(() => {
            queryClient.prefetchQuery({
                queryKey: ["activity", "overview"],
                queryFn: () => activityOverviewService(),
                staleTime: 60 * 60 * 1000,
                refetchOnWindowFocus: false,
                refetchOnMount: false,
            });
        }, 200);
    };

    const handleMouseLeaveActivity = () => {
        clearTimeout(hoverTime);
    };

    const handleMouseEnterProfile = () => {
        hoverTime = setTimeout(() => {
            queryClient.prefetchQuery({
                queryKey: ["personalization", "dashboard"],
                queryFn: () => getPersonalizationService(),
                staleTime: 60 * 60 * 1000,
                refetchOnWindowFocus: false,
                refetchOnMount: false,
            });
        }, 200);
    };

    const handleMouseLeaveProfile = () => {
        clearTimeout(hoverTime);
    };

    const handleLogout = () => {
        logout();
        setIsLogoutModalOpen(false);
    }

    return (
        <>
            <aside className={`flex-col w-64 h-screen bg-white border-r border-gray-200 sticky top-0 ${className}`}>
                <div className="p-6 flex items-center gap-3">
                    <img src="/logo.png" alt="Logo TIBER" className="w-8 h-8" />
                    <h1 className="text-primary text-h3 font-bold">TIBER</h1>
                </div>

                <nav className="flex-1 flex flex-col gap-3 px-4 py-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onMouseEnter={item.path === "/activity" ? handleMouseEnterActivity : item.path === "/profile" ? handleMouseEnterProfile : null}
                            onMouseLeave={item.path === "/activity" ? handleMouseLeaveActivity : item.path === "/profile" ? handleMouseLeaveProfile : null}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive(item.path)
                                ? "bg-primary text-white shadow-md font-semibold"
                                : "text-gray-500 hover:bg-gray-50 hover:text-primary"
                                }`}
                        >
                            <item.icon size={20} />
                            <span className="text-h5">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold overflow-hidden flex-shrink-0">
                            {(user?.fullname || "U")[0].toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-gray-800 truncate">{user?.fullname || "Pengguna"}</p>
                        </div>
                        <button
                            onClick={() => setIsLogoutModalOpen(true)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            title="Keluar"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>
            </aside>

            {isLogoutModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
                    <Card variant="white" className="w-full max-w-sm p-6 space-y-6 shadow-xl" padding="p-6">
                        <div className="space-y-2 text-center">
                            <h3 className="text-h3 font-bold text-gray-900">Konfirmasi Keluar</h3>
                            <p className="text-gray-500 text-h5">Apakah Anda yakin ingin keluar dari aplikasi?</p>
                        </div>

                        <div className="flex gap-3">
                            <Button
                                variant="gray"
                                size="full"
                                onClick={() => setIsLogoutModalOpen(false)}
                                className="font-semibold py-2.5"
                            >
                                Batal
                            </Button>
                            <Button
                                variant="primary"
                                size="full"
                                onClick={handleLogout}
                                className="font-semibold py-2.5 shadow-lg shadow-primary/20"
                            >
                                Keluar
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
        </>
    );
};

export default Sidebar;

import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useState, useEffect } from "react";

export const AuthGuard = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const [isRehydrated, setIsRehydrated] = useState(false);

  useEffect(() => {
    setIsRehydrated(true);
  }, []);

  if (!isRehydrated) return null

  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};

export const GuestGuard = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  return !isLogin ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import Button from "../components/atoms/Button";
import { MapPinOff } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const isLogin = useAuthStore((state) => state.isLogin);

  const handleBack = () => {
    if (isLogin) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen w-full bg-primary flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
          <MapPinOff size={48} className="text-white" />
        </div>

        <h1 className="font-outfit font-bold text-6xl text-white mb-2">404</h1>

        <h2 className="font-outfit font-semibold text-2xl text-white mb-4">
          Ups! Jalan Buntu
        </h2>

        <p className="font-inter text-white/90 text-lg mb-8 leading-relaxed">
          Teman, sepertinya kamu salah jalan. Halaman yang kamu cari tidak ditemukan di sini.
        </p>

        <Button
          variant="white"
          onClick={handleBack}
          className="w-full py-3 font-semibold text-primary hover:bg-gray-100 transition-colors"
        >
          Kembali ke {isLogin ? "Dashboard" : "Beranda"}
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
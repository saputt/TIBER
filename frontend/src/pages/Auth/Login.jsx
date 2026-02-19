import React, { useState } from "react";
import InputLabel from "../../components/molecules/InputLabel";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";
import { useLogin } from "../../hooks/useAuth";
import { useAuthStore } from "../../store/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";

import { loginMessages } from "../../utils/messages";

import { isValidEmail } from "../../utils/validation";

// ... existing imports

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Get random message once on mount
  const [randomMessage] = useState(() => {
    const randomIndex = Math.floor(Math.random() * loginMessages.length);
    return loginMessages[randomIndex];
  });

  const { mutate: login, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isPending) return;
    setErrorMessage(""); // Clear previous errors

    if (!isValidEmail(email)) {
      setErrorMessage("Format email tidak valid (contoh: nama@email.com)");
      return;
    }

    login(
      {
        email,
        password,
      },
      {
        onError: (error) => {
          const msg =
            error?.message ||
            "Terjadi kesalahan. Silakan coba lagi.";
          setErrorMessage(msg);
        },
        onSuccess: () => {
          navigate("/dashboard");
        },
      },
    );
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="min-h-svh font-inter lg:grid lg:grid-cols-2">
      {/* Left Side - Desktop Only */}
      <aside className="hidden lg:flex flex-col justify-center items-center bg-teal-600 text-white p-20 relative overflow-hidden">
        <div className="z-10 text-center max-w-lg flex flex-col items-center gap-8">
          <img
            src="/login-visual.png"
            alt="Ilustrasi Kesehatan"
            className="w-full max-w-md object-contain mb-8 drop-shadow-2xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
            }}
          />
          <blockquote className="text-h3 font-semibold italic leading-relaxed transition-all duration-500 animate-in fade-in">
            "{randomMessage}"
          </blockquote>
        </div>

        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500/30 rounded-full blur-2xl"></div>
      </aside>

      {/* Right Side - Login Form */}
      <div className="px-8 py-24 bg-gray-50 h-svh w-full flex flex-col items-center justify-center overflow-y-auto">
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="flex justify-center">
            <img src="/secLogo.png" className="w-14 rounded-lg" alt="Logo TIBER" />
          </div>
          <div className="mt-9 flex flex-col items-center text-center">
            <span className="font-inter font-bold text-h2">
              Selamat Datang Kembali
            </span>
            <span className="font-inter text-h5">
              Lanjutkan perjalanan pengobatan Anda
            </span>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-2 mt-8 w-full">
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm text-center">
                  {errorMessage}
                </div>
              )}
              <InputLabel
                variantInput="input"
                variantLabel="normal"
                label="Email"
                variant="gray"
                type="email"
                placeholder="nama@email.com"
                size="full"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex flex-col">
                <InputLabel
                  variantInput="input"
                  variantLabel="normal"
                  label="Kata Sandi"
                  variant="gray"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min 8 Karakter"
                  size="full"
                  onChange={(e) => setPassword(e.target.value)}
                  endIcon={showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  onEndIconClick={() => setShowPassword(!showPassword)}
                />
                <div className="text-end mt-4">
                  {/* <Link
                    to="*"
                    className="font-inter text-h5 underline text-black/70 w-fit"
                  >
                    Lupa sandi
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="text-center w-full mt-6">
              <Button
                variant="primary"
                size="full"
                boxShadowActive="true"
                className="text-h5"
                type="submit"
                disabled={!isFormValid || isPending}
              >
                {isPending ? "Sedang masuk..." : "Login"}
              </Button>
            </div>
          </form>
          <div className="text-center mt-4 space-y-2">
            <div className="text-primary font-inter text-h5 text-center">
              Belum punya akun? <Link to="/onboarding">Daftar Sekarang</Link>
            </div>
            <div className="text-black/50 font-inter text-h5 text-center">
              <Link to="/">Kembali</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import Navbar from "../../components/organism/Navbar";
import OnboardingLayout from "../../components/templates/OnboardingLayout";
import Card from "../../components/atoms/Card";
import { LockKeyhole, SquareCheck } from "lucide-react";
import InfoSaveCard from "./components/InfoSaveCard";
import RegistForm from "./components/RegistForm";
import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <OnboardingLayout>
      <div className="flex flex-col gap-3 items-center px-3 lg:px-0">
        <div className="flex flex-col items-center">
          <img src="secLogo.png" className="w-15" alt="Logo TIBER" />
          <div className="text-center flex flex-col py-6">
            <h2 className="font-bold text-h2">Hampir Selesai!</h2>
            <p className="text-h5 text-wrap w-60">
              Buat akun untuk menyimpan progres pengobatan Anda dengan aman
            </p>
          </div>
        </div>

        {/* form register */}
        <RegistForm />

        <p className="text-center text-h6 text-wrap w-65">
          Dengan membuat akun, anda menyetujui Syarat & Ketentuan dan Kebijakan
          Privasi kami.
        </p>
      </div>
    </OnboardingLayout>
  );
};

export default RegisterPage;

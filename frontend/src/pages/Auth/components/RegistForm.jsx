import React, { useState } from "react";
import InputLabel from "../../../components/molecules/InputLabel";
import { useOnboardingStore } from "../../../store/useOnboardingStore";
import InfoSaveCard from "./InfoSaveCard";
import Button from "../../../components/atoms/Button";
import { useRegister } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import { isValidEmail } from "../../../utils/validation";

const RegistForm = () => {
  const setFormData = useOnboardingStore((state) => state.setFormData);
  const formData = useOnboardingStore((state) => state.formData);
  const navigate = useNavigate();
  const { mutate: register, isPending, isError, error } = useRegister();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (isPending) return;

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);

    if (!isValidEmail(email)) {
      setValidationError("Format email tidak valid (contoh: nama@email.com)");
      return;
    }
    setValidationError("");

    const finalData = {
      user: {
        fullname: fullname,
        email: email,
        password: password,
      },
      personalization: {
        ...formData.personalization,
        duration_month: parseInt(formData.personalization.duration_month),
        control_freq_value: parseInt(
          formData.personalization.control_freq_value,
        ),
      },
    };

    register(finalData);
  };

  const isFormValid = fullname.trim() !== "" && email.trim() !== "" && password.trim() !== "" && confirmPassword.trim() !== "";

  return (
    <div>
      <InfoSaveCard variant="green" />

      {passwordError ? (
        <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium text-center">
            Password tidak sesuai
          </div>
        </div>
      ) : isError ? (
        <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium text-center">
            {error?.data?.message || "Terjadi kesalahan saat mendaftar"}
          </div>
        </div>
      ) : validationError ? (
        <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium text-center">
            {validationError}
          </div>
        </div>
      ) : null}

      <form onSubmit={handleRegister}>
        <div className="w-full flex flex-col gap-4 my-3">
          <InputLabel
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap"
            variantInput="input"
            variantLabel="normal"
            variant="gray"
            onChange={(e) => setFullName(e.target.value)}
          />
          <InputLabel
            label="Email"
            placeholder="nama@email.com"
            variantInput="input"
            variantLabel="normal"
            variant="gray"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputLabel
            label="Kata Sandi"
            placeholder="Min 8 Karakter"
            variantInput="input"
            variantLabel="normal"
            variant="gray"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            endIcon={showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            onEndIconClick={() => setShowPassword(!showPassword)}
          />
          <InputLabel
            label="Konfirmasi Kata Sandi"
            placeholder="Masukkan ulang kata sandi"
            variantInput="input"
            variantLabel="normal"
            variant="gray"
            type={showConfirmPassword ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            endIcon={
              showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />
            }
            onEndIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </div>
        <InfoSaveCard variant="blue" />

        <Button
          variant="primary"
          size="full"
          className="mt-5 shadow-button"
          type="submit"
          disabled={!isFormValid}
        >
          {isPending ? "Sedang mendaftar..." : "Daftar"}
        </Button>
      </form>
    </div>
  );
};

export default RegistForm;

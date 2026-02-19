import React, { useState } from "react";
import { Eye, EyeOff, LockKeyhole, X, CheckCircle } from "lucide-react";
import { useProfileStore } from "../../../store/useProfileStore";
import Button from "../../../components/atoms/Button";
import InputLabel from "../../../components/molecules/InputLabel";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/atoms/Card";
import { useProfile } from "../../../hooks/useProfile";

const ChangePasswordSetting = () => {
  const navigate = useNavigate();
  const setChangePassword = useProfileStore((state) => state.setChangePassword);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const { mutate, isPending } = useProfile();

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError("Kata sandi dan konfirmasi tidak sesuai");
      return;
    }
    setPasswordError("");

    mutate(
      {
        old_password: oldPassword,
        new_password: newPassword,
      },
      {
        onSuccess: () => {
          setIsSuccess(true);
        },
        onError: (error) => {
          const message = error?.message;
          if (message === "The old password you entered is incorrect.") {
            setPasswordError("Kata sandi lama yang Anda masukkan salah");
          } else {
            setPasswordError(message || "Terjadi kesalahan saat mengubah password");
          }
        },
      },
    );
  };

  const isFormValid = oldPassword !== "" && newPassword !== "" && confirmPassword !== "";

  return (
    <div className="h-screen w-full bg-white/10 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5 z-50">
      <Card
        className="flex flex-col gap-3 py-4 w-full lg:w-[40%]"
        boxShadowActive={true}
        variant="white"
      >
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center gap-6 py-8 animate-in fade-in zoom-in duration-300">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-bold text-h3 text-gray-900">
                Password Berhasil Diubah
              </h3>
              <p className="text-gray-500 text-h5">
                Silakan masuk kembali dengan password baru Anda
              </p>
            </div>
            <Button
              variant="primary"
              className="w-full py-3 mt-4"
              onClick={() => {
                setChangePassword();
                navigate("/dashboard");
              }}
            >
              Ke Dashboard
            </Button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center py-3 border-b border-b-black/50">
              <div className="flex justify-center items-center gap-2">
                <LockKeyhole size="20" className="text-primary" />
                <span className="font-inter font-medium text-h5 lg:text-h4">
                  Sesuaikan Kata Sandi
                </span>
              </div>
              <Button onClick={() => setChangePassword()}>
                <X />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-3 py-2">
              {passwordError && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium text-center animate-in fade-in slide-in-from-top-2">
                  {passwordError}
                </div>
              )}

              <div className="flex flex-col">
                <InputLabel
                  label="Masukkan Kata Sandi Anda sekarang"
                  placeholder="Sandi sekarang..."
                  variant="white"
                  type={showCurrentPassword ? "text" : "password"}
                  endIcon={
                    showCurrentPassword ? (
                      <Eye size={20} />
                    ) : (
                      <EyeOff size={20} />
                    )
                  }
                  onEndIconClick={() =>
                    setShowCurrentPassword(!showCurrentPassword)
                  }
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <InputLabel
                label="Masukkan Kata Sandi baru"
                placeholder="Sandi baru..."
                variant="white"
                type={showNewPassword ? "text" : "password"}
                endIcon={
                  showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />
                }
                onEndIconClick={() => setShowNewPassword(!showNewPassword)}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <InputLabel
                label="Konfirmasi Kata Sandi baru"
                placeholder="Konfirmasi kata sandi..."
                variant="white"
                type={showConfirmPassword ? "text" : "password"}
                endIcon={
                  showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />
                }
                onEndIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="gray"
                onClick={() => {
                  setChangePassword();
                }}
                className="py-2 w-full font-inter text-h4"
              >
                Batal
              </Button>
              <Button
                variant="primary"
                className="py-2 w-full font-inter text-h4"
                onClick={handleSubmit}
                disabled={!isFormValid || isPending}
              >
                {isPending ? "Menyimpan..." : "Simpan"}
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChangePasswordSetting;

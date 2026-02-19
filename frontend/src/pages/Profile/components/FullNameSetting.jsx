import React, { useState } from "react";
import { Pencil, UserRoundPen, X } from "lucide-react";
import { useProfileStore } from "../../../store/useProfileStore";
import Button from "../../../components/atoms/Button";
import InputLabel from "../../../components/molecules/InputLabel";
import Card from "../../../components/atoms/Card";
import { useProfile } from "../../../hooks/useProfile";
import { useAuthStore } from "../../../store/useAuthStore";

const FullNameSetting = () => {
  const setFullName = useProfileStore((state) => state.setFullName);
  const { mutate, isIdle } = useProfile()

  const [full_name, set_full_name] = useState("")

  const setUser = useAuthStore((state) => state.setUser)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({
      full_name: full_name
    })
    mutate({
      full_name: full_name
    })
    setTimeout(() => {
      setFullName();
    }, 500);
  }

  const isFormValid = full_name.trim() !== "";

  return (
    <div className="h-screen w-full bg-white/10 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5 z-50">
      <Card
        className="flex flex-col gap-3 py-4 w-full lg:w-[40%]"
        boxShadowActive={true}
        variant="white"
      >
        <div className="flex justify-between items-center border-b border-b-black/50 pb-3">
          <div className="flex justify-center items-center gap-2">
            <UserRoundPen size="20" className="text-primary" />
            <span className="font-inter font-medium text-h5 lg:text-h4">
              Nama Lengkap
            </span>
          </div>
          <X onClick={() => setFullName()} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="py-2">
            <InputLabel
              label="Nama Lengkap"
              placeholder="Nama Lengkap..."
              variant="white"
              onChange={(e) => set_full_name(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="gray"
              onClick={() => {
                setFullName();
              }}
              className="py-2 font-inter text-h4 w-full"
            >
              Batal
            </Button>
            <Button variant="primary" className="py-2 font-inter text-h4 w-full" type="submit" disabled={!isFormValid}>
              {isIdle ? "Simpan" : "Menyimpan..."}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FullNameSetting;

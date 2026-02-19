import { Pencil, UserRoundPen, X } from "lucide-react";
import React, { useEffect } from "react";
import Button from "../../../components/atoms/Button";
import InputLabel from "../../../components/molecules/InputLabel";
import { useProfileStore } from "../../../store/useProfileStore";
import { useAuthStore } from "../../../store/useAuthStore";

const ProfileInfoSetting = () => {
  const setFullName = useProfileStore((state) => state.setFullName);
  const isFullNameOpen = useProfileStore((state) => state.isFullNameOpen);

  const name = useAuthStore(state => state.user.fullname)

  useEffect(() => {
    if (isFullNameOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFullNameOpen]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 aspect-square rounded-full bg-primary flex items-center justify-center text-h1 font-semibold text-white">
        {name[0].toUpperCase()}
      </div>

      <div className="flex items-center gap-1 justify-center">
        <p className="text-h5 font-medium">{name}</p>
        <Pencil size={10} onClick={() => setFullName()} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ProfileInfoSetting;

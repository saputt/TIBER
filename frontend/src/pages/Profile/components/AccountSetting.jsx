import React, { useEffect } from "react";
import Card from "../../../components/atoms/Card";
import Notch from "../../../components/atoms/Notch";
import { ChevronRight, Lock, Mail, Trash, User } from "lucide-react";
import { useProfileStore } from "../../../store/useProfileStore";

const AccountSetting = ({ email }) => {
  const setChangePassword = useProfileStore((state) => state.setChangePassword);
  const isChangePasswordOpen = useProfileStore(
    (state) => state.isChangePasswordOpen,
  );

  useEffect(() => {
    if (isChangePasswordOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isChangePasswordOpen]);

  return (
    <Card
      size="full"
      boxShadowActive={true}
      variant="white"
      className="relative overflow-hidden pt-8 flex flex-col gap-2"
    >
      <Notch className="flex px-2 py-1 items-center gap-1" variant="left">
        <User size={10} className="text-white" />
        <p className="text-h6">Akun</p>
      </Notch>

      <div className="flex items-center ">
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex items-center gap-1">
            <Mail size={10} />
            <p className="text-h5 font-semibold">Email</p>
          </div>
          <p className="text-h5">{email}</p>
        </div>
      </div>
      <hr className="text-gray-400" />

      <div className="flex items-center ">
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex items-center gap-1">
            <Lock size={10} />
            <p className="text-h5 font-semibold">Kata Sandi</p>
          </div>
          <p className="text-h5">••••••••</p>
        </div>
        <p
          className="text-primary text-h5 font-semibold cursor-pointer"
          onClick={() => {
            setChangePassword();
          }}
        >
          Ubah
        </p>
      </div>
      {/* <hr className="text-gray-400" />
      <div className="flex items-center ">
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex items-center gap-1">
            <Trash size={10} />
            <p className="text-h5 font-semibold">Hapus Akun</p>
          </div>
          <p className="text-h5">Menghapus akun secara permanen</p>
        </div>
        <ChevronRight size={20} className="text-primary" />
      </div> */}
    </Card>
  );
};

export default AccountSetting;

import React from "react";
import Card from "../../../components/atoms/Card";
import { Bell, Calendar } from "lucide-react";
import { useProfileStore } from "../../../store/useProfileStore";
import { useUpdatePersonalization } from "../../../hooks/useProfile";

const SettingReminderCard = ({ reminderTimeDay, reminderTime, checkup }) => {
  const setDaily = useProfileStore((state) => state.setDaily);
  const setControl = useProfileStore((state) => state.setControl);
  const personalization = useProfileStore((state) => state.personalization);
  return (
    <Card
      size="full"
      className="flex flex-col gap-4 lg:py-5"
      boxShadowActive={true}
      variant="white"
    >
      <h3 className="font-medium text-h3">Pengaturan Pengingat</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 aspect-square rounded-full bg-primary/20 flex justify-center items-center">
            <Bell size={17} className="text-primary" />
          </div>
          <div className="flex flex-col flex-1">
            <h5 className="text-h5 font-medium">Pengingat Harian</h5>
            <p className="font-light text-h6">
              {`${personalization.time_category || reminderTimeDay} pukul ${personalization.reminder_time || reminderTime}`}
            </p>
          </div>
          <p
            className="text-primary text-h6 font-semibold"
            onClick={() => setDaily()}
          >
            Ubah
          </p>
        </div>
        <hr className="text-gray-400" />
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 aspect-square rounded-full bg-sec-light-purple/20 flex justify-center items-center">
            <Calendar size={17} className="text-dark-purple" />
          </div>
          <div className="flex flex-col flex-1">
            <h5 className="text-h5 font-medium">Pengingat Kontrol Dokter</h5>
            <p className="font-light text-h6">{checkup}</p>
          </div>
          <p
            className="text-primary text-h6 font-semibold"
            onClick={() => setControl()}
          >
            Ubah
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SettingReminderCard;

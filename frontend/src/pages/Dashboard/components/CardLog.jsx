import React, { useState, useEffect } from "react";
import Card from "../../../components/atoms/Card";
import { PartyPopper, Clock, Sun, Moon, Sunset, Medal } from "lucide-react";
import Button from "../../../components/atoms/Button";
import { useMedicationLog } from "../../../hooks/useDashboard";
import { useAuthStore } from "../../../store/useAuthStore";
import { confirmationMessages, motivationalQuotes, completionMessages } from "../../../utils/messages";

const CardLog = ({ isTaken, reminderTime, timeCategory, isCompleted }) => {
  const { mutate } = useMedicationLog();
  const user = useAuthStore((state) => state.user);

  const [currentTime, setCurrentTime] = useState(new Date());

  const [completionQuote] = useState(() => completionMessages[Math.floor(Math.random() * completionMessages.length)]);

  const [motivationQuote] = useState(() => motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);

  const [successQuote] = useState(() => confirmationMessages[Math.floor(Math.random() * confirmationMessages.length)]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleLog = () => {
    const now = new Date();
    const formattedDate = now.toISOString().split('T')[0];
    const formattedTime = now.toTimeString().split(' ')[0];

    const data = {
      user_id: user.id,
      log_date: formattedDate,
      logged_time: formattedTime,
    };

    mutate(data);
  };

  const getStatus = () => {
    if (!reminderTime) return { label: "Memuat...", color: "bg-gray-100 text-gray-500", icon: <Clock size={14} /> };

    const now = new Date();
    const [hours, minutes] = reminderTime.split(':').map(Number);
    const scheduleDate = new Date();
    scheduleDate.setHours(hours, minutes, 0, 0);

    const diffMinutes = (now - scheduleDate) / (1000 * 60);

    if (diffMinutes < 0) {
      return { label: "Akan Datang", color: "bg-blue-50 text-blue-600", icon: <Clock size={14} /> };
    } else if (diffMinutes >= 0 && diffMinutes <= 120) {
      return { label: "Waktunya Minum", color: "bg-teal-50 text-teal-600 animate-pulse border-teal-200", icon: <Clock size={14} /> };
    } else {
      return { label: "Terlewat", color: "bg-red-50 text-red-600", icon: <Clock size={14} /> };
    }
  };

  const status = getStatus();

  const getHeaderInfo = () => {
    let icon = <Sun size={18} className="text-orange-500" />;
    let text = "Jadwal Pagi";

    if (timeCategory === 'siang') {
      icon = <Sun size={18} className="text-yellow-500" />;
      text = "Jadwal Siang";
    } else if (timeCategory === 'sore') {
      icon = <Sunset size={18} className="text-orange-400" />;
      text = "Jadwal Sore";
    } else if (timeCategory === 'malam') {
      icon = <Moon size={18} className="text-indigo-500" />;
      text = "Jadwal Malam";
    }

    return { icon, text };
  };

  const { icon: headerIcon, text: headerText } = getHeaderInfo();
  const displayTime = reminderTime ? reminderTime.slice(0, 5) : "--:--";

  return (
    <Card
      boxShadowActive={true}
      size="full"
      className={`relative flex flex-col gap-4 py-5 px-6 transition-all duration-300 h-full ${isCompleted ? 'bg-primary/5 border-primary/20' : isTaken ? 'bg-secondary border-primary/20' : 'bg-white'}`}
    >
      {isCompleted ? (
        <div className="flex flex-col items-center justify-center text-center gap-4 py-2 h-full">
          <div className="bg-primary/10 p-5 rounded-full">
            <Medal size={44} className="text-primary" />
          </div>

          <div className="space-y-2">
            <h3 className="text-h3 font-bold text-gray-900">Pengobatan Selesai!</h3>
            <p className="text-h5 text-gray-500 max-w-[85%] mx-auto leading-relaxed italic">
              "{completionQuote}"
            </p>
          </div>
        </div>
      ) : isTaken ? (
        <div className="flex flex-col items-center justify-center text-center gap-4 py-2 h-full animate-in fade-in zoom-in duration-500">
          <div className="bg-primary/10 p-5 rounded-full">
            <PartyPopper size={44} className="text-primary" />
          </div>

          <div className="space-y-2">
            <h3 className="text-h3 font-bold text-gray-900">Hebat, Kamu Luar Biasa!</h3>
            <p className="text-h5 text-gray-500 max-w-[85%] mx-auto leading-relaxed italic">
              "{successQuote}"
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
              {headerIcon}
              <span>{headerText}</span>
            </div>

            {/* Status Top Right */}
            <div className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 border ${status.color}`}>
              {status.icon}
              <span className="text-h5 font-semibold whitespace-nowrap">{status.label}</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-2">
            <h2 className="text-[3.5rem] font-bold text-gray-900 leading-none">
              {displayTime}
            </h2>
            <p className="text-gray-500 text-sm mt-2 italic text-center max-w-[80%]">
              "{motivationQuote}"
            </p>
          </div>

          <div className="mt-2">
            <Button
              variant="primary"
              size="full"
              className="font-bold text-h6 py-3 shadow-lg transition-all"
              onClick={handleLog}
            >
              Konfirmasi Minum Obat
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};

export default CardLog;

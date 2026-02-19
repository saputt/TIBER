import React from "react";
import { Calendar } from "lucide-react";
import Card from "../../../components/atoms/Card";
import Button from "../../../components/atoms/Button";

const CheckupModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
            <Card
                variant="white"
                className="w-full max-w-sm p-6 space-y-6 shadow-xl relative overflow-hidden"
                padding="p-6"
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-violet-500"></div>

                <div className="flex flex-col items-center text-center space-y-4 pt-2">
                    <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center animate-in zoom-in duration-300">
                        <Calendar size={32} className="text-violet-600" />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-h3 font-bold text-gray-900 leading-tight">
                            Waktunya Kontrol Hari Ini!
                        </h3>
                        <p className="text-gray-500 text-h5 leading-relaxed">
                            Jangan lupa konsultasi dengan dokter agar perjalanan pengobatanmu tetap on-track. Kesehatanmu prioritas utama!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                    <Button
                        variant="primary"
                        size="full"
                        onClick={onConfirm}
                        className="font-semibold py-3 shadow-lg shadow-primary/20 bg-violet-600 hover:bg-violet-700 active:scale-[0.98] transition-all"
                    >
                        Saya Sudah Kontrol
                    </Button>
                    <Button
                        variant="ghost"
                        size="full"
                        onClick={onClose}
                        className="font-medium text-gray-400 hover:text-gray-600 hover:bg-gray-50 py-2.5 transition-colors"
                    >
                        Nanti Saja
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default CheckupModal;

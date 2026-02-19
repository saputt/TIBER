import React from "react";
import Card from "../atoms/Card";
import Button from "../atoms/Button";
import { LogOut } from "lucide-react";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
            <Card
                variant="white"
                className="w-full max-w-sm py-8 shadow-xl flex flex-col items-center gap-5 text-center"
            >
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <LogOut size={32} className="text-red-500" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <h3 className="text-h4 font-bold text-gray-900">Konfirmasi Keluar</h3>
                    <p className="text-gray-500 text-h6">
                        Apakah Anda yakin ingin keluar dari aplikasi?
                    </p>
                </div>

                <div className="flex gap-3 mt-1">
                    <Button
                        variant="gray"
                        onClick={onClose}
                        className="px-8 py-2.5 rounded-full font-semibold text-h6"
                    >
                        Batal
                    </Button>
                    <Button
                        variant="primary"
                        onClick={onConfirm}
                        className="px-8 py-2.5 rounded-full font-semibold text-h6 shadow-lg shadow-primary/20"
                    >
                        Keluar
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default LogoutModal;


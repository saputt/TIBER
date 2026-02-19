import React from "react";
import Card from "../atoms/Card";
import Button from "../atoms/Button";
import { CircleCheck } from "lucide-react";

const SuccessModal = ({ isOpen, title, description, buttonText, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <Card className="bg-white w-full max-w-sm rounded-[20px] py-8 shadow-xl relative animate-in zoom-in-95 duration-300 flex flex-col items-center gap-5 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CircleCheck size={36} className="text-green-500" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <h3 className="text-h4 font-bold text-gray-900">{title}</h3>
                    {description && <p className="text-gray-500 text-h6">{description}</p>}
                </div>

                <Button
                    variant="primary"
                    className="px-10 py-2.5 rounded-full font-semibold text-h6 mt-1"
                    onClick={onConfirm}
                >
                    {buttonText}
                </Button>
            </Card>
        </div>
    );
};

export default SuccessModal;


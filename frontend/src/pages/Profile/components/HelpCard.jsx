import React from "react";
import Card from "../../../components/atoms/Card";
import { ChevronRight, CircleQuestionMark, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HelpCard = () => {
  const navigate = useNavigate();

  return (
    <Card
      size="full"
      className="flex flex-col gap-4 lg:py-5"
      boxShadowActive={true}
      variant="white"
    >
      <h3 className="font-medium text-h3">Bantuan & Informasi</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3" onClick={() => {navigate("/about")}}>
          <div className="w-9 h-9 aspect-square rounded-full bg-sec-light-blue/20 flex justify-center items-center">
            <CircleQuestionMark size={17} className="text-sec-light-blue" />
          </div>
          <div className="flex flex-col flex-1">
            <h5 className="text-h5 font-medium">Tentang TIBER</h5>
            <p className="font-light text-h6">Misi dan cara kerja</p>
          </div>
          <ChevronRight size={20} className="text-primary" />
        </div>
        <hr className="text-gray-400" />
        <div className="flex items-center gap-3" onClick={() => {navigate("/information-user")}}>
          <div className="w-9 h-9 aspect-square rounded-full bg-sec-light-purple/20 flex justify-center items-center">
            <Shield size={15} className="text-dark-purple" />
          </div>
          <div className="flex flex-col flex-1">
            <h5 className="text-h5 font-medium">Privasi Data</h5>
            <p className="font-light text-h6">
              Bagaimana kami melindungi datamu
            </p>
          </div>
          <ChevronRight size={20} className="text-primary" />
        </div>
      </div>
    </Card>
  );
};

export default HelpCard;

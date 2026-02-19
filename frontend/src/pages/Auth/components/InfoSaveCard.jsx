import React from "react";
import Card from "../../../components/atoms/Card";
import { LockKeyhole, SquareCheck } from "lucide-react";

const InfoSaveCard = ({ variant }) => {
  // <Card variant="primaryNoBorder" size="full" className="flex gap-2">
  //       <SquareCheck className="text-primary w-6" />
  //       <div className="flex-1 flex flex-col gap-1 leading-4">
  //         <h5 className="font-semibold text-h5">
  //           Data personalisasi Anda sudah tersimpan.
  //         </h5>
  //         <p className="text-h6">
  //           Sekarang buat akun untuk melanjutkan pelacakan harian dan melihat
  //           progres Anda.
  //         </p>
  //       </div>
  //     </Card>
  return (
    <Card
      size="full"
      className={`${variant === "blue" && "bg-light-blue/70 border-1 border-sec-dark-blue/70"} flex gap-2 `}
      variant={variant === "green" && "primaryNoBorder"}
    >
      {variant === "blue" ? (
        <LockKeyhole className="w-6 text-sec-dark-blue" />
      ) : (
        <SquareCheck className="text-primary w-6" />
      )}

      <div className="flex flex-col flex-1 leading-4 gap-1">
        <h5 className="text-h5 font-semibold">
          Data personalisasi Anda sudah tersimpan.
        </h5>
        <p className="text-h6">
          Sekarang buat akun untuk melanjutkan pelacakan harian dan melihat
          progres Anda.
        </p>
      </div>
    </Card>
  );
};

export default InfoSaveCard;

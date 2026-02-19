import React from "react";
import Card from "../../../components/atoms/Card";
import { TriangleAlert } from "lucide-react";

const CardImportant = () => {
  return (
    <Card
      boxShadowActive={true}
      className="py-4 flex flex-col gap-3"
      variant="yellow"
      size="full"
    >
      <div className="flex items-center gap-2">
        <TriangleAlert size={24} className="text-warning" />
        <h5 className="text-h5 font-semibold">Penting Diingat</h5>
      </div>
      <div className="font-light text-h5 px-3">
        <li>Jangan hentikan obat meski gejala sudah hilang</li>
        <li>Selalu habiskan obat sesuai resep dokter</li>
        <li>Segera hubungi dokter jika ada efek samping berat</li>
      </div>
    </Card>
  );
};

export default CardImportant;

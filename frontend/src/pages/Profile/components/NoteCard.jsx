import React from "react";
import Card from "../../../components/atoms/Card";

const NoteCard = () => {
  return (
    <Card variant="yellow" size="full" className="text-h6 py-4">
      <span className="font-semibold">Catatan:</span> TIBER adalah sistem
      pendukung untuk membantu mencatat rutinitas. Bukan pengganti konsultasi
      medis atau diagnosis dokter.
    </Card>
  );
};

export default NoteCard;

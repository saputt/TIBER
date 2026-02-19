import React from "react";
import Card from "../../../components/atoms/Card";
import Badge from "../../../components/atoms/Badge";
import Button from "../../../components/atoms/Button";
import { Calendar, Pencil } from "lucide-react";

const NoteCard = ({ date, status, statusColor, note, onClick, className }) => {
  let badgeVariant = "gray";
  let cardVariant = "gray";

  if (
    statusColor === "green" ||
    statusColor === "Hijau" ||
    statusColor === "hijau" ||
    status === "Positif" ||
    status === "Membaik"
  ) {
    badgeVariant = "primary";
    cardVariant = "primary";
  } else if (
    statusColor === "blue" ||
    statusColor === "Biru" ||
    statusColor === "biru" ||
    status === "Netral" ||
    status === "Stabil"
  ) {
    badgeVariant = "darkBlue";
    cardVariant = "Blue";
  } else if (
    statusColor === "yellow" ||
    statusColor === "Kuning" ||
    statusColor === "kuning" ||
    status === "Waspada" ||
    status === "Dipantau"
  ) {
    badgeVariant = "yellow";
    cardVariant = "yellow";
  }

  return (
    <Card
      variant="gray"
      size="full"
      className={`rounded-lg flex flex-col gap-4 min-h-fit py-1 relative z-10 break-inside-avoid ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Calendar size="16" className="text-gray-500" />
          <span className="font-inter font-medium text-h6 leading-none text-gray-500">
            {date}
          </span>
        </div>
        {status && (
          <Badge
            variant={badgeVariant}
            className="font-inter font-medium text-h7 w-17"
          >
            {status}
          </Badge>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="primary"
          className="p-1.5 shrink-0"
          onClick={onClick}
          aria-label="Edit Note"
        >
          <Pencil size="16" />
        </Button>
        <Card
          variant={cardVariant}
          size="full"
          className="rounded-lg min-h-20 flex items-center mb-2 px-3 py-2"
        >
          <span className="font-inter text-h6 whitespace-pre-wrap text-left w-full break-words break-all">
            {note || "Belum ada catatan"}
          </span>
        </Card>
      </div>
    </Card>
  );
};

export default NoteCard;

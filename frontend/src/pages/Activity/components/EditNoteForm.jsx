import React, { useState, useEffect } from "react";
import Button from "../../../components/atoms/Button";
import InputLabel from "../../../components/molecules/InputLabel";
import { Calendar, X } from "lucide-react";
import { useActivityStore } from "../../../store/useActivityStore";
import NoteCard from "./NoteCard";
import { useEditDailyNotes } from "../../../hooks/useActivity";
import Card from "../../../components/atoms/Card";

const EditNoteForm = ({ initialData }) => {
  const setCatatan = useActivityStore((state) => state.setCatatan);
  const [noteText, setNoteText] = useState(initialData?.notes || "");
  const [selectedStatus, setSelectedStatus] = useState(
    initialData?.status || "",
  );
  const [selectedColor, setSelectedColor] = useState(
    initialData?.color_status || "gray",
  );

  const today = initialData?.created_at
    ? new Date(initialData.created_at).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    : new Date().toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const { mutate: editDailyNotes, isPending, isSuccess } = useEditDailyNotes();

  const handleEditNote = (e) => {
    e.preventDefault();

    editDailyNotes({
      id: initialData?.id,
      status: selectedStatus,
      color_status: selectedColor,
      notes: noteText,
    });

    setTimeout(() => {
      setCatatan();
    }, 500);
  };

  const isFormValid = selectedStatus.trim() !== "" && selectedColor.trim() !== "" && noteText.trim() !== "";

  return (
    <div className="h-screen w-full bg-black/20 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-4 lg:p-6 z-50">
      <Card
        className="flex flex-col gap-2 py-4 w-full lg:w-[40%] max-h-[90vh] overflow-y-auto z-900"
        boxShadowActive={true}
        variant="white"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="relative flex items-end justify-center mb-1 lg:mb-2">
          <div className="flex items-center justify-center gap-1.5 bg-primary w-37.5 h-7 rounded-b-md shadow-md">
            <Calendar size="16" className="text-white"></Calendar>
            <span className="font-inter font-medium text-h5 leading-none text-white">
              {today}
            </span>
          </div>
          <Button
            className="absolute right-0 top-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setCatatan()}
          >
            <X size={20} className="text-gray-500" />
          </Button>
        </div>

        <div className="space-y-1 lg:space-y-2">
          <div className="flex flex-col gap-2">
            <span className="text-h6 font-inter text-gray-400 font-medium uppercase tracking-wider text-center">
              Live Preview
            </span>
            <div className="pointer-events-none select-none transform scale-95 origin-top transition-all duration-300">
              <NoteCard
                date={today}
                status={selectedStatus}
                statusColor={selectedColor}
                note={noteText}
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          <form onSubmit={handleEditNote}>
            <div className="flex flex-col gap-3 my-1 mb-3">
              <div className="grid grid-cols-1 gap-2">
                <InputLabel
                  label="Nama Status"
                  variant="white"
                  placeholder="Cth: Membaik, Pusing..."
                  className="text-h4"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-1">
                <span className="text-h5 font-inter font-semibold">
                  Warna Label
                </span>
                <div className="flex gap-2">
                  <label className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-green-50 transition-colors border border-transparent hover:border-green-100 has-[:checked]:bg-green-50 has-[:checked]:border-green-200">
                    <input
                      type="radio"
                      name="warna_status"
                      className="accent-primary w-4 h-4"
                      checked={selectedColor === "hijau"}
                      onChange={() => setSelectedColor("hijau")}
                    />
                    <span className="font-inter text-h5 text-gray-700">
                      Hijau
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 has-[:checked]:bg-blue-50 has-[:checked]:border-blue-200">
                    <input
                      type="radio"
                      name="warna_status"
                      className="accent-blue-500 w-4 h-4"
                      checked={selectedColor === "biru"}
                      onChange={() => setSelectedColor("biru")}
                    />
                    <span className="font-inter text-h5 text-gray-700">
                      Biru
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-yellow-50 transition-colors border border-transparent hover:border-yellow-100 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-200">
                    <input
                      type="radio"
                      name="warna_status"
                      className="accent-yellow-500 w-4 h-4"
                      checked={selectedColor === "kuning"}
                      onChange={() => setSelectedColor("kuning")}
                    />
                    <span className="font-inter text-h5 text-gray-700">
                      Kuning
                    </span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1">
                <span className="text-h5 font-inter font-semibold">
                  Catatan
                </span>
                <textarea
                  className="w-full p-3 bg-gray-50 text-black border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-inter text-h5 leading-relaxed placeholder:text-gray-400"
                  rows={3}
                  placeholder="Tulis perkembangan kesehatanmu di sini..."
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                ></textarea>
              </div>
            </div>

            <Button
              variant="primary"
              type="submit"
              size="full"
              className="py-2.5 text-h5 font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all"
              disabled={!isFormValid}
            >
              {isPending ? "Menyimpan Perubahan..." : "Simpan Perubahan"}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default EditNoteForm;

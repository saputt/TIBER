import React from "react";
import Card from "../../components/atoms/Card";

const HowPage = () => {
  const howToWorks = [
    { name: "Mulai & Sesuaikan", desription: "Anda memulai dengan membuat akun dan mengisi survei singkat terkait pengobatan. Informasi ini membantu TIBER menyesuaikan pengingat dan tampilan sesuai kebutuhan Anda." },
    { name: "Catat Setiap Hari", desription: "Setiap hari, Anda cukup melakukan satu klik untuk mengonfirmasi minum obat. Prosesnya dibuat sederhana agar mudah dilakukan kapan saja tanpa mengganggu aktivitas Anda." },
    { name: "Pantau Perjalanan", desription: "TIBER membantu Anda melihat perjalanan pengobatan melalui tampilan progres yang jelas dan menenangkan, sehingga Anda selalu tahu posisi Anda tanpa merasa terburu-buru." },
    { name: "Jaga Konsistensi", desription: "Melalui streak dan riwayat aktivitas, TIBER membantu Anda membangun kebiasaan secara perlahan. Tidak ada tekanan — yang penting Anda terus melangkah." },
    { name: "Ingat Jadwal Kontrol", desription: "TIBER akan mengingatkan Anda tentang jadwal kontrol ke dokter, agar Anda dapat mempersiapkan diri dengan tenang tanpa perlu mengingat semuanya sendiri." },
    { name: "Jalani Satu Hari Demi Satu Hari", desription: "TIBER hadir untuk menemani Anda menjalani pengobatan secara bertahap, dengan pendekatan yang ramah, sederhana, dan tidak menghakimi." },
  ];

  return (
    <div className="min-h-dvh">
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 items-center gap-8">
        {howToWorks.map((work, index) => (
          <Card variant="whiteNoBorder" size="full" boxShadowActive="true" className="py-3.5 flex flex-col gap-2 max-w-74 md:max-w-full min-h-40" key={work.name}>
            <span className="font-inter font-semibold text-h4 text-black">{index + 1}. {work.name}</span>
            <span className="font-inter text-h5 text-justify">{work.desription}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HowPage;

import React from "react";
import Card from "../../components/atoms/Card";

const AboutPage = () => {
  const aboutTiber = [
    { name: "Apa itu TIBER?", desription: "TIBER adalah sistem pendamping pengobatan TBC berbasis web mobile-first yang membantu pengguna mencatat konsumsi obat harian, melihat progres pengobatan, dan mengingat jadwal kontrol secara sederhana. TIBER dirancang sebagai pendamping non-medis yang fokus pada kenyamanan dan kemudahan penggunaan dalam aktivitas sehari-hari." },
    { name: "Latar Belakang", desription: "Pengobatan TBC memerlukan waktu panjang dan konsistensi tinggi. Banyak pasien mengalami kelelahan psikologis karena proses yang berulang dan minim umpan balik. Pencatatan manual dan pengingat informal sering kali tidak cukup membantu membangun kebiasaan jangka panjang secara berkelanjutan." },
    { name: "Tujuan TIBER", desription: "TIBER bertujuan membantu pengguna menjaga konsistensi pengobatan melalui pencatatan satu klik, visualisasi perjalanan pengobatan, dan pengingat terstruktur. Sistem ini membantu pengguna memahami progres tanpa memberikan tekanan atau rasa diawasi." },
    { name: "Pendekatan Desain", desription: "TIBER dirancang dengan pendekatan user-centered, sederhana, dan menenangkan. Bahasa yang digunakan bersifat suportif, visual dibuat bersih dan lembut, serta interaksi dirancang agar tidak memaksa. Fokus utama adalah membangun kebiasaan secara perlahan dan berkelanjutan." },
    { name: "Fitur Utama", desription: "Fitur utama TIBER meliputi konfirmasi minum obat harian, streak konsistensi, visualisasi perjalanan 6 bulan, pengingat kontrol ke dokter, serta riwayat aktivitas dalam bentuk kalender. Seluruh fitur dirancang untuk meminimalkan hambatan penggunaan." },
    { name: "Posisi TIBER", desription: "TIBER tidak menggantikan peran tenaga medis dan tidak memberikan keputusan medis. TIBER berperan sebagai alat pendukung perilaku yang membantu pengguna tetap terhubung dengan rutinitas pengobatan dalam kehidupan sehari-hari." },
    { name: "Nilai Utama", desription: "TIBER menekankan bahwa konsistensi tidak harus sempurna. Setiap hari yang tercatat adalah langkah kecil yang berarti. Dengan pendekatan yang ramah dan tidak menghakimi, TIBER hadir untuk menemani perjalanan pengobatan satu hari demi satu hari." },
  ];

  return (
    <div className="min-h-dvh">
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 items-center gap-8">
        {aboutTiber.map(about => (
          <Card variant="whiteNoBorder" size="full" boxShadowActive="true" className="py-3.5 flex flex-col gap-2 max-w-74 md:max-w-full sm:min-h-50.25 md:min-h-44 lg:min-h-50.25" key={about.name}>
            <span className="font-inter font-semibold text-h4 text-black">{about.name}</span>
            <span className="font-inter text-h5 text-justify">{about.desription}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
